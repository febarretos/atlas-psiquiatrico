import { Medicamento } from "../../types";

export const fluoxetina: Medicamento = {
  id: "fluoxetina",

  nome: "Fluoxetina",

  nomeComercial: [
    "Prozac",
    "Verotina",
    "Fluxene",
    "Psiquial",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica. Seu metabólito ativo (norfluoxetina) prolonga significativamente sua duração de ação.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "80 mg/dia",
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "20 mg/dia",
      doseUsual: "40–60 mg/dia",
      doseMaxima: "80 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "10 mg/dia",
      doseUsual: "20–60 mg/dia",
      doseMaxima: "60 mg/dia",
    },
    {
      indicacao: "Bulimia Nervosa",
      doseInicial: "20 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "60 mg/dia",
    },
    {
      indicacao: "Transtorno Disfórico Pré-Menstrual",
      doseInicial: "20 mg/dia",
      doseUsual: "20–60 mg/dia",
      doseMaxima: "60 mg/dia",
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "10–20 mg/dia",
      doseUsual: "20–60 mg/dia",
      doseMaxima: "60 mg/dia",
    },
  ],

  meiaVida:
    "2–4 dias (fluoxetina) e 7–15 dias (norfluoxetina)",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6, originando o metabólito ativo norfluoxetina.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno do Pânico",
    "Bulimia Nervosa",
    "Transtorno Disfórico Pré-Menstrual",
    "Fobia Social",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Uso concomitante com tioridazina",
    "Uso concomitante com pimozida",
    "Hipersensibilidade à fluoxetina",
  ],

  vantagens: [
    "Excelente evidência científica",
    "Longa meia-vida, reduzindo o risco de síndrome de descontinuação",
    "Primeira escolha para bulimia nervosa",
    "Boa opção em pacientes com baixa adesão",
    "Perfil pouco sedativo",
  ],

  desvantagens: [
    "Pode exacerbar ansiedade e insônia no início do tratamento",
    "Maior potencial de interações medicamentosas por inibição da CYP2D6",
    "Disfunção sexual",
    "Longa meia-vida dificulta ajustes rápidos da dose",
  ],

  efeitosAdversos: [
    "Náusea",
    "Insônia",
    "Ansiedade inicial",
    "Tremor",
    "Sudorese",
    "Disfunção sexual",
    "Perda de apetite",
    "Cefaleia",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Tamoxifeno",
    "Antidepressivos tricíclicos",
    "Lítio",
    "Anticoagulantes",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Muito baixa",

  sexual: "Moderada",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada durante a gestação quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Utilizar com cautela durante a amamentação. A sertralina costuma ser preferida por apresentar menor exposição do lactente.",

  renal:
    "Não necessita ajuste de dose na insuficiência renal.",

  hepatica:
    "Considerar redução da dose ou aumento do intervalo entre administrações em pacientes com insuficiência hepática.",

  observacoes:
    "ISRS com maior meia-vida entre os antidepressivos da classe, conferindo menor risco de síndrome de descontinuação. É o antidepressivo com melhor evidência para bulimia nervosa e uma excelente opção em pacientes com baixa adesão ao tratamento. Deve-se considerar seu potencial de interações devido à potente inibição da CYP2D6.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};