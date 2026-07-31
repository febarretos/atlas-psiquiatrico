import { Medicamento } from "../../types";

export const nortriptilina: Medicamento = {
  id: "nortriptilina",

  nome: "Nortriptilina",

  nomeComercial: [
    "Pamelor",
  ],

  classe: "Antidepressivo",

  subclasse: "Antidepressivo Tricíclico (TCA)",

  mecanismo:
    "Inibidor da recaptação de noradrenalina e, em menor intensidade, de serotonina. Apresenta menor antagonismo dos receptores muscarínicos, histamínicos H1 e α1-adrenérgicos quando comparada à amitriptilina, resultando em melhor tolerabilidade.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25 mg/dia",
      doseUsual: "50–100 mg/dia",
      doseMaxima: "150 mg/dia",
    },
    {
      indicacao: "Dor neuropática",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–75 mg/dia",
      doseMaxima: "100 mg/dia",
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
      doseMaxima: "100 mg/dia",
    },
  ],

  meiaVida: "18–44 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6. É o principal metabólito ativo da amitriptilina.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Dor neuropática",
    "Fibromialgia",
    "Profilaxia da enxaqueca",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Infarto agudo do miocárdio recente",
    "Arritmias cardíacas significativas",
    "Glaucoma de ângulo fechado",
    "Hipersensibilidade à nortriptilina",
  ],

  vantagens: [
    "Menor sedação que a amitriptilina",
    "Menor efeito anticolinérgico",
    "Boa evidência para dor neuropática",
    "Menor risco de hipotensão ortostática",
    "Boa opção entre os tricíclicos para idosos quando um TCA é necessário",
  ],

  desvantagens: [
    "Ainda apresenta efeitos anticolinérgicos",
    "Pode prolongar o intervalo QT",
    "Maior risco em overdose que ISRS/IRSN",
    "Necessidade de titulação gradual",
  ],

  efeitosAdversos: [
    "Boca seca",
    "Constipação",
    "Sonolência",
    "Tontura",
    "Hipotensão ortostática",
    "Taquicardia",
    "Sudorese",
  ],

  interacoes: [
    "IMAO",
    "Fluoxetina",
    "Paroxetina",
    "Quinidina",
    "Álcool",
    "Outros medicamentos que prolongam QT",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Moderada",

  sexual: "Moderada",

  qt: "Moderado",

  gravidez:
    "Pode ser utilizada quando os benefícios superarem os riscos. Existe experiência clínica relativamente extensa com tricíclicos durante a gestação.",

  lactacao:
    "Compatível com a amamentação em muitos casos, devido à baixa concentração no leite materno. Recomenda-se acompanhamento clínico.",

  renal:
    "Geralmente não necessita ajuste de dose.",

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "A nortriptilina é considerada um dos tricíclicos com melhor perfil de tolerabilidade, apresentando menor sedação, menor efeito anticolinérgico e menor hipotensão ortostática do que a amitriptilina. Por esse motivo, costuma ser preferida quando há indicação de um antidepressivo tricíclico, especialmente em pacientes idosos ou com maior risco de efeitos adversos. Também possui excelente evidência para dor neuropática e profilaxia da enxaqueca. Em doses elevadas ou em pacientes com doença cardiovascular, recomenda-se monitorização eletrocardiográfica devido ao potencial de alterações de condução cardíaca.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
  ],
};