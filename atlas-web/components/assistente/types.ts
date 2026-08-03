import type { Medicamento } from "../../data/types";

export interface DetalheCandidato {
  texto: string;
  nivelEvidencia?: 1 | 2 | 3 | 4 | 5;
  primeiraLinha?: boolean;
}

// Forma comum consumida pela seção de resultado compartilhada entre os 3
// modos do Assistente (perfil do paciente, radar, tabela comparativa).
// Cada hook de modo (useSintomasAssistente, useAlvosAssistente, ou o modo
// manual) já entrega a lista NA ORDEM FINAL CORRETA para aquele modo — não
// existe mais um campo `ordemPrimaria` combinando sinais heterogêneos num
// único escalar (ver lib/condicoesAlvo.ts para o histórico do bug que isso
// causava).
export interface CandidatoBase {
  medicamento: Medicamento;
  badgePrincipal?: string;
  evidenciaMinima?: 1 | 2 | 3 | 4 | 5;
  detalhes?: DetalheCandidato[];
}
