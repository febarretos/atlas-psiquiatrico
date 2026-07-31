import { Medicamento } from "../../types";

export const sertralina: Medicamento = {
  id: "sertralina",

  nome: "Sertralina",

  nomeComercial: [
    "Zoloft",
    "Assert",
    "Serenata",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25–50 mg/dia",
      doseUsual: "50–200 mg/dia",
      doseMaxima: "200 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "25 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "200 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "25 mg/dia",
      doseUsual: "50–200 mg/dia",
      doseMaxima: "200 mg/dia",
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "50 mg/dia",
      doseUsual: "100–200 mg/dia",
      doseMaxima: "200 mg/dia",
    },
    {
      indicacao: "TEPT",
      doseInicial: "25 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "200 mg/dia",
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "25 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "200 mg/dia",
    },
    {
      indicacao: "Transtorno Disfórico Pré-Menstrual",
      doseInicial: "50 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "150 mg/dia",
    },
  ],

  meiaVida: "26 horas",

  metabolizacao:
    "Metabolização hepática (CYP2B6, CYP2C19, CYP2D6 e CYP3A4).",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno de Estresse Pós-Traumático",
    "Fobia Social",
    "Transtorno Disfórico Pré-Menstrual",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à sertralina",
  ],

  vantagens: [
    "Excelente evidência científica",
    "Boa tolerabilidade",
    "Baixo potencial de interação medicamentosa",
    "Boa opção em pacientes com doença cardiovascular",
    "Ampla experiência clínica",
  ],

  desvantagens: [
    "Disfunção sexual",
    "Náuseas nas primeiras semanas",
    "Pode aumentar ansiedade no início do tratamento",
  ],

  efeitosAdversos: [
    "Náusea",
    "Diarreia",
    "Insônia",
    "Cefaleia",
    "Tremor",
    "Sudorese",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Lítio",
    "Anticoagulantes",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Moderada",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. Uma das opções mais estudadas durante a gestação.",

  lactacao:
    "Compatível com amamentação na maioria dos casos, com baixa passagem para o leite materno.",

  renal:
    "Não necessita ajuste de dose na insuficiência renal.",

  hepatica:
    "Considerar doses menores e titulação mais lenta em insuficiência hepática.",

  observacoes:
    "Um dos antidepressivos mais versáteis da prática clínica. Possui excelente evidência para depressão, transtornos de ansiedade, TOC e TEPT. Frequentemente utilizada como primeira escolha devido ao bom equilíbrio entre eficácia, segurança e tolerabilidade.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};