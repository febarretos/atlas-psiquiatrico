import { Diagnostico } from "./types";

export const panico: Diagnostico = {
  id: "panico",

  nome: "Transtorno do Pânico",

  categoria: "Transtornos de Ansiedade",

  cid11: "6B01",

  cid10: "F41.0",

  descricao:
    "Transtorno caracterizado por crises de pânico recorrentes e inesperadas — surtos abruptos de medo ou desconforto intenso, acompanhados de sintomas físicos e cognitivos — seguidas de preocupação persistente com novas crises ou de mudanças comportamentais desadaptativas para evitá-las.",

  criteriosDiagnosticos: [
    "A. Crises de pânico recorrentes e inesperadas. Uma crise de pânico é um surto abrupto de medo ou desconforto intenso que atinge um pico em minutos, com 4 ou mais dos seguintes sintomas:",
    "1. Palpitações, coração acelerado ou taquicardia.",
    "2. Sudorese.",
    "3. Tremores ou abalos.",
    "4. Sensação de falta de ar ou sufocamento.",
    "5. Sensação de asfixia.",
    "6. Dor ou desconforto torácico.",
    "7. Náusea ou desconforto abdominal.",
    "8. Sensação de tontura, instabilidade, vertigem ou desmaio.",
    "9. Calafrios ou ondas de calor.",
    "10. Parestesias (dormência ou formigamento).",
    "11. Desrealização (sensação de irrealidade) ou despersonalização (sensação de estar distanciado de si mesmo).",
    "12. Medo de perder o controle ou enlouquecer.",
    "13. Medo de morrer.",
    "B. Pelo menos uma das crises é seguida, por 1 mês ou mais, de um ou ambos:",
    "1. Preocupação ou apreensão persistente sobre crises adicionais ou suas consequências (ex. perder o controle, ter infarto, enlouquecer).",
    "2. Mudança comportamental mal-adaptativa significativa relacionada às crises (ex. comportamentos de evitação de exercícios ou situações desconhecidas).",
    "C. A perturbação não é atribuível aos efeitos fisiológicos de uma substância ou de outra condição médica (ex. hipertireoidismo, arritmias cardíacas).",
    "D. A perturbação não é mais bem explicada por outro transtorno mental (ex. as crises não ocorrem apenas em resposta a situações temidas na fobia social ou específica, obsessões no TOC, lembranças de trauma no TEPT).",
  ],

  especificadores: [
    "Com Agorafobia (comórbida) — deve ser codificada separadamente quando presente",
  ],

  duracaoMinima: "Preocupação/mudança comportamental persistente por pelo menos 1 mês após a crise",

  prevalencia:
    "Prevalência ao longo da vida em torno de 2-5% na população geral; prevalência anual próxima de 2-3%; aproximadamente 2x mais comum em mulheres. Início típico entre o final da adolescência e os 30 anos.",

  cursoEPrognostico:
    "Curso frequentemente crônico com flutuações — períodos de exacerbação intercalados com remissões parciais. Sem tratamento, tende a evoluir com agorafobia progressiva e restrição funcional significativa. Com tratamento adequado, a maioria dos pacientes apresenta boa resposta, embora recaídas sejam comuns.",

  diagnosticoDiferencial: [
    "Causas médicas de sintomas paroxísticos: arritmias cardíacas, hipertireoidismo, feocromocitoma, hipoglicemia, asma, embolia pulmonar, epilepsia do lobo temporal",
    "Ansiedade/crises induzidas por substância (cafeína, estimulantes, cannabis) ou abstinência (álcool, benzodiazepínicos)",
    "Fobia Social e Fobias Específicas (crises situacionalmente previsíveis, ligadas ao estímulo temido)",
    "TAG (ansiedade generalizada e persistente, sem os surtos abruptos característicos)",
    "TEPT (crises desencadeadas por lembretes do trauma, no contexto de reexperimentação)",
    "TOC (ansiedade desencadeada por obsessões específicas)",
    "Transtorno de Ansiedade de Doença",
    "Transtorno Depressivo com ataques de ansiedade",
  ],

  comorbidadesComuns: [
    "Agorafobia (desenvolve-se em parcela significativa dos casos)",
    "Transtorno Depressivo Maior",
    "Outros transtornos de ansiedade (TAG, fobia social)",
    "Transtornos por uso de álcool e sedativos",
    "Transtorno de Personalidade Dependente e Evitativa",
  ],

  tratamentoPrimeiraLinha: [
    "ISRS (sertralina, paroxetina, escitalopram) como primeira linha farmacológica",
    "ISRSN (venlafaxina XR) como alternativa de primeira linha",
    "Terapia Cognitivo-Comportamental (TCC) com exposição interoceptiva, como tratamento de primeira linha com evidência robusta, isolada ou combinada a farmacoterapia",
    "Benzodiazepínicos de alta potência (clonazepam, alprazolam) podem ser usados por curto prazo para controle rápido de sintomas agudos, com atenção ao risco de dependência e recomendação de desmame gradual",
    "Psicoeducação sobre a natureza benigna e autolimitada das crises de pânico como componente essencial do tratamento",
  ],

  sintomasChave: [
    { id: "ataques-panico", peso: 3 },
    { id: "evitacao-fobica", peso: 2 },
    { id: "ansiedade-excessiva", peso: 1 },
    { id: "tensao-muscular", peso: 1 },
  ],

  medicamentosPrimeiraLinha: [
    "sertralina",
    "paroxetina",
    "escitalopram",
    "venlafaxina",
    "clonazepam",
    "alprazolam",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CANMAT Clinical Guidelines for Anxiety, Trauma- and Stress-related Disorders",
    "NICE Guideline CG113 - Generalised anxiety disorder and panic disorder in adults",
    "CID-11 (OMS)",
    "Associação Brasileira de Psiquiatria (ABP)/Associação Médica Brasileira (AMB). Transtornos de Ansiedade: Diagnóstico e Tratamento",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a"],
    criterios: [
      { id: "a", pergunta: "Você já teve crises de pânico recorrentes e inesperadas — surtos abruptos de medo ou desconforto intenso que atingem o pico em minutos?" },
      { id: "a1", pergunta: "Durante as crises, você sente palpitações ou o coração acelerado?" },
      { id: "a2", pergunta: "Você sua muito durante as crises?" },
      { id: "a3", pergunta: "Você treme ou tem abalos musculares?" },
      { id: "a4", pergunta: "Você sente falta de ar ou sensação de sufocamento?" },
      { id: "a5", pergunta: "Você sente como se estivesse engasgando?" },
      { id: "a6", pergunta: "Você sente dor ou desconforto no peito?" },
      { id: "a7", pergunta: "Você sente náusea ou desconforto abdominal?" },
      { id: "a8", pergunta: "Você sente tontura, instabilidade ou sensação de desmaio?" },
      { id: "a9", pergunta: "Você sente calafrios ou ondas de calor?" },
      { id: "a10", pergunta: "Você sente dormência ou formigamento?" },
      { id: "a11", pergunta: "Você sente que as coisas ao redor não são reais, ou que está distanciado(a) de si mesmo(a)?" },
      { id: "a12", pergunta: "Você tem medo de perder o controle ou enlouquecer durante as crises?" },
      { id: "a13", pergunta: "Você tem medo de morrer durante as crises?" },
      { id: "b1", pergunta: "Depois de pelo menos uma crise, você ficou preocupado(a) persistentemente com a possibilidade de ter novas crises ou com suas consequências (ex.: medo de infarto, de enlouquecer)?" },
      { id: "b2", pergunta: "Você mudou seu comportamento de forma significativa por causa das crises (ex.: evitar exercícios, evitar lugares desconhecidos)?" },
    ],
    algoritmo: {
      contagemMinima: 4,
      itensContaveis: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13"],
      gruposObrigatorios: [["b1", "b2"]],
      duracaoMinima: "Pelo menos uma crise seguida, por 1 mês ou mais, de preocupação persistente ou mudança comportamental",
      observacaoExclusao:
        "C: não atribuível a efeito fisiológico de substância ou outra condição médica (hipertireoidismo, arritmias cardíacas, hipoglicemia). D: não mais bem explicado por outro transtorno mental — as crises não devem ocorrer apenas em resposta a situações temidas específicas (fobia social/específica), obsessões (TOC) ou lembranças de trauma (TEPT). Especificador: avaliar agorafobia comórbida (codificada separadamente).",
    },
  },
};
