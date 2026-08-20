import { Diagnostico } from "./types";

export const personalidadeEsquizotipica: Diagnostico = {
  id: "personalidade-esquizotipica",

  nome: "Transtorno de Personalidade Esquizotípica",

  categoria: "Transtornos de Personalidade",

  cid10: "F21",

  descricao:
    "Padrão persistente de déficits sociais e interpessoais marcados por desconforto agudo e capacidade reduzida para relações íntimas, além de distorções cognitivas ou perceptivas e comportamento excêntrico, com início no início da vida adulta. No CID-10/11 é classificado dentro do espectro da esquizofrenia (F21), refletindo evidência de sobreposição genética/familiar com transtornos psicóticos — diferença importante em relação ao DSM-5-TR, que o mantém entre os transtornos de personalidade.",

  criteriosDiagnosticos: [
    "Padrão persistente de déficits sociais e interpessoais marcados por desconforto agudo e capacidade reduzida para relacionamentos íntimos, além de distorções cognitivas ou perceptivas e excentricidades de comportamento, começando no início da idade adulta e presente em vários contextos, indicado por 5 (ou mais) dos seguintes critérios:",
    "1. Ideias de referência (excluindo delírios de referência).",
    "2. Crenças estranhas ou pensamento mágico que influenciam o comportamento e são inconsistentes com normas subculturais (ex.: superstição, crença em clarividência, telepatia ou 'sexto sentido').",
    "3. Experiências perceptivas incomuns, incluindo ilusões corporais.",
    "4. Pensamento e discurso estranhos (ex.: vago, circunstancial, metafórico, superelaborado ou estereotipado).",
    "5. Desconfiança ou ideação paranoide.",
    "6. Afeto inadequado ou constrito.",
    "7. Comportamento ou aparência estranha, excêntrica ou peculiar.",
    "8. Ausência de amigos próximos ou confidentes, além de parentes de primeiro grau.",
    "9. Ansiedade social excessiva que não diminui com a familiaridade e tende a associar-se a temores paranoides mais do que a julgamentos negativos sobre si mesmo.",
  ],

  especificadores: [
    "Não há especificadores formais no DSM-5-TR; monitorar ativamente pelo risco elevado de conversão para transtornos do espectro psicótico ao longo do tempo, especialmente na presença de história familiar de esquizofrenia.",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta (traços frequentemente observáveis já na infância)",

  prevalencia:
    "Prevalência estimada entre 3,9% e 4,6% na população geral; discretamente mais comum em homens. Prevalência aumentada entre parentes biológicos de primeiro grau de pacientes com esquizofrenia.",

  cursoEPrognostico:
    "Curso relativamente estável, mas com risco elevado (embora minoritário) de desenvolvimento de transtorno psicótico franco ao longo da vida. Risco aumentado de depressão maior comórbida e de suicídio.",

  diagnosticoDiferencial: [
    "Esquizofrenia, Transtorno Esquizofreniforme e Transtorno Delirante — presença de sintomas psicóticos persistentes (delírios francos, alucinações, discurso ou comportamento grosseiramente desorganizado), ausentes ou apenas transitórios na personalidade esquizotípica",
    "Transtorno do Espectro Autista — déficits na comunicação social desde a infância e padrões restritos/repetitivos de comportamento, sem as distorções cognitivo-perceptivas típicas da esquizotípica",
    "Transtorno de Personalidade Esquizoide — ausência de distorções cognitivo-perceptivas e de excentricidade marcante",
    "Transtorno de Personalidade Paranoide — desconfiança predominante, sem as distorções perceptivas e excentricidades da esquizotípica",
    "Transtorno de Personalidade Borderline — pode apresentar ideação paranoide transitória e sintomas dissociativos relacionados a estresse, diferente do padrão mais estável da esquizotípica",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Transtornos de Ansiedade",
    "Outros Transtornos de Personalidade (esquizoide, paranoide, borderline, esquiva)",
    "Risco aumentado de transtornos do espectro psicótico ao longo da vida",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia individual, com foco na construção de aliança terapêutica e no desenvolvimento de habilidades sociais",
    "Antipsicóticos em dose baixa podem ser considerados como adjuvantes para sintomas quase-psicóticos (distorções cognitivo-perceptivas, ideação de referência) refratários a intervenções psicossociais, embora a evidência seja limitada",
    "Monitorização clínica ativa e continuada para sinais precoces de conversão para transtorno psicótico franco",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS) — classificado como F21, no espectro da esquizofrenia",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["et1", "et2", "et3", "et4", "et5", "et6", "et7", "et8", "et9"],
    criterios: [
      { id: "et1", pergunta: "Você tem a sensação de que eventos neutros têm um significado especial dirigido a você (ideias de referência, sem chegar a ser um delírio)?" },
      { id: "et2", pergunta: "Você tem crenças estranhas ou pensamento mágico que influenciam seu comportamento e não são comuns no seu meio cultural (ex.: telepatia, sexto sentido, superstições fora do comum)?" },
      { id: "et3", pergunta: "Você já teve experiências perceptivas incomuns, incluindo sensações estranhas no próprio corpo?" },
      { id: "et4", pergunta: "Seu jeito de pensar ou falar é visto como estranho, vago, elaborado demais ou difícil de seguir?" },
      { id: "et5", pergunta: "Você é desconfiado(a) ou tem ideias paranoides?" },
      { id: "et6", pergunta: "Seu afeto é considerado inadequado ao contexto ou muito contido?" },
      { id: "et7", pergunta: "Seu comportamento ou aparência é visto como estranho, excêntrico ou peculiar?" },
      { id: "et8", pergunta: "Você não tem amigos próximos ou confidentes, além de parentes de primeiro grau?" },
      { id: "et9", pergunta: "Você sente ansiedade social excessiva que não diminui com a familiaridade e vem mais de medos paranoides do que de se sentir mal avaliado(a)?" },
    ],
    algoritmo: {
      contagemMinima: 5,
      itensContaveis: ["et1", "et2", "et3", "et4", "et5", "et6", "et7", "et8", "et9"],
      duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta (traços frequentemente observáveis já na infância), presente em vários contextos",
      observacaoExclusao:
        "Excluir Esquizofrenia, Transtorno Esquizofreniforme e Transtorno Delirante (sintomas psicóticos persistentes — delírios francos, alucinações, discurso/comportamento grosseiramente desorganizado — ausentes ou só transitórios aqui). Diferenciar de Transtorno do Espectro Autista (sem as distorções cognitivo-perceptivas típicas), de Personalidade Esquizoide (sem excentricidade/distorções perceptivas), de Personalidade Paranoide (desconfiança predominante, sem as distorções perceptivas/excentricidade) e de Personalidade Borderline (ideação paranoide/sintomas dissociativos aqui são transitórios e reativos a estresse, diferente do padrão mais estável da esquizotípica). ATENÇÃO — risco de segurança: monitorar ativamente tanto o risco elevado de conversão para transtorno psicótico franco (especialmente com história familiar de esquizofrenia) quanto o risco aumentado de comportamento suicida associado a este transtorno — rastrear ideação suicida ativamente, não apenas sintomas psicóticos.",
    },
  },
};
