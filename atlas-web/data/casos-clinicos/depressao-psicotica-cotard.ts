import { CasoClinico } from "./types";

export const depressaoPsicoticaCotard: CasoClinico = {
  id: "depressao-psicotica-cotard",

  titulo: "Ela diz que já está morta",

  categoria: "Transtornos do Humor",

  apresentacaoInicial:
    "Paciente do sexo feminino, 58 anos, viúva há 8 meses, é trazida pela filha por recusa alimentar há 2 semanas e isolamento progressivo há 2 meses. A filha relata emagrecimento de 6 kg, negligência com a higiene pessoal e fala escassa. Nos últimos dias, a paciente passou a dizer, com total convicção: 'não faz sentido comer, eu já estou morta por dentro' e 'meus órgãos já não funcionam, estou apodrecendo'.",

  etapas: [
    {
      id: "etapa-1",
      pergunta:
        "Qual achado psicopatológico melhor descreve a afirmação 'meus órgãos já não funcionam, estou apodrecendo', sustentada com convicção absoluta?",
      opcoes: [
        {
          texto: "Delírio niilista (Síndrome de Cotard)",
          correta: true,
          explicacao:
            "Correto. Trata-se de uma crença falsa, incorrigível e incompatível com a realidade objetiva sobre o próprio corpo/existência — os critérios de um delírio, com tema niilista clássico da Síndrome de Cotard.",
        },
        {
          texto: "Alucinação cenestésica",
          correta: false,
          explicacao:
            "A frase relatada é um JUÍZO sobre o próprio corpo (crença), não uma percepção sensorial anômala descrita pela paciente. Alucinações cenestésicas podem coexistir e até alimentar esse tipo de delírio, mas o enunciado descreve a crença em si, não uma sensação corporal percebida.",
        },
        {
          texto: "Ideia sobrevalorizada",
          correta: false,
          explicacao:
            "A ideia sobrevalorizada é sustentada com convicção intensa, mas não absoluta, e permanece psicologicamente compreensível a partir da biografia/personalidade do paciente. Aqui a convicção é total e o conteúdo é incompatível com a realidade — características de delírio, não de ideia sobrevalorizada.",
        },
        {
          texto: "Despersonalização",
          correta: false,
          explicacao:
            "Na despersonalização o juízo de realidade permanece preservado — a paciente reconheceria a sensação como estranha e subjetiva. Aqui há convicção delirante plena, sem qualquer crítica.",
        },
      ],
    },
    {
      id: "etapa-2",
      narrativaAdicional:
        "No exame do estado mental: humor visivelmente deprimido e congruente com o discurso; sem alteração do curso ou da forma do pensamento; orientada auto e alopsiquicamente; nega alucinações auditivas ou visuais, inclusive quando questionada diretamente.",
      pergunta:
        "Diante desse quadro, qual mecanismo melhor descreve a formação do delírio nesta paciente?",
      opcoes: [
        {
          texto:
            "Delírio secundário, compreensível a partir do humor profundamente deprimido",
          correta: true,
          explicacao:
            "Correto. O conteúdo do delírio (niilismo, autodepreciação corporal) decorre de forma psicologicamente compreensível do estado afetivo — exatamente a definição de delírio secundário, em contraste com o primário.",
        },
        {
          texto: "Delírio primário (autóctone)",
          correta: false,
          explicacao:
            "O delírio primário surge de forma súbita e incompreensível, sem conexão com o estado afetivo prévio. Aqui, ao contrário, o conteúdo delirante é plenamente compreensível a partir do humor deprimido — é secundário.",
        },
        {
          texto: "Percepção delirante",
          correta: false,
          explicacao:
            "A percepção delirante exige uma percepção normal e correta recebendo um significado delirante autorreferente sem nexo lógico. Não há esse elemento perceptivo descrito no caso — trata-se de uma crença sobre o próprio corpo, coerente com o humor.",
        },
        {
          texto: "Delírio induzido por substância",
          correta: false,
          explicacao:
            "Não há qualquer dado no caso sugerindo uso de substâncias como fator causal. O quadro é plenamente explicado pelo transtorno do humor de base.",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta: "Qual é a hipótese diagnóstica mais provável?",
      opcoes: [
        {
          texto: "Transtorno Depressivo Maior com sintomas psicóticos",
          correta: true,
          explicacao:
            "Correto. Síndrome depressiva completa (humor deprimido, isolamento, negligência autocuidado) associada a delírio niilista congruente com o humor — quadro clássico de depressão psicótica em paciente idosa após luto recente.",
        },
        {
          texto: "Esquizofrenia",
          correta: false,
          explicacao:
            "Não há alteração do curso/forma do pensamento, nem outros sintomas positivos ou negativos característicos. O delírio é congruente com um humor deprimido proeminente e a instalação é subaguda após evento estressor (luto) — perfil muito mais compatível com transtorno do humor com sintomas psicóticos.",
        },
        {
          texto: "Transtorno Neurocognitivo Maior",
          correta: false,
          explicacao:
            "É um diagnóstico diferencial relevante em idosos e deveria ser rastreado (avaliação cognitiva formal), mas o caso não descreve declínio cognitivo progressivo prévio — o quadro atual é dominado por síndrome afetiva e delirante de instalação subaguda, mais compatível com depressão psicótica.",
        },
        {
          texto: "Transtorno Depressivo Induzido por Substância",
          correta: false,
          explicacao:
            "Não há dado de uso de substâncias no caso. O quadro é bem explicado por um episódio depressivo maior primário, precipitado pelo luto.",
        },
      ],
    },
    {
      id: "etapa-4",
      narrativaAdicional:
        "A recusa alimentar persiste e a equipe está preocupada com risco de desidratação e desnutrição grave nos próximos dias.",
      pergunta:
        "Diante da gravidade do quadro (recusa alimentar persistente por delírio niilista), qual conduta é mais apropriada?",
      opcoes: [
        {
          texto:
            "Associação de antidepressivo com antipsicótico, com eletroconvulsoterapia (ECT) como opção prioritária se a recusa alimentar persistir ou o risco for iminente",
          correta: true,
          explicacao:
            "Correto. Depressão psicótica responde pior a antidepressivo isolado; a combinação antidepressivo + antipsicótico é a primeira linha farmacológica, e a ECT é considerada de primeira linha (não apenas de resgate) diante de risco grave, recusa alimentar ou necessidade de resposta rápida.",
        },
        {
          texto: "Antidepressivo (ISRS) isolado",
          correta: false,
          explicacao:
            "Antidepressivo em monoterapia tem eficácia comprovadamente inferior na depressão psicótica comparado à associação com antipsicótico ou à ECT.",
        },
        {
          texto: "Antipsicótico isolado, sem antidepressivo",
          correta: false,
          explicacao:
            "O componente afetivo (a síndrome depressiva de base) também precisa ser tratado — antipsicótico isolado não trata adequadamente a depressão subjacente que sustenta o delírio.",
        },
        {
          texto: "Reavaliar em 4 semanas sem intervenção farmacológica",
          correta: false,
          explicacao:
            "Há risco iminente de desidratação/desnutrição grave por recusa alimentar sustentada por delírio niilista — isso exige intervenção ativa e não pode aguardar reavaliação tardia.",
        },
      ],
    },
  ],

  diagnosticoFinal:
    "Transtorno Depressivo Maior, episódio único, grave, com sintomas psicóticos (delírio niilista secundário — Síndrome de Cotard), precipitado por luto.",

  diagnosticoId: "depressao-maior",

  medicamentosRelacionados: ["sertralina", "olanzapina"],

  achadosPsicopatologicos: [
    { dominioId: "pensamento-conteudo", achadoId: "delirio-niilista-cotard" },
    { dominioId: "pensamento-conteudo", achadoId: "delirio-primario-secundario" },
  ],

  pontosDeEnsino: [
    "O delírio deve ser caracterizado não só pelo tema, mas também pelo mecanismo de formação (primário vs. secundário) — isso orienta o raciocínio diagnóstico.",
    "A Síndrome de Cotard é classicamente associada a depressão grave, especialmente em idosos, mas também pode ocorrer em esquizofrenia e quadros neurológicos.",
    "Recusa alimentar sustentada por delírio niilista é uma emergência clínica — sempre avaliar risco nutricional/hidroeletrolítico ativamente.",
    "Depressão psicótica exige associação de antidepressivo com antipsicótico ou ECT — antidepressivo isolado é insuficiente.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR.",
    "Jaspers K. Psicopatologia Geral.",
    "CANMAT 2023 — Diretrizes para Transtorno Depressivo Maior.",
  ],
};
