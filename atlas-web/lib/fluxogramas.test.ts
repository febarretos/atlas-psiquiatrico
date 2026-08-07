import test from "node:test";
import assert from "node:assert/strict";

import { fluxogramas } from "../data/fluxogramas/index.ts";
import type { Fluxograma } from "../data/fluxogramas/types.ts";
import { medicamentos } from "../data/medicamentos/index.ts";
import { escalas } from "../data/escalas/index.ts";
import { diagnosticos } from "../data/diagnosticos/index.ts";
import { validarIntegridadeFluxograma } from "./validarFluxograma.ts";

const contexto = {
  idsMedicamentos: new Set(medicamentos.map((m) => m.id)),
  idsEscalas: new Set(escalas.map((e) => e.id)),
  idsDiagnosticos: new Set(diagnosticos.map((d) => d.id)),
};

// ─────────────────────────────────────────────────────────────
// Cada fluxograma real precisa passar sem nenhum problema
// ─────────────────────────────────────────────────────────────
for (const fluxograma of fluxogramas) {
  test(`${fluxograma.id}: passa na validação de integridade do grafo`, () => {
    const problemas = validarIntegridadeFluxograma(fluxograma, contexto);
    assert.deepEqual(problemas, [], problemas.join("\n"));
  });
}

test("data/fluxogramas/index.ts: não há id de fluxograma duplicado", () => {
  const ids = fluxogramas.map((f) => f.id);
  assert.equal(new Set(ids).size, ids.length, "há pelo menos um id de fluxograma repetido");
});

// ─────────────────────────────────────────────────────────────
// Prova de que o validador realmente pega cada classe de problema —
// mesmo padrão usado em simuladorGeradoSchema.test.ts (fixture quebrada
// de propósito, passada pelo validador real, não uma reimplementação
// paralela da checagem).
// ─────────────────────────────────────────────────────────────

const fluxogramaBase: Fluxograma = {
  id: "teste",
  titulo: "Teste",
  categoria: "Teste",
  descricao: "Teste",
  nodeInicialId: "a",
  nodes: [
    { id: "a", tipo: "pergunta", texto: "...", opcoes: [{ label: "ok", proximoNodeId: "b" }] },
    { id: "b", tipo: "conduta", nivel: "rotina", texto: "..." },
  ],
};

test("validarIntegridadeFluxograma: um fluxograma bem formado não gera problema nenhum", () => {
  const problemas = validarIntegridadeFluxograma(fluxogramaBase, contexto);
  assert.deepEqual(problemas, []);
});

test("validarIntegridadeFluxograma: pega nodeInicialId que não existe", () => {
  const quebrado: Fluxograma = { ...fluxogramaBase, nodeInicialId: "nao-existe" };
  const problemas = validarIntegridadeFluxograma(quebrado, contexto);
  assert.ok(problemas.some((p) => p.includes("nodeInicialId")));
});

test("validarIntegridadeFluxograma: pega id de node duplicado", () => {
  const quebrado: Fluxograma = {
    ...fluxogramaBase,
    nodes: [...fluxogramaBase.nodes, { id: "a", tipo: "conduta", texto: "duplicado" }],
  };
  const problemas = validarIntegridadeFluxograma(quebrado, contexto);
  assert.ok(problemas.some((p) => p.includes("duplicado")));
});

test("validarIntegridadeFluxograma: pega proximoNodeId apontando pra node inexistente", () => {
  const quebrado: Fluxograma = {
    ...fluxogramaBase,
    nodes: [
      { id: "a", tipo: "pergunta", texto: "...", opcoes: [{ label: "ok", proximoNodeId: "fantasma" }] },
    ],
    nodeInicialId: "a",
  };
  const problemas = validarIntegridadeFluxograma(quebrado, contexto);
  assert.ok(problemas.some((p) => p.includes("fantasma")));
});

test("validarIntegridadeFluxograma: pega node inalcançável a partir do nodeInicialId", () => {
  const quebrado: Fluxograma = {
    ...fluxogramaBase,
    nodes: [
      { id: "a", tipo: "conduta", texto: "..." },
      { id: "orfao", tipo: "conduta", texto: "ninguém aponta pra mim" },
    ],
    nodeInicialId: "a",
  };
  const problemas = validarIntegridadeFluxograma(quebrado, contexto);
  assert.ok(problemas.some((p) => p.includes("inalcançável") && p.includes("orfao")));
});

test("validarIntegridadeFluxograma: pega node \"pergunta\" sem opções (beco sem saída)", () => {
  const quebrado: Fluxograma = {
    ...fluxogramaBase,
    nodes: [{ id: "a", tipo: "pergunta", texto: "pergunta sem resposta possível" }],
    nodeInicialId: "a",
  };
  const problemas = validarIntegridadeFluxograma(quebrado, contexto);
  assert.ok(problemas.some((p) => p.includes("beco sem saída")));
});

test("validarIntegridadeFluxograma: pega medicamentosRelacionados com id inexistente", () => {
  const quebrado: Fluxograma = {
    ...fluxogramaBase,
    nodes: [
      { id: "a", tipo: "conduta", texto: "...", medicamentosRelacionados: ["remedio-que-nao-existe"] },
    ],
    nodeInicialId: "a",
  };
  const problemas = validarIntegridadeFluxograma(quebrado, contexto);
  assert.ok(problemas.some((p) => p.includes("medicamentosRelacionados")));
});

test("validarIntegridadeFluxograma: pega escalasRelacionadas com id inexistente", () => {
  const quebrado: Fluxograma = {
    ...fluxogramaBase,
    nodes: [{ id: "a", tipo: "conduta", texto: "...", escalasRelacionadas: ["escala-fantasma"] }],
    nodeInicialId: "a",
  };
  const problemas = validarIntegridadeFluxograma(quebrado, contexto);
  assert.ok(problemas.some((p) => p.includes("escalasRelacionadas")));
});

test("validarIntegridadeFluxograma: pega diagnosticosRelacionados com id inexistente", () => {
  const quebrado: Fluxograma = {
    ...fluxogramaBase,
    nodes: [{ id: "a", tipo: "conduta", texto: "...", diagnosticosRelacionados: ["diagnostico-fantasma"] }],
    nodeInicialId: "a",
  };
  const problemas = validarIntegridadeFluxograma(quebrado, contexto);
  assert.ok(problemas.some((p) => p.includes("diagnosticosRelacionados")));
});
