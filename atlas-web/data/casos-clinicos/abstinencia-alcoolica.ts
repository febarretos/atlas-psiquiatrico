import { CasoClinico } from "./types";

export const abstinenciaAlcoolica: CasoClinico = {
  id: "abstinencia-alcoolica",

  titulo: "Ele estava calmo até a segunda noite de internação",

  categoria: "Transtornos Relacionados a Substâncias",

  apresentacaoInicial:
    "Paciente do sexo masculino, 52 anos, internado há 3 dias na clínica cirúrgica para tratamento de uma fratura de fêmur após queda. Na admissão, a esposa mencionou 'de passagem' que ele 'bebe todo dia, uma boa garrafa de cachaça', mas isso não foi valorizado na história inicial. Nas primeiras 24 horas de internação o paciente esteve calmo e colaborativo. No segundo dia, a enfermagem registra tremor fino nas mãos, sudorese e queixa de 'ansiedade sem motivo', com frequência cardíaca de 110 bpm e pressão arterial de 152x96 mmHg. Na manhã do terceiro dia, o paciente está desorientado no tempo, fala que 'tem gente mexendo na cortina' quando o quarto está vazio e imóvel, e tenta repetidamente arrancar o acesso venoso dizendo que 'tem bichos andando no meu braço'.",

  etapas: [
    {
      id: "etapa-1",
      pergunta:
        "Qual elemento da história é mais decisivo para explicar o início dos sintomas (tremor, sudorese, taquicardia, ansiedade) no segundo dia de internação?",
      opcoes: [
        {
          texto:
            "O intervalo de tempo desde a última ingesta de álcool, interrompida abruptamente pela internação em paciente com uso pesado e diário",
          correta: true,
          explicacao:
            "Correto. O relato da esposa de consumo diário e pesado de álcool, associado à interrupção abrupta imposta pela internação, é a chave temporal do caso: os sintomas autonômicos e ansiosos começando 24-48 horas após a última dose são a apresentação clássica inicial da síndrome de abstinência alcoólica — um quadro frequentemente subvalorizado quando o motivo da internação é outro (aqui, uma fratura) e a história de uso de álcool não é ativamente investigada na admissão.",
        },
        {
          texto: "A dor da fratura de fêmur, ainda não controlada",
          correta: false,
          explicacao:
            "Dor mal controlada pode causar taquicardia e ansiedade, mas não explica bem o padrão temporal específico (início no segundo dia, após período inicial calmo) nem a evolução característica para confusão e alucinações táteis/visuais no terceiro dia — esse padrão evolutivo aponta para abstinência, não para dor isolada.",
        },
        {
          texto: "Reação de ansiedade situacional à hospitalização",
          correta: false,
          explicacao:
            "Ansiedade reativa à internação é comum, mas não costuria explicar sinais objetivos de hiperatividade autonômica (taquicardia, hipertensão, sudorese, tremor) numa progressão temporal tão característica quanto a observada aqui — sobretudo diante do dado de uso diário e pesado de álcool já mencionado pela esposa.",
        },
        {
          texto: "Efeito adverso da medicação analgésica pós-operatória",
          correta: false,
          explicacao:
            "É sempre importante revisar a lista de medicações em uso ao investigar um quadro assim, mas o padrão temporal (piora progressiva a partir de 24-48h da última ingesta relatada de álcool) e a história de consumo diário pesado tornam a abstinência alcoólica a explicação mais provável e a que precisa ser ativamente descartada primeiro.",
        },
      ],
    },
    {
      id: "etapa-2",
      pergunta:
        "Agora com desorientação, e a queixa de 'bichos andando no meu braço' sem qualquer estímulo tátil real correspondente, essa percepção deve ser classificada como:",
      opcoes: [
        {
          texto: "Alucinação tátil (háptica)",
          correta: true,
          explicacao:
            "Correto. Percepção nítida, com plena convicção de realidade, na ausência de qualquer estímulo correspondente (não há nada tocando o braço do paciente) — critérios de alucinação verdadeira, na modalidade tátil/háptica. Alucinações táteis e visuais são especialmente características de quadros orgânicos como intoxicação e abstinência de substâncias, diferente das alucinações auditivas, mais típicas de psicoses funcionais primárias.",
        },
        {
          texto: "Ilusão tátil",
          correta: false,
          explicacao:
            "A ilusão exige um estímulo real presente sendo deformado (por exemplo, sentir um lençol encostando no braço como se fosse um inseto). Aqui não há nenhum estímulo tátil real correspondente — é uma percepção sem objeto, portanto alucinação, não ilusão.",
        },
        {
          texto: "Delírio somático",
          correta: false,
          explicacao:
            "Delírio é uma alteração do conteúdo do pensamento (uma crença fixa e falsa), não uma percepção. O relato descreve uma experiência perceptiva anômala (sentir bichos andando), não um juízo sobre o próprio corpo — embora, na prática, a alucinação tátil possa vir acompanhada de uma interpretação delirante secundária.",
        },
        {
          texto: "Pseudoalucinação",
          correta: false,
          explicacao:
            "A pseudoalucinação é localizada no espaço interno/subjetivo, geralmente com menor nitidez sensorial e algum grau de crítica preservada. O relato do paciente descreve uma sensação vívida projetada no próprio corpo, vivenciada como real (ele tenta arrancar o acesso por causa disso) — compatível com alucinação verdadeira, não com um fenômeno interno criticado.",
        },
      ],
    },
    {
      id: "etapa-3",
      pergunta:
        "Diante da evolução para desorientação, alucinações táteis e visuais ('gente mexendo na cortina'), tremor e hiperatividade autonômica, cerca de 48-72h após a última ingesta de álcool, qual é a hipótese diagnóstica mais provável e qual instrumento deve guiar a intensidade do tratamento?",
      opcoes: [
        {
          texto:
            "Delirium tremens (forma grave da síndrome de abstinência alcoólica), com a escala CIWA-Ar guiando a dose de benzodiazepínico conforme a gravidade dos sintomas",
          correta: true,
          explicacao:
            "Correto. A combinação de delirium (desorientação, alucinações, curso agudo), hiperatividade autonômica intensa e tremor, surgindo classicamente entre 48 e 96 horas após a última dose de álcool em paciente com consumo pesado e abrupta interrupção, define o delirium tremens — a forma mais grave e potencialmente fatal da síndrome de abstinência alcoólica. A escala CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol) é o instrumento padrão para quantificar a gravidade dos sintomas de abstinência de forma seriada e ajustar a dose de benzodiazepínico de forma objetiva, em vez de doses fixas arbitrárias.",
        },
        {
          texto:
            "Delirium por infecção pós-operatória (ex: infecção de sítio cirúrgico ou pneumonia), sem relação com o uso de álcool",
          correta: false,
          explicacao:
            "Causas infecciosas e outras causas orgânicas de delirium (metabólicas, medicamentosas) sempre devem ser ativamente investigadas e não podem ser presumidas como excluídas apenas pelo quadro sugestivo de abstinência — mas o padrão temporal extremamente característico (piora progressiva iniciando 24-48h e evoluindo para quadro grave em 48-72h após a última ingesta, em paciente com uso diário pesado já identificado) torna a abstinência alcoólica a hipótese mais provável a ser tratada enquanto a investigação de causas concomitantes prossegue em paralelo.",
        },
        {
          texto:
            "Transtorno Psicótico Breve, sem relação com o consumo de álcool ou com a internação",
          correta: false,
          explicacao:
            "O quadro tem claro substrato orgânico agudo (hiperatividade autonômica objetiva, curso ligado a um evento identificável de interrupção do álcool, desorientação associada), o que é incompatível com um transtorno psicótico funcional primário — o padrão temporal e os sinais vegetativos apontam para uma causa orgânica específica, não para uma psicose primária.",
        },
        {
          texto:
            "Demência de início recente, não diagnosticada previamente, descompensada pela internação",
          correta: false,
          explicacao:
            "A instalação é aguda (horas a poucos dias) e associada a hiperatividade autonômica e alucinações vívidas, incompatível com o curso crônico e progressivo característico de demência — o perfil temporal e o contexto (interrupção abrupta do álcool) apontam para delirium por abstinência, não para um transtorno neurocognitivo maior de base.",
        },
      ],
    },
    {
      id: "etapa-4",
      pergunta:
        "Qual é a conduta terapêutica prioritária e correta neste momento?",
      opcoes: [
        {
          texto:
            "Benzodiazepínico (diazepam ou lorazepam) em dose ajustada à gravidade dos sintomas, associado a reposição de tiamina antes ou junto da administração de glicose, e correção de distúrbios hidroeletrolíticos (magnésio, potássio)",
          correta: true,
          explicacao:
            "Correto. Benzodiazepínicos são o tratamento de escolha para a síndrome de abstinência alcoólica grave/delirium tremens, por atuarem no mesmo sistema GABAérgico cuja disfunção neuroadaptativa causa a hiperexcitabilidade da abstinência — o diazepam é classicamente preferido pelo início de ação rápido e pelo efeito de 'autoafilamento' (self-tapering) conferido por seus metabólitos ativos de meia-vida longa. A tiamina deve sempre ser administrada antes ou junto da glicose, nunca depois, para prevenir a precipitação de encefalopatia de Wernicke em um paciente com provável depleção nutricional pelo uso crônico de álcool. Distúrbios de magnésio e potássio são comuns nesse contexto e devem ser corrigidos ativamente.",
        },
        {
          texto:
            "Administrar glicose hipertônica imediatamente para corrigir a confusão mental, postergando a tiamina para depois de estabilizado o quadro",
          correta: false,
          explicacao:
            "Essa é uma inversão perigosa e um erro clássico: administrar glicose antes da tiamina em paciente com depleção de tiamina (comum no uso pesado e crônico de álcool) pode precipitar ou agravar a encefalopatia de Wernicke, consumindo as reservas residuais de tiamina no metabolismo agudo da glicose. A tiamina deve vir antes ou junto, nunca depois.",
        },
        {
          texto:
            "Iniciar antipsicótico em dose plena como monoterapia para controlar as alucinações e a agitação",
          correta: false,
          explicacao:
            "Antipsicóticos não tratam o substrato fisiopatológico da abstinência alcoólica (hiperexcitabilidade GABAérgica/glutamatérgica) e reduzem o limiar convulsivo, podendo aumentar o risco de convulsões por abstinência nesse contexto. Podem eventualmente ser usados como adjuvantes pontuais para sintomas psicóticos refratários, mas nunca como monoterapia no lugar do benzodiazepínico.",
        },
        {
          texto:
            "Conduta apenas expectante, com reavaliação em 24 horas, já que o quadro tende à resolução espontânea",
          correta: false,
          explicacao:
            "O delirium tremens é uma emergência médica com risco de morte significativo se não tratado (arritmias, convulsões, hipertermia, colapso cardiovascular) — exige tratamento ativo imediato com benzodiazepínico e reposição de tiamina, não conduta expectante.",
        },
      ],
    },
  ],

  diagnosticoFinal:
    "Delirium tremens (forma grave da síndrome de abstinência alcoólica) em paciente com provável Transtorno por Uso de Álcool não identificado na admissão, internado por fratura de fêmur.",

  diagnosticoId: "transtorno-uso-alcool",

  medicamentosRelacionados: ["diazepam"],

  achadosPsicopatologicos: [
    { dominioId: "sensopercepcao", achadoId: "alucinacao" },
    { dominioId: "consciencia", achadoId: "obnubilacao-consciencia" },
  ],

  pontosDeEnsino: [
    "Sempre investigar ativamente o padrão de uso de álcool na admissão de qualquer paciente internado, independentemente do motivo da internação — um dado 'de passagem' da família (como neste caso) pode ser a única pista disponível antes do quadro evoluir.",
    "O padrão temporal é a chave diagnóstica da abstinência alcoólica: sintomas autonômicos leves surgem em 24-48h após a última dose, e o delirium tremens (a forma mais grave) tipicamente entre 48 e 96h — sempre suspeitar diante dessa evolução em paciente internado com história de uso pesado.",
    "A escala CIWA-Ar deve guiar a dose de benzodiazepínico de forma objetiva e seriada, em vez de esquemas fixos arbitrários, permitindo tratamento proporcional à gravidade real dos sintomas.",
    "Tiamina sempre antes ou junto da glicose, nunca depois, para prevenir a precipitação de encefalopatia de Wernicke em pacientes com uso pesado e crônico de álcool.",
    "Consulte a página 'Delirium Tremens' no módulo Emergências para o quadro clínico completo, a conduta detalhada e o diagnóstico diferencial com outras causas de delirium em paciente internado.",
  ],

  referencias: [
    "American Psychiatric Association (APA). DSM-5-TR.",
    "APA Practice Guideline for the Pharmacological Treatment of Patients with Alcohol Use Disorder.",
    "Maudsley Prescribing Guidelines.",
    "Mainerova B, et al. Alcohol withdrawal delirium — diagnosis, course and treatment. Biomed Pap. 2015.",
  ],
};
