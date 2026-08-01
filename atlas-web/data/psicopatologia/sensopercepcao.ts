import { DominioPsicopatologico } from "./types";

export const sensopercepcao: DominioPsicopatologico = {
  id: "sensopercepcao",

  nome: "Transtornos da Sensopercepção",

  descricao:
    "Alterações na formação da percepção — o processo pelo qual estímulos sensoriais são organizados e interpretados como objetos dotados de significado. Um dos capítulos com maior risco de confusão terminológica na prática clínica; a distinção precisa entre ilusão, alucinação, alucinose e pseudoalucinação tem implicações diagnósticas diretas.",

  achados: [
    {
      id: "ilusao",
      nome: "Ilusão",
      definicao:
        "Percepção deformada de um estímulo real efetivamente presente no ambiente — há um objeto externo, mas ele é erroneamente interpretado/transfigurado. Diferente da alucinação, sempre parte de um estímulo objetivo existente.",
      caracteristicas: [
        "Sempre há um estímulo externo real na origem",
        "Comum em condições de baixa acuidade perceptiva (penumbra, ruído ambiente, sonolência) ou de estado afetivo intenso (medo, ansiedade)",
        "Pode ocorrer em indivíduos sem qualquer transtorno mental sob condições perceptivas desfavoráveis",
        "Geralmente corrigível quando o estímulo é examinado com mais atenção ou melhor iluminação",
      ],
      exemploClinico:
        "Paciente ansioso que, ao caminhar por um corredor mal iluminado, vê um casaco pendurado no cabide e o percebe momentaneamente como uma pessoa parada observando-o.",
      diferencialFino: [
        {
          comparadoCom: "Alucinação",
          distincao:
            "A pergunta-chave é: existe um estímulo externo real sendo deformado (ilusão) ou a percepção surge sem qualquer objeto correspondente no ambiente (alucinação)? Perguntar sobre as condições em que ocorreu (pouca luz, à distância) ajuda a identificar ilusões.",
        },
      ],
      transtornosAssociados: [
        "Estados ansiosos intensos",
        "Delirium (ilusões são comuns na fase inicial, antes de alucinações francas)",
        "Pode ocorrer em pessoas sem transtorno mental",
      ],
    },
    {
      id: "alucinacao",
      nome: "Alucinação verdadeira",
      definicao:
        "Percepção sensorial nítida, com todas as qualidades sensoriais de uma percepção real (projetada no espaço externo objetivo, com a mesma clareza e corporeidade), na ausência de qualquer estímulo externo correspondente, e vivenciada com convicção de realidade pelo paciente.",
      caracteristicas: [
        "Ausência de estímulo externo correspondente",
        "Projetada no espaço externo objetivo (ex: 'vem de fora da minha cabeça', 'ouço vindo do corredor')",
        "Percebida com a mesma nitidez sensorial de uma percepção real",
        "Vivenciada com plena convicção de realidade — o paciente geralmente não questiona sua veracidade espontaneamente",
        "Pode ocorrer em qualquer modalidade sensorial: auditiva, visual, tátil (háptica), cenestésica, olfativa, gustativa",
      ],
      exemploClinico:
        "Paciente com esquizofrenia que relata ouvir, com toda a clareza de uma voz real, duas pessoas comentando suas ações vindas de fora da janela, e reage se escondendo ou respondendo em voz alta.",
      diferencialFino: [
        {
          comparadoCom: "Pseudoalucinação",
          distincao:
            "A alucinação verdadeira é projetada no espaço externo objetivo e tem plena corporeidade sensorial; a pseudoalucinação é percebida no espaço interno/subjetivo (dentro da cabeça, 'na mente'), tipicamente com menor nitidez sensorial, e o paciente frequentemente mantém algum grau de crítica de que se trata de um fenômeno diferente de uma percepção real.",
        },
        {
          comparadoCom: "Alucinose",
          distincao:
            "Na alucinação verdadeira há convicção delirante de realidade; na alucinose a mesma qualidade sensorial nítida está presente, mas o paciente mantém crítica preservada — reconhece que aquilo que percebe não é real, ainda que a experiência sensorial persista.",
        },
        {
          comparadoCom: "Ilusão",
          distincao:
            "A alucinação não parte de nenhum estímulo externo real; a ilusão é a deformação de um estímulo efetivamente presente.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia (auditivas são as mais características)",
        "Episódio psicótico em transtorno bipolar/depressão com sintomas psicóticos",
        "Transtornos por uso de substâncias (visuais e táteis mais associadas a intoxicação/abstinência)",
        "Delirium (visuais são as mais comuns nesse contexto)",
      ],
    },
    {
      id: "alucinose",
      nome: "Alucinose",
      definicao:
        "Percepção alucinatória com toda a nitidez sensorial de uma alucinação verdadeira, porém acompanhada de crítica preservada — o paciente reconhece que a experiência não corresponde à realidade objetiva, ainda que não consiga suprimi-la voluntariamente.",
      caracteristicas: [
        "Qualidade sensorial idêntica à alucinação verdadeira",
        "Crítica preservada: o paciente sabe que 'não é real'",
        "Classicamente descrita em quadros orgânicos (ex: alucinose alcoólica, lesões do tronco encefálico)",
        "Não implica necessariamente psicose em curso",
      ],
      exemploClinico:
        "Paciente com uso crônico de álcool que relata ouvir vozes nítidas comentando sobre ele, mas afirma espontaneamente: 'eu sei que isso não é real, deve ser coisa da minha cabeça por causa da bebida'.",
      transtornosAssociados: [
        "Alucinose alcoólica",
        "Lesões de tronco encefálico (alucinose peduncular)",
        "Uso de substâncias com crítica parcialmente preservada",
      ],
    },
    {
      id: "pseudoalucinacao",
      nome: "Pseudoalucinação",
      definicao:
        "Percepção sem objeto, semelhante à alucinação, porém localizada no espaço interno/subjetivo (dentro da mente, 'na cabeça') em vez do espaço externo objetivo, geralmente com nitidez sensorial um pouco menor e maior possibilidade de o paciente reconhecer sua natureza diferenciada.",
      caracteristicas: [
        "Localização no espaço interno/subjetivo, não no espaço externo objetivo",
        "Nitidez sensorial geralmente um pouco menor que a alucinação verdadeira, embora ainda vívida",
        "Crítica variável — pode ou não estar presente",
        "Termo com uso heterogêneo entre autores; deve-se sempre investigar explicitamente a localização espacial referida pelo paciente",
      ],
      exemploClinico:
        "Paciente que relata 'ouvir vozes na minha cabeça, não pelos ouvidos', descrevendo uma experiência auditiva vívida, mas claramente diferenciada de sons externos reais.",
      diferencialFino: [
        {
          comparadoCom: "Pensamento sonoro / eco do pensamento (sonorização)",
          distincao:
            "Ambos podem ser descritos como 'vozes na cabeça', mas na sonorização/eco do pensamento o paciente identifica o conteúdo como sendo especificamente seus próprios pensamentos sendo ouvidos em voz alta (fenômeno de passividade, ligado a transtorno formal do pensamento), enquanto na pseudoalucinação a voz é percebida como alheia, de outra fonte, apenas localizada internamente.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
        "Transtornos dissociativos (achado por vezes reportado)",
        "Transtorno de estresse pós-traumático (flashbacks intrusivos vívidos, quando descritos como internos)",
      ],
    },
    {
      id: "alucinacao-cenestesica",
      nome: "Alucinação cenestésica",
      sinonimos: ["Alucinação somática/corporal"],
      definicao:
        "Percepção alucinatória referente a sensações corporais internas (órgãos, vísceras, partes do corpo) sem estímulo correspondente — o paciente sente, com convicção de realidade, alterações físicas em seu corpo que não existem objetivamente.",
      caracteristicas: [
        "Localização corporal interna (não é uma sensação tátil na pele, é 'dentro do corpo')",
        "Frequentemente bizarra e associada a interpretação delirante (ex: órgãos sendo consumidos, movidos, transformados)",
        "Deve ser diferenciada de queixas somáticas de base ansiosa ou hipocondríaca, nas quais não há a mesma convicção alucinatória de uma sensação fisicamente presente",
      ],
      exemploClinico:
        "Paciente que relata sentir, com absoluta certeza, que seus intestinos estão sendo 'comidos por bichos' e que consegue senti-los se movendo internamente.",
      diferencialFino: [
        {
          comparadoCom: "Delírio somático (niilista/hipocondríaco)",
          distincao:
            "A alucinação cenestésica é a experiência perceptiva anômala em si (a sensação corporal falsa); o delírio somático é a crença fixa e falsa sobre o corpo, que pode ou não ser construída a partir de uma alucinação cenestésica associada — frequentemente coexistem, mas são conceitualmente distintos (percepção vs. juízo/crença).",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
        "Depressão psicótica (associada a delírios niilistas/Cotard)",
        "Transtorno delirante, tipo somático",
      ],
    },
    {
      id: "alucinacao-funcional-reflexa",
      nome: "Alucinação funcional e alucinação reflexa",
      definicao:
        "Fenômenos em que uma alucinação é desencadeada pela presença simultânea de um estímulo sensorial real, sem se fundir a ele. Na alucinação funcional, o estímulo real e a alucinação ocorrem na mesma modalidade sensorial e simultaneamente; na alucinação reflexa, o estímulo real em uma modalidade dispara uma alucinação em outra modalidade sensorial diferente.",
      caracteristicas: [
        "Alucinação funcional: por exemplo, o barulho da água corrente (real) dispara, enquanto persiste, a percepção de vozes (alucinatória) — ambas coexistem na mesma modalidade sem se fundir",
        "Alucinação reflexa: por exemplo, um som real (auditivo) desencadeia uma sensação alucinatória visual ou tátil, em modalidade diferente da do estímulo desencadeante",
        "Achados relativamente raros e mais específicos, com valor semiológico refinado",
      ],
      exemploClinico:
        "Paciente que relata que, toda vez que ouve o som da torneira aberta, começa a ouvir simultaneamente (mas distintamente do som real) vozes conversando sobre ele — cessando as vozes assim que a torneira é fechada (alucinação funcional).",
      diferencialFino: [
        {
          comparadoCom: "Ilusão",
          distincao:
            "Na ilusão, o próprio estímulo real é deformado/transfigurado (não há dois fenômenos distintos); na alucinação funcional/reflexa, o estímulo real permanece percebido normalmente E, à parte, surge uma alucinação distinta desencadeada por ele.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
    "Jaspers K. Psicopatologia Geral.",
  ],
};
