import { Medicamento } from "../../types";

export const olanzapina: Medicamento = {
  id: "olanzapina",

  nome: "Olanzapina",

  nomeComercial: [
    "Zyprexa",
    "Zolafren",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Antagonista de múltiplos receptores, incluindo dopaminérgicos (D1-D4), serotoninérgicos (5-HT2A/2C), muscarínicos, histaminérgicos (H1) e alfa-1 adrenérgicos.",

  posologias: [
    {
      indicacao: "Esquizofrenia",
      doseInicial: "5–10 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Mania Aguda (Transtorno Bipolar)",
      doseInicial: "10–15 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Depressão Bipolar (associada à fluoxetina)",
      doseInicial: "5 mg/dia",
      doseUsual: "5–12 mg/dia",
      doseMaxima: "12 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Agitação Psicomotora Aguda",
      doseInicial: "2,5–10 mg (IM)",
      doseUsual: "10 mg (IM)",
      doseMaxima: "30 mg/dia (IM)",
      nivelEvidencia: 5,
    },
  ],

  meiaVida: "30 horas (21–54 horas)",

  metabolizacao:
    "Metabolização hepática principalmente via CYP1A2 e glucuronidação direta; menor participação da CYP2D6.",

  indicacoes: [
    "Esquizofrenia",
    "Episódios maníacos do Transtorno Bipolar",
    "Manutenção do Transtorno Bipolar",
    "Depressão bipolar (associada à fluoxetina, off-label como Symbyax)",
    "Agitação psicomotora aguda",
  ],

  contraIndicacoes: [
    "Hipersensibilidade à olanzapina",
    "Risco de glaucoma de ângulo fechado não tratado",
    "Diabetes descompensada ou dislipidemia grave não controlada (cautela extrema)",
  ],

  vantagens: [
    "Alta eficácia antipsicótica, entre as mais robustas da classe",
    "Boa eficácia em sintomas negativos e afetivos",
    "Disponível em formulações oral, orodispersível, injetável de ação rápida e de longa duração",
    "Baixo risco de sintomas extrapiramidais em comparação a antipsicóticos típicos",
  ],

  desvantagens: [
    "Alto risco metabólico: ganho de peso expressivo, dislipidemia e risco aumentado de diabetes mellitus",
    "Sedação significativa",
    "Necessidade de monitorização metabólica rigorosa e contínua",
  ],

  efeitosAdversos: [
    "Ganho de peso significativo",
    "Sedação",
    "Dislipidemia",
    "Hiperglicemia e risco de diabetes mellitus",
    "Boca seca e constipação (efeito anticolinérgico)",
    "Elevação de transaminases hepáticas",
  ],

  serotoninergico: false,

  cargaAnticolinergica: "Moderada",

  interacoes: [
    "Tabagismo (indução da CYP1A2, reduz níveis séricos)",
    "Fluvoxamina (inibidor potente da CYP1A2, aumenta níveis séricos)",
    "Carbamazepina (indução enzimática, reduz níveis séricos)",
    "Depressores do SNC (potencialização de sedação)",
    "Álcool (potencialização de efeitos sedativos e hepatotoxicidade)",
    "Ciprofloxacino (inibidor potente da CYP1A2, pode aumentar níveis séricos de olanzapina — considerar redução de dose)",
    "Carvão ativado (reduz significativamente a absorção oral da olanzapina — relevante no manejo de intoxicação aguda)",
  ],

  ganhoPeso: "Muito alto",

  sedacao: "Alta",

  sexual: "Baixa",

  qt: "Baixo",

  sintomasExtrapiramidais: "Baixo",

  hiperprolactinemia: "Baixo",

  riscoMetabolico: "Muito alto",

  hipotensaoOrtostatica: "Moderado",

  riscoConvulsivo: "Baixo",

  gravidez:
    "Uso possível quando o benefício supera o risco; monitorar peso e glicemia materna, com risco de complicações metabólicas neonatais associadas ao uso no terceiro trimestre.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno em pequenas quantidades; considerada relativamente segura, mas requer monitorização do lactente quanto à sedação.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste específico de dose na insuficiência renal, mas usar com cautela.",

  ajusteRenalNecessario: false,

  hepatica:
    "Considerar doses iniciais menores em insuficiência hepática, com monitorização de transaminases.",

  observacoes:
    "A olanzapina apresenta uma das maiores eficácias entre os antipsicóticos atípicos, porém seu uso é limitado pelo elevado risco metabólico, sendo necessária monitorização periódica de peso, circunferência abdominal, glicemia e perfil lipídico. É importante orientar o paciente sobre dieta e atividade física desde o início do tratamento. Como os demais antipsicóticos, requer atenção a risco de síndrome neuroléptica maligna e discinesia tardia em uso prolongado.",

  perolasClinicas: [
    "O ganho de peso costuma ser mais rápido e pronunciado nas primeiras semanas de tratamento — orientar dieta e atividade física ANTES de iniciar, não depois de já observado o ganho, pois grande parte do peso ganho no primeiro ano ocorre nos primeiros 2-3 meses.",
    "A formulação orodispersível é útil para garantir adesão em pacientes com suspeita de 'cheeking' (esconder o comprimido na bochecha sem engolir).",
    "A associação com fluoxetina em dose fixa (equivalente ao antigo Symbyax) é a única combinação com aprovação regulatória específica para depressão bipolar refratária — considerar antes de outras combinações off-label nesse cenário.",
    "Evitar administração intramuscular associada a benzodiazepínico parenteral na mesma janela de tempo — risco descrito de depressão cardiorrespiratória excessiva com essa combinação específica.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA/FDA (Zyprexa)",
  ],
};
