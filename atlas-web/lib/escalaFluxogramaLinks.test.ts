import test from "node:test";
import assert from "node:assert/strict";

import { vinculosEscalaFluxograma } from "./escalaFluxogramaLinks";
import { validarVinculoEscalaFluxograma } from "./validarVinculosEscalaFluxograma";
import { escalas } from "../data/escalas/index.ts";
import { fluxogramas } from "../data/fluxogramas/index.ts";
import type { Fluxograma } from "../data/fluxogramas/types.ts";

const contexto = {
  idsEscalas: new Set(escalas.map((e) => e.id)),
  fluxogramas,
};

// ─────────────────────────────────────────────────────────────
// Cada vínculo real precisa passar sem nenhum problema
// ─────────────────────────────────────────────────────────────
for (const vinculo of vinculosEscalaFluxograma) {
  test(`${vinculo.escalaId} → ${vinculo.fluxogramaId}#${vinculo.nodeId}: passa na validação`, () => {
    const problemas = validarVinculoEscalaFluxograma(vinculo, contexto);
    assert.deepEqual(problemas, [], problemas.join("\n"));
  });
}

// ─────────────────────────────────────────────────────────────
// Prova de que o validador pega cada classe de problema — mesmo padrão
// usado em lib/fluxogramas.test.ts (fixture quebrada de propósito, passada
// pelo validador real).
// ─────────────────────────────────────────────────────────────

const fluxogramaFicticio: Fluxograma = {
  id: "fluxograma-teste",
  titulo: "Teste",
  categoria: "Teste",
  descricao: "Teste",
  nodeInicialId: "a",
  nodes: [{ id: "a", tipo: "conduta", texto: "..." }],
};

const contextoTeste = {
  idsEscalas: new Set(["escala-teste"]),
  fluxogramas: [fluxogramaFicticio],
};

test("validarVinculoEscalaFluxograma: um vínculo bem formado não gera problema nenhum", () => {
  const problemas = validarVinculoEscalaFluxograma(
    { escalaId: "escala-teste", corFaixa: "red", fluxogramaId: "fluxograma-teste", nodeId: "a" },
    contextoTeste
  );
  assert.deepEqual(problemas, []);
});

test("validarVinculoEscalaFluxograma: pega escalaId que não existe", () => {
  const problemas = validarVinculoEscalaFluxograma(
    { escalaId: "escala-fantasma", corFaixa: "red", fluxogramaId: "fluxograma-teste", nodeId: "a" },
    contextoTeste
  );
  assert.ok(problemas.some((p) => p.includes("escalaId")));
});

test("validarVinculoEscalaFluxograma: pega fluxogramaId que não existe", () => {
  const problemas = validarVinculoEscalaFluxograma(
    { escalaId: "escala-teste", corFaixa: "red", fluxogramaId: "fluxograma-fantasma", nodeId: "a" },
    contextoTeste
  );
  assert.ok(problemas.some((p) => p.includes("fluxogramaId")));
});

test("validarVinculoEscalaFluxograma: pega nodeId que não existe dentro do fluxograma", () => {
  const problemas = validarVinculoEscalaFluxograma(
    { escalaId: "escala-teste", corFaixa: "red", fluxogramaId: "fluxograma-teste", nodeId: "fantasma" },
    contextoTeste
  );
  assert.ok(problemas.some((p) => p.includes("nodeId")));
});
