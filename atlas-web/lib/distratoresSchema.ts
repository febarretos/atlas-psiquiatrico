import { z } from "zod";

// Resultado da CHAMADA 2 do modo múltipla-escolha: 3 alternativas erradas
// por etapa, geradas por um prompt adversarial separado que só recebe a
// pergunta e a resposta certa (ver lib/gerarCasoPrompt.ts,
// montarPromptDistratores). A posição da alternativa certa entre as 3
// erradas é decidida em código (route.ts), não pelo modelo — mais
// confiável do que confiar no LLM para variar a ordem.
export const distratorSchema = z.object({
  texto: z.string().min(1),
  explicacao: z.string().min(1),
});

export const etapaDistratoresSchema = z.object({
  etapaId: z.string().min(1),
  alternativasErradas: z.array(distratorSchema).length(3),
});

export const distratoresRespostaSchema = z.object({
  etapas: z.array(etapaDistratoresSchema).min(1),
});

export type DistratoresResposta = z.infer<typeof distratoresRespostaSchema>;
