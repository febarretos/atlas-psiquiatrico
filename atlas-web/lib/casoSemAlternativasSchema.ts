import { z } from "zod";

import { achadoReferenciadoSchema } from "./casoGeradoSchema";

// Resultado da CHAMADA 1 do modo múltipla-escolha: o caso e a resposta
// certa de cada etapa, ainda sem alternativas erradas — essas são geradas
// separadamente pela chamada 2 (ver lib/distratoresSchema.ts) por um
// prompt adversarial que só vê este resultado, nunca o prompt original.
export const etapaSemAlternativasSchema = z.object({
  id: z.string().min(1),
  narrativaAdicional: z.string().min(1).optional(),
  pergunta: z.string().min(1),
  respostaCorreta: z.string().min(1),
  explicacaoCorreta: z.string().min(1),
});

export const casoSemAlternativasSchema = z.object({
  id: z.string().min(1),
  titulo: z.string().min(1),
  categoria: z.string().min(1),
  apresentacaoInicial: z.string().min(1),
  etapas: z.array(etapaSemAlternativasSchema).min(3).max(6),
  diagnosticoFinal: z.string().min(1),
  diagnosticoId: z.string().min(1).optional(),
  medicamentosRelacionados: z.array(z.string().min(1)).optional(),
  achadosPsicopatologicos: z.array(achadoReferenciadoSchema).optional(),
  pontosDeEnsino: z.array(z.string().min(1)).min(1),
});

export type CasoSemAlternativas = z.infer<typeof casoSemAlternativasSchema>;
export type EtapaSemAlternativas = z.infer<typeof etapaSemAlternativasSchema>;
