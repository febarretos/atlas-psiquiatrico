import { Diagnostico } from "./types";

export const depressaoMaior: Diagnostico = {
  id: "depressao-maior",

  nome: "Transtorno Depressivo Maior",

  categoria: "Transtornos Depressivos",

  cid11: "6A70",

  cid10: "F32 / F33",

  descricao:
    "Transtorno caracterizado por episódios distintos de humor deprimido e/ou perda de interesse ou prazer (anedonia), acompanhados de alterações cognitivas e neurovegetativas, que representam uma mudança significativa em relação ao funcionamento prévio do indivíduo e causam sofrimento ou prejuízo clinicamente relevante.",

  criteriosDiagnosticos: [
    "A. Presença de pelo menos 5 dos sintomas abaixo durante o mesmo período de 2 semanas, representando mudança em relação ao funcionamento anterior, sendo obrigatória a presença de (1) humor deprimido ou (2) perda de interesse/prazer:",
    "1. Humor deprimido na maior parte do dia, quase todos os dias (em crianças e adolescentes, pode manifestar-se como irritabilidade).",
    "2. Redução acentuada do interesse ou prazer em quase todas as atividades, na maior parte do dia, quase todos os dias.",
    "3. Alteração significativa do apetite ou do peso (perda ou ganho não intencional > 5% do peso corporal em um mês) ou aumento/diminuição do apetite quase todos os dias.",
    "4. Insônia ou hipersonia quase todos os dias.",
    "5. Agitação ou retardo psicomotor quase todos os dias, observável por terceiros (não apenas relato subjetivo).",
    "6. Fadiga ou perda de energia quase todos os dias.",
    "7. Sentimentos de inutilidade ou culpa excessiva/inadequada (podendo ser delirante) quase todos os dias.",
    "8. Diminuição da capacidade de pensar, concentrar-se ou tomar decisões, quase todos os dias.",
    "9. Pensamentos recorrentes de morte, ideação suicida recorrente com ou sem plano, ou tentativa de suicídio.",
    "B. Os sintomas causam sofrimento clinicamente significativo ou prejuízo funcional (social, ocupacional ou em outras áreas importantes).",
    "C. O episódio não é atribuível aos efeitos fisiológicos de uma substância ou de outra condição médica.",
    "D. O episódio não é mais bem explicado por transtorno esquizoafetivo, esquizofrenia ou outros transtornos do espectro psicótico.",
    "E. Nunca houve episódio maníaco ou hipomaníaco (o que reclassificaria o quadro como Transtorno Bipolar).",
  ],

  especificadores: [
    "Com ansiedade (tensão, inquietude, dificuldade de concentração por preocupação, medo de que algo terrível aconteça)",
    "Com características mistas (sintomas maníacos/hipomaníacos subliminares concomitantes)",
    "Com características melancólicas (anedonia profunda, falta de reatividade do humor, piora matinal, despertar precoce, retardo/agitação psicomotor marcante, anorexia significativa, culpa excessiva)",
    "Com características atípicas (reatividade do humor, hiperfagia, hipersonia, paralisia de chumbo, sensibilidade a rejeição interpessoal)",
    "Com características psicóticas (delírios e/ou alucinações, congruentes ou incongruentes com o humor)",
    "Com catatonia",
    "Com padrão sazonal",
    "Com início no periparto",
    "Episódio único ou recorrente",
    "Gravidade: leve, moderado, grave",
  ],

  duracaoMinima: "Sintomas presentes na maior parte do dia por, no mínimo, 2 semanas consecutivas",

  prevalencia:
    "Prevalência ao longo da vida em torno de 15-20%; prevalência anual de aproximadamente 7% na população geral; cerca de 2x mais comum em mulheres.",

  cursoEPrognostico:
    "Curso frequentemente recorrente — após um primeiro episódio, o risco de recorrência ao longo da vida ultrapassa 50%, aumentando a cada episódio adicional. Idade média de início na faixa dos 20 anos, mas pode ocorrer em qualquer idade. Sem tratamento, episódios costumam durar de 6 a 12 meses; com tratamento adequado, a duração tende a ser menor.",

  diagnosticoDiferencial: [
    "Transtorno Bipolar (rastrear ativamente história de mania/hipomania antes de firmar o diagnóstico)",
    "Transtorno de Adaptação com humor deprimido (estressor identificável, não preenche todos os critérios sintomáticos)",
    "Luto não complicado (reação normal à perda, sem os critérios plenos de prejuízo funcional sustentado)",
    "Transtorno Depressivo Persistente (Distimia) — sintomas mais crônicos e de menor intensidade, por pelo menos 2 anos",
    "Transtorno Disfórico Pré-Menstrual",
    "Episódio depressivo secundário a condição médica (hipotireoidismo, doença de Parkinson, AVC, neoplasias) ou induzido por substância/medicação",
    "Transtorno de humor com características psicóticas vs. Transtorno Esquizoafetivo/Esquizofrenia",
    "Transtorno Depressivo com sintomas cognitivos vs. quadro demencial inicial (pseudodemência depressiva)",
    "TDAH (sobreposição de queixas de concentração e desatenção)",
  ],

  comorbidadesComuns: [
    "Transtornos de ansiedade (TAG, pânico, fobia social) — presentes em até 60% dos casos",
    "Transtornos por uso de substâncias",
    "Transtornos da personalidade (especialmente borderline)",
    "Dor crônica e condições médicas gerais (diabetes, doença cardiovascular, obesidade)",
    "Transtornos alimentares",
    "TOC",
  ],

  tratamentoPrimeiraLinha: [
    "Antidepressivos ISRS (sertralina, escitalopram, fluoxetina) como primeira escolha farmacológica na maioria dos casos leves a moderados",
    "ISRSN (venlafaxina, duloxetina) como alternativa de primeira linha, especialmente com sintomas dolorosos associados",
    "Psicoterapia baseada em evidência: Terapia Cognitivo-Comportamental (TCC) e Terapia Interpessoal (TIP), com eficácia comparável à farmacoterapia em quadros leves a moderados",
    "Combinação de antidepressivo + psicoterapia recomendada em quadros moderados a graves (CANMAT/APA)",
    "Eletroconvulsoterapia (ECT) considerada de primeira linha em depressão grave com risco de suicídio iminente, sintomas psicóticos, catatonia ou recusa alimentar/refratariedade",
    "Atividade física estruturada como adjuvante com evidência robusta",
  ],

  sintomasChave: [
    { id: "humor-deprimido", peso: 3 },
    { id: "anedonia", peso: 3 },
    { id: "fadiga", peso: 2 },
    { id: "culpa-inutilidade", peso: 2 },
    { id: "dificuldade-concentracao", peso: 2 },
    { id: "ideacao-suicida", peso: 2 },
    { id: "insonia", peso: 1 },
    { id: "hipersonia", peso: 1 },
  ],

  medicamentosPrimeiraLinha: [
    "sertralina",
    "escitalopram",
    "fluoxetina",
    "citalopram",
    "paroxetina",
    "fluvoxamina",
    "venlafaxina",
    "desvenlafaxina",
    "duloxetina",
    "mirtazapina",
    "bupropiona",
    "vortioxetina",
    "agomelatina",
    "vilazodona",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CANMAT/ISBD 2023 Guidelines for Management of Major Depressive Disorder",
    "APA Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
    "NICE Guideline NG222 - Depression in adults",
    "CID-11 (OMS)",
    "Diretrizes da Associação Brasileira de Psiquiatria (ABP) com a Associação Médica Brasileira (AMB) para o Tratamento da Depressão — Projeto Diretrizes AMB/CFM",
  ],
};
