import { NextRequest, NextResponse } from "next/server";

import { diagnosticos } from "../../../data/diagnosticos";
import { medicamentos } from "../../../data/medicamentos";
import { dominiosPsicopatologicos } from "../../../data/psicopatologia";
import { casoGeradoSchema, type CasoGerado } from "../../../lib/casoGeradoSchema";
import { montarPrompt, type Dificuldade } from "../../../lib/gerarCasoPrompt";

const MODELO = "claude-sonnet-5";
const MAX_TOKENS = 4096;

interface CorpoRequisicao {
  diagnosticoId?: string;
  dificuldade?: Dificuldade;
  // Quando true, devolve o prompt montado sem chamar a Anthropic API —
  // útil para revisar o prompt antes de gastar uma chamada de verdade.
  preview?: boolean;
}

async function chamarAnthropic(prompt: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY não configurada no servidor.");
  }

  const resposta = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODELO,
      max_tokens: MAX_TOKENS,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!resposta.ok) {
    const corpo = await resposta.text().catch(() => "");
    throw new Error(`Anthropic API retornou ${resposta.status}: ${corpo.slice(0, 500)}`);
  }

  const dados = await resposta.json();
  const texto = dados?.content?.[0]?.text;

  if (typeof texto !== "string") {
    throw new Error("Resposta da Anthropic API não contém texto esperado.");
  }

  return texto;
}

function extrairJson(texto: string): unknown {
  // O prompt pede JSON puro, mas trata o caso do modelo envolver em
  // ```json de qualquer forma, por robustez.
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
  const texto = await chamarAnthropic(prompt);
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
    return NextResponse.json({ prompt, diagnosticoId, dificuldade });
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
