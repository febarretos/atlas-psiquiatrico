import test from "node:test";
import assert from "node:assert/strict";

import { casoSimuladorGeradoSchema } from "./simuladorGeradoSchema.ts";
import { voJardim } from "../data/simulador/vo-jardim.ts";
import { oTeoremaDasAntenasDoSeuVanderlei } from "../data/simulador/o-teorema-das-antenas-do-seu-vanderlei.ts";
import { casoBorderlineAltaFuncionalidade } from "../data/simulador/caso-borderline-alta-funcionalidade.ts";
import { casoPanicoRezadeira } from "../data/simulador/caso-panico-rezadeira.ts";
import { medicamentos } from "../data/medicamentos/index.ts";
import { diagnosticos } from "../data/diagnosticos/index.ts";
import type { CasoSimulador } from "../data/simulador/types.ts";

function testarCasoSimulador(apelido: string, caso: CasoSimulador) {
  test(`${caso.id}: passa na validação de integridade da árvore`, () => {
    const resultado = casoSimuladorGeradoSchema.safeParse(caso);

    if (!resultado.success) {
      console.error(resultado.error.issues);
    }

    assert.equal(resultado.success, true);
  });

  test(`${caso.id}: diagnosticoRealId referencia um diagnóstico que existe de verdade`, () => {
    const existe = diagnosticos.some((d) => d.id === caso.diagnosticoRealId);
    assert.equal(existe, true);
  });

  test(`${caso.id}: todo medicamentoId referenciado existe no módulo Medicamentos`, () => {
    const idsMedicamentos = new Set(medicamentos.map((m) => m.id));

    for (const no of caso.nos) {
      for (const opcao of no.opcoes) {
        if (opcao.medicamentoId) {
          assert.ok(
            idsMedicamentos.has(opcao.medicamentoId),
            `medicamentoId "${opcao.medicamentoId}" não existe no módulo Medicamentos`
          );
        }
      }
    }
  });
}

testarCasoSimulador("vô jardim", voJardim);
testarCasoSimulador("teorema das antenas (esquizofrenia)", oTeoremaDasAntenasDoSeuVanderlei);
testarCasoSimulador("borderline alta funcionalidade", casoBorderlineAltaFuncionalidade);
testarCasoSimulador("pânico rezadeira", casoPanicoRezadeira);

test("simuladorGeradoSchema: rejeita proximoNoId apontando pra nó inexistente", () => {
  const casoQuebrado = {
    id: "caso-quebrado",
    tituloAnedotico: "Teste",
    diagnosticoRealId: "depressao-maior",
    noInicialId: "a",
    nos: [
      {
        id: "a",
        turno: "entrevista",
        narrativa: "...",
        opcoes: [
          {
            texto: "opção",
            consequencia: "...",
            proximoNoId: "nao-existe",
            qualidadeDecisao: "ideal",
          },
        ],
      },
    ],
  };

  const resultado = casoSimuladorGeradoSchema.safeParse(casoQuebrado);
  assert.equal(resultado.success, false);
});

test("simuladorGeradoSchema: rejeita nó desfecho com opções (deveria ser terminal)", () => {
  const casoQuebrado = {
    id: "caso-quebrado-2",
    tituloAnedotico: "Teste",
    diagnosticoRealId: "depressao-maior",
    noInicialId: "a",
    nos: [
      {
        id: "a",
        turno: "desfecho",
        narrativa: "...",
        opcoes: [
          { texto: "x", consequencia: "y", proximoNoId: "a", qualidadeDecisao: "ideal" },
        ],
      },
      { id: "b", turno: "desfecho", narrativa: "...", opcoes: [] },
      { id: "c", turno: "desfecho", narrativa: "...", opcoes: [] },
    ],
  };

  const resultado = casoSimuladorGeradoSchema.safeParse(casoQuebrado);
  assert.equal(resultado.success, false);
});

test("simuladorGeradoSchema: rejeita nó inalcançável a partir do nó inicial", () => {
  const casoQuebrado = {
    id: "caso-quebrado-3",
    tituloAnedotico: "Teste",
    diagnosticoRealId: "depressao-maior",
    noInicialId: "a",
    nos: [
      {
        id: "a",
        turno: "entrevista",
        narrativa: "...",
        opcoes: [
          { texto: "x", consequencia: "y", proximoNoId: "desfecho", qualidadeDecisao: "ideal" },
        ],
      },
      { id: "desfecho", turno: "desfecho", narrativa: "...", opcoes: [] },
      // Nó órfão — nada aponta pra ele (tem sua própria opção válida, pra
      // isolar a falha em "inalcançável", não em "sem opções").
      {
        id: "orfao",
        turno: "conduta",
        narrativa: "...",
        opcoes: [{ texto: "x", consequencia: "y", proximoNoId: "desfecho", qualidadeDecisao: "ideal" }],
      },
    ],
  };

  const resultado = casoSimuladorGeradoSchema.safeParse(casoQuebrado);
  assert.equal(resultado.success, false);
});
