import { Medicamento } from "../../types";

export const bupropiona: Medicamento = {
  id: "bupropiona",

  nome: "Bupropiona",

  nomeComercial: [
    "Wellbutrin XL",
    "Zyban",
    "Bup",
  ],

  classe: "Antidepressivo",

  subclasse: "NDRI",

  mecanismo:
    "Inibidor da recaptação de noradrenalina e dopamina (NDRI), com efeito mínimo sobre a recaptação de serotonina. Também atua como antagonista não competitivo de receptores nicotínicos.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "150 mg/dia",
      doseUsual: "300 mg/dia",
      doseMaxima: "450 mg/dia",
    },
    {
      indicacao: "Tabagismo",
      doseInicial: "150 mg/dia por 3 dias",
      doseUsual: "150 mg 2x/dia (SR) ou 300 mg/dia (XL)",
      doseMaxima: "300 mg/dia",
    },
    {
      indicacao: "TDAH (off-label)",
      doseInicial: "150 mg/dia",
      doseUsual: "300 mg/dia",
      doseMaxima: "450 mg/dia",
    },
    {
      indicacao: "Disfunção sexual induzida por ISRS (off-label)",
      doseInicial: "150 mg/dia",
      doseUsual: "150–300 mg/dia",
      doseMaxima: "300 mg/dia",
    },
  ],

  meiaVida:
    "21 horas (bupropiona); metabólitos ativos: 20–37 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2B6, formando metabólitos ativos. É inibidora da CYP2D6.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Cessação do tabagismo",
    "TDAH (off-label)",
    "Disfunção sexual induzida por ISRS (off-label)",
  ],

  contraIndicacoes: [
    "Epilepsia",
    "Bulimia nervosa",
    "Anorexia nervosa",
    "Abstinência aguda de álcool ou benzodiazepínicos",
    "Uso concomitante com IMAO",
    "Hipersensibilidade à bupropiona",
  ],

  vantagens: [
    "Praticamente não causa disfunção sexual",
    "Baixo risco de ganho de peso",
    "Pode favorecer perda ponderal",
    "Melhora energia, motivação e concentração",
    "Útil para cessação do tabagismo",
    "Pode ser associada a ISRS",
  ],

  desvantagens: [
    "Pode piorar ansiedade em alguns pacientes",
    "Insônia",
    "Redução do limiar convulsivo",
    "Não é uma boa escolha para pacientes com transtornos alimentares",
  ],

  efeitosAdversos: [
    "Insônia",
    "Boca seca",
    "Tremor",
    "Ansiedade",
    "Taquicardia",
    "Cefaleia",
    "Náusea",
  ],

  interacoes: [
    "IMAO",
    "Tramadol",
    "Antipsicóticos que reduzem limiar convulsivo",
    "Teofilina",
    "Corticosteroides sistêmicos",
    "Tamoxifeno",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Muito baixa",

  sexual: "Muito baixa",

  qt: "Baixo",

  gravidez:
    "Utilizar quando os benefícios superarem os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Pequenas quantidades são excretadas no leite. Avaliar individualmente.",

  renal:
    "Reduzir dose e/ou aumentar intervalo em insuficiência renal moderada a grave.",

  hepatica:
    "Utilizar doses menores e titular lentamente em insuficiência hepática.",

  observacoes:
    "A bupropiona é particularmente útil em pacientes com depressão acompanhada de fadiga, lentificação psicomotora, baixa motivação ou disfunção sexual induzida por ISRS. Também é uma excelente opção para pacientes preocupados com ganho de peso e para cessação do tabagismo. Deve ser evitada em pacientes com epilepsia ou transtornos alimentares devido ao aumento do risco de convulsões.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};