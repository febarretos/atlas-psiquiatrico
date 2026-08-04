import { sindromeNeurolepticaMaligna } from "./sindrome-neuroleptica-maligna";
import { sindromeSerotoninergica } from "./sindrome-serotoninergica";
import { intoxicacaoLitio } from "./intoxicacao-litio";
import { deliriumTremens } from "./delirium-tremens";
import { catatoniaMaligna } from "./catatonia-maligna";
import { torsadesDePointes } from "./torsades-de-pointes";
import { riscoSuicidioAgudo } from "./risco-suicidio-agudo";
import { agitacaoPsicomotoraAguda } from "./agitacao-psicomotora-aguda";
import { surtoPsicoticoAgudo } from "./surto-psicotico-agudo";
import { abstinenciaBenzodiazepinicos } from "./abstinencia-benzodiazepinicos";
import { convulsaoAbstinenciaAlcoolica } from "./convulsao-abstinencia-alcoolica";
import { abstinenciaOpioides } from "./abstinencia-opioides";
import { distoniaAguda } from "./distonia-aguda";
import { acatisiaGrave } from "./acatisia-grave";
import { psicosePuerperal } from "./psicose-puerperal";
import { overdoseTriciclicos } from "./overdose-triciclicos";

export const emergencias = [
  sindromeNeurolepticaMaligna,
  sindromeSerotoninergica,
  intoxicacaoLitio,
  deliriumTremens,
  catatoniaMaligna,
  torsadesDePointes,
  riscoSuicidioAgudo,
  agitacaoPsicomotoraAguda,
  surtoPsicoticoAgudo,
  abstinenciaBenzodiazepinicos,
  convulsaoAbstinenciaAlcoolica,
  abstinenciaOpioides,
  distoniaAguda,
  acatisiaGrave,
  psicosePuerperal,
  overdoseTriciclicos,
];

export * from "./types";
