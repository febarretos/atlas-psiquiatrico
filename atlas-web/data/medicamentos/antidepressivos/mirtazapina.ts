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
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "15 mg/dia",
      doseUsual: "15–45 mg/dia",
      doseMaxima: "45 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "15 mg/dia",
      doseUsual: "15–45 mg/dia",
      doseMaxima: "45 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "15 mg/dia",
      doseUsual: "30–45 mg/dia",
      doseMaxima: "45 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Insônia associada à depressão",
      doseInicial: "7,5–15 mg/dia",
      doseUsual: "15–30 mg/dia",
      doseMaxima: "45 mg/dia",
      nivelEvidencia: 4,
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

  serotoninergico: true,

  cargaAnticolinergica: "Baixa",

  interacoes: [
    "IMAO",
    "Álcool",
    "Benzodiazepínicos",
    "Outros depressores do SNC",
    "Tramadol",
    "Linezolida",
    "Inibidores potentes da CYP3A4 (cetoconazol, itraconazol, inibidores de protease, eritromicina — aumentam os níveis séricos de mirtazapina)",
    "Indutores potentes da CYP3A4 (carbamazepina, fenitoína, rifampicina — reduzem os níveis séricos de mirtazapina)",
    "Varfarina (pode potencializar o efeito hipoprotrombinêmico, aumentando o INR e o risco de sangramento)",
  ],

  ganhoPeso: "Alto",

  sedacao: "Alta",

  sexual: "Muito baixa",

  qt: "Baixo",

  hipotensaoOrtostatica: "Baixo",

  riscoConvulsivo: "Baixo",

  sintomasDescontinuacao: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados sugerem baixa passagem para o leite materno. Avaliar individualmente.",

  lactacaoCategoria: "cautela",

  renal:
    "Considerar redução da dose em insuficiência renal moderada a grave.",

  ajusteRenalNecessario: true,

  hepatica:
    "Iniciar com doses menores e titular lentamente.",

  observacoes:
    "A mirtazapina é especialmente útil em pacientes com depressão acompanhada de insônia, ansiedade importante, perda ponderal ou redução do apetite. O efeito sedativo costuma ser mais pronunciado em doses de 15 mg ou menos devido ao predomínio do bloqueio H1; com doses mais elevadas, o aumento da atividade noradrenérgica pode reduzir parcialmente essa sedação. É um dos antidepressivos com menor incidência de disfunção sexual.",

  perolasClinicas: [
    "Paradoxalmente, doses mais baixas (7,5-15 mg) tendem a ser MAIS sedativas que doses mais altas — se o objetivo for efeito hipnótico com menor sedação diurna residual, considerar manter a dose baixa em vez de aumentar, contraintuitivo para quem está acostumado a titular para cima quando o efeito parece insuficiente.",
    "É uma das combinações mais usadas em depressão resistente junto com ISRS/IRSN ('California Rocket Fuel' quando associada à venlafaxina/bupropiona) por atuar em receptores complementares (bloqueio de 5-HT2A/5-HT3 reduz náusea e disfunção sexual do parceiro serotoninérgico).",
    "Aumento de apetite e peso costuma ser dose-dependente de forma inversa à sedação (mais pronunciado em doses baixas também) — em pacientes caquéticos, oncológicos ou com anorexia associada a depressão, essa é frequentemente a indicação primária de escolha, não apenas efeito colateral.",
    "Orientar o paciente a tomar a dose próxima da hora de deitar, não logo após o jantar — tomar cedo demais em relação ao horário de dormir aumenta a sensação de sedação residual ao acordar.",
    "Agranulocitose é rara mas descrita; não requer monitorização hematológica rotineira como a clozapina, mas deve ser investigada se houver febre, faringite ou sinais de infecção inexplicados no início do tratamento.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};