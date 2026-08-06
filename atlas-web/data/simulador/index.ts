import { CasoSimulador } from "./types";
import { casoBorderlineAltaFuncionalidade } from "./caso-borderline-alta-funcionalidade";
import { casoPanicoRezadeira } from "./caso-panico-rezadeira";
import { oTeoremaDasAntenasDoSeuVanderlei } from "./o-teorema-das-antenas-do-seu-vanderlei";
import { voJardim } from "./vo-jardim";

// Arquivo mantido pelo script scripts/gerar-caso-simulador.ts — cada
// execução acrescenta um import aqui e o nome correspondente no array
// abaixo. Formato do array deliberadamente sempre multilinha (mesmo
// vazio) pra a inserção automática do script ser um regex simples e
// confiável.
export const casosSimulador: CasoSimulador[] = [
  voJardim,
  oTeoremaDasAntenasDoSeuVanderlei,
  casoPanicoRezadeira,
  casoBorderlineAltaFuncionalidade,
];

export * from "./types";
