import { depressaoPsicoticaCotard } from "./depressao-psicotica-cotard";
import { deliriumVsDemencia } from "./delirium-vs-demencia";
import { maniaPsicoticaVsEsquizofrenia } from "./mania-psicotica-vs-esquizofrenia";
import { sindromeCatatonica } from "./sindrome-catatonica";
import { panicoDespersonalizacao } from "./panico-despersonalizacao";
import { criseBorderline } from "./crise-borderline";
import { abstinenciaAlcoolica } from "./abstinencia-alcoolica";
import { depressaoPosParto } from "./depressao-pos-parto";
import { tept } from "./tept";

export const casosClinicos = [
  depressaoPsicoticaCotard,
  deliriumVsDemencia,
  maniaPsicoticaVsEsquizofrenia,
  sindromeCatatonica,
  panicoDespersonalizacao,
  criseBorderline,
  abstinenciaAlcoolica,
  depressaoPosParto,
  tept,
];

export * from "./types";
