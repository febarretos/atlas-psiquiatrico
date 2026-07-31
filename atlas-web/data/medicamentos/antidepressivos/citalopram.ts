import { Medicamento } from "../../types";

export const citalopram: Medicamento = {
  id: "citalopram",

  nome: "Citalopram",

  nomeComercial: [
    "Cipramil",
    "Procimax",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica. É uma mistura racêmica, sendo o escitalopram seu enantiômero ativo.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "10 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "10–20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "10–20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
    },
  ],

  meiaVida: "35 horas",

  metabolizacao:
    "Metabolização hepática principalmente pelas CYP2C19, CYP3A4 e CYP2D6.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno do Pânico",
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno de Ansiedade Generalizada",
    "Fobia Social",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Uso concomitante com pimozida",
    "Síndrome do QT longo congênito",
    "Hipersensibilidade ao citalopram",
  ],

  vantagens: [
    "Boa eficácia antidepressiva",
    "Boa tolerabilidade",
    "Baixo potencial de interações medicamentosas",
    "Posologia simples",
    "Ampla experiência clínica",
  ],

  desvantagens: [
    "Maior risco de prolongamento do intervalo QT",
    "Disfunção sexual",
    "Náusea nas primeiras semanas",
    "Menor seletividade que o escitalopram",
  ],

  efeitosAdversos: [
    "Náusea",
    "Cefaleia",
    "Insônia",
    "Sonolência",
    "Sudorese",
    "Disfunção sexual",
    "Tremor",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Outros medicamentos que prolongam o QT",
    "Lítio",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Moderada",

  qt: "Alto",

  gravidez:
    "Pode ser utilizado durante a gestação quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Pode ser utilizado durante a amamentação, embora sertralina seja geralmente preferida.",

  renal:
    "Não necessita ajuste de dose na insuficiência renal leve a moderada.",

  hepatica:
    "Recomenda-se dose máxima de 20 mg/dia em insuficiência hepática.",

  observacoes:
    "ISRS eficaz e bem tolerado. Seu principal fator limitante é o risco dose-dependente de prolongamento do intervalo QT, motivo pelo qual recomenda-se evitar doses acima de 40 mg/dia (20 mg/dia em idosos, insuficiência hepática ou metabolizadores lentos de CYP2C19). O escitalopram costuma ser preferido por apresentar melhor relação entre eficácia e tolerabilidade.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
    "FDA Drug Safety Communication (Citalopram & QT)",
  ],
};