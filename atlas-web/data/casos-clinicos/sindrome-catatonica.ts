import { CasoClinico } from "./types";

export const sindromeCatatonica: CasoClinico = {
  id: "sindrome-catatonica",

  titulo: "Ela está parada há dois dias",

  categoria: "Transtornos Psicóticos e do Humor",

  apresentacaoInicial:
    "Paciente do sexo feminino, 34 anos, com história de Transtorno Depressivo Maior recorrente, internada há 2 dias por piora importante do quadro depressivo. A enfermagem relata que a paciente permanece imóvel na cama, não fala e não se alimenta espontaneamente. Ao exame, mantém os olhos abertos e parece alerta, mas não responde verbalmente a nenhuma pergunta. Quando o examinador eleva seu braço e o solta, ele permanece na posição em que foi deixado por vários minutos.",

  etapas: [
    {
      id: "etapa-1",
      pergunta:
        "Qual sinal está sendo descrito quando o braço elevado pelo examinador permanece na posição em que foi deixado?",
      opcoes: [
        {
          texto: "Flexibilidade cérea (com catalepsia)",
          correta: true,
          explicacao:
            "Correto. A resistência leve e constante à mobilização passiva, com manutenção da nova posição por tempo prolongado (catalepsia), é a descrição clássica de flexibilidade cérea — um dos sinais motores centrais da catatonia.",
        },
        {
          texto: "Negativismo",
          correta: false,
          explicacao:
            "Negativismo é resistência ativa a instruções ou tentativas de mobilização (ou ausência completa de resposta/cooperação) — não a manutenção passiva de uma postura imposta, que caracteriza a flexibilidade cérea/catalepsia.",
        },
        {
          texto: "Estupor",
          correta: false,
          explicacao:
            "Estupor descreve o quadro geral de ausência de reatividade motora e de fala — é o pano de fundo do caso, mas não o sinal específico testado pelo examinador ao mobilizar o braço.",
        },
        {
          texto: "Maneirismo",
          correta: false,
          explicacao:
            "Maneirismo é um movimento voluntário normal executado de forma peculiar ou exagerada, mantendo alguma finalidade reconhecível — não descreve a manutenção passiva de uma postura imposta pelo examinador.",
        },
      ],
    },
    {
      id: "etapa-2",
      pergunta:
        "Diante de imobilidade, mutismo e flexibilidade cérea, com a paciente aparentando alerta (olhos abertos), qual síndrome deve ser suspeitada?",
      opcoes: [
        {
          texto: "Síndrome catatônica",
          correta: true,
          explicacao:
            "Correto. A combinação de alterações motoras específicas (imobilidade, mutismo, flexibilidade cérea/catalepsia) com nível de consciência aparentemente preservado é o quadro definidor da catatonia — uma síndrome transdiagnóstica que exige reconhecimento e conduta específicos.",
        },
        {
          texto: "Torpor por causa orgânica",
          correta: false,
          explicacao:
            "No torpor haveria rebaixamento do próprio nível de consciência, com necessidade de estímulo vigoroso para qualquer resposta. Aqui a paciente parece alerta (olhos abertos, aparência de vigília preservada), o que aponta para catatonia, não para rebaixamento do sensório.",
        },
        {
          texto: "Estupor depressivo simples, sem catatonia",
          correta: false,
          explicacao:
            "A lentificação psicomotora extrema da depressão grave pode se assemelhar a um quadro catatônico, mas a presença específica de flexibilidade cérea é um sinal motor catatônico formal que vai além da simples lentificação — justificando a suspeita ativa de catatonia sobreposta ao quadro depressivo.",
        },
        {
          texto: "Coma",
          correta: false,
          explicacao:
            "No coma não há abertura ocular nem qualquer resposta com propósito, mesmo a estímulo intenso. A paciente aqui mantém os olhos abertos e reage à mobilização passiva de forma característica (flexibilidade cérea) — incompatível com coma.",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta:
        "Qual é a conduta inicial mais apropriada diante de suspeita de catatonia?",
      opcoes: [
        {
          texto:
            "Teste terapêutico com benzodiazepínico (ex.: lorazepam) e avaliação para eletroconvulsoterapia (ECT) se refratária",
          correta: true,
          explicacao:
            "Correto. O teste com benzodiazepínico em dose adequada (classicamente lorazepam) é tanto diagnóstico quanto terapêutico na catatonia, com resposta frequentemente rápida e expressiva. A ECT é altamente eficaz e deve ser considerada precocemente em casos refratários ou graves (ex.: catatonia maligna).",
        },
        {
          texto: "Iniciar antipsicótico em dose plena imediatamente",
          correta: false,
          explicacao:
            "Antipsicóticos, especialmente os de alta potência, podem piorar a catatonia e aumentam o risco de síndrome neuroléptica maligna nesse contexto — devem ser usados com grande cautela, geralmente só após controle inicial da catatonia com benzodiazepínico.",
        },
        {
          texto: "Aguardar resolução espontânea",
          correta: false,
          explicacao:
            "A catatonia tem risco de complicações graves (desidratação, desnutrição, trombose venosa profunda, úlceras de pressão) e exige tratamento ativo — não deve ser conduzida de forma expectante.",
        },
        {
          texto: "Iniciar antidepressivo tricíclico imediatamente",
          correta: false,
          explicacao:
            "Não é a conduta inicial prioritária diante do quadro catatônico agudo — o primeiro passo é o teste com benzodiazepínico para tratar a catatonia em si antes de ajustar o tratamento do transtorno de base.",
        },
      ],
    },
    {
      id: "etapa-4",
      pergunta:
        "Essa paciente tem histórico de Transtorno Depressivo Maior. Em qual contexto a catatonia pode ocorrer?",
      opcoes: [
        {
          texto:
            "Associada a transtornos do humor, esquizofrenia ou condições médicas gerais — é uma síndrome transdiagnóstica, não exclusiva de um único transtorno",
          correta: true,
          explicacao:
            "Correto. Ao contrário de uma crença comum, a catatonia não é exclusiva de esquizofrenia — ocorre com frequência igual ou maior em transtornos do humor (como neste caso) e também em condições médicas gerais, exigindo investigação etiológica ampla.",
        },
        {
          texto: "Exclusivamente em esquizofrenia",
          correta: false,
          explicacao:
            "Esse é um equívoco comum. A catatonia associada a transtornos do humor é, na verdade, pelo menos tão frequente quanto a associada à esquizofrenia na prática clínica atual.",
        },
        {
          texto: "Exclusivamente em intoxicação por substâncias",
          correta: false,
          explicacao:
            "Substâncias podem precipitar catatonia, mas não são a única nem a principal causa — transtornos do humor, esquizofrenia e diversas condições médicas gerais também são causas bem estabelecidas.",
        },
        {
          texto: "Exclusivamente em transtornos neurológicos",
          correta: false,
          explicacao:
            "Condições neurológicas são causas possíveis (e devem ser investigadas, sobretudo em primeiro episódio), mas a catatonia é classicamente transdiagnóstica, ocorrendo também em transtornos psiquiátricos primários como no caso apresentado.",
        },
      ],
    },
  ],

  diagnosticoFinal:
    "Síndrome catatônica associada a Transtorno Depressivo Maior (episódio atual grave, com catatonia).",

  medicamentosRelacionados: ["lorazepam"],

  achadosPsicopatologicos: [
    {
      dominioId: "psicomotricidade",
      achadoId: "flexibilidade-cerea-catalepsia",
    },
    { dominioId: "psicomotricidade", achadoId: "estupor-catatonico" },
  ],

  pontosDeEnsino: [
    "Catatonia é uma síndrome transdiagnóstica — deve ser ativamente rastreada em transtornos do humor, transtornos psicóticos e condições médicas gerais, não apenas em esquizofrenia.",
    "A flexibilidade cérea/catalepsia é um sinal motor específico que diferencia catatonia de simples lentificação psicomotora extrema.",
    "O teste terapêutico com benzodiazepínico é ao mesmo tempo diagnóstico e terapêutico na catatonia.",
    "Antipsicóticos devem ser usados com cautela na catatonia não tratada, pelo risco de piora do quadro e de síndrome neuroléptica maligna.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR — critérios de catatonia.",
    "Bush G, et al. Catatonia Rating Scale and Catatonia Screening Instrument.",
  ],
};
