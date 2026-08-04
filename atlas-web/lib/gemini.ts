// Cliente HTTP compartilhado pra API do Gemini — usado por
// app/api/gerar-caso e app/api/avaliar-resposta-livre. Centralizado aqui
// pra manter a lista de modelos e o tratamento de erro 429 (quota)
// consistentes nas duas rotas.

// Cada modelo do Gemini tem sua PRÓPRIA cota gratuita — se um está com
// quota excedida (429) ou indisponível pra essa chave (404, comum em
// modelos descontinuados como o gemini-2.5-flash foi pra chaves novas),
// tentar o próximo da lista costuma resolver na hora, sem precisar
// esperar nada. Ordem: o mais atual primeiro, depois variantes mais
// baratas/antigas como rede de segurança.
// Configurável via variável de ambiente, sem mexer em código:
//   GEMINI_MODELS=modelo-a,modelo-b,modelo-c  (lista, nessa ordem)
//   GEMINI_MODEL=um-modelo-só                 (mantido por compatibilidade;
//                                               vira o primeiro da lista,
//                                               o resto do padrão continua
//                                               como rede de segurança)
// Confira em aistudio.google.com/rate-limit quais modelos sua chave
// realmente tem acesso (ai.google.dev/gemini-api/docs/models, checado em
// ago/2026).
const MODELOS_PADRAO = [
  "gemini-3.6-flash",
  "gemini-3.5-flash-lite",
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
];

function listaDeModelos(): string[] {
  const varios = process.env.GEMINI_MODELS;
  if (varios) {
    return varios
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);
  }

  const unico = process.env.GEMINI_MODEL;
  if (unico) {
    return [unico, ...MODELOS_PADRAO.filter((m) => m !== unico)];
  }

  return MODELOS_PADRAO;
}

function endpointDoModelo(modelo: string): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`;
}

// Status em que vale a pena tentar o próximo modelo da lista em vez de
// desistir na hora: 404 (sem acesso a esse modelo específico com essa
// chave) e 5xx (o backend desse modelo em particular está com problema).
// 429 tem tratamento à parte, porque carrega o tempo de espera sugerido.
const STATUS_TENTAR_PROXIMO_MODELO = new Set([404, 500, 502, 503, 504]);

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

type ResultadoModelo =
  | { ok: true; texto: string }
  | { ok: false; tipo: "quota"; retryDelaySegundos: number; detalhe: string }
  | { ok: false; tipo: "tentar-proximo"; detalhe: string }
  | { ok: false; tipo: "erro"; detalhe: string };

async function chamarModelo(
  modelo: string,
  prompt: string,
  schema: unknown,
  apiKey: string
): Promise<ResultadoModelo> {
  const resposta = await fetch(endpointDoModelo(modelo), {
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

  if (resposta.ok) {
    const dados = await resposta.json();
    const texto = dados?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (typeof texto !== "string") {
      return { ok: false, tipo: "erro", detalhe: "resposta não contém texto esperado" };
    }

    return { ok: true, texto };
  }

  const corpo = await resposta.text().catch(() => "");

  if (resposta.status === 429) {
    const delay = extrairRetryDelaySegundos(corpo) ?? RETRY_DELAY_PADRAO_SEGUNDOS;
    return {
      ok: false,
      tipo: "quota",
      retryDelaySegundos: delay + MARGEM_SEGUNDOS,
      detalhe: corpo.slice(0, 300),
    };
  }

  if (STATUS_TENTAR_PROXIMO_MODELO.has(resposta.status)) {
    return { ok: false, tipo: "tentar-proximo", detalhe: `${resposta.status}: ${corpo.slice(0, 300)}` };
  }

  return { ok: false, tipo: "erro", detalhe: `${resposta.status}: ${corpo.slice(0, 500)}` };
}

// Tenta cada modelo da lista (GEMINI_MODELS / GEMINI_MODEL / padrão), na
// ordem, até um responder com sucesso. Pula pro próximo automaticamente
// se o atual estiver sem quota ou indisponível — só propaga
// GeminiQuotaError (pra esperar e tentar de novo) se TODOS os modelos da
// lista estiverem com quota excedida; qualquer outro erro "de verdade"
// (não é sobre disponibilidade do modelo) propaga na hora, sem percorrer
// o resto da lista à toa.
export async function chamarGemini(prompt: string, schema: unknown): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não configurada no servidor.");
  }

  const modelos = listaDeModelos();
  let menorRetryDelay: number | null = null;
  const falhas: string[] = [];

  for (const modelo of modelos) {
    const resultado = await chamarModelo(modelo, prompt, schema, apiKey);

    if (resultado.ok) return resultado.texto;

    if (resultado.tipo === "quota") {
      falhas.push(`${modelo}: quota excedida (${resultado.detalhe})`);
      menorRetryDelay =
        menorRetryDelay === null
          ? resultado.retryDelaySegundos
          : Math.min(menorRetryDelay, resultado.retryDelaySegundos);
      continue;
    }

    if (resultado.tipo === "tentar-proximo") {
      falhas.push(`${modelo}: indisponível (${resultado.detalhe})`);
      continue;
    }

    throw new Error(`Gemini API (modelo ${modelo}) retornou erro: ${resultado.detalhe}`);
  }

  if (menorRetryDelay !== null) {
    throw new GeminiQuotaError(
      `Todos os modelos configurados (${modelos.join(", ")}) estão com quota excedida — ${falhas.join("; ")}`,
      menorRetryDelay
    );
  }

  throw new Error(
    `Nenhum dos modelos configurados (${modelos.join(", ")}) respondeu com sucesso — ${falhas.join("; ")}`
  );
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
    // O detalhe técnico (blob de erro da API) fica só no log do servidor —
    // se o retry automático do cliente também esbarrar em 429, o usuário só
    // deve ver uma mensagem acionável, não o JSON cru do erro do Gemini.
    console.error(`${contexto} — quota do Gemini excedida:`, resultado.erro.message);
    return {
      status: 429,
      corpo: {
        tipo: "quota",
        mensagem:
          "Limite de uso gratuito da API do Gemini atingido. Aguarde alguns minutos e tente de novo — se persistir, pode ser o limite diário, que só libera de novo amanhã.",
        retryDelaySegundos: resultado.erro.retryDelaySegundos,
      },
    };
  }

  const mensagem = resultado.erro instanceof Error ? resultado.erro.message : "Erro desconhecido";
  console.error(`${contexto} (${resultado.tentativas} tentativa(s)):`, resultado.erro);
  return { status: 502, corpo: { erro: `${contexto}: ${mensagem}` } };
}
