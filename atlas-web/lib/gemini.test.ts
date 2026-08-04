import test from "node:test";
import assert from "node:assert/strict";

import { chamarGemini, GeminiQuotaError, comUmaRetentativa } from "./gemini.ts";

function respostaFalsa(status: number, corpo: string): Response {
  return new Response(corpo, { status });
}

test("chamarGemini extrai o retryDelay estruturado (error.details[].retryDelay) de um 429", async () => {
  process.env.GEMINI_API_KEY = "chave-de-teste";
  const corpoErro = JSON.stringify({
    error: {
      code: 429,
      message: "Resource has been exhausted",
      status: "RESOURCE_EXHAUSTED",
      details: [{ "@type": "type.googleapis.com/google.rpc.RetryInfo", retryDelay: "56s" }],
    },
  });

  const originalFetch = global.fetch;
  global.fetch = (async () => respostaFalsa(429, corpoErro)) as typeof fetch;

  try {
    await assert.rejects(
      () => chamarGemini("prompt", {}),
      (erro: unknown) => {
        assert.ok(erro instanceof GeminiQuotaError);
        assert.equal((erro as GeminiQuotaError).retryDelaySegundos, 58); // 56 + margem de 2s
        return true;
      }
    );
  } finally {
    global.fetch = originalFetch;
  }
});

test('chamarGemini cai no fallback de regex quando o retryDelay só existe em texto livre ("retry in Ns")', async () => {
  process.env.GEMINI_API_KEY = "chave-de-teste";
  const corpoErro = "Quota exceeded. Please retry in 12.5s.";

  const originalFetch = global.fetch;
  global.fetch = (async () => respostaFalsa(429, corpoErro)) as typeof fetch;

  try {
    await assert.rejects(
      () => chamarGemini("prompt", {}),
      (erro: unknown) => {
        assert.ok(erro instanceof GeminiQuotaError);
        assert.equal((erro as GeminiQuotaError).retryDelaySegundos, 14.5); // 12.5 + margem de 2s
        return true;
      }
    );
  } finally {
    global.fetch = originalFetch;
  }
});

test("chamarGemini usa um delay padrão quando o 429 não traz nenhum retryDelay reconhecível", async () => {
  process.env.GEMINI_API_KEY = "chave-de-teste";

  const originalFetch = global.fetch;
  global.fetch = (async () => respostaFalsa(429, "erro sem retry delay")) as typeof fetch;

  try {
    await assert.rejects(
      () => chamarGemini("prompt", {}),
      (erro: unknown) => {
        assert.ok(erro instanceof GeminiQuotaError);
        assert.equal((erro as GeminiQuotaError).retryDelaySegundos, 32); // padrão de 30s + margem de 2s
        return true;
      }
    );
  } finally {
    global.fetch = originalFetch;
  }
});

test("comUmaRetentativa não insiste na hora quando o erro é de quota (GeminiQuotaError)", async () => {
  let chamadas = 0;
  const resultado = await comUmaRetentativa(async () => {
    chamadas++;
    throw new GeminiQuotaError("quota excedida", 30);
  });

  assert.equal(chamadas, 1);
  assert.equal(resultado.ok, false);
  if (!resultado.ok) {
    assert.ok(resultado.erro instanceof GeminiQuotaError);
    assert.equal(resultado.tentativas, 1);
  }
});

test("comUmaRetentativa tenta mais uma vez pra erros que não são de quota", async () => {
  let chamadas = 0;
  const resultado = await comUmaRetentativa(async () => {
    chamadas++;
    if (chamadas === 1) throw new Error("falha transitória");
    return "ok";
  });

  assert.equal(chamadas, 2);
  assert.equal(resultado.ok, true);
  if (resultado.ok) assert.equal(resultado.valor, "ok");
});
