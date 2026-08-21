import { Fluxograma } from "./types";

export const manejoTranstornoBipolar: Fluxograma = {
  id: "manejo-transtorno-bipolar",

  titulo: "Manejo do Transtorno Bipolar — Todas as Fases",

  categoria: "Transtornos do Humor",

  descricao:
    "Algoritmo abrangente para manejo do Transtorno Bipolar (tipo I ou II) em qualquer fase de apresentação — mania/hipomania aguda, depressão bipolar, episódio misto ou fase de manutenção/profilaxia —, baseado nas diretrizes CANMAT/ISBD. Para um detalhamento mais aprofundado especificamente da fase maníaca aguda, ver também o fluxograma 'Manejo do Episódio Maníaco Agudo'.",

  nodeInicialId: "fase-atual",

  nodes: [
    {
      id: "fase-atual",
      tipo: "pergunta",
      texto: "Em qual fase do Transtorno Bipolar o paciente se encontra atualmente?",
      detalhe:
        "A estratégia terapêutica no Transtorno Bipolar depende fundamentalmente da fase de apresentação — uma conduta correta para mania pode ser inadequada ou até prejudicial na depressão bipolar, e vice-versa.",
      opcoes: [
        { label: "Mania ou hipomania aguda", proximoNodeId: "mania-gravidade" },
        { label: "Depressão bipolar aguda", proximoNodeId: "dep-confirmacao" },
        {
          label: "Episódio misto (sintomas maníacos e depressivos simultâneos)",
          proximoNodeId: "misto-conduta",
        },
        {
          label: "Eutimia — fase de manutenção/profilaxia",
          proximoNodeId: "manutencao-confirmacao",
        },
      ],
    },

    {
      id: "mania-gravidade",
      tipo: "pergunta",
      texto:
        "Há risco à segurança própria ou de terceiros, julgamento gravemente comprometido, sintomas psicóticos, ou necessidade de resposta muito rápida?",
      opcoes: [
        { label: "Sim", proximoNodeId: "mania-internacao" },
        { label: "Não", proximoNodeId: "mania-antidepressivo" },
      ],
    },
    {
      id: "mania-internacao",
      tipo: "conduta",
      nivel: "alerta",
      texto: "Priorizar segurança imediata: avaliar necessidade de internação.",
      detalhe:
        "Iniciar antipsicótico atípico (risperidona, olanzapina, quetiapina ou aripiprazol) isolado ou associado a estabilizador de humor (lítio ou valproato) em dose de ataque. Considerar eletroconvulsoterapia (ECT) em quadros graves, refratários ou com risco de vida.",
      medicamentosRelacionados: ["risperidona", "olanzapina", "quetiapina", "aripiprazol", "litio", "valproato"],
    },
    {
      id: "mania-antidepressivo",
      tipo: "pergunta",
      texto:
        "O paciente está em uso de antidepressivo? Se sim, deve ser suspenso — mantê-lo pode perpetuar ou agravar a virada maníaca. Qual estratégia farmacológica inicial foi escolhida?",
      opcoes: [
        {
          label: "Monoterapia com estabilizador (lítio ou valproato)",
          proximoNodeId: "conduta-mania-estabilizador",
        },
        {
          label: "Antipsicótico atípico, isolado ou associado a estabilizador",
          proximoNodeId: "conduta-mania-antipsicotico",
        },
      ],
    },
    {
      id: "conduta-mania-estabilizador",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Iniciar estabilizador de humor em monoterapia (lítio ou valproato).",
      detalhe: "Suspender antidepressivo em uso, se houver, de forma gradual salvo contraindicação.",
      medicamentosRelacionados: ["litio", "valproato"],
      diagnosticosRelacionados: ["bipolar-tipo-1"],
      opcoes: [
        { label: "Reavaliar após 1-2 semanas →", proximoNodeId: "mania-reavaliacao" },
      ],
    },
    {
      id: "conduta-mania-antipsicotico",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Iniciar antipsicótico atípico, isolado ou associado a estabilizador de humor.",
      detalhe: "Suspender antidepressivo em uso, se houver, de forma gradual salvo contraindicação.",
      medicamentosRelacionados: ["risperidona", "olanzapina", "quetiapina", "aripiprazol"],
      opcoes: [
        { label: "Reavaliar após 1-2 semanas →", proximoNodeId: "mania-reavaliacao" },
      ],
    },
    {
      id: "mania-reavaliacao",
      tipo: "pergunta",
      texto: "Após 1 a 2 semanas de tratamento em dose adequada, qual foi a resposta clínica?",
      opcoes: [
        { label: "Resposta adequada", proximoNodeId: "manutencao-confirmacao" },
        { label: "Resposta parcial", proximoNodeId: "mania-otimizar" },
        { label: "Sem resposta", proximoNodeId: "mania-refrataria" },
      ],
    },
    {
      id: "mania-otimizar",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Otimizar a dose até a máxima tolerada e reavaliar em 1-2 semanas.",
      detalhe: "Verificar litemia/nível sérico se em uso de lítio ou valproato, e adesão ao tratamento.",
    },
    {
      id: "mania-refrataria",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Associar um segundo agente (estabilizador + antipsicótico) ou trocar a estratégia inicial.",
      detalhe: "Considerar ECT em casos refratários a múltiplas tentativas farmacológicas adequadas.",
    },

    {
      id: "dep-confirmacao",
      tipo: "pergunta",
      texto:
        "Confirma-se episódio depressivo atual em paciente com diagnóstico já estabelecido de Transtorno Bipolar tipo I ou tipo II?",
      detalhe:
        "Se o diagnóstico de bipolaridade ainda não está confirmado, investigar histórico de episódios de humor elevado antes de tratar como depressão unipolar — considerar o uso do MDQ (disponível no módulo Escalas).",
      opcoes: [
        { label: "Sim", proximoNodeId: "dep-risco" },
        { label: "Diagnóstico de bipolaridade não está estabelecido", proximoNodeId: "dep-diferencial" },
      ],
    },
    {
      id: "dep-diferencial",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Investigar histórico de episódios de hipomania/mania antes de definir a estratégia.",
      detalhe:
        "Se confirmado episódio prévio de humor elevado, reclassificar como Transtorno Bipolar e seguir este mesmo fluxograma; caso contrário, considerar o fluxograma de Manejo do Episódio Depressivo Maior (unipolar).",
    },
    {
      id: "dep-risco",
      tipo: "pergunta",
      texto:
        "Há risco de suicídio significativo, sintomas psicóticos associados, ou necessidade de resposta muito rápida pela gravidade clínica?",
      opcoes: [
        { label: "Sim", proximoNodeId: "dep-ect" },
        { label: "Não", proximoNodeId: "dep-antidepressivo-isolado" },
      ],
    },
    {
      id: "dep-ect",
      tipo: "conduta",
      nivel: "alerta",
      texto: "Considerar internação e eletroconvulsoterapia (ECT) como opção de primeira linha.",
      detalhe:
        "A ECT tem eficácia rápida e é especialmente indicada na depressão bipolar grave, com sintomas psicóticos ou risco de suicídio elevado. Ver também o fluxograma de Avaliação e Manejo do Risco de Suicídio.",
    },
    {
      id: "dep-antidepressivo-isolado",
      tipo: "pergunta",
      texto:
        "O paciente já está em uso de antidepressivo em monoterapia, sem estabilizador de humor ou antipsicótico associado?",
      opcoes: [
        { label: "Sim", proximoNodeId: "dep-corrigir-monoterapia" },
        { label: "Não", proximoNodeId: "dep-primeira-linha" },
      ],
    },
    {
      id: "dep-corrigir-monoterapia",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Corrigir a monoterapia com antidepressivo — risco de virada maníaca/hipomaníaca e ciclagem acelerada.",
      detalhe:
        "Associar estabilizador de humor ou antipsicótico com evidência em depressão bipolar antes de considerar a suspensão do antidepressivo; não suspender abruptamente sem plano de substituição.",
      medicamentosRelacionados: ["quetiapina", "lurasidona", "litio"],
    },
    {
      id: "dep-primeira-linha",
      tipo: "pergunta",
      texto:
        "IMPORTANTE: evitar antidepressivo em monoterapia. Antes de escolher o agente com evidência específica para depressão bipolar, o paciente apresenta alguma destas condições relevantes para essa escolha?",
      detalhe:
        "Em Transtorno Bipolar tipo II há, em geral, maior tolerância a associar um antidepressivo a um estabilizador já em uso do que no tipo I. Se houver mais de uma condição relevante ao mesmo tempo, priorize a que for clinicamente mais limitante e individualize a partir daí.",
      opcoes: [
        { label: "Insônia ou ansiedade proeminente associada", proximoNodeId: "conduta-dep-bipolar-insonia" },
        { label: "Preocupação com ganho de peso / risco metabólico", proximoNodeId: "conduta-dep-bipolar-metabolico" },
        { label: "Nenhuma condição especial", proximoNodeId: "conduta-dep-bipolar-padrao" },
      ],
    },
    {
      id: "conduta-dep-bipolar-insonia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Insônia ou ansiedade proeminente: quetiapina, pelo efeito sedativo/ansiolítico adicional que a torna especialmente útil quando esses sintomas coexistem com a depressão bipolar.",
      detalhe:
        "Monitorar efeitos metabólicos (ganho de peso, dislipidemia) e hipotensão ortostática, especialmente na titulação inicial.",
      medicamentosRelacionados: ["quetiapina"],
      opcoes: [
        { label: "Reavaliar após 6-8 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-dep-bipolar" },
      ],
    },
    {
      id: "conduta-dep-bipolar-metabolico",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Preocupação com ganho de peso ou risco metabólico: lurasidona, pelo perfil metabólico mais favorável entre os antipsicóticos atípicos com evidência específica em depressão bipolar.",
      detalhe:
        "Administrar com alimentos (absorção significativamente maior), associada a lítio ou valproato conforme o quadro. Monitorar acatisia e sintomas extrapiramidais.",
      medicamentosRelacionados: ["lurasidona"],
      opcoes: [
        { label: "Reavaliar após 6-8 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-dep-bipolar" },
      ],
    },
    {
      id: "conduta-dep-bipolar-padrao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem condição especial identificada: lítio, ou quetiapina como alternativa igualmente válida.",
      detalhe:
        "Lítio tem a vantagem adicional de evidência específica de redução de risco de suicídio a longo prazo, relevante já na escolha inicial pensando na fase de manutenção subsequente. Solicitar exames basais de função renal e tireoidiana.",
      medicamentosRelacionados: ["litio", "quetiapina"],
      diagnosticosRelacionados: ["bipolar-tipo-1", "bipolar-tipo-2"],
      opcoes: [
        { label: "Reavaliar após 6-8 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-dep-bipolar" },
      ],
    },
    {
      id: "avaliacao-resposta-dep-bipolar",
      tipo: "pergunta",
      texto: "Após 6 a 8 semanas, qual foi a resposta clínica?",
      opcoes: [
        { label: "Resposta adequada", proximoNodeId: "manutencao-confirmacao" },
        { label: "Resposta parcial", proximoNodeId: "dep-otimizar" },
        { label: "Sem resposta", proximoNodeId: "dep-refrataria" },
      ],
    },
    {
      id: "dep-otimizar",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Otimizar a dose até a máxima tolerada e reforçar psicoterapia baseada em evidência.",
      detalhe: "Terapia focada na família ou terapia interpessoal e de ritmo social têm evidência específica em Transtorno Bipolar. Reavaliar em 4 semanas.",
    },
    {
      id: "dep-refrataria",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Trocar estratégia farmacológica ou associar lamotrigina.",
      detalhe:
        "Considerar troca de antipsicótico, associação de lamotrigina (útil sobretudo na prevenção de novos episódios depressivos), ECT em casos graves, e encaminhamento a especialista/serviço de referência.",
      medicamentosRelacionados: ["lamotrigina"],
    },

    {
      id: "misto-conduta",
      tipo: "pergunta",
      texto:
        "Confirma-se especificador 'com características mistas' (sintomas depressivos e maníacos/hipomaníacos proeminentes e simultâneos)? Evitar antidepressivo — priorizar antipsicótico atípico com evidência em estados mistos (ex: aripiprazol, olanzapina, asenapina) ou valproato. O risco de suicídio costuma ser mais elevado nessa apresentação. Há risco de suicídio significativo associado?",
      opcoes: [
        { label: "Sim", proximoNodeId: "dep-ect" },
        { label: "Não", proximoNodeId: "misto-tratamento" },
      ],
    },
    {
      id: "misto-tratamento",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Iniciar antipsicótico atípico ou valproato, evitando antidepressivo.",
      detalhe:
        "Reavaliar em 2 semanas pela maior instabilidade e risco associados aos estados mistos; se resposta insuficiente, associar um segundo agente ou reencaminhar a este fluxograma pela fase predominante que emergir (maníaca ou depressiva).",
      medicamentosRelacionados: ["aripiprazol", "olanzapina", "valproato"],
    },

    {
      id: "manutencao-confirmacao",
      tipo: "pergunta",
      texto:
        "Paciente em eutimia ou em fase de continuação/manutenção. Já está em uso de tratamento de manutenção (estabilizador de humor ou antipsicótico)?",
      opcoes: [
        { label: "Sim", proximoNodeId: "manutencao-monitorizacao" },
        { label: "Não", proximoNodeId: "manutencao-iniciar" },
      ],
    },
    {
      id: "manutencao-iniciar",
      tipo: "pergunta",
      texto:
        "Iniciar tratamento de manutenção. Ao longo da história do paciente, qual fase predominou nos episódios anteriores?",
      detalhe:
        "Essa é a variável mais importante na escolha do agente de manutenção — lítio e lamotrigina têm perfis de eficácia praticamente opostos entre prevenção de mania e de depressão.",
      opcoes: [
        { label: "Predomínio de episódios maníacos, ou risco de suicídio relevante", proximoNodeId: "conduta-manutencao-mania" },
        { label: "Predomínio de episódios depressivos", proximoNodeId: "conduta-manutencao-depressao" },
        { label: "Sem predomínio claro / episódios mistos equilibrados", proximoNodeId: "conduta-manutencao-padrao" },
      ],
    },
    {
      id: "conduta-manutencao-mania",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Predomínio de episódios maníacos ou risco de suicídio relevante: lítio.",
      detalhe:
        "Lítio é o padrão-ouro para prevenção de recaídas maníacas e tem evidência específica de redução do risco de suicídio a longo prazo — uma das poucas vantagens de mortalidade bem documentadas entre os estabilizadores. Monitorização periódica de função renal e tireoidiana.",
      medicamentosRelacionados: ["litio"],
    },
    {
      id: "conduta-manutencao-depressao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Predomínio de episódios depressivos: lamotrigina.",
      detalhe:
        "Lamotrigina tem eficácia bem documentada na prevenção de recaídas depressivas, mas ação antimaníaca fraca — não deve ser usada isoladamente se houver histórico relevante de mania. Titulação lenta é obrigatória pelo risco de rash cutâneo grave (síndrome de Stevens-Johnson).",
      medicamentosRelacionados: ["lamotrigina"],
    },
    {
      id: "conduta-manutencao-padrao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem predomínio claro entre as fases: lítio, com valproato ou antipsicótico atípico como alternativas conforme tolerabilidade.",
      detalhe:
        "Na ausência de um padrão claro de predomínio, o lítio segue sendo a escolha com base de evidência mais ampla para prevenção de recaídas em geral. Monitorização periódica: função renal e tireoidiana com lítio, função hepática e hemograma com valproato, perfil metabólico com antipsicóticos.",
      medicamentosRelacionados: ["litio", "valproato"],
    },
    {
      id: "manutencao-monitorizacao",
      tipo: "pergunta",
      texto: "Houve recaída (maníaca, depressiva ou mista) nos últimos 12 meses apesar do tratamento de manutenção?",
      opcoes: [
        { label: "Sim", proximoNodeId: "manutencao-otimizar" },
        { label: "Não", proximoNodeId: "manutencao-manter" },
      ],
    },
    {
      id: "manutencao-otimizar",
      tipo: "conduta",
      nivel: "atencao",
      texto: "Otimizar o esquema de manutenção.",
      detalhe:
        "Verificar adesão e nível sérico (litemia ou valproatemia), otimizar dose, e considerar associação de um segundo agente de manutenção antes de trocar a estratégia por completo.",
    },
    {
      id: "manutencao-manter",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Manter o esquema atual de manutenção.",
      detalhe:
        "Monitorização periódica: função renal e tireoidiana com lítio, função hepática e hemograma com valproato, perfil metabólico (peso, glicemia, lipídios) com antipsicóticos. Psicoeducação do paciente e da família sobre sinais precoces de recaída é parte essencial do tratamento de manutenção.",
    },
  ],

  referencias: [
    "Yatham LN, et al. Canadian Network for Mood and Anxious Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 Guidelines for the Management of Patients with Bipolar Disorder.",
    "American Psychiatric Association (APA). Practice Guideline for the Treatment of Patients with Bipolar Disorder.",
    "National Institute for Health and Care Excellence (NICE). Bipolar disorder: assessment and management (CG185).",
    "Ministério da Saúde (Brasil). Protocolo Clínico e Diretrizes Terapêuticas (PCDT) — Transtorno Afetivo Bipolar do Tipo I (gov.br/saude)",
  ],
};
