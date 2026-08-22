import { DominioPsicopatologico } from "./types";

export const psicomotricidade: DominioPsicopatologico = {
  id: "psicomotricidade",

  nome: "Transtornos da Psicomotricidade e Catatonia",

  rotuloClinico: "Psicomotricidade",

  descricao:
    "Alterações da expressão motora do estado psíquico — desde a simples aceleração ou lentificação global até os fenômenos motores complexos e específicos da síndrome catatônica, que constitui um capítulo à parte por sua importância diagnóstica (transversal a múltiplas etiologias) e suas implicações terapêuticas e de urgência.",

  normalidade:
    "A atividade motora normal é adequada ao contexto e à intenção do indivíduo — gestos que acompanham e enfatizam o discurso, postura que reflete o estado emocional sem ser exagerada, capacidade de permanecer parado quando apropriado e de se movimentar livremente quando necessário. Há ampla variação individual e cultural na expressividade motora e gestual — pessoas naturalmente mais ou menos expressivas por temperamento, diferenças culturais na proximidade física e na gesticulação — que não deve ser patologizada. Dalgalarrondo descreve a psicomotricidade normal como a tradução corporal fluida da vida psíquica, sem a rigidez, a lentificação extrema ou a agitação desorganizada que caracterizam os quadros patológicos. Cheniaux destaca que inquietação leve em situações de ansiedade cotidiana (esperar um resultado de exame, uma entrevista de emprego) é esperada e não deve ser confundida com agitação psicomotora patológica, que é mais intensa, sustentada e geralmente acompanhada de outros sinais de desorganização do estado mental.",

  notaNormal: "Atividade psicomotora normal, sem agitação, retardo ou sinais catatônicos.",

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
      id: "retardo-psicomotor",
      nome: "Retardo (lentificação) psicomotor",
      definicao:
        "Redução global e observável da velocidade dos movimentos, da fala e das reações motoras — lentidão visível de fora, não apenas relatada subjetivamente pelo paciente como fadiga ou falta de energia.",
      caracteristicas: [
        "Fala lentificada, com latência de resposta aumentada, tom baixo e reduzida em volume",
        "Movimentos corporais lentos, gestos reduzidos, marcha arrastada",
        "Especificador de características melancólicas no DSM-5-TR quando presente em episódio depressivo, e preditor clássico de boa resposta à eletroconvulsoterapia",
        "Deve ser diferenciado de sedação medicamentosa (relação temporal com início/aumento de dose) e de bradicinesia parkinsoniana (acompanhada de rigidez e tremor de repouso)",
      ],
      exemploClinico:
        "Paciente que leva vários segundos para começar a responder cada pergunta, fala em tom baixo e monocórdio, e se movimenta pelo consultório com lentidão perceptível mesmo para tarefas simples como se sentar.",
      diferencialFino: [
        {
          comparadoCom: "Estupor catatônico",
          distincao:
            "O retardo psicomotor é uma lentificação GLOBAL mas contínua — o paciente ainda inicia movimento e fala, apenas de forma lenta; no estupor catatônico há ausência quase completa de movimento e fala espontâneos, não apenas lentidão. É uma diferença de grau que se torna categórica no extremo.",
        },
      ],
      transtornosAssociados: [
        "Transtorno Depressivo Maior (especialmente com características melancólicas)",
        "Depressão bipolar",
        "Quadros de rebaixamento leve do nível de consciência",
      ],
    },
    {
      id: "hipobulia-abulia-avolicao",
      nome: "Hipobulia, abulia e avolição",
      definicao:
        "Redução (hipobulia) ou perda quase completa (abulia) da iniciativa e da capacidade de decidir e executar ações voltadas a um objetivo — o paciente sabe o que precisaria fazer, mas não consegue reunir o impulso para iniciar. Avolição é o termo usado no DSM-5-TR especificamente para a redução da motivação para iniciar e sustentar atividades dirigidas a um objetivo como sintoma negativo da esquizofrenia.",
      caracteristicas: [
        "Diferente de indisponibilidade física — a capacidade motora está preservada, o que falta é a iniciativa/impulso para agir",
        "Manifesta-se como negligência com autocuidado, abandono de tarefas antes rotineiras, permanência prolongada sem atividade, mesmo sem sofrimento subjetivo evidente por isso",
        "Sintoma negativo formal da esquizofrenia (DSM-5-TR, Critério A: 'expressão emocional diminuída ou avolia') — não confundir com alogia, que é sintoma negativo distinto (pobreza do discurso, ver domínio Curso e Forma do Pensamento)",
      ],
      exemploClinico:
        "Paciente que passa a maior parte do dia deitado, sem iniciar nenhuma atividade — nem higiene pessoal, nem lazer que antes praticava —, e quando questionado sobre o motivo, responde apenas 'eu sei que devia fazer, mas não consigo começar'.",
      diferencialFino: [
        {
          comparadoCom: "Anedonia",
          distincao:
            "A avolição é a incapacidade de gerar o IMPULSO/INICIATIVA para agir; a anedonia é a incapacidade de sentir PRAZER na atividade em si. Um paciente pode ter avolição sem anedonia significativa (sente que gostaria da atividade, mas não consegue se mobilizar) — a distinção exige perguntar separadamente sobre motivação para começar e prazer durante a atividade.",
        },
        {
          comparadoCom: "Apatia",
          distincao:
            "Ver diferencial detalhado em 'Apatia' (domínio Afetividade e Humor) — a apatia é mais ampla, envolvendo reatividade emocional geral reduzida além da iniciativa; a avolição, no sentido estrito do DSM-5-TR, é especificamente sobre motivação para ações dirigidas a objetivos.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia (sintoma negativo formal, Critério A)",
        "Depressão Maior (grave)",
        "Transtorno Neurocognitivo Maior (variante frontal)",
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
        "Emergência médica em formas graves (risco de desidratação, trombose venosa profunda, úlceras de pressão, e risco de catatonia maligna com hipertermia/instabilidade autonômica) — limiar diagnóstico formal, teste terapêutico com lorazepam e conduta detalhada em Emergências: Catatonia",
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
        "Flexibilidade cérea: resistência leve e constante (como dobrar uma vela de cera) ao reposicionamento PASSIVO de um membro pelo examinador. Catalepsia: manutenção de uma postura — incluindo posições incômodas ou anti-gravitacionais — depois de o examinador tê-la INDUZIDO passivamente, sem que o paciente a desfaça espontaneamente. Os dois sinais são testados juntos: o examinador movimenta o membro (percebendo a resistência de flexibilidade cérea) e observa se a nova posição é mantida (catalepsia).",
      caracteristicas: [
        "Ambos são sinais PASSIVOS/INDUZIDOS pelo examinador — o que os distingue da postura (achado 'Postura catatônica' abaixo), que é ativa e espontânea, sem indução externa",
        "Na catalepsia, a postura induzida (mesmo desconfortável) é mantida por tempo prolongado sem correção espontânea nem sinal de desconforto aparente",
        "Ambos são sinais motores catatônicos clássicos, frequentemente coexistentes e testados na mesma manobra",
      ],
      exemploClinico:
        "O examinador ergue o braço do paciente até uma posição elevada e o solta; o braço permanece na posição em que foi deixado por vários minutos, sem que o paciente o abaixe espontaneamente (catalepsia com flexibilidade cérea associada).",
      diferencialFino: [
        {
          comparadoCom: "Postura catatônica (posturing)",
          distincao:
            "A distinção é sobre quem inicia a postura: na catalepsia/flexibilidade cérea, é o EXAMINADOR que posiciona passivamente o membro e o paciente apenas não desfaz; na postura catatônica, é o próprio PACIENTE que assume ativa e espontaneamente a postura incomum, sem qualquer indução externa. Os dois sinais contam separadamente para o limiar diagnóstico de catatonia (ver Emergências: Catatonia).",
        },
      ],
      transtornosAssociados: [
        "Catatonia",
      ],
    },
    {
      id: "postura-catatonica",
      nome: "Postura catatônica (posturing)",
      definicao:
        "Manutenção ATIVA e espontânea, pelo próprio paciente, de uma postura incomum ou anti-gravitacional por período prolongado, sem que tenha sido induzida ou imposta pelo examinador — diferente da catalepsia, em que a postura é passivamente colocada pelo examinador.",
      caracteristicas: [
        "Iniciativa da postura é do próprio paciente, não do examinador (ver diferencial em 'Flexibilidade cérea e catalepsia')",
        "Pode envolver posições bizarras ou desconfortáveis mantidas sem sinal aparente de fadiga ou desconforto",
        "Um dos 12 sinais formais de catatonia do DSM-5-TR",
      ],
      exemploClinico:
        "Paciente encontrado sentado com um dos braços erguido acima da cabeça, posição que ele mesmo assumiu e mantém por longos períodos sem qualquer intervenção do examinador.",
      transtornosAssociados: [
        "Catatonia",
      ],
    },
    {
      id: "mutismo-catatonico",
      nome: "Mutismo catatônico",
      definicao:
        "Ausência completa ou marcada redução da resposta verbal, apesar do aparelho fonador estar intacto e de não haver rebaixamento do nível de consciência que a explique — o paciente não fala, ainda que aparente compreender o que é dito.",
      caracteristicas: [
        "Um dos 12 sinais formais de catatonia do DSM-5-TR — frequentemente coexiste com estupor, mas pode ocorrer isoladamente",
        "Deve ser diferenciado de afasia (lesão de linguagem) e de negativismo passivo puro (recusa a responder mantendo capacidade preservada)",
      ],
      exemploClinico:
        "Paciente que permanece completamente calado durante toda a entrevista, sem emitir qualquer som, mesmo diante de perguntas diretas e repetidas, sem sinais de rebaixamento do sensório.",
      transtornosAssociados: [
        "Catatonia",
      ],
    },
    {
      id: "careteamento",
      nome: "Careteamento (grimacing)",
      definicao:
        "Expressões faciais estranhas, repetitivas ou sustentadas, sem propósito comunicativo aparente e desconectadas do contexto emocional da situação.",
      caracteristicas: [
        "Um dos 12 sinais formais de catatonia do DSM-5-TR",
        "Diferente de tique facial (mais súbito, breve, sem a mesma qualidade sustentada) e de discinesia tardia (movimento involuntário associado a exposição prolongada a antipsicóticos, tipicamente orofacial e coreiforme, não sustentado como postura)",
      ],
      exemploClinico:
        "Paciente que mantém uma expressão facial contorcida e incomum, sem relação com o conteúdo da conversa, por minutos seguidos, sem parecer notar ou se incomodar.",
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
