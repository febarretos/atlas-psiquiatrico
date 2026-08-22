import { DominioPsicopatologico } from "./types";

export const vivenciasTempoEspaco: DominioPsicopatologico = {
  id: "vivencias-tempo-espaco",

  nome: "Vivências do Tempo e do Espaço",

  descricao:
    "Trata da experiência subjetiva e vivida da passagem do tempo e da extensão do espaço — não do julgamento cognitivo/formal sobre em que dia, hora ou lugar a pessoa está (desorientação temporoespacial, tratada no domínio Atenção e Orientação), mas de como o tempo e o espaço são sentidos e vividos por dentro. Uma pessoa pode estar corretamente orientada (sabe que dia é hoje) e, ainda assim, vivenciar o tempo como tendo parado, acelerado ou perdido continuidade — fenômeno de raiz fenomenológica (Minkowski, Binswanger, Jaspers) com forte valor semiológico nos transtornos do humor e nos quadros psicóticos.",

  normalidade:
    "O tempo vivido normalmente flui de forma contínua e relativamente homogênea, integrando passado, presente e futuro em uma narrativa pessoal coerente — a pessoa sente que o tempo passa em ritmo compatível com a atividade que realiza (mais rápido quando absorvida/engajada, mais devagar quando entediada ou em espera), sem que essa variação normal comprometa o senso de continuidade da própria existência. O espaço vivido é sentido como estável, orientado em relação ao próprio corpo, e adequadamente proporcional — nem opressivamente vasto, nem estranhamente contraído. Variações fisiológicas (a sensação de que 'o tempo voou' em um evento prazeroso, ou 'não passa' em uma sala de espera) são universais e não indicam, por si só, patologia.",

  achados: [
    {
      id: "taquicronia",
      nome: "Taquicronia (aceleração da vivência do tempo)",
      sinonimos: ["Aceleração vivida do tempo"],
      definicao:
        "Vivência subjetiva de que o tempo está passando mais rápido do que o ritmo real, com o paciente relatando a sensação de que os dias e as horas 'voam' — vivência congruente com a aceleração global do curso do pensamento e da atividade psicomotora observada no polo maníaco.",
      caracteristicas: [
        "Acompanha tipicamente outros sinais do polo maníaco (fuga de ideias, logorreia, agitação psicomotora — ver domínios correspondentes), formando um quadro coerente de aceleração vivida global",
        "O paciente frequentemente relata surpresa retrospectiva com o tempo decorrido ('nem vi o dia passar') mais do que angústia — diferente da urgência ansiosa",
        "Congruência entre a vivência subjetiva relatada e o comportamento observado (fala acelerada, atividade motora aumentada) reforça o achado; incongruência levanta suspeita de outra etiologia",
      ],
      exemploClinico:
        "Paciente em episódio maníaco que relata: 'Nem sei como já é sexta-feira, parece que foi ontem que era segunda — o tempo está voando, eu mal consigo acompanhar tudo que estou fazendo.'",
      transtornosAssociados: [
        "Episódio Maníaco/Hipomaníaco",
        "Intoxicação por estimulantes",
      ],
    },
    {
      id: "bradicronia",
      nome: "Bradicronia (lentificação da vivência do tempo)",
      sinonimos: ["Lentificação vivida do tempo"],
      definicao:
        "Vivência subjetiva de que o tempo está passando mais devagar do que o ritmo real, com o paciente relatando que as horas parecem se arrastar — vivência congruente com a lentificação global do curso do pensamento e da atividade psicomotora observada na depressão.",
      caracteristicas: [
        "Acompanha tipicamente retardo psicomotor e bradipsiquismo (ver domínios correspondentes), formando um quadro coerente de lentificação vivida global",
        "Diferente de tédio situacional: aqui a lentificação é pervasiva, presente na maior parte do dia, não restrita a momentos de espera ou inatividade",
        "Deve ser diferenciada, por grau, de estagnação/parada vivida do tempo (achado abaixo), forma mais grave em que o paciente relata a sensação de que o tempo simplesmente deixou de fluir",
      ],
      exemploClinico:
        "Paciente em episódio depressivo que relata: 'As horas não passam. Eu olho pro relógio e parece que passaram só cinco minutos, mas na verdade já se passou uma hora inteira — cada dia parece durar uma semana.'",
      diferencialFino: [
        {
          comparadoCom: "Estagnação/parada da vivência do tempo",
          distincao:
            "A bradicronia é uma lentificação — o tempo ainda é vivenciado como fluindo, apenas mais devagar que o real. Na estagnação (achado próprio abaixo), tipicamente presente em depressões melancólicas graves, o paciente relata a vivência qualitativamente distinta de que o tempo parou de fluir por completo, não apenas que está lento — uma diferença de grau com relevância para gravidade do quadro.",
        },
      ],
      transtornosAssociados: [
        "Transtorno Depressivo Maior",
        "Transtorno Depressivo Persistente (Distimia)",
        "Transtorno Neurocognitivo (lentificação de causa orgânica)",
      ],
    },
    {
      id: "estagnacao-tempo-vivido",
      nome: "Estagnação (parada) da vivência do tempo",
      sinonimos: ["Vazio temporal"],
      definicao:
        "Vivência qualitativamente distinta e mais grave de que o tempo deixou completamente de fluir — não apenas 'devagar', mas parado — frequentemente acompanhada de uma sensação de vazio existencial e de futuro abolido, achado clássico da melancolia grave.",
      caracteristicas: [
        "O paciente relata a sensação literal de que 'o tempo parou', 'não existe mais amanhã' ou 'estou preso neste momento para sempre' — vivência angustiante e desesperançosa, não neutra",
        "Frequentemente coexiste com niilismo temporal (achado adjacente ao delírio niilista/de Cotard, ver domínio Conteúdo do Pensamento) quando a gravidade é extrema — o paciente pode chegar a negar a própria continuidade temporal da existência",
        "Achado de valor semiológico de gravidade — relatado com maior frequência em quadros melancólicos graves e associado a risco aumentado quando presente junto de ideação suicida (ver domínio Conteúdo do Pensamento)",
      ],
      exemploClinico:
        "Paciente com depressão melancólica grave que descreve, com angústia intensa: 'Não é que o tempo esteja lento — o tempo parou. Não existe mais um amanhã pra mim, só esse momento aqui, para sempre.'",
      transtornosAssociados: [
        "Transtorno Depressivo Maior com características melancólicas (grave)",
        "Depressão psicótica (quando associada a niilismo)",
      ],
    },
    {
      id: "fragmentacao-tempo-vivido",
      nome: "Fragmentação (descontinuidade) da vivência temporal",
      definicao:
        "Perda da continuidade e da coerência narrativa da experiência do tempo, com o presente vivenciado como desconectado do passado e do futuro — não uma alteração do ritmo (mais rápido/devagar), mas uma quebra na integração da experiência temporal em uma linha contínua e significativa.",
      caracteristicas: [
        "Descrita na tradição fenomenológica (Minkowski) como parte da 'perda do contato vital com a realidade' na esquizofrenia — o paciente vive uma sucessão de instantes presentes desconectados, sem a trama narrativa que normalmente une passado, presente e futuro em um senso coerente de continuidade pessoal",
        "Distinta de amnésia (domínio Memória): não há necessariamente perda do CONTEÚDO das lembranças — o que se perde é o senso de conexão e fluxo entre elas",
        "Pode contribuir para a perplexidade e o desconforto relatados em fases agudas de surto psicótico, e é conceitualmente próxima da despersonalização/desrealização (domínio Consciência do Eu), mas com foco especificamente temporal, não na estranheza do eu ou do ambiente",
      ],
      exemploClinico:
        "Paciente em surto psicótico agudo que relata dificuldade em explicar como chegou ao momento presente: 'Não sei como cheguei até aqui agora — é como se cada momento fosse separado do outro, sem ligação, e eu não conseguisse costurar isso numa história.'",
      transtornosAssociados: [
        "Esquizofrenia e outros transtornos psicóticos (fase aguda)",
        "Transtornos dissociativos",
      ],
    },
    {
      id: "vivencia-eternidade",
      nome: "Vivência de eternidade (infinitude do tempo)",
      definicao:
        "Vivência subjetiva de que o tempo se tornou infinito, atemporal ou eterno — a sensação de estar fora do tempo comum, em um estado que transcende a passagem temporal ordinária, podendo ter tonalidade tanto extática/mística quanto profundamente angustiante conforme o contexto.",
      caracteristicas: [
        "Em estados psicóticos agudos, tipicamente angustiante e associada a perplexidade e humor delirante (ver domínio Afetividade e Humor)",
        "Em contextos induzidos por substâncias psicodélicas ou em experiências místicas não patológicas, pode ser vivenciada como extática e desejada, sem sofrimento associado — o contexto e a valência emocional (não apenas o fenômeno em si) orientam a relevância clínica",
        "Relatada também em crises epilépticas de lobo temporal e em estados dissociativos intensos",
      ],
      exemploClinico:
        "Paciente em fase aguda de surto psicótico que relata, perplexo e angustiado: 'O tempo parou de existir — eu estou em algum lugar fora do tempo, isso vai durar para sempre e eu não sei se um dia vai acabar.'",
      transtornosAssociados: [
        "Transtornos psicóticos agudos (fase aguda de surto)",
        "Intoxicação por substâncias psicodélicas",
        "Crises epilépticas de lobo temporal",
      ],
    },
    {
      id: "alteracao-vivencia-espaco",
      nome: "Alteração da vivência do espaço",
      sinonimos: ["Estranhamento espacial vivido"],
      definicao:
        "Vivência subjetiva de que o espaço ao redor perdeu suas proporções ou seu sentido habituais — sentido como anormalmente vasto, opressivamente contraído, distante ou desprovido de significado —, distinta de uma ilusão perceptiva propriamente dita (que altera a forma/tamanho visto de um objeto específico) por ser uma alteração mais global e existencial da relação vivida com o espaço.",
      caracteristicas: [
        "Diferente de desrealização (domínio Consciência do Eu), que é a sensação de que o ambiente parece irreal ou artificial ('como um cenário'); aqui o ambiente é sentido como real, mas anormal em sua extensão, proporção ou significado vivido",
        "Pode se manifestar como sensação de vastidão ameaçadora (espaços abertos sentidos como opressivamente grandes) ou de aprisionamento (espaços sentidos como estranhamente apertados, mesmo sendo objetivamente amplos)",
        "Descrita em fases prodrômicas e agudas de surto psicótico, frequentemente associada a humor delirante (ver domínio Afetividade e Humor) — o espaço 'muda de sentido' junto com a atmosfera geral de estranheza que precede a cristalização do delírio",
      ],
      exemploClinico:
        "Paciente em fase prodrômica de surto psicótico que relata: 'A rua parecia enorme, gigantesca, como se eu fosse ficar perdido nela para sempre — mas ao mesmo tempo eu sentia que as paredes do meu quarto estavam mais perto de mim do que deveriam.'",
      diferencialFino: [
        {
          comparadoCom: "Desrealização",
          distincao:
            "Na desrealização (domínio Consciência do Eu) o ambiente é sentido como irreal, artificial, distante — como se estivesse atrás de um vidro ou em um sonho, mas as proporções espaciais em si não são necessariamente o foco da queixa. Na alteração da vivência do espaço, o ambiente continua sentido como real, mas suas proporções, distâncias ou significado existencial estão alterados (vastidão, aprisionamento) — os dois fenômenos podem coexistir, mas descrevem eixos distintos da experiência.",
        },
      ],
      transtornosAssociados: [
        "Fase prodrômica de surto psicótico",
        "Transtornos psicóticos agudos",
        "Enxaqueca com aura e crises epilépticas (quando associada a alterações perceptivas concomitantes)",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Minkowski E. Lived Time: Phenomenological and Psychopathological Studies.",
    "Jaspers K. General Psychopathology.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
  ],
};
