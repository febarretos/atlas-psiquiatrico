import { NextRequest, NextResponse } from "next/server";

import {
  avaliarRespostaLivreRequestSchema,
  avaliacaoRespostaLivreSchema,
  avaliacaoRespostaLivreJsonSchema,
  type AvaliacaoRespostaLivre,
  type AvaliacaoRespostaLivreResposta,
} from "../../../lib/avaliarRespostaLivreSchema";
import { chamarGemini, extrairJson, comUmaRetentativa, respostaDeFalha } from "../../../lib/gemini";

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
  const texto = await chamarGemini(prompt, avaliacaoRespostaLivreJsonSchema);
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

  const validacao = avaliarRespostaLivreRequestSchema.safeParse(corpoBruto);
  if (!validacao.success) {
    return NextResponse.json({ erro: "Corpo da requisição inválido." }, { status: 400 });
  }

  const { pergunta, gabaritoInterno, respostaDoUsuario } = validacao.data;
  const prompt = montarPromptAvaliacao(pergunta, gabaritoInterno, respostaDoUsuario);

  const resultado = await comUmaRetentativa(() => avaliarUmaVez(prompt));
  if (resultado.ok) {
    return NextResponse.json(comGabaritoSeErrado(resultado.valor, gabaritoInterno));
  }
  const falha = respostaDeFalha(resultado, "Não foi possível avaliar a resposta");
  return NextResponse.json(falha.corpo, { status: falha.status });
}
