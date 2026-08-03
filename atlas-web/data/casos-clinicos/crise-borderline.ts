import { CasoClinico } from "./types";

export const criseBorderline: CasoClinico = {
  id: "crise-borderline",

  titulo: "Se ele me deixar, eu não sei o que vou fazer",

  categoria: "Transtornos de Personalidade",

  apresentacaoInicial:
    "Paciente do sexo feminino, 24 anos, trazida ao pronto-socorro pela colega de quarto após ter feito diversos cortes superficiais no antebraço com uma lâmina, poucas horas depois de o namorado (relacionamento de 3 meses) dizer que 'precisava de um tempo'. A colega relata que os relacionamentos da paciente costumam ser assim: 'no começo ela diz que é o amor da vida dela, perfeito, e depois de um tempo vira uma decepção completa, uma traição — isso se repete direto, desde que a conheço, uns 6 anos'. Durante a entrevista, a paciente chora copiosamente ao falar do namorado, ri de forma breve ao comentar algo sobre a colega, e minutos depois fica irritada e ríspida com uma pergunta neutra do entrevistador. Diz: 'quando ele falou aquilo, senti que ia morrer, era insuportável, eu me cortei pra sentir alguma coisa diferente daquela dor'. Nega intenção de morrer com os cortes de hoje, mas relata uma tentativa de overdose medicamentosa há 2 anos, também após término de relacionamento. Refere ainda sensação de vazio 'que nunca passa, desde muito nova'.",

  etapas: [
    {
      id: "etapa-1",
      pergunta:
        "Como classificar a alternância rápida entre choro intenso, riso breve e irritação franca observada dentro da mesma entrevista, aparentemente desproporcional aos estímulos que a desencadeiam?",
      opcoes: [
        {
          texto: "Labilidade afetiva",
          correta: true,
          explicacao:
            "Correto. Mudança rápida, abrupta e desproporcional do afeto expresso, oscilando em minutos e frequentemente em resposta a estímulos mínimos — descrição clássica de labilidade afetiva, um achado fortemente associado ao Transtorno de Personalidade Borderline (embora também presente em quadros maníacos/mistos).",
        },
        {
          texto: "Incongruência afetiva",
          correta: false,
          explicacao:
            "A incongruência afetiva é a discordância entre o afeto expresso e o conteúdo simultâneo do discurso (ex: rir ao relatar algo trágico) — aqui cada afeto expresso é coerente com o assunto do momento (chora ao falar do namorado, irrita-se com a pergunta); o que chama atenção é a velocidade e amplitude da oscilação entre eles, não a incoerência entre afeto e conteúdo.",
        },
        {
          texto: "Embotamento afetivo",
          correta: false,
          explicacao:
            "Embotamento é a redução da amplitude e intensidade da expressão emocional — exatamente o oposto do que está sendo descrito, que é uma expressão emocional intensa e mutável.",
        },
        {
          texto: "Alexitimia",
          correta: false,
          explicacao:
            "Alexitimia é a dificuldade em identificar e verbalizar os próprios estados emocionais. A paciente aqui expressa e nomeia suas emoções com bastante clareza ('senti que ia morrer') — o problema não é reconhecer o afeto, é a instabilidade e intensidade dele.",
        },
      ],
    },
    {
      id: "etapa-2",
      pergunta:
        "O corte no antebraço ocorreu poucas horas depois do término do relacionamento, sem planejamento prévio identificável, descrito pela própria paciente como uma forma de 'sentir alguma coisa diferente daquela dor'. Além de exigir avaliação de risco imediata (etapa a seguir), qual termo semiológico descreve melhor esse tipo de ato motor complexo, súbito e desencadeado por sofrimento intenso?",
      opcoes: [
        {
          texto: "Impulsividade / ato impulsivo (raptus)",
          correta: true,
          explicacao:
            "Correto. Execução súbita, sem planejamento nem deliberação prévia, de um ato motor complexo e potencialmente autolesivo, desencadeado por sofrimento emocional agudo e vivenciado como um alívio ou uma forma de regulação — é a descrição clássica de impulsividade/raptus, achado fortemente associado ao Transtorno de Personalidade Borderline.",
        },
        {
          texto: "Compulsão",
          correta: false,
          explicacao:
            "Compulsão é um ato repetitivo realizado segundo regras rígidas para reduzir a ansiedade gerada por uma obsessão (pensamento intrusivo egodistônico) — não há relato de pensamento obsessivo antecedente nem de ritual repetitivo regrado; o ato aqui é súbito e reativo a um estressor interpessoal agudo.",
        },
        {
          texto: "Maneirismo",
          correta: false,
          explicacao:
            "Maneirismo é um movimento voluntário normal executado de forma peculiar ou exagerada, mantendo alguma finalidade social reconhecível — não descreve um ato autolesivo súbito desencadeado por sofrimento emocional.",
        },
        {
          texto: "Automatismo",
          correta: false,
          explicacao:
            "Automatismo descreve comportamento motor executado sem controle voluntário consciente, tipicamente em contexto de rebaixamento/estreitamento da consciência (ex: crise epiléptica). Aqui a paciente relata com clareza a motivação subjetiva do ato — não há alteração do nível de consciência envolvida.",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta:
        "Diante do padrão relatado pela colega de quarto (relacionamentos intensos alternando idealização e desvalorização há cerca de 6 anos), da labilidade afetiva, do vazio crônico 'desde muito nova' e da autolesão recorrente desencadeada por medo de abandono, qual das opções abaixo é a hipótese diagnóstica mais provável?",
      opcoes: [
        {
          texto: "Transtorno de Personalidade Borderline",
          correta: true,
          explicacao:
            "Correto. O padrão persistente e generalizado de instabilidade nos relacionamentos (idealização/desvalorização), na autoimagem (vazio crônico) e nos afetos (labilidade), associado a impulsividade autolesiva desencadeada por medo de abandono, presente desde o início da vida adulta e em múltiplos relacionamentos ao longo de anos, preenche o núcleo dos critérios diagnósticos do DSM-5-TR para Transtorno de Personalidade Borderline — não apenas o episódio agudo de hoje.",
        },
        {
          texto: "Episódio Depressivo Maior isolado",
          correta: false,
          explicacao:
            "Um Episódio Depressivo Maior isolado não explica o padrão de longa data de relacionamentos instáveis alternando idealização e desvalorização, nem a reatividade extrema e rápida do humor a gatilhos interpessoais específicos — a depressão maior cursa tipicamente com humor deprimido mais sustentado ao longo do dia, na maior parte dos dias, por pelo menos 2 semanas, e não com essa reatividade abrupta ligada a eventos relacionais pontuais. Comorbidade depressiva é comum no TPB, mas não explica o quadro todo.",
        },
        {
          texto: "Transtorno Bipolar tipo II, em episódio hipomaníaco",
          correta: false,
          explicacao:
            "É um diferencial clássico e frequentemente confundido com o TPB, mas a distinção-chave é a reatividade situacional e a duração: no TPB a instabilidade do humor é reativa a gatilhos interpessoais identificáveis e dura horas; num episódio hipomaníaco há um período distinto e sustentado (mínimo de 4 dias) de humor elevado/irritável com sintomas associados (aumento de energia, diminuição da necessidade de sono, grandiosidade), relativamente independente de eventos relacionais pontuais — não é o que está descrito aqui.",
        },
        {
          texto: "Transtorno de Estresse Agudo",
          correta: false,
          explicacao:
            "O Transtorno de Estresse Agudo exige exposição a um evento traumático específico (morte, violência ou lesão grave, real ou ameaçada) com sintomas intrusivos, dissociativos, de evitação e hiperexcitação começando após esse evento — um término de relacionamento não preenche o critério de evento traumático exigido, e o padrão relacional descrito é de longa data, não um quadro reativo circunscrito a um único estressor recente.",
        },
      ],
    },
    {
      id: "etapa-4",
      narrativaAdicional:
        "O residente de plantão comenta: 'já que isso é só o jeito de personalidade dela, acho que não precisa aprofundar tanto a avaliação de risco — é mais uma questão comportamental'.",
      pergunta:
        "Antes de qualquer consideração diagnóstica sobre transtorno de personalidade, qual é a conduta correta diante da autolesão atual e da história de tentativa de suicídio prévia?",
      opcoes: [
        {
          texto:
            "Avaliação completa e estruturada do risco de suicídio (ideação, plano, intenção, acesso a meios, fatores de risco e proteção), sem minimizar a gravidade por atribuí-la 'apenas' a um padrão de personalidade",
          correta: true,
          explicacao:
            "Correto. O comentário do residente ilustra um erro comum e perigoso: atribuir a autolesão a 'traço de personalidade' não reduz o risco real — pacientes com Transtorno de Personalidade Borderline têm taxa de suicídio consumado estimada em torno de 8-10%, e a autolesão recorrente é, por si só, um dos principais preditores de suicídio futuro. Toda autolesão e toda ideação/tentativa prévia exigem avaliação de risco completa e ativa, independentemente da hipótese diagnóstica de base.",
        },
        {
          texto:
            "Não aprofundar a avaliação de risco agora, já que os cortes foram superficiais e a paciente nega intenção de morrer hoje",
          correta: false,
          explicacao:
            "A negação de intenção suicida no episódio atual não dispensa a avaliação de risco — é preciso investigar ativamente ideação, plano, acesso a meios letais e, sobretudo, considerar a tentativa de overdose há 2 anos como fator de risco relevante para comportamento suicida futuro. Minimizar por 'ser só corte superficial' é exatamente o erro a evitar.",
        },
        {
          texto:
            "Concordar com o residente: como é um padrão de personalidade, o foco deve ser exclusivamente comportamental, sem avaliação formal de risco neste momento",
          correta: false,
          explicacao:
            "Esse raciocínio reproduz um viés perigoso e amplamente descrito na literatura: equipes de saúde por vezes minimizam o risco de pacientes com TPB por rotularem a autolesão como 'manipulação' ou 'traço', quando na verdade ela é um marcador robusto de risco de suicídio que exige avaliação e manejo tão sérios quanto em qualquer outro contexto clínico.",
        },
        {
          texto:
            "Encaminhar para alta imediata com retorno ambulatorial agendado, sem avaliação de risco no pronto-socorro",
          correta: false,
          explicacao:
            "Alta sem avaliação de risco estruturada é inadequada diante de autolesão aguda associada a história de tentativa de suicídio prévia — o momento da crise no pronto-socorro é exatamente quando essa avaliação precisa ocorrer, antes de qualquer decisão sobre desfecho (alta, observação ou internação).",
        },
      ],
    },
    {
      id: "etapa-5",
      narrativaAdicional:
        "Após a avaliação de risco (sem indicação de internação involuntária), a paciente e a família perguntam qual é o melhor tratamento a seguir.",
      pergunta:
        "Qual é a abordagem terapêutica de primeira linha para o Transtorno de Personalidade Borderline confirmado?",
      opcoes: [
        {
          texto:
            "Psicoterapia estruturada baseada em evidência como pilar central do tratamento — com a Terapia Comportamental Dialética (DBT) como a modalidade com maior corpo de evidência —, reservando a farmacoterapia a um papel adjuvante e sintomático",
          correta: true,
          explicacao:
            "Correto. Diferente da maioria dos transtornos psiquiátricos maiores, não existe medicação aprovada especificamente para o Transtorno de Personalidade Borderline. O tratamento de primeira linha é psicoterapia estruturada — a DBT (com seus módulos de mindfulness, tolerância ao mal-estar, regulação emocional e efetividade interpessoal) é a modalidade com maior evidência acumulada, com alternativas eficazes como Terapia Focada em Esquemas, Terapia Baseada em Mentalização (MBT) e Terapia Focada na Transferência (TFP). Farmacoterapia pode ser usada pontualmente para sintomas-alvo específicos, mas não deve ser o eixo do tratamento nem levar à polifarmácia.",
        },
        {
          texto:
            "Estabilizador de humor em dose plena como tratamento central, com psicoterapia apenas como complemento opcional",
          correta: false,
          explicacao:
            "Inverte a hierarquia terapêutica correta: não há medicação (incluindo estabilizadores de humor) aprovada como tratamento central do TPB. A psicoterapia estruturada é o pilar do tratamento; a farmacoterapia, quando usada, é adjuvante e direcionada a sintomas-alvo específicos, não o eixo principal da conduta.",
        },
        {
          texto:
            "Antipsicótico em dose plena e contínua como monoterapia de manutenção",
          correta: false,
          explicacao:
            "Antipsicóticos podem ter uso pontual para sintomas específicos (ex: sintomas psicóticos transitórios sob estresse), mas não são indicados como monoterapia de manutenção do TPB — não substituem a psicoterapia estruturada, que é a intervenção com maior evidência de eficácia sustentada.",
        },
        {
          texto:
            "Nenhum tratamento específico é indicado, pois traços de personalidade não respondem a intervenção clínica",
          correta: false,
          explicacao:
            "É um equívoco com implicações graves. Ao contrário da visão histórica de curso inevitavelmente crônico e refratário, estudos longitudinais (como o McLean Study of Adult Development) mostram que a maioria dos pacientes com TPB atinge remissão sintomática sustentada com tratamento adequado — a psicoterapia baseada em evidência tem impacto real e mensurável.",
        },
      ],
    },
  ],

  diagnosticoFinal:
    "Transtorno de Personalidade Borderline, com episódio atual de autolesão não suicida desencadeado por medo de abandono/rompimento de relacionamento, em paciente com história prévia de tentativa de suicídio.",

  diagnosticoId: "personalidade-borderline",

  achadosPsicopatologicos: [
    { dominioId: "afetividade-humor", achadoId: "labilidade-afetiva" },
    {
      dominioId: "psicomotricidade",
      achadoId: "impulsividade-atos-impulsivos",
    },
  ],

  pontosDeEnsino: [
    "Transtorno de Personalidade Borderline não deve ser diagnosticado com base em um único episódio de crise: o DSM-5-TR exige um padrão persistente, inflexível e estável desde o início da idade adulta, presente em múltiplos contextos e relacionamentos — a história longitudinal (aqui, fornecida pela colega de quarto) é essencial e frequentemente mais informativa que o estado mental do momento agudo.",
    "A escala MSI-BPD (McLean Screening Instrument for Borderline Personality Disorder) é um instrumento de autorrelato útil para rastreio sistemático, mas, como todo instrumento de rastreio, não substitui a avaliação clínica longitudinal necessária para o diagnóstico formal.",
    "Autolesão e ideação/tentativa de suicídio em pacientes com TPB nunca devem ser minimizadas por serem atribuídas a 'traço de personalidade' — o risco de suicídio consumado nesses pacientes é real (estimado em 8-10%) e exige avaliação de risco tão rigorosa quanto em qualquer outro contexto.",
    "O principal diagnóstico diferencial de humor é o Transtorno Bipolar: no TPB a instabilidade afetiva é reativa a gatilhos interpessoais e dura horas; nos episódios de humor bipolares há período sustentado (dias) de alteração do humor, com menor reatividade situacional imediata.",
    "A Terapia Comportamental Dialética (DBT) é a psicoterapia com maior evidência para TPB; a farmacoterapia tem papel adjuvante e sintomático, sem substituir o tratamento psicoterápico estruturado.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR.",
    "NICE Guideline CG78 - Borderline personality disorder: recognition and management.",
    "Zanarini MC, et al. McLean Study of Adult Development.",
    "Linehan MM. Cognitive-Behavioral Treatment of Borderline Personality Disorder (DBT).",
  ],
};
