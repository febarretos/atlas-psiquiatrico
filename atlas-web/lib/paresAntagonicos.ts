export interface ParAntagonico {
  idA: string;
  idB: string;
  aviso: string;
}

// Lista curta e explicitamente não-exaustiva de pares clássicos de
// condições-alvo cujo tratamento de primeira linha para uma pode piorar a
// outra — uma curadoria clínica completa de todos os pares possíveis (das
// ~23 condições-alvo cadastradas) seria um projeto à parte. O objetivo
// aqui não é substituir julgamento clínico sobre combinações, é sinalizar
// os casos mais conhecidos em que tratar os dois "alvos" como dimensões
// independentes e aditivas é um erro real e comum.
export const paresAntagonicos: ParAntagonico[] = [
  {
    idA: "tdah",
    idB: "mania-aguda",
    aviso:
      "TDAH + Mania Aguda selecionados juntos: estimulantes podem precipitar ou agravar um episódio maníaco — tratar/estabilizar a mania antes de considerar tratamento estimulante.",
  },
  {
    idA: "tdah",
    idB: "esquizofrenia",
    aviso:
      "TDAH + Esquizofrenia selecionados juntos: estimulantes podem exacerbar sintomas psicóticos — avaliar com cautela e priorizar a estabilização do quadro psicótico.",
  },
  {
    idA: "mania-aguda",
    idB: "depressao-maior",
    aviso:
      "Mania Aguda + Transtorno Depressivo Maior selecionados juntos: considerar se não se trata de um episódio depressivo bipolar não reconhecido — antidepressivo isolado, sem estabilizador de humor associado, pode precipitar viragem maníaca.",
  },
];

export function paresAntagonicosAtivos(idsSelecionados: Set<string>): ParAntagonico[] {
  return paresAntagonicos.filter(
    (p) => idsSelecionados.has(p.idA) && idsSelecionados.has(p.idB)
  );
}
