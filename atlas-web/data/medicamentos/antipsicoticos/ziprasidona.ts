import { Medicamento } from "../../types";

export const ziprasidona: Medicamento = {
  id: "ziprasidona",

  nome: "Ziprasidona",

  nomeComercial: [
    "Geodon",
  ],

  classe: "Antipsicótico",

  subclasse: "Atípico (2ª geração)",

  mecanismo:
    "Antagonista dos receptores dopaminérgicos D2 e serotoninérgicos 5-HT2A, com afinidade adicional como agonista parcial do receptor 5-HT1A e inibição da recaptação de serotonina e noradrenalina, conferindo possível efeito ansiolítico e antidepressivo adjuvante.",

  posologias: [
    {
      indicacao: "Esquizofrenia",
      doseInicial: "40 mg/dia (2 tomadas, com alimento)",
      doseUsual: "80–160 mg/dia",
      doseMaxima: "160 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Mania Aguda (Transtorno Bipolar)",
      doseInicial: "40–80 mg/dia (2 tomadas, com alimento)",
      doseUsual: "80–160 mg/dia",
      doseMaxima: "160 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Agitação Psicomotora Aguda (via IM)",
      doseInicial: "10–20 mg (IM)",
      doseUsual: "10 mg a cada 2h ou 20 mg a cada 4h",
      doseMaxima: "40 mg/dia (IM)",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "7 horas",

  metabolizacao:
    "Metabolização predominantemente hepática por aldeído oxidase (via não-CYP majoritária) e, em menor grau, pela CYP3A4.",

  indicacoes: [
    "Esquizofrenia",
    "Episódios maníacos ou mistos do Transtorno Bipolar",
    "Manutenção do Transtorno Bipolar (associado a lítio ou valproato)",
    "Agitação psicomotora aguda (formulação intramuscular)",
  ],

  contraIndicacoes: [
    "Prolongamento conhecido do intervalo QT ou síndrome do QT longo congênito",
    "Infarto agudo do miocárdio recente",
    "Insuficiência cardíaca descompensada",
    "Arritmias cardíacas tratadas com antiarrítmicos classe IA e III",
    "Uso concomitante com outros fármacos que prolongam significativamente o QT",
    "Hipersensibilidade à ziprasidona",
  ],

  vantagens: [
    "Perfil metabólico muito favorável, com ganho de peso mínimo entre os antipsicóticos atípicos",
    "Baixo impacto em perfil lipídico e glicêmico",
    "Baixo risco de hiperprolactinemia",
    "Disponível em formulação intramuscular para agitação psicomotora aguda",
  ],

  desvantagens: [
    "Necessidade obrigatória de administração com alimento (refeição de pelo menos 500 kcal) para absorção adequada — biodisponibilidade cai significativamente em jejum",
    "Maior risco de prolongamento do intervalo QT em comparação com a maioria dos demais antipsicóticos atípicos, exigindo cautela e ECG basal em pacientes com fatores de risco cardiovascular",
    "Menor uso na prática clínica devido à exigência alimentar e ao monitoramento cardíaco",
    "Eficácia global considerada discretamente inferior a olanzapina e risperidona em alguns estudos comparativos",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Tontura",
    "Náusea",
    "Acatisia",
    "Cefaleia",
    "Prolongamento do intervalo QT",
  ],

  interacoes: [
    "Fármacos que prolongam o intervalo QT (antiarrítmicos, alguns macrolídeos, antifúngicos azólicos, outros antipsicóticos) — risco aditivo",
    "Carbamazepina (indutor da CYP3A4, pode reduzir níveis séricos)",
    "Cetoconazol e outros inibidores potentes da CYP3A4 (aumentam níveis séricos)",
    "Diuréticos que causam hipocalemia/hipomagnesemia (aumentam risco de arritmia)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Moderada",

  sexual: "Baixa",

  qt: "Alto",

  gravidez:
    "Dados limitados em humanos; usar apenas quando o benefício justificar claramente o risco, com monitorização de sintomas extrapiramidais e de abstinência no recém-nascido.",

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno; dados limitados sobre segurança, usar com cautela e monitorização do lactente.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose na insuficiência renal (a formulação IM deve ser usada com cautela por conter ciclodextrina, excretada por via renal).",

  ajusteRenalNecessario: false,

  hepatica:
    "Usar com cautela em insuficiência hepática; dados farmacocinéticos limitados, considerar monitorização clínica reforçada.",

  observacoes:
    "A ziprasidona destaca-se pelo excelente perfil metabólico, sendo uma opção relevante para pacientes com risco cardiometabólico elevado (obesidade, síndrome metabólica, diabetes). No entanto, seu uso na prática é limitado por dois fatores importantes: a exigência de administração junto a uma refeição substancial (≥500 kcal) para absorção adequada — sem a qual a eficácia é comprometida — e o maior risco de prolongamento do intervalo QT em relação a outros atípicos, o que torna recomendável a realização de ECG basal em pacientes com fatores de risco cardiovascular, distúrbios eletrolíticos ou uso concomitante de outros fármacos que prolongam o QT. É contraindicada em associação com outros agentes que prolongam significativamente o QT.",

  perolasClinicas: [
    "É provavelmente o antipsicótico mais subutilizado por dificuldade prática de administração — muitos pacientes internados ou pouco aderentes simplesmente não fazem a refeição de 500 kcal exigida, comprometendo silenciosamente a eficácia sem que isso seja percebido como problema de adesão alimentar.",
    "Corrigir distúrbios eletrolíticos (potássio, magnésio) antes de iniciar é mais importante aqui do que na maioria dos outros antipsicóticos, dado o maior risco intrínseco de prolongamento de QT.",
    "É uma boa opção de troca quando o objetivo principal é reduzir risco metabólico em paciente já estável psiquiatricamente, mas exige reforçar adesão à exigência alimentar antes de considerar 'falha terapêutica'.",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
    "APA Practice Guideline for Schizophrenia",
    "Bula de referência ANVISA/FDA (Geodon)",
  ],
};
