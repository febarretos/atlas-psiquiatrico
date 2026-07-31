import { Medicamento } from "../../types";

export const amitriptilina: Medicamento = {
  id: "amitriptilina",

  nome: "Amitriptilina",

  nomeComercial: [
    "Tryptanol",
  ],

  classe: "Antidepressivo",

  subclasse: "Antidepressivo Tricíclico (TCA)",

  mecanismo:
    "Inibidor da recaptação de serotonina e noradrenalina, com potente antagonismo dos receptores muscarínicos, histamínicos H1 e α1-adrenérgicos. Essas ações explicam tanto sua eficácia antidepressiva quanto seus efeitos sedativos e anticolinérgicos.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25–50 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "300 mg/dia",
    },
    {
      indicacao: "Dor neuropática",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–75 mg/dia",
      doseMaxima: "150 mg/dia",
    },
    {
      indicacao: "Fibromialgia",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–50 mg/dia",
      doseMaxima: "75 mg/dia",
    },
    {
      indicacao: "Profilaxia da enxaqueca",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–75 mg/dia",
      doseMaxima: "150 mg/dia",
    },
    {
      indicacao: "Insônia (off-label)",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–50 mg/dia",
      doseMaxima: "75 mg/dia",
    },
  ],

  meiaVida: "10–28 horas",

  metabolizacao:
    "Metabolização hepática principalmente pelas CYP2D6 e CYP2C19, formando nortriptilina, seu metabólito ativo.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Dor neuropática",
    "Fibromialgia",
    "Profilaxia da enxaqueca",
    "Insônia (off-label)",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Infarto agudo do miocárdio recente",
    "Arritmias cardíacas significativas",
    "Glaucoma de ângulo fechado",
    "Retenção urinária",
    "Hipersensibilidade à amitriptilina",
  ],

  vantagens: [
    "Alta eficácia antidepressiva",
    "Excelente evidência para dor neuropática",
    "Útil em fibromialgia",
    "Auxilia na insônia",
    "Eficaz na profilaxia da enxaqueca",
  ],

  desvantagens: [
    "Importante efeito anticolinérgico",
    "Sedação intensa",
    "Ganho de peso",
    "Hipotensão ortostática",
    "Maior risco em overdose",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Boca seca",
    "Constipação",
    "Visão borrada",
    "Retenção urinária",
    "Hipotensão ortostática",
    "Taquicardia",
    "Ganho de peso",
  ],

  interacoes: [
    "IMAO",
    "ISRS (especialmente fluoxetina e paroxetina)",
    "Álcool",
    "Benzodiazepínicos",
    "Antiarrítmicos classe IA e III",
    "Outros medicamentos que prolongam QT",
  ],

  ganhoPeso: "Alto",

  sedacao: "Muito alta",

  sexual: "Moderada",

  qt: "Alto",

  gravidez:
    "Pode ser utilizada quando os benefícios superarem os riscos. Existe experiência clínica relativamente extensa.",

  lactacao:
    "Pequenas quantidades são excretadas no leite. Geralmente considerada compatível com a amamentação, mediante acompanhamento clínico.",

  renal:
    "Geralmente não necessita ajuste de dose.",

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "A amitriptilina permanece como uma das medicações mais eficazes para dor neuropática, fibromialgia e profilaxia da enxaqueca, frequentemente em doses inferiores às utilizadas para depressão. Em psiquiatria, atualmente costuma ser reservada para casos resistentes ou pacientes com depressão acompanhada de insônia importante e dor crônica. Deve ser utilizada com cautela em idosos devido ao elevado potencial anticolinérgico, risco de quedas e comprometimento cognitivo. Também apresenta maior cardiotoxicidade e risco em overdose quando comparada aos antidepressivos modernos.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
  ],
};