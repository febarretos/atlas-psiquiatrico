import { DominioPsicopatologico } from "./types";

export const pensamentoCursoForma: DominioPsicopatologico = {
  id: "pensamento-curso-forma",

  nome: "Transtornos do Pensamento — Curso e Forma",

  rotuloClinico: "Pensamento (curso e forma)",

  descricao:
    "O curso do pensamento refere-se à velocidade e à fluidez com que as ideias se sucedem; a forma refere-se à maneira como essas ideias se associam e se estruturam logicamente. Distintos do conteúdo do pensamento (o que é pensado — delírios), aqui o foco é como o pensamento se organiza e progride, avaliado principalmente pela análise do discurso espontâneo do paciente.",

  normalidade:
    "O pensamento normal é diretivo: parte de uma pergunta ou objetivo, percorre associações organizadas e chega a uma conclusão coerente, no tempo adequado ao contexto e ao interlocutor. Variações de velocidade fazem parte da normalidade — pensar mais devagar quando cansado ou sob privação de sono, ou mais rápido quando entusiasmado ou sob pressão de tempo — sem que isso comprometa a lógica interna do raciocínio nem a capacidade de retomar o fio condutor após uma digressão breve. Dalgalarrondo descreve o pensamento saudável como aquele que mantém a diretividade (chega a algum lugar) mesmo quando ocasionalmente se dispersa. Cheniaux acrescenta que pequenas digressões, trocadilhos ocasionais ou mudanças de assunto por associação de ideias em uma conversa informal e descontraída não têm o mesmo significado clínico da fuga de ideias ou do afrouxamento de associações — o critério diferenciador é a capacidade de retomar o objetivo original quando solicitado, e a manutenção de uma estrutura compreensível para o interlocutor.",

  notaNormal: "Curso e forma do pensamento preservados, sem fuga de ideias, bloqueios ou desorganização do discurso.",

  achados: [
    {
      id: "fuga-de-ideias",
      nome: "Fuga de ideias",
      definicao:
        "Aceleração extrema do curso do pensamento, na qual as ideias se sucedem tão rapidamente que cada uma mal chega a ser desenvolvida antes de ser substituída pela seguinte, mantendo, ainda assim, conexões compreensíveis entre elas (por contiguidade, assonância, trocadilhos ou estímulos incidentais do ambiente).",
      caracteristicas: [
        "Discurso acelerado (taquilalia), por vezes verborrágico",
        "Mudanças rápidas de tópico, mas com nexo associativo identificável (ainda que superficial) entre uma ideia e a próxima",
        "Associações por assonância/trocadilho são características ('rima com...')",
        "Distraibilidade ambiental frequentemente contribui para os desvios de tópico",
        "Objetivo final do discurso costuma se perder, apesar de cada transição individual ser rastreável",
      ],
      exemploClinico:
        "Paciente em mania que, perguntado sobre como está dormindo, responde: 'Dormindo? Ah, cama, cama de rosas, rosas vermelhas, vermelho é a cor do Flamengo, você torce pra quem?' — cada elo de associação é identificável, mas o tópico original se perde.",
      diferencialFino: [
        {
          comparadoCom: "Afrouxamento de associações / descarrilamento",
          distincao:
            "Na fuga de ideias, um ouvinte atento consegue reconstruir a lógica (ainda que frouxa) que liga uma ideia à seguinte; no afrouxamento de associações, a conexão entre ideias sucessivas é genuinamente incompreensível ou arbitrária, sem nexo identificável mesmo em retrospecto.",
        },
        {
          comparadoCom: "Taquipsiquismo",
          distincao:
            "Taquipsiquismo é o termo mais amplo para aceleração do pensamento; fuga de ideias é uma forma específica e mais grave de taquipsiquismo, na qual a aceleração é tão intensa que compromete a manutenção do objetivo/tópico do discurso.",
        },
      ],
      transtornosAssociados: [
        "Episódio Maníaco",
        "Intoxicação por estimulantes",
      ],
    },
    {
      id: "taquipsiquismo-bradipsiquismo",
      nome: "Taquipsiquismo e bradipsiquismo",
      definicao:
        "Alteração da velocidade global do pensamento: taquipsiquismo é a aceleração (pensamento rápido, discurso apressado, sensação subjetiva de 'pensamentos acelerados'); bradipsiquismo é a lentificação (pensamento lento, respostas demoradas, discurso empobrecido em ritmo).",
      caracteristicas: [
        "Taquipsiquismo: latência de resposta reduzida, discurso rápido, sensação subjetiva de aceleração mental",
        "Bradipsiquismo: latência de resposta aumentada, pausas longas antes de responder, discurso arrastado",
        "Ambos são alterações quantitativas de velocidade, não necessariamente de conteúdo ou estrutura lógica",
      ],
      exemploClinico:
        "Paciente deprimido (bradipsiquismo) que demora vários segundos para iniciar a resposta a uma pergunta simples e fala em ritmo visivelmente mais lento que o habitual, referindo 'a cabeça está pesada, os pensamentos não saem'.",
      diferencialFino: [
        {
          comparadoCom: "Bloqueio do pensamento",
          distincao:
            "O bradipsiquismo é uma lentificação difusa e constante ao longo de todo o discurso; o bloqueio é uma interrupção súbita e completa do fluxo do pensamento no meio de uma frase, com retomada (geralmente de outro tópico) após uma pausa — não é apenas 'mais lento', é uma parada abrupta.",
        },
      ],
      transtornosAssociados: [
        "Bradipsiquismo: Transtorno Depressivo Maior, retardo psicomotor de qualquer causa",
        "Taquipsiquismo: Episódio Maníaco/Hipomaníaco, estados ansiosos intensos, intoxicação por estimulantes",
      ],
    },
    {
      id: "circunstancialidade-tangencialidade",
      nome: "Circunstancialidade e tangencialidade",
      definicao:
        "Alterações na eficiência do discurso em atingir seu objetivo: na circunstancialidade, o paciente eventualmente chega à resposta/objetivo, mas por um caminho excessivamente longo, repleto de detalhes desnecessários; na tangencialidade, o paciente desvia-se progressivamente e nunca retorna ao ponto ou objetivo original.",
      caracteristicas: [
        "Circunstancialidade: discurso prolixo, cheio de detalhes acessórios e digressões, mas que eventualmente converge para responder à pergunta",
        "Tangencialidade: as respostas relacionam-se apenas obliquamente com a pergunta, afastando-se progressivamente sem retorno ao tópico",
        "Ambas preservam a estrutura gramatical e lógica interna de cada frase (diferente do afrouxamento de associações)",
      ],
      exemploClinico:
        "Circunstancialidade: perguntado se tem dormido bem, o paciente descreve detalhadamente sua rotina de higiene do sono, o colchão que comprou há dois anos, a marca do travesseiro, para só então, após dois minutos, responder 'mas sim, tenho dormido bem'. Tangencialidade: à mesma pergunta, o paciente começa a falar sobre a rotina noturna e termina falando sobre um programa de televisão que assiste antes de dormir, sem nunca voltar a responder sobre o sono.",
      diferencialFino: [
        {
          comparadoCom: "Prolixidade",
          distincao:
            "A prolixidade é um termo mais genérico para excesso de detalhes/palavras no discurso; a circunstancialidade é uma forma específica de prolixidade na qual, apesar do excesso, o paciente eventualmente atinge o objetivo comunicativo — todo discurso circunstancial é prolixo, mas nem todo discurso prolixo chega, ao final, à resposta pretendida.",
        },
      ],
      transtornosAssociados: [
        "Circunstancialidade: Transtorno Obsessivo-Compulsivo, epilepsia de lobo temporal, transtornos do neurodesenvolvimento",
        "Tangencialidade: Esquizofrenia, Transtorno Neurocognitivo",
      ],
    },
    {
      id: "afrouxamento-associacoes",
      nome: "Afrouxamento de associações / descarrilamento",
      definicao:
        "Perda da conexão lógica normal entre ideias sucessivas dentro do discurso — cada frase pode ser gramaticalmente correta isoladamente, mas a transição de uma ideia para a próxima carece de nexo compreensível, mesmo para um ouvinte atento.",
      caracteristicas: [
        "Frases individuais mantêm estrutura gramatical correta",
        "A conexão entre uma frase e a seguinte é ausente ou idiossincrática, sem lógica reconstruível",
        "Discurso pode parecer 'saltar' de um tópico a outro sem transição perceptível",
        "Em formas graves, evolui para salada de palavras",
      ],
      exemploClinico:
        "Paciente com esquizofrenia que, perguntado sobre sua família, responde: 'Minha mãe trabalha na padaria. O sol nasce quadrado às vezes. Eu preciso de sapatos novos para o inverno' — cada frase é coerente isoladamente, mas não há nexo entre elas.",
      diferencialFino: [
        {
          comparadoCom: "Fuga de ideias",
          distincao:
            "Ver diferencial detalhado em 'Fuga de ideias' — a distinção central é a presença (fuga) ou ausência (afrouxamento) de nexo associativo reconstruível entre as ideias, mesmo que superficial.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
        "Episódio Maníaco com sintomas psicóticos (formas mais leves)",
      ],
    },
    {
      id: "salada-de-palavras",
      nome: "Salada de palavras (esquizofasia)",
      definicao:
        "Grau extremo de desorganização do discurso, no qual até mesmo a estrutura gramatical das frases individuais se perde, resultando em uma sequência de palavras e fragmentos sem qualquer estrutura sintática ou nexo lógico reconhecível — discurso essencialmente incompreensível.",
      caracteristicas: [
        "Perda da estrutura gramatical, não apenas da conexão lógica entre frases",
        "Discurso ininteligível mesmo em nível de frase isolada",
        "Frequentemente acompanhado de neologismos",
        "Representa o extremo mais grave do espectro de desorganização formal do pensamento",
      ],
      exemploClinico:
        "Registro de discurso de paciente em surto psicótico grave: 'Casa lua depois viga não sim carro azul de nunca porta' — sequência de palavras sem estrutura sintática reconhecível.",
      diferencialFino: [
        {
          comparadoCom: "Afasia de Wernicke",
          distincao:
            "Ambas produzem discurso fluente e incompreensível ('jargonofasia'), mas a afasia de Wernicke tem base neurológica localizada (lesão temporal posterior), instalação tipicamente aguda associada a evento neurológico, e costuma vir acompanhada de outros sinais neurológicos focais; a salada de palavras psiquiátrica ocorre no contexto de desorganização psicótica mais ampla, sem lesão neurológica focal identificável. Na dúvida clínica, este é um diagnóstico diferencial que exige avaliação neurológica.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia (formas graves/desorganizadas)",
      ],
    },
    {
      id: "neologismo",
      nome: "Neologismo",
      definicao:
        "Criação de uma palavra nova, ou uso idiossincrático de uma palavra existente com significado completamente distinto do convencional, compreensível apenas para o próprio paciente (ou não compreensível nem para ele, quando questionado sobre seu significado).",
      caracteristicas: [
        "Palavra inventada ou usada com significado privado, não compartilhado",
        "Frequentemente condensa múltiplas ideias em um único termo",
        "Diferente de gírias ou neologismos culturalmente compartilhados (que têm significado compreendido por um grupo)",
      ],
      exemploClinico:
        "Paciente que usa repetidamente o termo 'destrangulamento' para descrever uma sensação que, quando questionado, não consegue explicar de forma clara nem consistente ao longo da entrevista.",
      transtornosAssociados: [
        "Esquizofrenia",
      ],
    },
    {
      id: "bloqueio-pensamento",
      nome: "Bloqueio do pensamento",
      sinonimos: ["Barragem do pensamento"],
      definicao:
        "Interrupção súbita e completa do fluxo do pensamento e, consequentemente, do discurso, no meio de uma frase ou ideia, sem causa aparente (não por distração externa), seguida de retomada — frequentemente de um tópico diferente do original — após uma pausa.",
      caracteristicas: [
        "Interrupção abrupta e completa, não uma simples lentificação",
        "O próprio paciente frequentemente relata a experiência subjetiva de 'perder o pensamento' ou 'a mente ficar em branco'",
        "Pode ser vivenciado pelo paciente como o pensamento tendo sido 'retirado' (quando associado a fenômeno de passividade, configura roubo do pensamento)",
      ],
      exemploClinico:
        "Paciente que, no meio de uma frase, para abruptamente, fica em silêncio por vários segundos com expressão de perplexidade, e depois retoma falando sobre um assunto totalmente diferente, sem conseguir explicar o que aconteceu.",
      diferencialFino: [
        {
          comparadoCom: "Roubo do pensamento",
          distincao:
            "O bloqueio é a observação/descrição neutra do fenômeno (o pensamento para); o roubo do pensamento é a interpretação delirante específica que o paciente atribui a essa interrupção — a crença de que uma força externa retirou o pensamento de sua mente. Todo roubo do pensamento inclui um bloqueio subjacente, mas nem todo bloqueio é vivenciado como roubo.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
      ],
    },
    {
      id: "perseveracao",
      nome: "Perseveração",
      definicao:
        "Repetição persistente e inadequada de uma mesma resposta, palavra, frase ou tema, mesmo diante de estímulos ou perguntas subsequentes que exigiriam uma resposta diferente — o paciente 'trava' em um conteúdo já emitido.",
      caracteristicas: [
        "Repetição de resposta anterior mesmo quando já não é mais pertinente à pergunta atual",
        "Frequentemente associada a disfunção executiva/frontal ou comprometimento cognitivo orgânico",
        "Testável formalmente em avaliação cognitiva (ex: alternância de tarefas)",
      ],
      exemploClinico:
        "Paciente perguntado 'qual é o seu nome?' responde corretamente, mas ao ser perguntado em seguida 'em que cidade você mora?', repete o próprio nome como resposta.",
      diferencialFino: [
        {
          comparadoCom: "Estereotipia verbal",
          distincao:
            "A perseveração é a repetição inadequada de uma resposta prévia relevante em resposta a um NOVO estímulo/pergunta; a estereotipia verbal é a repetição de uma palavra/frase sem qualquer relação com pergunta ou contexto, de forma mais automática e desprovida de propósito comunicativo, tipicamente vista em quadros catatônicos.",
        },
      ],
      transtornosAssociados: [
        "Transtornos neurocognitivos (disfunção frontal/executiva)",
        "Esquizofrenia",
        "Lesões cerebrais estruturais (frontais)",
      ],
    },
    {
      id: "alogia",
      nome: "Alogia (pobreza do pensamento e do discurso)",
      definicao:
        "Redução da quantidade espontânea de fala e do conteúdo informativo do discurso — respostas breves, lacônicas, com pouca elaboração espontânea mesmo quando o paciente é encorajado a falar mais, sem que isso se deva a rebaixamento do nível de consciência ou a recusa deliberada.",
      caracteristicas: [
        "Respostas curtas, monossilábicas ou quase, com pouco ou nenhum detalhe espontâneo além do estritamente solicitado",
        "Sintoma negativo formal da esquizofrenia (DSM-5-TR, Critério A) — contrapartida direta do polo positivo/florido (fuga de ideias, afrouxamento de associações) já coberto neste domínio",
        "Diferente de bradipsiquismo: a alogia é sobre a QUANTIDADE/conteúdo do discurso, não necessariamente sobre a velocidade — um discurso pode ser pobre em conteúdo mesmo em ritmo normal",
      ],
      exemploClinico:
        "Paciente que, questionado sobre como foi seu fim de semana, responde apenas 'bem' e, mesmo diante de perguntas de seguimento encorajando elaboração, não acrescenta nenhum detalhe espontâneo.",
      diferencialFino: [
        {
          comparadoCom: "Bradipsiquismo",
          distincao:
            "O bradipsiquismo é a lentificação da VELOCIDADE do pensamento/discurso (latência aumentada, ritmo lento); a alogia é a pobreza do CONTEÚDO/quantidade do discurso, que pode ocorrer em ritmo normal. Podem coexistir (comum em depressão grave), mas descrevem eixos diferentes e devem ser avaliados separadamente.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia (sintoma negativo formal, Critério A)",
        "Depressão Maior (grave)",
      ],
    },
    {
      id: "concretismo",
      nome: "Concretismo (pensamento concreto)",
      definicao:
        "Redução ou perda da capacidade de pensamento abstrato — dificuldade em compreender metáforas, provérbios, analogias e categorias gerais, com interpretação literal, ao pé da letra, de conteúdos que exigiriam abstração.",
      caracteristicas: [
        "Testado classicamente pedindo ao paciente que interprete provérbios ('cavalo dado não se olha os dentes') ou identifique semelhanças entre pares de objetos/conceitos — respostas concretas descrevem características literais em vez da categoria abstrata comum",
        "Interpretação literal de expressões figuradas no discurso espontâneo ('quebrar o galho' interpretado como quebrar um pedaço de árvore)",
        "Também pode refletir baixa escolaridade ou diferença cultural — sempre interpretar o achado no contexto do nível educacional e sociocultural do paciente antes de atribuí-lo a patologia",
      ],
      exemploClinico:
        "Paciente questionado sobre o significado de 'em casa de ferreiro, o espeto é de pau' responde apenas 'porque o ferreiro não tem espeto de metal em casa', sem alcançar o sentido abstrato de negligenciar o próprio ofício.",
      transtornosAssociados: [
        "Esquizofrenia (função executiva e abstração prejudicadas)",
        "Transtorno Neurocognitivo Maior",
        "Transtorno do Espectro Autista",
        "Deficiência Intelectual",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Cheniaux E. Manual de Psicopatologia.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
    "American Psychiatric Association (APA). DSM-5-TR — Glossário de Termos Técnicos.",
  ],
};
