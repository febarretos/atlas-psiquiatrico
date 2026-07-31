import { Medicamento } from "../../types";

export const imipramina: Medicamento = {
  id: "imipramina",

  nome: "Imipramina",

  nomeComercial: [
    "Tofranil",
  ],

  classe: "Antidepressivo",

  subclasse: "Antidepressivo Tricíclico (TCA)",

  mecanismo:
    "Antidepressivo tricíclico que inibe a recaptação de noradrenalina e serotonina, com discreto predomínio do efeito noradrenérgico. Também apresenta antagonismo dos receptores muscarínicos, histamínicos H1 e α1-adrenérgicos, responsáveis por seus efeitos anticolinérgicos, sedativos e cardiovasculares.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25–50 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "300 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "10–25 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "200 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada (off-label)",
      doseInicial: "25 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "200 mg/dia",
    },
    {
      indicacao: "Enurese noturna (crianças >6 anos)",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–50 mg/noite",
      doseMaxima: "75 mg/noite",
    },
  ],

  meiaVida: "8–20 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6 e CYP2C19, formando desipramina, seu principal metabólito ativo.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Generalizada (off-label)",
    "Enurese noturna",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Infarto agudo do miocárdio recente",
    "Arritmias cardíacas importantes",
    "Glaucoma de ângulo fechado",
    "Retenção urinária",
    "Hipersensibilidade à imipramina",
  ],

  vantagens: [
    "Alta eficácia antidepressiva",
    "Boa evidência para transtorno do pânico",
    "Pode ser útil em pacientes com ansiedade importante",
    "Tratamento tradicional da enurese noturna",
  ],

  desvantagens: [
    "Importante efeito anticolinérgico",
    "Sedação",
    "Hipotensão ortostática",
    "Ganho de peso",
    "Maior risco em overdose",
  ],

  efeitosAdversos: [
    "Boca seca",
    "Constipação",
    "Visão borrada",
    "Retenção urinária",
    "Sonolência",
    "Hipotensão ortostática",
    "Taquicardia",
    "Sudorese",
  ],

  interacoes: [
    "IMAO",
    "Fluoxetina",
    "Paroxetina",
    "Álcool",
    "Benzodiazepínicos",
    "Outros medicamentos que prolongam QT",
  ],

  ganhoPeso: "Alto",

  sedacao: "Alta",

  sexual: "Moderada",

  qt: "Alto",

  gravidez:
    "Pode ser utilizada quando os benefícios superarem os riscos. Existe experiência clínica relativamente extensa durante a gestação.",

  lactacao:
    "Pequenas quantidades são excretadas no leite materno. Geralmente compatível com a amamentação, mediante acompanhamento clínico.",

  renal:
    "Geralmente não necessita ajuste de dose.",

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "A imipramina foi o primeiro antidepressivo tricíclico introduzido na prática clínica e permanece como uma medicação altamente eficaz para depressão maior. Atualmente é utilizada principalmente em casos resistentes, transtorno do pânico e enurese noturna. Seu perfil de efeitos adversos limita o uso como tratamento de primeira linha, especialmente devido aos efeitos anticolinérgicos, risco cardiovascular e toxicidade em overdose. Recomenda-se cautela em idosos e considerar realização de ECG antes do início do tratamento em pacientes com fatores de risco cardiovasculares.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
  ],
};