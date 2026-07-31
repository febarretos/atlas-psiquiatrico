import { Escala } from "./types";

export const madrs: Escala = {
  id: "madrs",

  nome: "Montgomery-Åsberg Depression Rating Scale",

  sigla: "MADRS",

  categoria: "Depressão",

  descricao:
    "Escala heteroaplicada (aplicada pelo entrevistador) para quantificar a gravidade de sintomas depressivos, desenvolvida com foco em sensibilidade à mudança clínica, sendo amplamente utilizada em ensaios clínicos e no acompanhamento de resposta ao tratamento antidepressivo.",

  instrucoes:
    "Avalie cada item com base na entrevista clínica, considerando o estado do paciente na última semana. Cada item é pontuado de 0 a 6; nesta versão são apresentadas as âncoras pares (0, 2, 4 e 6) como simplificação da escala original, que também permite pontuações intermediárias ímpares (1, 3, 5).",

  itens: [
    {
      id: "madrs-1",
      texto:
        "Tristeza aparente (avaliada pela expressão facial, postura, voz e tendência ao choro durante a entrevista)",
      opcoes: [
        { label: "Sem tristeza aparente", valor: 0 },
        { label: "Parece desanimado(a), mas anima-se sem dificuldade", valor: 2 },
        { label: "Parece triste e infeliz na maior parte do tempo", valor: 4 },
        {
          label:
            "Parece extremamente abatido(a); tristeza persistente e profunda, face quase fixa, sem reação",
          valor: 6,
        },
      ],
    },
    {
      id: "madrs-2",
      texto:
        "Tristeza relatada (relato subjetivo de humor deprimido, independentemente da aparência)",
      opcoes: [
        { label: "Tristeza apenas ocasional, relacionada às circunstâncias", valor: 0 },
        { label: "Triste ou desanimado(a), mas anima-se sem dificuldade", valor: 2 },
        {
          label:
            "Sentimento pervasivo de tristeza ou desânimo, ainda influenciado por circunstâncias externas",
          valor: 4,
        },
        { label: "Tristeza, desespero ou desânimo contínuos e invariáveis", valor: 6 },
      ],
    },
    {
      id: "madrs-3",
      texto:
        "Tensão interna (sentimentos mal definidos de desconforto, irritabilidade e agitação interna)",
      opcoes: [
        { label: "Calmo(a); apenas tensão interna passageira", valor: 0 },
        {
          label: "Sentimentos ocasionais de irritabilidade ou desconforto mal definido",
          valor: 2,
        },
        {
          label:
            "Sentimentos contínuos de tensão interna, ou pânico intermitente controlado com dificuldade",
          valor: 4,
        },
        { label: "Pavor ou angústia incessante; pânico avassalador", valor: 6 },
      ],
    },
    {
      id: "madrs-4",
      texto: "Sono reduzido (comparado ao padrão habitual do paciente quando bem)",
      opcoes: [
        { label: "Dorme como de costume", valor: 0 },
        { label: "Leve dificuldade para adormecer, ou sono levemente reduzido", valor: 2 },
        { label: "Sono reduzido ou interrompido por pelo menos duas horas", valor: 4 },
        { label: "Menos de duas ou três horas de sono", valor: 6 },
      ],
    },
    {
      id: "madrs-5",
      texto: "Apetite reduzido (comparado ao padrão habitual do paciente quando bem)",
      opcoes: [
        { label: "Apetite normal ou aumentado", valor: 0 },
        { label: "Apetite levemente reduzido", valor: 2 },
        { label: "Sem apetite; comida sem sabor", valor: 4 },
        { label: "Necessita persuasão para se alimentar", valor: 6 },
      ],
    },
    {
      id: "madrs-6",
      texto:
        "Dificuldade de concentração (dificuldade em reunir pensamentos, culminando em concentração prejudicada)",
      opcoes: [
        { label: "Sem dificuldades de concentração", valor: 0 },
        { label: "Dificuldades ocasionais em reunir os pensamentos", valor: 2 },
        {
          label:
            "Dificuldade em concentrar-se e manter o pensamento, reduzindo a capacidade de ler ou conversar",
          valor: 4,
        },
        { label: "Incapaz de ler ou conversar sem grande dificuldade", valor: 6 },
      ],
    },
    {
      id: "madrs-7",
      texto:
        "Lassidão (dificuldade em começar ou lentidão para iniciar e executar atividades cotidianas)",
      opcoes: [
        { label: "Dificuldade quase nenhuma em iniciar atividades; sem lentidão", valor: 0 },
        { label: "Dificuldades em iniciar atividades", valor: 2 },
        {
          label: "Dificuldade em iniciar atividades rotineiras simples, exigindo esforço extra",
          valor: 4,
        },
        { label: "Lassidão completa; incapaz de fazer qualquer coisa sem ajuda", valor: 6 },
      ],
    },
    {
      id: "madrs-8",
      texto:
        "Incapacidade de sentir (interesse reduzido pelo ambiente ou por atividades habitualmente prazerosas, capacidade emocional reduzida)",
      opcoes: [
        { label: "Interesse normal pelo ambiente e pelas outras pessoas", valor: 0 },
        { label: "Capacidade reduzida de desfrutar dos interesses habituais", valor: 2 },
        {
          label: "Perda de interesse pelo ambiente; perda de sentimentos por amigos e conhecidos",
          valor: 4,
        },
        {
          label:
            "Sentimento de estar emocionalmente paralisado(a), incapaz de sentir raiva, tristeza ou prazer; perda completa e dolorosa de sentimentos por familiares próximos",
          valor: 6,
        },
      ],
    },
    {
      id: "madrs-9",
      texto:
        "Pensamentos pessimistas (ideias de culpa, inferioridade, autodepreciação, ruína)",
      opcoes: [
        { label: "Sem pensamentos pessimistas", valor: 0 },
        {
          label: "Ideias flutuantes de fracasso, autodepreciação ou culpa",
          valor: 2,
        },
        {
          label:
            "Autoacusações persistentes, ou ideias definidas porém ainda racionais de culpa ou pecado; visão pessimista crescente sobre o futuro",
          valor: 4,
        },
        {
          label:
            "Delírios de ruína, remorso ou culpa irremediável; autoacusações absurdas e inabaláveis",
          valor: 6,
        },
      ],
    },
    {
      id: "madrs-10",
      texto:
        "Pensamentos suicidas (sentimento de que a vida não vale a pena ser vivida, ideação suicida e preparativos para suicídio)",
      opcoes: [
        { label: "Aproveita a vida ou a encara conforme ela vem", valor: 0 },
        { label: "Cansado(a) da vida; apenas ideias suicidas passageiras", valor: 2 },
        {
          label:
            "Provavelmente seria melhor estar morto(a); ideias suicidas frequentes, consideradas como possível solução, sem planos ou intenções específicas",
          valor: 4,
        },
        {
          label:
            "Planos explícitos de suicídio quando houver oportunidade; preparativos ativos para suicídio",
          valor: 6,
        },
      ],
    },
  ],

  faixas: [
    {
      min: 0,
      max: 6,
      label: "Sem depressão",
      cor: "green",
      descricao: "Ausência de sintomas depressivos clinicamente significativos.",
    },
    {
      min: 7,
      max: 19,
      label: "Depressão leve",
      cor: "blue",
      descricao: "Sintomas depressivos de intensidade leve.",
    },
    {
      min: 20,
      max: 34,
      label: "Depressão moderada",
      cor: "yellow",
      descricao: "Sintomas depressivos de intensidade moderada; tratamento ativo indicado.",
    },
    {
      min: 35,
      max: 60,
      label: "Depressão grave",
      cor: "red",
      descricao:
        "Sintomas depressivos de intensidade grave; avaliar necessidade de tratamento intensivo e risco de suicídio.",
    },
  ],

  notaInterpretacao:
    "O item 10 (pensamentos suicidas) exige atenção clínica imediata sempre que pontuado acima de zero, independentemente da pontuação total da escala. A MADRS foi desenvolvida para ser particularmente sensível a mudanças ao longo do tratamento, sendo útil para monitorar resposta terapêutica; uma redução ≥50% na pontuação em relação à linha de base é frequentemente usada como critério de resposta ao tratamento. É uma ferramenta de apoio à avaliação clínica e não substitui o julgamento médico nem os critérios diagnósticos formais para episódio depressivo.",

  referencias: [
    "Montgomery SA, Åsberg M. A new depression scale designed to be sensitive to change. Br J Psychiatry. 1979.",
  ],
};
