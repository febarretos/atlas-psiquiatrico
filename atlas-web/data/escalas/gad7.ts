import { Escala, EscalaOpcao } from "./types";

const opcoesPadrao: EscalaOpcao[] = [
  { label: "Nunca", valor: 0 },
  { label: "Vários dias", valor: 1 },
  { label: "Mais da metade dos dias", valor: 2 },
  { label: "Quase todos os dias", valor: 3 },
];

export const gad7: Escala = {
  id: "gad7",

  nome: "Generalized Anxiety Disorder-7",

  sigla: "GAD-7",

  categoria: "Ansiedade",

  descricao:
    "Instrumento de autorrelato para rastreio e monitoramento da gravidade de sintomas de ansiedade generalizada.",

  instrucoes:
    "Nas últimas 2 semanas, com que frequência o paciente foi incomodado por cada um dos seguintes problemas?",

  itens: [
    {
      id: "gad7-1",
      texto: "Sentir-se nervoso(a), ansioso(a) ou muito tenso(a)",
      opcoes: opcoesPadrao,
    },
    {
      id: "gad7-2",
      texto: "Não conseguir parar ou controlar as preocupações",
      opcoes: opcoesPadrao,
    },
    {
      id: "gad7-3",
      texto: "Preocupar-se demais com diversas coisas",
      opcoes: opcoesPadrao,
    },
    {
      id: "gad7-4",
      texto: "Dificuldade para relaxar",
      opcoes: opcoesPadrao,
    },
    {
      id: "gad7-5",
      texto:
        "Ficar tão agitado(a) que se torna difícil permanecer sentado(a)",
      opcoes: opcoesPadrao,
    },
    {
      id: "gad7-6",
      texto: "Ficar facilmente irritado(a) ou aborrecido(a)",
      opcoes: opcoesPadrao,
    },
    {
      id: "gad7-7",
      texto: "Sentir medo como se algo terrível fosse acontecer",
      opcoes: opcoesPadrao,
    },
  ],

  faixas: [
    {
      min: 0,
      max: 4,
      label: "Ansiedade mínima",
      cor: "green",
      descricao: "Sintomas mínimos ou ausentes de ansiedade.",
    },
    {
      min: 5,
      max: 9,
      label: "Ansiedade leve",
      cor: "blue",
      descricao: "Considerar monitoramento e reavaliação em curto prazo.",
    },
    {
      min: 10,
      max: 14,
      label: "Ansiedade moderada",
      cor: "yellow",
      descricao:
        "Avaliação clínica adicional indicada; considerar tratamento.",
    },
    {
      min: 15,
      max: 21,
      label: "Ansiedade grave",
      cor: "red",
      descricao:
        "Tratamento ativo indicado (psicoterapia e/ou farmacoterapia).",
    },
  ],

  notaInterpretacao:
    "Um ponto de corte ≥10 apresenta boa sensibilidade e especificidade para transtorno de ansiedade generalizada, mas o instrumento também é útil para rastrear outros transtornos de ansiedade (pânico, fobia social, TEPT).",

  referencias: [
    "Spitzer RL, Kroenke K, Williams JB, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006.",
  ],
};
