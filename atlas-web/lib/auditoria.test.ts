import test from "node:test";
import assert from "node:assert/strict";

import { auditarIntegridade } from "./auditoria.ts";

// Checagem de referências cruzadas entre módulos de conteúdo real —
// mesma função usada antes pela página /auditoria (removida: nenhum link
// de entrada em lugar nenhum do app, e o teste automatizado cobre a mesma
// verificação sem depender de alguém abrir a página manualmente).
test("auditarIntegridade: nenhum problema de referência cruzada no conteúdo real", () => {
  const problemas = auditarIntegridade();
  assert.deepEqual(
    problemas,
    [],
    problemas.map((p) => `[${p.categoria}] ${p.descricao}`).join("\n")
  );
});
