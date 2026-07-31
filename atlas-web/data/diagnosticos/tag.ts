import { Diagnostico } from "./types";

export const tag: Diagnostico = {
  id: "tag",

  nome: "Transtorno de Ansiedade Generalizada",

  categoria: "Transtornos de Ansiedade",

  cid11: "6B00",

  cid10: "F41.1",

  descricao:
    "Transtorno caracterizado por ansiedade e preocupação excessivas e de difícil controle, envolvendo múltiplas áreas da vida (trabalho, saúde, família, finanças), presentes na maioria dos dias por período prolongado, acompanhadas de sintomas somáticos e cognitivos de hiperativação.",

  criteriosDiagnosticos: [
    "A. Ansiedade e preocupação excessivas, ocorrendo na maioria dos dias, por pelo menos 6 meses, relacionadas a diversos eventos ou atividades (trabalho, escola, desempenho).",
    "B. O indivíduo tem dificuldade em controlar a preocupação.",
    "C. A ansiedade e a preocupação estão associadas a pelo menos 3 dos seguintes sintomas (apenas 1 exigido em crianças), presentes na maioria dos dias nos últimos 6 meses:",
    "1. Inquietação ou sensação de estar com os nervos à flor da pele.",
    "2. Fatigabilidade fácil.",
    "3. Dificuldade de concentração ou sensação de branco mental.",
    "4. Irritabilidade.",
    "5. Tensão muscular.",
    "6. Perturbação do sono (dificuldade em iniciar/manter o sono, ou sono insatisfatório e inquieto).",
    "D. A ansiedade, a preocupação ou os sintomas físicos causam sofrimento significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes.",
    "E. A perturbação não é atribuível aos efeitos fisiológicos de uma substância ou de outra condição médica (ex. hipertireoidismo).",
    "F. A perturbação não é mais bem explicada por outro transtorno mental (ex. ansiedade de separação, pânico, fobia social, TOC, TEPT).",
  ],

  duracaoMinima: "Sintomas presentes na maioria dos dias por pelo menos 6 meses",

  prevalencia:
    "Prevalência ao longo da vida em torno de 5-9%; prevalência anual próxima de 2-3%; aproximadamente 2x mais comum em mulheres. Um dos transtornos de ansiedade mais comuns na atenção primária.",

  cursoEPrognostico:
    "Curso tipicamente crônico e flutuante, com sintomas que pioram em períodos de estresse. Idade média de início mais tardia que outros transtornos de ansiedade (frequentemente na vida adulta), embora possa iniciar na infância/adolescência. Baixa taxa de remissão espontânea completa; boa resposta a tratamento adequado, mas recaídas são comuns quando a terapêutica é interrompida precocemente.",

  diagnosticoDiferencial: [
    "Transtorno do Pânico (preocupação centrada em ter novas crises, não generalizada)",
    "Fobia Social (ansiedade circunscrita a situações de avaliação social)",
    "TOC (preocupações assumem forma de obsessões egodistônicas, associadas a compulsões)",
    "TEPT (ansiedade vinculada a evento traumático específico, com reexperimentação)",
    "Transtorno Depressivo Maior com ansiedade proeminente",
    "Transtorno de Ansiedade de Doença (preocupação restrita à saúde/doença grave)",
    "Ansiedade induzida por substância/medicação (cafeína, estimulantes, abstinência de álcool/benzodiazepínicos)",
    "Hipertireoidismo, feocromocitoma e outras causas orgânicas de ansiedade",
    "Transtorno de Personalidade Ansiosa (evitativa, dependente) — traço mais estável e de início precoce",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior (comorbidade mais frequente, presente em até 50-60% dos casos)",
    "Outros transtornos de ansiedade (pânico, fobia social, fobias específicas)",
    "Transtornos por uso de álcool e sedativos (uso como automedicação)",
    "Síndrome do intestino irritável e outras condições somáticas funcionais",
    "Insônia crônica",
  ],

  tratamentoPrimeiraLinha: [
    "ISRS (escitalopram, sertralina, paroxetina) como primeira linha farmacológica",
    "ISRSN (venlafaxina XR, duloxetina) como alternativa de primeira linha",
    "Terapia Cognitivo-Comportamental (TCC), com foco em reestruturação cognitiva e técnicas de exposição à incerteza, como primeira linha não-farmacológica com evidência robusta",
    "Benzodiazepínicos reservados para alívio sintomático de curto prazo (uso limitado no tempo, dado risco de dependência) — não recomendados como monoterapia de longo prazo",
    "Buspirona como opção adjuvante ou alternativa em casos selecionados",
    "Pregabalina como opção de segunda linha em alguns guidelines (NICE) para casos refratários",
  ],

  sintomasChave: [
    { id: "ansiedade-excessiva", peso: 3 },
    { id: "tensao-muscular", peso: 2 },
    { id: "dificuldade-concentracao", peso: 2 },
    { id: "irritabilidade", peso: 2 },
    { id: "fadiga", peso: 2 },
    { id: "insonia", peso: 1 },
  ],

  medicamentosPrimeiraLinha: [
    "escitalopram",
    "sertralina",
    "venlafaxina",
    "duloxetina",
    "paroxetina",
    "pregabalina",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CANMAT Clinical Guidelines for Anxiety, Trauma- and Stress-related Disorders",
    "NICE Guideline CG113 - Generalised anxiety disorder and panic disorder in adults",
    "CID-11 (OMS)",
    "Associação Brasileira de Psiquiatria (ABP)/Associação Médica Brasileira (AMB). Transtornos de Ansiedade: Diagnóstico e Tratamento",
  ],
};
