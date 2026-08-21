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
      medicamentosRelacionados: ["risperidona", "olanzapina", "lorazepam"],
    },
    {
      id: "conduta-oral-benzodiazepinico",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Benzodiazepínico por via oral isolado (ex. lorazepam 1-2 mg VO).",
      detalhe: "Reavaliar a resposta clínica em 30 a 60 minutos.",
      medicamentosRelacionados: ["lorazepam"],
    },
    {
      id: "contraindicacao-antipsicotico",
      tipo: "pergunta",
      texto:
        "Há contraindicação relevante a antipsicóticos (ex. prolongamento significativo do intervalo QT, síndrome neuroléptica maligna prévia) ou quadro de abstinência alcoólica/de benzodiazepínicos como causa predominante da agitação (indicação de monoterapia benzodiazepínica)?",
      detalhe:
        "Não inclui intoxicação aguda por álcool ou outro depressor do SNC — nesse cenário, antipsicótico costuma ser preferível a benzodiazepínico (Project BETA), pelo risco de depressão respiratória aditiva ao dar benzodiazepínico a quem já está sob efeito de um depressor do SNC. A pergunta seguinte trata a intoxicação por álcool/depressor do SNC separadamente.",
      opcoes: [
        { label: "Sim", proximoNodeId: "conduta-im-benzodiazepinico" },
        { label: "Não", proximoNodeId: "perfil-im-associacao" },
      ],
    },
    {
      id: "conduta-im-benzodiazepinico",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Administrar benzodiazepínico por via intramuscular (ex. lorazepam IM, ou midazolam onde disponível, pela ação mais rápida), com monitorização contínua de sinais vitais e oximetria de pulso.",
      detalhe:
        "Atenção ao risco de depressão respiratória. Se houver qualquer suspeita de intoxicação concomitante por álcool ou outro depressor do SNC (não apenas abstinência), reconsiderar antipsicótico isolado em vez de benzodiazepínico — ver perfil de associação.",
      medicamentosRelacionados: ["lorazepam"],
      opcoes: [
        { label: "Reavaliar em 15-30 minutos →", proximoNodeId: "resposta-im-benzodiazepinico" },
      ],
    },
    {
      id: "resposta-im-benzodiazepinico",
      tipo: "pergunta",
      texto: "Houve contenção adequada da agitação, sem intercorrências clínicas?",
      opcoes: [
        { label: "Sim, contenção adequada", proximoNodeId: "conduta-observacao" },
        { label: "Não, agitação persiste ou intercorrência", proximoNodeId: "conduta-reavaliar-medico" },
      ],
    },
    {
      id: "perfil-im-associacao",
      tipo: "pergunta",
      texto:
        "Contenção química por via intramuscular é necessária. Antes de escolher entre associação (antipsicótico + benzodiazepínico) ou antipsicótico atípico isolado, o paciente apresenta alguma destas condições relevantes para essa escolha?",
      detalhe:
        "As duas estratégias são alternativas, não devem ser somadas — associar olanzapina IM com benzodiazepínico (na mesma administração ou nas horas seguintes a uma ou outra) carrega risco relevante de depressão cardiorrespiratória.",
      opcoes: [
        { label: "Risco cardiovascular relevante / QT longo", proximoNodeId: "conduta-im-olanzapina-isolada" },
        { label: "Já recebeu benzodiazepínico recentemente", proximoNodeId: "conduta-im-haloperidol-isolado" },
        { label: "Uso concomitante de álcool/depressor do SNC, sem benzodiazepínico prévio", proximoNodeId: "conduta-im-olanzapina-isolada" },
        { label: "Nenhuma condição especial", proximoNodeId: "conduta-im-haloperidol-lorazepam" },
      ],
    },
    {
      id: "conduta-im-haloperidol-lorazepam",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Associação intramuscular de haloperidol e lorazepam, com monitorização contínua de sinais vitais.",
      detalhe:
        "Combinação clássica de contenção química, com mecanismos complementares (antagonismo D2 + potencialização GABAérgica) e resposta geralmente mais rápida que monoterapia. Reservar para pacientes sem risco cardiovascular relevante nem uso concomitante de outro depressor do SNC, pelo risco somado de prolongamento de QT (haloperidol) e depressão respiratória (associação com benzodiazepínico).",
      medicamentosRelacionados: ["haloperidol", "lorazepam"],
      opcoes: [
        { label: "Reavaliar em 15-30 minutos →", proximoNodeId: "resposta-im-associacao" },
      ],
    },
    {
      id: "conduta-im-haloperidol-isolado",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Haloperidol intramuscular isolado (sem associar benzodiazepínico), com ECG e monitorização contínua de sinais vitais.",
      detalhe:
        "Reservado para quem já recebeu benzodiazepínico recentemente — associar mais benzodiazepínico agora (isolado ou na combinação haloperidol+lorazepam) somaria risco de depressão respiratória. Monitorizar QT pelo risco intrínseco do haloperidol; corrigir distúrbios eletrolíticos (potássio, magnésio) quando presentes.",
      medicamentosRelacionados: ["haloperidol"],
      opcoes: [
        { label: "Reavaliar em 15-30 minutos →", proximoNodeId: "resposta-im-associacao" },
      ],
    },
    {
      id: "conduta-im-olanzapina-isolada",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Olanzapina intramuscular isolada (sem associar benzodiazepínico), com monitorização contínua de sinais vitais.",
      detalhe:
        "Em risco cardiovascular relevante/QT longo, evita somar o prolongamento de QT do haloperidol. Em intoxicação por álcool ou outro depressor do SNC sem benzodiazepínico prévio, antipsicótico isolado é preferível a benzodiazepínico (Project BETA), evitando a depressão respiratória aditiva de somar mais um depressor do SNC. Nos dois casos: não administrar benzodiazepínico nas horas seguintes à olanzapina IM pelo mesmo motivo.",
      medicamentosRelacionados: ["olanzapina"],
      opcoes: [
        { label: "Reavaliar em 15-30 minutos →", proximoNodeId: "resposta-im-associacao" },
      ],
    },
    {
      id: "resposta-im-associacao",
      tipo: "pergunta",
      texto: "Houve contenção adequada da agitação, sem intercorrências clínicas?",
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
