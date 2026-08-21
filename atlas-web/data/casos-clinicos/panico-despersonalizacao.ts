import { CasoClinico } from "./types";

export const panicoDespersonalizacao: CasoClinico = {
  id: "panico-despersonalizacao",

  titulo: "Eu sinto que não sou real",

  categoria: "Transtornos de Ansiedade",

  apresentacaoInicial:
    "Paciente do sexo feminino, 19 anos, universitária, procura atendimento após episódios recorrentes nos últimos 2 meses de início súbito de taquicardia, sudorese e sensação intensa de morte iminente, durando cerca de 15 a 20 minutos cada. Durante os episódios mais intensos, relata 'uma sensação estranhíssima de que eu não sou eu mesma, como se eu estivesse me vendo de fora, atuando um papel'. Fica muito assustada com essa sensação, mas, já fora da crise, reconhece espontaneamente que 'não fazia sentido, era só uma sensação'.",

  noInicialId: "etapa-1",

  nos: [
    {
      id: "etapa-1",
      pergunta:
        "Como classificar a sensação de 'estar se vendo de fora, atuando um papel', reconhecida pela paciente como uma sensação estranha e não como uma realidade objetiva?",
      opcoes: [
        {
          texto: "Despersonalização",
          correta: true,
          explicacao:
            "Correto. Experiência de estranhamento/distanciamento em relação a si mesma (sentir-se como um observador externo de suas próprias ações), com o juízo de realidade preservado — a paciente reconhece a sensação como anômala, não como uma realidade.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Delírio de identidade",
          correta: false,
          explicacao:
            "Um delírio seria sustentado com convicção absoluta e sem crítica. Aqui a paciente reconhece explicitamente, fora da crise, que a sensação 'não fazia sentido' — juízo de realidade preservado, incompatível com delírio.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Alucinação visual autoscópica",
          correta: false,
          explicacao:
            "Não há relato de uma percepção visual anômala de si mesma como um objeto externo (como veria numa autoscopia verdadeira) — trata-se de uma sensação subjetiva de estranhamento em relação à própria experiência, não de uma percepção visual.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Transitivismo",
          correta: false,
          explicacao:
            "Transitivismo é a atribuição dos próprios estados internos a outra pessoa (dizer que é o outro quem sente/vivencia algo que na verdade é do próprio paciente). Não é isso que está sendo descrito aqui.",
          proximoNoId: "etapa-2",
        },
      ],
    },
    {
      id: "etapa-2",
      pergunta:
        "Qual dado clínico mais reforça que se trata de um fenômeno não-psicótico, apesar do conteúdo subjetivamente bizarro da experiência?",
      opcoes: [
        {
          texto:
            "A crítica preservada: a paciente reconhece, fora da crise, que a sensação 'não fazia sentido'",
          correta: true,
          explicacao:
            "Correto. A presença de crítica — a capacidade de reconhecer a experiência como anômala e não correspondente à realidade — é o critério central que diferencia um fenômeno dissociativo/ansioso de um sintoma psicótico verdadeiro.",
          proximoNoId: "etapa-3",
        },
        {
          texto: "A duração breve do episódio (15 a 20 minutos)",
          correta: false,
          explicacao:
            "A duração é uma característica útil para pensar em transtorno do pânico, mas não é o critério central que diferencia psicose de não-psicose — sintomas psicóticos breves também existem. A crítica preservada é o elemento decisivo aqui.",
          proximoNoId: "etapa-3",
        },
        {
          texto: "A idade da paciente",
          correta: false,
          explicacao:
            "A idade (19 anos) é, na verdade, um período de maior risco para início de quadros psicóticos primários — não é um dado que afasta psicose; o que afasta é a crítica preservada.",
          proximoNoId: "etapa-3",
        },
        {
          texto: "O sexo da paciente",
          correta: false,
          explicacao:
            "O sexo biológico não é um critério relevante para diferenciar fenômeno psicótico de não-psicótico neste contexto.",
          proximoNoId: "etapa-3",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta:
        "Considerando os episódios de início súbito com sintomas autonômicos intensos (taquicardia, sudorese, sensação de morte iminente) associados a despersonalização durante as crises, qual é a hipótese diagnóstica mais provável?",
      opcoes: [
        {
          texto: "Transtorno do Pânico, com despersonalização durante as crises",
          correta: true,
          explicacao:
            "Correto. Ataques de pânico recorrentes e inesperados, com sintomas autonômicos característicos, nos quais a despersonalização/desrealização é um sintoma associado reconhecido (inclusive listado entre os 13 sintomas de ataque de pânico do DSM-5-TR) — não exige diagnóstico à parte quando ocorre exclusivamente nesse contexto.",
          proximoNoId: "etapa-4",
        },
        {
          texto: "Transtorno de Despersonalização/Desrealização primário",
          correta: false,
          explicacao:
            "Quando a despersonalização/desrealização ocorre exclusivamente durante crises de pânico, o diagnóstico primário é Transtorno do Pânico — o Transtorno de Despersonalização/Desrealização é reservado para quando esses sintomas ocorrem de forma persistente e independente de crises de ansiedade circunscritas.",
          proximoNoId: "etapa-4",
        },
        {
          texto: "Esquizofrenia em fase prodrômica",
          correta: false,
          explicacao:
            "Não há outros sintomas psicóticos, a crítica está preservada, e o quadro é episódico, autolimitado e claramente ligado a sintomas autonômicos de ansiedade — perfil incompatível com pródromo esquizofrênico.",
          proximoNoId: "etapa-4",
        },
        {
          texto: "Epilepsia de lobo temporal",
          correta: false,
          explicacao:
            "É um diagnóstico diferencial válido para despersonalização recorrente e deve ser considerado quando o padrão é atípico. Porém, os sintomas autonômicos proeminentes, o gatilho identificável de ansiedade e o padrão típico de ataque de pânico tornam o Transtorno do Pânico a hipótese mais provável aqui.",
          proximoNoId: "etapa-4",
        },
      ],
    },
    {
      id: "etapa-4",
      pergunta: "Qual é o tratamento de primeira linha mais apropriado?",
      opcoes: [
        {
          texto:
            "ISRS associado a Terapia Cognitivo-Comportamental, incluindo exposição interoceptiva",
          correta: true,
          explicacao:
            "Correto. ISRS e TCC (particularmente com exposição interoceptiva, que trabalha diretamente a tolerância às sensações físicas temidas) têm eficácia semelhante e são considerados primeira linha para Transtorno do Pânico, isolados ou em associação.",
          proximoNoId: "fim",
        },
        {
          texto: "Antipsicótico",
          correta: false,
          explicacao:
            "Não há componente psicótico verdadeiro neste quadro — antipsicótico não é indicado e exporia a paciente a efeitos adversos desnecessários.",
          proximoNoId: "fim",
        },
        {
          texto: "Benzodiazepínico como monoterapia de longo prazo",
          correta: false,
          explicacao:
            "Benzodiazepínicos podem ter papel pontual (ex.: alívio rápido no início do tratamento, antes do efeito pleno do ISRS), mas não são recomendados como monoterapia de longo prazo pelo risco de tolerância e dependência.",
          proximoNoId: "fim",
        },
        {
          texto: "Estabilizador de humor",
          correta: false,
          explicacao:
            "Não há indicação para estabilizador de humor neste quadro — não há evidência de transtorno bipolar ou outra condição que o justifique.",
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
    "Transtorno do Pânico, com despersonalização/desrealização como sintoma associado às crises.",

  diagnosticoId: "panico",

  medicamentosRelacionados: ["sertralina", "escitalopram"],

  achadosPsicopatologicos: [
    { dominioId: "consciencia-do-eu", achadoId: "despersonalizacao" },
    { dominioId: "consciencia-do-eu", achadoId: "desrealizacao" },
  ],

  pontosDeEnsino: [
    "Despersonalização/desrealização não são, por si só, sinônimo de psicose — o critério central é a preservação (ou não) do juízo de realidade/crítica.",
    "A despersonalização é um dos sintomas reconhecidos de ataque de pânico, não exigindo diagnóstico à parte quando ocorre exclusivamente nesse contexto.",
    "Sempre investigar ativamente se os sintomas dissociativos ocorrem exclusivamente durante crises de ansiedade circunscritas ou de forma persistente e independente — isso muda o diagnóstico principal.",
    "TCC com exposição interoceptiva tem eficácia comparável ao tratamento farmacológico no Transtorno do Pânico.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR.",
    "Katzman MA, et al. Canadian clinical practice guidelines for the management of anxiety, posttraumatic stress and obsessive-compulsive disorders. BMC Psychiatry. 2014.",
  ],
};
