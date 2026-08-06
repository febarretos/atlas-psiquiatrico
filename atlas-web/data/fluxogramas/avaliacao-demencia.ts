import { Fluxograma } from "./types";

export const avaliacaoDemencia: Fluxograma = {
  id: "avaliacao-demencia",

  titulo: "Avaliação e Manejo de Demência (Transtorno Neurocognitivo Maior)",

  categoria: "Transtornos Neurocognitivos",

  descricao:
    "Algoritmo para rastreio cognitivo, investigação obrigatória de causas reversíveis, diagnóstico diferencial entre as principais etiologias e conduta farmacológica na demência, baseado em diretrizes da Academia Brasileira de Neurologia, NICE (NG97), critérios de consenso das etiologias (IWG, McKeith, Rascovsky, NINDS-AIREN/VASCOG) e revisões Cochrane sobre os fármacos anti-demência.",

  nodeInicialId: "rastreio-aplicar-instrumento",

  nodes: [
    // ─────────────────────────────────────────────────────────────
    // 1. Rastreio inicial
    // ─────────────────────────────────────────────────────────────
    {
      id: "rastreio-aplicar-instrumento",
      tipo: "conduta",
      nivel: "rotina",
      texto:
        "Queixa de declínio cognitivo (do próprio paciente, de um informante ou observação clínica): aplicar instrumento de rastreio cognitivo breve.",
      detalhe:
        "O MEEM é o instrumento mais tradicional e amplamente validado no Brasil, mas tem sensibilidade limitada para comprometimento cognitivo leve e para disfunção executiva predominante (ex.: fases iniciais de demência frontotemporal). O MoCA tende a ter melhor sensibilidade nesses cenários e é preferível quando a suspeita clínica é de comprometimento leve ou de perfil executivo/visuoespacial. Sempre interpretar o escore ajustado por escolaridade — nunca usar um ponto de corte único.",
      escalasRelacionadas: ["meem", "moca"],
      opcoes: [
        { label: "Instrumento aplicado, avaliar resultado", proximoNodeId: "rastreio-resultado" },
      ],
    },
    {
      id: "rastreio-resultado",
      tipo: "pergunta",
      texto:
        "O escore obtido está abaixo do ponto de corte esperado para a idade/escolaridade do paciente?",
      detalhe:
        "Para o MEEM, usar os pontos de corte ajustados por escolaridade (Brucki et al., 2003): analfabetos ≈ 20; 1-4 anos ≈ 25; 5-8 anos ≈ 26,5; 9-11 anos ≈ 28; >11 anos ≈ 29. Para o MoCA, usar o ponto de corte de 25 validado para a população brasileira (Memória et al., 2013), somando 1 ponto ao escore bruto se o paciente tiver ≤12 anos de escolaridade.",
      opcoes: [
        {
          label: "Sim, escore sugestivo de comprometimento cognitivo",
          proximoNodeId: "investigacao-causas-reversiveis",
        },
        {
          label: "Não, escore dentro do esperado, mas suspeita clínica permanece alta",
          proximoNodeId: "rastreio-normal-suspeita-alta",
        },
        {
          label: "Não, escore dentro do esperado, sem suspeita clínica adicional",
          proximoNodeId: "rastreio-normal-conduta",
        },
      ],
    },
    {
      id: "rastreio-normal-conduta",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Sem indício de comprometimento cognitivo no rastreio atual.",
      detalhe:
        "Orientar o paciente e a família a retornar caso surjam ou progridam sintomas de declínio cognitivo ou funcional. Não é necessário prosseguir a investigação neste momento.",
    },
    {
      id: "rastreio-normal-suspeita-alta",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Escore de rastreio normal não exclui comprometimento cognitivo, especialmente em pacientes de alta escolaridade/reserva cognitiva (falso-negativo) ou com perfil predominantemente executivo mal capturado pelo instrumento usado.",
      detalhe:
        "Considerar avaliação neuropsicológica formal (mais sensível que os instrumentos de rastreio breve) e reavaliação em 6-12 meses. Se a suspeita clínica permanecer relevante, prosseguir a investigação como se o rastreio tivesse sido positivo.",
      opcoes: [
        {
          label: "Prosseguir com investigação completa apesar do rastreio normal",
          proximoNodeId: "investigacao-causas-reversiveis",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // 2. Investigação obrigatória de causas reversíveis
    // ─────────────────────────────────────────────────────────────
    {
      id: "investigacao-causas-reversiveis",
      tipo: "pergunta",
      texto:
        "Investigação de causas reversíveis/tratáveis (etapa obrigatória — nunca pular, mesmo diante de quadro clinicamente típico de demência neurodegenerativa).",
      detalhe:
        "Exames laboratoriais (NICE NG97; ABN): TSH, vitamina B12, ácido fólico, função renal, função hepática, cálcio sérico, hemograma completo. VDRL/FTA-ABS (sífilis) e sorologia para HIV apenas quando clinicamente indicado (não são exames de rotina universal) — por exemplo, fatores de risco específicos ou apresentação atípica. Neuroimagem estrutural: RM de crânio é preferencial (maior sensibilidade para atrofia hipocampal, lesões vasculares e microssangramentos); TC de crânio quando RM não disponível. A neuroimagem é considerada obrigatória em praticamente todo paciente na avaliação inicial de demência para excluir lesão estrutural (hematoma subdural, tumor, hidrocefalia de pressão normal) e ajudar a definir a etiologia — critérios que reforçam ainda mais sua indicação: início antes dos 65 anos, curso rápido (<1-2 anos) ou atípico, sinais neurológicos focais, história recente de trauma craniano, câncer ou uso de anticoagulante.",
      opcoes: [
        {
          label: "Causa reversível identificada e clinicamente compatível com o quadro",
          proximoNodeId: "conduta-causa-reversivel",
        },
        {
          label: "Sem causa reversível identificada / achados compatíveis com processo neurodegenerativo",
          proximoNodeId: "liquor-excecao",
        },
      ],
    },
    {
      id: "conduta-causa-reversivel",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Tratar a causa identificada (ex.: reposição de vitamina B12, tratamento de hipotireoidismo, correção de fator medicamentoso/anticolinérgico) e reavaliar a cognição após a correção.",
      detalhe:
        "Muitos casos são total ou parcialmente reversíveis quando a causa subjacente é tratada precocemente. Não esquecer de considerar pseudodemência depressiva (queixas cognitivas desproporcionais ao desempenho objetivo, história de episódios depressivos) como diagnóstico diferencial nesse contexto, potencialmente reversível com tratamento antidepressivo adequado.",
      opcoes: [
        {
          label: "Melhora parcial ou ausente após tratamento da causa reversível — prosseguir investigação",
          proximoNodeId: "liquor-excecao",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // 3. Exame de exceção — líquor
    // ─────────────────────────────────────────────────────────────
    {
      id: "liquor-excecao",
      tipo: "pergunta",
      texto:
        "Após a investigação acima, o diagnóstico etiológico permanece incerto — especialmente em início pré-senil (<65 anos) ou apresentação atípica?",
      detalhe:
        "Esta é uma via de EXCEÇÃO, não uma etapa de rotina — a maioria dos casos típicos de demência no idoso é diagnosticada clinicamente, com base na investigação já realizada, sem necessidade de análise liquórica.",
      opcoes: [
        { label: "Sim, diagnóstico incerto / critério de exceção presente", proximoNodeId: "conduta-liquor" },
        { label: "Não, quadro já suficientemente esclarecido", proximoNodeId: "diagnostico-diferencial-perfil" },
      ],
    },
    {
      id: "conduta-liquor",
      tipo: "conduta",
      nivel: "atencao",
      texto:
        "Solicitar análise liquórica de biomarcadores: beta-amiloide 42 (Aβ42), tau total e tau fosforilada (p-tau).",
      detalhe:
        "Segundo os critérios do International Working Group (IWG; Dubois et al., 2014), o perfil compatível com patologia de Alzheimer é a redução de Aβ42 associada a elevação de tau total e, sobretudo, de p-tau (mais específica que a tau total para patologia tau da Doença de Alzheimer). Reservado para casos de incerteza diagnóstica real após a investigação padrão — via de exceção.",
      opcoes: [
        { label: "Resultado revisado, seguir para diagnóstico diferencial", proximoNodeId: "diagnostico-diferencial-perfil" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // 4. Diagnóstico diferencial por padrão clínico
    // ─────────────────────────────────────────────────────────────
    {
      id: "diagnostico-diferencial-perfil",
      tipo: "pergunta",
      texto: "Qual o padrão clínico predominante?",
      detalhe:
        "Considerar a possibilidade de etiologia mista (mais comum do que um padrão puro isolado em idosos, especialmente Alzheimer + vascular), mesmo ao classificar pelo padrão predominante abaixo.",
      opcoes: [
        { label: "Início insidioso, memória episódica proeminente — sugestivo de Alzheimer", proximoNodeId: "dd-alzheimer" },
        { label: "Relação temporal com evento vascular, curso em degraus — sugestivo de vascular", proximoNodeId: "dd-vascular" },
        { label: "Flutuação cognitiva, parkinsonismo, alucinações visuais precoces — sugestivo de Corpos de Lewy", proximoNodeId: "dd-lewy" },
        { label: "Mudança precoce de personalidade/comportamento, memória inicialmente preservada — sugestivo de frontotemporal", proximoNodeId: "dd-ftd" },
      ],
    },
    {
      id: "dd-alzheimer",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Padrão compatível com Demência devido à Doença de Alzheimer.",
      detalhe:
        "Início insidioso e progressão gradual e constante, com comprometimento precoce e proeminente da memória episódica (dificuldade de aprender informação nova) e desorientação, evoluindo posteriormente para outros domínios cognitivos. Neuroimagem tipicamente mostra atrofia hipocampal/temporal medial. Confirmação por biomarcadores (líquor ou PET-amiloide) reservada aos casos de incerteza diagnóstica (ver etapa de exceção acima).",
      diagnosticosRelacionados: ["transtorno-neurocognitivo-maior"],
      opcoes: [
        { label: "Prosseguir para definição de conduta farmacológica", proximoNodeId: "conduta-gravidade" },
      ],
    },
    {
      id: "dd-vascular",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Padrão compatível com Demência Vascular.",
      detalhe:
        "Critérios NINDS-AIREN/VASCOG: relação temporal entre o declínio cognitivo e evento(s) cerebrovascular(es) — início dos sintomas cognitivos tipicamente dentro de 3 meses após um AVC reconhecido, ou deterioração cognitiva abrupta, ou curso flutuante/em degraus (múltiplos eventos) ou gradual (doença de pequenos vasos). Sinais neurológicos focais ao exame e evidência de doença cerebrovascular relevante na neuroimagem são exigidos. Predomínio de disfunção executiva e de velocidade de processamento é típico, com memória relativamente mais preservada que na Doença de Alzheimer nas fases iniciais. Otimizar fatores de risco vascular (hipertensão, diabetes, dislipidemia, tabagismo) é parte central do manejo, além da conduta farmacológica sintomática abaixo.",
      diagnosticosRelacionados: ["transtorno-neurocognitivo-maior"],
      opcoes: [
        { label: "Prosseguir para definição de conduta farmacológica", proximoNodeId: "conduta-gravidade" },
      ],
    },
    {
      id: "dd-lewy",
      tipo: "conduta",
      nivel: "alerta",
      texto: "Padrão compatível com Demência com Corpos de Lewy.",
      detalhe:
        "Critérios de consenso (McKeith et al., 2017): 4 características clínicas centrais — flutuação cognitiva marcada, alucinações visuais recorrentes bem formadas, transtorno comportamental do sono REM (TCSREM, pode preceder o declínio cognitivo em anos) e parkinsonismo espontâneo (não induzido por antipsicótico). Demência provável exige ≥2 características centrais, ou 1 característica central + 1 biomarcador indicativo. 🚨 ALERTA CRÍTICO: sensibilidade a neurolépticos é uma marca registrada da Demência com Corpos de Lewy — antipsicóticos típicos (primeira geração) devem ser EVITADOS COMPLETAMENTE, pelo risco de reação de sensibilidade grave (rigidez extrema, piora do parkinsonismo, síndrome neuroléptica maligna, sedação profunda, e aumento de mortalidade). Mesmo antipsicóticos atípicos de alto bloqueio D2 (risperidona, olanzapina) devem ser evitados; se antipsicótico for estritamente necessário, quetiapina ou clozapina em dose baixa são as opções mais toleradas.",
      diagnosticosRelacionados: ["transtorno-neurocognitivo-maior"],
      opcoes: [
        { label: "Prosseguir para definição de conduta farmacológica", proximoNodeId: "conduta-gravidade" },
      ],
    },
    {
      id: "dd-ftd",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Padrão compatível com Demência Frontotemporal (variante comportamental).",
      detalhe:
        "Critérios de Rascovsky et al. (2011): 6 características centrais — desinibição comportamental, apatia/inércia, perda de simpatia/empatia, comportamento perseverativo/estereotipado ou compulsivo/ritualístico, hiperoralidade ou mudança de preferência alimentar, e disfunção executiva com relativa preservação da memória episódica e das habilidades visuoespaciais. \"Possível\" variante comportamental exige ≥3 das 6 características, com deterioração progressiva. Início tipicamente antes dos 65 anos. Diferenciar de variantes com predomínio de linguagem (afasia progressiva primária). Inibidores da colinesterase e memantina NÃO têm eficácia comprovada na demência frontotemporal (mecanismo fisiopatológico distinto, sem o déficit colinérgico proeminente da Doença de Alzheimer) — o manejo farmacológico desta etiologia é predominantemente direcionado a sintomas comportamentais específicos, não aos fármacos anti-demência descritos a seguir.",
      diagnosticosRelacionados: ["transtorno-neurocognitivo-maior"],
      opcoes: [
        { label: "Avaliar mesmo assim a conduta farmacológica geral (para as demais etiologias)", proximoNodeId: "conduta-gravidade" },
      ],
    },

    // ─────────────────────────────────────────────────────────────
    // 5. Conduta farmacológica
    // ─────────────────────────────────────────────────────────────
    {
      id: "conduta-gravidade",
      tipo: "pergunta",
      texto: "Qual a gravidade funcional atual (julgamento clínico global, CDR ou GDS)?",
      opcoes: [
        { label: "Leve a moderada", proximoNodeId: "conduta-leve-moderada" },
        { label: "Moderada a grave", proximoNodeId: "conduta-moderada-grave" },
      ],
    },
    {
      id: "conduta-leve-moderada",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Iniciar inibidor da colinesterase (donepezila, rivastigmina ou galantamina).",
      detalhe:
        "Eficácia comparável entre os três em metanálises diretas e indiretas (revisões Cochrane) — a escolha entre eles é guiada por perfil de tolerabilidade e comorbidades, não por diferença de eficácia estabelecida: donepezila tem posologia mais simples (dose única diária) e é geralmente a mais bem tolerada; rivastigmina transdérmica (adesivo) é preferível quando adesão à via oral é um problema ou há intolerância gastrointestinal proeminente; galantamina é contraindicada em insuficiência renal ou hepática graves, diferente das outras duas. 🚨 Se a etiologia for Demência com Corpos de Lewy: reforçar aqui, no momento da prescrição, que qualquer necessidade futura de manejo de agitação/psicose associada NUNCA deve recorrer a antipsicóticos típicos, pelo risco de reação de sensibilidade grave (ver alerta na etapa de diagnóstico diferencial). Manejo não-farmacológico (estimulação cognitiva, adaptação do ambiente, psicoeducação e suporte ao cuidador) e o manejo específico de sintomas comportamentais e psicológicos da demência (agitação, psicose, depressão) são condutas complementares essenciais em todas as fases, não substituídas pelo tratamento farmacológico anti-demência.",
      medicamentosRelacionados: ["donepezila", "rivastigmina", "galantamina"],
      opcoes: [
        { label: "Progressão para fase moderada a grave ao longo do seguimento", proximoNodeId: "conduta-moderada-grave" },
      ],
    },
    {
      id: "conduta-moderada-grave",
      tipo: "conduta",
      nivel: "rotina",
      texto: "Adicionar ou trocar para memantina; considerar manutenção/associação com inibidor da colinesterase.",
      detalhe:
        "A associação de memantina a um inibidor da colinesterase já em uso é respaldada por ensaios clínicos e amplamente adotada na prática, dado o mecanismo de ação distinto (antagonismo NMDA, não colinérgico) e a ausência de sobreposição relevante de efeitos adversos. 🚨 Se a etiologia for Demência com Corpos de Lewy: manter o mesmo alerta — antipsicóticos típicos permanecem contraindicados também nesta fase, e qualquer necessidade de manejo farmacológico de agitação/psicose grave deve priorizar quetiapina ou clozapina em dose baixa, sempre após esgotar abordagens não farmacológicas. Manejo não-farmacológico e de sintomas comportamentais e psicológicos da demência continua sendo conduta complementar essencial nesta fase, incluindo planejamento antecipado de cuidados e suporte estruturado ao cuidador (risco aumentado de sobrecarga/burnout nas fases mais avançadas).",
      medicamentosRelacionados: ["memantina", "donepezila"],
    },
  ],

  referencias: [
    "Academia Brasileira de Neurologia (ABN) - Diretrizes para diagnóstico e tratamento da Doença de Alzheimer.",
    "National Institute for Health and Care Excellence (NICE). Dementia: assessment, management and support for people living with dementia and their carers (NG97).",
    "American Psychiatric Association (APA). Practice Guideline on the Use of Antipsychotics to Treat Agitation or Psychosis in Patients with Dementia.",
    "Dubois B, Feldman HH, Jacova C, et al. Advancing research diagnostic criteria for Alzheimer's disease: the IWG-2 criteria. Lancet Neurol. 2014.",
    "McKeith IG, Boeve BF, Dickson DW, et al. Diagnosis and management of dementia with Lewy bodies: Fourth consensus report of the DLB Consortium. Neurology. 2017.",
    "Rascovsky K, Hodges JR, Knopman D, et al. Sensitivity of revised diagnostic criteria for the behavioural variant of frontotemporal dementia. Brain. 2011.",
    "Román GC, Tatemichi TK, Erkinjuntti T, et al. Vascular dementia: diagnostic criteria for research studies (NINDS-AIREN). Neurology. 1993.",
    "Sachdev P, Kalaria R, O'Brien J, et al. Diagnostic criteria for vascular cognitive disorders (VASCOG). Alzheimer Dis Assoc Disord. 2014.",
    "Bertolucci PHF, Brucki SMD, Campacci S, Julião Y. O Mini-Exame do Estado Mental em uma população geral: impacto da escolaridade. Arq Neuropsiquiatr. 1994.",
    "Brucki SMD, Nitrini R, Caramelli P, Bertolucci PHF, Okamoto IH. Sugestões para o uso do Mini-Exame do Estado Mental no Brasil. Arq Neuropsiquiatr. 2003.",
    "Memória CM, Yassuda MS, Nakano EY, Forlenza OV. Brief screening for mild cognitive impairment: validation of the Brazilian version of the Montreal cognitive assessment. Int J Geriatr Psychiatry. 2013.",
    "Birks JS, Harvey RJ. Donepezil for dementia due to Alzheimer's disease. Cochrane Database Syst Rev. 2018.",
    "Birks JS, Grimley Evans J. Rivastigmine for Alzheimer's disease. Cochrane Database Syst Rev. 2015.",
    "Loy C, Schneider L. Galantamine for Alzheimer's disease and mild cognitive impairment. Cochrane Database Syst Rev. 2006.",
    "McShane R, Westby MJ, Roberts E, et al. Memantine for dementia. Cochrane Database Syst Rev. 2019.",
    "DSM-5-TR (American Psychiatric Association, 2022).",
  ],
};
