import { Diagnostico } from "./types";

export const personalidadeEsquiva: Diagnostico = {
  id: "personalidade-esquiva",

  nome: "Transtorno de Personalidade Esquiva (Evitativa)",

  categoria: "Transtornos de Personalidade",

  cid10: "F60.6",

  descricao:
    "Padrão persistente de inibição social, sentimentos de inadequação e hipersensibilidade a avaliação negativa, com início no início da vida adulta e presente em diversos contextos.",

  criteriosDiagnosticos: [
    "Padrão persistente de inibição social, sentimentos de inadequação e hipersensibilidade a avaliação negativa, começando no início da idade adulta e presente em vários contextos, indicado por 4 (ou mais) dos seguintes critérios:",
    "1. Evita atividades ocupacionais que envolvam contato interpessoal significativo por medo de crítica, desaprovação ou rejeição.",
    "2. Reluta em envolver-se com pessoas, a menos que tenha certeza de que será apreciado(a).",
    "3. Mostra-se reservado(a) em relacionamentos íntimos pelo medo de ser envergonhado(a) ou ridicularizado(a).",
    "4. Preocupa-se com a possibilidade de ser criticado(a) ou rejeitado(a) em situações sociais.",
    "5. Inibe-se diante de novas situações interpessoais em razão de sentimentos de inadequação.",
    "6. Vê a si mesmo(a) como socialmente incapaz, sem atrativos pessoais ou inferior aos outros.",
    "7. Reluta muito em assumir riscos pessoais ou envolver-se em quaisquer novas atividades, pois estas podem ser constrangedoras.",
  ],

  especificadores: [
    "Não há especificadores formais no DSM-5-TR; avaliar cuidadosamente a sobreposição fenomenológica com Fobia Social generalizada, com a qual compartilha alta comorbidade e possível continuidade dimensional.",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta (timidez e retraimento social costumam já ser observáveis na infância/adolescência)",

  prevalencia:
    "Prevalência estimada entre 1,5% e 2,5% na população geral, sem diferença consistente entre sexos.",

  cursoEPrognostico:
    "Curso geralmente crônico, mas com tendência a melhora funcional com o tratamento, diferentemente de outros transtornos de personalidade — o desejo genuíno de vínculo (ao contrário do desinteresse esquizoide) favorece a formação de aliança terapêutica.",

  diagnosticoDiferencial: [
    "Fobia Social (Transtorno de Ansiedade Social) generalizada — sobreposição fenomenológica extensa; a personalidade esquiva tende a envolver um padrão mais amplo e duradouro de autoimagem de inadequação, não restrito a situações de desempenho/avaliação social específicas",
    "Transtorno de Personalidade Esquizoide — na esquizoide há desinteresse genuíno por relacionamentos, enquanto na esquiva há desejo de vínculo inibido pelo medo de rejeição",
    "Transtorno de Personalidade Dependente — busca ativa de cuidado e submissão nos relacionamentos já estabelecidos, diferente da inibição para iniciar relacionamentos característica da esquiva (podem coexistir)",
    "Agorafobia — evitação centrada em situações específicas (locais/situações de onde a fuga seria difícil), não em um padrão amplo de inadequação interpessoal",
  ],

  comorbidadesComuns: [
    "Fobia Social (comorbidade muito frequente, com discussão na literatura sobre sobreposição dimensional)",
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno de Personalidade Dependente",
  ],

  tratamentoPrimeiraLinha: [
    "Terapia Cognitivo-Comportamental, com técnicas de exposição gradual a situações sociais evitadas e reestruturação cognitiva de crenças nucleares de inadequação",
    "Treinamento de habilidades sociais como adjuvante",
    "Farmacoterapia não possui indicação como tratamento central do transtorno de personalidade em si, mas ISRS/ISRSN podem ser considerados quando há Fobia Social comórbida significativa",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-10 (OMS)",
    "APA Practice Guideline for the Treatment of Patients with Personality Disorders",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["ev1", "ev2", "ev3", "ev4", "ev5", "ev6", "ev7"],
    criterios: [
      { id: "ev1", pergunta: "Você evita atividades no trabalho que envolvam contato interpessoal significativo por medo de crítica ou rejeição?" },
      { id: "ev2", pergunta: "Você reluta em se envolver com pessoas a menos que tenha certeza de que vai ser aceito(a)?" },
      { id: "ev3", pergunta: "Você se mostra reservado(a) em relacionamentos íntimos por medo de passar vergonha ou ser ridicularizado(a)?" },
      { id: "ev4", pergunta: "Você se preocupa muito com a possibilidade de ser criticado(a) ou rejeitado(a) em situações sociais?" },
      { id: "ev5", pergunta: "Você se inibe em situações sociais novas por se sentir inadequado(a)?" },
      { id: "ev6", pergunta: "Você se vê como socialmente incapaz, sem atrativos, ou inferior aos outros?" },
      { id: "ev7", pergunta: "Você reluta muito em assumir riscos ou tentar coisas novas por medo de passar constrangimento?" },
    ],
    algoritmo: {
      contagemMinima: 4,
      itensContaveis: ["ev1", "ev2", "ev3", "ev4", "ev5", "ev6", "ev7"],
      duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta (timidez/retraimento social costumam já ser observáveis na infância/adolescência), presente em vários contextos",
      observacaoExclusao:
        "Avaliar cuidadosamente a sobreposição fenomenológica com Fobia Social generalizada (comorbidade muito frequente) — a personalidade esquiva envolve padrão mais amplo e duradouro de autoimagem de inadequação, não restrito a situações de desempenho/avaliação social específicas. Diferenciar de Personalidade Esquizoide (desinteresse genuíno por relacionamentos, sem o desejo de vínculo inibido pelo medo de rejeição presente aqui), de Personalidade Dependente (podem coexistir — a dependente busca ativamente cuidado em relacionamentos já estabelecidos), e de Agorafobia (evitação centrada em situações específicas, não em padrão amplo de inadequação interpessoal).",
    },
  },
};
