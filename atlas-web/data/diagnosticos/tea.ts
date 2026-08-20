import { Diagnostico } from "./types";

export const tea: Diagnostico = {
  id: "tea",

  nome: "Transtorno do Espectro Autista",

  categoria: "Transtornos do Neurodesenvolvimento",

  cid11: "6A02",

  cid10: "F84.0",

  descricao:
    "Transtorno do neurodesenvolvimento caracterizado por déficits persistentes na comunicação e interação social em múltiplos contextos, associados a padrões restritos e repetitivos de comportamento, interesses ou atividades, com sintomas presentes desde o período de desenvolvimento inicial e causando prejuízo funcional clinicamente significativo. Apresenta ampla heterogeneidade fenotípica, desde quadros com necessidade de suporte substancial até apresentações com inteligência e linguagem preservadas, frequentemente identificadas apenas na vida adulta.",

  criteriosDiagnosticos: [
    "A. Déficits persistentes na comunicação social e na interação social em múltiplos contextos, atualmente ou por história prévia, manifestados por todos os seguintes:",
    "1. Déficits na reciprocidade socioemocional, variando desde uma abordagem social anormal e dificuldade em manter uma conversação normal até compartilhamento reduzido de interesses/emoções e dificuldade em iniciar ou responder a interações sociais.",
    "2. Déficits nos comportamentos comunicativos não-verbais usados para interação social, variando desde comunicação verbal e não-verbal precariamente integrada, anormalidades no contato visual e linguagem corporal, deficits na compreensão e uso de gestos, até ausência total de expressões faciais e comunicação não-verbal.",
    "3. Déficits para desenvolver, manter e compreender relacionamentos, variando desde dificuldades em ajustar o comportamento para se adequar a diferentes contextos sociais até dificuldades em compartilhar brincadeiras imaginativas ou em fazer amizades e ausência de interesse por pares.",
    "B. Padrões restritos e repetitivos de comportamento, interesses ou atividades, manifestados por pelo menos 2 dos seguintes, atualmente ou por história prévia:",
    "1. Movimentos motores, uso de objetos ou fala estereotipados ou repetitivos (estereotipias motoras simples, alinhar brinquedos, ecolalia, frases idiossincrásicas).",
    "2. Insistência nas mesmas coisas, adesão inflexível a rotinas ou padrões ritualizados de comportamento verbal ou não-verbal (sofrimento extremo com pequenas mudanças, dificuldades com transições, padrões rígidos de pensamento, rituais de saudação, necessidade de seguir sempre o mesmo caminho ou comer os mesmos alimentos).",
    "3. Interesses fixos e altamente restritos que são anormais em intensidade ou foco (forte apego ou preocupação com objetos incomuns, interesses excessivamente circunscritos ou perseverativos).",
    "4. Hiper ou hiporreatividade a estímulos sensoriais ou interesse incomum por aspectos sensoriais do ambiente (indiferença aparente a dor/temperatura, reação adversa a sons ou texturas específicas, cheirar ou tocar objetos de forma excessiva, fascinação visual por luzes ou movimento).",
    "C. Os sintomas devem estar presentes precocemente no período do desenvolvimento (mas podem não se tornar totalmente manifestos até que as demandas sociais excedam as capacidades limitadas, ou podem ser mascarados por estratégias aprendidas mais tarde na vida).",
    "D. Os sintomas causam prejuízo clinicamente significativo no funcionamento social, ocupacional ou em outras áreas importantes da vida do indivíduo.",
    "E. Essas perturbações não são mais bem explicadas por deficiência intelectual ou por atraso global do desenvolvimento (podem ser comórbidas, mas nesse caso a comunicação social deve estar abaixo do esperado para o nível geral de desenvolvimento).",
  ],

  especificadores: [
    "Nível de suporte necessário para o domínio de comunicação social e para o domínio de comportamentos restritos/repetitivos, especificados separadamente: Nível 1 (exigindo apoio), Nível 2 (exigindo apoio substancial), Nível 3 (exigindo apoio muito substancial)",
    "Com ou sem comprometimento intelectual concomitante",
    "Com ou sem comprometimento da linguagem estrutural concomitante",
    "Associado a condição médica, genética ou fator ambiental conhecido",
    "Associado a outro transtorno do neurodesenvolvimento, mental ou comportamental",
    "Com catatonia",
  ],

  duracaoMinima: "Sintomas presentes desde o período de desenvolvimento inicial, mesmo que plenamente reconhecidos apenas mais tardiamente",

  prevalencia:
    "Prevalência estimada em torno de 1-2% da população, com tendência de aumento nas estimativas relacionada a maior sensibilidade diagnóstica e ampliação de critérios ao longo das últimas décadas. Historicamente descrito com predomínio masculino (razão aproximada de 3-4:1), mas evidências crescentes apontam subdiagnóstico em meninas e mulheres, que frequentemente apresentam estratégias compensatórias de mascaramento social mais desenvolvidas.",

  cursoEPrognostico:
    "Condição de curso neurodesenvolvimental, presente ao longo de toda a vida, com trajetória e desfechos altamente variáveis conforme nível de suporte necessário, presença de comprometimento intelectual/de linguagem associado e acesso a intervenções precoces. Diagnóstico em adultos com inteligência preservada (anteriormente descrito como Síndrome de Asperger) é cada vez mais reconhecido, frequentemente após anos de sintomas mal compreendidos como ansiedade social, rigidez de personalidade ou dificuldades interpessoais inespecíficas. Intervenção precoce e estruturada associa-se a melhores desfechos funcionais e de qualidade de vida.",

  diagnosticoDiferencial: [
    "Transtorno de Ansiedade Social (evitação social por medo de avaliação negativa, com desejo de conexão social preservado, diferentemente dos déficits nucleares de reciprocidade do TEA)",
    "TOC (rituais e rigidez podem se sobrepor a comportamentos repetitivos do TEA, mas no TOC há tipicamente natureza egodistônica/ansiogênica ausente nos interesses/rotinas do TEA)",
    "TDAH (desatenção e dificuldades sociais secundárias à impulsividade, sem os déficits nucleares de comunicação social e comportamentos restritos do TEA — comorbidade frequente)",
    "Transtorno da Linguagem/Transtorno da Comunicação Social (pragmática) sem os padrões restritos e repetitivos de comportamento característicos do TEA",
    "Deficiência intelectual/atraso global do desenvolvimento sem déficits desproporcionais na comunicação social",
    "Transtornos da personalidade do Grupo A, especialmente esquizoide e esquizotípica, em diagnóstico diferencial em adultos",
    "Transtorno de Apego Reativo (história de negligência/privação social precoce, com melhora ao receber cuidado adequado, diferentemente do padrão persistente do TEA)",
    "Catatonia e outros quadros com regressão funcional em adolescentes/adultos com TEA preexistente",
  ],

  comorbidadesComuns: [
    "Deficiência intelectual",
    "TDAH",
    "Transtornos de ansiedade (incluindo ansiedade social)",
    "Transtorno Depressivo Maior, especialmente em adolescentes e adultos com maior consciência das próprias diferenças",
    "Epilepsia",
    "Transtornos do sono",
    "TOC",
    "Transtornos alimentares restritivos relacionados a sensibilidade sensorial",
  ],

  tratamentoPrimeiraLinha: [
    "Intervenções comportamentais e educacionais especializadas e precoces constituem a base do tratamento (análise do comportamento aplicada e abordagens de desenvolvimento naturalístico, terapia de fala e linguagem, terapia ocupacional com foco em integração sensorial), com objetivo de promover comunicação, habilidades sociais e autonomia funcional",
    "Não há tratamento farmacológico para os sintomas nucleares (déficits de comunicação social e padrões restritos/repetitivos) do TEA",
    "Farmacoterapia reservada exclusivamente ao manejo de sintomas associados específicos: risperidona ou aripiprazol (únicos antipsicóticos aprovados para irritabilidade/agressividade associada ao TEA), além de tratamento dirigido de comorbidades como TDAH, ansiedade e insônia quando presentes",
    "Escala AQ-10 (Autism-Spectrum Quotient) como instrumento breve de rastreio em adultos com inteligência e linguagem preservadas, útil para triagem inicial mas não substituindo avaliação diagnóstica especializada e multidisciplinar estruturada",
    "Suporte psicoeducacional à família e adaptações ambientais/ocupacionais estruturadas (escola, trabalho) como componente essencial do plano terapêutico ao longo da vida",
  ],

  sintomasChave: [
    { id: "dificuldade-comunicacao-social", peso: 3 },
    { id: "interesses-restritos", peso: 2 },
    { id: "sintomas-desde-infancia", peso: 2 },
  ],

  // Não há farmacoterapia para os sintomas nucleares do TEA (ver texto acima).
  // risperidona/aripiprazol constam aqui apenas por serem os únicos
  // antipsicóticos aprovados para irritabilidade/agressividade associada,
  // não para os sintomas listados em sintomasChave.
  medicamentosPrimeiraLinha: ["risperidona", "aripiprazol"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "NICE Guideline CG142 - Autism spectrum disorder in adults: diagnosis and management",
    "NICE Guideline CG170 - Autism spectrum disorder in under 19s: support and management",
    "American Academy of Pediatrics - Clinical Report on Identification, Evaluation, and Management of Autism Spectrum Disorder",
    "CID-11 (OMS)",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["a1", "a2", "a3"],
    criterios: [
      { id: "a1", pergunta: "Você tem dificuldade em iniciar interações sociais, compartilhar interesses/emoções com outras pessoas, ou manter uma conversa de forma recíproca?", grupo: "A" },
      { id: "a2", pergunta: "Você tem dificuldade com comunicação não-verbal — contato visual, expressões faciais, gestos ou linguagem corporal — na interação social?", grupo: "A" },
      { id: "a3", pergunta: "Você tem dificuldade para desenvolver, manter ou entender relacionamentos (ajustar comportamento a diferentes contextos sociais, fazer amizades, interesse por outras pessoas)?", grupo: "A" },
      { id: "b1", pergunta: "Você tem movimentos, uso de objetos ou fala repetitivos ou estereotipados?", grupo: "B" },
      { id: "b2", pergunta: "Você tem insistência nas mesmas rotinas, ou sofre muito com pequenas mudanças ou transições?", grupo: "B" },
      { id: "b3", pergunta: "Você tem interesses muito fixos e restritos, incomuns em intensidade ou foco?", grupo: "B" },
      { id: "b4", pergunta: "Você reage de forma muito intensa (ou muito pouco) a estímulos sensoriais — sons, texturas, luzes, dor, temperatura?", grupo: "B" },
      { id: "d", pergunta: "Esses sintomas causam prejuízo significativo no seu funcionamento social, ocupacional ou em outras áreas importantes da vida?" },
    ],
    algoritmo: {
      // "d" (prejuízo funcional) fica de fora de itensContaveis: é gate
      // obrigatório via gruposObrigatorios, não um sintoma que soma na
      // contagem exibida — mesmo padrão usado em tdah.ts.
      itensContaveis: ["a1", "a2", "a3", "b1", "b2", "b3", "b4"],
      gruposObrigatorios: [["d"]],
      subgruposComMinimo: [
        { itens: ["a1", "a2", "a3"], minimo: 3 },
        { itens: ["b1", "b2", "b3", "b4"], minimo: 2 },
      ],
      duracaoMinima: "Sintomas presentes desde o período de desenvolvimento inicial (mesmo que só reconhecidos plenamente mais tarde, quando as demandas sociais excedem as capacidades, ou mascarados por estratégias aprendidas)",
      observacaoExclusao:
        "E: não mais bem explicado por deficiência intelectual ou atraso global do desenvolvimento isolados (podem ser comórbidos, mas nesse caso a comunicação social deve estar abaixo do esperado para o nível geral de desenvolvimento). Avaliar especificador de nível de suporte necessário (1, 2 ou 3) para cada domínio separadamente, e comorbidade intelectual/de linguagem.",
    },
  },
};
