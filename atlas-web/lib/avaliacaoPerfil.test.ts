import test from "node:test";
import assert from "node:assert/strict";

import { avaliarMedicamento, filtrosPerfilIniciais, type FiltrosPerfil } from "./avaliacaoPerfil.ts";
import type { Medicamento } from "../data/types.ts";

function medicamentoFixture(overrides: Partial<Medicamento>): Medicamento {
  return {
    id: "fixture",
    nome: "Fixture",
    classe: "Teste",
    mecanismo: "",
    posologias: [],
    indicacoes: [],
    vantagens: [],
    desvantagens: [],
    ganhoPeso: "Moderado",
    sedacao: "Moderada",
    sexual: "Moderada",
    qt: "Moderado",
    gravidez: "",
    lactacao: "",
    renal: "",
    hepatica: "",
    observacoes: "",
    ...overrides,
  };
}

function filtros(overrides: Partial<FiltrosPerfil>): FiltrosPerfil {
  return { ...filtrosPerfilIniciais, ...overrides };
}

test("sem nenhum filtro ativo, nao pontua nem gera alertas", () => {
  const m = medicamentoFixture({ ganhoPeso: "Muito alto" });
  const resultado = avaliarMedicamento(m, filtrosPerfilIniciais);

  assert.equal(resultado.pontos, 0);
  assert.deepEqual(resultado.positivos, []);
  assert.deepEqual(resultado.alertas, []);
});

test("eixo simples: baixo soma ponto e alto penaliza com alerta", () => {
  const baixo = avaliarMedicamento(
    medicamentoFixture({ ganhoPeso: "Baixo" }),
    filtros({ evitarGanhoPeso: true })
  );
  assert.equal(baixo.pontos, 1);
  assert.equal(baixo.positivos.length, 1);
  assert.equal(baixo.alertas.length, 0);

  const alto = avaliarMedicamento(
    medicamentoFixture({ ganhoPeso: "Muito alto" }),
    filtros({ evitarGanhoPeso: true })
  );
  assert.equal(alto.pontos, -1);
  assert.equal(alto.positivos.length, 0);
  assert.equal(alto.alertas.length, 1);
});

test("gestante: categoria 'evitar' penaliza -2 pontos (mais que qualquer outro eixo)", () => {
  const resultado = avaliarMedicamento(
    medicamentoFixture({ gravidezCategoria: "evitar" }),
    filtros({ gestante: true })
  );

  assert.equal(resultado.pontos, -2);
  assert.equal(resultado.alertas.length, 1);
});

test("gestante: categoria 'cautela' gera alerta mas nao muda a pontuacao", () => {
  const resultado = avaliarMedicamento(
    medicamentoFixture({ gravidezCategoria: "cautela" }),
    filtros({ gestante: true })
  );

  assert.equal(resultado.pontos, 0);
  assert.equal(resultado.alertas.length, 1);
});

test("gestante: categoria 'preferencial' soma ponto", () => {
  const resultado = avaliarMedicamento(
    medicamentoFixture({ gravidezCategoria: "preferencial" }),
    filtros({ gestante: true })
  );

  assert.equal(resultado.pontos, 1);
  assert.equal(resultado.positivos.length, 1);
});

test("lactante: categoria 'evitar' penaliza -2 pontos, igual gestante", () => {
  const resultado = avaliarMedicamento(
    medicamentoFixture({ lactacaoCategoria: "evitar" }),
    filtros({ lactante: true })
  );

  assert.equal(resultado.pontos, -2);
});

test("filtro ativo mas campo opcional ausente no medicamento: nao pontua nem quebra", () => {
  const resultado = avaliarMedicamento(
    medicamentoFixture({ sintomasExtrapiramidais: undefined }),
    filtros({ evitarEps: true })
  );

  assert.equal(resultado.pontos, 0);
  assert.deepEqual(resultado.alertas, []);
});

test("ajusteRenalNecessario false soma ponto quando o filtro esta ativo", () => {
  const resultado = avaliarMedicamento(
    medicamentoFixture({ ajusteRenalNecessario: false }),
    filtros({ evitarAjusteRenal: true })
  );

  assert.equal(resultado.pontos, 1);
  assert.equal(resultado.positivos.length, 1);
});

test("multiplos filtros ativos somam/subtraem independentemente", () => {
  const resultado = avaliarMedicamento(
    medicamentoFixture({
      ganhoPeso: "Baixo",
      sedacao: "Muito alta",
      gravidezCategoria: "evitar",
    }),
    filtros({ evitarGanhoPeso: true, evitarSedacao: true, gestante: true })
  );

  // +1 (ganho de peso baixo) -1 (sedacao alta) -2 (evitar na gravidez) = -2
  assert.equal(resultado.pontos, -2);
  assert.equal(resultado.positivos.length, 1);
  assert.equal(resultado.alertas.length, 2);
});
