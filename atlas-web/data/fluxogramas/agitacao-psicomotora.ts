import { Fluxograma } from "./types";

export const agitacaoPsicomotora: Fluxograma = {
  id: "agitacao-psicomotora",

  titulo: "Manejo da Agitação Psicomotora Aguda",

  categoria: "Emergências Psiquiátricas",

  descricao:
    "Algoritmo para avaliação de segurança, exclusão de causas orgânicas, desescalonamento verbal e escolha da estratégia farmacológica na agitação psicomotora aguda, baseado no Projeto BETA (ACEP) e diretrizes de emergência psiquiátrica.",

  nodeInicialId: "avaliacao-seguranca",

  nodes: [
    {
      id: "avaliacao-seguranca",
      tipo: "pergunta",
      texto:
        "Há risco iminente à segurança do paciente, da equipe ou de terceiros (comportamento heteroagressivo ativo, posse de arma ou objeto perigoso, ameaça grave em curso)?",
      detalhe:
        "A segurança da cena deve ser garantida antes de qualquer tentativa de abordagem clínica ou verbal.",
      opcoes: [
        { label: "Sim, risco iminente", proximoNodeId: "conduta-seguranca-imediata" },
        { label: "Não", proximoNodeId: "avaliar-causa-organica" },
      ],
    },
    {
      id: "conduta-seguranca-imediata",
      tipo: "conduta",
      nivel: "alerta",
      texto:
        "Priorizar segurança imediata antes de qualquer intervenção clínica.",
      detalhe:
        "Acionar protocolo institucional de segurança, afastar demais pacientes e objetos de risco, garantir presença de equipe suficiente (idealmente 4-5 pessoas) antes de qualquer abordagem física. Considerar contenção mecânica conforme protocolo institucional e respaldo legal, sempre como última alternativa e pelo menor tempo possível.",
    },
    {
      id: "avaliar-causa-organica",
      tipo: "pergunta",
      texto:
        "Há suspeita de causa orgânica ou intoxicação/abstinência (alteração do nível de consciência, sinais vitais anormais, início súbito, idade avançada, ausência de história psiquiátrica prévia, sinais de uso de substâncias)?",
      detalhe:
        "Delirium, hipoglicemia, hipóxia, infecções, traumatismo cranioencefálico e intoxicação/abstinência de substâncias são causas potencialmente graves e reversíveis de agitação.",
      opcoes: [
        { label: "Sim, suspeita de causa orgânica", proximoNodeId: "conduta-avaliar-organico" },
        { label: "Não, quadro sugere causa psiquiátrica primária", proximoNodeId: "desescalonamento" },
      ],
    },
    {
      id: "conduta-avaliar-organico",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Priorizar avaliação clínica antes de atribuir a agitação a causa psiquiátrica primária.",
      detalhe:
        "Verificar sinais vitais, glicemia capilar, oximetria de pulso e exame neurológico sumário; considerar rastreio toxicológico. Investigar e tratar delirium, hipoglicemia, hipóxia, infecção, TCE ou intoxicação/abstinência de substâncias em paralelo ao manejo comportamental.",
    },
    {
      id: "desescalonamento",
      tipo: "pergunta",
      texto:
        "O paciente responde às técnicas de desescalonamento verbal (ambiente calmo, tom de voz baixo, postura não confrontativa, oferecer opções, validar o sofrimento)?",
      detalhe:
        "O desescalonamento verbal é sempre a primeira linha de manejo comportamental e deve ser tentado antes de medicação, exceto em risco iminente.",
      opcoes: [
        { label: "Sim, responde ao desescalonamento", proximoNodeId: "conduta-desescalonamento-eficaz" },
        { label: "Não responde / agitação persiste", proximoNodeId: "aceita-via-oral" },
      ],
    },
    {
      id: "conduta-desescalonamento-eficaz",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Manter desescalonamento verbal e observação contínua em ambiente tranquilo e de baixo estímulo.",
      detalhe:
        "Oferecer medicação por via oral de forma facultativa/profilática caso o paciente concorde. Reavaliar periodicamente o estado clínico e comportamental.",
    },
    {
      id: "aceita-via-oral",
      tipo: "pergunta",
      texto:
        "O paciente é colaborativo e aceita medicação por via oral, sem necessidade de contenção imediata?",
      detalhe: "Sempre que possível, a via oral é preferível à via intramuscular por ser menos coercitiva.",
      opcoes: [
        { label: "Sim, aceita via oral", proximoNodeId: "causa-psicotica-oral" },
        { label: "Não, recusa ou não colaborativo", proximoNodeId: "contraindicacao-antipsicotico" },
      ],
    },
    {
      id: "causa-psicotica-oral",
      tipo: "pergunta",
      texto:
        "Há suspeita ou diagnóstico conhecido de quadro psicótico ou mania como causa da agitação?",
      opcoes: [
        { label: "Sim", proximoNodeId: "conduta-oral-antipsicotico" },
        { label: "Não (ex.: ansiedade, abstinência)", proximoNodeId: "conduta-oral-benzodiazepinico" },
      ],
    },
    {
      id: "conduta-oral-antipsicotico",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Antipsicótico por via oral (ex. risperidona 1-2 mg ou olanzapina 5-10 mg VO), associado a benzodiazepínico oral (ex. lorazepam 1-2 mg) se necessário.",
      detalhe: "Reavaliar a resposta clínica em 30 a 60 minutos.",
    },
    {
      id: "conduta-oral-benzodiazepinico",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Benzodiazepínico por via oral isolado (ex. lorazepam 1-2 mg VO).",
      detalhe: "Reavaliar a resposta clínica em 30 a 60 minutos.",
    },
    {
      id: "contraindicacao-antipsicotico",
      tipo: "pergunta",
      texto:
        "Há contraindicação relevante a antipsicóticos (ex. uso importante de álcool ou depressores do SNC com risco de depressão respiratória, prolongamento significativo do intervalo QT) ou indicação de monoterapia benzodiazepínica (ex. abstinência alcoólica)?",
      opcoes: [
        { label: "Sim", proximoNodeId: "conduta-im-benzodiazepinico" },
        { label: "Não", proximoNodeId: "conduta-im-associacao" },
      ],
    },
    {
      id: "conduta-im-benzodiazepinico",
      tipo: "pergunta",
      texto:
        "Administrar benzodiazepínico por via intramuscular (ex. midazolam IM), com monitorização contínua de sinais vitais e oximetria de pulso. Atenção ao risco de depressão respiratória, especialmente se uso concomitante de álcool ou outros depressores do SNC. Reavaliando em 15 a 30 minutos: houve contenção adequada da agitação, sem intercorrências clínicas?",
      opcoes: [
        { label: "Sim, contenção adequada", proximoNodeId: "conduta-observacao" },
        { label: "Não, agitação persiste ou intercorrência", proximoNodeId: "conduta-reavaliar-medico" },
      ],
    },
    {
      id: "conduta-im-associacao",
      tipo: "pergunta",
      texto:
        "Administrar associação intramuscular de antipsicótico e benzodiazepínico (ex. haloperidol + midazolam) ou antipsicótico atípico IM isolado (ex. olanzapina IM); evitar associar olanzapina IM com benzodiazepínico pelo risco de depressão cardiorrespiratória. Com monitorização contínua de sinais vitais, reavaliando em 15 a 30 minutos: houve contenção adequada da agitação, sem intercorrências clínicas?",
      opcoes: [
        { label: "Sim, contenção adequada", proximoNodeId: "conduta-observacao" },
        { label: "Não, agitação persiste ou intercorrência", proximoNodeId: "conduta-reavaliar-medico" },
      ],
    },
    {
      id: "conduta-observacao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Manter observação contínua com monitorização de sinais vitais a cada 15-30 minutos nas primeiras 2 horas.",
      detalhe:
        "Investigar e tratar a causa subjacente da agitação. Planejar transição para via oral assim que clinicamente possível.",
    },
    {
      id: "conduta-reavaliar-medico",
      tipo: "conduta",
      nivel: "alerta",
      texto: "Reavaliação médica imediata é necessária.",
      detalhe:
        "Considerar segunda dose ou associação medicamentosa conforme protocolo institucional, reforçar medidas de segurança/contenção se necessário e considerar internação em unidade com maior suporte assistencial.",
    },
  ],

  referencias: [
    "Wilson MP, et al. The Psychopharmacology of Agitation: Consensus Statement of the American Association for Emergency Psychiatry Project BETA.",
    "Richmond JS, et al. Verbal De-escalation of the Agitated Patient: Consensus Statement of the American Association for Emergency Psychiatry Project BETA De-escalation Workgroup.",
    "National Institute for Health and Care Excellence (NICE). Violence and aggression: short-term management in mental health, health and community settings (NG10).",
  ],
};
