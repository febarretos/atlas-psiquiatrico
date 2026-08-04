import { Fluxograma } from "./types";

export const manejoAnsiedade: Fluxograma = {
  id: "manejo-ansiedade",

  titulo: "Manejo do Transtorno de Ansiedade Generalizada e Transtorno do Pânico",

  categoria: "Transtornos de Ansiedade",

  descricao:
    "Algoritmo para confirmação diagnóstica e tratamento do Transtorno de Ansiedade Generalizada (TAG) e do Transtorno do Pânico, baseado nas diretrizes CANMAT para transtornos de ansiedade, trauma e relacionados ao estresse.",

  nodeInicialId: "apresentacao",

  nodes: [
    {
      id: "apresentacao",
      tipo: "pergunta",
      texto: "Qual o padrão predominante de ansiedade apresentado pelo paciente?",
      opcoes: [
        {
          label: "Preocupação excessiva e incontrolável, presente na maioria dos dias",
          proximoNodeId: "tag-criterios",
        },
        {
          label: "Ataques de pânico recorrentes e inesperados",
          proximoNodeId: "panico-criterios",
        },
      ],
    },

    {
      id: "tag-criterios",
      tipo: "pergunta",
      texto:
        "Confirmam-se os critérios do DSM-5-TR para TAG: ansiedade e preocupação excessivas, por pelo menos 6 meses, de difícil controle, associadas a 3 ou mais sintomas (inquietação, fadiga, dificuldade de concentração, irritabilidade, tensão muscular, perturbação do sono)?",
      detalhe:
        "Considerar o uso do GAD-7 (disponível no módulo Escalas) para quantificar a gravidade e monitorar a resposta ao tratamento.",
      opcoes: [
        { label: "Sim", proximoNodeId: "tag-tratamento" },
        { label: "Não", proximoNodeId: "conduta-diferencial-tag" },
      ],
    },
    {
      id: "conduta-diferencial-tag",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Critérios de TAG não confirmados — investigar diagnósticos diferenciais.",
      detalhe:
        "Considerar transtorno de ajustamento, hipertireoidismo, uso excessivo de cafeína/estimulantes, abstinência de substâncias, ou outro transtorno de ansiedade específico (pânico, fobia social).",
    },
    {
      id: "tag-tratamento",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Iniciar ISRS ou ISRSN de primeira linha (ex: escitalopram, sertralina, venlafaxina ou duloxetina), associado a TCC.",
      detalhe:
        "A meta-análise de rede de Slee et al. (2019, Lancet, tratamentos farmacológicos para TAG) situou duloxetina, pregabalina, venlafaxina e escitalopram entre os agentes com melhor perfil combinado de eficácia e tolerabilidade — mas, como na depressão, as diferenças absolutas entre os agentes de primeira linha são modestas, e a escolha deve considerar comorbidades, efeitos adversos e preferência do paciente.",
      medicamentosRelacionados: ["escitalopram", "sertralina", "venlafaxina", "duloxetina"],
      opcoes: [
        { label: "Reavaliar após 4-8 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-tag" },
      ],
    },
    {
      id: "avaliacao-resposta-tag",
      tipo: "pergunta",
      texto: "Após 4 a 8 semanas em dose adequada, qual foi a resposta clínica?",
      opcoes: [
        { label: "Resposta adequada", proximoNodeId: "conduta-tag-manter" },
        { label: "Resposta parcial", proximoNodeId: "conduta-tag-otimizar" },
        { label: "Sem resposta", proximoNodeId: "tag-segunda-linha" },
      ],
    },
    {
      id: "conduta-tag-manter",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Manter o tratamento atual na dose eficaz.",
      detalhe: "Manter por pelo menos 12 meses após a remissão antes de considerar a retirada gradual, pelo risco de recaída.",
    },
    {
      id: "conduta-tag-otimizar",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Otimizar a dose até a máxima tolerada e reavaliar em 2 a 4 semanas.",
      detalhe: "Reforçar adesão à TCC e verificar comorbidades não tratadas (uso de álcool/substâncias, depressão).",
    },
    {
      id: "tag-segunda-linha",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Após falha de uma tentativa adequada de primeira linha: trocar para outro ISRS/ISRSN de classe diferente, ou considerar pregabalina como alternativa (evidência específica para TAG).",
      medicamentosRelacionados: ["pregabalina"],
      opcoes: [
        { label: "Reavaliar resposta após a mudança →", proximoNodeId: "avaliacao-resposta-tag-segunda" },
      ],
    },
    {
      id: "avaliacao-resposta-tag-segunda",
      tipo: "pergunta",
      texto: "Houve resposta após a mudança?",
      opcoes: [
        { label: "Resposta adequada", proximoNodeId: "conduta-tag-manter" },
        { label: "Sem resposta", proximoNodeId: "conduta-tag-refrataria" },
      ],
    },
    {
      id: "conduta-tag-refrataria",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Encaminhar a especialista/serviço de referência.",
      detalhe:
        "Considerar associação de buspirona ou hidroxizina como adjuvante, ou benzodiazepínico de manutenção com cautela e por tempo limitado em casos selecionados, avaliando risco de dependência.",
    },

    {
      id: "panico-criterios",
      tipo: "pergunta",
      texto:
        "Confirmam-se ataques de pânico recorrentes e inesperados, seguidos de pelo menos 1 mês de preocupação persistente sobre novos ataques ou de mudança comportamental significativa para evitá-los?",
      detalhe: "Avaliar a presença de agorafobia associada, o que reforça a indicação de TCC com exposição.",
      opcoes: [
        { label: "Sim", proximoNodeId: "panico-tratamento" },
        { label: "Não", proximoNodeId: "conduta-diferencial-panico" },
      ],
    },
    {
      id: "conduta-diferencial-panico",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Critérios de Transtorno do Pânico não confirmados — investigar diagnósticos diferenciais.",
      detalhe:
        "Investigar causas orgânicas de sintomas paroxísticos (arritmia, hipertireoidismo, hipoglicemia, feocromocitoma em casos atípicos) e uso de estimulantes/cafeína antes de firmar outro diagnóstico psiquiátrico.",
    },
    {
      id: "panico-tratamento",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Iniciar ISRS (ex.: sertralina ou escitalopram) em dose inicial mais baixa que a usual (risco de piora paradoxal da ansiedade nas primeiras semanas), associado a TCC com exposição interoceptiva — ambos com eficácia semelhante.",
      detalhe:
        "Considerar benzodiazepínico por tempo limitado na fase de latência do ISRS em casos muito incapacitantes.",
      medicamentosRelacionados: ["sertralina", "escitalopram"],
      opcoes: [
        { label: "Reavaliar após 4-8 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-panico" },
      ],
    },
    {
      id: "avaliacao-resposta-panico",
      tipo: "pergunta",
      texto: "Após 4 a 8 semanas, qual foi a resposta clínica?",
      opcoes: [
        { label: "Resposta adequada", proximoNodeId: "conduta-panico-manter" },
        { label: "Resposta parcial", proximoNodeId: "conduta-panico-otimizar" },
        { label: "Sem resposta", proximoNodeId: "conduta-panico-refrataria" },
      ],
    },
    {
      id: "conduta-panico-manter",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Manter o tratamento atual na dose eficaz.",
      detalhe: "Manter por pelo menos 12 meses após a remissão antes de considerar retirada gradual.",
    },
    {
      id: "conduta-panico-otimizar",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Otimizar a dose até a máxima tolerada e reforçar a TCC, especialmente a exposição interoceptiva.",
      detalhe: "Reavaliar em 2 a 4 semanas após a otimização.",
    },
    {
      id: "conduta-panico-refrataria",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Trocar para outra classe de antidepressivo e garantir TCC especializada em exposição, se ainda não realizada.",
      detalhe: "Encaminhar a especialista/serviço de referência se não houver resposta a duas tentativas adequadas.",
    },
  ],

  referencias: [
    "Katzman MA, et al. Canadian clinical practice guidelines for the management of anxiety, posttraumatic stress and obsessive-compulsive disorders. BMC Psychiatry. 2014 (CANMAT/Anxiety Disorders Association of Canada).",
    "American Psychiatric Association (APA). Practice Guideline for the Treatment of Patients with Panic Disorder.",
    "National Institute for Health and Care Excellence (NICE). Generalised anxiety disorder and panic disorder in adults: management (CG113).",
    "Slee A, et al. Pharmacological treatments for generalised anxiety disorder: a systematic review and network meta-analysis. Lancet. 2019.",
    "Associação Brasileira de Psiquiatria (ABP)/Associação Médica Brasileira (AMB). Transtornos de Ansiedade: Diagnóstico e Tratamento",
  ],
};
