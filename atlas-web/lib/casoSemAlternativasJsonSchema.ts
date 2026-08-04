// Schema Gemini (responseSchema) para a CHAMADA 1 do modo múltipla-escolha
// — espelha lib/casoSemAlternativasSchema.ts. Ver lib/casoGeradoJsonSchema.ts
// para a explicação de por que isso não substitui a validação zod.

interface GeminiSchema {
  type: "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT";
  description?: string;
  properties?: Record<string, GeminiSchema>;
  required?: string[];
  items?: GeminiSchema;
}

const etapaSemAlternativasJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: 'Ex.: "etapa-1", "etapa-2".' },
    narrativaAdicional: {
      type: "STRING",
      description:
        "Informação nova revelada nesta etapa (exame do estado mental, evolução, exames). Omitir se a etapa for só uma pergunta sobre o que já foi apresentado.",
    },
    pergunta: { type: "STRING" },
    respostaCorreta: {
      type: "STRING",
      description: "A resposta certa desta etapa, na íntegra (não um resumo).",
    },
    explicacaoCorreta: {
      type: "STRING",
      description: "Por que esta é a resposta certa, específico ao quadro apresentado.",
    },
  },
  required: ["id", "pergunta", "respostaCorreta", "explicacaoCorreta"],
};

const achadoReferenciadoJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    dominioId: { type: "STRING", description: "Deve ser um dos ids de domínio fornecidos no prompt." },
    achadoId: { type: "STRING", description: "Deve ser um dos ids de achado DENTRO desse domínio." },
  },
  required: ["dominioId", "achadoId"],
};

export const casoSemAlternativasJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    id: { type: "STRING", description: "kebab-case, curto, descritivo." },
    titulo: {
      type: "STRING",
      description:
        'Frase curta e evocativa, não o nome do diagnóstico (ex.: "Ela diz que já está morta", não "Depressão Psicótica").',
    },
    categoria: { type: "STRING", description: 'Categoria diagnóstica ampla, ex.: "Transtornos do Humor".' },
    apresentacaoInicial: {
      type: "STRING",
      description:
        "Vinheta inicial: idade, sexo, contexto, motivo da consulta, sinais/sintomas — sem revelar o diagnóstico.",
    },
    etapas: {
      type: "ARRAY",
      description: "4 a 5 etapas, dificuldade crescente, terminando na conduta terapêutica.",
      items: etapaSemAlternativasJsonSchema,
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
    "apresentacaoInicial",
    "etapas",
    "diagnosticoFinal",
    "pontosDeEnsino",
  ],
};
