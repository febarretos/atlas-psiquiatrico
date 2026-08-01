import { Medicamento } from "../../types";

export const valproato: Medicamento = {
  id: "valproato",

  nome: "Valproato",

  nomeComercial: [
    "Depakote",
    "Depakene",
  ],

  classe: "Estabilizador de Humor",

  subclasse: "Anticonvulsivante",

  mecanismo:
    "Bloqueio de canais de sódio dependentes de voltagem e aumento da atividade gabaérgica, por inibição do catabolismo do GABA, resultando em estabilização da excitabilidade neuronal.",

  posologias: [
    {
      indicacao: "Transtorno Bipolar - Mania Aguda",
      doseInicial: "750 mg/dia (ou dose de ataque de 20–30 mg/kg/dia)",
      doseUsual: "1000–2000 mg/dia, ajustada conforme nível sérico (50–125 µg/mL)",
      doseMaxima: "60 mg/kg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Bipolar - Profilaxia/Manutenção",
      doseInicial: "500–750 mg/dia",
      doseUsual: "1000–1500 mg/dia",
      doseMaxima: "3000 mg/dia (conforme tolerabilidade e nível sérico)",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Epilepsia",
      doseInicial: "10–15 mg/kg/dia",
      doseUsual: "1000–2000 mg/dia",
      doseMaxima: "60 mg/kg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Profilaxia de Enxaqueca",
      doseInicial: "250 mg/dia",
      doseUsual: "500–1000 mg/dia",
      doseMaxima: "1000 mg/dia",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "9–16 horas",

  metabolizacao:
    "Metabolização hepática extensa, principalmente por glicuronidação e beta-oxidação. Atua como inibidor enzimático (CYP2C9 e glicuronidação), interferindo no metabolismo de diversos outros fármacos.",

  indicacoes: [
    "Transtorno Bipolar - Mania Aguda",
    "Transtorno Bipolar - Profilaxia/Manutenção",
    "Epilepsia",
    "Profilaxia de Enxaqueca",
  ],

  contraIndicacoes: [
    "Gravidez e mulheres em idade fértil sem contracepção eficaz, exceto em situações excepcionais sem alternativa terapêutica adequada",
    "Doença hepática ativa ou disfunção hepática significativa",
    "Distúrbios do ciclo da ureia",
    "Porfiria hepática",
    "Hipersensibilidade ao valproato",
  ],

  vantagens: [
    "Eficácia robusta na mania aguda, especialmente em episódios mistos",
    "Início de ação relativamente rápido quando utilizada dose de ataque",
    "Boa eficácia em pacientes com ciclagem rápida",
    "Disponível em diversas formulações, incluindo liberação prolongada e apresentação intravenosa",
  ],

  desvantagens: [
    "Alto risco teratogênico, contraindicado na gestação",
    "Ganho de peso significativo",
    "Risco de hepatotoxicidade e pancreatite",
    "Múltiplas interações medicamentosas clinicamente relevantes",
    "Necessidade de monitorização laboratorial frequente",
  ],

  efeitosAdversos: [
    "Náusea e desconforto gastrointestinal",
    "Ganho de peso",
    "Tremor",
    "Sedação",
    "Alopecia",
    "Trombocitopenia",
    "Elevação de enzimas hepáticas",
    "Hiperamonemia",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Lamotrigina (aumenta significativamente seus níveis séricos, com risco de rash cutâneo grave)",
    "Carbamazepina (interação bidirecional, com redução mútua de níveis séricos)",
    "Outros anticonvulsivantes",
    "Contraceptivos orais (potencial interação bidirecional)",
    "Varfarina e outros fármacos com alta ligação a proteínas plasmáticas",
    "Álcool (potencializa a hepatotoxicidade)",
    "Antibióticos carbapenêmicos (ex: meropenem, imipenem, ertapenem — reduzem drasticamente os níveis séricos de valproato, em até 50–80%, com risco de perda de controle de crises; combinação geralmente a evitar)",
    "Ácido acetilsalicílico/AAS (desloca o valproato da ligação a proteínas plasmáticas, aumentando a fração livre e o risco de sangramento e toxicidade)",
    "Topiramato (risco aumentado de hiperamonemia e encefalopatia hiperamonêmica quando associados)",
  ],

  ganhoPeso: "Alto",

  sedacao: "Moderada",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Alto risco teratogênico, associado a defeitos do tubo neural, malformações cardíacas e craniofaciais, além de risco de comprometimento do neurodesenvolvimento infantil (redução de QI). Contraindicado em mulheres em idade fértil e na gestação, exceto em situações excepcionais sem alternativa terapêutica adequada, sempre com contracepção eficaz obrigatória durante o uso.",

  gravidezCategoria: "evitar",

  lactacao:
    "A passagem para o leite materno é relativamente baixa. Ainda assim, dado o risco teratogênico geral associado ao fármaco, a manutenção do tratamento durante a amamentação deve ser cuidadosamente avaliada caso a caso.",

  lactacaoCategoria: "cautela",

  renal:
    "Geralmente não requer ajuste de dose na insuficiência renal, mas deve-se monitorar a fração livre do fármaco, que pode estar aumentada.",

  ajusteRenalNecessario: false,

  hepatica:
    "Contraindicado em doença hepática ativa. Risco de hepatotoxicidade grave, especialmente em crianças pequenas e em politerapia, exigindo monitorização rigorosa da função hepática.",

  observacoes:
    "É essencial a monitorização de níveis séricos (faixa terapêutica de aproximadamente 50–125 µg/mL), função hepática e hemograma completo com contagem de plaquetas, particularmente nas primeiras semanas de tratamento e após ajustes de dose. Mulheres em idade fértil devem ser orientadas sobre o risco teratogênico e a necessidade de contracepção eficaz. Atenção especial deve ser dada à associação com lamotrigina, que exige redução da dose desta última pelo risco de rash cutâneo grave.",

  perolasClinicas: [
    "Discutir contracepção eficaz na primeira consulta com qualquer mulher em idade fértil antes mesmo de prescrever — não deixar para uma conversa 'futura', dado o alto risco teratogênico e a possibilidade de gravidez não planejada durante o tratamento.",
    "Ao associar com lamotrigina, a dose desta última deve ser cerca de METADE da que seria usada sem valproato — o esquecimento dessa interação é uma causa evitável de rash grave/Stevens-Johnson.",
    "Hiperamonemia pode causar confusão mental ou sonolência excessiva mesmo com transaminases normais e nível sérico dentro da faixa terapêutica — dosar amônia sérica especificamente se houver alteração inexplicada do estado mental em uso de valproato.",
    "A dose de ataque (20-30mg/kg/dia) para mania aguda permite resposta mais rápida que a titulação gradual usada em outras indicações — não subtitular por hábito quando a gravidade do quadro maníaco justifica início mais agressivo.",
  ],

  referencias: [
    "CANMAT 2018 Bipolar Guidelines",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};
