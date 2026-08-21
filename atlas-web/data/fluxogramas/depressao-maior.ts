import { Fluxograma } from "./types";

export const depressaoMaior: Fluxograma = {
  id: "depressao-maior",

  titulo: "Manejo do Episódio Depressivo Maior",

  categoria: "Transtornos do Humor",

  descricao:
    "Algoritmo para rastreio, confirmação diagnóstica, avaliação de risco de suicídio e escolha/ajuste de tratamento no episódio depressivo maior, baseado em diretrizes CANMAT/APA — com a escolha do antidepressivo vinculada ao perfil do paciente, não apenas à classe.",

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
        { label: "Moderada a grave", proximoNodeId: "perfil-farmaco-moderada-grave" },
      ],
    },
    {
      id: "leve-preferencia",
      tipo: "pergunta",
      texto:
        "Nos episódios leves, psicoterapia isolada é a primeira escolha. O paciente tem preferência e acesso a psicoterapia baseada em evidência (TCC, ativação comportamental ou terapia interpessoal)?",
      opcoes: [
        { label: "Sim", proximoNodeId: "conduta-leve-psicoterapia" },
        { label: "Não / sem acesso", proximoNodeId: "perfil-farmaco-leve" },
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
      diagnosticosRelacionados: ["depressao-maior"],
    },

    // ─────────────────────────────────────────────────────────────
    // Perfil do paciente — episódio LEVE sem acesso a psicoterapia
    // ─────────────────────────────────────────────────────────────
    {
      id: "perfil-farmaco-leve",
      tipo: "pergunta",
      texto:
        "Sem acesso à psicoterapia: antes de escolher o antidepressivo, o paciente apresenta alguma destas condições relevantes para essa escolha?",
      detalhe:
        "Se houver mais de uma condição relevante ao mesmo tempo, priorize a que for clinicamente mais limitante para essa escolha e individualize a partir daí — esta lista simplifica, para fins didáticos, uma decisão que na prática pode envolver múltiplos fatores simultâneos.",
      opcoes: [
        { label: "Cardiopatia / risco de QT longo", proximoNodeId: "conduta-leve-farmaco-cardiopatia" },
        { label: "Insuficiência renal", proximoNodeId: "conduta-leve-farmaco-renal" },
        { label: "Gravidez ou lactação", proximoNodeId: "conduta-leve-farmaco-gravidez" },
        { label: "Idoso / risco de queda", proximoNodeId: "conduta-leve-farmaco-idoso" },
        { label: "Insônia proeminente como sintoma-alvo", proximoNodeId: "conduta-leve-farmaco-insonia" },
        { label: "Fadiga/hipersonia proeminente como sintoma-alvo", proximoNodeId: "conduta-leve-farmaco-fadiga" },
        { label: "Nenhuma condição especial", proximoNodeId: "conduta-leve-farmaco" },
      ],
    },
    {
      id: "conduta-leve-farmaco-cardiopatia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Antidepressivo com menor risco cardiovascular: sertralina tem o melhor perfil de segurança cardiovascular entre os ISRS.",
      detalhe:
        "Evitar citalopram em dose alta (risco de prolongamento do QT, dose máxima já reduzida pela FDA) e evitar antidepressivos tricíclicos em dose alta (cardiotoxicidade por bloqueio de canais de sódio). Reavaliar resposta clínica em 4 a 6 semanas.",
      medicamentosRelacionados: ["sertralina"],
    },
    {
      id: "conduta-leve-farmaco-renal",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Priorizar antidepressivo sem necessidade de ajuste de dose na insuficiência renal: sertralina ou escitalopram.",
      detalhe:
        "Venlafaxina, duloxetina, bupropiona e mirtazapina exigem ajuste de dose na insuficiência renal — evitar como primeira escolha nesse contexto. Reavaliar resposta clínica em 4 a 6 semanas.",
      medicamentosRelacionados: ["sertralina", "escitalopram"],
    },
    {
      id: "conduta-leve-farmaco-gravidez",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Priorizar o antidepressivo com o perfil mais favorável já documentado para gestação e lactação: sertralina.",
      detalhe:
        "Sertralina é uma das opções mais estudadas na gestação e é considerada compatível com a amamentação na maioria dos casos. A decisão final deve sempre ser individualizada e, idealmente, discutida com a obstetrícia. Reavaliar resposta clínica em 4 a 6 semanas.",
      medicamentosRelacionados: ["sertralina"],
    },
    {
      id: "conduta-leve-farmaco-idoso",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Priorizar menor carga anticolinérgica e menor sedação, para reduzir risco de queda: sertralina ou escitalopram.",
      detalhe:
        "Evitar como primeira escolha agentes mais sedativos/anticolinérgicos (trazodona, mirtazapina, antidepressivos tricíclicos) nesse perfil. Se um tricíclico for necessário por outro motivo, a nortriptilina é a opção preferida entre eles em idosos. Reavaliar resposta clínica em 4 a 6 semanas.",
      medicamentosRelacionados: ["sertralina", "escitalopram"],
    },
    {
      id: "conduta-leve-farmaco-insonia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Insônia como sintoma-alvo proeminente: considerar mirtazapina ou trazodona pelo efeito sedativo/hipnótico.",
      detalhe:
        "Trazodona tem risco de hipotensão ortostática mais pronunciado nas primeiras doses — atenção especial se houver também risco de queda. Reavaliar resposta clínica em 4 a 6 semanas.",
      medicamentosRelacionados: ["mirtazapina", "trazodona"],
    },
    {
      id: "conduta-leve-farmaco-fadiga",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Fadiga ou hipersonia como sintoma-alvo proeminente: considerar bupropiona pelo efeito sobre energia, motivação e concentração.",
      detalhe:
        "Evitar em epilepsia e em anorexia/bulimia nervosa (contraindicações formais, risco convulsivo). Reavaliar resposta clínica em 4 a 6 semanas.",
      medicamentosRelacionados: ["bupropiona"],
    },
    {
      id: "conduta-leve-farmaco",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem condição especial identificada: considerar antidepressivo de primeira linha (ISRS), como sertralina ou escitalopram, isoladamente — ou monitoramento ativo estruturado (watchful waiting) se sintomas muito leves e preferência do paciente.",
      detalhe:
        "A meta-análise de rede de Cipriani et al. (2018, Lancet, 21 antidepressivos) mostrou eficácia/aceitabilidade combinadas relativamente melhores para agomelatina, escitalopram, mirtazapina, paroxetina, sertralina e vortioxetina — mas as diferenças absolutas entre a maioria dos antidepressivos são pequenas. Reavaliar resposta clínica em 4 a 6 semanas.",
      medicamentosRelacionados: ["sertralina", "escitalopram"],
    },

    // ─────────────────────────────────────────────────────────────
    // Perfil do paciente — episódio MODERADO A GRAVE (tratamento combinado)
    // ─────────────────────────────────────────────────────────────
    {
      id: "perfil-farmaco-moderada-grave",
      tipo: "pergunta",
      texto:
        "Em episódios moderados a graves, o tratamento é combinado: farmacoterapia associada a psicoterapia baseada em evidência. Antes de escolher o antidepressivo, o paciente apresenta alguma destas condições relevantes para essa escolha?",
      detalhe:
        "Se houver mais de uma condição relevante ao mesmo tempo, priorize a que for clinicamente mais limitante para essa escolha e individualize a partir daí — esta lista simplifica, para fins didáticos, uma decisão que na prática pode envolver múltiplos fatores simultâneos.",
      opcoes: [
        { label: "Cardiopatia / risco de QT longo", proximoNodeId: "conduta-combinado-cardiopatia" },
        { label: "Insuficiência renal", proximoNodeId: "conduta-combinado-renal" },
        { label: "Gravidez ou lactação", proximoNodeId: "conduta-combinado-gravidez" },
        { label: "Idoso / risco de queda", proximoNodeId: "conduta-combinado-idoso" },
        { label: "Insônia proeminente como sintoma-alvo", proximoNodeId: "conduta-combinado-insonia" },
        { label: "Fadiga/hipersonia proeminente como sintoma-alvo", proximoNodeId: "conduta-combinado-fadiga" },
        { label: "Nenhuma condição especial", proximoNodeId: "conduta-combinado-padrao" },
      ],
    },
    {
      id: "conduta-combinado-cardiopatia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Antidepressivo com menor risco cardiovascular, associado a psicoterapia: sertralina tem o melhor perfil de segurança cardiovascular entre os ISRS.",
      detalhe:
        "Evitar citalopram em dose alta e evitar antidepressivos tricíclicos em dose alta pelo risco de prolongamento do QT e arritmia — ver módulo Emergências: Torsades de Pointes. Titular até a faixa terapêutica usual nas primeiras semanas, conforme tolerabilidade.",
      medicamentosRelacionados: ["sertralina"],
      opcoes: [
        { label: "Reavaliar após 4-6 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-combinado" },
      ],
    },
    {
      id: "conduta-combinado-renal",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Priorizar antidepressivo sem necessidade de ajuste de dose na insuficiência renal, associado a psicoterapia: sertralina ou escitalopram.",
      detalhe:
        "Venlafaxina, duloxetina, bupropiona e mirtazapina exigem ajuste de dose na insuficiência renal — evitar como primeira escolha nesse contexto. Titular até a faixa terapêutica usual nas primeiras semanas, conforme tolerabilidade.",
      medicamentosRelacionados: ["sertralina", "escitalopram"],
      opcoes: [
        { label: "Reavaliar após 4-6 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-combinado" },
      ],
    },
    {
      id: "conduta-combinado-gravidez",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Priorizar o antidepressivo com o perfil mais favorável já documentado para gestação e lactação, associado a psicoterapia: sertralina.",
      detalhe:
        "Sertralina é uma das opções mais estudadas na gestação e é considerada compatível com a amamentação na maioria dos casos. A decisão final deve sempre ser individualizada e, idealmente, discutida com a obstetrícia. Titular até a faixa terapêutica usual nas primeiras semanas, conforme tolerabilidade.",
      medicamentosRelacionados: ["sertralina"],
      opcoes: [
        { label: "Reavaliar após 4-6 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-combinado" },
      ],
    },
    {
      id: "conduta-combinado-idoso",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Priorizar menor carga anticolinérgica e menor sedação, para reduzir risco de queda, associado a psicoterapia: sertralina ou escitalopram.",
      detalhe:
        "Evitar como primeira escolha agentes mais sedativos/anticolinérgicos (trazodona, mirtazapina, antidepressivos tricíclicos) nesse perfil. Se um tricíclico for necessário por outro motivo, a nortriptilina é a opção preferida entre eles em idosos. Titular até a faixa terapêutica usual nas primeiras semanas, conforme tolerabilidade.",
      medicamentosRelacionados: ["sertralina", "escitalopram"],
      opcoes: [
        { label: "Reavaliar após 4-6 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-combinado" },
      ],
    },
    {
      id: "conduta-combinado-insonia",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Insônia como sintoma-alvo proeminente: considerar mirtazapina ou trazodona, associado a psicoterapia.",
      detalhe:
        "Trazodona tem risco de hipotensão ortostática mais pronunciado nas primeiras doses — atenção especial se houver também risco de queda. Titular até a faixa terapêutica usual nas primeiras semanas, conforme tolerabilidade.",
      medicamentosRelacionados: ["mirtazapina", "trazodona"],
      opcoes: [
        { label: "Reavaliar após 4-6 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-combinado" },
      ],
    },
    {
      id: "conduta-combinado-fadiga",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Fadiga ou hipersonia como sintoma-alvo proeminente: considerar bupropiona, associada a psicoterapia.",
      detalhe:
        "Evitar em epilepsia e em anorexia/bulimia nervosa (contraindicações formais, risco convulsivo). Titular até a faixa terapêutica usual nas primeiras semanas, conforme tolerabilidade.",
      medicamentosRelacionados: ["bupropiona"],
      opcoes: [
        { label: "Reavaliar após 4-6 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-combinado" },
      ],
    },
    {
      id: "conduta-combinado-padrao",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Sem condição especial identificada: antidepressivo de primeira linha (ISRS ou ISRSN, ex. sertralina ou escitalopram), associado a psicoterapia baseada em evidência.",
      detalhe:
        "Titular a dose até a faixa terapêutica usual nas primeiras semanas, conforme tolerabilidade. A meta-análise de rede de Cipriani et al. (2018, Lancet, 21 antidepressivos) mostrou eficácia/aceitabilidade combinadas relativamente melhores para agomelatina, escitalopram, mirtazapina, paroxetina, sertralina e vortioxetina — mas as diferenças absolutas entre a maioria dos antidepressivos são pequenas, e a escolha deve ser individualizada por perfil de efeitos adversos, comorbidades, interações e preferência do paciente, não apenas por eficácia populacional média.",
      medicamentosRelacionados: ["sertralina", "escitalopram"],
      opcoes: [
        { label: "Reavaliar após 4-6 semanas de tratamento →", proximoNodeId: "avaliacao-resposta-combinado" },
      ],
    },
    {
      id: "avaliacao-resposta-combinado",
      tipo: "pergunta",
      texto:
        "Após reavaliação estruturada em 4 a 6 semanas de tratamento combinado (farmacoterapia + psicoterapia), qual foi a resposta clínica?",
      detalhe: "Resposta adequada = melhora ≥50% dos sintomas.",
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
      detalhe:
        "A escolha entre essas opções também deve considerar o perfil do paciente (ex.: venlafaxina/duloxetina se sintomas de dor associados; mirtazapina se insônia proeminente; bupropiona se fadiga/disfunção sexual prévia). Reavaliar resposta clínica em 4 a 6 semanas após a mudança.",
      medicamentosRelacionados: ["venlafaxina", "mirtazapina", "bupropiona"],
    },
    {
      id: "conduta-resistencia",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Caracteriza-se depressão resistente ao tratamento: encaminhar a psiquiatra especialista ou serviço de referência.",
      detalhe:
        "Considerar estratégias de potencialização (lítio, antipsicótico atípico adjuvante como quetiapina ou aripiprazol, associação de antidepressivos), e, conforme disponibilidade e gravidade, eletroconvulsoterapia (ECT) ou esketamina intranasal. Reavaliação multidisciplinar é recomendada.",
      medicamentosRelacionados: ["litio", "quetiapina", "aripiprazol"],
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
