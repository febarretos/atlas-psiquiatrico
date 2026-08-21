// Forma comum de identificar um item de referência (fármaco, diagnóstico,
// escala ou emergência) para os recursos de recentes/favoritos, que
// precisam apontar de volta pra ficha completa sem depender do módulo de
// dados de cada um.

export type TipoItemReferencia = "medicamento" | "diagnostico" | "escala" | "emergencia" | "fluxograma";

export interface ItemReferencia {
  tipo: TipoItemReferencia;
  id: string;
  nome: string;
  href: string;
}
