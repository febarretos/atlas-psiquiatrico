import { DominioPsicopatologico } from "./types";

export const afetividadeHumor: DominioPsicopatologico = {
  id: "afetividade-humor",

  nome: "Transtornos da Afetividade e do Humor",

  rotuloClinico: "Afetividade e humor",

  descricao:
    "O humor é o tom afetivo basal, sustentado e relativamente estável, que colore a experiência subjetiva do indivíduo ao longo do tempo (o 'clima' emocional); o afeto é a expressão externa, momentânea e observável do estado emocional (o 'tempo', em contraste com o clima). Essa distinção conceitual — sustentada no tempo e subjetiva (humor) versus observável e flutuante momento a momento (afeto) — é a base para descrever com precisão as alterações desse domínio.",

  normalidade:
    "O humor normal (eutimia) oscila dentro de uma faixa esperada, com reatividade emocional proporcional aos acontecimentos da vida — tristeza diante de perdas, alegria diante de conquistas, irritação diante de contrariedades — e capacidade de regular e expressar essas emoções de forma socialmente adequada. O luto normal após a perda de alguém querido pode incluir tristeza profunda, choro, retração social temporária e até questionamentos existenciais, sem que isso configure, por si só, um episódio depressivo — a diferença está na proporcionalidade, no curso temporal esperado e na preservação da capacidade de experimentar prazer/conexão em outros momentos, mesmo durante o luto. Dalgalarrondo distingue tristeza normal de depressão justamente pela desproporcionalidade, pela autonomia (persistência independente de mudanças no contexto) e pela pervasividade desta última. Cheniaux acrescenta que variações de humor ao longo do dia — irritabilidade leve por privação de sono, exaltação transitória em uma comemoração — só adquirem relevância clínica quando fogem à faixa habitual do indivíduo de forma sustentada e passam a comprometer o funcionamento.",

  notaNormal: "Eutímico, afeto congruente e reativo, sem labilidade patológica.",

  achados: [
    {
      id: "hipotimia",
      nome: "Hipotimia (humor deprimido)",
      sinonimos: ["Humor deprimido", "Tristeza patológica"],
      definicao:
        "Rebaixamento sustentado do humor basal abaixo do habitual do indivíduo, com tristeza desproporcional ao contexto, autônoma (persiste independentemente de mudanças situacionais) e pervasiva (colore a experiência como um todo) — os três critérios que a distinguem da tristeza normal (ver 'normalidade' deste domínio).",
      caracteristicas: [
        "Tristeza sustentada na maior parte do dia, quase todos os dias — não apenas um episódio pontual de mau humor",
        "Frequentemente acompanhada de anedonia, mas os dois são fenômenos distintos (achado próprio 'Anedonia' abaixo) — um paciente pode ter hipotimia sem anedonia significativa e vice-versa",
        "Em crianças e idosos pode se apresentar como irritabilidade em vez de tristeza declarada (ver Disforia)",
      ],
      exemploClinico:
        "Paciente que relata estar 'triste sem motivo' há semanas, mesmo em situações que antes trariam algum alívio (encontrar os netos, um dia de sol), com a tristeza presente já ao acordar e persistindo ao longo de todo o dia.",
      transtornosAssociados: [
        "Transtorno Depressivo Maior (sintoma nuclear)",
        "Transtorno Depressivo Persistente (Distimia)",
        "Transtorno Bipolar (fase depressiva)",
        "Transtorno de Ajustamento com humor deprimido",
      ],
    },
    {
      id: "hipertimia",
      nome: "Hipertimia (humor elevado, eufórico ou expansivo)",
      sinonimos: ["Humor elevado", "Euforia patológica"],
      definicao:
        "Elevação sustentada do humor basal acima do habitual do indivíduo, podendo se expressar como euforia (exaltação prazerosa, contentamento intenso e contagiante) ou como expansividade (autoestima inflada, grandiosidade, desinibição social, otimismo exagerado) — frequentemente as duas coexistem.",
      caracteristicas: [
        "Qualitativamente diferente da alegria normal: desproporcional ao contexto, instável (pode virar irritabilidade abruptamente diante de contrariedade — ver Disforia), e associada a julgamento prejudicado",
        "Costuma vir acompanhada de outros sinais do polo maníaco: aumento de energia, redução da necessidade de sono, fuga de ideias, aumento da autoestima",
        "Nem toda hipertimia é prazerosa — mania disfórica (irritável, tensa) é apresentação comum e por vezes predominante",
      ],
      exemploClinico:
        "Paciente que chega à consulta contando piadas ininterruptamente, afirma que 'nunca se sentiu tão bem na vida' e revela ter feito compras muito acima do orçamento na última semana 'porque tudo vai dar certo'.",
      transtornosAssociados: [
        "Episódio Maníaco",
        "Episódio Hipomaníaco",
        "Quadros orgânicos (lesões frontais, hipertireoidismo)",
        "Intoxicação por estimulantes",
      ],
    },
    {
      id: "disforia",
      nome: "Disforia (irritabilidade patológica)",
      definicao:
        "Humor desagradável marcado por irritabilidade, impaciência, tensão interna e baixa tolerância à frustração — um estado afetivo displacenteiro que não se encaixa nem em tristeza nem em euforia clássicas, mas que pode ser a apresentação predominante de ambas.",
      caracteristicas: [
        "Pode ser a forma de apresentação de um episódio depressivo (especialmente em crianças, adolescentes e homens) em vez da tristeza clássica",
        "Pode colorir um episódio maníaco ('mania disfórica/mista') — paciente com energia e atividade aumentadas, mas o tom predominante é irritabilidade e tensão, não euforia",
        "Deve ser diferenciada de irritabilidade situacional normal pela intensidade, persistência e desproporcionalidade ao estímulo",
      ],
      exemploClinico:
        "Adolescente trazido pelos pais por 'estar impossível' há um mês — hostil, respondendo com hostilidade a qualquer pedido, sem o relato espontâneo de tristeza que se esperaria de um quadro depressivo típico.",
      transtornosAssociados: [
        "Transtorno Depressivo Maior (especialmente em adolescentes)",
        "Episódio Maníaco/Misto com características disfóricas",
        "Transtorno Disruptivo da Desregulação do Humor",
        "Abstinência de substâncias",
      ],
    },
    {
      id: "angustia",
      nome: "Angústia (humor ansioso)",
      definicao:
        "Estado afetivo displacenteiro de apreensão difusa, tensão interna e expectativa de perigo iminente, frequentemente acompanhado de correlatos somáticos (aperto/opressão no peito, sensação de sufocamento, mal-estar epigástrico) — a tradição fenomenológica distingue a angústia, mais visceral e corporificada, da ansiedade cognitiva (preocupação antecipatória verbalizável).",
      caracteristicas: [
        "Pode ser sintomática (ligada a um objeto/situação identificável) ou flutuante/livre (sem objeto claro, 'algo ruim vai acontecer' sem saber o quê)",
        "Componente somático proeminente é frequentemente o motivo de busca por atendimento de emergência clínica antes do psiquiátrico",
        "Coexiste com frequência com hipotimia (depressão ansiosa) e com humor delirante em fases prodrômicas de surto psicótico (ver Humor delirante)",
      ],
      exemploClinico:
        "Paciente que descreve uma sensação constante de 'aperto no peito e vontade de sair correndo, como se algo terrível fosse acontecer', sem conseguir identificar o que exatamente teme.",
      transtornosAssociados: [
        "Transtorno de Ansiedade Generalizada",
        "Transtorno de Pânico",
        "Depressão ansiosa",
        "Abstinência de álcool/benzodiazepínicos",
      ],
    },
    {
      id: "apatia",
      nome: "Apatia (indiferença afetiva)",
      definicao:
        "Redução global da reatividade emocional, do interesse e da iniciativa, com desinteresse e ausência de resposta emocional frente a eventos que normalmente gerariam alguma reação — distinta de tristeza por não haver, tipicamente, sofrimento subjetivo associado.",
      caracteristicas: [
        "O paciente frequentemente não se incomoda com a própria apatia ('não sinto falta de nada') — ao contrário do sofrimento ativo da anestesia psíquica dolorosa (ver achado abaixo)",
        "Quando de causa orgânica/frontal, tende a vir acompanhada de outros sinais de disfunção executiva e não responde a estímulo motivacional externo do mesmo modo que a depressão",
        "Diferenciar de depressão grave: na depressão há sofrimento subjetivo mesmo quando a expressão está reduzida; na apatia pura, a ausência de reação é acompanhada de ausência de sofrimento por essa ausência",
      ],
      exemploClinico:
        "Familiar relata que o paciente 'não se importa com mais nada' — nem com notícias boas, nem más — e o próprio paciente, quando questionado, concorda com indiferença: 'é, eu não sinto muita coisa, mas também não me incomoda'.",
      transtornosAssociados: [
        "Transtorno Neurocognitivo Maior (especialmente variante frontal/comportamental da Demência Frontotemporal)",
        "Lesões frontais",
        "Esquizofrenia (componente do polo negativo, junto de avolição)",
        "Depressão grave (apatia secundária)",
      ],
    },
    {
      id: "anestesia-psiquica-dolorosa",
      nome: "Anestesia psíquica dolorosa",
      sinonimos: ["Anaesthesia psychica dolorosa", "Sentimento de falta de sentimento"],
      definicao:
        "Vivência dolorosa e egodistônica de incapacidade de sentir qualquer emoção — inclusive tristeza —, na qual o próprio paciente sofre intensamente pela sensação de estar emocionalmente 'morto' ou vazio por dentro. Classicamente descrita na melancolia grave.",
      caracteristicas: [
        "O sofrimento associado à incapacidade de sentir é, paradoxalmente, o que a diferencia do embotamento — aqui a ausência de afeto é ela mesma fonte de angústia intensa",
        "O paciente frequentemente relata sentir mais falta de tristeza 'de verdade' do que a própria tristeza — quer conseguir chorar e sentir, mas não consegue",
        "Achado de gravidade — associado a maior risco de suicídio quando presente em depressão melancólica",
      ],
      exemploClinico:
        "Paciente que, ao ser perguntado sobre a morte do próprio pai, diz angustiado: 'Eu deveria estar destruído, e o pior é que eu não sinto nada — nem tristeza, nem nada. Isso é o que mais me atormenta.'",
      diferencialFino: [
        {
          comparadoCom: "Embotamento afetivo",
          distincao:
            "Na anestesia psíquica dolorosa há sofrimento subjetivo intenso e egodistônico pela própria incapacidade de sentir (o paciente sabe que não sente e isso o angustia); no embotamento afetivo esquizofrênico a redução da expressão tipicamente não vem acompanhada desse sofrimento correspondente — a ausência de reação emocional é, ela mesma, mais neutra/menos vivenciada como perda dolorosa.",
        },
      ],
      transtornosAssociados: [
        "Depressão Maior com características melancólicas (grave)",
      ],
    },
    {
      id: "humor-delirante",
      nome: "Humor delirante (Wahnstimmung)",
      sinonimos: ["Trema", "Estado pré-delirante"],
      definicao:
        "Estado afetivo prodrômico de perplexidade, apreensão difusa e sensação de que algo estranho, ameaçador ou profundamente significativo está prestes a acontecer, sem que ainda exista um conteúdo delirante definido — descrito por Conrad como 'trema', a fase que tipicamente precede e prepara a cristalização de um delírio primário.",
      caracteristicas: [
        "Geralmente breve e intensamente angustiante — o paciente sente que 'algo mudou' no mundo ao redor sem conseguir nomear o quê",
        "Fenomenologicamente é uma alteração do humor/afeto, não ainda um delírio — o conteúdo delirante propriamente dito surge depois, muitas vezes como forma de dar sentido a essa apreensão insuportável (ver mecanismos formadores do delírio primário, domínio Conteúdo do Pensamento)",
        "Reconhecer esse estado clinicamente é valioso porque antecede o surto psicótico franco — uma janela de intervenção precoce",
      ],
      exemploClinico:
        "Paciente que, dias antes de desenvolver um delírio persecutório estruturado, relata sentir que 'o ar estava diferente, as pessoas na rua olhavam de um jeito estranho, como se algo grande estivesse prestes a acontecer', sem conseguir explicar exatamente o quê.",
      transtornosAssociados: [
        "Fase prodrômica de surto psicótico (Esquizofrenia, Transtorno Esquizoafetivo)",
        "Fase prodrômica de episódio maníaco ou depressivo com sintomas psicóticos",
      ],
    },
    {
      id: "embotamento-afetivo",
      nome: "Embotamento afetivo",
      sinonimos: ["Achatamento afetivo", "Afeto embotado"],
      definicao:
        "Redução acentuada da amplitude e da intensidade da expressão emocional externa — expressão facial pouco variável, gestos reduzidos, entonação vocal monótona (aprosodia) —, independentemente do conteúdo emocional que estaria sendo evocado pela situação ou pelo discurso.",
      caracteristicas: [
        "Expressão facial hipomímica (pouca variação, 'face em máscara')",
        "Prosódia vocal reduzida (fala monótona)",
        "Gestualidade reduzida",
        "Sintoma negativo nuclear em esquizofrenia; deve ser diferenciado de efeito extrapiramidal de antipsicóticos (parkinsonismo induzido por fármacos) e de depressão comórbida",
      ],
      exemploClinico:
        "Paciente com esquizofrenia que relata a morte recente de um familiar próximo com tom de voz monótono e expressão facial inalterada, sem qualquer sinal visível de tristeza durante o relato.",
      diferencialFino: [
        {
          comparadoCom: "Anedonia",
          distincao:
            "O embotamento afetivo é a redução da EXPRESSÃO externa do afeto (o que é observável de fora); a anedonia é a redução da capacidade subjetiva de sentir prazer (uma experiência interna). Um paciente pode ter embotamento sem anedonia significativa (ainda sente prazer internamente, mas não o expressa) — a distinção exige perguntar diretamente sobre a experiência subjetiva, não apenas observar a expressão.",
        },
        {
          comparadoCom: "Parkinsonismo induzido por antipsicótico",
          distincao:
            "Ambos produzem hipomimia facial; o parkinsonismo medicamentoso tipicamente vem acompanhado de outros sinais extrapiramidais (rigidez, tremor de repouso, bradicinesia generalizada, não restrita à expressão facial) e tem relação temporal com início/aumento de dose de antipsicótico — sempre investigar cronologia da medicação e exame motor completo antes de atribuir hipomimia isolada a sintoma negativo primário.",
        },
        {
          comparadoCom: "Anestesia psíquica dolorosa",
          distincao:
            "Ambos reduzem a expressão/vivência afetiva, mas por mecanismos e vivências opostas: no embotamento (esquizofrênico) a redução tipicamente não é acompanhada de sofrimento subjetivo correspondente; na anestesia psíquica dolorosa (melancolia grave) o paciente sofre intensamente pela própria incapacidade de sentir — o sofrimento pela ausência é o que a caracteriza.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia (sintoma negativo nuclear)",
        "Depressão Maior (formas graves)",
        "Transtorno Neurocognitivo Maior",
      ],
    },
    {
      id: "labilidade-afetiva",
      nome: "Labilidade afetiva",
      definicao:
        "Instabilidade e mudança rápida, abrupta e por vezes desproporcional do afeto expresso, com o estado emocional oscilando de forma acentuada em curtos intervalos de tempo, muitas vezes em resposta a estímulos mínimos.",
      caracteristicas: [
        "Mudanças rápidas entre estados afetivos (choro, riso, irritabilidade) em minutos",
        "Frequentemente desproporcional ao estímulo desencadeante",
        "Diferente da labilidade fisiológica normal (que também existe, mas em menor amplitude/frequência)",
      ],
      exemploClinico:
        "Paciente que, durante uma única consulta, chora copiosamente ao falar da mãe, ri alto ao ser interrompido por uma ligação, e minutos depois expressa irritação intensa por um comentário neutro do entrevistador.",
      diferencialFino: [
        {
          comparadoCom: "Incontinência emocional (labilidade pseudobulbar)",
          distincao:
            "A labilidade afetiva psiquiátrica (ex: em mania, TPB) envolve emoções genuinamente sentidas, ainda que instáveis; a incontinência emocional de causa neurológica (lesões corticobulbares, esclerose lateral amiotrófica, AVC) produz episódios de choro ou riso desconectados do estado emocional subjetivo real do paciente — o paciente pode chorar sem se sentir triste, e frequentemente relata constrangimento com a própria expressão descontrolada.",
        },
      ],
      transtornosAssociados: [
        "Transtorno de Personalidade Borderline",
        "Episódio Maníaco/Misto",
        "Transtornos disruptivos do humor",
      ],
    },
    {
      id: "incongruencia-afetiva",
      nome: "Incongruência (inadequação) afetiva",
      definicao:
        "Discordância entre o afeto expresso e o conteúdo do pensamento/discurso simultâneo ou o contexto situacional — a expressão emocional não corresponde ao que seria esperado diante daquele conteúdo específico.",
      caracteristicas: [
        "Ex: sorrir ou rir ao relatar um conteúdo triste, ameaçador ou trágico",
        "Diferente de simples embotamento — aqui há expressão afetiva presente, mas desconectada/oposta ao esperado pelo contexto",
        "Considerado um achado de maior especificidade para desorganização psicótica quando presente de forma consistente",
      ],
      exemploClinico:
        "Paciente que sorri e ri levemente ao relatar detalhes de um episódio de automutilação grave, sem qualquer expressão de sofrimento aparente compatível com o conteúdo relatado.",
      transtornosAssociados: [
        "Esquizofrenia (especialmente subtipo desorganizado, historicamente denominado hebefrênico)",
        "Episódio maníaco com sintomas psicóticos",
      ],
    },
    {
      id: "anedonia",
      nome: "Anedonia",
      definicao:
        "Redução ou perda da capacidade de sentir prazer em atividades previamente prazerosas — um sintoma nuclear tanto de depressão quanto (em sua forma consumatória/antecipatória mais restrita) de sintomatologia negativa esquizofrênica.",
      caracteristicas: [
        "Deve ser diferenciada em anedonia consumatória (prazer reduzido durante a atividade) e anedonia antecipatória (redução da motivação/expectativa de prazer antes de iniciar a atividade)",
        "Pesquisar ativamente perguntando sobre atividades específicas anteriormente prazerosas (hobbies, alimentação, interações sociais, sexualidade)",
      ],
      exemploClinico:
        "Paciente que relata que atividades que antes considerava prazerosas — como assistir a um time de futebol que sempre torceu — agora 'não fazem diferença nenhuma', sem qualquer sensação de prazer ou entusiasmo associada.",
      transtornosAssociados: [
        "Transtorno Depressivo Maior (sintoma nuclear)",
        "Esquizofrenia (sintoma negativo)",
      ],
    },
    {
      id: "ambivalencia-afetiva",
      nome: "Ambivalência afetiva",
      definicao:
        "Coexistência simultânea de sentimentos opostos e contraditórios (ex: amor e ódio) dirigidos ao mesmo objeto/pessoa, sem que o indivíduo consiga resolver ou integrar essa contradição.",
      caracteristicas: [
        "Descrita classicamente como um dos '4 As' de Bleuler para esquizofrenia (junto de afeto embotado, autismo e associações frouxas), embora também ocorra, em menor intensidade, em quadros não psicóticos",
        "Diferente de sentimentos ambíguos normais — na ambivalência patológica, os polos opostos são vivenciados simultaneamente e com intensidade, gerando paralisia ou grande sofrimento",
      ],
      exemploClinico:
        "Paciente que descreve sentir, ao mesmo tempo e com igual intensidade, amor profundo e desejo de nunca mais ver o próprio cônjuge, sem conseguir integrar ou resolver esse conflito interno.",
      diferencialFino: [
        {
          comparadoCom: "Cisão (splitting) no Transtorno de Personalidade Borderline",
          distincao:
            "São mecanismos opostos, não sinônimos: na ambivalência bleuleriana os polos opostos são vivenciados SIMULTANEAMENTE, com intensidade, gerando paralisia; na cisão do TPB, os polos (idealização/desvalorização) são mantidos ATIVAMENTE SEPARADOS — o paciente alterna entre um e outro, sem os vivenciar ao mesmo tempo. É por isso que o TPB é descrito como relações que 'alternam' entre extremos, não como amor e ódio sentidos simultaneamente.",
        },
        {
          comparadoCom: "Dúvida obsessiva e ambitendência (TOC/catatonia)",
          distincao:
            "A dúvida obsessiva do TOC é um conflito entre cognições/impulsos concorrentes ligado a rituais e verificação (ex.: 'tranquei a porta ou não?'), egodistônica e resistida — não é a coexistência de dois AFETOS opostos dirigidos à mesma pessoa/objeto que define a ambivalência afetiva. Quando o fenômeno aparece no plano motor (o paciente inicia um movimento em uma direção e o interrompe para iniciar o oposto), o termo mais preciso é ambitendência, achado do domínio Psicomotricidade.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia (um dos '4 As' de Bleuler)",
      ],
    },
    {
      id: "paratimia",
      nome: "Paratimia",
      definicao:
        "Discordância entre o afeto expresso e o afeto que o próprio paciente relata sentir subjetivamente — o paciente descreve verbalmente uma emoção, mas sua expressão facial/corporal simultânea demonstra uma emoção diferente ou oposta.",
      caracteristicas: [
        "Distinta da incongruência afetiva: aqui a discrepância é entre relato subjetivo e expressão observada, não entre expressão e conteúdo do discurso",
        "Achado menos frequentemente citado, mas relevante para distinguir de simulação ou de dissimulação consciente",
      ],
      exemploClinico:
        "Paciente que verbaliza 'estou muito feliz hoje' enquanto mantém expressão facial de tristeza evidente e postura corporal retraída.",
      diferencialFino: [
        {
          comparadoCom: "Incongruência afetiva",
          distincao:
            "A incongruência afetiva confronta expressão emocional versus CONTEÚDO do discurso (ex.: rir ao contar algo trágico); a paratimia confronta a expressão emocional OBSERVADA versus o que o paciente diz SENTIR subjetivamente naquele momento — são eixos de comparação diferentes.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
        "Quadros dissociativos",
      ],
    },
    {
      id: "alexitimia",
      nome: "Alexitimia",
      definicao:
        "Dificuldade acentuada em identificar, diferenciar e verbalizar os próprios estados emocionais, frequentemente acompanhada de um estilo de pensamento voltado para detalhes concretos e externos (pensamento operatório), com pobre capacidade de introspecção.",
      caracteristicas: [
        "Não é um transtorno em si, mas um traço/dimensão que pode acompanhar diversas condições",
        "O paciente frequentemente descreve sensações físicas (somáticas) em vez de estados emocionais quando questionado sobre como se sente",
        "Dificuldade em diferenciar entre diferentes emoções (ex: não distinguir ansiedade de raiva)",
      ],
      exemploClinico:
        "Paciente que, ao ser perguntado como se sentiu após o término de um relacionamento longo, responde apenas 'meu estômago ficou embrulhado e eu não consegui dormir', sem conseguir nomear nenhuma emoção específica relacionada ao evento.",
      transtornosAssociados: [
        "Transtornos do Espectro Autista",
        "Transtornos Relacionados a Trauma e Estressores",
        "Transtornos de sintomas somáticos",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Cheniaux E. Manual de Psicopatologia.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
    "American Psychiatric Association (APA). DSM-5-TR.",
  ],
};
