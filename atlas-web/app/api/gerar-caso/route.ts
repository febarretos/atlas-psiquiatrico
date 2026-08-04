import { NextRequest, NextResponse } from "next/server";

import { diagnosticos } from "../../../data/diagnosticos";
import { medicamentos } from "../../../data/medicamentos";
import { dominiosPsicopatologicos } from "../../../data/psicopatologia";
import { casoGeradoSchema, type CasoGerado } from "../../../lib/casoGeradoSchema";
import { casoGeradoJsonSchema } from "../../../lib/casoGeradoJsonSchema";
import { montarPrompt, type Dificuldade } from "../../../lib/gerarCasoPrompt";

// gemini-2.5-flash foi descontinuado para novas chaves de API (erro 404) —
// gemini-3.6-flash é o modelo estável recomendado atualmente para uso
// geral (ai.google.dev/gemini-api/docs/models, checado em ago/2026).
const MODELO = "gemini-3.6-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent`;

interface CorpoRequisicao {
  diagnosticoId?: string;
  dificuldade?: Dificuldade;
  // Quando true, devolve o prompt e o responseSchema montados sem chamar
  // o Gemini — útil para revisar antes de gastar uma chamada de verdade.
  preview?: boolean;
}

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
        responseSchema: casoGeradoJsonSchema,
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
  // responseMimeType já pede JSON puro, mas trata o caso de vir envolvido
  // em ```json de qualquer forma, por robustez.
  const limpo = texto
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "");

  return JSON.parse(limpo);
}

// Remove silenciosamente referências que não resolvem a conteúdo real —
// são todos campos opcionais, então é mais seguro descartar uma
// referência quebrada do que rejeitar o caso inteiro por causa dela.
// Mesma lógica de checagem de lib/auditoria.ts, aplicada a um único caso
// em vez de todo o conteúdo estático.
function limparReferenciasInvalidas(caso: CasoGerado): CasoGerado {
  const diagIds = new Set(diagnosticos.map((d) => d.id));
  const medIds = new Set(medicamentos.map((m) => m.id));

  const diagnosticoId =
    caso.diagnosticoId && diagIds.has(caso.diagnosticoId)
      ? caso.diagnosticoId
      : undefined;

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
  };
}

async function gerarUmaVez(prompt: string): Promise<CasoGerado> {
  const texto = await chamarGemini(prompt);
  const bruto = extrairJson(texto);
  const validado = casoGeradoSchema.parse(bruto);
  return limparReferenciasInvalidas(validado);
}

export async function POST(request: NextRequest) {
  let corpo: CorpoRequisicao;
  try {
    corpo = (await request.json()) as CorpoRequisicao;
  } catch {
    corpo = {};
  }

  const { prompt, diagnosticoId, dificuldade } = montarPrompt(
    corpo.diagnosticoId,
    corpo.dificuldade
  );

  if (corpo.preview) {
    return NextResponse.json({
      prompt,
      diagnosticoId,
      dificuldade,
      responseSchema: casoGeradoJsonSchema,
    });
  }

  try {
    const caso = await gerarUmaVez(prompt);
    return NextResponse.json(caso);
  } catch (primeiroErro) {
    try {
      const caso = await gerarUmaVez(prompt);
      return NextResponse.json(caso);
    } catch (segundoErro) {
      const mensagem =
        segundoErro instanceof Error ? segundoErro.message : "Erro desconhecido";
      console.error("Falha ao gerar caso clínico (2 tentativas):", primeiroErro, segundoErro);
      return NextResponse.json(
        { erro: `Não foi possível gerar um caso válido após 2 tentativas: ${mensagem}` },
        { status: 502 }
      );
    }
  }
}
