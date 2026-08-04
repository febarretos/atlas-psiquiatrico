// Cliente HTTP compartilhado pra API do Gemini — usado por
// app/api/gerar-caso e app/api/avaliar-resposta-livre. Centralizado aqui
// pra manter o nome do modelo e o tratamento de erro 429 (quota)
// consistentes nas duas rotas.

// gemini-2.5-flash foi descontinuado para novas chaves de API (erro 404) —
// gemini-3.6-flash é o modelo estável recomendado atualmente para uso
// geral (ai.google.dev/gemini-api/docs/models, checado em ago/2026).
// Dá pra trocar por uma variante "-flash-lite" (menor custo, geralmente
// limite de requisições mais alto no tier gratuito) via variável de
// ambiente GEMINI_MODEL, sem mexer em código — confira em
// aistudio.google.com/rate-limit quais modelos sua chave realmente tem
// acesso antes de trocar, pra não repetir o 404 que o 2.5-flash deu.
const MODELO = process.env.GEMINI_MODEL || "gemini-3.6-flash";

function endpointDoModelo(): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent`;
}

// Erro específico pra 429 (RESOURCE_EXHAUSTED) — carrega o tempo de
// espera sugerido pela própria API do Gemini. As rotas devolvem isso
// direto pro cliente em vez de tentar de novo na hora: uma função
// serverless não deveria dormir dezenas de segundos (risco real de
// estourar o timeout da plataforma) — quem espera com um contador visível
// é o navegador (ver lib/chamarComRetryDeQuota.ts).
export class GeminiQuotaError extends Error {
  retryDelaySegundos: number;

  constructor(message: string, retryDelaySegundos: number) {
    super(message);
    this.name = "GeminiQuotaError";
    this.retryDelaySegundos = retryDelaySegundos;
  }
}

const RETRY_DELAY_PADRAO_SEGUNDOS = 30;
const MARGEM_SEGUNDOS = 2;

// A API do Gemini indica o tempo de espera sugerido de duas formas: um
// campo estruturado error.details[].retryDelay (ex.: "56s") ou, em texto
// livre, embutido na mensagem de erro (ex.: "Please retry in 56.99s").
// Tenta o campo estruturado primeiro, cai pro texto se não achar.
function extrairRetryDelaySegundos(corpoTexto: string): number | null {
  try {
    const corpo = JSON.parse(corpoTexto) as {
      error?: { details?: { ["@type"]?: string; retryDelay?: string }[] };
    };
    const retryInfo = corpo.error?.details?.find((d) => d["@type"]?.includes("RetryInfo"));
    const bruto = retryInfo?.retryDelay;
    if (typeof bruto === "string") {
      const match = bruto.match(/([\d.]+)\s*s/);
      if (match) return parseFloat(match[1]);
    }
  } catch {
    // corpo não é JSON válido — cai no fallback de regex abaixo.
  }

  const match = corpoTexto.match(/retry in\s+([\d.]+)\s*s/i);
  return match ? parseFloat(match[1]) : null;
}

export async function chamarGemini(prompt: string, schema: unknown): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não configurada no servidor.");
  }

  const resposta = await fetch(endpointDoModelo(), {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    }),
  });

  if (!resposta.ok) {
    const corpo = await resposta.text().catch(() => "");

    if (resposta.status === 429) {
      const delay = extrairRetryDelaySegundos(corpo) ?? RETRY_DELAY_PADRAO_SEGUNDOS;
      throw new GeminiQuotaError(
        `Gemini API retornou 429 (quota excedida): ${corpo.slice(0, 300)}`,
        delay + MARGEM_SEGUNDOS
      );
    }

    throw new Error(`Gemini API retornou ${resposta.status}: ${corpo.slice(0, 500)}`);
  }

  const dados = await resposta.json();
  const texto = dados?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (typeof texto !== "string") {
    throw new Error("Resposta da Gemini API não contém texto esperado.");
  }

  return texto;
}

export function extrairJson(texto: string): unknown {
  // responseMimeType já pede JSON puro, mas trata o caso de vir envolvido
  // em ```json de qualquer forma, por robustez.
  const limpo = texto
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "");

  return JSON.parse(limpo);
}

type ResultadoGeracao<T> =
  | { ok: true; valor: T }
  | { ok: false; erro: unknown; tentativas: number };

// Tenta `gerar()` uma vez; se falhar por quota (429), não insiste na
// hora — gastar outra tentativa contra a mesma janela de limite não
// resolve nada. Pra qualquer outro erro (rede, JSON malformado,
// validação zod) tenta mais uma vez antes de desistir, como antes.
export async function comUmaRetentativa<T>(gerar: () => Promise<T>): Promise<ResultadoGeracao<T>> {
  try {
    return { ok: true, valor: await gerar() };
  } catch (primeiroErro) {
    if (primeiroErro instanceof GeminiQuotaError) {
      return { ok: false, erro: primeiroErro, tentativas: 1 };
    }

    try {
      return { ok: true, valor: await gerar() };
    } catch (segundoErro) {
      return { ok: false, erro: segundoErro, tentativas: 2 };
    }
  }
}

export interface RespostaQuotaExcedida {
  tipo: "quota";
  mensagem: string;
  retryDelaySegundos: number;
}

export interface RespostaDeErro {
  status: number;
  corpo: RespostaQuotaExcedida | { erro: string };
}

// Monta o status HTTP + corpo pra uma falha de geração, a partir do
// resultado de comUmaRetentativa — usado igual nas duas rotas que chamam
// o Gemini. Devolve dados simples (não NextResponse) pra este módulo
// continuar testável com `node --test` puro, sem depender do resolver de
// módulos do Next; as rotas chamam NextResponse.json(corpo, { status }).
export function respostaDeFalha(
  resultado: { ok: false; erro: unknown; tentativas: number },
  contexto: string
): RespostaDeErro {
  if (resultado.erro instanceof GeminiQuotaError) {
    return {
      status: 429,
      corpo: {
        tipo: "quota",
        mensagem: resultado.erro.message,
        retryDelaySegundos: resultado.erro.retryDelaySegundos,
      },
    };
  }

  const mensagem = resultado.erro instanceof Error ? resultado.erro.message : "Erro desconhecido";
  console.error(`${contexto} (${resultado.tentativas} tentativa(s)):`, resultado.erro);
  return { status: 502, corpo: { erro: `${contexto}: ${mensagem}` } };
}
