import { depressaoPsicoticaCotard } from "./depressao-psicotica-cotard";
import { deliriumVsDemencia } from "./delirium-vs-demencia";
import { maniaPsicoticaVsEsquizofrenia } from "./mania-psicotica-vs-esquizofrenia";
import { sindromeCatatonica } from "./sindrome-catatonica";
import { panicoDespersonalizacao } from "./panico-despersonalizacao";
import { criseBorderline } from "./crise-borderline";
import { abstinenciaAlcoolica } from "./abstinencia-alcoolica";
import { depressaoPosParto } from "./depressao-pos-parto";
import { tept } from "./tept";
// Casos vindos do módulo Simulador (fundido aqui — ver
// components/CasoInterativoPlayer.tsx e data/casos-clinicos/types.ts).
// Arquivo mantido pelo script scripts/gerar-caso-simulador.ts — cada
// execução acrescenta um import aqui e o nome correspondente no array
// abaixo (regex simples, sempre multilinha mesmo quando pequeno).
import { voJardim } from "./vo-jardim";
import { oTeoremaDasAntenasDoSeuVanderlei } from "./o-teorema-das-antenas-do-seu-vanderlei";
import { casoPanicoRezadeira } from "./caso-panico-rezadeira";
import { casoBorderlineAltaFuncionalidade } from "./caso-borderline-alta-funcionalidade";

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
  voJardim,
  oTeoremaDasAntenasDoSeuVanderlei,
  casoPanicoRezadeira,
  casoBorderlineAltaFuncionalidade,
];

export * from "./types";
