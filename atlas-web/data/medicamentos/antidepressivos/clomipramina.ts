import { Medicamento } from "../../types";

export const clomipramina: Medicamento = {
  id: "clomipramina",

  nome: "Clomipramina",

  nomeComercial: [
    "Anafranil",
  ],

  classe: "Antidepressivo",

  subclasse: "Antidepressivo Tricíclico (TCA)",

  mecanismo:
    "Antidepressivo tricíclico com potente inibição da recaptação de serotonina e menor efeito sobre a recaptação de noradrenalina. Também antagoniza receptores muscarínicos, histamínicos H1 e α1-adrenérgicos.",

  posologias: [
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "25 mg/dia",
      doseUsual: "100–250 mg/dia",
      doseMaxima: "250 mg/dia",
    },
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "250 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "10–25 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "250 mg/dia",
    },
    {
      indicacao: "Dor neuropática (off-label)",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–75 mg/dia",
      doseMaxima: "150 mg/dia",
    },
  ],

  meiaVida: "19–37 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6, formando desmetilclomipramina, metabólito ativo com maior ação noradrenérgica.",

  indicacoes: [
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno Depressivo Maior",
    "Transtorno do Pânico",
    "Dor neuropática (off-label)",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Infarto agudo do miocárdio recente",
    "Arritmias cardíacas significativas",
    "Glaucoma de ângulo fechado",
    "Retenção urinária",
    "Epilepsia não controlada",
    "Hipersensibilidade à clomipramina",
  ],

  vantagens: [
    "Um dos antidepressivos mais eficazes para TOC",
    "Alta potência serotoninérgica",
    "Boa eficácia em transtorno do pânico",
    "Pode beneficiar pacientes com dor neuropática",
  ],

  desvantagens: [
    "Importante efeito anticolinérgico",
    "Sedação",
    "Ganho de peso",
    "Hipotensão ortostática",
    "Maior risco de convulsões",
    "Maior cardiotoxicidade em overdose",
  ],

  efeitosAdversos: [
    "Boca seca",
    "Constipação",
    "Sonolência",
    "Sudorese",
    "Hipotensão ortostática",
    "Taquicardia",
    "Disfunção sexual",
    "Ganho de peso",
  ],

  interacoes: [
    "IMAO",
    "Fluoxetina",
    "Paroxetina",
    "Tramadol",
    "Linezolida",
    "Álcool",
    "Outros medicamentos que prolongam QT",
  ],

  ganhoPeso: "Alto",

  sedacao: "Alta",

  sexual: "Alta",

  qt: "Alto",

  gravidez:
    "Pode ser utilizada quando os benefícios superarem os riscos. Existe experiência clínica durante a gestação, embora ISRS sejam geralmente preferidos.",

  lactacao:
    "É excretada no leite materno em pequenas quantidades. Avaliar individualmente.",

  renal:
    "Geralmente não necessita ajuste de dose, porém recomenda-se acompanhamento clínico.",

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "A clomipramina permanece como uma das medicações mais eficazes para o tratamento do transtorno obsessivo-compulsivo, sendo frequentemente considerada quando há resposta insuficiente aos ISRS. Apesar da elevada eficácia, seu uso é limitado pelo perfil de efeitos adversos dos antidepressivos tricíclicos, incluindo efeitos anticolinérgicos, sedação, ganho de peso e risco cardiovascular. Em pacientes com TOC resistente, pode apresentar eficácia superior à maioria dos ISRS, embora à custa de menor tolerabilidade. Recomenda-se cautela em pacientes com epilepsia ou fatores de risco para convulsões e considerar ECG antes do tratamento em pacientes com doença cardiovascular ou idade mais avançada.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "APA Practice Guideline for Obsessive-Compulsive Disorder",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
  ],
};