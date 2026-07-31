import { Medicamento } from "../../types";

export const venlafaxina: Medicamento = {
  id: "venlafaxina",

  nome: "Venlafaxina",

  nomeComercial: [
    "Efexor XR",
    "Venlift OD",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRSN",

  mecanismo:
    "Inibidor da recaptação de serotonina e noradrenalina (ISRSN). Em doses baixas predomina o bloqueio da recaptação de serotonina; acima de aproximadamente 150 mg/dia aumenta significativamente a inibição da recaptação de noradrenalina.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "37,5–75 mg/dia",
      doseUsual: "75–225 mg/dia",
      doseMaxima: "375 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "37,5 mg/dia",
      doseUsual: "75–225 mg/dia",
      doseMaxima: "225 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "37,5 mg/dia",
      doseUsual: "75–225 mg/dia",
      doseMaxima: "225 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Social",
      doseInicial: "37,5–75 mg/dia",
      doseUsual: "75–225 mg/dia",
      doseMaxima: "225 mg/dia",
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "37,5–75 mg/dia",
      doseUsual: "150–225 mg/dia",
      doseMaxima: "300 mg/dia",
    },
  ],

  meiaVida:
    "5 horas (venlafaxina) e 11 horas (O-desmetilvenlafaxina)",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6, formando o metabólito ativo O-desmetilvenlafaxina (ODV).",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Social",
    "Transtorno Obsessivo-Compulsivo",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à venlafaxina",
  ],

  vantagens: [
    "Excelente eficácia para depressão moderada a grave",
    "Muito eficaz para transtornos de ansiedade",
    "Efeito noradrenérgico em doses maiores",
    "Boa evidência em dor neuropática e fibromialgia (off-label)",
    "Pode melhorar energia e sintomas cognitivos em alguns pacientes",
  ],

  desvantagens: [
    "Síndrome de descontinuação frequente",
    "Pode elevar pressão arterial em doses elevadas",
    "Náusea no início do tratamento",
    "Disfunção sexual",
    "Pode aumentar ansiedade nas primeiras semanas",
  ],

  efeitosAdversos: [
    "Náusea",
    "Sudorese",
    "Insônia",
    "Constipação",
    "Boca seca",
    "Disfunção sexual",
    "Hipertensão dose-dependente",
    "Tontura",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Lítio",
    "Anticoagulantes",
    "Outros medicamentos serotoninérgicos",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Alta",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Passa para o leite materno em pequenas quantidades. Avaliar individualmente riscos e benefícios.",

  renal:
    "Reduzir a dose em insuficiência renal moderada a grave.",

  hepatica:
    "Recomenda-se redução da dose e titulação mais lenta em insuficiência hepática.",

  observacoes:
    "Um dos antidepressivos de maior eficácia para depressão e transtornos de ansiedade. Em doses acima de aproximadamente 150 mg/dia ocorre maior efeito noradrenérgico, podendo beneficiar pacientes com fadiga, lentificação psicomotora e sintomas cognitivos. Deve-se monitorar pressão arterial em doses elevadas e realizar retirada gradual devido ao elevado risco de síndrome de descontinuação.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};