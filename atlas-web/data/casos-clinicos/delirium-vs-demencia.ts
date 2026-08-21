import { CasoClinico } from "./types";

export const deliriumVsDemencia: CasoClinico = {
  id: "delirium-vs-demencia",

  titulo: "Ele estava bem ontem à noite",

  categoria: "Transtornos Neurocognitivos",

  apresentacaoInicial:
    "Paciente do sexo masculino, 76 anos, internado há 3 dias por pneumonia adquirida na comunidade, previamente independente para as atividades de vida diária e sem diagnóstico prévio de declínio cognitivo segundo a família. Durante a madrugada, a enfermagem relata que o paciente ficou agitado, tentou arrancar o acesso venoso e afirmava repetidamente que 'cobras estavam saindo da parede' — não havia nada na parede. Pela manhã, encontra-se sonolento, mas desperta ao chamado, respondendo de forma lentificada e imprecisa às perguntas.",

  noInicialId: "etapa-1",

  nos: [
    {
      id: "etapa-1",
      pergunta:
        "Qual achado melhor caracteriza o estado do paciente pela manhã (sonolento, mas desperta ao chamado, respostas lentificadas e imprecisas)?",
      opcoes: [
        {
          texto: "Obnubilação da consciência",
          correta: true,
          explicacao:
            "Correto. Redução leve a moderada da clareza da consciência, com lentificação e imprecisão do pensamento, mas o paciente permanece capaz de despertar e interagir espontaneamente — diferente de um rebaixamento mais acentuado.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Torpor",
          correta: false,
          explicacao:
            "No torpor seria necessário um estímulo vigoroso e repetido para obter qualquer resposta, com recaída rápida ao sono assim que o estímulo cessa. Aqui o paciente desperta ao chamado simples e sustenta alguma interação — quadro mais leve, compatível com obnubilação.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Demência em fase avançada",
          correta: false,
          explicacao:
            "A demência tem instalação crônica e progressiva ao longo de meses a anos. Aqui a alteração surgiu de forma aguda, em poucas horas, no contexto de uma infecção — perfil temporal incompatível com demência.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Estupor catatônico",
          correta: false,
          explicacao:
            "No estupor catatônico o nível de consciência está preservado (o paciente está desperto, apenas sem iniciativa motora/verbal). Aqui há alteração do próprio nível de consciência (sonolência patológica), não apenas ausência de iniciativa.",
          proximoNoId: "etapa-2",
        },
      ],
    },
    {
      id: "etapa-2",
      pergunta:
        "As 'cobras saindo da parede' relatadas durante a noite, sem qualquer objeto real correspondente, são melhor classificadas como:",
      opcoes: [
        {
          texto: "Alucinação visual",
          correta: true,
          explicacao:
            "Correto. Percepção nítida, projetada no espaço externo, na ausência de qualquer estímulo real correspondente (o enunciado deixa claro que não havia nada na parede) — critérios de alucinação verdadeira, no caso na modalidade visual.",
          proximoNoId: "etapa-3",
        },
        {
          texto: "Ilusão",
          correta: false,
          explicacao:
            "A ilusão exige um estímulo real presente sendo deformado/transfigurado. Como não havia nenhum objeto real na parede, não se trata de deformação de um estímulo existente, e sim de uma percepção sem objeto — alucinação.",
          proximoNoId: "etapa-3",
        },
        {
          texto: "Pseudoalucinação",
          correta: false,
          explicacao:
            "A pseudoalucinação é localizada no espaço interno/subjetivo (dentro da mente), geralmente com menor nitidez sensorial. O relato descreve uma percepção projetada no ambiente externo (na parede), vivenciada como real — alucinação verdadeira.",
          proximoNoId: "etapa-3",
        },
        {
          texto: "Delírio",
          correta: false,
          explicacao:
            "Delírio é uma alteração do CONTEÚDO do pensamento (uma crença), não uma percepção. O relato descreve uma experiência perceptiva anômala (ver algo que não está lá), não um juízo/crença sobre a realidade.",
          proximoNoId: "etapa-3",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta:
        "Diante de flutuação e rebaixamento do nível de consciência de início agudo, alucinações visuais e agitação noturna em paciente internado por infecção, qual a hipótese diagnóstica mais provável?",
      opcoes: [
        {
          texto: "Delirium",
          correta: true,
          explicacao:
            "Correto. Instalação aguda, curso flutuante, rebaixamento do nível de consciência e alucinações (tipicamente visuais) no contexto de uma condição médica identificável (infecção) formam o quadro clássico de delirium — uma emergência médica que exige investigação e tratamento da causa de base.",
          proximoNoId: "etapa-4",
        },
        {
          texto: "Transtorno Neurocognitivo Maior (demência)",
          correta: false,
          explicacao:
            "A instalação aguda (horas), o curso flutuante e a ausência de declínio cognitivo prévio documentado tornam a demência improvável como explicação principal deste quadro agudo — embora demência prévia não diagnosticada seja um fator de risco importante para delirium.",
          proximoNoId: "etapa-4",
        },
        {
          texto: "Esquizofrenia de início tardio",
          correta: false,
          explicacao:
            "Não há história psiquiátrica prévia, e o quadro surge agudamente no contexto de uma causa orgânica evidente (infecção). Esquizofrenia de início tardio é um diagnóstico raro e de exclusão, não a hipótese inicial diante desse contexto clínico.",
          proximoNoId: "etapa-4",
        },
        {
          texto: "Transtorno Psicótico Induzido por Substância",
          correta: false,
          explicacao:
            "Não há dado no caso sugerindo uso de substância. A flutuação do nível de consciência associada à infecção ativa é mais consistente com delirium de causa orgânica (infecciosa/metabólica) do que com um transtorno psicótico induzido por substância.",
          proximoNoId: "etapa-4",
        },
      ],
    },
    {
      id: "etapa-4",
      pergunta: "Qual é a conduta prioritária?",
      opcoes: [
        {
          texto:
            "Investigar e tratar ativamente a(s) causa(s) de base (infecção, distúrbios metabólicos, medicações em uso) e priorizar medidas não farmacológicas, reservando antipsicótico em baixa dose para agitação/risco não controlado por outras medidas",
          correta: true,
          explicacao:
            "Correto. O tratamento do delirium é, antes de tudo, o tratamento da causa subjacente. Medidas não farmacológicas (reorientação, controle de estímulos, correção sensorial, mobilização) são a primeira linha; antipsicótico em baixa dose é reservado para agitação/risco significativo não controlado de outra forma.",
          proximoNoId: "fim",
        },
        {
          texto: "Iniciar imediatamente benzodiazepínico em dose plena para sedação",
          correta: false,
          explicacao:
            "Benzodiazepínicos podem piorar o delirium (exceto especificamente em abstinência alcoólica ou de benzodiazepínicos) e aumentam o risco de queda e maior rebaixamento do nível de consciência em idosos — não são a conduta inicial recomendada aqui.",
          proximoNoId: "fim",
        },
        {
          texto: "Iniciar antidepressivo",
          correta: false,
          explicacao:
            "Não há indicação de antidepressivo neste quadro agudo — o problema central é a causa orgânica do delirium, não um transtorno do humor.",
          proximoNoId: "fim",
        },
        {
          texto: "Aguardar resolução espontânea, sem investigação adicional",
          correta: false,
          explicacao:
            "Delirium é uma emergência médica associada a maior morbimortalidade — exige investigação ativa da causa de base (nesse caso, provavelmente relacionada à pneumonia/infecção) e não deve ser conduzido de forma expectante.",
          proximoNoId: "fim",
        },
      ],
    },
    {
      id: "fim",
      opcoes: [],
    },
  ],

  diagnosticoFinal:
    "Delirium (provavelmente relacionado a quadro infeccioso — pneumonia em curso), em paciente idoso sem declínio cognitivo prévio documentado.",

  diagnosticoId: "delirium",

  achadosPsicopatologicos: [
    { dominioId: "consciencia", achadoId: "obnubilacao-consciencia" },
    { dominioId: "sensopercepcao", achadoId: "alucinacao" },
  ],

  pontosDeEnsino: [
    "O padrão temporal (agudo e flutuante vs. crônico e progressivo) é o principal elemento que diferencia delirium de demência à beira do leito.",
    "Alucinações visuais são mais características de delirium/causas orgânicas do que de psicoses funcionais primárias, nas quais alucinações auditivas predominam.",
    "Delirium é sempre um sinal de alarme para investigação de causa médica subjacente — nunca deve ser tratado apenas sintomaticamente sem essa investigação.",
    "Idade avançada e comprometimento cognitivo prévio (mesmo subclínico) são os principais fatores de risco para delirium durante internação — mesmo quando a família refere função prévia preservada, vale investigar sutilezas de declínio cognitivo basal.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR.",
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
  ],
};
