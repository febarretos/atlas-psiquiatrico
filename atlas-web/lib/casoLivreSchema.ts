import { z } from "zod";

import { achadoReferenciadoSchema } from "./casoGeradoSchema";

// Caso clínico de resposta livre (modo difícil) — sem alternativas, o
// residente escreve a resposta e ela é avaliada por IA (ver
// app/api/avaliar-resposta-livre/route.ts). `gabaritoInterno` fica
// aninhado em cada pergunta (não como array paralelo) para não depender de
// dois arrays permanecerem em sincronia por índice.
export const perguntaAbertaSchema = z.object({
  // Rótulo curto da etapa, ex.: "hipótese diagnóstica inicial", "conduta
  // imediata", "diagnóstico diferencial a descartar".
  etapa: z.string().min(1),

  pergunta: z.string().min(1),

  // Informação nova revelada só depois que o usuário responde a etapa
  // anterior (evolução do caso, exame do estado mental, exames) — não deve
  // ser mostrada antes disso.
  contextoAdicional: z.string().min(1).optional(),

  // Resposta esperada desta etapa — nunca exposta ao usuário antes dele
  // responder; usada só como referência para a avaliação por IA.
  gabaritoInterno: z.string().min(1),
});

export const casoLivreSchema = z.object({
  id: z.string().min(1),
  titulo: z.string().min(1),
  categoria: z.string().min(1),
  vinheta: z.string().min(1),
  perguntasAbertas: z.array(perguntaAbertaSchema).min(3).max(6),
  diagnosticoFinal: z.string().min(1),
  diagnosticoId: z.string().min(1).optional(),
  medicamentosRelacionados: z.array(z.string().min(1)).optional(),
  achadosPsicopatologicos: z.array(achadoReferenciadoSchema).optional(),
  pontosDeEnsino: z.array(z.string().min(1)).min(1),
});

export type PerguntaAberta = z.infer<typeof perguntaAbertaSchema>;
export type CasoLivre = z.infer<typeof casoLivreSchema>;
