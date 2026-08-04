import { NextRequest, NextResponse } from "next/server";

import {
  avaliarRespostaLivreRequestSchema,
  avaliacaoRespostaLivreSchema,
  avaliacaoRespostaLivreJsonSchema,
  type AvaliacaoRespostaLivre,
  type AvaliacaoRespostaLivreResposta,
} from "../../../lib/avaliarRespostaLivreSchema";

// gemini-2.5-flash foi descontinuado para novas chaves de API (erro 404) —
// gemini-3.6-flash é o modelo estável recomendado atualmente para uso
// geral (ai.google.dev/gemini-api/docs/models, checado em ago/2026).
const MODELO = "gemini-3.6-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent`;

async function chamarGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY não configurada no servidor.");
  }

  const resposta = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: avaliacaoRespostaLivreJsonSchema,
      },
    }),
  });

  if (!resposta.ok) {
    const corpo = await resposta.text().catch(() => "");
    throw new Error(`Gemini API retornou ${resposta.status}: ${corpo.slice(0, 500)}`);
  }

  const dados = await resposta.json();
  const texto = dados?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (typeof texto !== "string") {
    throw new Error("Resposta da Gemini API não contém texto esperado.");
  }

  return texto;
}

function extrairJson(texto: string): unknown {
  const limpo = texto
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "");

  return JSON.parse(limpo);
}

function montarPromptAvaliacao(
  pergunta: string,
  gabaritoInterno: string,
  respostaDoUsuario: string
): string {
  return `Você é um preceptor de residência em psiquiatria avaliando a resposta de um residente a esta pergunta clínica.

## Pergunta feita ao residente
${pergunta}

## Gabarito esperado
${gabaritoInterno}

## Resposta do residente
${respostaDoUsuario}

## Avalie
1. O raciocínio está correto mesmo que a formulação seja diferente do gabarito? Reconheça respostas clinicamente equivalentes — não exija match textual com o gabarito.
2. O que está faltando ou errado, especificamente?
3. Dê feedback construtivo, socrático quando possível — prefira uma pergunta que guie o residente a perceber a lacuna sozinho, em vez de só entregar a resposta certa. Só entregue a resposta certa de forma direta se a resposta do residente estiver muito distante do esperado.`;
}

async function avaliarUmaVez(prompt: string): Promise<AvaliacaoRespostaLivre> {
  const texto = await chamarGemini(prompt);
  return avaliacaoRespostaLivreSchema.parse(extrairJson(texto));
}

// O gabarito devolvido é o texto original recebido na requisição, não algo
// que o Gemini precisa reescrever — mais confiável, e garante que a
// resposta esperada some no cliente sempre que correto for false, mesmo
// quando o feedback socrático não a revela (ver montarPromptAvaliacao).
function comGabaritoSeErrado(
  avaliacao: AvaliacaoRespostaLivre,
  gabaritoInterno: string
): AvaliacaoRespostaLivreResposta {
  if (avaliacao.correto) return avaliacao;
  return { ...avaliacao, gabaritoInterno };
}

export async function POST(request: NextRequest) {
  let corpoBruto: unknown;
  try {
    corpoBruto = await request.json();
  } catch {
    return NextResponse.json({ erro: "Corpo da requisição inválido." }, { status: 400 });
  }

  const resultado = avaliarRespostaLivreRequestSchema.safeParse(corpoBruto);
  if (!resultado.success) {
    return NextResponse.json({ erro: "Corpo da requisição inválido." }, { status: 400 });
  }

  const { pergunta, gabaritoInterno, respostaDoUsuario } = resultado.data;
  const prompt = montarPromptAvaliacao(pergunta, gabaritoInterno, respostaDoUsuario);

  try {
    const avaliacao = await avaliarUmaVez(prompt);
    return NextResponse.json(comGabaritoSeErrado(avaliacao, gabaritoInterno));
  } catch (primeiroErro) {
    try {
      const avaliacao = await avaliarUmaVez(prompt);
      return NextResponse.json(comGabaritoSeErrado(avaliacao, gabaritoInterno));
    } catch (segundoErro) {
      const mensagem =
        segundoErro instanceof Error ? segundoErro.message : "Erro desconhecido";
      console.error("Falha ao avaliar resposta livre (2 tentativas):", primeiroErro, segundoErro);
      return NextResponse.json(
        { erro: `Não foi possível avaliar a resposta após 2 tentativas: ${mensagem}` },
        { status: 502 }
      );
    }
  }
}
