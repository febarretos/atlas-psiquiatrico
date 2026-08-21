import { NextRequest, NextResponse } from "next/server";

import { casoSemAlternativasSchema } from "../../../lib/casoSemAlternativasSchema";
import { casoSemAlternativasJsonSchema } from "../../../lib/casoSemAlternativasJsonSchema";
import { casoLivreSchema, type CasoLivre } from "../../../lib/casoLivreSchema";
import { casoLivreJsonSchema } from "../../../lib/casoLivreJsonSchema";
import {
  montarPromptEtapa1,
  montarPromptCasoLivre,
  resolverDiagnosticoId,
  type Dificuldade,
} from "../../../lib/gerarCasoPrompt";
import { termoInglesDoDiagnostico } from "../../../lib/diagnosticoTermoIngles";
import { buscarInspiracao, type ArtigoInspiracao } from "../../../lib/buscarInspiracaoEuropePmc";
import { chamarGemini, extrairJson, comUmaRetentativa, respostaDeFalha } from "../../../lib/gemini";
import { limparReferenciasInvalidas } from "../../../lib/limparReferenciasInvalidas";

// Só a CHAMADA 1 do modo múltipla-escolha (caso + resposta certa por
// etapa, sem alternativas erradas) e o modo resposta-livre (uma chamada
// só) rodam aqui. A chamada 2 (distratores) foi movida pra
// app/api/gerar-caso-distratores — duas chamadas de IA sequenciais na
// mesma invocação serverless levavam ~70-90s no total, estourando o
// maxDuration de 60s (teto do plano Hobby sem Fluid Compute) e fazendo a
// geração falhar silenciosamente pro usuário. Cada chamada isolada leva
// bem menos que isso.
export const maxDuration = 60;

type Modo = "multipla-escolha" | "resposta-livre";

interface CorpoRequisicao {
  diagnosticoId?: string;
  dificuldade?: Dificuldade;
  modo?: Modo;
  // Quando true, devolve o prompt e o responseSchema montados sem chamar
  // o Gemini — útil para revisar antes de gastar uma chamada de verdade.
  preview?: boolean;
}

interface FonteInspiracao {
  titulo: string;
  url: string;
}

function paraFontes(inspiracao: ArtigoInspiracao[]): FonteInspiracao[] {
  return inspiracao.map((a) => ({ titulo: a.titulo, url: a.url }));
}

async function gerarEtapa1UmaVez(prompt: string) {
  const texto = await chamarGemini(prompt, casoSemAlternativasJsonSchema);
  return casoSemAlternativasSchema.parse(extrairJson(texto));
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

  const resultado = await comUmaRetentativa(() => gerarEtapa1UmaVez(prompt));
  if (resultado.ok) {
    return NextResponse.json({
      casoSemAlternativas: resultado.valor,
      inspiracao: paraFontes(inspiracao),
    });
  }
  const falha = respostaDeFalha(resultado, "Não foi possível gerar um caso válido");
  return NextResponse.json(falha.corpo, { status: falha.status });
}
