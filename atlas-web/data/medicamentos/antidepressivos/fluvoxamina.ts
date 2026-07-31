import { Medicamento } from "../../types";

export const fluvoxamina: Medicamento = {
  id: "fluvoxamina",

  nome: "Fluvoxamina",

  nomeComercial: [
    "Luvox",
    "Revoc",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica. Apresenta elevada afinidade pelo receptor sigma-1, cuja relevância clínica ainda é objeto de estudo.",

  posologias: [
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "50 mg/dia",
      doseUsual: "100–300 mg/dia",
      doseMaxima: "300 mg/dia",
    },
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "50 mg/dia",
      doseUsual: "100–200 mg/dia",
      doseMaxima: "300 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Social",
      doseInicial: "50 mg/dia",
      doseUsual: "100–300 mg/dia",
      doseMaxima: "300 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "50 mg/dia",
      doseUsual: "100–300 mg/dia",
      doseMaxima: "300 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "50 mg/dia",
      doseUsual: "100–300 mg/dia",
      doseMaxima: "300 mg/dia",
    },
  ],

  meiaVida: "15–22 horas",

  metabolizacao:
    "Metabolização hepática, principalmente pelas CYP2D6. É potente inibidora das CYP1A2 e CYP2C19 e moderada inibidora da CYP3A4.",

  indicacoes: [
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Social",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Uso concomitante com tizanidina",
    "Uso concomitante com ramelteona",
    "Hipersensibilidade à fluvoxamina",
  ],

  vantagens: [
    "Excelente evidência para TOC",
    "Boa eficácia em transtornos de ansiedade",
    "Baixo risco de prolongamento do intervalo QT",
    "Pode beneficiar pacientes com insônia devido ao perfil mais sedativo",
  ],

  desvantagens: [
    "Maior potencial de interações medicamentosas",
    "Náusea frequente no início do tratamento",
    "Pode causar sonolência",
    "Disfunção sexual",
  ],

  efeitosAdversos: [
    "Náusea",
    "Sonolência",
    "Cefaleia",
    "Insônia",
    "Tremor",
    "Sudorese",
    "Disfunção sexual",
  ],

  interacoes: [
    "IMAO",
    "Tizanidina",
    "Ramelteona",
    "Clozapina",
    "Olanzapina",
    "Cafeína",
    "Teofilina",
    "Tizanidina",
    "Varfarina",
    "Tramadol",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Moderada",

  sexual: "Moderada",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Pode ser utilizada durante a amamentação quando indicada, embora sertralina permaneça a opção preferencial.",

  renal:
    "Não necessita ajuste de dose na insuficiência renal.",

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "Antidepressivo de escolha para muitos pacientes com TOC devido à robusta evidência clínica. Seu principal fator limitante é o elevado potencial de interações medicamentosas, especialmente pela inibição das enzimas CYP1A2 e CYP2C19. Deve-se ter cautela em pacientes em uso de clozapina, tizanidina, cafeína, teofilina e outros medicamentos metabolizados por essas vias.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};