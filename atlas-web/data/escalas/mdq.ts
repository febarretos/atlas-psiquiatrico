import { Escala, EscalaOpcao } from "./types";

const simNao: EscalaOpcao[] = [
  { label: "Não", valor: 0 },
  { label: "Sim", valor: 1 },
];

export const mdq: Escala = {
  id: "mdq",

  nome: "Mood Disorder Questionnaire",

  sigla: "MDQ",

  categoria: "Transtorno Bipolar",

  descricao:
    "Instrumento de autorrelato para rastreio de transtorno do espectro bipolar, investigando histórico de sintomas de hipomania/mania.",

  instrucoes:
    "Responda se o paciente já teve, em algum momento da vida, um período em que não estava apenas se sentindo bem ou 'normal', mas apresentava simultaneamente vários dos sintomas abaixo, e isso causou algum tipo de problema.",

  itens: [
    {
      id: "mdq-1",
      texto:
        "Estava tão irritado(a) que gritava com as pessoas ou iniciava brigas ou discussões",
      opcoes: simNao,
    },
    {
      id: "mdq-2",
      texto: "Sentia-se muito mais autoconfiante que o habitual",
      opcoes: simNao,
    },
    {
      id: "mdq-3",
      texto:
        "Dormia muito menos que o habitual e não sentia falta desse sono",
      opcoes: simNao,
    },
    {
      id: "mdq-4",
      texto: "Estava muito mais falante ou falava mais rápido que o habitual",
      opcoes: simNao,
    },
    {
      id: "mdq-5",
      texto:
        "Os pensamentos corriam na cabeça ou não conseguia diminuir o ritmo da mente",
      opcoes: simNao,
    },
    {
      id: "mdq-6",
      texto:
        "Distraía-se tão facilmente por coisas ao redor que tinha dificuldade em manter o foco",
      opcoes: simNao,
    },
    {
      id: "mdq-7",
      texto: "Tinha muito mais energia que o habitual",
      opcoes: simNao,
    },
    {
      id: "mdq-8",
      texto:
        "Estava muito mais ativo(a) ou fazia muito mais coisas que o habitual",
      opcoes: simNao,
    },
    {
      id: "mdq-9",
      texto:
        "Estava muito mais sociável ou extrovertido(a), por exemplo, telefonando para amigos no meio da noite",
      opcoes: simNao,
    },
    {
      id: "mdq-10",
      texto: "Estava muito mais interessado(a) em sexo que o habitual",
      opcoes: simNao,
    },
    {
      id: "mdq-11",
      texto:
        "Fazia coisas incomuns para si ou que outras pessoas poderiam considerar excessivas, tolas ou arriscadas",
      opcoes: simNao,
    },
    {
      id: "mdq-12",
      texto:
        "Gastar dinheiro trouxe problemas para o paciente ou sua família",
      opcoes: simNao,
    },
    {
      id: "mdq-13",
      texto:
        "Em algum desses períodos, sentiu-se especialmente mais criativo(a), produtivo(a) ou eufórico(a)",
      opcoes: simNao,
    },
  ],

  faixas: [
    {
      min: 0,
      max: 6,
      label: "Rastreio negativo",
      cor: "green",
      descricao:
        "Número de sintomas concomitantes abaixo do limiar de rastreio positivo.",
    },
    {
      min: 7,
      max: 13,
      label: "Rastreio positivo (sintomático)",
      cor: "yellow",
      descricao:
        "Número de sintomas atinge o limiar de rastreio; verificar concomitância e impacto funcional para completar a interpretação (ver nota abaixo).",
    },
  ],

  notaInterpretacao:
    "O MDQ é considerado POSITIVO apenas quando três condições são satisfeitas simultaneamente: (1) 7 ou mais dos 13 sintomas acima são endossados como 'Sim'; (2) vários desses sintomas ocorreram no mesmo período de tempo; e (3) esses sintomas causaram problema moderado ou sério (por exemplo, dificuldades no trabalho, em casa, com finanças, com a lei ou em relacionamentos) — e não apenas 'nenhum problema' ou 'problema leve'. A pontuação da soma dos itens 1-13 é apenas o primeiro critério; as perguntas sobre concomitância dos sintomas e sobre a gravidade do impacto funcional devem ser feitas separadamente ao paciente e consideradas em conjunto com a contagem de sintomas antes de concluir se o rastreio é positivo ou negativo. Um rastreio positivo sugere a necessidade de avaliação diagnóstica completa para transtorno bipolar, mas não é, por si só, diagnóstico.",

  referencias: [
    "Hirschfeld RM, et al. Development and validation of a screening instrument for bipolar spectrum disorder: the Mood Disorder Questionnaire. Am J Psychiatry. 2000.",
  ],
};
