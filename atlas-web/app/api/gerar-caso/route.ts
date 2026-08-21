import { NextRequest, NextResponse } from "next/server";

import { diagnosticos } from "../../../data/diagnosticos";
import { medicamentos } from "../../../data/medicamentos";
import { dominiosPsicopatologicos } from "../../../data/psicopatologia";
import { casoGeradoSchema, type CasoGerado } from "../../../lib/casoGeradoSchema";
import {
  casoSemAlternativasSchema,
  type CasoSemAlternativas,
} from "../../../lib/casoSemAlternativasSchema";
import { casoSemAlternativasJsonSchema } from "../../../lib/casoSemAlternativasJsonSchema";
import { distratoresRespostaSchema, type DistratoresResposta } from "../../../lib/distratoresSchema";
import { distratoresJsonSchema } from "../../../lib/distratoresJsonSchema";
import { casoLivreSchema, type CasoLivre } from "../../../lib/casoLivreSchema";
import { casoLivreJsonSchema } from "../../../lib/casoLivreJsonSchema";
import {
  montarPromptEtapa1,
  montarPromptDistratores,
  montarPromptCasoLivre,
  resolverDiagnosticoId,
  type Dificuldade,
} from "../../../lib/gerarCasoPrompt";
import { termoInglesDoDiagnostico } from "../../../lib/diagnosticoTermoIngles";
import { buscarInspiracao, type ArtigoInspiracao } from "../../../lib/buscarInspiracaoEuropePmc";
import { chamarGemini, extrairJson, comUmaRetentativa, respostaDeFalha } from "../../../lib/gemini";

// Modo múltipla-escolha faz 2 chamadas sequenciais ao Gemini (caso, depois
// distratores que dependem do resultado da primeira) — com retry
// (comUmaRetentativa), o pior caso passa fácil dos 10s padrão da Vercel.
// 60 é o teto de maxDuration aceito mesmo no plano Hobby, sem precisar de
// Fluid Compute.
export const maxDuration = 60;

type Modo = "multipla-escolha" | "resposta-livre";

interface CorpoRequisicao {
  diagnosticoId?: string;
  dificuldade?: Dificuldade;
  modo?: Modo;
  // Quando true, devolve o prompt e o responseSchema montados sem chamar
  // o Gemini — útil para revisar antes de gastar uma chamada de verdade.
  // No modo múltipla-escolha isso reflete só a chamada 1 (a chamada 2
  // depende do resultado da primeira, então não há como pré-visualizá-la).
  preview?: boolean;
}

interface FonteInspiracao {
  titulo: string;
  url: string;
}

// Remove silenciosamente referências que não resolvem a conteúdo real —
// são todos campos opcionais, então é mais seguro descartar uma
// referência quebrada do que rejeitar o caso inteiro por causa dela.
// Mesma lógica de checagem de lib/auditoria.ts, aplicada a um único caso
// em vez de todo o conteúdo estático. Genérico porque os dois formatos de
// caso (múltipla-escolha e resposta-livre) compartilham esses três campos.
function limparReferenciasInvalidas<
  T extends {
    diagnosticoId?: string;
    medicamentosRelacionados?: string[];
    achadosPsicopatologicos?: { dominioId: string; achadoId: string }[];
  },
>(caso: T): T {
  const diagIds = new Set(diagnosticos.map((d) => d.id));
  const medIds = new Set(medicamentos.map((m) => m.id));

  const diagnosticoId =
    caso.diagnosticoId && diagIds.has(caso.diagnosticoId) ? caso.diagnosticoId : undefined;

  const medicamentosRelacionados = caso.medicamentosRelacionados?.filter((id) =>
    medIds.has(id)
  );

  const achadosPsicopatologicos = caso.achadosPsicopatologicos?.filter((ref) => {
    const dominio = dominiosPsicopatologicos.find((d) => d.id === ref.dominioId);
    return Boolean(dominio?.achados.some((a) => a.id === ref.achadoId));
  });

  return {
    ...caso,
    diagnosticoId,
    medicamentosRelacionados,
    achadosPsicopatologicos,
  } as T;
}

function paraFontes(inspiracao: ArtigoInspiracao[]): FonteInspiracao[] {
  return inspiracao.map((a) => ({ titulo: a.titulo, url: a.url }));
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

// Junta o resultado da chamada 1 (caso + resposta certa por etapa) com o
// resultado da chamada 2 (3 distratores por etapa) no formato final
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

async function gerarMultiplaEscolhaUmaVez(prompt1: string): Promise<CasoGerado> {
  const textoCaso = await chamarGemini(prompt1, casoSemAlternativasJsonSchema);
  const casoSemAlternativas = casoSemAlternativasSchema.parse(extrairJson(textoCaso));

  const prompt2 = montarPromptDistratores(casoSemAlternativas);
  const textoDistratores = await chamarGemini(prompt2, distratoresJsonSchema);
  const distratores = distratoresRespostaSchema.parse(extrairJson(textoDistratores));

  const combinado = combinarComDistratores(casoSemAlternativas, distratores);
  const validado = casoGeradoSchema.parse(combinado);
  return limparReferenciasInvalidas(validado);
}

async function gerarCasoLivreUmaVez(prompt: string): Promise<CasoLivre> {
  const texto = await chamarGemini(prompt, casoLivreJsonSchema);
  const validado = casoLivreSchema.parse(extrairJson(texto));
  return limparReferenciasInvalidas(validado);
}

export async function POST(request: NextRequest) {
  let corpo: CorpoRequisicao;
  try {
    corpo = (await request.json()) as CorpoRequisicao;
  } catch {
    corpo = {};
  }

  const modo: Modo = corpo.modo === "resposta-livre" ? "resposta-livre" : "multipla-escolha";
  const diagnosticoId = resolverDiagnosticoId(corpo.diagnosticoId);
  const termoIngles = termoInglesDoDiagnostico(diagnosticoId);
  const inspiracao = termoIngles ? await buscarInspiracao(termoIngles) : [];

  if (modo === "resposta-livre") {
    const { prompt, dificuldade } = montarPromptCasoLivre(diagnosticoId, corpo.dificuldade, inspiracao);

    if (corpo.preview) {
      return NextResponse.json({
        prompt,
        diagnosticoId,
        dificuldade,
        responseSchema: casoLivreJsonSchema,
        inspiracao: paraFontes(inspiracao),
      });
    }

    const resultado = await comUmaRetentativa(() => gerarCasoLivreUmaVez(prompt));
    if (resultado.ok) {
      return NextResponse.json({ casoLivre: resultado.valor, inspiracao: paraFontes(inspiracao) });
    }
    const falha = respostaDeFalha(resultado, "Não foi possível gerar um caso válido");
    return NextResponse.json(falha.corpo, { status: falha.status });
  }

  const { prompt, dificuldade } = montarPromptEtapa1(diagnosticoId, corpo.dificuldade, inspiracao);

  if (corpo.preview) {
    return NextResponse.json({
      prompt,
      diagnosticoId,
      dificuldade,
      responseSchema: casoSemAlternativasJsonSchema,
      inspiracao: paraFontes(inspiracao),
    });
  }

  const resultado = await comUmaRetentativa(() => gerarMultiplaEscolhaUmaVez(prompt));
  if (resultado.ok) {
    return NextResponse.json({ caso: resultado.valor, inspiracao: paraFontes(inspiracao) });
  }
  const falha = respostaDeFalha(resultado, "Não foi possível gerar um caso válido");
  return NextResponse.json(falha.corpo, { status: falha.status });
}
