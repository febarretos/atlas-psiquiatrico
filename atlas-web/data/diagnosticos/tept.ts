import { Diagnostico } from "./types";

export const tept: Diagnostico = {
  id: "tept",

  nome: "Transtorno de Estresse Pós-Traumático",

  categoria: "Transtornos Relacionados a Trauma e a Estressores",

  cid11: "6B40",

  cid10: "F43.1",

  descricao:
    "Transtorno que se desenvolve após exposição a evento traumático real ou ameaça de morte, lesão grave ou violência sexual, caracterizado por sintomas de reexperimentação intrusiva, evitação de lembretes do trauma, alterações negativas na cognição e no humor, e hiperativação/reatividade, persistentes além de 1 mês.",

  criteriosDiagnosticos: [
    "A. Exposição a morte real ou ameaça de morte, lesão grave ou violência sexual, de uma (ou mais) das seguintes formas: vivenciar diretamente; testemunhar pessoalmente o evento ocorrendo com outros; saber que o evento ocorreu com familiar ou amigo próximo (violenta ou acidentalmente); exposição repetida ou extrema a detalhes aversivos do evento (ex. profissionais de resgate).",
    "B. Presença de um ou mais sintomas intrusivos associados ao evento traumático, iniciados após sua ocorrência: memórias intrusivas recorrentes e angustiantes; sonhos angustiantes recorrentes relacionados ao evento; reações dissociativas (flashbacks); sofrimento psicológico intenso e prolongado à exposição a estímulos que simbolizam o trauma; reações fisiológicas acentuadas a esses estímulos.",
    "C. Evitação persistente de estímulos associados ao trauma, evidenciada por um ou ambos: evitar memórias, pensamentos ou sentimentos angustiantes relacionados ao evento; evitar lembretes externos (pessoas, lugares, conversas, atividades, objetos, situações).",
    "D. Alterações negativas em cognições e no humor associadas ao evento, com início ou piora após o trauma, evidenciadas por 2 ou mais: incapacidade de recordar aspecto importante do evento (amnésia dissociativa); crenças ou expectativas negativas persistentes e exageradas sobre si, outros ou o mundo; cognições distorcidas persistentes sobre a causa/consequências do evento que levam a autoculpa ou culpar outros; estado emocional negativo persistente; interesse ou participação diminuídos em atividades significativas; sentimentos de distanciamento/estranhamento em relação aos outros; incapacidade persistente de vivenciar emoções positivas.",
    "E. Alterações marcantes na excitabilidade e reatividade associadas ao evento, com início ou piora após o trauma, evidenciadas por 2 ou mais: irritabilidade e surtos de raiva; comportamento imprudente ou autodestrutivo; hipervigilância; resposta de sobressalto exagerada; problemas de concentração; perturbação do sono.",
    "F. A perturbação (critérios B, C, D e E) persiste por mais de 1 mês.",
    "G. Causa sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes.",
    "H. A perturbação não é atribuível aos efeitos fisiológicos de uma substância ou de outra condição médica.",
  ],

  especificadores: [
    "Com sintomas dissociativos: despersonalização (sensação de estar distanciado do próprio corpo/mente) e/ou desrealização (sensação de irrealidade do ambiente)",
    "Com expressão tardia (critérios diagnósticos plenos só são satisfeitos 6 meses ou mais após o evento, ainda que alguns sintomas possam ter surgido antes)",
  ],

  duracaoMinima: "Sintomas persistentes por mais de 1 mês após o evento traumático",

  prevalencia:
    "Prevalência ao longo da vida em torno de 6-9% na população geral (variando conforme exposição a trauma na população estudada); aproximadamente 2x mais comum em mulheres, em parte pela maior exposição a violência interpessoal/sexual.",

  cursoEPrognostico:
    "Sintomas costumam iniciar nos primeiros 3 meses após o trauma, mas pode haver latência maior (apresentação tardia). Cerca de metade dos adultos remite dentro de 3 meses; em uma parcela significativa, os sintomas persistem por anos, especialmente sem tratamento. Curso pode ser flutuante, com exacerbação diante de lembretes ou estressores adicionais. Risco aumentado de comportamento suicida e de comorbidade por uso de substâncias.",

  diagnosticoDiferencial: [
    "Transtorno de Estresse Agudo (mesma sintomatologia central, porém com duração entre 3 dias e 1 mês após o trauma)",
    "Transtorno de Adaptação (resposta a estressor que não preenche critério de trauma do critério A, ou não preenche o quadro sintomático completo do TEPT)",
    "TAG e Transtorno do Pânico (ansiedade e hiperativação sem a ligação causal específica a evento traumático nem reexperimentação)",
    "TOC (pensamentos intrusivos são egodistônicos mas não relacionados a evento traumático vivido; presença de compulsões)",
    "Transtornos dissociativos primários (sintomas dissociativos predominam e não estão necessariamente ligados a intrusões do trauma)",
    "Transtorno Depressivo Maior secundário a evento estressor, sem os sintomas nucleares de reexperimentação/evitação/hiperativação",
    "Transtorno de Personalidade Borderline (instabilidade afetiva e relacional crônica, que pode coexistir com trauma complexo, mas com quadro clínico mais amplo)",
    "Simulação (contexto de litígio/ganho secundário deve ser considerado, mas não deve ser assumido sem avaliação cuidadosa)",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior (comorbidade mais frequente)",
    "Transtornos de ansiedade (TAG, pânico)",
    "Transtornos por uso de substâncias (frequente automedicação de sintomas de hiperativação e intrusão)",
    "Transtorno de Personalidade Borderline (especialmente em trauma complexo/precoce)",
    "Dor crônica e outras condições somáticas",
    "Comportamento suicida",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapias focadas no trauma como primeira linha com maior nível de evidência: Terapia de Processamento Cognitivo (TPC), Terapia de Exposição Prolongada e EMDR (Dessensibilização e Reprocessamento por Movimentos Oculares)",
    "ISRS (sertralina e paroxetina possuem aprovação específica para TEPT) como primeira linha farmacológica",
    "ISRSN (venlafaxina) como alternativa de primeira linha",
    "Prazosin como adjuvante com evidência para redução de pesadelos e distúrbios do sono relacionados ao trauma",
    "Evitar benzodiazepínicos como tratamento primário (não reduzem sintomas nucleares e podem interferir na extinção do medo durante a exposição terapêutica)",
  ],

  sintomasChave: [
    { id: "reexperienciacao", peso: 3 },
    { id: "hipervigilancia", peso: 2 },
    { id: "evitacao-lembretes-trauma", peso: 2 },
    { id: "exposicao-estressor", peso: 2 },
    { id: "irritabilidade", peso: 1 },
    { id: "insonia", peso: 1 },
  ],

  medicamentosPrimeiraLinha: ["sertralina", "paroxetina", "venlafaxina"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "APA Clinical Practice Guideline for the Treatment of PTSD",
    "NICE Guideline NG116 - Post-traumatic stress disorder",
    "VA/DoD Clinical Practice Guideline for PTSD",
    "CID-11 (OMS)",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a"],
    criterios: [
      { id: "a", pergunta: "Você já viveu, testemunhou pessoalmente, ou soube que aconteceu com alguém próximo, um evento de morte real ou ameaça de morte, lesão grave ou violência sexual (ou teve exposição repetida a detalhes extremos de eventos assim, ex.: por trabalho)?" },
      { id: "b1", pergunta: "Você tem memórias intrusivas e angustiantes do evento, que voltam sem você querer?", grupo: "B" },
      { id: "b2", pergunta: "Você tem sonhos angustiantes recorrentes relacionados ao evento?", grupo: "B" },
      { id: "b3", pergunta: "Você já teve a sensação de reviver o evento, como um flashback (agir ou sentir como se estivesse acontecendo de novo)?", grupo: "B" },
      { id: "b4", pergunta: "Você sente sofrimento psicológico intenso quando é exposto(a) a algo que lembra o evento?", grupo: "B" },
      { id: "b5", pergunta: "Você tem reações físicas fortes (coração acelerado, suor, falta de ar) quando lembrado(a) do evento?", grupo: "B" },
      { id: "c1", pergunta: "Você evita pensamentos, sentimentos ou lembranças relacionadas ao evento?", grupo: "C" },
      { id: "c2", pergunta: "Você evita pessoas, lugares, conversas, atividades ou objetos que lembram o evento?", grupo: "C" },
      { id: "d1", pergunta: "Você tem dificuldade para lembrar de partes importantes do evento?", grupo: "D" },
      { id: "d2", pergunta: "Você passou a ter crenças ou expectativas negativas exageradas sobre si mesmo(a), outras pessoas ou o mundo (ex.: \"sou uma pessoa má\", \"o mundo é totalmente perigoso\")?", grupo: "D" },
      { id: "d3", pergunta: "Você se culpa, ou culpa outras pessoas, de forma distorcida pelo evento ou suas consequências?", grupo: "D" },
      { id: "d4", pergunta: "Você tem sentido um estado emocional negativo persistente (medo, horror, raiva, culpa, vergonha)?", grupo: "D" },
      { id: "d5", pergunta: "Seu interesse em atividades que você gostava diminuiu bastante?", grupo: "D" },
      { id: "d6", pergunta: "Você se sente distante ou desconectado(a) das outras pessoas?", grupo: "D" },
      { id: "d7", pergunta: "Você tem dificuldade persistente para sentir emoções positivas (felicidade, satisfação, amor)?", grupo: "D" },
      { id: "e1", pergunta: "Você fica irritado(a) com facilidade ou tem explosões de raiva?", grupo: "E" },
      { id: "e2", pergunta: "Você tem se comportado de forma imprudente ou autodestrutiva?", grupo: "E" },
      { id: "e3", pergunta: "Você fica hipervigilante, sempre alerta a possíveis perigos?", grupo: "E" },
      { id: "e4", pergunta: "Você se assusta com facilidade, com reações de sobressalto exageradas?", grupo: "E" },
      { id: "e5", pergunta: "Você tem tido problemas de concentração?", grupo: "E" },
      { id: "e6", pergunta: "Você tem tido problemas para dormir?", grupo: "E" },
    ],
    algoritmo: {
      itensContaveis: [],
      subgruposComMinimo: [
        { itens: ["b1", "b2", "b3", "b4", "b5"], minimo: 1 },
        { itens: ["c1", "c2"], minimo: 1 },
        { itens: ["d1", "d2", "d3", "d4", "d5", "d6", "d7"], minimo: 2 },
        { itens: ["e1", "e2", "e3", "e4", "e5", "e6"], minimo: 2 },
      ],
      duracaoMinima: "A perturbação (critérios B, C, D e E) persiste por mais de 1 mês",
      observacaoExclusao:
        "ATENÇÃO — risco de segurança: risco aumentado de comportamento suicida — rastrear ativamente (ex.: escala C-SSRS), especialmente diante de exacerbação por lembretes ou estressores adicionais. G: sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes. H: não atribuível a efeito fisiológico de substância ou outra condição médica. Diferenciar de Transtorno de Estresse Agudo (mesma sintomatologia, duração entre 3 dias e 1 mês). Avaliar especificadores: com sintomas dissociativos (despersonalização/desrealização) e com expressão tardia (critérios plenos só satisfeitos 6+ meses após o evento).",
    },
  },
};
