// Schema Gemini (responseSchema) para o modo resposta-livre — espelha
// lib/casoLivreSchema.ts. Ver lib/casoGeradoJsonSchema.ts para a
// explicação de por que isso não substitui a validação zod.

interface GeminiSchema {
  type: "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT";
  description?: string;
  properties?: Record<string, GeminiSchema>;
  required?: string[];
  items?: GeminiSchema;
}

const perguntaAbertaJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    etapa: {
      type: "STRING",
      description:
        'Rótulo curto da etapa, ex.: "hipótese diagnóstica inicial", "conduta imediata", "diagnóstico diferencial a descartar".',
    },
    pergunta: { type: "STRING", description: "A pergunta completa feita ao residente." },
    contextoAdicional: {
      type: "STRING",
      description:
        "Informação nova revelada só depois que o usuário responder a etapa anterior (evolução do caso, exame do estado mental, exames). Omitir se a etapa não revelar nada novo.",
    },
    gabaritoInterno: {
      type: "STRING",
      description:
        "A resposta esperada desta etapa, completa — usada só internamente para avaliar a resposta do residente, nunca mostrada antes dele responder.",
    },
  },
  required: ["etapa", "pergunta", "gabaritoInterno"],
};

const achadoReferenciadoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    dominioId: { type: "STRING", description: "Deve ser um dos ids de domínio fornecidos no prompt." },
    achadoId: { type: "STRING", description: "Deve ser um dos ids de achado DENTRO desse domínio." },
  },
  required: ["dominioId", "achadoId"],
};

export const casoLivreJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: "kebab-case, curto, descritivo." },
    titulo: {
      type: "STRING",
      description:
        'Frase curta e evocativa, não o nome do diagnóstico (ex.: "Ela diz que já está morta", não "Depressão Psicótica").',
    },
    categoria: { type: "STRING", description: 'Categoria diagnóstica ampla, ex.: "Transtornos do Humor".' },
    vinheta: {
      type: "STRING",
      description:
        "Vinheta inicial: idade, sexo, contexto, motivo da consulta, sinais/sintomas — sem revelar o diagnóstico.",
    },
    perguntasAbertas: {
      type: "ARRAY",
      description: "3 a 5 perguntas abertas, dificuldade crescente, terminando na conduta terapêutica.",
      items: perguntaAbertaJsonSchema,
    },
    diagnosticoFinal: {
      type: "STRING",
      description: "Frase completa com o diagnóstico e especificadores relevantes.",
    },
    diagnosticoId: {
      type: "STRING",
      description: "Se houver um diagnóstico correspondente na lista de ids válidos do prompt.",
    },
    medicamentosRelacionados: {
      type: "ARRAY",
      description: "Ids da lista de medicamentos válidos do prompt.",
      items: { type: "STRING" },
    },
    achadosPsicopatologicos: {
      type: "ARRAY",
      description: "Achados de psicopatologia ilustrados pelo caso.",
      items: achadoReferenciadoJsonSchema,
    },
    pontosDeEnsino: {
      type: "ARRAY",
      description: "3 a 5 lições didáticas do caso, além do diagnóstico em si.",
      items: { type: "STRING" },
    },
  },
  required: [
    "id",
    "titulo",
    "categoria",
    "vinheta",
    "perguntasAbertas",
    "diagnosticoFinal",
    "pontosDeEnsino",
  ],
};
