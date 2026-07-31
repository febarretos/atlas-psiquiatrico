import { Medicamento } from "../../types";

export const trazodona: Medicamento = {
  id: "trazodona",

  nome: "Trazodona",

  nomeComercial: [
    "Donaren",
    "Donaren Retard",
    "Loredon",
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
      nivelEvidencia: 3,
    },
    {
      indicacao: "Insônia (off-label)",
      doseInicial: "25–50 mg à noite",
      doseUsual: "50–100 mg à noite",
      doseMaxima: "150 mg/noite",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada (off-label)",
      doseInicial: "50 mg/dia",
      doseUsual: "150–300 mg/dia",
      doseMaxima: "400 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Transtorno do Pânico (off-label)",
      doseInicial: "50 mg/dia",
      doseUsual: "150–300 mg/dia",
      doseMaxima: "400 mg/dia",
      nivelEvidencia: 1,
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

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados sugerem baixa exposição do lactente. Avaliar individualmente.",

  lactacaoCategoria: "cautela",

  renal:
    "Utilizar com cautela na insuficiência renal grave.",

  ajusteRenalNecessario: false,

  hepatica:
    "Iniciar com doses menores em insuficiência hepática.",

  observacoes:
    "A trazodona apresenta efeito antidepressivo em doses geralmente acima de 150 mg/dia. As doses utilizadas para insônia (25–100 mg/noite) são predominantemente hipnóticas e não devem ser consideradas tratamento antidepressivo. É uma excelente opção como adjuvante em pacientes com depressão ou transtornos de ansiedade acompanhados de insônia. Deve-se orientar sobre hipotensão ortostática e alertar homens quanto ao risco raro, porém potencialmente grave, de priapismo.",

  perolasClinicas: [
    "Para uso como hipnótico (dose 25-100 mg), a dose eficaz para sono é muito menor que a dose antidepressiva (150-400 mg) — não confundir os dois objetivos terapêuticos ao prescrever, e deixar claro ao paciente/outros prescritores qual é a intenção da dose baixa.",
    "Ao contrário de benzodiazepínicos e Z-drugs, não gera dependência física relevante nem tolerância significativa a longo prazo em dose hipnótica, sendo por isso uma opção interessante para insônia crônica que exige uso prolongado.",
    "Não suprime o sono REM (diferente de vários outros hipnóticos e da maioria dos ADTs) e tende a aumentar o sono de ondas lentas — perfil de sono mais fisiológico, o que a torna atraente em pacientes com queixas de sono não reparador.",
    "Priapismo, embora raro, é uma emergência urológica; orientar homens a procurarem pronto-socorro se ereção persistir por mais de 4 horas — é um dos poucos efeitos adversos psicofarmacológicos que exige atendimento de urgência verdadeiro.",
    "Hipotensão ortostática é mais pronunciada nas primeiras doses e em idosos — orientar sobre levantar-se devagar, especialmente ao usar como hipnótico noturno (risco de queda ao levantar para urinar durante a noite).",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};