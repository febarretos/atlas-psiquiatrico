import { DominioPsicopatologico } from "./types";

export const conscienciaDoEu: DominioPsicopatologico = {
  id: "consciencia-do-eu",

  nome: "Transtornos da Consciência do Eu (Ich-Störungen)",

  descricao:
    "Alterações da experiência básica de ser um eu unificado, contínuo no tempo, delimitado (com fronteira clara entre o eu e o mundo externo) e agente de seus próprios pensamentos e ações. Descrito classicamente por Jaspers como as características fundamentais da consciência do eu; sua ruptura — os chamados fenômenos de passividade — tem alto valor semiológico para esquizofrenia quando presentes em sua forma plena.",

  normalidade:
    "O sentido normal de identidade pessoal é estável ao longo do tempo (a pessoa se reconhece como a mesma, com uma história contínua), delimitado (há uma fronteira clara entre o que é 'eu' e o que é o mundo externo/os outros) e ativo (a pessoa se sente autora de seus próprios pensamentos, sentimentos e ações). Jaspers descreveu essas características — atividade, unidade, identidade e demarcação do eu frente ao mundo — como os pilares da consciência normal do eu. Estados transitórios e leves de estranhamento consigo mesmo podem ocorrer em pessoas saudáveis sob privação extrema de sono, jet lag intenso, intoxicação leve por álcool ou momentos de fadiga/estresse extremos, sem configurar patologia, desde que sejam breves, autolimitados e não causem sofrimento significativo ou prejuízo funcional. Dalgalarrondo e Cheniaux convergem em apontar que o critério que separa esses episódios transitórios de um Transtorno de Despersonalização/Desrealização (ou de fenômenos psicóticos mais graves) é a persistência, a intensidade, o sofrimento associado e, crucialmente, a preservação do juízo de realidade sobre a própria experiência.",

  achados: [
    {
      id: "despersonalizacao",
      nome: "Despersonalização",
      definicao:
        "Experiência subjetiva persistente ou recorrente de estranhamento, distanciamento ou irrealidade em relação a si mesmo — o próprio corpo, pensamentos, sentimentos ou ações são vivenciados como estranhos, automatizados ou como se pertencessem a um observador externo, com o teste de realidade permanecendo intacto (o paciente sabe que essa sensação não corresponde à realidade objetiva).",
      caracteristicas: [
        "Sensação de estar 'fora do próprio corpo' ou observando a si mesmo de fora",
        "Sentimento de que emoções ou ações são automáticas, mecânicas, 'como um robô'",
        "Juízo de realidade preservado — diferente de delírio, o paciente reconhece a estranheza como uma experiência subjetiva anômala, não como uma alteração real de si mesmo",
        "Frequentemente egodistônica e angustiante",
      ],
      exemploClinico:
        "Paciente que relata, durante um ataque de pânico intenso, sentir-se 'como se estivesse assistindo a mim mesmo de fora do meu corpo, como se eu fosse um personagem em um filme', reconhecendo que essa sensação é estranha e não corresponde à realidade.",
      diferencialFino: [
        {
          comparadoCom: "Desrealização",
          distincao:
            "A despersonalização refere-se ao estranhamento em relação a SI MESMO (corpo, pensamentos, ações); a desrealização refere-se ao estranhamento em relação ao AMBIENTE/MUNDO EXTERNO (que parece distante, artificial, 'como um cenário' ou 'em um sonho'). Frequentemente coexistem, mas são fenômenos conceitualmente distintos e devem ser investigados separadamente.",
        },
        {
          comparadoCom: "Sintomas psicóticos de alteração da identidade",
          distincao:
            "Na despersonalização o juízo de realidade está preservado (o paciente sabe que é uma sensação anômala); nas alterações psicóticas da identidade (ex: delírio de identidade, transitivismo) há perda do juízo de realidade — o paciente efetivamente acredita na alteração, sem crítica.",
        },
      ],
      transtornosAssociados: [
        "Transtorno de Despersonalização/Desrealização",
        "Transtornos de Ansiedade (incluindo Transtorno de Pânico)",
        "Transtorno de Estresse Pós-Traumático",
        "Pode ocorrer transitoriamente em indivíduos sem transtorno mental sob estresse extremo ou privação de sono",
      ],
    },
    {
      id: "desrealizacao",
      nome: "Desrealização",
      definicao:
        "Experiência subjetiva persistente ou recorrente de que o ambiente externo é estranho, irreal, distante, artificial ou onírico, com o juízo de realidade permanecendo intacto (o paciente reconhece que essa percepção alterada não reflete uma mudança real no ambiente).",
      caracteristicas: [
        "O mundo é percebido como 'um cenário', 'atrás de um vidro', 'sem cor/vida'",
        "Diferente de alucinação — não há criação de percepção sem objeto; o ambiente é percebido corretamente em seus elementos, mas a QUALIDADE subjetiva de 'realidade' está alterada",
        "Juízo de realidade preservado",
      ],
      exemploClinico:
        "Paciente que descreve que, durante episódios de ansiedade intensa, o mundo ao seu redor 'parece artificial, como se eu estivesse dentro de um videogame ou vendo tudo através de um vidro embaçado', mas reconhece que essa é apenas uma sensação, não uma mudança real no ambiente.",
      transtornosAssociados: [
        "Transtorno de Despersonalização/Desrealização",
        "Transtornos de Ansiedade",
        "Transtorno de Estresse Pós-Traumático",
      ],
    },
    {
      id: "insercao-roubo-pensamento",
      nome: "Inserção e roubo do pensamento",
      definicao:
        "Fenômenos de passividade do pensamento: inserção é a crença delirante de que pensamentos alheios estão sendo colocados na própria mente por uma força ou agente externo; roubo (retirada) do pensamento é a crença delirante de que os próprios pensamentos estão sendo retirados da mente por uma força externa, correspondendo subjetivamente a um bloqueio do pensamento interpretado de forma delirante.",
      caracteristicas: [
        "O paciente não apenas relata a experiência (bloqueio, pensamento estranho), mas atribui-a especificamente a uma força/agente EXTERNO — este é o elemento delirante central",
        "Classificados classicamente como sintomas de primeira ordem de Schneider, historicamente considerados de alto valor (embora não patognomônico) para esquizofrenia",
        "Deve-se distinguir cuidadosamente de uma simples queixa de 'não conseguir controlar os pensamentos', comum em ansiedade e TOC, que não envolve atribuição a um agente externo",
        "Transdiagnóstico: aumenta a probabilidade de esquizofrenia, mas não fecha diagnóstico sozinho — o DSM-5 removeu deliberadamente o peso especial que edições anteriores davam aos sintomas de primeira ordem, por baixa especificidade; a diferenciação real se faz pelo curso longitudinal e pela relação temporal com um episódio de humor, não pelo sintoma isolado",
      ],
      exemploClinico:
        "Inserção: paciente que afirma com convicção que pensamentos sobre matar sua família não são seus, mas foram colocados em sua mente por um vizinho através de um dispositivo eletrônico. Roubo: paciente que, no meio de uma conversa, para abruptamente e explica que 'eles tiraram o pensamento da minha cabeça antes que eu terminasse de pensar'.",
      diferencialFino: [
        {
          comparadoCom: "Obsessão (pensamento intrusivo em TOC)",
          distincao:
            "Na obsessão, o pensamento intrusivo é reconhecido pelo paciente como PRODUTO DE SUA PRÓPRIA MENTE, ainda que indesejado e egodistônico (crítica preservada quanto à autoria); na inserção do pensamento, o paciente atribui delirantemente a AUTORIA do pensamento a um agente externo — a distinção central é sobre quem o paciente acredita ser o autor do pensamento.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
        "Episódio maníaco com sintomas psicóticos",
        "Depressão psicótica",
        "Psicose induzida por substâncias",
      ],
    },
    {
      id: "irradiacao-sonorizacao-pensamento",
      nome: "Irradiação e sonorização do pensamento",
      definicao:
        "Crença delirante de que os próprios pensamentos são acessíveis a outras pessoas sem que tenham sido comunicados verbalmente — seja por serem 'transmitidos'/difundidos (irradiação/publicação do pensamento), seja por serem ouvidos em voz alta pelo próprio paciente ou por outros no momento em que são pensados (sonorização/eco do pensamento).",
      caracteristicas: [
        "Irradiação (difusão): crença de que os pensamentos são conhecidos por outros à distância, sem qualquer meio de comunicação convencional",
        "Sonorização (eco do pensamento): experiência de ouvir os próprios pensamentos como se fossem falados em voz alta, no momento exato em que são pensados",
        "Também um sintoma de primeira ordem de Schneider — transdiagnóstico, não exclusivo de esquizofrenia (ver nota em Inserção e roubo do pensamento)",
      ],
      exemploClinico:
        "Paciente que afirma que todos ao seu redor conseguem saber exatamente o que está pensando, 'como se meus pensamentos fossem transmitidos pelo ar', mesmo sem ter falado nada em voz alta.",
      diferencialFino: [
        {
          comparadoCom: "Pseudoalucinação auditiva",
          distincao:
            "Ver diferencial detalhado em 'Pseudoalucinação' (domínio Sensopercepção) — a sonorização do pensamento é especificamente a percepção do PRÓPRIO pensamento sendo ouvido, enquanto a pseudoalucinação genérica envolve conteúdo percebido como vindo de fonte alheia, ainda que localizado internamente.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
        "Episódio maníaco com sintomas psicóticos",
        "Depressão psicótica",
        "Epilepsia de lobo temporal",
      ],
    },
    {
      id: "vivencias-influencia-passividade",
      nome: "Vivências de influência e passividade somática/de ação",
      definicao:
        "Crença delirante de que sensações corporais, impulsos, emoções ou ações voluntárias do próprio paciente estão sendo controladas, impostas ou influenciadas por uma força ou agente externo, com perda da experiência subjetiva de autoria/agência sobre o próprio corpo ou comportamento.",
      caracteristicas: [
        "O paciente vivencia a AÇÃO ou SENSAÇÃO como real e presente, mas nega ser o autor/agente dela — atribui o controle a algo externo",
        "Pode envolver movimentos corporais ('meu braço se moveu, mas não fui eu que o movi'), emoções ('colocaram essa raiva em mim') ou impulsos ('me fizeram fazer isso')",
        "Também classificados como sintomas de primeira ordem de Schneider — transdiagnóstico, não exclusivo de esquizofrenia (ver nota em Inserção e roubo do pensamento)",
      ],
      exemploClinico:
        "Paciente que relata que, durante um episódio, seu corpo caminhou até a cozinha e pegou uma faca 'controlado por forças alienígenas', descrevendo o movimento como real, mas afirmando categoricamente não ter sido ele quem decidiu ou executou a ação voluntariamente.",
      diferencialFino: [
        {
          comparadoCom: "Impulsividade / atos impulsivos (raptus)",
          distincao:
            "No ato impulsivo, o paciente reconhece ter sido ele mesmo quem agiu, ainda que de forma súbita e sem premeditação (a agência é própria, apenas mal controlada); na vivência de passividade, há perda delirante da própria sensação de agência — o paciente nega ativamente ter sido o autor da ação, atribuindo-a a um controle externo.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
        "Episódio maníaco com sintomas psicóticos",
        "Depressão psicótica",
        "Psicose induzida por substâncias",
        "Epilepsia de lobo temporal",
      ],
    },
    {
      id: "transitivismo",
      nome: "Transitivismo",
      definicao:
        "Fenômeno no qual o paciente atribui (projeta) seus próprios estados internos — sintomas, pensamentos, sensações — a outra pessoa, passando a descrever que é o outro quem apresenta aquela experiência, não ele mesmo.",
      caracteristicas: [
        "Achado relativamente raro e específico",
        "Representa uma forma extrema de perda da delimitação entre o eu e o outro",
        "Deve ser diferenciado de simples projeção psicológica (mecanismo de defesa não psicótico, mais sutil e sem a mesma convicção delirante)",
      ],
      exemploClinico:
        "Paciente que, ao ser questionado se ouve vozes, nega para si mesmo, mas afirma convictamente que é o colega de quarto do hospital quem está ouvindo vozes — quando, na verdade, é o próprio paciente quem apresenta o sintoma.",
      transtornosAssociados: [
        "Esquizofrenia",
        "Episódio maníaco com sintomas psicóticos",
        "Depressão psicótica",
      ],
    },
  ],

  referencias: [
    "Jaspers K. Psicopatologia Geral.",
    "Schneider K. Clinical Psychopathology — sintomas de primeira ordem.",
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Cheniaux E. Manual de Psicopatologia.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
  ],
};
