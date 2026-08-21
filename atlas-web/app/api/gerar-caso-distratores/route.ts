import { NextRequest, NextResponse } from "next/server";

import { casoGeradoSchema, type CasoGerado } from "../../../lib/casoGeradoSchema";
import {
  casoSemAlternativasSchema,
  type CasoSemAlternativas,
} from "../../../lib/casoSemAlternativasSchema";
import { distratoresRespostaSchema, type DistratoresResposta } from "../../../lib/distratoresSchema";
import { distratoresJsonSchema } from "../../../lib/distratoresJsonSchema";
import { montarPromptDistratores } from "../../../lib/gerarCasoPrompt";
import { chamarGemini, extrairJson, comUmaRetentativa, respostaDeFalha } from "../../../lib/gemini";
import { limparReferenciasInvalidas } from "../../../lib/limparReferenciasInvalidas";

// CHAMADA 2 do modo múltipla-escolha (distratores) — rota separada de
// app/api/gerar-caso pra cada invocação serverless fazer só 1 chamada de
// IA em vez de 2 sequenciais (ver comentário lá: a combinação das duas
// levava ~70-90s, estourando o teto de 60s do maxDuration). O cliente
// chama esta rota logo depois de receber o resultado de gerar-caso,
// passando o caso sem alternativas de volta.
export const maxDuration = 60;

interface CorpoRequisicao {
  casoSemAlternativas?: unknown;
}

// Fisher-Yates — usado para variar a posição da alternativa certa entre as
// etapas sem depender do modelo para isso (mais confiável do que pedir
// "ordem aleatória" no prompt).
function embaralhar<T>(itens: T[]): T[] {
  const copia = [...itens];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Junta o caso sem alternativas (chamada 1, recebido do cliente) com o
// resultado desta chamada 2 (3 distratores por etapa) no formato final
// CasoGerado, já validado por casoGeradoSchema. O LLM só produz a lista
// plana de etapas — proximoNoId (sequencial, "fim" na última) e o nó
// terminal são sempre calculados aqui, nunca pedidos ao modelo: é
// mecânico, e pedir isso ao LLM só adicionaria uma chance de erro numa
// parte que não precisa de nenhum julgamento.
function combinarComDistratores(
  caso: CasoSemAlternativas,
  distratores: DistratoresResposta
): CasoGerado {
  const distratoresPorEtapa = new Map(distratores.etapas.map((e) => [e.etapaId, e]));

  const nos = caso.etapas.map((etapa, indice) => {
    const entrada = distratoresPorEtapa.get(etapa.id);
    if (!entrada) {
      throw new Error(`Distratores não retornados para a etapa "${etapa.id}".`);
    }

    const proximoNoId = indice + 1 < caso.etapas.length ? caso.etapas[indice + 1].id : "fim";

    const opcoes = embaralhar([
      { texto: etapa.respostaCorreta, correta: true, explicacao: etapa.explicacaoCorreta, proximoNoId },
      ...entrada.alternativasErradas.map((d) => ({
        texto: d.texto,
        correta: false,
        explicacao: d.explicacao,
        proximoNoId,
      })),
    ]);

    return {
      id: etapa.id,
      narrativaAdicional: etapa.narrativaAdicional,
      pergunta: etapa.pergunta,
      opcoes,
    };
  });

  return {
    id: caso.id,
    titulo: caso.titulo,
    categoria: caso.categoria,
    apresentacaoInicial: caso.apresentacaoInicial,
    nos: [...nos, { id: "fim", opcoes: [] }],
    noInicialId: caso.etapas[0].id,
    diagnosticoFinal: caso.diagnosticoFinal,
    diagnosticoId: caso.diagnosticoId,
    medicamentosRelacionados: caso.medicamentosRelacionados,
    achadosPsicopatologicos: caso.achadosPsicopatologicos,
    pontosDeEnsino: caso.pontosDeEnsino,
  };
}

async function gerarDistratoresUmaVez(casoSemAlternativas: CasoSemAlternativas): Promise<CasoGerado> {
  const prompt = montarPromptDistratores(casoSemAlternativas);
  const texto = await chamarGemini(prompt, distratoresJsonSchema);
  const distratores = distratoresRespostaSchema.parse(extrairJson(texto));

  const combinado = combinarComDistratores(casoSemAlternativas, distratores);
  const validado = casoGeradoSchema.parse(combinado);
  return limparReferenciasInvalidas(validado);
}

export async function POST(request: NextRequest) {
  let corpo: CorpoRequisicao;
  try {
    corpo = (await request.json()) as CorpoRequisicao;
  } catch {
    return NextResponse.json({ erro: "Corpo da requisição inválido." }, { status: 400 });
  }

  const casoParseado = casoSemAlternativasSchema.safeParse(corpo.casoSemAlternativas);
  if (!casoParseado.success) {
    return NextResponse.json(
      { erro: "Caso sem alternativas inválido ou ausente na requisição." },
      { status: 400 }
    );
  }

  const resultado = await comUmaRetentativa(() => gerarDistratoresUmaVez(casoParseado.data));
  if (resultado.ok) {
    return NextResponse.json({ caso: resultado.valor });
  }
  const falha = respostaDeFalha(resultado, "Não foi possível gerar as alternativas do caso");
  return NextResponse.json(falha.corpo, { status: falha.status });
}
