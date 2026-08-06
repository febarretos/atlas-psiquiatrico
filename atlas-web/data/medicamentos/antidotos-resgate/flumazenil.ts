import { Medicamento } from "../../types";

export const flumazenil: Medicamento = {
  id: "flumazenil",

  nome: "Flumazenil",

  nomeComercial: [
    "Lanexat",
  ],

  classe: "Antagonista benzodiazepínico",

  subclasse: "Antídoto/agente de resgate",

  mecanismo:
    "Antagonista competitivo dos receptores benzodiazepínicos no complexo GABA-A, revertendo os efeitos sedativos e depressores do sistema nervoso central dos benzodiazepínicos, sem efeito agonista ou antagonista relevante sobre outros depressores do SNC (álcool, barbitúricos, opioides).",

  posologias: [
    {
      indicacao: "Reversão de sedação/depressão do SNC induzida por benzodiazepínico",
      doseInicial: "0,2 mg IV, administrado em 15 segundos",
      doseUsual: "0,2 mg adicionais a cada 1 minuto, até resposta clínica ou dose cumulativa de 1 mg",
      doseMaxima: "3 mg (dose cumulativa por episódio)",
      nivelEvidencia: 4,
    },
  ],

  meiaVida:
    "~40–80 minutos — mais curta que a maioria dos benzodiazepínicos, com risco real de re-sedação (ver observações)",

  metabolizacao:
    "Metabolização hepática extensa, com excreção renal dos metabólitos.",

  indicacoes: [
    "Reversão de sedação benzodiazepínica isolada em contexto perioperatório/procedimento",
    "Overdose isolada e confirmada por benzodiazepínico, em paciente sem uso crônico prévio e sem suspeita de coingestão pró-convulsivante",
  ],

  contraIndicacoes: [
    "Uso crônico de benzodiazepínico — contraindicação prática mais importante, risco de precipitar convulsão de abstinência aguda e grave",
    "Coingestão suspeita ou confirmada de antidepressivo tricíclico, ou de outro agente pró-convulsivante — risco de convulsão refratária ao remover a proteção anticonvulsivante do benzodiazepínico",
    "Epilepsia de base tratada com benzodiazepínico",
    "Hipersensibilidade ao flumazenil",
  ],

  vantagens: [
    "Reversão rápida de sedação benzodiazepínica isolada, útil sobretudo em contexto de procedimento/anestesia",
  ],

  desvantagens: [
    "Risco significativo de precipitar convulsões, especialmente em uso crônico de benzodiazepínico ou em coingestão com tricíclicos ou outros agentes pró-convulsivantes — por isso NÃO é recomendado rotineiramente no manejo de overdose mista ou de causa desconhecida, ao contrário da naloxona no contexto opioide",
    "Meia-vida curta em relação à maioria dos benzodiazepínicos — risco real de re-sedação após o efeito do flumazenil passar",
    "Uso muito mais restrito na prática toxicológica do que a naloxona, justamente pelo perfil de risco",
  ],

  efeitosAdversos: [
    "Convulsões (o efeito adverso mais grave e clinicamente relevante)",
    "Agitação",
    "Náusea",
    "Tontura",
    "Síndrome de abstinência precipitada em usuários crônicos de benzodiazepínico",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Antidepressivos tricíclicos e outros fármacos pró-convulsivantes coingeridos — risco elevado de convulsão ao reverter o efeito protetor/anticonvulsivante do benzodiazepínico",
  ],

  ganhoPeso: "Não aplicável — uso agudo/pontual.",

  sedacao: "Nenhuma — reverte sedação, não causa.",

  sexual: "Não aplicável — sem dados relevantes para uso agudo.",

  qt: "Muito baixo.",

  gravidez:
    "Dados limitados em humanos; uso reservado a situações de risco de vida materno que justifiquem claramente o risco.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados sobre passagem para o leite materno; uso pontual em emergência geralmente não contraindica a amamentação subsequente.",

  lactacaoCategoria: "cautela",

  renal:
    "Sem necessidade de ajuste específico bem estabelecida.",

  hepatica:
    "Metabolização hepática extensa — a duração de ação pode ser prolongada em hepatopatia grave; usar com cautela e reavaliar a necessidade de doses adicionais.",

  observacoes:
    "Ao contrário da naloxona no contexto de overdose opioide, o flumazenil NÃO é usado rotineiramente no manejo de overdose mista ou de causa desconhecida — o risco de precipitar convulsão, especialmente em pacientes com uso crônico de benzodiazepínico (uma população numerosa em psiquiatria, por ansiedade ou insônia) ou com coingestão de tricíclicos, costuma superar o benefício da reversão. Seu uso deve ser reservado a cenários mais controlados, como reversão pós-procedimento em paciente sem uso crônico conhecido de benzodiazepínico.",

  perolasClinicas: [
    "Antes de considerar o uso, sempre investigar uso crônico de benzodiazepínico — é a principal contraindicação prática e reduz bastante as situações em que o flumazenil é seguro.",
    "Não é 'a naloxona dos benzodiazepínicos': diferente do manejo padrão de overdose opioide, flumazenil não é conduta de rotina em overdose mista ou desconhecida, justamente pelo risco convulsivo.",
    "Se usado, manter monitorização por convulsão e por re-sedação, dada a meia-vida curta em relação à maioria dos benzodiazepínicos.",
    "Investigar sempre coingestão de antidepressivo tricíclico antes de usar — essa combinação é uma das situações de maior risco de convulsão refratária após a reversão.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};
