import { z } from "zod";

// Espelha data/casos-clinicos/types.ts (schema unificado — ver comentário
// lá sobre a fusão Casos Clínicos + Simulador). `referencias` é
// deliberadamente omitido: um caso sintético não deve citar fontes
// bibliográficas reais que não foram checadas por ninguém.
export const opcaoCasoSchema = z.object({
  texto: z.string().min(1),
  correta: z.boolean(),
  explicacao: z.string().min(1),
  // Sempre calculado por combinarComDistratores() em route.ts (próxima
  // etapa em ordem, ou "fim" na última) — nunca pedido ao LLM, que só
  // produz o formato mais simples de "etapas" em sequência.
  proximoNoId: z.string().min(1),
});

export const etapaCasoSchema = z
  .object({
    id: z.string().min(1),
    narrativaAdicional: z.string().min(1).optional(),
    pergunta: z.string().min(1),
    opcoes: z.array(opcaoCasoSchema).min(2).max(6),
  })
  // O player assume implicitamente exatamente uma opção correta por
  // etapa (para pontuação e para destacar a resposta certa) — um LLM
  // pode errar essa contagem, então validamos explicitamente em vez de
  // deixar isso quebrar silenciosamente na renderização.
  .refine((etapa) => etapa.opcoes.filter((o) => o.correta).length === 1, {
    message: "Cada etapa deve ter exatamente uma opção com correta:true",
  });

// Nó terminal sintético, sempre `{ id: "fim", opcoes: [] }` — acrescentado
// por combinarComDistratores() depois da última etapa, nunca gerado pelo
// LLM. Schema solto (não literal em "fim") só pra não duplicar a
// constante entre os dois arquivos.
export const noTerminalCasoSchema = z.object({
  id: z.string().min(1),
  opcoes: z.array(opcaoCasoSchema).length(0),
});

export const achadoReferenciadoSchema = z.object({
  dominioId: z.string().min(1),
  achadoId: z.string().min(1),
});

export const casoGeradoSchema = z.object({
  id: z.string().min(1),
  titulo: z.string().min(1),
  categoria: z.string().min(1),
  apresentacaoInicial: z.string().min(1),
  nos: z.array(z.union([etapaCasoSchema, noTerminalCasoSchema])).min(4).max(7),
  noInicialId: z.string().min(1),
  diagnosticoFinal: z.string().min(1),
  diagnosticoId: z.string().min(1).optional(),
  medicamentosRelacionados: z.array(z.string().min(1)).optional(),
  achadosPsicopatologicos: z.array(achadoReferenciadoSchema).optional(),
  pontosDeEnsino: z.array(z.string().min(1)).min(1),
});

export type CasoGerado = z.infer<typeof casoGeradoSchema>;
