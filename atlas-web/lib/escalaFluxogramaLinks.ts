import type { EscalaFaixa } from "../data/escalas/types";

// Ponte escala → fluxograma: quando uma aplicação de escala cai numa faixa
// mapeada aqui, a UI oferece um link direto pro node de conduta correspondente
// no fluxograma. Tabela separada (em vez de um campo em EscalaFaixa) pra não
// acoplar as 21 escalas existentes a um conceito que só faz sentido pra
// algumas — ver lib/validarVinculosEscalaFluxograma.ts pra a checagem de
// integridade contra o conteúdo real.
export interface VinculoEscalaFluxograma {
  escalaId: string;
  corFaixa: EscalaFaixa["cor"];
  fluxogramaId: string;
  nodeId: string;
}

export const vinculosEscalaFluxograma: VinculoEscalaFluxograma[] = [
  {
    escalaId: "ciwa-ar",
    corFaixa: "red",
    fluxogramaId: "abstinencia-alcoolica",
    nodeId: "conduta-delirium-tremens",
  },
  {
    escalaId: "cssrs",
    corFaixa: "red",
    fluxogramaId: "risco-suicidio",
    nodeId: "risco-alto",
  },
  {
    escalaId: "phq9",
    corFaixa: "red",
    fluxogramaId: "depressao-maior",
    nodeId: "conduta-combinado-padrao",
  },
  {
    escalaId: "gad7",
    corFaixa: "red",
    fluxogramaId: "manejo-ansiedade",
    nodeId: "conduta-tag-padrao",
  },
  {
    escalaId: "ymrs",
    corFaixa: "red",
    fluxogramaId: "mania-aguda",
    nodeId: "conduta-estabilizador-padrao",
  },
  {
    escalaId: "ybocs",
    corFaixa: "red",
    fluxogramaId: "manejo-toc",
    nodeId: "conduta-toc-grave-padrao",
  },
];

export function encontrarVinculoEscalaFluxograma(
  escalaId: string,
  corFaixa: EscalaFaixa["cor"]
): VinculoEscalaFluxograma | undefined {
  return vinculosEscalaFluxograma.find(
    (v) => v.escalaId === escalaId && v.corFaixa === corFaixa
  );
}
