import { Diagnostico } from "./types";

export const personalidadeParanoide: Diagnostico = {
  id: "personalidade-paranoide",

  nome: "Transtorno de Personalidade Paranoide",

  categoria: "Transtornos de Personalidade",

  cid10: "F60.0",

  descricao:
    "Padrão persistente de desconfiança e suspeita generalizadas em relação aos outros, cujas motivações são interpretadas como malévolas, com início no início da vida adulta e presente em diversos contextos.",

  criteriosDiagnosticos: [
    "Desconfiança e suspeita generalizadas em relação aos outros, de modo que as motivações deles são interpretadas como malévolas, começando no início da idade adulta e presente em vários contextos, indicada por 4 (ou mais) dos seguintes critérios:",
    "1. Suspeita, sem base suficiente, de que os outros o(a) estão explorando, causando dano ou enganando.",
    "2. Preocupação com dúvidas injustificadas acerca da lealdade ou confiabilidade de amigos ou colegas.",
    "3. Relutância em confiar nos outros em razão de um receio injustificado de que a informação seja maliciosamente usada contra si.",
    "4. Leitura de significados ocultos, degradantes ou ameaçadores em observações ou eventos benignos.",
    "5. Rancor persistente (não perdoa insultos, injúrias ou desprezos).",
    "6. Percepção de ataques a seu caráter ou reputação não visíveis a outros, com reação rápida de raiva ou contra-ataque.",
    "7. Suspeitas recorrentes e injustificadas quanto à fidelidade do cônjuge ou parceiro sexual.",
  ],

  especificadores: [
    "Não há especificadores formais no DSM-5-TR; diferenciar de ideação paranoide transitória associada a estresse (mais comum em Transtorno de Personalidade Borderline) e de sintomas psicóticos francos.",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta",

  prevalencia:
    "Prevalência estimada entre 2,3% e 4,4% na população geral, mais frequente em homens.",

  cursoEPrognostico:
    "Curso geralmente crônico e persistente ao longo da vida, com tendência a atenuação de alguns traços na meia-idade. Prognóstico limitado pela baixa adesão ao tratamento, já que a desconfiança dificulta a formação de aliança terapêutica.",

  diagnosticoDiferencial: [
    "Esquizofrenia e Transtorno Delirante — presença de delírios francos e/ou alucinações, ausentes no transtorno de personalidade",
    "Transtorno de Personalidade Esquizotípica — ideação paranoide acompanhada de excentricidade, distorções cognitivo-perceptivas e ansiedade social intensa",
    "Transtorno de Personalidade Esquiva — evitação social por medo de rejeição/inadequação, não por desconfiança das intenções alheias",
    "Transtorno de Personalidade Borderline — suspeita geralmente transitória e reativa a estresse, não um padrão estável e generalizado",
    "Mudança de personalidade devido a outra condição médica",
    "Ideação paranoide induzida por substâncias (estimulantes, canabinoides)",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Agorafobia",
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno por Uso de Substâncias",
    "Outros Transtornos de Personalidade (esquizotípica, esquiva, borderline, narcisista, antissocial)",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia individual, com ênfase inicial na construção lenta e cuidadosa de aliança terapêutica — abordagem cognitivo-comportamental adaptada é a mais estudada",
    "Farmacoterapia não é tratamento central; reservada ao manejo sintomático de ansiedade ou de sintomas quase-psicóticos transitórios em doses baixas",
    "Psicoeducação e manejo de comorbidades associadas",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS)",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],
};
