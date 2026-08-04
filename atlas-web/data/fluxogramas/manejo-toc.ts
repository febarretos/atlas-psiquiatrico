import { Fluxograma } from "./types";

export const manejoToc: Fluxograma = {
  id: "manejo-toc",

  titulo: "Manejo do Transtorno Obsessivo-Compulsivo",

  categoria: "Transtornos de Ansiedade e Relacionados",

  descricao:
    "Algoritmo para confirmação diagnóstica, avaliação de gravidade/insight e escolha/ajuste de tratamento no transtorno obsessivo-compulsivo (TOC), baseado em diretrizes APA/NICE.",

  nodeInicialId: "confirmacao-diagnostica",

  nodes: [
    {
      id: "confirmacao-diagnostica",
      tipo: "pergunta",
      texto:
        "O paciente apresenta obsessões (pensamentos, impulsos ou imagens intrusivos e recorrentes, causadores de ansiedade) e/ou compulsões (comportamentos ou atos mentais repetitivos realizados para reduzir a ansiedade), consumindo mais de 1 hora por dia ou causando sofrimento/prejuízo funcional significativo?",
      detalhe:
        "Considerar o uso da Escala Yale-Brown de Obsessões e Compulsões (Y-BOCS), disponível no módulo Escalas do Atlas, para quantificar gravidade e acompanhar resposta ao tratamento.",
      opcoes: [
        { label: "Sim, critérios de TOC confirmados", proximoNodeId: "avaliacao-insight" },
        { label: "Não / dúvida diagnóstica", proximoNodeId: "conduta-diagnostico-diferencial" },
      ],
    },
    {
      id: "conduta-diagnostico-diferencial",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Critérios para TOC não confirmados: investigar diagnósticos diferenciais.",
      detalhe:
        "Considerar transtorno de ansiedade generalizada, transtorno dismórfico corporal, tricotilomania, transtorno de acumulação (hoarding), transtorno do espectro autista com comportamentos repetitivos, ou sintomas obsessivo-compulsivos secundários a outra condição médica/uso de substância.",
    },
    {
      id: "avaliacao-insight",
      tipo: "pergunta",
      texto:
        "Qual o grau de insight do paciente sobre a irracionalidade das obsessões/compulsões, e qual o impacto funcional atual (trabalho, estudo, relações, autocuidado)?",
      detalhe:
        "Insight variável (bom/razoável, pobre ou ausente/crenças delirantes) e o grau de prejuízo funcional influenciam a escolha e intensidade do tratamento inicial.",
      opcoes: [
        { label: "Insight preservado, prejuízo leve", proximoNodeId: "gravidade-leve" },
        { label: "Insight pobre ou prejuízo moderado a grave", proximoNodeId: "gravidade-moderada-grave" },
      ],
    },
    {
      id: "gravidade-leve",
      tipo: "pergunta",
      texto:
        "Em quadros leves, TCC com exposição e prevenção de resposta (EPR) isolada é a primeira escolha. O paciente tem boa disponibilidade e preferência por psicoterapia especializada?",
      detalhe:
        "TCC-EPR isolada é indicada quando há acesso a terapeuta com treinamento específico em EPR e o paciente está motivado a se engajar no tratamento.",
      opcoes: [
        { label: "Sim, disponibilidade e preferência por TCC-EPR", proximoNodeId: "conduta-tcc-isolada" },
        { label: "Não / sem acesso a TCC-EPR", proximoNodeId: "conduta-isrs-leve" },
      ],
    },
    {
      id: "conduta-tcc-isolada",
      tipo: "pergunta",
      texto:
        "Iniciar TCC com exposição e prevenção de resposta (EPR) como tratamento isolado.",
      detalhe:
        "Se resposta insuficiente, considerar associação de ISRS em dose adequada.",
      opcoes: [
        { label: "Reavaliar resposta após 8-12 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "conduta-isrs-leve",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem acesso à TCC-EPR: iniciar ISRS em dose adequada como tratamento inicial (ex. fluoxetina, sertralina, paroxetina, fluvoxamina ou escitalopram).",
      detalhe:
        "Doses eficazes no TOC costumam ser mais altas do que as utilizadas na depressão.",
      medicamentosRelacionados: ["fluoxetina", "sertralina", "paroxetina", "fluvoxamina", "escitalopram"],
      opcoes: [
        { label: "Reavaliar resposta após 8-12 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "gravidade-moderada-grave",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Em quadros moderados a graves ou com insight pobre, iniciar tratamento combinado: ISRS em dose adequada (frequentemente na faixa superior recomendada, ex. fluoxetina, sertralina, paroxetina, fluvoxamina ou escitalopram) associado a TCC com exposição e prevenção de resposta (EPR).",
      detalhe:
        "A combinação farmacoterapia + TCC-EPR tende a apresentar melhores desfechos que qualquer modalidade isolada em quadros mais graves. Titular a dose do ISRS ao longo das primeiras semanas conforme tolerabilidade.",
      medicamentosRelacionados: ["fluoxetina", "sertralina", "paroxetina", "fluvoxamina", "escitalopram"],
      opcoes: [
        { label: "Reavaliar resposta após 8-12 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "reavaliacao-resposta",
      tipo: "pergunta",
      texto:
        "Após 8 a 12 semanas de tratamento em dose e intensidade adequadas, qual foi a resposta clínica (considerando redução da Y-BOCS e do prejuízo funcional)?",
      detalhe:
        "A resposta ao tratamento do TOC costuma ser mais lenta e gradual do que na depressão; evitar trocas precoces antes de completar o tempo mínimo de tratamento em dose adequada.",
      opcoes: [
        { label: "Resposta adequada (redução ≥35% na Y-BOCS)", proximoNodeId: "conduta-manter-longo-prazo" },
        { label: "Resposta parcial", proximoNodeId: "conduta-otimizar-dose" },
        { label: "Sem resposta", proximoNodeId: "estrategia-refrataria" },
      ],
    },
    {
      id: "conduta-manter-longo-prazo",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Manter o tratamento atual (farmacoterapia e/ou TCC-EPR) por tempo prolongado.",
      detalhe:
        "O TOC tem alto risco de recaída com suspensão precoce do tratamento; recomenda-se manter a farmacoterapia por pelo menos 1 a 2 anos após resposta adequada antes de considerar redução gradual, e manter sessões de manutenção/reforço de TCC quando indicado.",
    },
    {
      id: "conduta-otimizar-dose",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Otimizar a dose do ISRS até o máximo tolerado e reforçar/intensificar a TCC-EPR (maior frequência de sessões ou tarefas de exposição mais desafiadoras).",
      detalhe:
        "Reforçar adesão às tarefas de exposição entre sessões, frequentemente determinante para a resposta. Reavaliar novamente após 4 a 6 semanas adicionais na dose otimizada.",
    },
    {
      id: "estrategia-refrataria",
      tipo: "pergunta",
      texto:
        "Sem resposta a um ISRS em dose máxima tolerada por tempo adequado associado a TCC-EPR bem conduzida: qual a próxima estratégia?",
      detalhe:
        "Antes de considerar refratariedade, confirmar adesão ao tratamento farmacológico e à TCC-EPR, incluindo qualidade da exposição realizada.",
      opcoes: [
        { label: "Trocar para outro ISRS ou para clomipramina", proximoNodeId: "conduta-trocar-agente" },
        { label: "Associar antipsicótico atípico em dose baixa (potencialização)", proximoNodeId: "conduta-potencializar" },
        { label: "Refratário a múltiplas tentativas adequadas", proximoNodeId: "conduta-encaminhar-especializado" },
      ],
    },
    {
      id: "conduta-trocar-agente",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Trocar para outro ISRS de eficácia estabelecida no TOC ou para clomipramina (antidepressivo tricíclico com ação serotoninérgica potente).",
      detalhe:
        "Clomipramina é uma alternativa eficaz, porém com perfil de efeitos adversos mais desfavorável (anticolinérgicos, cardiovasculares) que exige monitorização, incluindo ECG em pacientes com fatores de risco cardiovascular. Reavaliar resposta em 8 a 12 semanas.",
      medicamentosRelacionados: ["clomipramina"],
    },
    {
      id: "conduta-potencializar",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Associar antipsicótico atípico em dose baixa (ex. risperidona ou aripiprazol) como potencializador ao ISRS/clomipramina em uso.",
      detalhe:
        "Estratégia com evidência de benefício em subgrupo de pacientes refratários, especialmente com tiques associados. Reavaliar resposta em 4 a 8 semanas e considerar suspensão se não houver benefício claro, pelo perfil de efeitos adversos metabólicos.",
      medicamentosRelacionados: ["risperidona", "aripiprazol"],
    },
    {
      id: "conduta-encaminhar-especializado",
      tipo: "conduta",
      nivel: "alerta",
      texto:
        "TOC grave e refratário a múltiplas tentativas de tratamento adequado: encaminhar a serviço especializado em TOC refratário.",
      detalhe:
        "Considerar avaliação para neurocirurgia funcional (estimulação cerebral profunda ou procedimentos ablativos) ou estimulação magnética transcraniana em centros de referência, reservada a casos graves, crônicos e com prejuízo funcional acentuado apesar de tratamento farmacológico e psicoterápico otimizado.",
    },
  ],

  referencias: [
    "American Psychiatric Association (APA). Practice Guideline for the Treatment of Patients with Obsessive-Compulsive Disorder.",
    "National Institute for Health and Care Excellence (NICE). Obsessive-compulsive disorder and body dysmorphic disorder: treatment (CG31).",
    "Koran LM, Simpson HB. Guideline Watch: Practice Guideline for the Treatment of Patients with Obsessive-Compulsive Disorder.",
    "Associação Brasileira de Psiquiatria (ABP)/Associação Médica Brasileira (AMB). Diretriz: Transtorno Obsessivo-Compulsivo — Diagnóstico e Tratamento",
  ],
};
