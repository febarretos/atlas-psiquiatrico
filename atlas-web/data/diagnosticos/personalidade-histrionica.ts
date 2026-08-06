import { Diagnostico } from "./types";

export const personalidadeHistrionica: Diagnostico = {
  id: "personalidade-histrionica",

  nome: "Transtorno de Personalidade Histriônica",

  categoria: "Transtornos de Personalidade",

  cid10: "F60.4",

  descricao:
    "Padrão persistente de emotividade excessiva e busca de atenção, com início no início da vida adulta e presente em diversos contextos.",

  criteriosDiagnosticos: [
    "Padrão persistente de emotividade excessiva e busca de atenção, começando no início da idade adulta e presente em vários contextos, indicado por 5 (ou mais) dos seguintes critérios:",
    "1. Desconforto em situações nas quais não é o centro das atenções.",
    "2. Interação com os outros frequentemente caracterizada por comportamento sexualmente sedutor ou provocante inadequado.",
    "3. Expressão emocional superficial e rapidamente mutável.",
    "4. Uso regular da aparência física para chamar a atenção sobre si.",
    "5. Estilo de discurso excessivamente impressionista e carente de detalhes.",
    "6. Autodramatização, teatralidade e expressão emocional exagerada.",
    "7. Sugestionabilidade, sendo facilmente influenciado(a) por outros ou pelas circunstâncias.",
    "8. Considera os relacionamentos mais íntimos do que realmente são.",
  ],

  especificadores: [
    "Não há especificadores formais no DSM-5-TR; diferenciar de traços histriônicos socialmente adaptativos que não causam sofrimento ou prejuízo funcional.",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta",

  prevalencia:
    "Prevalência estimada em torno de 1,84% na população geral, com diagnóstico historicamente mais frequente em mulheres em contextos clínicos, possivelmente refletindo viés de gênero na aplicação dos critérios mais do que diferença real de prevalência.",

  cursoEPrognostico:
    "Curso geralmente crônico, com tendência a atenuação de manifestações mais dramáticas ao longo da vida. Risco aumentado de comportamento suicida como forma de busca de atenção (gestos que exigem avaliação cuidadosa de letalidade real).",

  diagnosticoDiferencial: [
    "Transtorno de Personalidade Borderline — instabilidade afetiva mais intensa, autolesão/impulsividade autodestrutiva mais proeminente e sentimentos crônicos de vazio, ausentes de forma central na histriônica",
    "Transtorno de Personalidade Narcisista — busca de admiração relacionada a grandiosidade e sentimento de superioridade, mais do que a desejo de ser cuidado(a)/notado(a)",
    "Transtorno de Personalidade Dependente — comportamento de busca de aprovação sem a teatralidade e emotividade exagerada típicas da histriônica",
    "Mudança de personalidade devido a outra condição médica",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Transtornos de Ansiedade",
    "Transtorno de Sintomas Somáticos",
    "Transtorno por Uso de Substâncias",
    "Outros Transtornos de Personalidade (borderline, narcisista, dependente, antissocial)",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia individual de orientação psicodinâmica ou cognitivo-comportamental, com foco no reconhecimento e regulação de emoções e no desenvolvimento de relacionamentos mais autênticos",
    "Farmacoterapia não possui indicação como tratamento central; reservada ao manejo de comorbidades associadas",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS)",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],
};
