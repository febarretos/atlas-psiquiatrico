import { Fluxograma } from "./types";

export const maniaAguda: Fluxograma = {
  id: "mania-aguda",

  titulo: "Manejo do Episódio Maníaco Agudo",

  categoria: "Transtornos do Humor",

  descricao:
    "Algoritmo para confirmação diagnóstica, avaliação de gravidade e escolha/ajuste de tratamento farmacológico no episódio maníaco agudo, baseado em diretrizes CANMAT/ISBD.",

  nodeInicialId: "confirmacao-quadro",

  nodes: [
    {
      id: "confirmacao-quadro",
      tipo: "pergunta",
      texto:
        "O paciente apresenta humor elevado, expansivo ou irritável, com aumento anormal e persistente da energia/atividade, por pelo menos 1 semana (ou qualquer duração se houver necessidade de internação), associado a pelo menos 3 sintomas do DSM-5-TR (grandiosidade, redução da necessidade de sono, loquacidade, fuga de ideias, distratibilidade, aumento de atividade dirigida a objetivos ou agitação psicomotora, envolvimento excessivo em atividades de risco)?",
      detalhe:
        "Confirmar prejuízo funcional acentuado (social, ocupacional) ou necessidade de hospitalização, ou presença de sintomas psicóticos. Excluir causa orgânica (hipertireoidismo, uso de corticoides, lesão de SNC) e uso de substâncias psicoativas/estimulantes como causa direta do quadro.",
      opcoes: [
        { label: "Sim, critérios de mania confirmados", proximoNodeId: "avaliacao-gravidade" },
        { label: "Não / quadro sugere hipomania ou outra causa", proximoNodeId: "conduta-diagnostico-diferencial" },
      ],
    },
    {
      id: "conduta-diagnostico-diferencial",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Critérios para episódio maníaco não confirmados: investigar diagnósticos diferenciais.",
      detalhe:
        "Considerar hipomania (duração ≥4 dias, sem prejuízo funcional grave e sem psicose), transtorno esquizoafetivo, quadro secundário a substâncias/medicamentos (corticoides, estimulantes, antidepressivos) ou condição clínica geral (hipertireoidismo, lesão de SNC). Solicitar exames complementares conforme suspeita clínica antes de definir o tratamento.",
    },
    {
      id: "avaliacao-gravidade",
      tipo: "pergunta",
      texto:
        "Há risco significativo à segurança própria ou de terceiros, julgamento gravemente comprometido (ex. gastos excessivos, hipersexualidade de risco, comportamento agressivo), sintomas psicóticos associados, ou incapacidade de autocuidado?",
      detalhe:
        "A presença de qualquer um desses fatores geralmente indica necessidade de internação psiquiátrica, voluntária ou involuntária conforme legislação local.",
      opcoes: [
        { label: "Sim, necessidade de internação", proximoNodeId: "conduta-internacao" },
        { label: "Não, manejo ambulatorial possível", proximoNodeId: "revisao-antidepressivo" },
      ],
    },
    {
      id: "conduta-internacao",
      tipo: "conduta",
      nivel: "alerta",
      texto:
        "Indicar internação psiquiátrica para estabilização em ambiente seguro e monitorizado.",
      detalhe:
        "Iniciar antipsicótico atípico (ex. risperidona, olanzapina, quetiapina ou aripiprazol) isolado ou associado a estabilizador de humor (lítio ou valproato), conforme gravidade. Considerar sedação com benzodiazepínico associado se agitação intensa. Suspender antidepressivo em uso, se houver. Reavaliar diariamente a resposta e a necessidade de contenção/medidas de segurança.",
      medicamentosRelacionados: ["risperidona", "olanzapina", "quetiapina", "aripiprazol", "litio", "valproato"],
    },
    {
      id: "revisao-antidepressivo",
      tipo: "pergunta",
      texto:
        "O paciente está em uso de antidepressivo no momento do episódio maníaco?",
      detalhe:
        "Antidepressivos podem precipitar ou agravar viradas maníacas em pacientes com transtorno bipolar.",
      opcoes: [
        { label: "Sim", proximoNodeId: "aviso-suspender-antidepressivo" },
        { label: "Não", proximoNodeId: "escolha-tratamento" },
      ],
    },
    {
      id: "aviso-suspender-antidepressivo",
      tipo: "pergunta",
      texto:
        "Recomenda-se suspender o antidepressivo em uso (preferencialmente de forma gradual, salvo contraindicação), já que sua manutenção pode perpetuar ou agravar o episódio maníaco.",
      detalhe:
        "Após a suspensão, prosseguir com a escolha do tratamento antimaníaco conforme a gravidade do quadro.",
      opcoes: [
        { label: "Prosseguir para escolha do tratamento antimaníaco", proximoNodeId: "escolha-tratamento" },
      ],
    },
    {
      id: "escolha-tratamento",
      tipo: "pergunta",
      texto:
        "Qual estratégia farmacológica inicial é mais adequada para o episódio maníaco em manejo ambulatorial, considerando gravidade, comorbidades, tolerabilidade e preferência do paciente?",
      detalhe:
        "Monoterapia (estabilizador de humor ou antipsicótico atípico) costuma ser suficiente em quadros leves a moderados. Associação de estabilizador + antipsicótico é indicada em quadros mais graves, com sintomas psicóticos, ou histórico de resposta parcial a monoterapia.",
      opcoes: [
        { label: "Monoterapia com estabilizador de humor (lítio ou valproato)", proximoNodeId: "perfil-estabilizador" },
        { label: "Monoterapia com antipsicótico atípico", proximoNodeId: "perfil-antipsicotico" },
        { label: "Quadro mais grave: associação estabilizador + antipsicótico", proximoNodeId: "trat-associacao" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // Perfil do paciente — monoterapia com ESTABILIZADOR DE HUMOR
    // ─────────────────────────────────────────────────────────────
    {
      id: "perfil-estabilizador",
      tipo: "pergunta",
      texto:
        "Monoterapia com estabilizador de humor. Antes de escolher entre lítio e valproato, o paciente apresenta alguma destas condições relevantes para essa escolha?",
      detalhe:
        "Se houver mais de uma condição relevante ao mesmo tempo, priorize a que for clinicamente mais limitante para essa escolha e individualize a partir daí.",
      opcoes: [
        { label: "Gravidez, ou mulher em idade fértil sem contracepção eficaz", proximoNodeId: "conduta-estabilizador-gravidez" },
        { label: "Insuficiência renal", proximoNodeId: "conduta-estabilizador-renal" },
        { label: "Hepatopatia significativa", proximoNodeId: "conduta-estabilizador-hepatopatia" },
        { label: "Ciclagem rápida ou episódio misto", proximoNodeId: "conduta-estabilizador-ciclagem" },
        { label: "Nenhuma condição especial", proximoNodeId: "conduta-estabilizador-padrao" },
      ],
    },
    {
      id: "conduta-estabilizador-gravidez",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Gravidez ou mulher em idade fértil sem contracepção eficaz: priorizar lítio, evitando valproato.",
      detalhe:
        "Valproato é um dos psicofármacos com maior risco teratogênico documentado (defeitos de tubo neural e outras malformações), devendo ser evitado em mulheres em idade fértil sempre que houver alternativa — não apenas em gestação já confirmada. Lítio também tem risco (ex. anomalia de Ebstein), mas é classicamente considerado a opção com perfil mais favorável entre os dois nessa situação. Solicitar exames basais de função renal e tireoidiana.",
      medicamentosRelacionados: ["litio"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "conduta-estabilizador-renal",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Insuficiência renal: priorizar valproato, evitando lítio.",
      detalhe:
        "Lítio é excretado quase exclusivamente pelo rim e tem janela terapêutica estreita — a insuficiência renal aumenta significativamente o risco de toxicidade. Valproato tem metabolização predominantemente hepática. Solicitar exames basais de função hepática e hemograma antes de iniciar.",
      medicamentosRelacionados: ["valproato"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "conduta-estabilizador-hepatopatia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Hepatopatia significativa: priorizar lítio, evitando valproato.",
      detalhe:
        "Valproato tem potencial hepatotóxico e risco de hiperamonemia, exigindo cautela redobrada em hepatopatia significativa. Lítio não é metabolizado pelo fígado. Solicitar exames basais de função renal e tireoidiana antes de iniciar.",
      medicamentosRelacionados: ["litio"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "conduta-estabilizador-ciclagem",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Ciclagem rápida ou episódio misto: priorizar valproato.",
      detalhe:
        "Valproato tem evidência de eficácia mais consistente que o lítio nesses subtipos de apresentação, conforme diretrizes CANMAT/ISBD. Solicitar exames basais de função hepática e hemograma.",
      medicamentosRelacionados: ["valproato"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "conduta-estabilizador-padrao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem condição especial identificada: lítio (titulado por litemia, alvo geralmente entre 0,8-1,2 mEq/L na fase aguda).",
      detalhe:
        "Lítio segue sendo o padrão histórico entre os estabilizadores, com a vantagem adicional de evidência robusta de redução de risco de suicídio a longo prazo — relevante na escolha de manutenção, não só da fase aguda. Valproato é alternativa igualmente válida na ausência de condição especial. Solicitar exames basais de função renal e tireoidiana.",
      medicamentosRelacionados: ["litio", "valproato"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // Perfil do paciente — monoterapia com ANTIPSICÓTICO ATÍPICO
    // ─────────────────────────────────────────────────────────────
    {
      id: "perfil-antipsicotico",
      tipo: "pergunta",
      texto:
        "Monoterapia com antipsicótico atípico. Antes de escolher entre as opções, o paciente apresenta alguma destas condições relevantes para essa escolha?",
      detalhe:
        "Se houver mais de uma condição relevante ao mesmo tempo, priorize a que for clinicamente mais limitante para essa escolha e individualize a partir daí.",
      opcoes: [
        { label: "Insônia proeminente / necessidade de efeito sedativo", proximoNodeId: "conduta-antipsicotico-insonia" },
        { label: "Preocupação com ganho de peso / risco metabólico", proximoNodeId: "conduta-antipsicotico-metabolico" },
        { label: "Idoso / risco de queda", proximoNodeId: "conduta-antipsicotico-idoso" },
        { label: "Nenhuma condição especial", proximoNodeId: "conduta-antipsicotico-padrao" },
      ],
    },
    {
      id: "conduta-antipsicotico-insonia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Insônia proeminente: considerar quetiapina, pelo efeito sedativo/hipnótico mais pronunciado entre os atípicos.",
      detalhe:
        "Monitorar efeitos metabólicos (ganho de peso, dislipidemia) e hipotensão ortostática, especialmente na titulação inicial.",
      medicamentosRelacionados: ["quetiapina"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "conduta-antipsicotico-metabolico",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Preocupação com ganho de peso ou risco metabólico: considerar aripiprazol, pelo menor risco metabólico entre os antipsicóticos atípicos.",
      detalhe:
        "Monitorar acatisia e inquietação, efeitos adversos mais associados ao aripiprazol que aos demais atípicos, por seu perfil de agonismo parcial D2.",
      medicamentosRelacionados: ["aripiprazol"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "conduta-antipsicotico-idoso",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Idoso ou risco de queda: considerar risperidona em dose baixa, pela menor carga anticolinérgica e menor hipotensão ortostática em relação a olanzapina e quetiapina.",
      detalhe:
        "Titular com cautela e monitorar sintomas extrapiramidais, aos quais idosos são mais sensíveis mesmo em dose baixa.",
      medicamentosRelacionados: ["risperidona"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "conduta-antipsicotico-padrao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem condição especial identificada: risperidona ou olanzapina, considerando preferência do paciente.",
      detalhe:
        "Ambos têm início de ação rápido e boa eficácia documentada na fase aguda da mania. Olanzapina tende a ser mais sedativa e com maior risco metabólico; risperidona tende a ter menor sedação e menor ganho de peso, à custa de maior risco de sintomas extrapiramidais em dose mais alta. Monitorar efeitos metabólicos e extrapiramidais em ambos os casos.",
      medicamentosRelacionados: ["risperidona", "olanzapina"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "trat-associacao",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Iniciar associação de estabilizador de humor (lítio ou valproato) com antipsicótico atípico.",
      detalhe:
        "Indicada em episódios graves, com sintomas psicóticos, agitação importante ou risco elevado. Associada a maior taxa de resposta e remissão que monoterapia em quadros graves, ao custo de mais efeitos adversos.",
      medicamentosRelacionados: ["litio", "valproato", "risperidona", "olanzapina", "quetiapina", "aripiprazol"],
      opcoes: [
        { label: "Reavaliar resposta após 1-2 semanas", proximoNodeId: "reavaliacao-resposta" },
      ],
    },
    {
      id: "reavaliacao-resposta",
      tipo: "pergunta",
      texto:
        "Após 1 a 2 semanas de tratamento em dose adequada, qual foi a resposta clínica?",
      detalhe:
        "Utilizar julgamento clínico e, se disponível, escalas como a Young Mania Rating Scale (YMRS) para objetivar a resposta.",
      opcoes: [
        { label: "Resposta adequada (remissão ou quase remissão dos sintomas)", proximoNodeId: "conduta-manutencao" },
        { label: "Resposta parcial", proximoNodeId: "conduta-otimizar-associar" },
        { label: "Sem resposta", proximoNodeId: "conduta-trocar-refrataria" },
      ],
    },
    {
      id: "conduta-manutencao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Manter o esquema atual e transicionar para a fase de manutenção do transtorno bipolar.",
      detalhe:
        "Reforçar psicoeducação, regularidade do sono e adesão medicamentosa. O mesmo agente eficaz na fase aguda costuma ser mantido como tratamento de manutenção, com ajuste de dose conforme necessário.",
    },
    {
      id: "conduta-otimizar-associar",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Otimizar a dose do agente em uso até a dose máxima tolerada; se já em monoterapia, considerar associar um segundo agente (estabilizador + antipsicótico atípico).",
      detalhe:
        "Verificar adesão e, quando aplicável, nível sérico (lítio, valproato) antes de considerar a resposta insuficiente. Reavaliar novamente em 1 a 2 semanas.",
    },
    {
      id: "conduta-trocar-refrataria",
      tipo: "conduta",
      nivel: "alerta",
      texto:
        "Sem resposta apesar de dose e associação adequadas: trocar a estratégia farmacológica e encaminhar a psiquiatra especialista.",
      detalhe:
        "Considerar troca do antipsicótico ou do estabilizador por outra opção de eficácia estabelecida, ou associação tripla em casos refratários. Eletroconvulsoterapia (ECT) é opção eficaz e deve ser considerada em mania grave/refratária, com sintomas psicóticos graves, catatonia associada ou risco de vida (exaustão física, recusa alimentar/hídrica grave).",
    },
  ],

  referencias: [
    "Yatham LN, et al. Canadian Network for Mood and Anxious Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 Guidelines for the Management of Patients with Bipolar Disorder.",
    "American Psychiatric Association (APA). Practice Guideline for the Treatment of Patients with Bipolar Disorder.",
    "National Institute for Health and Care Excellence (NICE). Bipolar disorder: assessment and management (CG185).",
    "Ministério da Saúde (Brasil). Protocolo Clínico e Diretrizes Terapêuticas (PCDT) — Transtorno Afetivo Bipolar do Tipo I (gov.br/saude)",
  ],
};
