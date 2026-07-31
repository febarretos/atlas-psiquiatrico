import { Medicamento } from "../../types";

export const fluoxetina: Medicamento = {
  id: "fluoxetina",

  nome: "Fluoxetina",

  nomeComercial: [
    "Prozac",
    "Daforin",
    "Eufor",
    "Verotina",
    "Fluxene",
    "Psiquial",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica. Seu metabólito ativo (norfluoxetina) prolonga significativamente sua duração de ação.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "80 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "20 mg/dia",
      doseUsual: "40–60 mg/dia",
      doseMaxima: "80 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "10 mg/dia",
      doseUsual: "20–60 mg/dia",
      doseMaxima: "60 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Bulimia Nervosa",
      doseInicial: "20 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "60 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Disfórico Pré-Menstrual",
      doseInicial: "20 mg/dia",
      doseUsual: "20–60 mg/dia",
      doseMaxima: "60 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "10–20 mg/dia",
      doseUsual: "20–60 mg/dia",
      doseMaxima: "60 mg/dia",
      nivelEvidencia: 3,
    },
  ],

  meiaVida:
    "2–4 dias (fluoxetina) e 7–15 dias (norfluoxetina)",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6, originando o metabólito ativo norfluoxetina.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno do Pânico",
    "Bulimia Nervosa",
    "Transtorno Disfórico Pré-Menstrual",
    "Fobia Social",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Uso concomitante com tioridazina",
    "Uso concomitante com pimozida",
    "Hipersensibilidade à fluoxetina",
  ],

  vantagens: [
    "Excelente evidência científica",
    "Longa meia-vida, reduzindo o risco de síndrome de descontinuação",
    "Primeira escolha para bulimia nervosa",
    "Boa opção em pacientes com baixa adesão",
    "Perfil pouco sedativo",
  ],

  desvantagens: [
    "Pode exacerbar ansiedade e insônia no início do tratamento",
    "Maior potencial de interações medicamentosas por inibição da CYP2D6",
    "Disfunção sexual",
    "Longa meia-vida dificulta ajustes rápidos da dose",
  ],

  efeitosAdversos: [
    "Náusea",
    "Insônia",
    "Ansiedade inicial",
    "Tremor",
    "Sudorese",
    "Disfunção sexual",
    "Perda de apetite",
    "Cefaleia",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Tamoxifeno",
    "Antidepressivos tricíclicos",
    "Lítio",
    "Anticoagulantes",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Muito baixa",

  sexual: "Moderada",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada durante a gestação quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  gravidezCategoria: "cautela",

  lactacao:
    "Utilizar com cautela durante a amamentação. A sertralina costuma ser preferida por apresentar menor exposição do lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose na insuficiência renal.",

  ajusteRenalNecessario: false,

  hepatica:
    "Considerar redução da dose ou aumento do intervalo entre administrações em pacientes com insuficiência hepática.",

  observacoes:
    "ISRS com maior meia-vida entre os antidepressivos da classe, conferindo menor risco de síndrome de descontinuação. É o antidepressivo com melhor evidência para bulimia nervosa e uma excelente opção em pacientes com baixa adesão ao tratamento. Deve-se considerar seu potencial de interações devido à potente inibição da CYP2D6.",

  perolasClinicas: [
    "Sua longuíssima meia-vida (incluindo o metabólito ativo norfluoxetina) permite estratégia de 'ponte' ao trocar para um IMAO — praticamente a única situação em que se recomenda aguardar 5 semanas de washout (em vez dos 2 semanas usuais de outros ISRS) antes de iniciar um IMAO.",
    "Por essa mesma meia-vida longa, esquecer uma dose ocasional tem impacto clínico mínimo — característica útil em adolescentes ou pacientes com adesão errática, sendo por isso um dos ISRS preferidos nessa população.",
    "Para bulimia nervosa a dose eficaz (60 mg/dia) é maior que a dose antidepressiva usual — não subdosar por medo de 'excesso' quando o alvo é o transtorno alimentar.",
    "Ao contrário da maioria dos ISRS, tende a ser levemente anorexígena/ativadora e associada a menor ganho de peso a longo prazo comparada a outros ISRS — pode ser vantajosa em pacientes preocupados com peso, mas ativação/insônia pode ser fator limitante em pacientes ansiosos.",
    "Devido à inibição potente e duradoura da CYP2D6, mesmo após suspensão o efeito inibitório persiste por semanas — atenção redobrada ao reintroduzir substratos de CYP2D6 (tamoxifeno, codeína, muitos antipsicóticos e tricíclicos) logo após a troca de fluoxetina para outro agente.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};