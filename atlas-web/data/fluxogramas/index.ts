import { depressaoMaior } from "./depressao-maior";
import { agitacaoPsicomotora } from "./agitacao-psicomotora";
import { riscoSuicidio } from "./risco-suicidio";
import { maniaAguda } from "./mania-aguda";
import { manejoToc } from "./manejo-toc";
import { esquizofreniaRefrataria } from "./esquizofrenia-refrataria";
import { abstinenciaAlcoolica } from "./abstinencia-alcoolica";
import { manejoAnsiedade } from "./manejo-ansiedade";
import { manejoTranstornoBipolar } from "./manejo-transtorno-bipolar";
import { avaliacaoDemencia } from "./avaliacao-demencia";

export const fluxogramas = [
  riscoSuicidio,
  depressaoMaior,
  manejoTranstornoBipolar,
  manejoAnsiedade,
  agitacaoPsicomotora,
  maniaAguda,
  manejoToc,
  esquizofreniaRefrataria,
  abstinenciaAlcoolica,
  avaliacaoDemencia,
];
