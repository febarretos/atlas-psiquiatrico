import { Escala, EscalaOpcao } from "./types";

const opcoesGravidade: EscalaOpcao[] = [
  { label: "Nenhuma", valor: 0 },
  { label: "Leve", valor: 1 },
  { label: "Moderada", valor: 2 },
  { label: "Grave", valor: 3 },
  { label: "Muito grave", valor: 4 },
];

export const isi: Escala = {
  id: "isi",

  nome: "Insomnia Severity Index",

  sigla: "ISI",

  categoria: "Sono",

  descricao:
    "Instrumento de autorrelato com 7 itens para quantificar a gravidade percebida da insônia (dificuldade para iniciar e manter o sono, despertar precoce) e seu impacto na satisfação com o sono e no funcionamento diurno. Útil tanto para rastreio quanto para monitorar resposta ao tratamento (farmacológico ou Terapia Cognitivo-Comportamental para Insônia — TCC-I).",

  instrucoes:
    "Peça ao paciente que avalie seu padrão de sono considerando as últimas 2 semanas.",

  itens: [
    {
      id: "isi-1",
      texto: "Dificuldade para iniciar o sono (pegar no sono)",
      opcoes: opcoesGravidade,
    },
    {
      id: "isi-2",
      texto: "Dificuldade para manter o sono (despertares noturnos)",
      opcoes: opcoesGravidade,
    },
    {
      id: "isi-3",
      texto: "Problema de despertar muito cedo pela manhã",
      opcoes: opcoesGravidade,
    },
    {
      id: "isi-4",
      texto: "Quão satisfeito(a)/insatisfeito(a) você está com seu padrão de sono atual?",
      opcoes: [
        { label: "Muito satisfeito(a)", valor: 0 },
        { label: "Satisfeito(a)", valor: 1 },
        { label: "Neutro", valor: 2 },
        { label: "Insatisfeito(a)", valor: 3 },
        { label: "Muito insatisfeito(a)", valor: 4 },
      ],
    },
    {
      id: "isi-5",
      texto:
        "O quanto você acha que seu problema de sono interfere no seu funcionamento diário (ex: fadiga, disposição para o trabalho/tarefas diárias, concentração, memória, humor)?",
      opcoes: [
        { label: "Nada", valor: 0 },
        { label: "Um pouco", valor: 1 },
        { label: "Moderadamente", valor: 2 },
        { label: "Bastante", valor: 3 },
        { label: "Muito", valor: 4 },
      ],
    },
    {
      id: "isi-6",
      texto:
        "O quanto você acha que seu problema de sono é perceptível para os outros, em termos de prejuízo à sua qualidade de vida?",
      opcoes: [
        { label: "Nada perceptível", valor: 0 },
        { label: "Um pouco perceptível", valor: 1 },
        { label: "Moderadamente perceptível", valor: 2 },
        { label: "Bastante perceptível", valor: 3 },
        { label: "Muito perceptível", valor: 4 },
      ],
    },
    {
      id: "isi-7",
      texto: "O quanto você está preocupado(a)/angustiado(a) com seu problema de sono atual?",
      opcoes: [
        { label: "Nada", valor: 0 },
        { label: "Um pouco", valor: 1 },
        { label: "Moderadamente", valor: 2 },
        { label: "Bastante", valor: 3 },
        { label: "Muito", valor: 4 },
      ],
    },
  ],

  faixas: [
    {
      min: 0,
      max: 7,
      label: "Ausência de insônia clinicamente significativa",
      cor: "green",
      descricao: "Padrão de sono dentro da normalidade percebida pelo paciente.",
    },
    {
      min: 8,
      max: 14,
      label: "Insônia subclínica (limiar)",
      cor: "blue",
      descricao:
        "Sintomas leves, ainda abaixo do limiar diagnóstico pleno; monitorar e reforçar higiene do sono.",
    },
    {
      min: 15,
      max: 21,
      label: "Insônia clínica moderada",
      cor: "yellow",
      descricao:
        "Indicado tratamento ativo; TCC-I é a primeira linha, com ou sem farmacoterapia adjuvante de curto prazo.",
    },
    {
      min: 22,
      max: 28,
      label: "Insônia clínica grave",
      cor: "red",
      descricao:
        "Impacto funcional significativo; tratamento ativo prioritário e investigação de comorbidades (transtornos de humor/ansiedade, apneia do sono, uso de substâncias).",
    },
  ],

  notaInterpretacao:
    "O ISI mede a gravidade percebida da insônia e seu impacto subjetivo, não substitui a investigação de causas orgânicas (ex: apneia obstrutiva do sono, síndrome das pernas inquietas) nem a avaliação de higiene do sono e uso de substâncias estimulantes/álcool antes de dormir. Insônia persistente é, com frequência, sintoma de outro transtorno psiquiátrico de base (depressão, TAG, TEPT) ou fator de risco independente para seu desenvolvimento/recaída — sempre investigar ativamente sintomas de humor e ansiedade concomitantes diante de pontuação elevada, e não tratar a insônia isoladamente sem essa avaliação.",

  referencias: [
    "Bastien CH, Vallières A, Morin CM. Validation of the Insomnia Severity Index as an outcome measure for insomnia research. Sleep Med. 2001.",
    "Morin CM, Belleville G, Bélanger L, Ivers H. The Insomnia Severity Index: psychometric indicators to detect insomnia cases and evaluate treatment response. Sleep. 2011.",
  ],
};
