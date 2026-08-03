import { CasoClinico } from "./types";

export const depressaoPosParto: CasoClinico = {
  id: "depressao-pos-parto",

  titulo: "Eu deveria estar feliz, mas não sinto nada por ele",

  categoria: "Transtornos do Humor",

  apresentacaoInicial:
    "Paciente do sexo feminino, 29 anos, primípara, trazida à consulta de puericultura do bebê (6 semanas de vida) pelo marido, que relata preocupação: 'ela não é a mesma desde que voltamos do hospital'. A paciente refere que, nas primeiras duas semanas após o parto, chorava com facilidade e se sentia 'instável', o que atribuiu ao cansaço e às mudanças hormonais — mas diz que, diferente do que esperava, esse período não passou. Hoje, seis semanas após o parto, relata tristeza praticamente diária, perda de interesse até em atividades de que gostava antes da gravidez, e diz, baixando a voz: 'todo mundo fala que a gente ama o filho na hora que nasce... eu cuido dele, faço tudo certo, mas não sinto esse amor que deveriam sentir. Acho que sou uma péssima mãe'. Nega alterações perceptivas (não ouve vozes, não vê coisas) e nega ideias de que algo ruim vá acontecer por forças externas.",

  etapas: [
    {
      id: "etapa-1",
      pergunta:
        "O marido pergunta se isso não seria só o 'baby blues', já que 'toda mãe passa por isso'. Qual elemento do caso é mais decisivo para diferenciar o quadro atual do baby blues (tristeza puerperal leve e autolimitada)?",
      opcoes: [
        {
          texto:
            "A persistência dos sintomas além de 2 semanas após o parto, com intensidade suficiente para incluir anedonia e ideias de desvalia como mãe",
          correta: true,
          explicacao:
            "Correto. O baby blues é extremamente comum (até 50-80% das puérperas), tipicamente começa nos primeiros dias pós-parto, tem intensidade leve (labilidade emocional, choro fácil) e resolve espontaneamente em até 2 semanas, sem necessidade de tratamento específico. A persistência de sintomas depressivos francos — tristeza quase diária, anedonia, culpa excessiva — além dessa janela, com prejuízo funcional, ultrapassa o esperado para o baby blues e aponta para um episódio depressivo maior propriamente dito.",
        },
        {
          texto: "O fato de a paciente ser primípara (primeiro filho)",
          correta: false,
          explicacao:
            "Ser primípara é um fator de vulnerabilidade e de menor experiência prévia com o puerpério, mas não é, por si só, o elemento diferenciador entre baby blues e depressão pós-parto — multíparas também podem desenvolver depressão pós-parto, inclusive com risco aumentado se já tiveram episódio em gestação anterior.",
        },
        {
          texto: "O fato de o marido ter notado a mudança e trazido a paciente à consulta",
          correta: false,
          explicacao:
            "A percepção de terceiros sobre a mudança é um dado clínico relevante e frequentemente o motivo do encaminhamento, mas o critério diferenciador entre os dois quadros é clínico (duração e intensidade dos sintomas), não quem percebeu ou trouxe a paciente à consulta.",
        },
        {
          texto: "A idade da paciente (29 anos) estar dentro da faixa reprodutiva típica",
          correta: false,
          explicacao:
            "A idade materna dentro da faixa reprodutiva habitual não tem relação direta com a diferenciação entre baby blues e depressão pós-parto; idade materna muito jovem ou avançada pode ser fator de risco adicional, mas não é o elemento central aqui.",
        },
      ],
    },
    {
      id: "etapa-2",
      pergunta:
        "A fala 'não sinto esse amor que deveriam sentir... acho que sou uma péssima mãe' deve ser entendida clinicamente, neste contexto, principalmente como:",
      opcoes: [
        {
          texto:
            "Culpa excessiva e autoavaliação negativa desproporcional, sintoma nuclear do episódio depressivo, e não um julgamento realista sobre sua capacidade de cuidar do bebê",
          correta: true,
          explicacao:
            "Correto. A paciente está cuidando adequadamente do bebê ('cuido dele, faço tudo certo') apesar de vivenciar sentimentos de culpa e desvalia desproporcionais — um padrão clássico de cognição depressiva (autoavaliação distorcida negativamente), e não uma falha real de vínculo ou de cuidado. Nomear isso corretamente como sintoma depressivo, e não como fracasso pessoal real, é importante tanto para o diagnóstico quanto para o acolhimento da paciente, que frequentemente já vem carregando vergonha e medo de julgamento por não sentir o que 'deveria'.",
        },
        {
          texto:
            "Um sinal inicial de transtorno de vínculo mãe-bebê que exige separação temporária do bebê para reavaliação",
          correta: false,
          explicacao:
            "Não há indicação de separação da mãe e do bebê neste momento: a paciente está cuidando adequadamente da criança, e o relato de ausência de sentimento de amor intenso é um sintoma depressivo (anedonia/embotamento afetivo aplicado ao vínculo), não um sinal de risco direto ao bebê que justifique separação. Medidas assim são desproporcionais e podem, inclusive, aumentar a culpa e o sofrimento da paciente.",
        },
        {
          texto:
            "Prova de que a paciente já apresenta sintomas psicóticos relacionados à maternidade",
          correta: false,
          explicacao:
            "Não há delírio nem alteração perceptiva descritos — a paciente expressa um sentimento subjetivo doloroso (culpa, ausência de afeto esperado), com juízo de realidade preservado, sem qualquer conteúdo delirante sobre o bebê ou sobre si mesma. Não há elementos para sugerir psicose neste relato.",
        },
        {
          texto:
            "Uma reação emocional proporcional e esperada, que não necessita de qualquer intervenção clínica",
          correta: false,
          explicacao:
            "Embora ajustes emocionais façam parte do puerpério, a intensidade (culpa marcada, anedonia) e a persistência além de duas semanas, associadas a prejuízo subjetivo relatado pela própria paciente e percebido pelo marido, ultrapassam o que se considera ajuste normal — minimizar como 'não precisa de intervenção' deixaria de tratar um quadro depressivo real.",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta:
        "Diante do quadro de humor deprimido e anedonia persistentes por mais de 2 semanas após o parto, com culpa excessiva e prejuízo funcional, sem sintomas psicóticos, qual é a hipótese diagnóstica mais provável?",
      opcoes: [
        {
          texto:
            "Transtorno Depressivo Maior, especificador 'com início no periparto'",
          correta: true,
          explicacao:
            "Correto. O DSM-5-TR não trata a 'depressão pós-parto' como um diagnóstico à parte, mas como um Transtorno Depressivo Maior com o especificador 'com início no periparto' (início durante a gestação ou nas primeiras 4 semanas pós-parto, embora, na prática clínica, o rastreio costuma se estender por vários meses do primeiro ano). O quadro aqui — humor deprimido, anedonia, culpa excessiva, prejuízo funcional, por mais de 2 semanas, sem sintomas psicóticos — preenche os critérios centrais de um episódio depressivo maior nesse contexto temporal específico.",
        },
        {
          texto: "Baby blues prolongado, quadro autolimitado que deve apenas ser observado",
          correta: false,
          explicacao:
            "O baby blues, por definição, resolve em até 2 semanas; um quadro que persiste e se intensifica além desse prazo, com anedonia e culpa proeminentes, já não se enquadra nessa categoria autolimitada e requer conduta ativa, não apenas observação.",
        },
        {
          texto: "Psicose puerperal, emergência psiquiátrica que exige internação imediata",
          correta: false,
          explicacao:
            "A psicose puerperal é uma emergência psiquiátrica grave, de início tipicamente muito mais precoce (primeiras 2 semanas, frequentemente dias) e dramático, com sintomas psicóticos floridos (delírios, alucinações, confusão, humor extremamente instável) — nenhum desses elementos está presente neste caso, que tem juízo de realidade preservado.",
        },
        {
          texto:
            "Transtorno de Adaptação com humor deprimido, relacionado à sobrecarga da nova rotina com o bebê",
          correta: false,
          explicacao:
            "O Transtorno de Adaptação é um diagnóstico de exclusão quando a sintomatologia não preenche critérios completos para um transtorno depressivo maior — aqui, a combinação de humor deprimido persistente, anedonia e culpa excessiva com prejuízo funcional já preenche critérios mais específicos de Transtorno Depressivo Maior, tornando esse diagnóstico mais preciso.",
        },
      ],
    },
    {
      id: "etapa-4",
      narrativaAdicional:
        "O marido comenta, incomodado: 'não precisa perguntar sobre machucar o bebê, ela nunca faria isso, ela é uma ótima mãe' — ao notar que você está prestes a investigar esse ponto.",
      pergunta:
        "Diante da reação do marido, qual é a conduta correta em relação à avaliação de risco neste momento?",
      opcoes: [
        {
          texto:
            "Perguntar ativamente e diretamente, em algum momento a sós com a paciente, sobre ideação de causar mal a si mesma e/ou ao bebê, e sobre pensamentos intrusivos indesejados relacionados ao bebê, independentemente do desconforto do marido",
          correta: true,
          explicacao:
            "Correto. Perguntar sobre ideação de autolesão e sobre pensamentos de causar mal ao bebê é parte obrigatória da avaliação em qualquer quadro depressivo perinatal — perguntar não induz o comportamento, e deixar de perguntar por desconforto de um familiar é um erro evitável. Vale notar que pensamentos intrusivos egodistônicos sobre dano acidental ao bebê (sem desejo de executá-los) são relativamente comuns na depressão e ansiedade perinatal e diferentes, em natureza e risco, de ideação congruente com o humor ou de conteúdo delirante — mas essa distinção só pode ser feita perguntando ativamente, não presumindo a resposta.",
        },
        {
          texto:
            "Aceitar a garantia do marido e não investigar diretamente esse ponto, para preservar o vínculo terapêutico com o casal",
          correta: false,
          explicacao:
            "A garantia de um familiar, por mais bem-intencionada, não substitui a avaliação clínica direta com a própria paciente — deixar de perguntar sobre risco por desconforto de terceiros é uma falha grave de avaliação, especialmente em um quadro depressivo com culpa proeminente relacionada à maternidade.",
        },
        {
          texto:
            "Notificar o conselho tutelar imediatamente como medida de precaução, antes mesmo de completar a avaliação clínica",
          correta: false,
          explicacao:
            "É desproporcional e prematuro acionar o conselho tutelar antes de sequer completar a avaliação de risco com a paciente — essa medida só se justificaria diante de risco concreto identificado após avaliação adequada, não como reação antecipada à simples possibilidade de investigar o tema.",
        },
        {
          texto:
            "Pedir para o marido responder por ela sobre esse ponto específico, já que ele convive diariamente com a paciente e o bebê",
          correta: false,
          explicacao:
            "Ideação e pensamentos intrusivos são experiências subjetivas e internas — só a própria paciente pode relatá-los. A observação do marido é um dado complementar útil, mas nunca substitui a pergunta direta e a avaliação clínica com a paciente.",
        },
      ],
    },
    {
      id: "etapa-5",
      narrativaAdicional:
        "A avaliação de risco não identificou ideação de dano ao bebê nem risco iminente de suicídio. A paciente está amamentando e pergunta se vai precisar 'parar de amamentar para fazer algum tratamento'.",
      pergunta: "Qual é a abordagem terapêutica mais apropriada neste momento?",
      opcoes: [
        {
          texto:
            "Psicoterapia (ex: terapia cognitivo-comportamental ou interpessoal) como primeira linha, associada a antidepressivo quando indicado — a sertralina é uma opção de primeira escolha entre os ISRS por seu perfil de segurança bem estabelecido durante a amamentação",
          correta: true,
          explicacao:
            "Correto. A depressão perinatal não tratada carrega riscos reais tanto para a mãe quanto para o desenvolvimento do vínculo e do bebê, superando, na maioria dos casos, os riscos de um antidepressivo com bom perfil de segurança na lactação. A sertralina é frequentemente citada como uma das opções de primeira escolha entre os ISRS nesse contexto, por apresentar passagem para o leite materno relativamente baixa e amplo histórico de uso descrito na amamentação. A decisão de tratar (e com o quê) deve sempre ser compartilhada com a paciente, explicando riscos e benefícios de tratar e de não tratar, sem impor a suspensão da amamentação como pré-requisito automático.",
        },
        {
          texto:
            "Orientar suspensão obrigatória da amamentação antes de iniciar qualquer tratamento farmacológico",
          correta: false,
          explicacao:
            "Não é necessário suspender a amamentação como pré-condição — diversos antidepressivos, com destaque para a sertralina, têm perfil de segurança bem descrito durante a lactação. Impor essa suspensão de forma automática retira uma opção importante de vínculo e pode aumentar a culpa e o sofrimento da paciente sem necessidade clínica real.",
        },
        {
          texto:
            "Aguardar sem tratamento específico, já que os sintomas tendem a melhorar espontaneamente com a adaptação à maternidade",
          correta: false,
          explicacao:
            "Diferente do baby blues, um episódio depressivo maior estabelecido não deve ser conduzido de forma apenas expectante — a depressão perinatal não tratada tem impacto real na mãe e no desenvolvimento do vínculo e do bebê, e há tratamentos eficazes e seguros disponíveis que não devem ser postergados.",
        },
        {
          texto:
            "Iniciar apenas benzodiazepínico em dose regular para controle rápido dos sintomas, sem associar psicoterapia ou antidepressivo",
          correta: false,
          explicacao:
            "Benzodiazepínicos não tratam o quadro depressivo de base e não são indicados como monoterapia neste contexto; podem ter uso pontual para sintomas ansiosos específicos, mas o eixo do tratamento deve ser a psicoterapia associada, quando indicado, a um antidepressivo com perfil de segurança adequado à lactação.",
        },
      ],
    },
  ],

  diagnosticoFinal:
    "Transtorno Depressivo Maior, especificador 'com início no periparto', em puérpera de 6 semanas, sem sintomas psicóticos e sem ideação de dano ao bebê identificada na avaliação de risco.",

  diagnosticoId: "depressao-maior",

  medicamentosRelacionados: ["sertralina"],

  achadosPsicopatologicos: [{ dominioId: "afetividade-humor", achadoId: "anedonia" }],

  pontosDeEnsino: [
    "Diferenciar baby blues (início nos primeiros dias, leve, autolimitado em até 2 semanas) de depressão pós-parto (Transtorno Depressivo Maior com início no periparto — sintomas mais intensos e/ou persistentes além dessa janela) é o primeiro passo diagnóstico, e ambos devem ser diferenciados da psicose puerperal, emergência com início mais precoce e sintomas psicóticos floridos.",
    "Culpa excessiva sobre 'não sentir amor suficiente' pelo bebê deve ser reconhecida como sintoma depressivo (cognição distorcida), não como evidência real de falha de vínculo ou de cuidado inadequado — nomear isso corretamente ajuda a reduzir a vergonha da paciente em buscar e aderir ao tratamento.",
    "A avaliação de risco em depressão perinatal deve incluir, sempre e diretamente com a paciente, perguntas sobre ideação de autolesão e sobre pensamentos de causar mal ao bebê — inclusive diante de familiares que tentem dispensar essa investigação.",
    "Pensamentos intrusivos egodistônicos sobre dano acidental ao bebê (sem desejo de executá-los) são relativamente comuns em quadros depressivos/ansiosos perinatais e devem ser diferenciados de ideação congruente com o humor ou de conteúdo delirante — a diferenciação depende de avaliação clínica cuidadosa, não de presunções.",
    "Não tratar a depressão perinatal por receio de afetar a amamentação costuma ser um erro: o risco da depressão não tratada geralmente supera o risco de antidepressivos com bom perfil de segurança na lactação, como a sertralina, e a decisão deve ser sempre compartilhada com a paciente.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR.",
    "ACOG Committee Opinion — Screening for Perinatal Depression.",
    "Cox JL, Holden JM, Sagovsky R. Edinburgh Postnatal Depression Scale (EPDS). Br J Psychiatry. 1987.",
    "Maudsley Prescribing Guidelines.",
  ],
};
