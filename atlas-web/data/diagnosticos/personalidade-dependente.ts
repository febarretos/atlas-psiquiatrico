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

  entrevistaEstruturada: {
    criteriosRastreioIds: ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"],
    criterios: [
      { id: "d1", pergunta: "Você tem dificuldade para tomar decisões do dia a dia sem muito conselho e apoio de outras pessoas?" },
      { id: "d2", pergunta: "Você precisa que outras pessoas assumam a responsabilidade pelas áreas mais importantes da sua vida?" },
      { id: "d3", pergunta: "Você tem dificuldade para discordar dos outros por medo de perder apoio ou aprovação?" },
      { id: "d4", pergunta: "Você tem dificuldade para começar projetos ou fazer coisas sozinho(a), por falta de autoconfiança?" },
      { id: "d5", pergunta: "Você já foi longe demais para conseguir carinho ou apoio de alguém, a ponto de se oferecer para fazer coisas desagradáveis?" },
      { id: "d6", pergunta: "Você se sente desconfortável ou desamparado(a) quando está sozinho(a), por medo de não conseguir cuidar de si mesmo(a)?" },
      { id: "d7", pergunta: "Quando um relacionamento próximo termina, você busca urgentemente outro para te cuidar e apoiar?" },
      { id: "d8", pergunta: "Você tem um medo exagerado e pouco realista de ser abandonado(a) e ter que cuidar de si mesmo(a)?" },
    ],
    algoritmo: {
      contagemMinima: 5,
      itensContaveis: ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"],
      duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta, presente em vários contextos",
      observacaoExclusao:
        "Diferenciar de comportamento dependente adaptativo em contextos culturais que valorizam interdependência familiar/coletiva. Diferenciar de Personalidade Borderline (busca de cuidado acompanhada de instabilidade afetiva marcante, raiva intensa e autolesão, ausentes aqui), de Personalidade Esquiva (inibição para INICIAR relacionamentos, diferente da busca ativa de cuidado em relacionamentos já estabelecidos — podem coexistir), de Personalidade Histriônica (busca de atenção com teatralidade, mais do que necessidade de ser cuidado/dirigido), de dependência funcional secundária a condição médica/incapacidade física real (deve haver componente psicológico que extrapole a necessidade objetiva de cuidado), e de Agorafobia (evitação centrada em situações específicas de onde a fuga seria difícil, não em padrão amplo de submissão e busca de cuidado interpessoal).",
    },
  },
};
