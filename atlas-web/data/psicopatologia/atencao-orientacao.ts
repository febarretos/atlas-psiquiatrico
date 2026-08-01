import { DominioPsicopatologico } from "./types";

export const atencaoOrientacao: DominioPsicopatologico = {
  id: "atencao-orientacao",

  nome: "Transtornos da Atenção e da Orientação",

  descricao:
    "A atenção (capacidade de focalizar e sustentar a percepção sobre um estímulo) e a orientação (localização do indivíduo no tempo, espaço e em relação a si mesmo) são funções dependentes do nível de consciência e frequentemente as primeiras a se alterar em quadros orgânicos agudos, precedendo alterações mais evidentes de outras funções psíquicas.",

  achados: [
    {
      id: "hipoprosexia",
      nome: "Hipoprosexia",
      definicao:
        "Redução da capacidade de fixar e sustentar a atenção sobre um estímulo ou tarefa, com facilidade de distração e dificuldade de concentração sustentada.",
      caracteristicas: [
        "Dificuldade em manter foco em tarefas ou conversas prolongadas",
        "Desempenho reduzido em testes de atenção sustentada (ex: dígitos em ordem inversa, subtrações seriadas)",
        "Pode ser secundária a ansiedade, depressão, rebaixamento do nível de consciência ou fadiga",
      ],
      exemploClinico:
        "Paciente deprimido que relata não conseguir terminar de ler uma reportagem curta sem 'perder o fio', precisando reler o mesmo parágrafo várias vezes.",
      diferencialFino: [
        {
          comparadoCom: "Aprosexia",
          distincao:
            "A hipoprosexia é uma redução quantitativa, mas a capacidade atencional ainda existe em algum grau; na aprosexia há abolição virtualmente completa da capacidade de atenção, tipicamente em quadros de rebaixamento acentuado da consciência.",
        },
      ],
      transtornosAssociados: [
        "Transtorno Depressivo Maior",
        "Transtornos de Ansiedade",
        "TDAH",
        "Delirium (fase inicial)",
      ],
    },
    {
      id: "hiperprosexia",
      nome: "Hiperprosexia (distratibilidade)",
      definicao:
        "Aumento patológico da mobilidade da atenção, com dificuldade em sustentar o foco por ser constantemente capturado por estímulos novos e irrelevantes do ambiente — a atenção é intensa, porém extremamente instável.",
      caracteristicas: [
        "Atenção facilmente capturada por qualquer estímulo do ambiente (visual, sonoro)",
        "Discurso frequentemente interrompido por comentários sobre estímulos incidentais",
        "Associa-se tipicamente à aceleração do curso do pensamento",
      ],
      exemploClinico:
        "Paciente em mania que, no meio de uma frase, interrompe-se para comentar sobre o barulho do ar-condicionado, depois sobre a cor da blusa do entrevistador, sem retomar o tópico original.",
      diferencialFino: [
        {
          comparadoCom: "Fuga de ideias",
          distincao:
            "A hiperprosexia é a alteração do foco atencional em si (o que captura a atenção do paciente); a fuga de ideias é a alteração do curso do pensamento resultante — associações rápidas entre ideias, por vezes por conexões superficiais (assonância, trocadilhos) — os dois tipicamente coexistem na mania, mas descrevem fenômenos distintos.",
        },
      ],
      transtornosAssociados: [
        "Episódio Maníaco",
        "TDAH (predominância hiperativa/impulsiva)",
      ],
    },
    {
      id: "aprosexia",
      nome: "Aprosexia",
      definicao:
        "Abolição praticamente completa da capacidade de atenção, de modo que o indivíduo não consegue direcionar nem sustentar o foco sobre qualquer estímulo, mesmo que simples.",
      caracteristicas: [
        "Incapacidade de responder adequadamente mesmo a perguntas simples e diretas",
        "Tipicamente acompanha rebaixamento acentuado do nível de consciência",
        "Compromete a avaliação de todas as demais funções cognitivas (memória, orientação) de forma secundária",
      ],
      exemploClinico:
        "Paciente em delirium hipoativo grave que não consegue sustentar o olhar nem responder ao próprio nome de forma consistente.",
      transtornosAssociados: [
        "Delirium (formas graves)",
        "Rebaixamento acentuado do nível de consciência de qualquer etiologia",
      ],
    },
    {
      id: "desorientacao-autopsiquica",
      nome: "Desorientação autopsíquica",
      definicao:
        "Perda da capacidade de reconhecer a própria identidade — nome, idade, história pessoal básica —, achado raro e tardio, geralmente indicando comprometimento mais grave e extenso que a desorientação alopsíquica isolada.",
      caracteristicas: [
        "Paciente não sabe informar o próprio nome ou idade corretamente",
        "Costuma vir acompanhada de comprometimento importante de outras funções cognitivas",
        "Achado incomum — deve levantar suspeita de quadro orgânico grave ou, alternativamente, de simulação/quadro dissociativo quando isolada e sem outros achados compatíveis",
      ],
      exemploClinico:
        "Paciente com demência em fase avançada que, questionado sobre seu próprio nome, hesita e responde de forma incorreta ou incongruente.",
      diferencialFino: [
        {
          comparadoCom: "Desorientação alopsíquica",
          distincao:
            "A desorientação alopsíquica (tempo/espaço) é comum e ocorre precocemente em quadros confusionais leves a moderados; a desorientação autopsíquica é rara e tardia — sua presença isolada (sem desorientação alopsíquica ou outros déficits cognitivos) deve levantar suspeita de causa não orgânica (dissociativa) ou simulação.",
        },
      ],
      transtornosAssociados: [
        "Transtorno Neurocognitivo Maior (fases avançadas)",
        "Delirium grave",
        "Quadros dissociativos (quando isolada)",
      ],
    },
    {
      id: "desorientacao-alopsiquica",
      nome: "Desorientação alopsíquica",
      definicao:
        "Perda da capacidade de situar-se corretamente em relação ao tempo (data, período do dia, estação) e/ou ao espaço (local onde se encontra, cidade), preservando o reconhecimento da própria identidade.",
      caracteristicas: [
        "A orientação temporal tipicamente se perde antes da espacial, que por sua vez se perde antes da autopsíquica (padrão clássico de progressão)",
        "Frequentemente o primeiro sinal cognitivo perceptível em quadros confusionais agudos",
        "Deve ser testada de forma específica e separada (tempo e espaço), não presumida",
      ],
      exemploClinico:
        "Paciente internado há três dias que afirma estar em casa e informa a data como sendo de vários meses atrás, embora reconheça corretamente a própria identidade e a dos familiares.",
      transtornosAssociados: [
        "Delirium",
        "Transtorno Neurocognitivo Maior",
        "Intoxicação por substâncias",
        "Síndrome de Korsakoff (desorientação temporal desproporcional, com confabulação)",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
  ],
};
