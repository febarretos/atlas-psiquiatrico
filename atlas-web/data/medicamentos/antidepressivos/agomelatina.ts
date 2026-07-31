import { Medicamento } from "../../types";

export const agomelatina: Medicamento = {
  id: "agomelatina",

  nome: "Agomelatina",

  nomeComercial: [
    "Valdoxan",
    "Agoxom",
  ],

  classe: "Antidepressivo",

  subclasse: "Agonista melatoninérgico / Antagonista 5-HT2C",

  mecanismo:
    "Agonista dos receptores melatoninérgicos MT1 e MT2 e antagonista dos receptores serotoninérgicos 5-HT2C. Promove ressicronização dos ritmos circadianos e aumenta indiretamente a liberação de dopamina e noradrenalina no córtex pré-frontal, sem inibir a recaptação de monoaminas.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25 mg à noite",
      doseUsual: "25–50 mg à noite",
      doseMaxima: "50 mg/dia",
      nivelEvidencia: 3,
    },
  ],

  meiaVida: "1–2 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP1A2, com menor participação das CYP2C9 e CYP2C19.",

  indicacoes: [
    "Transtorno Depressivo Maior",
  ],

  contraIndicacoes: [
    "Insuficiência hepática",
    "Doença hepática ativa",
    "Elevação de transaminases superior a 3 vezes o limite superior da normalidade",
    "Uso concomitante com fluvoxamina",
    "Hipersensibilidade à agomelatina",
  ],

  vantagens: [
    "Baixa incidência de disfunção sexual",
    "Praticamente neutra em relação ao peso",
    "Melhora da qualidade do sono sem reduzir o sono REM",
    "Baixa incidência de sintomas de descontinuação",
    "Boa tolerabilidade geral",
  ],

  desvantagens: [
    "Necessidade de monitorização das transaminases",
    "Contraindicada em doença hepática",
    "Pouca disponibilidade em alguns países",
    "Menor experiência clínica que os ISRS",
  ],

  efeitosAdversos: [
    "Cefaleia",
    "Náusea",
    "Tontura",
    "Sonolência",
    "Elevação de transaminases",
  ],

  interacoes: [
    "Fluvoxamina",
    "Ciprofloxacino",
    "Outros inibidores potentes da CYP1A2",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Dados insuficientes para recomendar seu uso rotineiro durante a gestação.",

  gravidezCategoria: "cautela",

  lactacao:
    "Não recomendada durante a amamentação devido à escassez de dados.",

  lactacaoCategoria: "evitar",

  renal:
    "Geralmente não necessita ajuste de dose.",

  ajusteRenalNecessario: false,

  hepatica:
    "Contraindicada em insuficiência hepática ou doença hepática ativa.",

  observacoes:
    "A agomelatina apresenta um mecanismo de ação único entre os antidepressivos. Seu principal diferencial clínico é a melhora da qualidade do sono e da sincronização do ritmo circadiano, com baixa incidência de disfunção sexual, ganho de peso e sintomas de descontinuação. Antes do início do tratamento e periodicamente durante o uso recomenda-se monitorar as transaminases hepáticas devido ao risco, incomum porém potencialmente grave, de hepatotoxicidade.",

  perolasClinicas: [
    "Protocolo de monitorização hepática deve ser seguido à risca: transaminases antes do início, e depois em torno de 3, 6, 12 e 24 semanas (e sempre que a dose for aumentada para 50 mg) — suspender se ALT/AST ultrapassarem 3x o limite superior da normalidade.",
    "Deve ser tomada à noite, próximo do horário de dormir, para aproveitar o efeito ressincronizador circadiano — administração diurna reduz o racional terapêutico específico da droga.",
    "Não deve ser suspensa abruptamente por motivo hepático sem reavaliação; por outro lado, ao contrário de ISRS/IRSN, sua descontinuação não costuma causar síndrome de retirada, permitindo suspensão relativamente rápida quando necessário.",
    "Álcool em excesso potencializa o risco de hepatotoxicidade — orientar redução do consumo durante o tratamento, especialmente em pacientes com fatores de risco hepático basal.",
    "É uma opção a considerar em pacientes com disfunção sexual persistente ou ganho de peso significativo em ISRS prévios, mas a exigência de exames seriados limita sua praticidade em contextos com acesso laboratorial restrito.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
  ],
};