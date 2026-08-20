import { Diagnostico } from "./types";

export const transtornoAjustamento: Diagnostico = {
  id: "transtorno-ajustamento",

  nome: "Transtorno de Ajustamento",

  categoria: "Transtornos Relacionados a Trauma e a Estressores",

  cid11: "6B43",

  cid10: "F43.2",

  descricao:
    "Desenvolvimento de sintomas emocionais ou comportamentais clinicamente significativos em resposta a um ou mais estressores identificáveis, com início dentro de 3 meses após o início do estressor, caracterizado por sofrimento desproporcional à gravidade ou intensidade do estressor e/ou prejuízo funcional significativo, na ausência de critérios para outro transtorno mental específico.",

  criteriosDiagnosticos: [
    "A. Desenvolvimento de sintomas emocionais ou comportamentais em resposta a um ou mais estressores identificáveis, ocorrendo dentro de 3 meses do início do(s) estressor(es).",
    "B. Esses sintomas ou comportamentos são clinicamente significativos, evidenciados por um ou ambos dos seguintes: (1) sofrimento intenso desproporcional à gravidade ou intensidade do estressor, considerando o contexto externo e fatores culturais que poderiam influenciar a gravidade e a apresentação dos sintomas; (2) prejuízo significativo no funcionamento social, profissional ou em outras áreas importantes da vida.",
    "C. A perturbação relacionada ao estresse não satisfaz os critérios para outro transtorno mental e não é apenas uma exacerbação de um transtorno mental preexistente.",
    "D. Os sintomas não representam luto normal e não são mais bem explicados por transtorno de luto prolongado.",
    "E. Uma vez que o estressor ou suas consequências tenham cessado, os sintomas não persistem por mais de 6 meses adicionais.",
  ],

  especificadores: [
    "Com humor deprimido: predominam sintomas como humor deprimido, choro fácil ou sentimentos de desesperança",
    "Com ansiedade: predominam sintomas como nervosismo, preocupação, inquietação, ou ansiedade de separação",
    "Com ansiedade e humor deprimido mistos: combinação de ambos os sintomas predomina",
    "Com perturbação da conduta: predomina perturbação em que há violação dos direitos alheios ou de normas e regras sociais apropriadas para a idade",
    "Com perturbação mista das emoções e da conduta: predomina combinação de sintomas emocionais (depressão, ansiedade) e perturbação da conduta",
    "Não especificado: para reações mal-adaptativas que não são classificáveis em nenhum dos subtipos específicos",
    "Agudo: perturbação com duração inferior a 6 meses",
    "Persistente (crônico): perturbação com duração de 6 meses ou mais, geralmente em resposta a um estressor crônico ou a um estressor com consequências contínuas",
  ],

  duracaoMinima: "Início dos sintomas dentro de 3 meses do estressor; sintomas não devem persistir por mais de 6 meses após o término do estressor ou de suas consequências (exceto no subtipo persistente/crônico, associado a estressor de efeito contínuo)",

  prevalencia:
    "Um dos diagnósticos mais frequentes em contextos de saúde mental ambulatorial e de consultoria psiquiátrica em hospital geral, com prevalência estimada entre 5-20% conforme o contexto clínico avaliado (mais elevada em serviços de oncologia, cuidados paliativos e após eventos médicos agudos). Pode ocorrer em qualquer idade, sendo particularmente comum em adolescentes e adultos jovens em resposta a transições de vida.",

  cursoEPrognostico:
    "Por definição, curso autolimitado quando o estressor e suas consequências cessam, com resolução dos sintomas geralmente dentro de 6 meses. Em estressores crônicos (doença médica persistente, dificuldades financeiras contínuas, conflito conjugal prolongado), os sintomas podem persistir enquanto o estressor permanecer ativo (especificador persistente/crônico). Constitui fator de risco para desenvolvimento subsequente de transtornos depressivos ou de ansiedade mais estruturados, especialmente quando não tratado ou quando o estressor é grave e recorrente. Risco de comportamento suicida deve ser sistematicamente avaliado, sendo descrito como associado a esse diagnóstico com relativa frequência.",

  diagnosticoDiferencial: [
    "Transtorno Depressivo Maior (sintomas mais numerosos e intensos, preenchendo critérios sindrômicos completos, independentemente da presença de estressor identificável)",
    "Transtornos de Ansiedade especificados (TAG, pânico) quando os sintomas preenchem critérios completos independente do estressor",
    "TEPT e Transtorno de Estresse Agudo (exigem exposição a evento traumático com critério de gravidade específico — ameaça à vida, violência sexual, lesão grave — ausente na definição mais ampla de estressor do transtorno de ajustamento)",
    "Luto não complicado e Transtorno de Luto Prolongado (reação a perda por morte, com fenomenologia e critérios temporais próprios, distinta do transtorno de ajustamento)",
    "Transtornos da personalidade (padrão de resposta desadaptativa mais amplo, pervasivo e presente independentemente de estressores específicos)",
    "Condição médica geral ou reação esperada/proporcional a um estressor significativo, sem atingir o limiar de sofrimento desproporcional ou prejuízo funcional significativo",
    "Exacerbação de transtorno mental preexistente (por definição, exclui o diagnóstico de transtorno de ajustamento)",
  ],

  comorbidadesComuns: [
    "Transtornos de ansiedade e Transtorno Depressivo Maior subsequentes (quando os sintomas evoluem além do limiar do transtorno de ajustamento)",
    "Transtornos por uso de substâncias (uso como estratégia de enfrentamento mal-adaptativa)",
    "Condições médicas gerais associadas ao estressor identificado (diagnóstico oncológico, doença crônica)",
    "Ideação suicida e comportamento autolesivo, especialmente em adolescentes",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia é o tratamento de primeira linha, com foco em processamento do estressor, desenvolvimento de estratégias de enfrentamento adaptativas e suporte durante o período de ajustamento — TCC breve e intervenções focadas em resolução de problemas apresentam boa evidência",
    "Intervenções breves e psicoeducação sobre a natureza autolimitada do quadro, com normalização do sofrimento e orientação sobre estratégias de manejo do estressor",
    "Farmacoterapia não é indicada como tratamento central; pode ser considerada de forma criteriosa e por tempo limitado para sintomas-alvo específicos e incapacitantes (insônia significativa, ansiedade intensa), evitando-se medicalização excessiva de uma resposta esperada a um estressor",
    "Mobilização de suporte social e de rede de apoio (familiar, comunitário, ocupacional) como componente terapêutico relevante",
    "Monitorização ativa da evolução do quadro, com reavaliação diagnóstica caso os sintomas persistam além de 6 meses após a resolução do estressor ou se intensifiquem a ponto de preencher critérios para outro transtorno mental específico",
  ],

  sintomasChave: [
    { id: "exposicao-estressor", peso: 3 },
    { id: "humor-deprimido", peso: 2 },
    { id: "ansiedade-excessiva", peso: 2 },
    { id: "irritabilidade", peso: 2 },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-11 (OMS)",
    "Strain JJ, Friedman MJ - Revisões sobre transtornos de ajustamento em psiquiatria de ligação",
    "NICE Guideline - Common mental health problems in primary care (referência adjacente)",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a"],
    criterios: [
      { id: "a", pergunta: "Você desenvolveu sintomas emocionais ou comportamentais dentro dos últimos 3 meses, em resposta a um ou mais eventos/estressores identificáveis na sua vida?" },
      { id: "b1", pergunta: "Esses sintomas parecem desproporcionalmente intensos, considerando a gravidade real do estressor e o seu contexto?", grupo: "B" },
      { id: "b2", pergunta: "Esses sintomas estão prejudicando de forma significativa seu funcionamento social, no trabalho ou em outras áreas importantes da vida?", grupo: "B" },
    ],
    algoritmo: {
      itensContaveis: ["b1", "b2"],
      gruposObrigatorios: [["b1", "b2"]],
      duracaoMinima: "Início dentro de 3 meses do estressor; se o estressor e suas consequências cessaram, os sintomas não devem persistir por mais de 6 meses adicionais (exceto no especificador persistente/crônico, ligado a estressor de efeito contínuo)",
      observacaoExclusao:
        "C: a perturbação não satisfaz critérios para outro transtorno mental específico e não é apenas exacerbação de um transtorno preexistente (se preencher critérios completos de outro transtorno — ex.: depressão maior, TAG — reclassificar, não é ajustamento). D: os sintomas não representam luto normal e não são mais bem explicados por transtorno de luto prolongado. Avaliar especificador predominante (humor deprimido, ansiedade, misto, perturbação de conduta, misto de emoções e conduta) e se é agudo (<6 meses) ou persistente/crônico (>=6 meses, geralmente com estressor de efeito contínuo).",
    },
  },
};
