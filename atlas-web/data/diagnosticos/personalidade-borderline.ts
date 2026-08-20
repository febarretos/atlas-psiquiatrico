import { Diagnostico } from "./types";

export const personalidadeBorderline: Diagnostico = {
  id: "personalidade-borderline",

  nome: "Transtorno de Personalidade Borderline",

  categoria: "Transtornos de Personalidade",

  cid11: "6D10.4",

  cid10: "F60.3",

  descricao:
    "Padrão persistente e generalizado de instabilidade nos relacionamentos interpessoais, na autoimagem e nos afetos, associado a impulsividade acentuada, com início no início da vida adulta e presente em diversos contextos. Frequentemente acompanhado de sofrimento intenso, comportamentos autolesivos e alto risco de suicídio.",

  criteriosDiagnosticos: [
    "Padrão persistente de instabilidade nos relacionamentos interpessoais, na autoimagem e nos afetos, e acentuada impulsividade, começando no início da idade adulta e presente em vários contextos, indicado por 5 (ou mais) dos seguintes critérios:",
    "1. Esforços desesperados para evitar abandono real ou imaginado (não incluir comportamento suicida ou automutilante coberto pelo critério 5).",
    "2. Padrão de relacionamentos interpessoais instáveis e intensos, caracterizado pela alternância entre extremos de idealização e desvalorização.",
    "3. Perturbação da identidade: instabilidade acentuada e persistente da autoimagem ou da percepção de si mesmo.",
    "4. Impulsividade em pelo menos duas áreas potencialmente autodestrutivas (gastos, sexo, abuso de substâncias, direção imprudente, compulsão alimentar), sem incluir comportamento suicida ou automutilante coberto pelo critério 5.",
    "5. Recorrência de comportamento, gestos ou ameaças suicidas, ou de comportamento automutilante.",
    "6. Instabilidade afetiva devido a acentuada reatividade do humor (por exemplo, episódios intensos de disforia, irritabilidade ou ansiedade, geralmente durando poucas horas e raramente mais que alguns dias).",
    "7. Sentimentos crônicos de vazio.",
    "8. Raiva intensa e inadequada, ou dificuldade em controlar a raiva (por exemplo, demonstrações frequentes de descontrole, raiva constante, brigas físicas recorrentes).",
    "9. Ideação paranoide transitória relacionada a estresse ou sintomas dissociativos graves.",
  ],

  especificadores: [
    "Não há especificadores formais no DSM-5-TR para este transtorno; recomenda-se avaliar sistematicamente o nível de gravidade funcional e o risco de suicídio/autolesão de forma contínua.",
  ],

  duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta (traços podem já ser observados na adolescência)",

  prevalencia:
    "Prevalência estimada em torno de 1,6% na população geral, podendo chegar a cerca de 6% em amostras de atenção primária; aproximadamente 10% em contextos ambulatoriais de saúde mental e até 20% em internações psiquiátricas. Diagnosticado com maior frequência em mulheres em contextos clínicos, embora estudos populacionais sugiram distribuição mais equilibrada entre sexos.",

  cursoEPrognostico:
    "Início tipicamente no final da adolescência ou início da vida adulta. Curso historicamente considerado crônico, mas estudos longitudinais (McLean Study of Adult Development) mostram que a maioria dos pacientes atinge remissão sintomática sustentada ao longo do tempo com tratamento adequado, embora o prejuízo funcional psicossocial possa persistir mais que os sintomas agudos. Risco de suicídio consumado estimado em torno de 8-10%, exigindo monitorização ativa e contínua. Tendência a atenuação da impulsividade e da instabilidade afetiva com o avançar da idade.",

  diagnosticoDiferencial: [
    "Transtorno Bipolar (especialmente tipo II) — na borderline a instabilidade afetiva é reativa a gatilhos interpessoais e dura horas, enquanto episódios de humor bipolares têm duração mais sustentada e menor reatividade situacional",
    "Transtorno Depressivo Maior e Transtornos de Ansiedade em comorbidade (diferenciar sintomas do eixo I de traços de personalidade persistentes)",
    "Outros Transtornos de Personalidade do Grupo B (Histriônica, Narcisista, Antissocial) — sobreposição fenomenológica exige atenção aos padrões nucleares distintivos",
    "Transtorno Disruptivo da Desregulação do Humor / instabilidade emocional na infância e adolescência",
    "Transtorno de Estresse Pós-Traumático Complexo — sobreposição significativa (desregulação emocional, relacionamentos instáveis), mas com centralidade do trauma e sintomas de reexperiência/hipervigilância",
    "Mudança de personalidade devido a outra condição médica",
    "Transtorno por Uso de Substâncias (impulsividade e instabilidade podem ser secundárias ao uso ativo)",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Transtornos de Ansiedade (TAG, pânico, TEPT)",
    "Transtornos Alimentares (especialmente bulimia nervosa)",
    "Transtornos por Uso de Substâncias",
    "Transtorno Bipolar",
    "Outros Transtornos de Personalidade (histriônica, dependente, antissocial, esquiva)",
    "TDAH (história de desatenção/impulsividade desde a infância)",
  ],

  tratamentoPrimeiraLinha: [
    "Psicoterapia estruturada baseada em evidência como pilar central do tratamento — Terapia Comportamental Dialética (DBT), com módulos de mindfulness, tolerância ao mal-estar, regulação emocional e efetividade interpessoal",
    "Terapia Focada em Esquemas como alternativa com evidência robusta, especialmente para padrões relacionais e de autoimagem de longa data",
    "Terapia Baseada em Mentalização (MBT) como opção eficaz, focada na capacidade de compreender estados mentais próprios e alheios",
    "Terapia Focada na Transferência (TFP) como alternativa psicodinâmica estruturada",
    "Farmacoterapia não possui indicação como tratamento central e deve ser reservada ao manejo sintomático/adjuvante de sintomas-alvo específicos (por exemplo, instabilidade afetiva, impulsividade ou sintomas psicóticos transitórios), evitando-se polifarmácia; não há medicação aprovada especificamente para o transtorno",
    "Manejo ativo e estruturado de crises e de risco de suicídio/autolesão, com plano de segurança e psicoeducação para o paciente e a família",
  ],

  sintomasChave: [
    { id: "instabilidade-relacionamentos", peso: 3 },
    { id: "labilidade-afetiva", peso: 2 },
    { id: "vazio-cronico", peso: 2 },
    { id: "medo-abandono", peso: 2 },
    { id: "autolesao", peso: 2 },
    { id: "raiva-intensa", peso: 1 },
    { id: "impulsividade-autodestrutiva", peso: 2 },
  ],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "NICE Guideline CG78 - Borderline personality disorder: recognition and management",
    "APA Practice Guideline for the Treatment of Patients with Borderline Personality Disorder",
    "Zanarini MC et al. - McLean Study of Adult Development (curso longitudinal)",
    "CID-11 (OMS) - Modelo dimensional de transtornos de personalidade",
  ],

  entrevistaEstruturada: {
    criteriosRastreioIds: ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"],
    criterios: [
      { id: "b1", pergunta: "Você faz esforços desesperados para evitar ser abandonado(a), de verdade ou só na sua imaginação (sem contar comportamento suicida ou de se machucar, que é outro item)?" },
      { id: "b2", pergunta: "Seus relacionamentos costumam alternar entre idealizar a pessoa (achar ela perfeita) e desvalorizar ela (achar ela péssima)?" },
      { id: "b3", pergunta: "Você sente uma instabilidade marcante em quem você é ou em como se vê como pessoa?" },
      { id: "b4", pergunta: "Você age de forma impulsiva em pelo menos 2 áreas que podem te prejudicar (gastos, sexo, uso de substâncias, direção perigosa, compulsão alimentar), sem contar comportamento suicida/automutilação?" },
      { id: "b5", pergunta: "Você já teve comportamentos, gestos ou ameaças de suicídio, ou já se machucou de propósito, de forma recorrente?", sinalizaRisco: true },
      { id: "b6", pergunta: "Seu humor muda muito rápido e de forma intensa — episódios de tristeza, irritação ou ansiedade que duram horas, raramente mais que alguns dias?" },
      { id: "b7", pergunta: "Você sente um vazio crônico?" },
      { id: "b8", pergunta: "Você sente raiva intensa ou desproporcional, ou tem dificuldade para controlar a raiva?" },
      { id: "b9", pergunta: "Em momentos de estresse, você já teve ideias paranoides passageiras ou sintomas dissociativos graves (ex.: sensação de estar fora do próprio corpo)?" },
    ],
    algoritmo: {
      contagemMinima: 5,
      itensContaveis: ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"],
      duracaoMinima: "Padrão estável de longa duração, com início identificável no início da idade adulta (traços podem já ser observados na adolescência)",
      observacaoExclusao:
        "ATENÇÃO — risco de segurança: risco de suicídio consumado estimado em 8-10% ao longo da vida — monitorização ativa e contínua de ideação/comportamento suicida é obrigatória independentemente da resposta isolada ao item 5, com plano de segurança estruturado. Diferenciar de Transtorno Bipolar tipo II (a instabilidade afetiva aqui é reativa a gatilhos interpessoais e dura horas; episódios de humor bipolares são mais sustentados e menos reativos situacionalmente), de outros Transtornos de Personalidade do Cluster B (histriônica, narcisista, antissocial), de TEPT Complexo (centralidade do trauma e sintomas de reexperiência/hipervigilância), e de instabilidade/impulsividade secundária a uso ativo de substâncias.",
    },
  },
};
