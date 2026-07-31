import { Diagnostico } from "./types";

export const toc: Diagnostico = {
  id: "toc",

  nome: "Transtorno Obsessivo-Compulsivo",

  categoria: "Transtorno Obsessivo-Compulsivo e Relacionados",

  cid11: "6B20",

  cid10: "F42",

  descricao:
    "Transtorno caracterizado pela presença de obsessões (pensamentos, impulsos ou imagens intrusivos e indesejados que causam ansiedade acentuada) e/ou compulsões (comportamentos ou atos mentais repetitivos realizados para neutralizar a ansiedade ou prevenir um evento temido), consumindo tempo significativo e causando prejuízo funcional.",

  criteriosDiagnosticos: [
    "A. Presença de obsessões, compulsões, ou ambas:",
    "Obsessões definidas por: (1) pensamentos, impulsos ou imagens recorrentes e persistentes, experenciados como intrusivos e indesejados, causando ansiedade ou sofrimento acentuado na maioria dos indivíduos; (2) o indivíduo tenta ignorar, suprimir ou neutralizar tais pensamentos/impulsos/imagens com algum outro pensamento ou ação (isto é, executando uma compulsão).",
    "Compulsões definidas por: (1) comportamentos repetitivos (lavar as mãos, ordenar, checar) ou atos mentais (rezar, contar, repetir palavras em silêncio) que o indivíduo se sente compelido a executar em resposta a uma obsessão ou de acordo com regras que devem ser aplicadas rigidamente; (2) os comportamentos/atos mentais visam prevenir ou reduzir a ansiedade/sofrimento ou evitar algum evento temido, mas não têm conexão realista com o que pretendem neutralizar ou são claramente excessivos.",
    "B. As obsessões ou compulsões consomem tempo (mais de 1 hora por dia) ou causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, ocupacional ou em outras áreas importantes.",
    "C. Os sintomas não são atribuíveis aos efeitos fisiológicos de uma substância ou de outra condição médica.",
    "D. A perturbação não é mais bem explicada por sintomas de outro transtorno mental (preocupações do TAG, preocupação com aparência no Transtorno Dismórfico Corporal, ritual alimentar em transtorno alimentar, etc.).",
  ],

  especificadores: [
    "Com insight bom ou razoável (reconhece que as crenças do TOC são provavelmente ou claramente não verdadeiras)",
    "Com insight pobre (acredita que as crenças do TOC são provavelmente verdadeiras)",
    "Com insight ausente/crenças delirantes (está completamente convencido de que as crenças do TOC são verdadeiras)",
    "Relacionado a tique (história atual ou passada de transtorno de tique)",
  ],

  duracaoMinima: "Não há duração mínima formal exigida, mas os sintomas devem consumir tempo significativo (>1h/dia) ou causar prejuízo funcional",

  prevalencia:
    "Prevalência ao longo da vida em torno de 1-3% na população geral; distribuição semelhante entre sexos na vida adulta, com discreto predomínio masculino no início na infância. Um dos transtornos psiquiátricos mais incapacitantes segundo a OMS.",

  cursoEPrognostico:
    "Curso tipicamente crônico, com flutuações de intensidade relacionadas a estresse; sem tratamento, raramente remite espontaneamente. Início bimodal: pico na infância/adolescência e pico no início da vida adulta. Insight tende a diminuir e o prejuízo funcional a aumentar em casos não tratados de longa data. Boa resposta a tratamento adequado (farmacológico e/ou TCC com exposição), embora sintomas residuais sejam comuns.",

  diagnosticoDiferencial: [
    "TAG (preocupações excessivas sobre eventos da vida real, sem a qualidade intrusiva/egodistônica das obsessões e sem compulsões)",
    "Transtorno Dismórfico Corporal (preocupação obsessiva restrita à aparência física)",
    "Transtorno de Acumulação (dificuldade persistente em descartar posses, sem obsessões/compulsões típicas)",
    "Tricotilomania e Transtorno de Escoriação (comportamentos repetitivos focados no corpo, geralmente sem obsessões precedentes)",
    "Transtorno do Espectro Autista (comportamentos repetitivos e rotinas rígidas, mas sem obsessões egodistônicas ansiogênicas)",
    "Transtornos psicóticos/Esquizofrenia (diferenciar obsessões com insight pobre de delírios primários — no TOC há tipicamente reconhecimento parcial da irracionalidade)",
    "Transtorno de Tique/Síndrome de Tourette (movimentos/vocalizações não têm a função de neutralizar uma obsessão)",
    "Depressão com ruminação (pensamentos ruminativos congruentes com o humor, não intrusivos no mesmo sentido)",
  ],

  comorbidadesComuns: [
    "Transtornos de ansiedade (TAG, pânico, fobia social)",
    "Transtorno Depressivo Maior (comorbidade extremamente frequente, especialmente em casos de longa duração)",
    "Transtornos de tique / Síndrome de Tourette",
    "Transtorno Dismórfico Corporal e outros transtornos do espectro obsessivo-compulsivo",
    "Transtornos alimentares",
    "Transtorno de Personalidade Obsessivo-Compulsiva (entidade distinta, mas pode coexistir)",
  ],

  tratamentoPrimeiraLinha: [
    "ISRS em doses geralmente mais altas que as usadas em depressão (sertralina, fluoxetina, fluvoxamina, paroxetina, escitalopram), com resposta esperada apenas após 8-12 semanas de dose adequada",
    "Clomipramina (tricíclico com potente ação serotonérgica) como alternativa eficaz, geralmente reservada para casos refratários a ISRS pelo perfil de efeitos adversos",
    "Terapia Cognitivo-Comportamental com Exposição e Prevenção de Resposta (EPR) como tratamento psicoterápico de primeira linha, com evidência tão robusta quanto a farmacoterapia — combinação recomendada em casos moderados a graves",
    "Potencialização com antipsicótico atípico em baixa dose (risperidona, aripiprazol) em casos refratários a ISRS/clomipramina",
    "Neurocirurgia funcional (estimulação cerebral profunda) reservada a casos graves e refratários a múltiplas linhas de tratamento",
  ],

  sintomasChave: [
    { id: "obsessoes", peso: 3 },
    { id: "compulsoes", peso: 3 },
  ],

  medicamentosPrimeiraLinha: ["fluoxetina", "sertralina", "fluvoxamina", "paroxetina", "escitalopram", "clomipramina"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "Canadian Clinical Practice Guidelines for the Management of OCD (2014, com atualizações)",
    "APA Practice Guideline for the Treatment of Patients with OCD",
    "NICE Guideline CG31 - Obsessive-compulsive disorder and body dysmorphic disorder",
    "CID-11 (OMS)",
    "Associação Brasileira de Psiquiatria (ABP)/Associação Médica Brasileira (AMB). Diretriz: Transtorno Obsessivo-Compulsivo — Diagnóstico e Tratamento",
  ],
};
