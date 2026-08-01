import { DominioPsicopatologico } from "./types";

export const pensamentoConteudo: DominioPsicopatologico = {
  id: "pensamento-conteudo",

  nome: "Transtornos do Pensamento — Conteúdo (Delírios)",

  descricao:
    "O conteúdo do pensamento refere-se àquilo que é pensado — em contraste com o curso e a forma (como o pensamento flui e se estrutura). O delírio, alteração central deste domínio, é classicamente definido pelos critérios de Jaspers: crença falsa, mantida com convicção inabalável, incorrigível por argumentação lógica ou evidência contrária, e incompatível com o contexto sociocultural do indivíduo.",

  achados: [
    {
      id: "delirio-definicao-geral",
      nome: "Delírio (definição geral e critérios de Jaspers)",
      definicao:
        "Juízo (crença) patologicamente falso, sustentado com convicção subjetiva absoluta, não influenciável pela lógica ou pela realidade contrária, e cujo conteúdo é incompatível com a realidade e com o contexto sociocultural e educacional do paciente.",
      caracteristicas: [
        "Convicção inabalável — não cede a contra-argumentação lógica",
        "Certeza subjetiva incomum, desproporcional às evidências disponíveis",
        "Incompatibilidade com o contexto sociocultural (uma crença religiosa compartilhada por um grupo não é, por si só, delirante)",
        "Autorreferência frequente, ainda que não seja um critério obrigatório em todos os temas delirantes",
      ],
      exemploClinico:
        "Paciente que afirma com total convicção que vizinhos instalaram câmeras em sua casa para vigiá-lo, mantendo essa crença mesmo após revista completa do imóvel não encontrar nenhum dispositivo, interpretando a ausência de evidência como prova de que os perseguidores 'são sofisticados demais para deixar rastros'.",
      diferencialFino: [
        {
          comparadoCom: "Ideia sobrevalorizada",
          distincao:
            "A ideia sobrevalorizada é uma crença compreensível dentro da história de vida e personalidade do paciente, sustentada com convicção intensa, mas não absoluta — o paciente ainda consegue, ao menos parcialmente, considerar a possibilidade de estar equivocado, e a crença é psicologicamente compreensível no contexto (ex.: preocupação intensa com peso corporal em transtornos alimentares). O delírio é incorrigível e frequentemente incompreensível a partir da biografia do paciente.",
        },
        {
          comparadoCom: "Obsessão",
          distincao:
            "A obsessão é reconhecida pelo próprio paciente como um pensamento intrusivo, egodistônico e absurdo/exagerado (crítica preservada — o paciente sabe que 'não faz sentido' mas não consegue afastar o pensamento); o delírio é egossintônico e sustentado com convicção de realidade, sem crítica.",
        },
      ],
      transtornosAssociados: [
        "Esquizofrenia",
        "Transtorno Delirante",
        "Episódios de humor com sintomas psicóticos (depressão psicótica, mania psicótica)",
        "Delirium e quadros orgânicos (delírios geralmente menos sistematizados)",
      ],
    },
    {
      id: "delirio-primario-secundario",
      nome: "Delírio primário e delírio secundário",
      definicao:
        "Classificação segundo a origem: o delírio primário (autóctone) surge de forma súbita e incompreensível, sem qualquer conexão com o estado afetivo ou experiência prévia do paciente — é psicologicamente irredutível; o delírio secundário emerge de forma compreensível a partir de outra experiência psíquica anterior (um estado de humor, uma alucinação, ou outra crença).",
      caracteristicas: [
        "Delírio primário: instalação súbita, sem gatilho identificável, incompreensível mesmo em retrospecto a partir da biografia/estado mental do paciente",
        "Delírio secundário: decorre compreensivelmente de outro fenômeno (ex: humor deprimido leva a delírio de culpa/ruína; alucinação auditiva leva à crença delirante de perseguição pelos supostos perseguidores ouvidos)",
        "A percepção delirante (atribuição de significado delirante anômalo a uma percepção real e normal) é considerada uma forma clássica de delírio primário",
      ],
      exemploClinico:
        "Delírio primário: paciente que, sem qualquer evento precipitante identificável, 'simplesmente sabe, de repente', que é o escolhido para salvar a humanidade, ao ver um pássaro pousar em sua janela (percepção delirante). Delírio secundário: paciente com depressão grave que desenvolve a crença de que é responsável pela ruína financeira de toda a família e merece ser punido, compreensível a partir do humor profundamente deprimido e da culpa patológica presentes.",
      diferencialFino: [
        {
          comparadoCom: "Percepção delirante",
          distincao:
            "A percepção delirante é um subtipo específico de delírio primário: uma percepção normal e correta (o objeto é percebido corretamente) recebe um significado delirante autorreferente e sem nexo lógico (ex: 'o semáforo ficou vermelho, logo eu sou o Messias'). A percepção em si está intacta — o que é patológico é o significado atribuído a ela.",
        },
      ],
      transtornosAssociados: [
        "Delírio primário: mais característico e específico de Esquizofrenia",
        "Delírio secundário: transtornos do humor com sintomas psicóticos, quadros orgânicos, outras psicoses",
      ],
    },
    {
      id: "delirio-persecutorio",
      nome: "Delírio persecutório",
      definicao:
        "Crença delirante de que o indivíduo está sendo perseguido, vigiado, prejudicado, enganado ou conspirado contra por outra(s) pessoa(s), grupo(s) ou organização(ões).",
      caracteristicas: [
        "Tema delirante mais comum na prática clínica, transversal a diversos diagnósticos",
        "Pode ser sistematizado (elaborado, coerente internamente, envolvendo um plano organizado) ou não sistematizado (fragmentado, mutável, incoerente)",
        "Frequentemente acompanhado de comportamento defensivo/evitativo compatível com a crença",
      ],
      exemploClinico:
        "Paciente que troca de rota diariamente para o trabalho, acreditando que está sendo seguido por agentes de uma organização que deseja prejudicá-lo, e que interpreta carros parados na rua como parte da vigilância.",
      transtornosAssociados: [
        "Esquizofrenia",
        "Transtorno Delirante, tipo persecutório",
        "Transtorno por Uso de Substâncias (intoxicação por estimulantes)",
        "Transtorno Neurocognitivo Maior (formas simples, não sistematizadas)",
      ],
    },
    {
      id: "delirio-grandeza",
      nome: "Delírio de grandeza (megalomaníaco)",
      definicao:
        "Crença delirante de possuir poder, talento, conhecimento, riqueza ou identidade excepcionais, muito superiores à realidade objetiva do indivíduo.",
      caracteristicas: [
        "Congruente com o humor em episódios maníacos (eleva a autoestima já patologicamente inflada)",
        "Pode envolver identidades específicas (religiosas, históricas, de celebridades) ou capacidades extraordinárias atribuídas a si mesmo",
      ],
      exemploClinico:
        "Paciente em episódio maníaco que afirma ter descoberto a cura definitiva para o câncer e estar prestes a ser convocado pela ONU para apresentar sua descoberta ao mundo.",
      diferencialFino: [
        {
          comparadoCom: "Autoestima elevada não delirante da mania/hipomania",
          distincao:
            "A autoestima inflada da (hipo)mania sem psicose é um exagero compreensível da autoconfiança habitual, ainda passível de alguma ponderação/relativização pelo paciente; o delírio de grandeza é uma crença fixa e específica (ex: uma identidade ou capacidade concreta), mantida com convicção absoluta e sem qualquer abertura à contestação.",
        },
      ],
      transtornosAssociados: [
        "Episódio Maníaco com sintomas psicóticos congruentes com o humor",
        "Esquizofrenia",
        "Transtorno Delirante, tipo grandioso",
      ],
    },
    {
      id: "delirio-ciume",
      nome: "Delírio de ciúme (Síndrome de Otelo)",
      definicao:
        "Crença delirante de que o cônjuge ou parceiro é infiel, mantida sem evidência adequada e não corrigível por esclarecimentos ou provas em contrário.",
      caracteristicas: [
        "Frequentemente leva a comportamentos de verificação repetitiva (revistar pertences, checar celular, seguir o parceiro)",
        "Associado a risco elevado de violência interpessoal — deve ser sempre ativamente rastreado quanto a risco de agressão contra o parceiro",
        "Classicamente descrito em associação com uso crônico de álcool",
      ],
      exemploClinico:
        "Paciente que acusa reiteradamente o cônjuge de manter um caso extraconjugal, baseando-se em 'evidências' como o cônjuge ter chegado cinco minutos atrasado do trabalho, e que já revistou o celular do parceiro dezenas de vezes sem encontrar nada.",
      transtornosAssociados: [
        "Transtorno por Uso de Álcool (associação clássica)",
        "Transtorno Delirante, tipo ciumento",
        "Esquizofrenia",
      ],
    },
    {
      id: "delirio-niilista-cotard",
      nome: "Delírio niilista (Síndrome de Cotard)",
      definicao:
        "Crença delirante de negação da própria existência, de órgãos do corpo, ou mesmo do mundo externo — o paciente pode acreditar estar morto, apodrecendo, sem órgãos internos, ou que o mundo deixou de existir.",
      caracteristicas: [
        "Tipicamente associado a depressão grave com sintomas psicóticos",
        "Pode se acompanhar de negação de necessidades básicas (recusa alimentar, por acreditar já estar morto e não precisar comer)",
        "Risco elevado — recusa alimentar/hídrica e risco de suicídio devem ser sempre avaliados ativamente",
      ],
      exemploClinico:
        "Paciente idoso com depressão grave que afirma estar morto e em processo de decomposição, recusando-se a comer porque 'os mortos não precisam de comida'.",
      transtornosAssociados: [
        "Depressão Maior com sintomas psicóticos (associação clássica)",
        "Transtorno Neurocognitivo Maior",
        "Esquizofrenia (mais raro)",
      ],
    },
    {
      id: "delirio-erotomaniaco",
      nome: "Delírio erotomaníaco (Síndrome de De Clérambault)",
      definicao:
        "Crença delirante de que outra pessoa, tipicamente de status social mais elevado ou inatingível, está apaixonada pelo paciente, apesar da ausência de qualquer evidência real de reciprocidade e frequentemente diante de negativas explícitas do suposto pretendente.",
      caracteristicas: [
        "O 'objeto' do delírio costuma ser uma figura pública, socialmente distante ou inacessível",
        "Comportamentos de aproximação/perseguição do objeto do delírio são comuns (relevância médico-legal)",
        "Ambivalência típica: recusas do objeto do delírio são reinterpretadas como 'provas' de amor secreto ou de obstáculos externos ao relacionamento",
      ],
      exemploClinico:
        "Paciente convicta de que um apresentador de televisão está apaixonado por ela e se comunica secretamente através de gestos durante o programa, interpretando qualquer negativa pública dele como uma encenação para 'despistar' terceiros.",
      transtornosAssociados: [
        "Transtorno Delirante, tipo erotomaníaco",
        "Esquizofrenia",
      ],
    },
    {
      id: "mecanismos-delirantes",
      nome: "Mecanismos formadores do delírio",
      definicao:
        "Os processos psicológicos pelos quais o conteúdo delirante se estrutura na mente do paciente — úteis para caracterizar não apenas o tema, mas a maneira como a crença se formou e se sustenta.",
      caracteristicas: [
        "Interpretativo: atribuição de significado delirante a fatos reais, corretamente percebidos, mas interpretados de forma anômala (ex: 'o carteiro passou duas vezes hoje, logo estão me vigiando')",
        "Alucinatório: o delírio se constrói a partir do conteúdo de alucinações (ex: crença de perseguição a partir de vozes que ameaçam o paciente)",
        "Intuitivo: a crença surge de forma súbita, como uma certeza repentina, sem qualquer elaboração perceptiva ou interpretativa prévia identificável",
        "Imaginativo: o delírio se elabora a partir de produções da fantasia/imaginação, com conteúdo fantasioso e por vezes mutável",
      ],
      exemploClinico:
        "Mecanismo interpretativo: paciente que, ao ver dois desconhecidos conversando e olhando brevemente em sua direção na rua, conclui com certeza absoluta que estavam planejando sequestrá-lo.",
      transtornosAssociados: [
        "Esquizofrenia",
        "Transtorno Delirante",
      ],
    },
  ],

  referencias: [
    "Jaspers K. Psicopatologia Geral.",
    "Dalgalarrondo P. Psicopatologia e Semiologia dos Transtornos Mentais.",
    "Sims A. Symptoms in the Mind: An Introduction to Descriptive Psychopathology.",
    "American Psychiatric Association (APA). DSM-5-TR.",
  ],
};
