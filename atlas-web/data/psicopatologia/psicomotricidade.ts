import { DominioPsicopatologico } from "./types";

export const psicomotricidade: DominioPsicopatologico = {
  id: "psicomotricidade",

  nome: "Transtornos da Psicomotricidade e Catatonia",

  descricao:
    "Alterações da expressão motora do estado psíquico — desde a simples aceleração ou lentificação global até os fenômenos motores complexos e específicos da síndrome catatônica, que constitui um capítulo à parte por sua importância diagnóstica (transversal a múltiplas etiologias) e suas implicações terapêuticas e de urgência.",

  normalidade:
    "A atividade motora normal é adequada ao contexto e à intenção do indivíduo — gestos que acompanham e enfatizam o discurso, postura que reflete o estado emocional sem ser exagerada, capacidade de permanecer parado quando apropriado e de se movimentar livremente quando necessário. Há ampla variação individual e cultural na expressividade motora e gestual — pessoas naturalmente mais ou menos expressivas por temperamento, diferenças culturais na proximidade física e na gesticulação — que não deve ser patologizada. Dalgalarrondo descreve a psicomotricidade normal como a tradução corporal fluida da vida psíquica, sem a rigidez, a lentificação extrema ou a agitação desorganizada que caracterizam os quadros patológicos. Cheniaux destaca que inquietação leve em situações de ansiedade cotidiana (esperar um resultado de exame, uma entrevista de emprego) é esperada e não deve ser confundida com agitação psicomotora patológica, que é mais intensa, sustentada e geralmente acompanhada de outros sinais de desorganização do estado mental.",

  achados: [
    {
      id: "agitacao-psicomotora",
      nome: "Agitação psicomotora",
      definicao:
        "Aumento excessivo e desorganizado da atividade motora, geralmente sem propósito claro ou com propósito apenas parcialmente dirigido, frequentemente acompanhado de tensão interna e inquietação subjetiva.",
      caracteristicas: [
        "Movimentos excessivos: andar de um lado para outro, incapacidade de permanecer sentado, gesticulação exagerada",
        "Pode se associar a irritabilidade, impulsividade e risco de heteroagressão",
        "Etiologia ampla — sempre investigar causa de base antes de assumir origem puramente psiquiátrica primária",
      ],
      exemploClinico:
        "Paciente que, na sala de espera, não consegue permanecer sentado, caminha repetidamente em círculos, fala alto e interrompe outros pacientes, aparentando tensão motora evidente.",
      diferencialFino: [
        {
          comparadoCom: "Acatisia",
          distincao:
            "A agitação psicomotora é impulsionada por conteúdo psíquico (ansiedade, excitação maníaca, medo) e o paciente frequentemente não consegue articular bem 'por que' precisa se mover; a acatisia é um efeito adverso motor (classicamente de antipsicóticos) caracterizado por uma inquietação subjetiva específica nas pernas com necessidade imperiosa de se mover, e o paciente tipicamente CONSEGUE descrever essa sensação de inquietação interna localizada como o motivo do movimento — sempre revisar cronologia medicamentosa antes de atribuir agitação a piora do quadro psiquiátrico primário.",
        },
      ],
      transtornosAssociados: [
        "Episódio Maníaco",
        "Delirium (subtipo hiperativo)",
        "Intoxicação por estimulantes",
        "Estados psicóticos agudos",
        "Catatonia excitada (forma menos comum de catatonia)",
      ],
    },
    {
      id: "estupor-catatonico",
      nome: "Estupor catatônico",
      definicao:
        "Marcada diminuição ou ausência de reatividade motora e de responsividade ao ambiente, apesar do nível de consciência estar preservado — o paciente está desperto, mas não inicia movimento, fala ou resposta voluntária espontânea, podendo permanecer imóvel por longos períodos.",
      caracteristicas: [
        "Ausência ou marcada redução de movimento e fala espontâneos",
        "Nível de consciência preservado (diferente de rebaixamento do sensório)",
        "Pode coexistir com outros sinais catatônicos (mutismo, negativismo, flexibilidade cérea)",
        "Emergência médica em formas graves (risco de desidratação, trombose venosa profunda, úlceras de pressão)",
      ],
      exemploClinico:
        "Paciente encontrado imóvel na cama há horas, olhos abertos, sem responder verbalmente a perguntas nem se mover espontaneamente, mas que mantém o olhar fixo no examinador quando este se aproxima.",
      diferencialFino: [
        {
          comparadoCom: "Torpor (rebaixamento do nível de consciência)",
          distincao:
            "Ver diferencial detalhado em 'Torpor' — a distinção central é o nível de consciência: preservado (ainda que sem expressão motora) na catatonia, rebaixado no torpor.",
        },
        {
          comparadoCom: "Mutismo acinético (causa neurológica)",
          distincao:
            "O mutismo acinético tem base neurológica localizatória (lesões de estruturas mediais frontais/diencefálicas) e frequentemente vem acompanhado de outros sinais neurológicos focais; a distinção definitiva geralmente exige neuroimagem quando a etiologia não está clara pelo contexto clínico.",
        },
      ],
      transtornosAssociados: [
        "Catatonia (associada a esquizofrenia, transtornos do humor, condições médicas gerais)",
        "Depressão grave com características catatônicas",
      ],
    },
    {
      id: "negativismo",
      nome: "Negativismo",
      definicao:
        "Resistência aparentemente imotivada a instruções ou tentativas de mobilização (negativismo ativo — o paciente faz o oposto do solicitado ou resiste ativamente) ou ausência completa de resposta a comandos e tentativas de mobilização (negativismo passivo).",
      caracteristicas: [
        "Negativismo ativo: realiza o movimento oposto ao solicitado",
        "Negativismo passivo: resiste passivamente, sem cooperar nem opor força ativa",
        "Sinal catatônico clássico, incluído nos critérios diagnósticos formais de catatonia",
      ],
      exemploClinico:
        "Ao ser solicitado a abrir a boca para exame, o paciente a fecha com mais força; ao ser solicitado a soltar a mão do examinador, aperta-a ainda mais.",
      transtornosAssociados: [
        "Catatonia",
      ],
    },
    {
      id: "flexibilidade-cerea-catalepsia",
      nome: "Flexibilidade cérea e catalepsia",
      definicao:
        "Flexibilidade cérea: resistência leve e constante (como dobrar uma vela de cera) ao reposicionamento passivo de um membro pelo examinador, com o membro mantendo a nova posição. Catalepsia: manutenção ativa e prolongada de uma postura, mesmo posições incômodas ou anti-gravitacionais, sem sinais de desconforto aparente.",
      caracteristicas: [
        "Flexibilidade cérea é testada ativamente pelo examinador ao mobilizar passivamente um membro do paciente",
        "Na catalepsia, a postura assumida (mesmo desconfortável) é mantida por tempo prolongado sem correção espontânea",
        "Ambos são sinais motores catatônicos clássicos, frequentemente coexistentes",
      ],
      exemploClinico:
        "O examinador ergue o braço do paciente até uma posição elevada e o solta; o braço permanece na posição em que foi deixado por vários minutos, sem que o paciente o abaixe espontaneamente (catalepsia com flexibilidade cérea associada).",
      transtornosAssociados: [
        "Catatonia",
      ],
    },
    {
      id: "maneirismos-estereotipias",
      nome: "Maneirismos e estereotipias",
      definicao:
        "Maneirismos: movimentos voluntários normais, porém executados de forma peculiar, exagerada ou socialmente estranha, mantendo ainda alguma finalidade/propósito reconhecível. Estereotipias: movimentos (ou verbalizações) repetitivos, uniformes, sem propósito aparente, executados de forma automática e frequentemente por longos períodos.",
      caracteristicas: [
        "Maneirismo: uma ação com finalidade (ex: cumprimentar) executada de forma bizarra/exagerada",
        "Estereotipia: repetição sem propósito comunicativo ou funcional aparente (ex: balançar o tronco repetidamente)",
        "Ambos podem ser motores ou verbais",
      ],
      exemploClinico:
        "Maneirismo: paciente que cumprimenta o examinador com uma reverência exagerada e elaborada, incomum ao contexto. Estereotipia: paciente que bate palmas repetidamente, no mesmo ritmo, sem qualquer relação com o que está sendo dito ao seu redor.",
      diferencialFino: [
        {
          comparadoCom: "Tique",
          distincao:
            "O tique é um movimento súbito, rápido, recorrente e não rítmico (motor ou vocal), tipicamente precedido de urgência sensorial premonitória e passível de supressão voluntária breve (com desconforto crescente); a estereotipia é mais rítmica, prolongada, voluntária em aparência, sem a urgência premonitória característica do tique, e geralmente não é acompanhada do mesmo desconforto ao ser interrompida.",
        },
      ],
      transtornosAssociados: [
        "Catatonia",
        "Esquizofrenia",
        "Transtornos do Neurodesenvolvimento (estereotipias motoras, TEA)",
      ],
    },
    {
      id: "ecolalia-ecopraxia",
      nome: "Ecolalia e ecopraxia",
      definicao:
        "Ecolalia: repetição automática e sem propósito comunicativo das palavras ou frases ditas por outra pessoa. Ecopraxia: imitação automática dos movimentos ou gestos observados em outra pessoa.",
      caracteristicas: [
        "Repetição/imitação automática, não voluntária no sentido comunicativo usual",
        "Sinais catatônicos clássicos quando ocorrem no contexto de outros achados do domínio",
      ],
      exemploClinico:
        "Ao ser perguntado 'como você está se sentindo hoje?', o paciente repete exatamente 'como você está se sentindo hoje?' em vez de responder à pergunta.",
      transtornosAssociados: [
        "Catatonia",
        "Transtornos do Neurodesenvolvimento",
      ],
    },
    {
      id: "impulsividade-atos-impulsivos",
      nome: "Impulsividade e atos impulsivos (raptus)",
      definicao:
        "Execução súbita, sem planejamento nem deliberação prévia, de um ato motor complexo — frequentemente de alto risco (agressão, automutilação, fuga) —, por vezes desproporcional ao estímulo desencadeante e vivenciado como incontrolável pelo próprio indivíduo.",
      caracteristicas: [
        "Instalação súbita, sem premeditação identificável",
        "O termo 'raptus' é classicamente reservado para atos impulsivos graves e súbitos (ex: raptus suicida — tentativa de suicídio abrupta, sem planejamento prévio detectável)",
        "Deve sempre motivar avaliação ativa de risco (auto e heteroagressivo)",
      ],
      exemploClinico:
        "Paciente internado que, sem qualquer sinal de alerta prévio identificado pela equipe, subitamente tenta se atirar pela janela durante a visita da família (raptus suicida).",
      transtornosAssociados: [
        "Transtorno de Personalidade Borderline",
        "Episódios psicóticos agudos",
        "Depressão agitada",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Cheniaux E. Manual de Psicopatologia.",
    "Bush G, et al. Catatonia Rating Scale and Catatonia Screening Instrument — critérios semiológicos de catatonia.",
    "American Psychiatric Association (APA). DSM-5-TR — critérios de catatonia.",
  ],
};
