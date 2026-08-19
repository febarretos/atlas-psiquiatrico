import { Escala, EscalaOpcao } from "./types";

function opcoesSimNao(valorSeSim: number): EscalaOpcao[] {
  return [
    { label: "Não", valor: 0 },
    { label: "Sim", valor: valorSeSim },
  ];
}

export const cssrs: Escala = {
  id: "cssrs",

  nome: "Columbia-Suicide Severity Rating Scale (Triagem)",

  sigla: "C-SSRS Screener",

  categoria: "Risco de Suicídio",

  descricao:
    "Versão de triagem (screener) da C-SSRS para identificar rapidamente o nível de gravidade da ideação suicida e a presença de comportamento suicida recente. Deve ser aplicada por entrevista direta, não como questionário de autopreenchimento.",

  instrucoes:
    "Pergunte sequencialmente ao paciente sobre o último mês (para ideação) e os últimos 3 meses (para comportamento). Cada pergunta pressupõe as anteriores como contexto (ex: a pergunta 2 refere-se a pensamentos ativos de suicídio, não apenas ao desejo de morrer da pergunta 1).",

  modoDePontuacao: "maiorItemPositivo",

  itens: [
    {
      id: "cssrs-1",
      texto:
        "Nas últimas semanas, o paciente desejou estar morto(a) ou desejou poder dormir e não acordar mais?",
      opcoes: opcoesSimNao(1),
    },
    {
      id: "cssrs-2",
      texto:
        "Nas últimas semanas, o paciente teve pensamentos ativos e não específicos de se matar (ex: 'pensei em me matar', sem pensar em como)?",
      opcoes: opcoesSimNao(2),
    },
    {
      id: "cssrs-3",
      texto:
        "O paciente pensou em como poderia fazer isso (método), mesmo sem intenção de agir?",
      opcoes: opcoesSimNao(3),
    },
    {
      id: "cssrs-4",
      texto:
        "O paciente teve algum grau de intenção de agir sobre esses pensamentos suicidas, além de apenas pensar neles?",
      opcoes: opcoesSimNao(5),
    },
    {
      id: "cssrs-5",
      texto:
        "O paciente começou a elaborar ou já elaborou um plano detalhado (quando, onde, como) sobre como se mataria, com intenção de executá-lo?",
      opcoes: opcoesSimNao(6),
    },
    {
      id: "cssrs-6",
      texto:
        "Em algum momento da vida, o paciente já fez algo, começou a fazer algo, ou se preparou para fazer algo com o objetivo de terminar a própria vida (ex: reuniu comprimidos, escreveu um bilhete de despedida, pegou uma arma, tentativa interrompida por terceiros, tentativa abortada, ou uma tentativa real)? Se sim, isso ocorreu nos últimos 3 meses?",
      opcoes: [
        { label: "Nunca", valor: 0 },
        { label: "Sim, mas há mais de 3 meses", valor: 4 },
        { label: "Sim, nos últimos 3 meses", valor: 7 },
      ],
    },
  ],

  faixas: [
    {
      min: 0,
      max: 0,
      label: "Nenhuma ideação identificada",
      cor: "green",
      descricao:
        "Nenhuma resposta positiva no momento. Reavaliar em toda consulta, especialmente diante de mudança clínica.",
    },
    {
      min: 1,
      max: 2,
      label: "Ideação suicida passiva/inespecífica — risco baixo",
      cor: "blue",
      descricao:
        "Investigar fatores de risco e proteção, frequência/duração dos pensamentos, e reavaliar rotineiramente. Não requer necessariamente conduta de urgência isoladamente.",
    },
    {
      min: 3,
      max: 4,
      label:
        "Ideação suicida ativa com método (sem intenção), ou comportamento suicida preparatório há mais de 3 meses — risco moderado",
      cor: "yellow",
      descricao:
        "Avaliação de risco aprofundada indicada. Considerar plano de segurança por escrito, envolvimento da rede de apoio, redução do acesso a meios letais e reavaliação em curto prazo.",
    },
    {
      min: 5,
      max: 7,
      label:
        "Alguma intenção de agir, plano específico, ou comportamento suicida nos últimos 3 meses — risco alto",
      cor: "red",
      descricao:
        "Priorizar segurança imediata: avaliar necessidade de internação (voluntária ou involuntária se risco iminente), remover acesso a meios letais, garantir supervisão, e encaminhar/acionar avaliação psiquiátrica de urgência sem demora.",
    },
  ],

  notaInterpretacao:
    "Esta é a versão resumida de TRIAGEM da C-SSRS, útil para estratificação rápida de risco. Qualquer resposta positiva a partir do item 3 (pensou em método) já indica necessidade de avaliação de risco mais aprofundada, incluindo perguntas sobre frequência, controlabilidade dos pensamentos, dissuasores, razões para viver e acesso concreto a meios letais — a versão completa da C-SSRS (Lifetime/Recent) é o instrumento indicado para essa avaliação detalhada. Qualquer grau de intenção de agir (item 4), não só um plano específico (item 5), já classifica o paciente como alto risco pelo protocolo oficial do Columbia Lighthouse Project — os valores dos itens 4, 5 e 6 (comportamento recente) foram escolhidos deliberadamente para caírem todos na faixa de risco alto, distintos do item 6 há mais de 3 meses (risco moderado), evitando que a pontuação por maior item os confunda. Comportamento suicida recente (item 6, últimos 3 meses) classifica o paciente como alto risco independentemente da pontuação de ideação. Este instrumento não substitui o julgamento clínico nem uma entrevista de risco completa.",

  referencias: [
    "Posner K, et al. The Columbia-Suicide Severity Rating Scale: initial validity and internal consistency findings from three multisite studies with adolescents and adults. Am J Psychiatry. 2011.",
    "The Columbia Lighthouse Project — Columbia Protocol Screener (cssrs.columbia.edu).",
  ],
};
