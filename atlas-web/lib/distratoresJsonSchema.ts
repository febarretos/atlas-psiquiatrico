// Schema Gemini (responseSchema) para a CHAMADA 2 do modo múltipla-escolha
// (o examinador adversarial) — espelha lib/distratoresSchema.ts.

interface GeminiSchema {
  type: "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT";
  description?: string;
  properties?: Record<string, GeminiSchema>;
  required?: string[];
  items?: GeminiSchema;
}

const distratorJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    texto: {
      type: "STRING",
      description:
        "A alternativa errada. Mesmo comprimento aproximado da resposta certa (~20% de variação).",
    },
    explicacao: {
      type: "STRING",
      description:
        "Por que esta alternativa NÃO é a resposta certa para este caso especificamente — não repita só a definição do termo.",
    },
  },
  required: ["texto", "explicacao"],
};

const etapaDistratoresJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    etapaId: { type: "STRING", description: "Deve corresponder exatamente a um id de etapa recebido." },
    alternativasErradas: {
      type: "ARRAY",
      description: "Exatamente 3 alternativas erradas para esta etapa.",
      items: distratorJsonSchema,
    },
  },
  required: ["etapaId", "alternativasErradas"],
};

export const distratoresJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    etapas: {
      type: "ARRAY",
      description: "Uma entrada para cada etapa recebida, na mesma ordem.",
      items: etapaDistratoresJsonSchema,
    },
  },
  required: ["etapas"],
};
