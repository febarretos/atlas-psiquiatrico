import { Escala, EscalaOpcao } from "./types";

const opcoesPadrao: EscalaOpcao[] = [
  { label: "Nada", valor: 0 },
  { label: "Um pouco", valor: 1 },
  { label: "Moderadamente", valor: 2 },
  { label: "Bastante", valor: 3 },
  { label: "Extremamente", valor: 4 },
];

export const pcl5: Escala = {
  id: "pcl5",

  nome: "PTSD Checklist for DSM-5",

  sigla: "PCL-5",

  categoria: "TEPT",

  descricao:
    "Instrumento de autorrelato com 20 itens para rastreio e monitoramento da gravidade de sintomas de Transtorno de Estresse Pós-Traumático (TEPT), cobrindo os quatro clusters de sintomas definidos no DSM-5: intrusão, evitação, alterações negativas em cognição e humor, e alterações na excitabilidade e reatividade.",

  instrucoes:
    "Peça ao paciente que identifique o evento mais perturbador vivenciado (o \"evento index\") e responda o quanto foi incomodado(a) por cada um dos problemas abaixo nas últimas 4 semanas, em relação a esse evento.",

  itens: [
    {
      id: "pcl5-1",
      texto:
        "Lembranças repetidas, perturbadoras e indesejadas do evento estressante",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-2",
      texto: "Sonhos repetidos e perturbadores relacionados ao evento estressante",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-3",
      texto:
        "De repente sentir ou agir como se o evento estressante estivesse acontecendo de novo (flashbacks)",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-4",
      texto: "Sentir-se muito chateado(a) quando algo lembra o evento estressante",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-5",
      texto:
        "Ter fortes reações físicas (coração acelerado, dificuldade para respirar, sudorese) ao lembrar do evento estressante",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-6",
      texto: "Evitar lembranças, pensamentos ou sentimentos relacionados ao evento estressante",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-7",
      texto:
        "Evitar coisas externas que lembrem o evento estressante (pessoas, lugares, conversas, atividades, objetos, situações)",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-8",
      texto: "Dificuldade para lembrar partes importantes do evento estressante",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-9",
      texto:
        "Crenças negativas fortes sobre si mesmo(a), outras pessoas ou o mundo (ex: \"eu sou mau(á)\", \"não se pode confiar em ninguém\", \"o mundo é totalmente perigoso\")",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-10",
      texto: "Culpar a si mesmo(a) ou outra pessoa pelo evento estressante ou pelo que aconteceu depois dele",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-11",
      texto: "Sentimentos negativos fortes, como medo, horror, raiva, culpa ou vergonha",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-12",
      texto: "Perda de interesse em atividades de que costumava gostar",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-13",
      texto: "Sentir-se distante ou afastado(a) das outras pessoas",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-14",
      texto:
        "Dificuldade para sentir emoções positivas (ex: incapacidade de sentir felicidade ou amor por pessoas próximas)",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-15",
      texto: "Comportamento irritado, explosões de raiva ou agressividade",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-16",
      texto: "Assumir riscos excessivos ou ter comportamento autodestrutivo",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-17",
      texto: "Estar excessivamente alerta, vigilante ou cauteloso",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-18",
      texto: "Sentir-se sobressaltado(a) ou assustar-se com facilidade",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-19",
      texto: "Dificuldade de concentração",
      opcoes: opcoesPadrao,
    },
    {
      id: "pcl5-20",
      texto: "Dificuldade para dormir ou sono não reparador",
      opcoes: opcoesPadrao,
    },
  ],

  faixas: [
    {
      min: 0,
      max: 32,
      label: "Abaixo do limiar",
      cor: "green",
      descricao: "Sintomatologia abaixo do ponto de corte sugestivo de TEPT.",
    },
    {
      min: 33,
      max: 80,
      label: "Sugestivo de TEPT",
      cor: "red",
      descricao:
        "Pontuação acima do ponto de corte validado (≥33); avaliação clínica estruturada indicada para confirmação diagnóstica.",
    },
  ],

  notaInterpretacao:
    "O ponto de corte ≥33 é o valor validado com melhor equilíbrio entre sensibilidade e especificidade para identificar TEPT provável, mas pode variar conforme a população (militares, civis, atenção primária). O PCL-5 é um instrumento de rastreio e monitoramento de gravidade, não de diagnóstico: a confirmação exige entrevista clínica estruturada (ex: CAPS-5) e avaliação da presença do critério A (exposição a evento traumático) segundo os critérios do DSM-5.",

  referencias: [
    "Weathers FW, Litz BT, Keane TM, Palmieri PA, Marx BP, Schnurr PP. The PTSD Checklist for DSM-5 (PCL-5). National Center for PTSD, 2013.",
    "Blevins CA, Weathers FW, Davis MT, Witte TK, Domino JL. The Posttraumatic Stress Disorder Checklist for DSM-5 (PCL-5): development and initial psychometric evaluation. J Trauma Stress. 2015.",
  ],
};
