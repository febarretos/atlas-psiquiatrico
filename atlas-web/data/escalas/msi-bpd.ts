import { Escala, EscalaOpcao } from "./types";

const simNao: EscalaOpcao[] = [
  { label: "Não", valor: 0 },
  { label: "Sim", valor: 1 },
];

export const msiBpd: Escala = {
  id: "msi-bpd",

  nome: "McLean Screening Instrument for Borderline Personality Disorder",

  sigla: "MSI-BPD",

  categoria: "Transtornos de Personalidade",

  descricao:
    "Instrumento de autorrelato para rastreio de Transtorno de Personalidade Borderline, correspondente aos 9 critérios diagnósticos do DSM-5-TR (ver também a página deste transtorno no módulo Diagnósticos). É a alternativa validada de autorrelato mais usada na prática e em pesquisa — entrevistas estruturadas como a SCID-5-PD (Structured Clinical Interview for DSM-5 Personality Disorders) são instrumentos protegidos por direitos autorais, aplicados por entrevistador treinado, e não estão reproduzidas aqui.",

  instrucoes:
    "Responda se cada afirmação descreveu o paciente na maior parte do tempo, ao longo de vários anos, considerando diferentes situações e relacionamentos.",

  itens: [
    {
      id: "msibpd-1",
      texto:
        "Algum dos seus relacionamentos mais próximos foi marcado por muitos altos e baixos (idealização seguida de desvalorização)?",
      opcoes: simNao,
    },
    {
      id: "msibpd-2",
      texto:
        "O paciente já se machucou fisicamente de propósito (ex: se cortou, se queimou) ou fez uma tentativa de suicídio?",
      opcoes: simNao,
    },
    {
      id: "msibpd-3",
      texto:
        "O paciente teve pelo menos dois outros problemas de impulsividade (ex: compulsão alimentar, gastos excessivos, uso de substâncias, direção perigosa, promiscuidade sexual)?",
      opcoes: simNao,
    },
    {
      id: "msibpd-4",
      texto: "O paciente tem sido extremamente instável no humor?",
      opcoes: simNao,
    },
    {
      id: "msibpd-5",
      texto:
        "O paciente sentiu muita raiva na maior parte do tempo, ou agiu com raiva ou sarcasmo com frequência?",
      opcoes: simNao,
    },
    {
      id: "msibpd-6",
      texto: "O paciente tem sido frequentemente desconfiado(a) de outras pessoas?",
      opcoes: simNao,
    },
    {
      id: "msibpd-7",
      texto:
        "O paciente frequentemente se sentiu 'irreal' ou como se as coisas ao redor não fossem reais?",
      opcoes: simNao,
    },
    {
      id: "msibpd-8",
      texto: "O paciente tem sentido um vazio crônico?",
      opcoes: simNao,
    },
    {
      id: "msibpd-9",
      texto:
        "O paciente frequentemente sentiu que não sabia quem realmente é, ou que não tem uma identidade própria?",
      opcoes: simNao,
    },
    {
      id: "msibpd-10",
      texto:
        "O paciente já fez esforços desesperados para evitar se sentir abandonado(a) ou evitar ser abandonado(a) (ex: ligou repetidamente para se assegurar de que a pessoa ainda se importava, implorou para não ser deixado(a), agarrou-se fisicamente a alguém)?",
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
        "Número de critérios endossados abaixo do ponto de corte validado.",
    },
    {
      min: 7,
      max: 10,
      label: "Rastreio positivo",
      cor: "red",
      descricao:
        "Padrão sugestivo de Transtorno de Personalidade Borderline; avaliação diagnóstica estruturada indicada.",
    },
  ],

  notaInterpretacao:
    "Ponto de corte validado ≥7 respostas 'Sim' em 10 (sensibilidade ~0,81; especificidade ~0,85) para sugerir Transtorno de Personalidade Borderline. É um instrumento de RASTREIO, não diagnóstico: traços de personalidade exigem, por definição do DSM-5-TR, um padrão persistente, inflexível e estável desde o início da idade adulta, presente em múltiplos contextos, para serem considerados um transtorno de personalidade — não devem ser diagnosticados com base apenas em um episódio de crise aguda. O item 2 (autolesão/tentativa de suicídio), se positivo, deve sempre motivar avaliação de risco de suicídio complementar (ver a escala C-SSRS e o fluxograma de Avaliação e Manejo do Risco de Suicídio, disponíveis neste app). Consulte a página 'Transtorno de Personalidade Borderline' no módulo Diagnósticos para os critérios completos do DSM-5-TR.",

  referencias: [
    "Zanarini MC, et al. A screening measure for BPD: the McLean Screening Instrument for Borderline Personality Disorder (MSI-BPD). J Pers Disord. 2003.",
    "First MB, et al. Structured Clinical Interview for DSM-5 Personality Disorders (SCID-5-PD). American Psychiatric Association Publishing, 2016.",
  ],
};
