import { Diagnostico } from "./types";

export const personalidadeDependente: Diagnostico = {
  id: "personalidade-dependente",

  nome: "Transtorno de Personalidade Dependente",

  categoria: "Transtornos de Personalidade",

  cid10: "F60.7",

  descricao:
    "Padrão persistente e excessivo de necessidade de ser cuidado(a), que leva a comportamento submisso e dependente, e a temores de separação, com início no início da vida adulta e presente em diversos contextos.",

  criteriosDiagnosticos: [
    "Necessidade excessiva e generalizada de ser cuidado(a), que leva a comportamento submisso e apegado e a temores de separação, começando no início da idade adulta e presente em vários contextos, indicada por 5 (ou mais) dos seguintes critérios:",
    "1. Dificuldade em tomar decisões cotidianas sem grande quantidade de conselho e reasseguramento por parte de outros.",
    "2. Necessidade de que outros assumam responsabilidade pela maioria das áreas importantes de sua vida.",
    "3. Dificuldade em expressar discordância de outros por medo de perda de apoio ou aprovação (não incluir medo realista de retaliação).",
    "4. Dificuldade em iniciar projetos ou fazer coisas por conta própria (por falta de autoconfiança, não de motivação ou energia).",
    "5. Vai a extremos para obter carinho e apoio de outros, a ponto de se voluntariar para fazer coisas desagradáveis.",
    "6. Sente-se desconfortável ou desamparado(a) quando sozinho(a), por medo exagerado de ser incapaz de cuidar de si mesmo(a).",
    "7. Busca urgentemente outro relacionamento como fonte de cuidado e apoio quando um relacionamento íntimo termina.",
    "8. Preocupação irrealista com medos de ser abandonado(a) a cuidar de si mesmo(a).",
  ],

  especificadores: [
    "Não há especificadores formais no DSM-5-TR; diferenciar de comportamento dependente adaptativo em contextos culturais que valorizam interdependência familiar/coletiva.",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta",

  prevalencia:
    "Prevalência estimada em torno de 0,5% na população geral; um dos transtornos de personalidade mais frequentemente diagnosticados em contextos clínicos, historicamente mais comum em mulheres, embora essa diferença possa refletir viés de amostragem/diagnóstico.",

  cursoEPrognostico:
    "Curso geralmente crônico, mas com bom potencial de resposta à psicoterapia, dado o desejo genuíno de vínculo. Risco de manutenção em relacionamentos disfuncionais ou abusivos por medo de abandono/incapacidade de autocuidado.",

  diagnosticoDiferencial: [
    "Transtorno de Personalidade Borderline — busca de cuidado acompanhada de instabilidade afetiva marcante, raiva intensa e comportamento autolesivo, ausentes na dependente pura",
    "Transtorno de Personalidade Esquiva — inibição para iniciar relacionamentos por medo de rejeição, diferente da busca ativa de cuidado nos relacionamentos já estabelecidos, característica da dependente (podem coexistir)",
    "Transtorno de Personalidade Histriônica — busca de atenção com teatralidade e emotividade exagerada, mais do que necessidade de ser cuidado(a) e dirigido(a)",
    "Dependência funcional secundária a outra condição médica ou incapacidade física real (deve haver componente psicológico que extrapole a necessidade objetiva de cuidado)",
    "Agorafobia — evitação centrada em situações específicas de onde a fuga seria difícil, não em um padrão amplo de submissão e busca de cuidado interpessoal",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Transtornos de Ansiedade (TAG, fobia social, agorafobia)",
    "Transtorno de Personalidade Esquiva",
    "Transtorno de Personalidade Borderline e Histriônica",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia individual (cognitivo-comportamental ou psicodinâmica), com foco no desenvolvimento de autonomia, autoconfiança e assertividade",
    "Terapia de grupo pode ser útil para praticar assertividade em ambiente estruturado",
    "Farmacoterapia não possui indicação como tratamento central; reservada ao manejo de comorbidades associadas (ex.: ansiedade, depressão)",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS)",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],
};
