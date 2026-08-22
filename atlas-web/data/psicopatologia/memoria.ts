import { DominioPsicopatologico } from "./types";

export const memoria: DominioPsicopatologico = {
  id: "memoria",

  nome: "Transtornos da Memória",

  rotuloClinico: "Memória",

  descricao:
    "Alterações qualitativas e quantitativas do registro, retenção e evocação de informações. A caracterização precisa do padrão temporal (o que é esquecido, em relação a qual marco temporal) é o que orienta a hipótese etiológica — diferenciando, por exemplo, um quadro demencial de uma amnésia dissociativa ou de uma síndrome amnéstica focal.",

  normalidade:
    "A memória normal permite registrar, reter e evocar informações em quantidade suficiente para as demandas da vida cotidiana, com eficiência que varia conforme atenção, interesse, estado emocional e, de forma esperada, a idade. Esquecimentos ocasionais e benignos — não lembrar o nome de um conhecido casual, esquecer onde deixou as chaves, redescobrir um compromisso ao ser lembrado — fazem parte da experiência normal e tendem a aumentar discretamente com o envelhecimento, no que a literatura descreve como esquecimento benigno da senescência: lapsos pontuais, sem prejuízo funcional relevante e sem progressão. Cheniaux distingue esse padrão do declínio cognitivo patológico pela ausência de impacto nas atividades de vida diária e pela preservação da capacidade de aprender informação nova quando dada atenção e repetição adequadas. Dalgalarrondo reforça que a linha para a patologia é cruzada quando o esquecimento se torna frequente, progressivo, envolve informações relevantes/recentes de forma desproporcional, e começa a comprometer a autonomia do indivíduo.",

  notaNormal: "Memória imediata, recente e remota preservadas.",

  achados: [
    {
      id: "amnesia-anterograda-retrograda",
      nome: "Amnésia anterógrada e retrógrada",
      definicao:
        "Amnésia anterógrada: incapacidade de formar novas memórias a partir do momento de instalação do quadro (dificuldade em reter informações novas). Amnésia retrógrada: incapacidade de evocar memórias formadas antes do início do quadro.",
      caracteristicas: [
        "Amnésia anterógrada: paciente não consegue reter informações recentes (ex: o que comeu no café da manhã, nomes recém-apresentados)",
        "Amnésia retrógrada: tipicamente segue um gradiente temporal — memórias mais antigas e consolidadas tendem a ser mais preservadas que memórias recentes ao momento da lesão (Lei de Ribot)",
        "Podem coexistir na mesma síndrome amnéstica (ex: síndrome de Korsakoff)",
      ],
      exemploClinico:
        "Paciente com síndrome de Korsakoff que não consegue lembrar ter almoçado há poucos minutos (anterógrada) e também tem dificuldade de relatar eventos dos últimos anos antes da instalação do quadro, embora lembre bem de fatos de décadas atrás (retrógrada, com gradiente temporal).",
      transtornosAssociados: [
        "Síndrome de Korsakoff (deficiência de tiamina)",
        "Transtorno Neurocognitivo Maior",
        "Traumatismo cranioencefálico",
        "Estado pós-eletroconvulsoterapia (amnésia transitória)",
      ],
    },
    {
      id: "amnesia-lacunar",
      nome: "Amnésia lacunar",
      definicao:
        "Perda de memória restrita a um período de tempo específico e delimitado, com preservação da memória para eventos anteriores e posteriores a esse intervalo.",
      caracteristicas: [
        "Início e fim do período amnésico geralmente bem delimitados",
        "Memória preservada fora do intervalo afetado",
        "Pode ter origem orgânica (ex: pós-ictal, intoxicação) ou psicogênica (dissociativa, geralmente relacionada a trauma/estresse)",
      ],
      exemploClinico:
        "Paciente que não se lembra de nada do período de aproximadamente duas horas durante uma crise convulsiva e o período imediatamente subsequente, mas relata normalmente os eventos anteriores e posteriores a essa janela.",
      diferencialFino: [
        {
          comparadoCom: "Amnésia dissociativa",
          distincao:
            "Ambas podem se apresentar como lacunares, mas a amnésia dissociativa tipicamente envolve memórias autobiográficas especificamente ligadas a conteúdo traumático/estressante, com preservação da memória de procedimento e capacidade de aprendizagem geral; a amnésia lacunar orgânica (pós-ictal, intoxicação) não é seletiva por conteúdo emocional — afeta indiscriminadamente todos os eventos do período, independentemente de seu significado afetivo.",
        },
      ],
      transtornosAssociados: [
        "Epilepsia (período ictal/pós-ictal)",
        "Intoxicação por substâncias (blackout alcoólico)",
        "Transtorno Dissociativo (amnésia dissociativa)",
      ],
    },
    {
      id: "confabulacao",
      nome: "Confabulação",
      definicao:
        "Produção espontânea ou provocada de relatos falsos sobre o próprio passado, criados para preencher lacunas de memória, sem intenção consciente de enganar — o paciente genuinamente acredita no conteúdo confabulado.",
      caracteristicas: [
        "Não é mentira deliberada — o paciente não tem consciência da falsidade do conteúdo relatado",
        "Preenche lacunas amnésicas de forma aparentemente plausível (confabulação 'de preenchimento') ou, em formas mais graves, com conteúdo bizarro/fantástico (confabulação 'fantástica')",
        "Classicamente associada a comprometimento do circuito mamilo-talâmico/frontal basal",
      ],
      exemploClinico:
        "Paciente com síndrome de Korsakoff que, ao ser perguntado o que fez na manhã anterior (da qual não tem nenhuma memória real, tendo passado o dia internado), relata detalhadamente uma viagem de trabalho que não ocorreu, com convicção total.",
      diferencialFino: [
        {
          comparadoCom: "Mentira / simulação",
          distincao:
            "Na confabulação não há intenção nem ganho secundário identificável, e o paciente frequentemente muda o conteúdo do relato em reexposições subsequentes sem perceber a inconsistência; na mentira/simulação há intenção deliberada, geralmente voltada a um ganho ou objetivo específico, e o conteúdo tende a ser mantido de forma mais consistente entre relatos.",
        },
      ],
      transtornosAssociados: [
        "Síndrome de Korsakoff",
        "Transtorno Neurocognitivo Maior (fases avançadas)",
      ],
    },
    {
      id: "hipermnesia",
      nome: "Hipermnésia",
      definicao:
        "Aumento patológico da capacidade de evocação de memórias, com recordação excepcionalmente vívida e detalhada de eventos, muitas vezes acompanhada de dificuldade em suprimir ou filtrar memórias irrelevantes.",
      caracteristicas: [
        "Pode ser seletiva (hipermnésia para memórias específicas, ex: traumáticas, como nos flashbacks do TEPT) ou mais global",
        "Diferente de uma boa memória normal — há um caráter intrusivo e por vezes angustiante da recordação excessiva",
      ],
      exemploClinico:
        "Paciente com Transtorno de Estresse Pós-Traumático que relata lembrar do evento traumático com detalhes sensoriais extremamente vívidos e intrusivos, sem conseguir suprimir essas recordações mesmo quando deseja.",
      transtornosAssociados: [
        "Transtorno de Estresse Pós-Traumático (memórias traumáticas intrusivas)",
        "Episódio Maníaco (mais raro, hipermnésia mais global)",
      ],
    },
    {
      id: "paramnesias",
      nome: "Paramnésias (déjà vu e jamais vu)",
      definicao:
        "Distorções qualitativas da memória, nas quais a familiaridade subjetiva de uma experiência está dissociada de sua correspondência objetiva real. Déjà vu: sensação subjetiva intensa e ilusória de já ter vivenciado uma situação atualmente nova. Jamais vu: sensação oposta — uma situação genuinamente familiar é vivenciada como estranha e nunca antes experimentada.",
      caracteristicas: [
        "Déjà vu ocasional é comum na população geral e não indica, por si só, patologia",
        "Déjà vu recorrente, estereotipado e associado a outros sintomas (alterações sensoriais, automatismos) levanta suspeita de origem epiléptica (crises de lobo temporal)",
        "Jamais vu é menos comum e igualmente pode ter significado semiológico quando recorrente",
      ],
      exemploClinico:
        "Paciente que relata episódios recorrentes e estereotipados de sensação intensa de 'já ter vivido exatamente este momento antes', seguidos de uma sensação epigástrica ascendente e breve desconexão do ambiente — quadro sugestivo de aura epiléptica de lobo temporal, não de déjà vu fisiológico isolado.",
      diferencialFino: [
        {
          comparadoCom: "Déjà vu fisiológico (não patológico)",
          distincao:
            "O déjà vu ocasional, isolado, sem outros sintomas associados e sem prejuízo funcional, é um fenômeno comum e não patológico; torna-se clinicamente relevante quando recorrente, estereotipado, e acompanhado de outros sinais sugestivos de crise epiléptica (auras sensoriais associadas, automatismos, breve desconexão do ambiente).",
        },
      ],
      transtornosAssociados: [
        "Epilepsia de lobo temporal (quando recorrente/estereotipado)",
        "Transtornos dissociativos e de despersonalização (associação descrita)",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Cheniaux E. Manual de Psicopatologia.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
  ],
};
