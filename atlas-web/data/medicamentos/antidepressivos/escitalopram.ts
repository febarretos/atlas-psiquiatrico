import { Medicamento } from "../../types";

export const escitalopram: Medicamento = {
  id: "escitalopram",

  nome: "Escitalopram",

  nomeComercial: [
    "Lexapro",
    "Reconter",
    "Espran",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), enantiômero S do citalopram, altamente seletivo para o transportador de serotonina (SERT), aumentando a disponibilidade de serotonina na fenda sináptica.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "5–10 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "5 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "5 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "5–10 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "5–10 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
    },
  ],

  meiaVida: "27–32 horas",

  metabolizacao:
    "Metabolização hepática principalmente pelas enzimas CYP2C19, CYP2D6 e CYP3A4.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno Obsessivo-Compulsivo",
    "Fobia Social",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Uso concomitante com pimozida",
    "Hipersensibilidade ao escitalopram",
  ],

  vantagens: [
    "Excelente tolerabilidade",
    "Elevada seletividade para o transportador de serotonina",
    "Poucas interações medicamentosas",
    "Muito eficaz para transtornos de ansiedade",
    "Baixa incidência de efeitos anticolinérgicos",
    "Titulação simples",
  ],

  desvantagens: [
    "Disfunção sexual",
    "Pode prolongar o intervalo QT em doses de 20 mg/dia ou maiores",
    "Náusea nas primeiras semanas",
    "Pode causar ansiedade transitória no início do tratamento",
  ],

  efeitosAdversos: [
    "Náusea",
    "Cefaleia",
    "Insônia",
    "Sonolência",
    "Sudorese",
    "Disfunção sexual",
    "Tontura",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Lítio",
    "Outros medicamentos que prolongam o intervalo QT",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Moderada",

  qt: "Moderado",

  gravidez:
    "Pode ser utilizado durante a gestação quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Compatível com amamentação em muitos casos, embora a sertralina costume ser a primeira escolha.",

  renal:
    "Não necessita ajuste de dose na insuficiência renal leve a moderada. Utilizar com cautela na insuficiência renal grave.",

  hepatica:
    "Recomenda-se iniciar com 5 mg/dia e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "Considerado um dos antidepressivos mais bem tolerados da prática clínica. É frequentemente utilizado como primeira linha para depressão e transtornos de ansiedade devido à combinação de elevada eficácia, boa tolerabilidade e baixo potencial de interações medicamentosas. Deve-se observar o risco de prolongamento do intervalo QT em doses mais elevadas.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};