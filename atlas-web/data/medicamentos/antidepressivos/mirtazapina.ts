import { Medicamento } from "../../types";

export const mirtazapina: Medicamento = {
  id: "mirtazapina",

  nome: "Mirtazapina",

  nomeComercial: [
    "Remeron",
    "Menelat",
  ],

  classe: "Antidepressivo",

  subclasse: "NaSSA",

  mecanismo:
    "Antidepressivo noradrenérgico e serotoninérgico específico (NaSSA). Antagoniza receptores α2-adrenérgicos pré-sinápticos, aumentando a liberação de noradrenalina e serotonina. Também bloqueia receptores 5-HT2, 5-HT3 e H1.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "15 mg/dia",
      doseUsual: "30–45 mg/dia",
      doseMaxima: "45 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "15 mg/dia",
      doseUsual: "15–45 mg/dia",
      doseMaxima: "45 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "15 mg/dia",
      doseUsual: "15–45 mg/dia",
      doseMaxima: "45 mg/dia",
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "15 mg/dia",
      doseUsual: "30–45 mg/dia",
      doseMaxima: "45 mg/dia",
    },
    {
      indicacao: "Insônia associada à depressão",
      doseInicial: "7,5–15 mg/dia",
      doseUsual: "15–30 mg/dia",
      doseMaxima: "45 mg/dia",
    },
  ],

  meiaVida: "20–40 horas",

  metabolizacao:
    "Metabolização hepática pelas enzimas CYP1A2, CYP2D6 e CYP3A4.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno Obsessivo-Compulsivo",
    "Insônia associada à depressão",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à mirtazapina",
  ],

  vantagens: [
    "Baixa incidência de disfunção sexual",
    "Melhora do sono",
    "Melhora do apetite",
    "Boa opção em pacientes com perda de peso",
    "Poucas interações medicamentosas",
  ],

  desvantagens: [
    "Sedação importante",
    "Ganho de peso",
    "Aumento do apetite",
    "Sonolência diurna em alguns pacientes",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Aumento do apetite",
    "Ganho de peso",
    "Boca seca",
    "Constipação",
    "Tontura",
  ],

  interacoes: [
    "IMAO",
    "Álcool",
    "Benzodiazepínicos",
    "Outros depressores do SNC",
    "Tramadol",
    "Linezolida",
  ],

  ganhoPeso: "Alto",

  sedacao: "Alta",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Dados sugerem baixa passagem para o leite materno. Avaliar individualmente.",

  renal:
    "Considerar redução da dose em insuficiência renal moderada a grave.",

  hepatica:
    "Iniciar com doses menores e titular lentamente.",

  observacoes:
    "A mirtazapina é especialmente útil em pacientes com depressão acompanhada de insônia, ansiedade importante, perda ponderal ou redução do apetite. O efeito sedativo costuma ser mais pronunciado em doses de 15 mg ou menos devido ao predomínio do bloqueio H1; com doses mais elevadas, o aumento da atividade noradrenérgica pode reduzir parcialmente essa sedação. É um dos antidepressivos com menor incidência de disfunção sexual.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};