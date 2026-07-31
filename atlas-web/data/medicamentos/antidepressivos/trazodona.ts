import { Medicamento } from "../../types";

export const trazodona: Medicamento = {
  id: "trazodona",

  nome: "Trazodona",

  nomeComercial: [
    "Donaren",
  ],

  classe: "Antidepressivo",

  subclasse: "SARI",

  mecanismo:
    "Antagonista e inibidor da recaptação de serotonina (SARI). Atua bloqueando receptores 5-HT2A e 5-HT2C, inibindo moderadamente a recaptação de serotonina e antagonizando receptores H1 e α1-adrenérgicos, o que explica seu efeito sedativo.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "50–100 mg/dia",
      doseUsual: "150–300 mg/dia",
      doseMaxima: "400 mg/dia (ambulatorial)",
    },
    {
      indicacao: "Insônia (off-label)",
      doseInicial: "25–50 mg à noite",
      doseUsual: "50–100 mg à noite",
      doseMaxima: "150 mg/noite",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada (off-label)",
      doseInicial: "50 mg/dia",
      doseUsual: "150–300 mg/dia",
      doseMaxima: "400 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico (off-label)",
      doseInicial: "50 mg/dia",
      doseUsual: "150–300 mg/dia",
      doseMaxima: "400 mg/dia",
    },
  ],

  meiaVida: "6–12 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP3A4.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Insônia (off-label)",
    "Transtornos de ansiedade (off-label)",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à trazodona",
    "Infarto agudo do miocárdio recente (cautela)",
  ],

  vantagens: [
    "Excelente opção para depressão com insônia",
    "Baixa incidência de disfunção sexual",
    "Pouco ganho de peso",
    "Pode reduzir ansiedade noturna",
    "Frequentemente utilizada como adjuvante aos ISRS",
  ],

  desvantagens: [
    "Sedação importante",
    "Hipotensão ortostática",
    "Sonolência diurna",
    "Risco raro de priapismo",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Tontura",
    "Hipotensão ortostática",
    "Boca seca",
    "Cefaleia",
    "Náusea",
    "Priapismo (raro)",
  ],

  interacoes: [
    "IMAO",
    "Álcool",
    "Benzodiazepínicos",
    "Outros depressores do SNC",
    "Inibidores da CYP3A4",
    "Tramadol",
    "Linezolida",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Alta",

  sexual: "Muito baixa",

  qt: "Moderado",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Dados limitados sugerem baixa exposição do lactente. Avaliar individualmente.",

  renal:
    "Utilizar com cautela na insuficiência renal grave.",

  hepatica:
    "Iniciar com doses menores em insuficiência hepática.",

  observacoes:
    "A trazodona apresenta efeito antidepressivo em doses geralmente acima de 150 mg/dia. As doses utilizadas para insônia (25–100 mg/noite) são predominantemente hipnóticas e não devem ser consideradas tratamento antidepressivo. É uma excelente opção como adjuvante em pacientes com depressão ou transtornos de ansiedade acompanhados de insônia. Deve-se orientar sobre hipotensão ortostática e alertar homens quanto ao risco raro, porém potencialmente grave, de priapismo.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};