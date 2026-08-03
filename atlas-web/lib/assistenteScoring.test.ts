import test from "node:test";
import assert from "node:assert/strict";

import {
  calcularCandidatosDiagnostico,
  calcularDiscriminacao,
  type EstadoSintoma,
} from "./assistenteScoring.ts";
import type { Diagnostico } from "../data/diagnosticos/types.ts";

// Fixtures deliberadamente independentes do conteúdo real de
// data/diagnosticos — os pesos abaixo reproduzem os dois casos usados para
// calibrar o multiplicador de penalidade (1.5x) durante o design original
// (TEPT: pesoTotal 11; Depressão Maior: pesoTotal 16), para que o teste
// continue válido mesmo se o conteúdo real mudar.
function diagnosticoFixture(overrides: Partial<Diagnostico>): Diagnostico {
  return {
    id: "fixture",
    nome: "Fixture",
    categoria: "Teste",
    descricao: "",
    criteriosDiagnosticos: [],
    diagnosticoDiferencial: [],
    tratamentoPrimeiraLinha: [],
    ...overrides,
  };
}

const tept = diagnosticoFixture({
  id: "tept-fixture",
  nome: "TEPT (fixture)",
  sintomasChave: [
    { id: "reexperienciacao", peso: 3 },
    { id: "hipervigilancia", peso: 2 },
    { id: "evitacao-lembretes-trauma", peso: 2 },
    { id: "exposicao-estressor", peso: 2 },
    { id: "irritabilidade", peso: 1 },
    { id: "insonia", peso: 1 },
  ],
});

const depressaoMaior = diagnosticoFixture({
  id: "depressao-fixture",
  nome: "Depressão Maior (fixture)",
  sintomasChave: [
    { id: "humor-deprimido", peso: 3 },
    { id: "anedonia", peso: 3 },
    { id: "fadiga", peso: 2 },
    { id: "insonia", peso: 1 },
    { id: "culpa-inutilidade", peso: 2 },
    { id: "dificuldade-concentracao", peso: 2 },
    { id: "perda-peso-significativa", peso: 1 },
    { id: "retardo-psicomotor", peso: 2 },
  ],
});

const ajustamento = diagnosticoFixture({
  id: "ajustamento-fixture",
  nome: "Transtorno de Ajustamento (fixture)",
  sintomasChave: [
    { id: "exposicao-estressor", peso: 3 },
    { id: "humor-deprimido", peso: 1 },
    { id: "ansiedade-excessiva", peso: 1 },
  ],
});

function marcados(entradas: [string, EstadoSintoma][]): Map<string, EstadoSintoma> {
  return new Map(entradas);
}

test("descartar um sintoma quase-patognomônico (peso 3) derruba o candidato para perto de 0%", () => {
  const [candidato] = calcularCandidatosDiagnostico(
    [tept],
    marcados([
      ["hipervigilancia", "presente"],
      ["evitacao-lembretes-trauma", "presente"],
      ["exposicao-estressor", "presente"],
      ["reexperienciacao", "ausente"],
    ])
  );

  // (2+2+2 - 1.5*3) / 11 = 1.5/11 ≈ 0.136 — mesmo valor observado no
  // navegador (14% arredondado) durante a verificação manual da feature.
  assert.ok(Math.abs(candidato.scoreBruto - 1.5 / 11) < 1e-9);
  assert.equal(Math.round(candidato.score * 100), 14);
  assert.equal(candidato.matchedCount, 3);
  assert.deepEqual(candidato.descartadosRotulos, [
    "Revivência de evento traumático (flashbacks, pesadelos)",
  ]);
});

test("descartar um sintoma pouco específico (peso 1) não elimina um candidato bem sustentado", () => {
  const [candidato] = calcularCandidatosDiagnostico(
    [depressaoMaior],
    marcados([
      ["humor-deprimido", "presente"],
      ["anedonia", "presente"],
      ["insonia", "ausente"],
    ])
  );

  // (3+3 - 1.5*1) / 16 = 4.5/16 = 0.28125
  assert.ok(Math.abs(candidato.scoreBruto - 4.5 / 16) < 1e-9);
  assert.equal(Math.round(candidato.score * 100), 28);
  assert.ok(candidato.score > 0, "candidato não deveria ser zerado por um sintoma de baixo peso");
});

test("score é clampado em 0 para exibição mas o desempate usa o scoreBruto negativo", () => {
  const candidatos = calcularCandidatosDiagnostico(
    [tept, ajustamento],
    marcados([
      // Cada candidato tem 1 sintoma próprio presente (peso 1) e 1 próprio
      // ausente — ajustamento: (1 - 1.5*1)/5 = -0.1; TEPT: (1 - 1.5*3)/11
      // ≈ -0.318. Ambos ficam negativos (score exibido clampado em 0%),
      // mas o ajustamento tem o scoreBruto menos negativo.
      ["ansiedade-excessiva", "presente"],
      ["humor-deprimido", "ausente"],
      ["insonia", "presente"],
      ["reexperienciacao", "ausente"],
    ])
  );

  const [primeiro, segundo] = candidatos;
  assert.equal(primeiro.diagnostico.id, "ajustamento-fixture");
  assert.equal(segundo.diagnostico.id, "tept-fixture");
  assert.equal(primeiro.score, 0);
  assert.equal(segundo.score, 0); // ambos clampados em 0% exibido
  assert.ok(primeiro.scoreBruto > segundo.scoreBruto); // mas a ordem real é preservada
});

test("candidato sem nenhum sintoma presente não aparece, mesmo com sintomas ausentes marcados", () => {
  const candidatos = calcularCandidatosDiagnostico(
    [depressaoMaior],
    marcados([["insonia", "ausente"]])
  );

  assert.equal(candidatos.length, 0);
});

test("nenhum sintoma marcado retorna lista vazia sem lançar erro", () => {
  assert.deepEqual(calcularCandidatosDiagnostico([tept, depressaoMaior], new Map()), []);
});

test("discriminação retorna sintomas exclusivos de cada lado, ordenados por peso, excluindo já avaliados", () => {
  const d = calcularDiscriminacao(tept, ajustamento, marcados([["humor-deprimido", "presente"]]));

  // exposicao-estressor é comum aos dois — não deve aparecer em nenhum lado.
  assert.ok(!d.soA.some((s) => s.id === "exposicao-estressor"));
  assert.ok(!d.soB.some((s) => s.id === "exposicao-estressor"));

  // humor-deprimido já foi avaliado (presente) — não deve mais aparecer
  // como pergunta discriminadora do lado do ajustamento.
  assert.ok(!d.soB.some((s) => s.id === "humor-deprimido"));

  // reexperienciacao (peso 3) é exclusivo do TEPT e ainda não avaliado —
  // deve vir primeiro (maior peso).
  assert.equal(d.soA[0]?.id, "reexperienciacao");
});

test("discriminação não quebra quando um dos candidatos não tem sintomasChave", () => {
  const semChave = diagnosticoFixture({ id: "sem-chave" });
  const d = calcularDiscriminacao(tept, semChave, new Map());

  assert.equal(d.soB.length, 0);
  assert.ok(d.soA.length > 0);
});
