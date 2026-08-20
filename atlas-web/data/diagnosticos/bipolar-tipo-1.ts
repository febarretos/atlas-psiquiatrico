import { Diagnostico } from "./types";

export const bipolarTipo1: Diagnostico = {
  id: "bipolar-tipo-1",

  nome: "Transtorno Bipolar Tipo I",

  categoria: "Transtorno Bipolar e Relacionados",

  cid11: "6A60",

  cid10: "F31",

  descricao:
    "Transtorno do humor definido pela ocorrência de pelo menos um episódio maníaco ao longo da vida, que pode ser precedido ou seguido de episódios hipomaníacos ou depressivos maiores. O episódio maníaco por si só é suficiente e necessário para o diagnóstico, independentemente da presença de episódios depressivos.",

  criteriosDiagnosticos: [
    "Critérios do Episódio Maníaco (necessário para o diagnóstico):",
    "A. Período distinto de humor anormal e persistentemente elevado, expansivo ou irritável, e aumento anormal e persistente da energia/atividade dirigida a objetivos, presente na maior parte do dia, quase todos os dias, por pelo menos 1 semana (ou qualquer duração se hospitalização for necessária).",
    "B. Durante o período de perturbação do humor, 3 ou mais dos seguintes sintomas (4 se o humor é apenas irritável), presentes em grau significativo:",
    "1. Autoestima inflada ou grandiosidade.",
    "2. Redução da necessidade de sono (ex. sente-se descansado após 3h de sono).",
    "3. Loquacidade maior que o habitual ou pressão para continuar falando.",
    "4. Fuga de ideias ou experiência subjetiva de pensamento acelerado.",
    "5. Distratibilidade (atenção facilmente desviada por estímulos irrelevantes).",
    "6. Aumento da atividade dirigida a objetivos (social, no trabalho, escola, sexual) ou agitação psicomotora.",
    "7. Envolvimento excessivo em atividades de alto potencial para consequências dolorosas (compras desenfreadas, indiscrições sexuais, investimentos financeiros insensatos).",
    "C. A perturbação do humor é suficientemente grave para causar prejuízo acentuado no funcionamento social/ocupacional, necessitar hospitalização para prevenir dano a si ou a outros, ou apresentar características psicóticas.",
    "D. O episódio não é atribuível aos efeitos fisiológicos de uma substância (droga de abuso, medicação, outro tratamento) ou de outra condição médica.",
    "Observação: um episódio maníaco pleno emergente durante tratamento antidepressivo, que persiste além do efeito fisiológico do tratamento, é suficiente para o diagnóstico de Transtorno Bipolar I.",
  ],

  especificadores: [
    "Com características ansiosas",
    "Com características mistas (sintomas depressivos concomitantes ao episódio maníaco)",
    "Com ciclagem rápida (≥4 episódios de humor em 12 meses)",
    "Com características melancólicas ou atípicas (episódio depressivo)",
    "Com características psicóticas (congruentes ou incongruentes com o humor)",
    "Com catatonia",
    "Com início no periparto",
    "Com padrão sazonal",
    "Gravidade do episódio atual: leve, moderado, grave",
  ],

  duracaoMinima: "Episódio maníaco: sintomas na maior parte do dia por pelo menos 1 semana (ou qualquer duração se houver hospitalização)",

  prevalencia:
    "Prevalência ao longo da vida em torno de 1-1,5% na população geral, distribuída de forma semelhante entre homens e mulheres. Idade média de início ao redor dos 18-20 anos.",

  cursoEPrognostico:
    "Transtorno crônico e recorrente — a maioria dos pacientes apresenta múltiplos episódios ao longo da vida, com predominância de tempo em fase depressiva em relação à fase maníaca/hipomaníaca. Risco de suicídio substancialmente elevado em relação à população geral. O funcionamento interepisódico pode ser preservado, mas prejuízo cognitivo e funcional residual é comum, especialmente após múltiplos episódios.",

  diagnosticoDiferencial: [
    "Transtorno Bipolar Tipo II (episódios hipomaníacos, nunca mania plena)",
    "Transtorno Depressivo Maior (rastrear ativamente episódios maníacos/hipomaníacos prévios antes de firmar diagnóstico unipolar)",
    "Transtorno Esquizoafetivo (sintomas psicóticos persistem por período significativo na ausência de sintomas de humor proeminentes)",
    "Esquizofrenia (nesta, sintomas de humor são episódicos e secundários ao quadro psicótico primário)",
    "Transtorno de Personalidade Borderline (instabilidade afetiva reativa e de curta duração, não episódica e sustentada como na mania)",
    "TDAH (sobreposição de agitação, distratibilidade e impulsividade, porém sem a qualidade episódica e a alteração do humor central da mania)",
    "Mania/hipomania secundária a substância (estimulantes, corticosteroides, agonistas dopaminérgicos) ou condição médica (hipertireoidismo, lesões do SNC)",
    "Mania induzida por antidepressivo (considerar se emergiu no contexto de tratamento e persiste além do efeito farmacológico)",
  ],

  comorbidadesComuns: [
    "Transtornos por uso de substâncias (presente em até 40-60% dos casos ao longo da vida)",
    "Transtornos de ansiedade (TAG, pânico, TEPT)",
    "TDAH",
    "Transtornos da personalidade",
    "Transtornos alimentares",
    "Condições metabólicas e cardiovasculares (frequentemente agravadas por antipsicóticos atípicos)",
  ],

  tratamentoPrimeiraLinha: [
    "Estabilizadores do humor: lítio como padrão-ouro, especialmente pelo efeito antissuicida documentado",
    "Divalproato de sódio (ácido valproico) como alternativa de primeira linha, particularmente em quadros mistos ou ciclagem rápida",
    "Antipsicóticos atípicos (quetiapina, olanzapina, risperidona, aripiprazol) como monoterapia ou associados a estabilizador na mania aguda",
    "Quetiapina e lurasidona com evidência robusta também na depressão bipolar",
    "Evitar monoterapia com antidepressivos (risco de viragem maníaca/ciclagem rápida) — quando indicados, sempre associados a estabilizador do humor",
    "Psicoeducação estruturada e terapia focada na família como adjuvantes com forte evidência de redução de recaída",
    "ECT como opção em mania grave refratária, estados mistos graves ou depressão bipolar com risco de suicídio",
  ],

  sintomasChave: [
    { id: "humor-elevado", peso: 3 },
    { id: "aumento-energia", peso: 2 },
    { id: "reducao-necessidade-sono", peso: 2 },
    { id: "flutuacao-ciclica", peso: 2 },
    { id: "fala-acelerada", peso: 1 },
    { id: "pensamento-acelerado", peso: 1 },
    { id: "impulsividade-autodestrutiva", peso: 1 },
  ],

  medicamentosPrimeiraLinha: [
    "litio",
    "valproato",
    "quetiapina",
    "olanzapina",
    "risperidona",
    "aripiprazol",
    "lurasidona",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CANMAT/ISBD 2018 Guidelines for the Management of Patients with Bipolar Disorder (com atualizações posteriores)",
    "NICE Guideline NG185 - Bipolar disorder: assessment and management",
    "CID-11 (OMS)",
    "Ministério da Saúde (Brasil). Protocolo Clínico e Diretrizes Terapêuticas (PCDT) — Transtorno Afetivo Bipolar do Tipo I (gov.br/saude)",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a"],
    criterios: [
      { id: "a", pergunta: "Você já teve um período de pelo menos 1 semana (ou de qualquer duração, se precisou ser internado) em que se sentiu anormalmente elevado(a), expansivo(a) ou irritável, com muito mais energia ou disposição do que o habitual, na maior parte do dia, quase todos os dias?" },
      { id: "b1", pergunta: "Durante esse período, você se sentiu com autoestima muito maior que o normal, ou com ideias de grandiosidade?" },
      { id: "b2", pergunta: "Você sentiu menos necessidade de dormir (ex.: descansado(a) com poucas horas de sono)?" },
      { id: "b3", pergunta: "Você ficou muito mais falante do que o habitual, ou sentiu necessidade de continuar falando?" },
      { id: "b4", pergunta: "Seus pensamentos pareciam acelerados, ou várias ideias vinham à cabeça ao mesmo tempo?" },
      { id: "b5", pergunta: "Você ficou muito mais facilmente distraído(a) por coisas ao redor?" },
      { id: "b6", pergunta: "Você ficou muito mais ativo(a) do que o habitual (no trabalho, socialmente, sexualmente) ou muito agitado(a)?" },
      { id: "b7", pergunta: "Você se envolveu em atividades arriscadas com alto potencial de consequências ruins (gastos excessivos, decisões financeiras insensatas, indiscrições sexuais)?" },
    ],
    algoritmo: {
      contagemMinima: 3,
      itensContaveis: ["b1", "b2", "b3", "b4", "b5", "b6", "b7"],
      duracaoMinima: "Pelo menos 1 semana (qualquer duração se houver hospitalização)",
      observacaoExclusao:
        "A contagem mínima passa a ser 4 (não 3) se o humor do período for exclusivamente irritável, sem elação/expansividade — julgamento clínico. C: a perturbação precisa ser grave o bastante para causar prejuízo acentuado, exigir hospitalização, ou cursar com características psicóticas. D: não atribuível a efeito fisiológico de substância/condição médica — exceto se emergir plenamente durante tratamento antidepressivo e persistir além do efeito fisiológico esperado do tratamento, caso em que ainda conta para o diagnóstico.",
    },
  },
};
