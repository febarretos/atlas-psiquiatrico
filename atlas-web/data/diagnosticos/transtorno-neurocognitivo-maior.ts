import { Diagnostico } from "./types";

export const transtornoNeurocognitivoMaior: Diagnostico = {
  id: "transtorno-neurocognitivo-maior",

  nome: "Transtorno Neurocognitivo Maior (Demência)",

  categoria: "Transtornos Neurocognitivos",

  cid11: "6D80-6D8Z",

  cid10: "F00-F03",

  descricao:
    "Síndrome caracterizada por declínio cognitivo adquirido, significativo em relação a um nível de funcionamento prévio, em um ou mais domínios cognitivos, suficiente para interferir na independência do indivíduo para realizar atividades cotidianas. Pode ter diversas etiologias (neurodegenerativa, vascular, mista) e representa o quadro anteriormente denominado demência, termo ainda amplamente usado na prática clínica.",

  criteriosDiagnosticos: [
    "A. Evidência de declínio cognitivo significativo em relação a nível prévio de desempenho em um ou mais dos seguintes domínios cognitivos: atenção complexa, função executiva, aprendizagem e memória, linguagem, capacidade perceptomotora ou cognição social.",
    "B. Essa evidência baseia-se em: (1) preocupação do próprio indivíduo, de um informante que o conhece bem, ou do clínico, de que houve declínio significativo na função cognitiva; E (2) prejuízo no desempenho cognitivo, idealmente documentado por avaliação neuropsicológica padronizada ou, na sua ausência, por outra avaliação clínica quantificada.",
    "C. Os déficits cognitivos são suficientes para interferir na independência do indivíduo em atividades cotidianas (isto é, no mínimo é necessária assistência em atividades instrumentais complexas da vida diária, como gerenciar finanças ou tomar medicações) — este é o critério central que diferencia o Transtorno Neurocognitivo Maior do Transtorno Neurocognitivo Leve, no qual a independência funcional é preservada, ainda que com maior esforço ou uso de estratégias compensatórias.",
    "D. Os déficits cognitivos não ocorrem exclusivamente no contexto de um delirium.",
    "E. Os déficits cognitivos não são mais bem explicados por outro transtorno mental (por exemplo, Transtorno Depressivo Maior, Esquizofrenia).",
  ],

  especificadores: [
    "Devido à Doença de Alzheimer: início insidioso, progressão gradual e constante, com predomínio precoce de comprometimento de memória episódica e desorientação; confirmação por biomarcadores ou padrão clínico típico quando disponível",
    "Vascular: início relacionado temporalmente a evento(s) cerebrovascular(es) ou evidência de doença cerebrovascular por neuroimagem, tipicamente com curso em degraus, predomínio de disfunção executiva e da velocidade de processamento, e sinais neurológicos focais associados",
    "Com corpos de Lewy: flutuação cognitiva marcada, alucinações visuais recorrentes bem formadas, parkinsonismo espontâneo (não induzido por antipsicótico) e sensibilidade acentuada a efeitos extrapiramidais de antipsicóticos — atenção especial pelo risco de reações graves com uso desses fármacos",
    "Frontotemporal: início insidioso, geralmente antes dos 65 anos, com predomínio precoce de alterações comportamentais (desinibição, apatia, perda de empatia, comportamento compulsivo/perseverativo, hiperoralidade) ou de linguagem (afasia progressiva), com relativa preservação da memória episódica nas fases iniciais",
    "Devido a traumatismo cranioencefálico, devido a infecção por HIV, induzido por substância/medicamento, devido à Doença de Parkinson, devido à Doença de Huntington, devido a outra condição médica, devido a etiologias múltiplas, não especificado",
    "Com perturbação comportamental (incluindo sintomas psicológicos e comportamentais como agitação, psicose, apatia) ou sem perturbação comportamental",
    "Gravidade: leve (dificuldade em atividades instrumentais da vida diária, como tarefas domésticas e manejo financeiro), moderada (dificuldade em atividades básicas da vida diária, como se vestir e alimentar-se), grave (completamente dependente)",
  ],

  prevalencia:
    "Prevalência aumenta exponencialmente com a idade: em torno de 1-2% aos 65 anos, chegando a 30-40% acima dos 85 anos. Doença de Alzheimer é a etiologia mais comum (60-80% dos casos), seguida por demência vascular e formas mistas. Constitui uma das principais causas de incapacidade e dependência em idosos globalmente.",

  cursoEPrognostico:
    "Curso tipicamente progressivo e irreversível nas formas neurodegenerativas, com trajetória e velocidade de declínio variáveis conforme a etiologia (gradual e constante na Doença de Alzheimer; em degraus na demência vascular). A expectativa de vida após o diagnóstico varia amplamente (em média entre 3 e 10 anos), dependendo da idade de início, etiologia e comorbidades. Antes de assumir etiologia neurodegenerativa irreversível, é essencial investigar e excluir causas potencialmente reversíveis ou tratáveis que podem mimetizar ou contribuir para o quadro cognitivo — hipotireoidismo, deficiência de vitamina B12, neurossífilis, hidrocefalia de pressão normal, hematoma subdural, uso de substâncias ou efeito cumulativo de medicamentos (especialmente anticolinérgicos e benzodiazepínicos), e depressão no idoso (\"pseudodemência depressiva\"), que pode se apresentar com queixas cognitivas proeminentes e é potencialmente reversível com tratamento adequado.",

  diagnosticoDiferencial: [
    "Transtorno Neurocognitivo Leve (declínio cognitivo mensurável, porém sem perda de independência funcional para atividades cotidianas)",
    "Delirium (instalação aguda, curso flutuante ao longo do dia, comprometimento proeminente da atenção e do nível de consciência — deve ser sempre excluído/tratado antes de firmar diagnóstico de demência, e pode se sobrepor a um quadro demencial de base)",
    "Pseudodemência depressiva (queixas cognitivas subjetivas desproporcionais ao desempenho objetivo, início mais definido, resposta \"não sei\" frequente em vez de tentativas de resposta com confabulação, história de episódios depressivos prévios, melhora do quadro cognitivo com tratamento antidepressivo)",
    "Declínio cognitivo relacionado à idade (envelhecimento normal, sem interferência funcional)",
    "Transtornos psicóticos de início tardio (delírios e alucinações sem o padrão característico de declínio cognitivo progressivo nos domínios de memória/executivo)",
    "Causas reversíveis específicas: hipotireoidismo, deficiência de B12/folato, neurossífilis, hidrocefalia de pressão normal (tríade de distúrbio de marcha, incontinência urinária e declínio cognitivo), hematoma subdural crônico, intoxicação medicamentosa (especialmente por fármacos com carga anticolinérgica)",
    "Transtorno depressivo maior no idoso, sem quadro demencial subjacente",
  ],

  comorbidadesComuns: [
    "Sintomas neuropsiquiátricos associados: agitação, agressividade, apatia, sintomas psicóticos (delírios, alucinações), depressão e ansiedade — extremamente frequentes ao longo do curso da doença",
    "Distúrbios do sono (fragmentação do sono, inversão do ciclo sono-vigília, síndrome do entardecer/\"sundowning\")",
    "Delirium sobreposto (pacientes com demência têm risco muito aumentado de desenvolver delirium diante de qualquer estressor médico agudo)",
    "Quedas e complicações relacionadas à mobilidade",
    "Doenças cardiovasculares e fatores de risco vascular (especialmente na etiologia vascular e mista)",
    "Desnutrição e perda de peso em estágios avançados",
  ],

  tratamentoPrimeiraLinha: [
    "Intervenções não farmacológicas como base do manejo em todos os estágios: estimulação cognitiva estruturada, manutenção de rotina e adaptação do ambiente para segurança e orientação, psicoeducação e suporte ao cuidador (fator central, dado o alto risco de sobrecarga e burnout do cuidador)",
    "Inibidores da colinesterase (donepezila, rivastigmina, galantamina) indicados em Doença de Alzheimer leve a moderada e em demência com corpos de Lewy/Parkinson, com benefício sintomático modesto sobre cognição e funcionalidade",
    "Memantina (antagonista NMDA) indicada em Doença de Alzheimer moderada a grave, podendo ser combinada a inibidor da colinesterase",
    "Manejo de sintomas neuropsiquiátricos (agitação, psicose) deve priorizar abordagens não farmacológicas (identificação e correção de gatilhos ambientais/físicos, técnicas de comunicação e manejo comportamental) antes de fármacos",
    "Antipsicóticos devem ser evitados sempre que possível nessa população pelo risco aumentado de eventos cerebrovasculares e de mortalidade global (alerta de bula/black box); quando estritamente necessários por agitação ou psicose grave com risco à segurança, usar em menor dose eficaz, pelo menor tempo possível, com reavaliação frequente — e com cautela redobrada em demência com corpos de Lewy pelo risco de reação de sensibilidade grave",
    "Otimização de comorbidades e fatores de risco vascular (hipertensão, diabetes, dislipidemia), especialmente relevante na etiologia vascular e mista",
    "Planejamento antecipado de cuidados e avaliação periódica de capacidade civil/decisória à medida que a doença progride",
  ],

  sintomasChave: [
    { id: "declinio-cognitivo", peso: 3 },
    { id: "curso-cronico-meses", peso: 2 },
  ],

  // Antipsicóticos deliberadamente NÃO incluídos aqui como primeira linha
  // (ver alerta de risco de mortalidade aumentada nesta população em
  // tratamentoPrimeiraLinha).
  medicamentosPrimeiraLinha: [
    "donepezila",
    "rivastigmina",
    "galantamina",
    "memantina",
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "CID-11 (OMS)",
    "APA Practice Guideline on the Use of Antipsychotics to Treat Agitation or Psychosis in Patients with Dementia",
    "NICE Guideline NG97 - Dementia: assessment, management and support",
    "Alzheimer's Association Clinical Practice Guidelines",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a"],
    criterios: [
      { id: "a", pergunta: "Você (ou alguém que te conhece bem) notou um declínio significativo em relação ao que você era antes, em memória, atenção, linguagem, capacidade de organizar/planejar, em habilidades visuoespaciais, ou no comportamento social (ex.: perda de tato/empatia, desinibição)?" },
      { id: "b", pergunta: "Esse declínio foi confirmado por uma avaliação formal (testes cognitivos ou avaliação clínica estruturada), e não é apenas uma impressão sem confirmação objetiva?" },
      { id: "c", pergunta: "Esse declínio já é suficiente para atrapalhar sua independência nas atividades do dia a dia — por exemplo, precisar de ajuda para gerenciar finanças, tomar remédios corretamente, ou fazer tarefas complexas que você fazia sozinho(a) antes?" },
    ],
    algoritmo: {
      contagemMinima: 3,
      itensContaveis: ["a", "b", "c"],
      duracaoMinima: "Não há duração mínima formal — o quadro é definido pela evidência de declínio em relação a nível prévio de funcionamento, tipicamente instalado de forma insidiosa e progressiva (exceto etiologia vascular, que pode ter início mais abrupto)",
      observacaoExclusao:
        "D: os déficits não ocorrem exclusivamente no contexto de um delirium — se houver flutuação aguda da atenção/consciência, investigar e tratar delirium primeiro (ver módulo Delirium), inclusive se sobreposto a demência preexistente. E: não mais bem explicado por outro transtorno mental (Transtorno Depressivo Maior — 'pseudodemência depressiva' — ou Esquizofrenia). Antes de assumir etiologia neurodegenerativa irreversível, investigar e excluir causas potencialmente reversíveis: hipotireoidismo, deficiência de B12, neurossífilis, hidrocefalia de pressão normal, hematoma subdural, uso de substâncias/efeito cumulativo de anticolinérgicos ou benzodiazepínicos. Avaliar especificador etiológico (Alzheimer, vascular, corpos de Lewy, frontotemporal etc.) e gravidade (leve/moderada/grave).",
    },
  },
};
