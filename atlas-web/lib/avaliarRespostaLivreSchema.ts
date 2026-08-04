import { z } from "zod";

// Corpo aceito por app/api/avaliar-resposta-livre.
export const avaliarRespostaLivreRequestSchema = z.object({
  pergunta: z.string().min(1),
  gabaritoInterno: z.string().min(1),
  respostaDoUsuario: z.string().min(1),
});

export type AvaliarRespostaLivreRequest = z.infer<typeof avaliarRespostaLivreRequestSchema>;

// Resposta do Gemini ao avaliar a resposta do residente — validada com zod
// pelo mesmo motivo que o resto da geração de casos: responseSchema garante
// forma, não conteúdo correto.
export const avaliacaoRespostaLivreSchema = z.object({
  correto: z.boolean(),
  feedback: z.string().min(1),
  proximaEtapaLiberada: z.boolean(),
});

export type AvaliacaoRespostaLivre = z.infer<typeof avaliacaoRespostaLivreSchema>;

interface GeminiSchema {
  type: "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT";
  description?: string;
  properties?: Record<string, GeminiSchema>;
  required?: string[];
  items?: GeminiSchema;
}

export const avaliacaoRespostaLivreJsonSchema: GeminiSchema = {
  type: "OBJECT",
  properties: {
    correto: {
      type: "BOOLEAN",
      description:
        "true se o raciocínio do residente está clinicamente correto e equivalente ao gabarito, mesmo com formulação diferente — não exija match textual.",
    },
    feedback: {
      type: "STRING",
      description:
        "Feedback construtivo e específico sobre o que está faltando ou errado na resposta. Quando possível, socrático: uma pergunta que guie o residente a perceber a lacuna sozinho, em vez de só entregar a resposta certa.",
    },
    proximaEtapaLiberada: {
      type: "BOOLEAN",
      description:
        "true se a resposta é boa o suficiente para avançar para a próxima etapa do caso; false se o residente deveria tentar de novo antes de prosseguir.",
    },
  },
  required: ["correto", "feedback", "proximaEtapaLiberada"],
};
