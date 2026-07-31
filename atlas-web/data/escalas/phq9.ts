import { Escala, EscalaOpcao } from "./types";

const opcoesPadrao: EscalaOpcao[] = [
  { label: "Nunca", valor: 0 },
  { label: "Vários dias", valor: 1 },
  { label: "Mais da metade dos dias", valor: 2 },
  { label: "Quase todos os dias", valor: 3 },
];

export const phq9: Escala = {
  id: "phq9",

  nome: "Patient Health Questionnaire-9",

  sigla: "PHQ-9",

  categoria: "Depressão",

  descricao:
    "Instrumento de autorrelato para rastreio e monitoramento da gravidade de sintomas depressivos, amplamente utilizado na atenção primária e na psiquiatria.",

  instrucoes:
    "Nas últimas 2 semanas, com que frequência o paciente foi incomodado por cada um dos seguintes problemas?",

  itens: [
    {
      id: "phq9-1",
      texto: "Pouco interesse ou prazer em fazer as coisas",
      opcoes: opcoesPadrao,
    },
    {
      id: "phq9-2",
      texto: "Sentir-se para baixo, deprimido(a) ou sem perspectiva",
      opcoes: opcoesPadrao,
    },
    {
      id: "phq9-3",
      texto:
        "Dificuldade para pegar no sono, permanecer dormindo ou dormir demais",
      opcoes: opcoesPadrao,
    },
    {
      id: "phq9-4",
      texto: "Sentir-se cansado(a) ou com pouca energia",
      opcoes: opcoesPadrao,
    },
    {
      id: "phq9-5",
      texto: "Falta de apetite ou comer em excesso",
      opcoes: opcoesPadrao,
    },
    {
      id: "phq9-6",
      texto:
        "Sentir-se mal consigo mesmo(a), ou que é um fracasso, ou que decepcionou a si mesmo(a) ou a sua família",
      opcoes: opcoesPadrao,
    },
    {
      id: "phq9-7",
      texto:
        "Dificuldade para se concentrar em tarefas como ler o jornal ou assistir à televisão",
      opcoes: opcoesPadrao,
    },
    {
      id: "phq9-8",
      texto:
        "Lentidão para se movimentar ou falar, perceptível por outras pessoas, ou o oposto: estar tão agitado(a) que se movimentou muito mais do que o habitual",
      opcoes: opcoesPadrao,
    },
    {
      id: "phq9-9",
      texto:
        "Pensamentos de que seria melhor estar morto(a) ou de se machucar de alguma forma",
      opcoes: opcoesPadrao,
    },
  ],

  faixas: [
    {
      min: 0,
      max: 4,
      label: "Depressão mínima",
      cor: "green",
      descricao: "Sintomas mínimos ou ausentes de depressão.",
    },
    {
      min: 5,
      max: 9,
      label: "Depressão leve",
      cor: "blue",
      descricao: "Considerar monitoramento e reavaliação em curto prazo.",
    },
    {
      min: 10,
      max: 14,
      label: "Depressão moderada",
      cor: "yellow",
      descricao:
        "Considerar tratamento (psicoterapia e/ou farmacoterapia).",
    },
    {
      min: 15,
      max: 19,
      label: "Depressão moderadamente grave",
      cor: "red",
      descricao:
        "Tratamento ativo indicado (farmacoterapia e/ou psicoterapia combinada).",
    },
    {
      min: 20,
      max: 27,
      label: "Depressão grave",
      cor: "red",
      descricao:
        "Tratamento ativo imediato indicado; avaliar risco de suicídio e necessidade de encaminhamento urgente.",
    },
  ],

  notaInterpretacao:
    "Qualquer pontuação maior que 0 no item 9 (pensamentos de morte ou de se machucar) requer avaliação clínica de risco de suicídio, independentemente da pontuação total.",

  referencias: [
    "Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001.",
    "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
  ],
};
