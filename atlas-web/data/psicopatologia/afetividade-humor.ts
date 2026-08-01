import { DominioPsicopatologico } from "./types";

export const afetividadeHumor: DominioPsicopatologico = {
  id: "afetividade-humor",

  nome: "Transtornos da Afetividade e do Humor",

  descricao:
    "O humor é o tom afetivo basal, sustentado e relativamente estável, que colore a experiência subjetiva do indivíduo ao longo do tempo (o 'clima' emocional); o afeto é a expressão externa, momentânea e observável do estado emocional (o 'tempo', em contraste com o clima). Essa distinção conceitual — sustentada no tempo e subjetiva (humor) versus observável e flutuante momento a momento (afeto) — é a base para descrever com precisão as alterações desse domínio.",

  achados: [
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
      transtornosAssociados: [
        "Esquizofrenia",
        "Transtorno de Personalidade Borderline (relações interpessoais instáveis, alternância entre idealização e desvalorização)",
        "Transtorno Obsessivo-Compulsivo (ambivalência ligada a rituais/dúvidas)",
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
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
    "American Psychiatric Association (APA). DSM-5-TR.",
  ],
};
