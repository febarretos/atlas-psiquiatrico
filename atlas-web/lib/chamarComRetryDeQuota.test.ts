import test from "node:test";
import assert from "node:assert/strict";

import { chamarComRetryDeQuota } from "./chamarComRetryDeQuota.ts";

function respostaQuota(retryDelaySegundos: number): Response {
  return new Response(
    JSON.stringify({ tipo: "quota", mensagem: "quota excedida", retryDelaySegundos }),
    { status: 429 }
  );
}

function respostaOk(corpo: unknown): Response {
  return new Response(JSON.stringify(corpo), { status: 200 });
}

test("chamarComRetryDeQuota espera o tempo sugerido e tenta de novo uma única vez após 429 de quota", async () => {
  let chamadas = 0;
  const fazerRequisicao = async () => {
    chamadas++;
    return chamadas === 1 ? respostaQuota(2) : respostaOk({ ok: true });
  };

  const contagens: (number | null)[] = [];
  const resultado = await chamarComRetryDeQuota(fazerRequisicao, (s) => contagens.push(s));

  assert.equal(chamadas, 2);
  assert.equal(resultado.resposta.status, 200);
  assert.deepEqual(resultado.dados, { ok: true });
  assert.deepEqual(contagens, [2, 1, null]);
});

test("chamarComRetryDeQuota não espera quando a resposta não é 429 de quota", async () => {
  let chamadas = 0;
  const fazerRequisicao = async () => {
    chamadas++;
    return respostaOk({ ok: true });
  };

  const contagens: (number | null)[] = [];
  const resultado = await chamarComRetryDeQuota(fazerRequisicao, (s) => contagens.push(s));

  assert.equal(chamadas, 1);
  assert.deepEqual(contagens, []);
  assert.equal(resultado.resposta.status, 200);
});

test("chamarComRetryDeQuota só tenta de novo uma vez, mesmo se o retry também vier com 429 de quota", async () => {
  let chamadas = 0;
  const fazerRequisicao = async () => {
    chamadas++;
    return respostaQuota(1);
  };

  const resultado = await chamarComRetryDeQuota(fazerRequisicao, () => {});

  assert.equal(chamadas, 2);
  assert.equal(resultado.resposta.status, 429);
});
