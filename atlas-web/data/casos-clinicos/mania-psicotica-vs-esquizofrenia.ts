import { CasoClinico } from "./types";

export const maniaPsicoticaVsEsquizofrenia: CasoClinico = {
  id: "mania-psicotica-vs-esquizofrenia",

  titulo: "Não paro de ter ideias geniais",

  categoria: "Transtornos do Humor",

  apresentacaoInicial:
    "Paciente do sexo masculino, 24 anos, trazido pelos pais após 5 dias de sono reduzido (2 a 3 horas por noite, sem sensação de cansaço), gastos financeiros excessivos (comprou um carro à vista, sem planejamento prévio) e discurso muito acelerado. Sem episódios psiquiátricos prévios conhecidos. Ao exame, fala rápida e em volume elevado, saltando de assunto em assunto: 'Doutor, eu vou revolucionar a psiquiatria, aliás psiquiatria rima com pediatria, eu adoro crianças, crianças são o futuro, futuro é agora, você sabia que eu já resolvi a fórmula da fusão nuclear?'.",

  etapas: [
    {
      id: "etapa-1",
      pergunta: "Como classificar o padrão do discurso apresentado?",
      opcoes: [
        {
          texto: "Fuga de ideias",
          correta: true,
          explicacao:
            "Correto. As ideias se sucedem rapidamente, mas mantêm conexões identificáveis entre si — aqui por assonância ('psiquiatria... pediatria') e associações por contiguidade — ainda que superficiais. Um ouvinte atento consegue reconstruir o nexo entre uma ideia e a seguinte.",
        },
        {
          texto: "Afrouxamento de associações",
          correta: false,
          explicacao:
            "No afrouxamento de associações não haveria nexo identificável entre as ideias, mesmo em retrospecto. Aqui existe uma lógica de conexão rastreável (assonância/trocadilho), típica de fuga de ideias, não de afrouxamento.",
        },
        {
          texto: "Circunstancialidade",
          correta: false,
          explicacao:
            "Na circunstancialidade o discurso é prolixo, mas eventualmente retorna e responde à pergunta original. Aqui o tópico muda completamente, sem retorno ao ponto de partida — perfil de fuga de ideias, não de circunstancialidade.",
        },
        {
          texto: "Salada de palavras",
          correta: false,
          explicacao:
            "Na salada de palavras a própria estrutura gramatical das frases se perde, tornando o discurso ininteligível mesmo em nível de frase isolada. Aqui cada frase é gramaticalmente correta e compreensível isoladamente — incompatível com salada de palavras.",
        },
      ],
    },
    {
      id: "etapa-2",
      narrativaAdicional:
        "O paciente também afirma, com total convicção, que já resolveu a fórmula da fusão nuclear e que em breve será convocado pela ONU para apresentar sua descoberta ao mundo.",
      pergunta: "Como classificar essa crença?",
      opcoes: [
        {
          texto: "Delírio de grandeza, congruente com o humor",
          correta: true,
          explicacao:
            "Correto. Crença fixa e incorrigível de possuir capacidades extraordinárias, claramente alinhada (congruente) com o humor eufórico/expansivo predominante — padrão clássico de delírio de grandeza em episódio maníaco.",
        },
        {
          texto: "Ideia sobrevalorizada",
          correta: false,
          explicacao:
            "A convicção aqui é absoluta e o conteúdo é objetivamente incompatível com a realidade (resolver a fusão nuclear em poucos dias) — isso caracteriza delírio, não uma ideia sobrevalorizada, que seria sustentada com convicção menos absoluta.",
        },
        {
          texto: "Delírio persecutório",
          correta: false,
          explicacao:
            "O tema da crença é de grandiosidade/capacidade excepcional, não de perseguição ou ameaça — tema incompatível com delírio persecutório.",
        },
        {
          texto: "Confabulação",
          correta: false,
          explicacao:
            "Confabulação é o preenchimento de uma lacuna de memória com conteúdo falso, tipicamente em síndromes amnésticas. Aqui não há déficit de memória envolvido — trata-se de uma crença grandiosa, não de um preenchimento mnésico.",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta:
        "Diante de humor eufórico/expansivo, redução da necessidade de sono, fuga de ideias e delírio de grandeza congruente com o humor, com duração de 5 dias, qual a hipótese diagnóstica mais provável?",
      opcoes: [
        {
          texto:
            "Episódio Maníaco com sintomas psicóticos (Transtorno Bipolar tipo I)",
          correta: true,
          explicacao:
            "Correto. Síndrome maníaca completa (humor expansivo, redução da necessidade de sono, fuga de ideias, grandiosidade) com sintomas psicóticos congruentes com o humor, sem outros achados que sugiram diagnóstico alternativo.",
        },
        {
          texto: "Esquizofrenia",
          correta: false,
          explicacao:
            "O quadro é dominado por uma síndrome afetiva proeminente e de instalação aguda (5 dias), com delírio claramente congruente com o humor — perfil muito mais típico de mania psicótica do que de esquizofrenia, que tipicamente tem instalação mais insidiosa e sintomas psicóticos não necessariamente ligados ao humor.",
        },
        {
          texto: "Transtorno Esquizoafetivo",
          correta: false,
          explicacao:
            "O Transtorno Esquizoafetivo exige um período significativo de sintomas psicóticos NA AUSÊNCIA de sintomas de humor proeminentes — isso não está demonstrado neste caso, onde os sintomas psicóticos surgem junto com (e são congruentes a) o episódio de humor.",
        },
        {
          texto: "Intoxicação por estimulantes",
          correta: false,
          explicacao:
            "Não há dado no caso sugerindo uso de substâncias. Embora seja sempre um diagnóstico diferencial obrigatório diante de sintomas maníacos, o quadro apresentado é plenamente explicado por um episódio maníaco primário.",
        },
      ],
    },
    {
      id: "etapa-4",
      pergunta: "Qual conduta farmacológica de primeira linha é mais apropriada?",
      opcoes: [
        {
          texto:
            "Estabilizador de humor ou antipsicótico atípico (ex.: lítio, valproato, olanzapina, risperidona) para controle agudo da mania",
          correta: true,
          explicacao:
            "Correto. Estabilizadores de humor e antipsicóticos atípicos são primeira linha para mania aguda, inclusive com sintomas psicóticos — a escolha específica considera perfil de efeitos adversos e características do paciente.",
        },
        {
          texto: "Antidepressivo isolado",
          correta: false,
          explicacao:
            "Antidepressivo em monoterapia está contraindicado em mania aguda pelo risco de piora do quadro maníaco/virada — não é conduta apropriada aqui.",
        },
        {
          texto: "Benzodiazepínico isolado como tratamento definitivo",
          correta: false,
          explicacao:
            "Benzodiazepínicos têm papel adjuvante útil para agitação/insônia na fase aguda, mas não constituem tratamento definitivo da mania — não substituem estabilizador de humor ou antipsicótico.",
        },
        {
          texto: "Psicoterapia isolada, sem medicação",
          correta: false,
          explicacao:
            "Mania aguda com sintomas psicóticos e comportamento de risco (gasto financeiro excessivo) exige tratamento farmacológico ativo — psicoterapia isolada é insuficiente e inadequada nesta fase aguda.",
        },
      ],
    },
  ],

  diagnosticoFinal:
    "Transtorno Bipolar tipo I, episódio atual maníaco, com sintomas psicóticos congruentes com o humor.",

  diagnosticoId: "bipolar-tipo-1",

  medicamentosRelacionados: ["litio", "valproato", "olanzapina", "risperidona"],

  achadosPsicopatologicos: [
    { dominioId: "pensamento-curso-forma", achadoId: "fuga-de-ideias" },
    { dominioId: "pensamento-conteudo", achadoId: "delirio-grandeza" },
  ],

  pontosDeEnsino: [
    "Fuga de ideias e afrouxamento de associações são frequentemente confundidos — a presença ou ausência de nexo associativo reconstruível é o critério central de diferenciação.",
    "Delírios congruentes com o humor (grandiosidade na mania, niilismo/culpa na depressão) favorecem transtorno do humor com sintomas psicóticos sobre esquizofrenia.",
    "O critério de exigir sintomas psicóticos na AUSÊNCIA de sintomas de humor por período significativo é o que distingue Transtorno Esquizoafetivo de um episódio de humor com sintomas psicóticos congruentes.",
    "Intoxicação por substâncias deve ser sempre excluída ativamente diante de um primeiro episódio maníaco, mesmo quando a apresentação é típica.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR.",
    "CANMAT 2018/2021 — Diretrizes para Transtorno Bipolar.",
  ],
};
