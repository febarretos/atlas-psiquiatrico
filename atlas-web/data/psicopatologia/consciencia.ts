import { DominioPsicopatologico } from "./types";

export const consciencia: DominioPsicopatologico = {
  id: "consciencia",

  nome: "Transtornos da Consciência",

  descricao:
    "Alterações do nível de vigília e da clareza do sensório — o pano de fundo sobre o qual todas as demais funções psíquicas (atenção, pensamento, sensopercepção) se organizam. Diferem dos transtornos do conteúdo da consciência (psicoses funcionais), nos quais o nível de vigília está preservado.",

  normalidade:
    "A consciência normal é o campo amplo e claro dentro do qual todas as demais funções psíquicas se organizam e se tornam conhecidas pelo próprio indivíduo. Dalgalarrondo a descreve como a capacidade de estar desperto e de integrar, num só momento, as informações do ambiente e do próprio corpo em uma experiência unificada. Há variação fisiológica normal e esperada — sonolência ao entardecer, relaxamento da vigília durante a meditação ou momentos de devaneio, a transição natural para o sono — que se distingue do rebaixamento patológico por ser reversível espontaneamente, apropriada ao horário/contexto, e por não vir acompanhada de desorientação ou confusão quando a pessoa é ativamente estimulada. Cheniaux reforça que o critério central não é a presença de sonolência em si, mas a resposta ao estímulo e a reversibilidade: uma pessoa sonolenta ao fim de um plantão longo desperta rápido e lucidamente ao ser chamada; um paciente com rebaixamento patológico do sensório, mesmo desperto brevemente, permanece impreciso e lentificado.",

  achados: [
    {
      id: "obnubilacao-consciencia",
      nome: "Obnubilação da consciência (turvação)",
      sinonimos: ["Toldamento da consciência", "Rebaixamento leve do sensório"],
      definicao:
        "Redução leve a moderada da clareza, amplitude e nitidez da consciência, com lentificação do pensamento, dificuldade de fixação da atenção e compreensão imprecisa do ambiente, mas sem perda do despertar (o paciente permanece acordado e responsivo a estímulos).",
      caracteristicas: [
        "Lentificação e imprecisão do pensamento e da fala",
        "Dificuldade de fixar e sustentar a atenção",
        "Compreensão lentificada de perguntas simples",
        "Sonolência leve superajacente, mas paciente desperta e interage quando estimulado",
        "Flutuação ao longo do dia, tipicamente pior à noite (piora vespertino-noturna)",
      ],
      exemploClinico:
        "Paciente internado por infecção urinária que, ao ser abordado, demora a formular respostas, repete a mesma pergunta ('que dia é hoje mesmo?') minutos depois de já ter sido informado, e parece 'grogue', embora desperte prontamente ao chamado e reconheça a equipe.",
      diferencialFino: [
        {
          comparadoCom: "Torpor",
          distincao:
            "Na obnubilação o paciente mantém-se espontaneamente desperto e conversa, ainda que de forma lentificada e imprecisa; no torpor há sonolência patológica e o paciente só desperta e mantém alguma resposta mediante estímulo vigoroso e repetido, recaindo ao sono assim que este cessa.",
        },
        {
          comparadoCom: "Demência (rebaixamento cognitivo crônico)",
          distincao:
            "A obnubilação tem instalação aguda/subaguda e curso flutuante (típica de causas orgânicas agudas); o déficit cognitivo da demência é estável ou lentamente progressivo ao longo de meses/anos, sem a flutuação hora a hora característica do rebaixamento do nível de consciência.",
        },
      ],
      transtornosAssociados: [
        "Delirium (fase inicial ou forma leve)",
        "Encefalopatias metabólicas/tóxicas",
        "Intoxicação e abstinência de substâncias",
      ],
    },
    {
      id: "torpor",
      nome: "Torpor",
      sinonimos: ["Sopor"],
      definicao:
        "Rebaixamento acentuado do nível de consciência, no qual o paciente permanece a maior parte do tempo em sono patológico, despertando apenas com estímulos intensos (verbais enérgicos, dolorosos), com resposta breve, incompleta e desorganizada antes de recair ao sono.",
      caracteristicas: [
        "Sonolência predominante, não fisiológica",
        "Necessita de estímulo vigoroso para despertar",
        "Respostas verbais/motoras breves, lentas e desorganizadas quando desperto",
        "Retorno rápido ao sono assim que o estímulo cessa",
        "Reflexos e funções vegetativas geralmente preservados",
      ],
      exemploClinico:
        "Paciente com encefalopatia hepática que só abre os olhos e resmunga monossílabos após ser chamado em voz alta e sacudido pelo ombro, voltando a 'dormir' assim que a equipe se afasta.",
      diferencialFino: [
        {
          comparadoCom: "Coma",
          distincao:
            "No torpor ainda existe algum grau de despertar e resposta a estímulo, ainda que transitório; no coma não há despertar nem resposta verbal/motora com propósito, mesmo diante de estímulo intenso.",
        },
        {
          comparadoCom: "Estupor catatônico",
          distincao:
            "No torpor a redução da responsividade é por rebaixamento do nível de consciência (causa orgânica); no estupor catatônico o nível de consciência está preservado — o paciente está desperto, mas não inicia movimento/fala voluntário, e frequentemente mantém contato ocular ou resiste ativamente à mobilização passiva.",
        },
      ],
      transtornosAssociados: [
        "Delirium avançado",
        "Encefalopatias metabólicas graves (hepática, urêmica)",
        "Intoxicações exógenas graves",
        "Lesões estruturais do SNC",
      ],
    },
    {
      id: "coma",
      nome: "Coma",
      definicao:
        "Abolição completa da vigília e da consciência: ausência de abertura ocular espontânea ou a estímulo, ausência de resposta verbal e ausência de resposta motora com propósito, mesmo diante de estímulo nociceptivo intenso.",
      caracteristicas: [
        "Sem abertura ocular mesmo a estímulo doloroso",
        "Sem emissão verbal compreensível",
        "Resposta motora ausente ou apenas reflexa/postural (decorticação, descerebração)",
        "Ciclo sono-vigília abolido",
        "Emergência médica — sempre exige investigação e conduta imediatas",
      ],
      exemploClinico:
        "Paciente encontrado irresponsivo, sem abrir os olhos e sem qualquer resposta verbal ou motora localizatória à compressão do leito ungueal, apenas com extensão estereotipada dos membros (postura de descerebração).",
      transtornosAssociados: [
        "Lesões estruturais extensas do SNC (AVC, TCE, hemorragia)",
        "Encefalopatias metabólicas/tóxicas graves",
        "Estado pós-ictal prolongado / estado de mal epiléptico não convulsivo",
      ],
    },
    {
      id: "estado-crepuscular",
      nome: "Estado crepuscular",
      definicao:
        "Estreitamento súbito e transitório do campo da consciência, com preservação aparente (e enganosa) de atividade motora coordenada e comportamento aparentemente dirigido, porém sem contato adequado com o ambiente e amnésia total ou parcial do episódio ao final.",
      caracteristicas: [
        "Início e término abruptos, duração de minutos a horas (raramente dias)",
        "Comportamento automático, aparentemente organizado, mas destituído de propósito real",
        "Estreitamento do campo de consciência — o paciente reage a poucos estímulos do ambiente",
        "Pode cursar com atos violentos ou fuga (fuga dissociativa/epiléptica)",
        "Amnésia lacunar do episódio após a recuperação",
      ],
      exemploClinico:
        "Paciente epiléptico que é encontrado caminhando pela rua a vários quarteirões de casa, vestido de forma incongruente, sem conseguir explicar como chegou ali e sem lembrança do trajeto percorrido.",
      diferencialFino: [
        {
          comparadoCom: "Estado oniroide",
          distincao:
            "No estado crepuscular o comportamento motor é automático e relativamente coordenado, com o paciente parecendo 'funcionar' no ambiente real (ainda que sem registrá-lo); no estado oniroide há imersão em cenário fantástico rico, tipo sonho, com o paciente vivenciando-se como participante de uma cena que não corresponde ao ambiente real, e frequentemente com maior agitação psicomotora associada.",
        },
        {
          comparadoCom: "Fuga dissociativa",
          distincao:
            "Ambos cursam com deambulação e amnésia, mas o estado crepuscular tem base orgânica clássica (ictal/pós-ictal em epilepsia de lobo temporal) e instalação/término mais abruptos; a fuga dissociativa tem gênese psicogênica, associa-se a estressor identificável e pode incluir a assunção transitória de uma nova identidade.",
        },
      ],
      transtornosAssociados: [
        "Epilepsia de lobo temporal (estado pós-ictal ou ictal)",
        "Intoxicação patológica por álcool",
        "Transtornos dissociativos (quando de base não epiléptica)",
      ],
    },
    {
      id: "estado-oniroide",
      nome: "Estado oniroide",
      sinonimos: ["Consciência oniroide"],
      definicao:
        "Alteração da consciência na qual o paciente vivencia um cenário rico, fantástico, tipo sonho (cênico, dramático), no qual se sente participante ativo, com perda da fronteira entre a experiência interna e a realidade externa, geralmente acompanhada de intensa carga afetiva e agitação.",
      caracteristicas: [
        "Vivência cênica, rica em conteúdo fantástico/dramático (guerras, viagens, catástrofes, temas místicos)",
        "Paciente se percebe como personagem ativo dentro do cenário, não apenas espectador",
        "Forte componente afetivo associado (êxtase, pavor)",
        "Amnésia parcial após a resolução, por vezes com lembranças vívidas fragmentadas do conteúdo onírico",
        "Pode se sobrepor a agitação psicomotora intensa",
      ],
      exemploClinico:
        "Paciente em quadro confusional agudo que relata, já recuperado, ter vivido 'uma batalha' durante a internação, na qual lutava contra soldados que invadiam o quarto, tendo se debatido fisicamente com a equipe de enfermagem durante o episódio.",
      transtornosAssociados: [
        "Delirium (sobretudo por abstinência alcoólica — delirium tremens)",
        "Esquizofrenia com sintomatologia aguda florida (mais raro)",
        "Epilepsia de lobo temporal",
      ],
    },
  ],

  referencias: [
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Cheniaux E. Manual de Psicopatologia.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
    "Fish F. Fish's Clinical Psychopathology.",
  ],
};
