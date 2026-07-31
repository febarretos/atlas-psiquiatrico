import { Medicamento } from "../../types";

export const duloxetina: Medicamento = {
  id: "duloxetina",

  nome: "Duloxetina",

  nomeComercial: [
    "Cymbalta",
    "Velija",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRSN",

  mecanismo:
    "Inibidor da recaptação de serotonina e noradrenalina (ISRSN). Atua de forma equilibrada sobre ambos os neurotransmissores em doses terapêuticas, além de apresentar eficácia em síndromes dolorosas crônicas.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "30 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "120 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "30 mg/dia",
      doseUsual: "60–120 mg/dia",
      doseMaxima: "120 mg/dia",
    },
    {
      indicacao: "Dor Neuropática Diabética",
      doseInicial: "30 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "120 mg/dia",
    },
    {
      indicacao: "Fibromialgia",
      doseInicial: "30 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "120 mg/dia",
    },
    {
      indicacao: "Dor Musculoesquelética Crônica",
      doseInicial: "30 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "120 mg/dia",
    },
  ],

  meiaVida: "12 horas",

  metabolizacao:
    "Metabolização hepática principalmente pelas enzimas CYP1A2 e CYP2D6.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Dor Neuropática Diabética",
    "Fibromialgia",
    "Dor Musculoesquelética Crônica",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Doença hepática grave",
    "Insuficiência renal grave (ClCr <30 mL/min)",
    "Hipersensibilidade à duloxetina",
  ],

  vantagens: [
    "Excelente eficácia para depressão e ansiedade",
    "Benefício adicional em síndromes dolorosas",
    "Boa opção para pacientes com dor crônica associada",
    "Baixo risco de prolongamento do QT",
    "Perfil pouco sedativo",
  ],

  desvantagens: [
    "Náusea frequente no início do tratamento",
    "Pode aumentar pressão arterial",
    "Disfunção sexual",
    "Síndrome de descontinuação quando suspensa abruptamente",
  ],

  efeitosAdversos: [
    "Náusea",
    "Boca seca",
    "Constipação",
    "Sudorese",
    "Insônia",
    "Tontura",
    "Disfunção sexual",
    "Redução do apetite",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Lítio",
    "Anticoagulantes",
    "Fluvoxamina",
    "Ciprofloxacino",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Moderada",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Dados limitados. Avaliar individualmente riscos e benefícios.",

  renal:
    "Contraindicada em insuficiência renal grave (clearance de creatinina inferior a 30 mL/min).",

  hepatica:
    "Evitar em pacientes com doença hepática crônica ou insuficiência hepática.",

  observacoes:
    "A duloxetina é um dos antidepressivos de escolha quando depressão ou ansiedade coexistem com dor crônica, fibromialgia ou neuropatia diabética. A dose de 60 mg/dia costuma oferecer o melhor equilíbrio entre eficácia e tolerabilidade, enquanto doses superiores raramente aumentam significativamente a eficácia clínica. Deve ser utilizada com cautela em pacientes com hipertensão arterial e evitada na presença de doença hepática importante.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};