import { Diagnostico } from "./types";

export const transtornoUsoAlcool: Diagnostico = {
  id: "transtorno-uso-alcool",

  nome: "Transtorno por Uso de Álcool",

  categoria: "Transtornos Relacionados a Substâncias e Transtornos Aditivos",

  cid11: "6C40.2",

  cid10: "F10.2",

  descricao:
    "Padrão problemático de uso de álcool que leva a prejuízo ou sofrimento clinicamente significativo, manifestado por um agrupamento de sintomas cognitivos, comportamentais e fisiológicos que refletem perda de controle sobre o consumo, uso continuado apesar de consequências adversas, e alterações neuroadaptativas como tolerância e abstinência.",

  criteriosDiagnosticos: [
    "Padrão problemático de uso de álcool levando a prejuízo ou sofrimento clinicamente significativos, manifestado por pelo menos 2 dos seguintes critérios, ocorrendo dentro de um período de 12 meses:",
    "1. Álcool é frequentemente consumido em maiores quantidades ou por período mais longo do que o pretendido.",
    "2. Desejo persistente ou esforços malsucedidos no sentido de reduzir ou controlar o uso de álcool.",
    "3. Muito tempo é gasto em atividades necessárias para a obtenção do álcool, uso do álcool ou recuperação dos seus efeitos.",
    "4. Fissura (craving) ou forte desejo ou necessidade de consumir álcool.",
    "5. Uso recorrente de álcool resultando em fracasso em cumprir obrigações importantes relativas ao trabalho, escola ou lar.",
    "6. Uso continuado de álcool apesar de problemas sociais ou interpessoais persistentes ou recorrentes, causados ou exacerbados pelos efeitos do álcool.",
    "7. Importantes atividades sociais, ocupacionais ou recreativas são abandonadas ou reduzidas em virtude do uso de álcool.",
    "8. Uso recorrente de álcool em situações nas quais isso representa perigo para a integridade física.",
    "9. O uso de álcool é mantido apesar da consciência de ter um problema físico ou psicológico persistente ou recorrente que tende a ser causado ou exacerbado pelo álcool.",
    "10. Tolerância, definida por qualquer um dos seguintes: (a) necessidade de quantidades progressivamente maiores de álcool para atingir a intoxicação ou efeito desejado; (b) efeito acentuadamente menor com o uso continuado da mesma quantidade de álcool.",
    "11. Abstinência, manifestada por qualquer um dos seguintes: (a) síndrome de abstinência característica do álcool; (b) uso de álcool (ou substância intimamente relacionada, como benzodiazepínico) para aliviar ou evitar sintomas de abstinência.",
  ],

  especificadores: [
    "Gravidade leve: presença de 2-3 critérios",
    "Gravidade moderada: presença de 4-5 critérios",
    "Gravidade grave: presença de 6 ou mais critérios",
    "Em remissão inicial: nenhum critério satisfeito por pelo menos 3 meses, mas menos de 12 meses (exceto craving)",
    "Em remissão sustentada: nenhum critério satisfeito durante 12 meses ou mais (exceto craving)",
    "Em ambiente controlado (acesso ao álcool restrito)",
  ],

  duracaoMinima: "Padrão de uso problemático com pelo menos 2 critérios presentes dentro do mesmo período de 12 meses",

  prevalencia:
    "Prevalência anual estimada em torno de 8-14% e prevalência ao longo da vida em torno de 29% na população geral em diferentes estudos internacionais; aproximadamente 2x mais comum em homens, embora a diferença entre sexos venha diminuindo. Um dos transtornos psiquiátricos mais prevalentes e subdiagnosticados em contexto ambulatorial geral.",

  cursoEPrognostico:
    "Curso variável, frequentemente flutuante entre períodos de uso problemático, tentativas de controle e recaída. Início mais comum entre o final da adolescência e os 20-30 anos. Fatores associados a pior prognóstico incluem início precoce, gravidade elevada, comorbidade psiquiátrica, ausência de suporte social e história familiar positiva. Risco significativo de complicações médicas (hepatopatia, pancreatite, neuropatia, déficits cognitivos, câncer) e de mortalidade por causas diretas e indiretas (acidentes, suicídio). Síndrome de abstinência pode ser grave e potencialmente fatal (delirium tremens, convulsões), exigindo avaliação cuidadosa antes da cessação abrupta.",

  diagnosticoDiferencial: [
    "Uso de risco/nocivo de álcool sem preencher critérios plenos de transtorno por uso (padrão de consumo problemático sem os critérios comportamentais/neuroadaptativos necessários)",
    "Transtornos induzidos por álcool (intoxicação, abstinência, transtornos psicóticos, depressivos, ansiosos, do sono induzidos por álcool) — devem ser diferenciados de transtornos primários independentes",
    "Transtorno Depressivo Maior ou Transtornos de Ansiedade primários com uso secundário de álcool como automedicação",
    "Transtorno Bipolar (uso de álcool pode ocorrer em episódios maníacos com impulsividade aumentada)",
    "Transtorno da Personalidade Antissocial (comportamentos de risco podem se sobrepor, mas com padrão mais amplo e precoce de violação de normas)",
    "Outros transtornos por uso de substâncias concomitantes (poliuso é comum e deve ser rastreado ativamente)",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Transtornos de ansiedade",
    "Transtorno Bipolar",
    "Outros transtornos por uso de substâncias (nicotina, sedativos, estimulantes)",
    "Transtorno de Personalidade Antissocial",
    "TEPT",
    "Transtornos neurocognitivos relacionados ao álcool (síndrome de Wernicke-Korsakoff)",
  ],

  tratamentoPrimeiraLinha: [
    "Naltrexona (oral ou injetável de depósito) como primeira linha farmacológica, reduzindo craving e o reforço positivo do consumo de álcool",
    "Acamprosato como alternativa de primeira linha, particularmente útil na manutenção da abstinência após desintoxicação, com mecanismo de modulação glutamatérgica",
    "Dissulfiram como opção farmacológica baseada em aversão, reservado a pacientes motivados e com boa adesão supervisionada, dado o risco de reação grave em caso de consumo concomitante de álcool",
    "Desintoxicação supervisionada (frequentemente com benzodiazepínicos em esquema decrescente) indicada em casos de dependência fisiológica estabelecida, pelo risco de síndrome de abstinência grave (convulsões, delirium tremens)",
    "Intervenções psicossociais baseadas em evidência: entrevista motivacional, TCC voltada a prevenção de recaída, Terapia de Reforço Comunitário e participação em grupos de apoio (Alcoólicos Anônimos e programas de 12 passos)",
    "Reposição de tiamina (vitamina B1) antes ou concomitante à reposição de glicose em pacientes com uso pesado de álcool, para prevenção de encefalopatia de Wernicke",
  ],

  sintomasChave: [
    { id: "perda-controle-uso", peso: 3 },
    { id: "tolerancia-abstinencia", peso: 2 },
    { id: "uso-apesar-problemas", peso: 2 },
  ],

  // Naltrexona, acamprosato e dissulfiram (primeira linha farmacológica
  // segundo o texto acima) não constam em data/medicamentos/index.ts;
  // medicamentosPrimeiraLinha omitido para não referenciar ids inexistentes.

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "APA Practice Guideline for the Pharmacological Treatment of Patients with Alcohol Use Disorder",
    "NICE Guideline CG115 - Alcohol-use disorders: diagnosis, assessment and management",
    "SAMHSA TIP 49 - Incorporating Alcohol Pharmacotherapies into Medical Practice",
    "CID-11 (OMS)",
  ],
};
