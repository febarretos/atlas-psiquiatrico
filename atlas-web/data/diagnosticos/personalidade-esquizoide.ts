import { Diagnostico } from "./types";

export const personalidadeEsquizoide: Diagnostico = {
  id: "personalidade-esquizoide",

  nome: "Transtorno de Personalidade Esquizoide",

  categoria: "Transtornos de Personalidade",

  cid10: "F60.1",

  descricao:
    "Padrão persistente de distanciamento das relações sociais e de faixa restrita de expressão emocional em contextos interpessoais, com início no início da vida adulta e presente em diversos contextos.",

  criteriosDiagnosticos: [
    "Padrão persistente de distanciamento das relações sociais e faixa restrita de expressão de emoções em contextos interpessoais, começando no início da idade adulta e presente em vários contextos, indicado por 4 (ou mais) dos seguintes critérios:",
    "1. Não deseja nem desfruta de relações íntimas, incluindo fazer parte de uma família.",
    "2. Escolhe quase sempre atividades solitárias.",
    "3. Manifesta pouco ou nenhum interesse em ter experiências sexuais com outra pessoa.",
    "4. Tem prazer em poucas ou nenhuma atividade.",
    "5. Não tem amigos próximos ou confidentes, além de parentes de primeiro grau.",
    "6. Mostra-se indiferente a elogios ou críticas dos outros.",
    "7. Mostra frieza emocional, distanciamento ou embotamento afetivo.",
  ],

  especificadores: [
    "Não há especificadores formais no DSM-5-TR; diferenciar de traços esquizoides que representam adaptação funcional (ex.: preferência por trabalho solitário sem sofrimento associado).",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta",

  prevalencia:
    "Prevalência estimada entre 3,1% e 4,9% na população geral; discretamente mais comum em homens.",

  cursoEPrognostico:
    "Curso tipicamente crônico e estável, com baixa procura espontânea de tratamento — o distanciamento interpessoal costuma ser egossintônico. Prognóstico funcional pode ser bom quando o indivíduo encontra nicho ocupacional/social compatível com baixa demanda de interação social.",

  diagnosticoDiferencial: [
    "Transtorno do Espectro Autista — presença de déficits na comunicação social desde a infância e comportamentos/interesses restritos e repetitivos, ausentes na personalidade esquizoide",
    "Esquizofrenia e Transtorno Delirante — ausência de delírios e alucinações na personalidade esquizoide",
    "Transtorno de Personalidade Esquizotípica — presença adicional de distorções cognitivo-perceptivas e excentricidade marcante",
    "Transtorno de Personalidade Esquiva — evitação social motivada por medo de rejeição/inadequação, com desejo de vínculo presente, ao contrário do desinteresse genuíno na esquizoide",
    "Transtorno Depressivo Persistente e episódios depressivos — anedonia e retraimento social secundários a alteração do humor, não um padrão estável de longa data",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Outros Transtornos de Personalidade (esquizotípica, esquiva, paranoide)",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia individual de longo prazo, com objetivos modestos e realistas quanto ao aumento de engajamento interpessoal — baixa procura espontânea de tratamento é a regra",
    "Farmacoterapia não possui indicação como tratamento central; reservada ao manejo de comorbidades associadas (ex.: sintomas depressivos)",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS)",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],
};
