import { depressaoPsicoticaCotard } from "./depressao-psicotica-cotard";
import { deliriumVsDemencia } from "./delirium-vs-demencia";
import { maniaPsicoticaVsEsquizofrenia } from "./mania-psicotica-vs-esquizofrenia";
import { sindromeCatatonica } from "./sindrome-catatonica";
import { panicoDespersonalizacao } from "./panico-despersonalizacao";

export const casosClinicos = [
  depressaoPsicoticaCotard,
  deliriumVsDemencia,
  maniaPsicoticaVsEsquizofrenia,
  sindromeCatatonica,
  panicoDespersonalizacao,
];

export * from "./types";
