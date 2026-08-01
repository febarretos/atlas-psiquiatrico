import { Medicamento } from "../../types";

export const pregabalina: Medicamento = {
  id: "pregabalina",

  nome: "Pregabalina",

  nomeComercial: [
    "Lyrica",
    "Pregabator",
  ],

  classe: "Adjuvante/Anticonvulsivante",

  subclasse: "Gabapentinoide",

  mecanismo:
    "Modula a subunidade alfa-2-delta dos canais de cálcio dependentes de voltagem, reduzindo a liberação de neurotransmissores excitatórios (glutamato, noradrenalina, substância P), do mesmo modo que a gabapentina, porém com farmacocinética linear e absorção mais previsível.",

  posologias: [
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "150 mg/dia (2–3 tomadas)",
      doseUsual: "300–450 mg/dia",
      doseMaxima: "600 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Dor Neuropática",
      doseInicial: "150 mg/dia",
      doseUsual: "300–450 mg/dia",
      doseMaxima: "600 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Fibromialgia (comórbida)",
      doseInicial: "150 mg/dia",
      doseUsual: "300–450 mg/dia",
      doseMaxima: "450 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "6 horas",

  metabolizacao:
    "Não é metabolizada de forma significativa pelo fígado; eliminação predominantemente renal, inalterada.",

  indicacoes: [
    "Transtorno de Ansiedade Generalizada (aprovada em vários países, incluindo Europa)",
    "Dor neuropática (indicação aprovada)",
    "Fibromialgia comórbida (indicação aprovada em alguns países)",
    "Epilepsia focal (uso neurológico, adjuvante)",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à pregabalina",
  ],

  vantagens: [
    "Evidência mais robusta que a gabapentina para Transtorno de Ansiedade Generalizada, com aprovação regulatória específica para essa indicação em vários países",
    "Farmacocinética linear e mais previsível que a gabapentina, com absorção não saturável",
    "Início de ação mais rápido que ISRS/ISRSN para sintomas ansiosos",
    "Baixo potencial de interação medicamentosa por não depender do metabolismo hepático",
  ],

  desvantagens: [
    "Substância sujeita a controle especial em diversos países (no Brasil, sujeita a controle pela ANVISA) pelo reconhecido potencial de abuso e dependência",
    "Edema periférico relativamente frequente",
    "Ganho de peso mais notável que a gabapentina",
    "Sedação e tontura dose-dependentes, especialmente no início do tratamento",
    "Sintomas de abstinência com a descontinuação abrupta após uso prolongado (ansiedade rebote, insônia, sudorese)",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Tontura",
    "Edema periférico",
    "Ganho de peso",
    "Boca seca",
    "Visão turva",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "Opioides (potencialização de sedação e depressão respiratória — combinação de risco reconhecido)",
    "Álcool e outros depressores do sistema nervoso central (efeito aditivo)",
    "Benzodiazepínicos (potencialização de sedação)",
    "Tiazolidinedionas (pioglitazona, rosiglitazona) — risco aumentado de edema periférico e ganho de peso (efeito aditivo)",
    "Inibidores da ECA (IECA) — risco aumentado de angioedema",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Moderada",

  sexual: "Baixa",

  qt: "Muito baixo",

  gravidez:
    "Dados limitados em humanos; usar apenas quando o benefício justificar claramente o risco.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno; dados limitados sobre segurança, usar com cautela e monitorização do lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Requer ajuste significativo de dose conforme o clearance de creatinina, dado que a eliminação é predominantemente renal.",

  ajusteRenalNecessario: true,

  hepatica:
    "Não necessita ajuste de dose na insuficiência hepática, pois não é metabolizada de forma significativa pelo fígado.",

  observacoes:
    "A pregabalina possui evidência mais robusta que a gabapentina especificamente para Transtorno de Ansiedade Generalizada, sendo aprovada para essa indicação em diversos países, embora no Brasil seu uso psiquiátrico permaneça majoritariamente off-label. Por ser reconhecida pela ANVISA como sujeita a controle especial devido ao potencial de abuso e dependência, sua prescrição exige cautela redobrada, avaliação de histórico de uso de substâncias e acompanhamento próximo, especialmente em uso prolongado. O edema periférico e o ganho de peso tendem a ser mais notáveis que com a gabapentina. A descontinuação deve ser sempre gradual para evitar sintomas de abstinência.",

  perolasClinicas: [
    "Diferente da gabapentina, sua absorção é linear e previsível — a resposta clínica é mais consistente ao ajustar a dose, o que a torna preferível quando titulação previsível é prioridade.",
    "É uma opção a considerar em TAG quando ISRS/ISRSN já falharam ou são mal tolerados, com início de efeito mais rápido (dias, não semanas) que os antidepressivos.",
    "Como substância de controle especial no Brasil, exige notificação de receita específica — planejar a prescrição considerando essa burocracia adicional, especialmente para pacientes em uso contínuo.",
    "Monitorar edema de membros inferiores, especialmente em idosos ou pacientes com insuficiência cardíaca/venosa preexistente, onde pode ser mais pronunciado e confundido com piora da condição de base.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "NICE Guideline (Transtorno de Ansiedade Generalizada)",
    "Bula de referência ANVISA/EMA (Lyrica)",
  ],
};
