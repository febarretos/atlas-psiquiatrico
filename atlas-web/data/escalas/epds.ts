import { Escala, EscalaOpcao } from "./types";

const opcoesReversas: EscalaOpcao[] = [
  { label: "Tanto quanto sempre consegui", valor: 0 },
  { label: "Não tanto quanto antes", valor: 1 },
  { label: "Bem menos do que antes", valor: 2 },
  { label: "Nunca", valor: 3 },
];

const opcoesFrequenciaCrescente: EscalaOpcao[] = [
  { label: "Não, nunca", valor: 0 },
  { label: "Raramente", valor: 1 },
  { label: "Sim, algumas vezes", valor: 2 },
  { label: "Sim, na maioria das vezes", valor: 3 },
];

export const epds: Escala = {
  id: "epds",

  nome: "Edinburgh Postnatal Depression Scale",

  sigla: "EPDS",

  categoria: "Depressão",

  descricao:
    "Instrumento de autorrelato com 10 itens, desenvolvido especificamente para rastreio de sintomas depressivos no período perinatal (gestação e pós-parto). Diferente de escalas gerais de depressão, evita itens somáticos inespecíficos (fadiga, alterações de sono e apetite) que se sobrepõem a mudanças fisiológicas normais da gravidez e do puerpério, focando em sintomas afetivos e cognitivos.",

  instrucoes:
    "Peça à paciente que responda como ela tem se sentido nos últimos 7 dias, e não apenas hoje. Pode ser autoaplicada ou lida pelo profissional em consulta de pré-natal ou puerpério.",

  itens: [
    {
      id: "epds-1",
      texto: "Tenho sido capaz de rir e ver o lado engraçado das coisas",
      opcoes: opcoesReversas,
    },
    {
      id: "epds-2",
      texto: "Tenho sentido prazer em antecipar coisas boas por vir",
      opcoes: opcoesReversas,
    },
    {
      id: "epds-3",
      texto: "Tenho me culpado sem necessidade quando as coisas saem erradas",
      opcoes: opcoesFrequenciaCrescente,
    },
    {
      id: "epds-4",
      texto: "Tenho estado ansiosa ou preocupada sem um bom motivo",
      opcoes: [
        { label: "Não, de jeito nenhum", valor: 0 },
        { label: "Quase nunca", valor: 1 },
        { label: "Sim, algumas vezes", valor: 2 },
        { label: "Sim, muito frequentemente", valor: 3 },
      ],
    },
    {
      id: "epds-5",
      texto: "Tenho sentido medo ou pânico sem ter um bom motivo",
      opcoes: [
        { label: "Não, de jeito nenhum", valor: 0 },
        { label: "Não muito", valor: 1 },
        { label: "Sim, algumas vezes", valor: 2 },
        { label: "Sim, muito frequentemente", valor: 3 },
      ],
    },
    {
      id: "epds-6",
      texto: "As coisas têm me sobrecarregado",
      opcoes: [
        { label: "Não, tenho lidado tão bem quanto antes", valor: 0 },
        { label: "Não, na maior parte do tempo tenho lidado bem", valor: 1 },
        { label: "Sim, às vezes não tenho conseguido lidar tão bem quanto antes", valor: 2 },
        { label: "Sim, na maior parte do tempo não tenho conseguido lidar bem", valor: 3 },
      ],
    },
    {
      id: "epds-7",
      texto: "Tenho estado tão infeliz que tenho tido dificuldade para dormir",
      opcoes: opcoesFrequenciaCrescente,
    },
    {
      id: "epds-8",
      texto: "Tenho me sentido triste ou arrasada",
      opcoes: opcoesFrequenciaCrescente,
    },
    {
      id: "epds-9",
      texto: "Tenho estado tão infeliz que tenho chorado",
      opcoes: opcoesFrequenciaCrescente,
    },
    {
      id: "epds-10",
      texto: "Tive a ideia de fazer mal a mim mesma",
      opcoes: [
        { label: "Nunca", valor: 0 },
        { label: "Raramente", valor: 1 },
        { label: "Algumas vezes", valor: 2 },
        { label: "Sim, muito frequentemente", valor: 3 },
      ],
    },
  ],

  faixas: [
    {
      min: 0,
      max: 8,
      label: "Improvável depressão perinatal",
      cor: "green",
      descricao:
        "Pontuação abaixo do limiar de rastreio. Manter acompanhamento de rotina no pré-natal/puerpério.",
    },
    {
      min: 9,
      max: 12,
      label: "Possível depressão perinatal",
      cor: "yellow",
      descricao:
        "Rastreio positivo em limiar mais sensível. Reavaliar em 2 a 4 semanas e considerar avaliação clínica mais detalhada, especialmente se houver outros fatores de risco.",
    },
    {
      min: 13,
      max: 30,
      label: "Provável depressão perinatal",
      cor: "red",
      descricao:
        "Pontuação acima do ponto de corte validado (≥13) para provável episódio depressivo no período perinatal. Avaliação clínica estruturada indicada, incluindo avaliação ativa de risco de suicídio e, quando aplicável, de risco para o bebê.",
    },
  ],

  notaInterpretacao:
    "Qualquer pontuação maior que 0 no item 10 (ideação de autolesão) requer avaliação clínica de risco de suicídio, independentemente da pontuação total — o mesmo princípio adotado no item 9 do PHQ-9. A EPDS é um instrumento de rastreio, não de diagnóstico: um escore elevado indica necessidade de avaliação clínica completa para confirmar Transtorno Depressivo Maior com início no periparto (ou outro diagnóstico), diferenciando-o do 'baby blues' (sintomas leves e autolimitados nas primeiras 2 semanas pós-parto, sem necessidade de tratamento específico) e descartando ativamente sintomas de humor elevado/irritabilidade e alterações perceptivas sugestivas de psicose puerperal, uma emergência psiquiátrica distinta que exige avaliação e conduta imediatas.",

  referencias: [
    "Cox JL, Holden JM, Sagovsky R. Detection of postnatal depression: development of the 10-item Edinburgh Postnatal Depression Scale. Br J Psychiatry. 1987.",
    "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder.",
  ],
};
