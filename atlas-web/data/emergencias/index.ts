import { sindromeNeurolepticaMaligna } from "./sindrome-neuroleptica-maligna";
import { sindromeSerotoninergica } from "./sindrome-serotoninergica";
import { intoxicacaoLitio } from "./intoxicacao-litio";
import { deliriumTremens } from "./delirium-tremens";
import { catatoniaMaligna } from "./catatonia-maligna";
import { torsadesDePointes } from "./torsades-de-pointes";

export const emergencias = [
  sindromeNeurolepticaMaligna,
  sindromeSerotoninergica,
  intoxicacaoLitio,
  deliriumTremens,
  catatoniaMaligna,
  torsadesDePointes,
];

export * from "./types";
