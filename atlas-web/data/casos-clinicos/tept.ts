import { CasoClinico } from "./types";

export const tept: CasoClinico = {
  id: "tept",

  titulo: "Toda buzina parece o estampido daquela noite",

  categoria: "Transtornos Relacionados a Trauma e a Estressores",

  apresentacaoInicial:
    "Paciente do sexo masculino, 34 anos, motorista de aplicativo, procura atendimento a pedido da esposa. Há 3 meses, durante uma corrida noturna, foi vítima de assalto à mão armada: o assaltante apontou a arma para sua cabeça e ameaçou atirar antes de fugir com o carro. Não houve lesão física. Desde então, relata pesadelos recorrentes reproduzindo a cena, evita trabalhar à noite e, quando ouve um som semelhante a um estampido ou mesmo uma buzina mais forte, 'revive' o momento por alguns segundos, com coração acelerado e mãos tremendo, e diz precisar 'se lembrar de que já passou'. Fica constantemente checando o retrovisor e se assusta com facilidade. Afirma dormir mal e ter se tornado mais irritado com a esposa e os filhos, o que não era seu padrão anterior. Nega qualquer sintoma psiquiátrico antes do assalto.",

  noInicialId: "etapa-1",

  nos: [
    {
      id: "etapa-1",
      narrativaAdicional:
        "Ao descrever um desses episódios diante de uma buzina forte, o paciente completa: 'por alguns segundos foi bizarro, foi como se o mundo ao redor não fosse real, como se eu estivesse vendo tudo de fora, meio de longe'.",
      pergunta:
        "Como classificar o fenômeno de 'reviver' o momento do assalto diante de um estímulo semelhante (som de buzina/estampido), incluindo a sensação transitória de que 'o mundo ao redor não era real'?",
      opcoes: [
        {
          texto:
            "Reação dissociativa de reexperienciação (flashback), com elemento de desrealização associado",
          correta: true,
          explicacao:
            "Correto. A reexperienciação vívida do evento traumático diante de um estímulo que o lembra — como se estivesse acontecendo novamente — é classicamente descrita nos critérios diagnósticos de TEPT como uma reação dissociativa (flashback). A sensação transitória de que o ambiente ao redor 'não era real' é uma desrealização associada, achado que compõe o especificador 'com sintomas dissociativos' do TEPT quando presente de forma mais proeminente.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Alucinação auditiva, já que o paciente reage como se ouvisse o tiro novamente",
          correta: false,
          explicacao:
            "Não há relato de percepção sensorial sem estímulo correspondente (não há um som sendo criado pela mente na ausência de estímulo real) — há, sim, uma reação intensa e vívida desencadeada por um estímulo real (a buzina), reproduzindo a memória traumática. Isso é reexperienciação/flashback, não alucinação.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Delírio de referência relacionado ao trauma",
          correta: false,
          explicacao:
            "Delírio é uma crença fixa e falsa; aqui não há uma crença errônea sobre o significado do estímulo (o paciente sabe que é apenas uma buzina), mas sim uma reação emocional e fisiológica intensa desencadeada pela associação com a memória traumática, com crítica preservada sobre o que está acontecendo.",
          proximoNoId: "etapa-2",
        },
        {
          texto: "Simulação de sintomas para justificar afastamento do trabalho noturno",
          correta: false,
          explicacao:
            "Não há elementos no caso que sugiram simulação — a apresentação (reexperienciação, evitação, hipervigilância, alteração de humor) é consistente e coerente com o quadro clínico esperado após exposição a evento traumático, iniciando após o evento identificável e sem qualquer indício de ganho secundário evidente.",
          proximoNoId: "etapa-2",
        },
      ],
    },
    {
      id: "etapa-2",
      pergunta:
        "Os sintomas persistem, sem melhora, há 3 meses desde o assalto. Do ponto de vista da classificação diagnóstica, qual é a principal implicação desse tempo de evolução?",
      opcoes: [
        {
          texto:
            "Ultrapassa a janela de 1 mês que define o Transtorno de Estresse Agudo, tornando o Transtorno de Estresse Pós-Traumático (TEPT) o diagnóstico apropriado para esse padrão de sintomas persistentes",
          correta: true,
          explicacao:
            "Correto. O Transtorno de Estresse Agudo compartilha a mesma sintomatologia central do TEPT, mas por definição ocorre entre 3 dias e 1 mês após o evento traumático. Sintomas que persistem além de 1 mês, como neste caso (3 meses), reclassificam o quadro como TEPT, desde que os critérios de gravidade e os demais clusters sintomáticos (reexperienciação, evitação, alterações negativas de cognição/humor, hiperativação) estejam presentes.",
          proximoNoId: "etapa-3",
        },
        {
          texto:
            "Não tem nenhuma implicação diagnóstica relevante, já que ambos os quadros são tratados exatamente da mesma forma",
          correta: false,
          explicacao:
            "Embora as abordagens terapêuticas de primeira linha sejam semelhantes (psicoterapias focadas no trauma), a distinção temporal tem implicação diagnóstica direta — é o que diferencia formalmente Transtorno de Estresse Agudo de TEPT — e também prognóstica, já que a persistência além de 1 mês indica menor chance de remissão espontânea.",
          proximoNoId: "etapa-3",
        },
        {
          texto:
            "Indica que o quadro provavelmente evoluirá para um transtorno de personalidade, dada a cronificação dos sintomas",
          correta: false,
          explicacao:
            "A persistência de sintomas por 3 meses após um evento traumático agudo e identificável não indica evolução para transtorno de personalidade — TEPT é, por definição, ligado a um evento específico, enquanto transtornos de personalidade envolvem um padrão de funcionamento persistente desde o início da vida adulta, sem essa relação causal com um evento único.",
          proximoNoId: "etapa-3",
        },
        {
          texto:
            "Descarta automaticamente a possibilidade de resposta a tratamento, já que os sintomas já se tornaram crônicos",
          correta: false,
          explicacao:
            "TEPT com 3 meses de evolução ainda responde bem a tratamento de primeira linha (psicoterapia focada no trauma, com ou sem farmacoterapia); tratamento eficaz permanece indicado mesmo quando os sintomas já ultrapassaram a fase aguda, e não deve ser visto como 'tarde demais' para intervir.",
          proximoNoId: "etapa-3",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta:
        "Considerando o conjunto do quadro — reexperienciação (flashbacks, pesadelos), evitação de trabalhar à noite, hipervigilância (checar o retrovisor constantemente, sobressalto fácil) e irritabilidade com a família, todos iniciados após o assalto e persistindo há 3 meses — qual é a hipótese diagnóstica mais provável?",
      opcoes: [
        {
          texto: "Transtorno de Estresse Pós-Traumático (TEPT)",
          correta: true,
          explicacao:
            "Correto. O caso reúne representantes dos quatro clusters sintomáticos exigidos para o diagnóstico de TEPT: reexperienciação (flashbacks diante de estímulos, pesadelos), evitação (recusar trabalhar à noite), alterações negativas em cognição/humor (afastamento da família, mudança de temperamento) e hiperativação/reatividade (hipervigilância ao dirigir, sobressalto exagerado, irritabilidade) — todos iniciados após exposição a evento que preenche o critério de trauma (ameaça de morte com arma de fogo) e persistindo além de 1 mês.",
          proximoNoId: "etapa-4",
        },
        {
          texto: "Transtorno de Pânico, com crises desencadeadas por sons específicos",
          correta: false,
          explicacao:
            "As crises de ansiedade aqui têm um gatilho identificável e diretamente ligado à memória do trauma (sons semelhantes ao momento do assalto), e vêm acompanhadas de reexperienciação vívida do evento — diferente do Transtorno de Pânico, em que as crises são tipicamente inesperadas e não ligadas a uma memória traumática específica revivida no momento.",
          proximoNoId: "etapa-4",
        },
        {
          texto:
            "Transtorno de Ansiedade Generalizada, desencadeado pelo estresse do trabalho como motorista",
          correta: false,
          explicacao:
            "O TAG se caracteriza por preocupação excessiva e generalizada sobre múltiplos domínios da vida, sem a ligação causal específica a um evento traumático nem os sintomas nucleares de reexperienciação e evitação de lembretes de um evento index — o quadro aqui é claramente ancorado no assalto específico, não uma preocupação difusa.",
          proximoNoId: "etapa-4",
        },
        {
          texto: "Transtorno Depressivo Maior, secundário à mudança de rotina após o assalto",
          correta: false,
          explicacao:
            "Embora haja irritabilidade e afastamento, que também podem ocorrer na depressão, o quadro é dominado por sintomas nucleares específicos de TEPT (flashbacks, evitação ativa de gatilhos, hipervigilância) que não fazem parte do quadro clássico de um episódio depressivo maior — a comorbidade entre os dois é comum, mas os sintomas apresentados aqui apontam primariamente para TEPT.",
          proximoNoId: "etapa-4",
        },
      ],
    },
    {
      id: "etapa-4",
      narrativaAdicional:
        "Um colega comenta: 'isso parece só uma depressão reativa ao assalto, é só tratar como depressão mesmo e vai passar'.",
      pergunta: "Como responder a essa afirmação do colega?",
      opcoes: [
        {
          texto:
            "Depressão é uma comorbidade frequente do TEPT e deve ser rastreada, mas os sintomas nucleares de reexperienciação, evitação e hiperativação exigem reconhecimento e abordagem terapêutica específicas voltadas ao trauma, não apenas o tratamento genérico de um quadro depressivo",
          correta: true,
          explicacao:
            "Correto. Transtorno Depressivo Maior é a comorbidade mais frequente do TEPT e deve sempre ser ativamente rastreada, mas tratar o quadro apenas como 'depressão reativa' deixaria de endereçar os sintomas nucleares do TEPT (flashbacks, evitação, hipervigilância), que respondem melhor a intervenções específicas voltadas ao processamento do trauma (ex: Terapia de Processamento Cognitivo, Exposição Prolongada, EMDR) do que a um tratamento antidepressivo genérico isolado.",
          proximoNoId: "etapa-5",
        },
        {
          texto:
            "O colega está certo: tratando a depressão associada, os sintomas de reexperienciação e evitação tendem a desaparecer por conta própria",
          correta: false,
          explicacao:
            "Sintomas nucleares de TEPT (flashbacks, evitação ativa, hipervigilância) não desaparecem de forma confiável apenas com o tratamento de sintomas depressivos associados — respondem mais especificamente a psicoterapias focadas no processamento do trauma, que devem ser consideradas parte central do plano terapêutico, não uma consequência automática do tratamento antidepressivo.",
          proximoNoId: "etapa-5",
        },
        {
          texto:
            "O diagnóstico de depressão exclui a possibilidade de TEPT concomitante, sendo necessário escolher apenas um dos dois",
          correta: false,
          explicacao:
            "TEPT e Transtorno Depressivo Maior podem e frequentemente coexistem como diagnósticos concomitantes — não são mutuamente exclusivos, e ambos devem ser identificados e considerados no plano terapêutico quando presentes.",
          proximoNoId: "etapa-5",
        },
        {
          texto:
            "Não há necessidade de diferenciar os diagnósticos, já que toda a psicoterapia disponível trata os dois quadros da mesma forma",
          correta: false,
          explicacao:
            "As psicoterapias com maior evidência para TEPT são especificamente focadas no processamento do trauma (exposição, reestruturação cognitiva do trauma, EMDR), com técnicas e alvos terapêuticos distintos das abordagens padrão para depressão isolada — a diferenciação diagnóstica orienta a escolha da intervenção mais eficaz.",
          proximoNoId: "etapa-5",
        },
      ],
    },
    {
      id: "etapa-5",
      pergunta:
        "Qual é a abordagem terapêutica de primeira linha mais apropriada para este paciente?",
      opcoes: [
        {
          texto:
            "Psicoterapia focada no trauma (ex: Terapia de Processamento Cognitivo, Exposição Prolongada ou EMDR) como primeira linha, com ISRS (sertralina ou paroxetina) como opção farmacológica de primeira linha quando indicado, evitando benzodiazepínicos como tratamento primário",
          correta: true,
          explicacao:
            "Correto. As psicoterapias focadas no trauma têm o maior corpo de evidência para TEPT e são consideradas primeira linha. Entre os fármacos, sertralina e paroxetina têm aprovação regulatória específica para TEPT e são as opções farmacológicas de primeira escolha quando a farmacoterapia é indicada (isoladamente ou associada à psicoterapia). Benzodiazepínicos devem ser evitados como tratamento primário: não reduzem os sintomas nucleares do TEPT e podem interferir no processo de extinção do medo durante a exposição terapêutica, além do risco de dependência em um quadro que tende a ter curso prolongado.",
          proximoNoId: "fim",
        },
        {
          texto:
            "Benzodiazepínico de uso regular como tratamento central, para controle rápido da hipervigilância e da irritabilidade",
          correta: false,
          explicacao:
            "Benzodiazepínicos não são recomendados como tratamento primário do TEPT: não tratam os sintomas nucleares do transtorno e há evidência de que podem prejudicar a resposta a psicoterapias baseadas em exposição, além do risco de uso prolongado e dependência.",
          proximoNoId: "fim",
        },
        {
          texto:
            "Apenas orientações gerais de manejo de estresse, sem indicação de psicoterapia estruturada ou farmacoterapia neste momento",
          correta: false,
          explicacao:
            "TEPT estabelecido com 3 meses de evolução e prejuízo funcional (afastamento do trabalho noturno, impacto no relacionamento familiar) tem indicação de tratamento ativo estruturado — psicoterapia focada no trauma e, quando indicado, farmacoterapia — e não deve ser conduzido apenas com orientações gerais inespecíficas.",
          proximoNoId: "fim",
        },
        {
          texto:
            "Antipsicótico em dose baixa como monoterapia, pela intensidade dos sintomas de hipervigilância",
          correta: false,
          explicacao:
            "Antipsicóticos não são tratamento de primeira linha para TEPT; podem ter uso pontual e adjuvante em casos refratários ou com sintomas específicos mais graves, mas não substituem a psicoterapia focada no trauma nem os ISRS como abordagem inicial.",
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
    "Transtorno de Estresse Pós-Traumático (TEPT), com sintomas dissociativos associados (desrealização durante episódios de reexperienciação), após assalto à mão armada há 3 meses.",

  diagnosticoId: "tept",

  medicamentosRelacionados: ["sertralina", "paroxetina"],

  achadosPsicopatologicos: [{ dominioId: "consciencia-do-eu", achadoId: "desrealizacao" }],

  pontosDeEnsino: [
    "TEPT exige a combinação de quatro clusters de sintomas após exposição a evento traumático: reexperienciação, evitação, alterações negativas em cognição/humor e hiperativação/reatividade, persistentes por mais de 1 mês — antes desse prazo, o diagnóstico apropriado é Transtorno de Estresse Agudo.",
    "Flashbacks são classificados como reações dissociativas de reexperienciação, podendo vir acompanhados de desrealização/despersonalização — quando esses sintomas dissociativos são proeminentes, o TEPT recebe o especificador 'com sintomas dissociativos'.",
    "Depressão é a comorbidade mais frequente do TEPT, mas não deve ser tratada como se fosse o quadro central quando os sintomas nucleares de reexperienciação, evitação e hiperativação estão presentes — esses respondem melhor a psicoterapias especificamente focadas no processamento do trauma.",
    "Psicoterapias focadas no trauma (Terapia de Processamento Cognitivo, Exposição Prolongada, EMDR) são a primeira linha de tratamento; sertralina e paroxetina são as opções farmacológicas de primeira escolha quando indicada farmacoterapia.",
    "Benzodiazepínicos devem ser evitados como tratamento primário do TEPT — não tratam os sintomas nucleares e podem prejudicar a resposta a psicoterapias de exposição.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR.",
    "APA Clinical Practice Guideline for the Treatment of PTSD.",
    "NICE Guideline NG116 - Post-traumatic stress disorder.",
    "VA/DoD Clinical Practice Guideline for PTSD.",
  ],
};
