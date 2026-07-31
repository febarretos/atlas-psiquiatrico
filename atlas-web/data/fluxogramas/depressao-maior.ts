import { Fluxograma } from "./types";

export const depressaoMaior: Fluxograma = {
  id: "depressao-maior",

  titulo: "Manejo do Episódio Depressivo Maior",

  categoria: "Transtornos do Humor",

  descricao:
    "Algoritmo para rastreio, confirmação diagnóstica, avaliação de risco de suicídio e escolha/ajuste de tratamento no episódio depressivo maior, baseado em diretrizes CANMAT/APA.",

  nodeInicialId: "rastreio",

  nodes: [
    {
      id: "rastreio",
      tipo: "pergunta",
      texto:
        "O paciente apresenta humor deprimido e/ou perda de interesse/prazer (anedonia) na maior parte do dia, quase todos os dias, por pelo menos 2 semanas, com prejuízo funcional?",
      detalhe:
        "Rastreio inicial. Considere o uso de instrumentos como PHQ-9 como apoio, mas o diagnóstico é clínico.",
      opcoes: [
        { label: "Sim", proximoNodeId: "confirmacao-diagnostica" },
        { label: "Não", proximoNodeId: "conduta-sem-criterios" },
      ],
    },
    {
      id: "conduta-sem-criterios",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Critérios de rastreio não preenchidos para episódio depressivo maior.",
      detalhe:
        "Considerar diagnósticos diferenciais como luto não complicado, transtorno de ajustamento ou transtorno depressivo persistente (distimia). Reavaliar em nova consulta caso os sintomas persistam ou se agravem.",
    },
    {
      id: "confirmacao-diagnostica",
      tipo: "pergunta",
      texto:
        "Confirmam-se pelo menos 5 sintomas do DSM-5-TR (humor deprimido, anedonia, alteração de peso/apetite, insônia ou hipersonia, agitação ou retardo psicomotor, fadiga, sentimento de culpa/inutilidade, dificuldade de concentração, ideação de morte), excluindo causa orgânica, uso de substância ou episódio maníaco/hipomaníaco prévio?",
      detalhe:
        "A investigação deve excluir hipotireoidismo, anemia, deficiências nutricionais, uso de substâncias e transtorno bipolar antes de firmar o diagnóstico.",
      opcoes: [
        { label: "Sim, critérios confirmados", proximoNodeId: "risco-suicida" },
        {
          label: "Não / dúvida diagnóstica",
          proximoNodeId: "conduta-diagnostico-diferencial",
        },
      ],
    },
    {
      id: "conduta-diagnostico-diferencial",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Investigar diagnósticos diferenciais antes de iniciar tratamento antidepressivo específico.",
      detalhe:
        "Solicitar TSH, hemograma e avaliação de uso de substâncias; rastrear história de episódios de humor elevado (hipomania/mania) para excluir transtorno bipolar, o que mudaria completamente a estratégia terapêutica.",
    },
    {
      id: "risco-suicida",
      tipo: "pergunta",
      texto:
        "Há ideação suicida ativa, plano estruturado, tentativa recente de suicídio, ou fatores de risco graves associados (impulsividade importante, acesso fácil a meios letais, desesperança intensa, isolamento social)?",
      detalhe:
        "A avaliação de risco de suicídio deve ser feita de forma direta e sistemática em toda consulta de um episódio depressivo.",
      opcoes: [
        { label: "Sim, risco significativo", proximoNodeId: "conduta-risco-alto" },
        { label: "Não, risco baixo", proximoNodeId: "gravidade" },
      ],
    },
    {
      id: "conduta-risco-alto",
      tipo: "conduta",
      nivel: "alerta",
      texto:
        "Risco de suicídio significativo: priorizar segurança imediata do paciente.",
      detalhe:
        "Avaliar necessidade de internação psiquiátrica (voluntária ou involuntária, se risco iminente); remover acesso a meios letais; envolver a família/rede de apoio; estabelecer plano de segurança por escrito; garantir contato de acompanhamento em 24-48h; encaminhamento urgente ao psiquiatra caso o atendimento não seja especializado.",
    },
    {
      id: "gravidade",
      tipo: "pergunta",
      texto: "Qual a gravidade do episódio atual, com base em julgamento clínico e/ou escalas (PHQ-9, HAM-D)?",
      detalhe:
        "Gravidade leve: sintomas mínimos além do necessário para diagnóstico, prejuízo funcional leve. Moderada a grave: maior número de sintomas, prejuízo funcional importante ou sintomas psicóticos/melancólicos.",
      opcoes: [
        { label: "Leve", proximoNodeId: "leve-preferencia" },
        { label: "Moderada a grave", proximoNodeId: "tratamento-combinado" },
      ],
    },
    {
      id: "leve-preferencia",
      tipo: "pergunta",
      texto:
        "Nos episódios leves, psicoterapia isolada é a primeira escolha. O paciente tem preferência e acesso a psicoterapia baseada em evidência (TCC, ativação comportamental ou terapia interpessoal)?",
      opcoes: [
        { label: "Sim", proximoNodeId: "conduta-leve-psicoterapia" },
        { label: "Não / sem acesso", proximoNodeId: "conduta-leve-farmaco" },
      ],
    },
    {
      id: "conduta-leve-psicoterapia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Iniciar psicoterapia baseada em evidência (TCC, ativação comportamental ou terapia interpessoal) como tratamento isolado.",
      detalhe:
        "Farmacoterapia não é obrigatória em episódios leves. Reavaliar resposta clínica em 4 a 6 semanas; se ausência de melhora, considerar associação de antidepressivo.",
    },
    {
      id: "conduta-leve-farmaco",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem acesso à psicoterapia: considerar antidepressivo de primeira linha (ISRS, ex. sertralina ou escitalopram) isoladamente, ou monitoramento ativo estruturado (watchful waiting) se sintomas muito leves e preferência do paciente.",
      detalhe: "Reavaliar resposta clínica em 4 a 6 semanas.",
    },
    {
      id: "tratamento-combinado",
      tipo: "pergunta",
      texto:
        "Em episódios moderados a graves, iniciar tratamento combinado: farmacoterapia com antidepressivo de primeira linha (ISRS ou ISRSN, ex. sertralina, escitalopram ou venlafaxina) associada a psicoterapia baseada em evidência. Após reavaliação estruturada em 4 a 6 semanas, qual foi a resposta clínica?",
      detalhe:
        "Titular a dose até a faixa terapêutica usual nas primeiras semanas, conforme tolerabilidade. Resposta adequada = melhora ≥50% dos sintomas. Para a escolha do agente inicial, a meta-análise de rede de Cipriani et al. (2018, Lancet, 21 antidepressivos) mostrou eficácia/aceitabilidade combinadas relativamente melhores para agomelatina, escitalopram, mirtazapina, paroxetina, sertralina e vortioxetina — mas as diferenças absolutas entre a maioria dos antidepressivos são pequenas, e a escolha deve ser individualizada por perfil de efeitos adversos, comorbidades, interações e preferência do paciente, não apenas por eficácia populacional média.",
      opcoes: [
        { label: "Resposta adequada (≥50% de melhora)", proximoNodeId: "conduta-manter" },
        { label: "Resposta parcial (melhora, mas incompleta)", proximoNodeId: "conduta-otimizar" },
        { label: "Sem resposta", proximoNodeId: "segunda-tentativa" },
      ],
    },
    {
      id: "conduta-manter",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Manter o tratamento atual na dose eficaz.",
      detalhe:
        "Manter farmacoterapia e psicoterapia por pelo menos 6 a 9 meses após a remissão (fase de continuação) para reduzir risco de recaída; considerar manutenção prolongada em casos recorrentes.",
    },
    {
      id: "conduta-otimizar",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Otimizar a dose do antidepressivo até a dose máxima tolerada, respeitando a faixa terapêutica.",
      detalhe:
        "Reforçar adesão e adequação da psicoterapia. Reavaliar novamente em mais 2 a 4 semanas após a otimização de dose.",
    },
    {
      id: "segunda-tentativa",
      tipo: "pergunta",
      texto:
        "Já houve falha de resposta a duas ou mais tentativas adequadas de antidepressivos (dose e tempo adequados, de classes diferentes)?",
      detalhe:
        "Falha adequada considera dose máxima tolerada mantida por ao menos 4 a 6 semanas. O estudo STAR-D (Rush et al., maior estudo pragmático já realizado em depressão) mostrou queda progressiva nas taxas de remissão a cada tentativa sequencial de monoterapia — cerca de 37% no 1º passo (citalopram), ~31% no 2º, ~14% no 3º e ~13% no 4º passo — além de risco de recaída maior quanto mais tentativas foram necessárias. Esse achado sustenta considerar estratégias de associação/potencialização mais precocemente, em vez de trocas sequenciais repetidas de monoterapia indefinidamente.",
      opcoes: [
        { label: "Não, é a primeira falha", proximoNodeId: "conduta-trocar-classe" },
        { label: "Sim, falha a 2 ou mais tentativas", proximoNodeId: "conduta-resistencia" },
      ],
    },
    {
      id: "conduta-trocar-classe",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Trocar para antidepressivo de outra classe (ex. de ISRS para ISRSN, mirtazapina ou bupropiona) ou associar um segundo agente com mecanismo complementar.",
      detalhe: "Reavaliar resposta clínica em 4 a 6 semanas após a mudança.",
    },
    {
      id: "conduta-resistencia",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Caracteriza-se depressão resistente ao tratamento: encaminhar a psiquiatra especialista ou serviço de referência.",
      detalhe:
        "Considerar estratégias de potencialização (lítio, antipsicótico atípico adjuvante, associação de antidepressivos), e, conforme disponibilidade e gravidade, eletroconvulsoterapia (ECT) ou esketamina intranasal. Reavaliação multidisciplinar é recomendada.",
    },
  ],

  referencias: [
    "Kennedy SH, et al. Canadian Network for Mood and Anxious Treatments (CANMAT) 2016 Clinical Guidelines for the Management of Adults with Major Depressive Disorder.",
    "American Psychiatric Association (APA). Practice Guideline for the Treatment of Patients with Major Depressive Disorder.",
    "National Institute for Health and Care Excellence (NICE). Depression in adults: treatment and management (NG222).",
    "Cipriani A, et al. Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet. 2018.",
    "Rush AJ, et al. Acute and longer-term outcomes in depressed outpatients requiring one or several treatment steps: a STAR*D report. Am J Psychiatry. 2006.",
    "Diretrizes da Associação Brasileira de Psiquiatria (ABP) com a Associação Médica Brasileira (AMB) para o Tratamento da Depressão — Projeto Diretrizes AMB/CFM",
  ],
};
