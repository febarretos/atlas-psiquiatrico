import { Fluxograma } from "./types";

export const riscoSuicidio: Fluxograma = {
  id: "risco-suicidio",

  titulo: "Avaliação e Manejo do Risco de Suicídio",

  categoria: "Emergências Psiquiátricas",

  descricao:
    "Algoritmo para estratificação e manejo do risco de suicídio em qualquer contexto de consulta, independentemente do diagnóstico de base. Deve ser considerado em toda consulta psiquiátrica, não apenas em episódios depressivos.",

  nodeInicialId: "rastreio-ideacao",

  nodes: [
    {
      id: "rastreio-ideacao",
      tipo: "pergunta",
      texto:
        "Pergunte diretamente: nas últimas semanas, o paciente desejou estar morto(a) ou teve pensamentos de se matar?",
      detalhe:
        "Perguntar diretamente sobre ideação suicida não aumenta o risco — pelo contrário, costuma trazer alívio ao paciente e é essencial para uma avaliação de risco adequada.",
      opcoes: [
        { label: "Sim", proximoNodeId: "metodo" },
        { label: "Não", proximoNodeId: "fatores-risco-gerais" },
      ],
    },
    {
      id: "fatores-risco-gerais",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Nenhuma ideação suicida identificada no momento.",
      detalhe:
        "Ainda assim, revisar fatores de risco conhecidos (tentativas prévias, transtorno mental não tratado, uso de substâncias, isolamento social, perdas recentes, doença física grave, história familiar de suicídio, acesso a meios letais) e reavaliar em toda consulta subsequente, especialmente diante de mudança no quadro clínico.",
    },
    {
      id: "metodo",
      tipo: "pergunta",
      texto:
        "O paciente já pensou em como faria isso (um método específico), mesmo sem intenção definida de agir?",
      opcoes: [
        { label: "Sim", proximoNodeId: "intencao" },
        {
          label: "Não, apenas o pensamento, sem método",
          proximoNodeId: "ideacao-passiva",
        },
      ],
    },
    {
      id: "ideacao-passiva",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Ideação suicida passiva/inespecífica, sem método ou plano — risco baixo a moderado.",
      detalhe:
        "Investigar frequência, duração e controlabilidade dos pensamentos, fatores de risco e proteção (rede de apoio, razões para viver, religiosidade, filhos), e tratar a condição de base. Reavaliar em intervalo curto (dias a 1-2 semanas). Orientar paciente e família sobre sinais de alerta e como buscar ajuda em caso de piora.",
    },
    {
      id: "intencao",
      tipo: "pergunta",
      texto:
        "O paciente tem alguma intenção de agir sobre esses pensamentos, além de apenas pensar no método?",
      opcoes: [
        { label: "Sim", proximoNodeId: "plano-especifico" },
        { label: "Não, pensa no método mas não pretende agir", proximoNodeId: "sem-intencao" },
      ],
    },
    {
      id: "sem-intencao",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Ideação suicida ativa com método identificado, mas sem intenção de agir — risco moderado.",
      detalhe:
        "Aprofundar avaliação de fatores de risco e proteção. Elaborar plano de segurança por escrito com o paciente. Reduzir acesso a meios letais (armas de fogo, grandes quantidades de medicamentos, etc.) envolvendo a família quando possível. Reavaliar em curto prazo e intensificar tratamento da condição de base.",
    },
    {
      id: "plano-especifico",
      tipo: "pergunta",
      texto:
        "O paciente elaborou um plano específico (quando, onde, como) e tem acesso fácil aos meios para executá-lo?",
      opcoes: [
        { label: "Sim", proximoNodeId: "risco-alto" },
        {
          label: "Plano vago ou sem acesso fácil aos meios",
          proximoNodeId: "risco-moderado-alto",
        },
      ],
    },
    {
      id: "risco-moderado-alto",
      tipo: "pergunta",
      texto:
        "Há comportamento suicida nos últimos 3 meses (tentativa, tentativa interrompida/abortada, ou preparação como reunir meios ou escrever bilhete de despedida)?",
      opcoes: [
        { label: "Sim", proximoNodeId: "risco-alto" },
        { label: "Não", proximoNodeId: "conduta-risco-moderado-alto" },
      ],
    },
    {
      id: "conduta-risco-moderado-alto",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Intenção presente com plano ainda inespecífico ou de difícil execução — risco moderado a alto.",
      detalhe:
        "Avaliar necessidade de acompanhamento mais próximo (consultas frequentes, contato telefônico programado) ou encaminhamento a serviço especializado. Plano de segurança detalhado por escrito, envolvimento ativo da família/rede de apoio, restrição de acesso a meios letais é prioridade. Considerar internação se houver dúvida quanto à capacidade do paciente de manter-se seguro entre consultas.",
    },
    {
      id: "risco-alto",
      tipo: "conduta",
      nivel: "alerta",
      texto:
        "Risco alto: plano específico com meios acessíveis, e/ou comportamento suicida (tentativa, tentativa interrompida ou abortada, ou preparação ativa) nos últimos 3 meses.",
      detalhe:
        "Segurança imediata é prioridade absoluta: não deixar o paciente sozinho até avaliação completa. Avaliar necessidade de internação psiquiátrica (voluntária ou involuntária se recusa e risco iminente). Remover fisicamente o acesso a meios letais com apoio da família (armas de fogo, medicamentos em quantidade, etc.). Encaminhamento/avaliação psiquiátrica de urgência sem demora. Se já houve tentativa nas últimas horas, priorizar avaliação clínica das consequências físicas antes de qualquer outra conduta.",
    },
  ],

  referencias: [
    "Posner K, et al. The Columbia-Suicide Severity Rating Scale (C-SSRS). Am J Psychiatry. 2011.",
    "American Psychiatric Association (APA). Practice Guideline for the Assessment and Treatment of Patients with Suicidal Behaviors.",
    "World Health Organization (WHO). Preventing suicide: a resource for primary health care workers.",
    "Ministério da Saúde. Diretrizes Nacionais de Prevenção do Suicídio.",
  ],
};
