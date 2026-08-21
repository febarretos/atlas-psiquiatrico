import { Fluxograma } from "./types";

export const esquizofreniaRefrataria: Fluxograma = {
  id: "esquizofrenia-refrataria",

  titulo: "Escolha de Antipsicótico e Manejo da Esquizofrenia Refratária",

  categoria: "Transtornos Psicóticos",

  descricao:
    "Algoritmo para escolha do antipsicótico no primeiro episódio psicótico, avaliação de resposta e manejo da esquizofrenia refratária ao tratamento, incluindo indicação de clozapina, baseado em diretrizes APA/NICE.",

  nodeInicialId: "primeiro-episodio",

  nodes: [
    {
      id: "primeiro-episodio",
      tipo: "pergunta",
      texto:
        "Trata-se de um primeiro episódio psicótico (sem exposição prévia a antipsicóticos ou exposição mínima)?",
      detalhe:
        "Confirmar diagnóstico de esquizofrenia ou transtorno do espectro psicótico após excluir causas orgânicas, uso de substâncias e outros transtornos psiquiátricos primários com sintomas psicóticos.",
      opcoes: [
        { label: "Sim, primeiro episódio", proximoNodeId: "perfil-antipsicotico-primeiro-episodio" },
        { label: "Não, episódios/tratamentos prévios", proximoNodeId: "historico-tratamentos" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // Perfil do paciente — escolha do antipsicótico no PRIMEIRO EPISÓDIO
    // ─────────────────────────────────────────────────────────────
    {
      id: "perfil-antipsicotico-primeiro-episodio",
      tipo: "pergunta",
      texto:
        "Escolher antipsicótico atípico de primeira linha. Antes de escolher o agente, o paciente apresenta alguma destas condições relevantes para essa escolha?",
      detalhe:
        "Iniciar com dose baixa e titular gradualmente até a dose eficaz mínima — pacientes em primeiro episódio costumam ser mais sensíveis a efeitos extrapiramidais e responder a doses menores que pacientes com múltiplos episódios prévios. Se houver mais de uma condição relevante ao mesmo tempo, priorize a que for clinicamente mais limitante e individualize a partir daí.",
      opcoes: [
        { label: "Insônia / agitação proeminente", proximoNodeId: "conduta-antipsicotico-1e-insonia" },
        { label: "Preocupação com ganho de peso / risco metabólico", proximoNodeId: "conduta-antipsicotico-1e-metabolico" },
        { label: "Nenhuma condição especial", proximoNodeId: "conduta-antipsicotico-1e-padrao" },
      ],
    },
    {
      id: "conduta-antipsicotico-1e-insonia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Insônia ou agitação proeminente: quetiapina, pelo efeito sedativo mais pronunciado entre os atípicos.",
      detalhe:
        "Monitorar efeitos metabólicos e hipotensão ortostática, especialmente na titulação inicial. Iniciar com dose baixa e titular gradualmente até a dose eficaz mínima.",
      medicamentosRelacionados: ["quetiapina"],
      opcoes: [
        { label: "Antipsicótico iniciado, aguardar resposta", proximoNodeId: "resposta-primeiro-episodio" },
      ],
    },
    {
      id: "conduta-antipsicotico-1e-metabolico",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Preocupação com ganho de peso ou risco metabólico: aripiprazol, pelo menor risco metabólico entre os antipsicóticos atípicos.",
      detalhe:
        "Particularmente relevante em primeiro episódio, dado que o paciente costuma ser jovem e o tratamento tende a ser de longo prazo. Monitorar acatisia e inquietação. Iniciar com dose baixa e titular gradualmente até a dose eficaz mínima.",
      medicamentosRelacionados: ["aripiprazol"],
      opcoes: [
        { label: "Antipsicótico iniciado, aguardar resposta", proximoNodeId: "resposta-primeiro-episodio" },
      ],
    },
    {
      id: "conduta-antipsicotico-1e-padrao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem condição especial identificada: risperidona, opção de primeira linha clássica com eficácia rápida bem estabelecida.",
      detalhe:
        "Monitorar sintomas extrapiramidais e hiperprolactinemia, aos quais pacientes em primeiro episódio são mais sensíveis. Iniciar com dose baixa e titular gradualmente até a dose eficaz mínima.",
      medicamentosRelacionados: ["risperidona"],
      diagnosticosRelacionados: ["esquizofrenia"],
      opcoes: [
        { label: "Antipsicótico iniciado, aguardar resposta", proximoNodeId: "resposta-primeiro-episodio" },
      ],
    },
    {
      id: "resposta-primeiro-episodio",
      tipo: "pergunta",
      texto:
        "Após 4 a 6 semanas de tratamento em dose adequada, houve resposta clínica satisfatória (redução significativa dos sintomas positivos e melhora funcional)?",
      detalhe:
        "Confirmar adesão ao tratamento antes de considerar a resposta insuficiente; a não adesão é a causa mais comum de aparente falha terapêutica.",
      opcoes: [
        { label: "Sim, resposta adequada", proximoNodeId: "conduta-manter-lai" },
        { label: "Não, resposta parcial ou ausente", proximoNodeId: "conduta-otimizar-primeiro-episodio" },
      ],
    },
    {
      id: "conduta-manter-lai",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Manter o antipsicótico atual na dose eficaz.",
      detalhe:
        "Discutir com o paciente a possibilidade de formulação injetável de ação prolongada (LAI) para melhorar a adesão, especialmente se histórico de dificuldade de adesão à medicação oral. Manter acompanhamento clínico regular e monitorização metabólica.",
    },
    {
      id: "conduta-otimizar-primeiro-episodio",
      tipo: "pergunta",
      texto:
        "Otimizar a dose do antipsicótico atual até a dose máxima recomendada e reavaliar. Após otimização, a resposta permanece insuficiente?",
      detalhe:
        "Confirmar adesão (considerar dosagem sérica quando disponível) antes de concluir por falha terapêutica.",
      opcoes: [
        { label: "Sim, resposta ainda insuficiente após dose otimizada", proximoNodeId: "trocar-antipsicotico-1" },
        { label: "Não, resposta adequada após otimização", proximoNodeId: "conduta-manter-lai" },
      ],
    },
    {
      id: "trocar-antipsicotico-1",
      tipo: "pergunta",
      texto:
        "Trocar para antipsicótico de classe/perfil farmacológico diferente do primeiro utilizado, em dose adequada.",
      detalhe:
        "Esta é a primeira troca de antipsicótico. Reavaliar resposta após 4 a 6 semanas na dose adequada do novo agente.",
      opcoes: [
        { label: "Reavaliar resposta ao segundo antipsicótico", proximoNodeId: "resposta-segundo-antipsicotico" },
      ],
    },
    {
      id: "resposta-segundo-antipsicotico",
      tipo: "pergunta",
      texto:
        "Após 4 a 6 semanas de tratamento na dose adequada do segundo antipsicótico (de classe diferente do primeiro), houve resposta clínica satisfatória?",
      detalhe:
        "Confirmar adesão antes de concluir por falha terapêutica. A falha a este segundo agente, em dose e tempo adequados, caracteriza esquizofrenia refratária ao tratamento.",
      opcoes: [
        { label: "Sim, resposta adequada", proximoNodeId: "conduta-manter-lai" },
        { label: "Não, falha a 2 antipsicóticos em dose/tempo adequados", proximoNodeId: "indicacao-clozapina" },
      ],
    },
    {
      id: "historico-tratamentos",
      tipo: "pergunta",
      texto:
        "Já houve falha de resposta a 2 antipsicóticos diferentes (classes farmacológicas distintas), cada um em dose e tempo adequados (geralmente ≥4-6 semanas em dose terapêutica)?",
      detalhe:
        "Esta é a definição operacional de esquizofrenia refratária/resistente ao tratamento. Confirmar adesão a ambas as tentativas antes de considerar o critério preenchido.",
      opcoes: [
        { label: "Não, falha a apenas 1 antipsicótico ou histórico incerto", proximoNodeId: "perfil-antipsicotico-primeiro-episodio" },
        { label: "Sim, falha a 2 antipsicóticos em dose/tempo adequados", proximoNodeId: "indicacao-clozapina" },
      ],
    },
    {
      id: "indicacao-clozapina",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Esquizofrenia refratária ao tratamento confirmada: a clozapina é o padrão-ouro para esses casos, apesar de permanecer subutilizada na prática clínica.",
      detalhe:
        "A clozapina apresenta eficácia superior a outros antipsicóticos em pacientes refratários e deve ser oferecida assim que o critério de refratariedade for preenchido, sem atrasos desnecessários. Discutir com o paciente os benefícios esperados e a necessidade de monitorização hematológica obrigatória.",
      medicamentosRelacionados: ["clozapina"],
      opcoes: [
        { label: "Iniciar clozapina com monitorização hematológica", proximoNodeId: "monitorizacao-clozapina" },
      ],
    },
    {
      id: "monitorizacao-clozapina",
      tipo: "pergunta",
      texto:
        "Iniciar clozapina com titulação lenta e gradual, sob monitorização hematológica obrigatória (hemograma seriado).",
      detalhe:
        "Risco de agranulocitose exige hemograma antes do início, semanalmente nas primeiras 18 semanas, depois quinzenalmente até completar 1 ano, e mensalmente a partir de então, conforme protocolo local. Orientar o paciente sobre sinais de alerta (febre, sintomas de infecção) que exigem avaliação imediata. Monitorar também risco de miocardite, constipação grave/íleo paralítico, sialorreia e efeitos metabólicos.",
      opcoes: [
        { label: "Prosseguir e reavaliar resposta após dose/tempo adequados", proximoNodeId: "resposta-clozapina" },
      ],
    },
    {
      id: "resposta-clozapina",
      tipo: "pergunta",
      texto:
        "Após dose e tempo adequados de clozapina (geralmente 8 a 12 semanas em dose terapêutica, idealmente confirmada por nível sérico), a resposta clínica foi satisfatória?",
      detalhe:
        "Considerar dosagem de nível sérico de clozapina para confirmar adequação da dose antes de concluir por falha terapêutica.",
      opcoes: [
        { label: "Sim, resposta adequada", proximoNodeId: "conduta-manter-clozapina" },
        { label: "Não, resposta insuficiente mesmo em dose/tempo adequados", proximoNodeId: "conduta-potencializacao" },
      ],
    },
    {
      id: "conduta-manter-clozapina",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Manter a clozapina na dose eficaz, com monitorização hematológica contínua conforme protocolo.",
      detalhe:
        "Manter acompanhamento clínico regular, monitorização metabólica e reforço de adesão ao esquema de hemogramas periódicos, essencial para a segurança do tratamento a longo prazo.",
      medicamentosRelacionados: ["clozapina"],
    },
    {
      id: "conduta-potencializacao",
      tipo: "conduta",
      nivel: "alerta",
      texto:
        "Resposta insuficiente à clozapina em dose e tempo adequados: considerar estratégias de potencialização.",
      detalhe:
        "Opções incluem associação de um segundo antipsicótico (ex. aripiprazol como adjuvante, com possível benefício também sobre efeitos metabólicos) e eletroconvulsoterapia (ECT), com evidência de benefício em esquizofrenia refratária à clozapina. Encaminhar a serviço especializado em psicose refratária para condução conjunta do caso.",
      medicamentosRelacionados: ["aripiprazol"],
    },
  ],

  referencias: [
    "American Psychiatric Association (APA). Practice Guideline for the Treatment of Patients with Schizophrenia.",
    "National Institute for Health and Care Excellence (NICE). Psychosis and schizophrenia in adults: prevention and management (CG178).",
    "Howes OD, et al. Treatment-Resistant Schizophrenia: Treatment Response and Resistance in Psychosis (TRRIP) Working Group Consensus Guidelines.",
    "Associação Brasileira de Psiquiatria (ABP)/Associação Médica Brasileira (AMB). Diretriz: Esquizofrenia — Diagnóstico",
  ],
};
