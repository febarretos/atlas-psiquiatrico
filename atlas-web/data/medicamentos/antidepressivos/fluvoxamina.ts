import { Medicamento } from "../../types";

export const fluvoxamina: Medicamento = {
  id: "fluvoxamina",

  nome: "Fluvoxamina",

  nomeComercial: [
    "Luvox",
    "Revoc",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica. Apresenta elevada afinidade pelo receptor sigma-1, cuja relevância clínica ainda é objeto de estudo.",

  posologias: [
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "50 mg/dia",
      doseUsual: "100–300 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "50 mg/dia",
      doseUsual: "100–200 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Transtorno de Ansiedade Social",
      doseInicial: "50 mg/dia",
      doseUsual: "100–300 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "50 mg/dia",
      doseUsual: "100–300 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "50 mg/dia",
      doseUsual: "100–300 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 2,
    },
  ],

  meiaVida: "15–22 horas",

  metabolizacao:
    "Metabolização hepática, principalmente pelas CYP2D6. É potente inibidora das CYP1A2 e CYP2C19 e moderada inibidora da CYP3A4.",

  indicacoes: [
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Social",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Uso concomitante com tizanidina",
    "Uso concomitante com ramelteona",
    "Hipersensibilidade à fluvoxamina",
  ],

  vantagens: [
    "Excelente evidência para TOC",
    "Boa eficácia em transtornos de ansiedade",
    "Baixo risco de prolongamento do intervalo QT",
    "Pode beneficiar pacientes com insônia devido ao perfil mais sedativo",
  ],

  desvantagens: [
    "Maior potencial de interações medicamentosas",
    "Náusea frequente no início do tratamento",
    "Pode causar sonolência",
    "Disfunção sexual",
  ],

  efeitosAdversos: [
    "Náusea",
    "Sonolência",
    "Cefaleia",
    "Insônia",
    "Tremor",
    "Sudorese",
    "Disfunção sexual",
  ],

  serotoninergico: true,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "IMAO",
    "Tizanidina (risco de hipotensão profunda e sedação por elevação de até 10x nos níveis de tizanidina)",
    "Ramelteona",
    "Clozapina (inibição da CYP1A2, CYP2C19 e CYP3A4 — aumento de 5 a 10x nos níveis de clozapina, com risco de sedação, hipotensão e convulsões)",
    "Olanzapina (inibição da CYP1A2 — aumento relevante da AUC, mais pronunciado em fumantes)",
    "Cafeína (inibição da CYP1A2 — redução do clearance e potencialização de efeitos estimulantes)",
    "Teofilina (inibição da CYP1A2 — aumento de até 3x nos níveis, com risco de convulsões e arritmias)",
    "Varfarina (inibição do metabolismo — aumento do efeito anticoagulante, monitorar INR)",
    "Tramadol",
    "Alprazolam e outros substratos da CYP3A4 (ex. midazolam) — redução do clearance, com aumento de sedação",
    "Propranolol (substrato da CYP1A2 — fluvoxamina pode aumentar seus níveis séricos)",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Moderada",

  sexual: "Moderada",

  qt: "Baixo",

  hipotensaoOrtostatica: "Baixo",

  riscoConvulsivo: "Baixo",

  sintomasDescontinuacao: "Alto",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  gravidezCategoria: "cautela",

  lactacao:
    "Pode ser utilizada durante a amamentação quando indicada, embora sertralina permaneça a opção preferencial.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose na insuficiência renal.",

  ajusteRenalNecessario: false,

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "Antidepressivo de escolha para muitos pacientes com TOC devido à robusta evidência clínica. Seu principal fator limitante é o elevado potencial de interações medicamentosas, especialmente pela inibição das enzimas CYP1A2 e CYP2C19. Deve-se ter cautela em pacientes em uso de clozapina, tizanidina, cafeína, teofilina e outros medicamentos metabolizados por essas vias.",

  perolasClinicas: [
    "É frequentemente usada como potencializador farmacocinético deliberado da clozapina em pacientes metabolizadores rápidos ou tabagistas (que induzem CYP1A2): doses baixas de fluvoxamina (25-50 mg) podem reduzir a dose necessária de clozapina e melhorar adesão, mas exigem monitorização rigorosa de nível sérico.",
    "É a única opção da classe com formulação de liberação controlada aprovada especificamente para ansiedade social (Luvox CR) em alguns mercados — vale considerar quando TOC coexiste com fobia social proeminente.",
    "A interação com tizanidina é particularmente perigosa e subestimada (pode causar hipotensão profunda e sedação por elevação de até 10x nos níveis de tizanidina) — sempre checar uso concomitante antes de prescrever.",
    "Tomar à noite reduz o impacto da sedação diurna, que tende a ser mais proeminente que em outros ISRS, especialmente nas primeiras semanas de tratamento.",
    "Em doses altas para TOC (>150 mg/dia), dividir a dose em duas tomadas (manhã e noite) melhora a tolerabilidade gastrointestinal comparado à dose única.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};