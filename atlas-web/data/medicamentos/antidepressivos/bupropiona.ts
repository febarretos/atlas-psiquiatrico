import { Medicamento } from "../../types";

export const bupropiona: Medicamento = {
  id: "bupropiona",

  nome: "Bupropiona",

  nomeComercial: [
    "Wellbutrin XL",
    "Zetron",
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
      nivelEvidencia: 5,
    },
    {
      indicacao: "Tabagismo",
      doseInicial: "150 mg/dia por 3 dias",
      doseUsual: "150 mg 2x/dia (SR) ou 300 mg/dia (XL)",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "TDAH (off-label)",
      doseInicial: "150 mg/dia",
      doseUsual: "300 mg/dia",
      doseMaxima: "450 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Disfunção sexual induzida por ISRS (off-label)",
      doseInicial: "150 mg/dia",
      doseUsual: "150–300 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 3,
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
    "Contraindicada especificamente em Anorexia Nervosa e Bulimia Nervosa (não no Transtorno de Compulsão Alimentar Periódica) pelo risco aumentado de convulsão",
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

  gravidezCategoria: "cautela",

  lactacao:
    "Pequenas quantidades são excretadas no leite. Avaliar individualmente.",

  lactacaoCategoria: "cautela",

  renal:
    "Reduzir dose e/ou aumentar intervalo em insuficiência renal moderada a grave.",

  ajusteRenalNecessario: true,

  hepatica:
    "Utilizar doses menores e titular lentamente em insuficiência hepática.",

  observacoes:
    "A bupropiona é particularmente útil em pacientes com depressão acompanhada de fadiga, lentificação psicomotora, baixa motivação ou disfunção sexual induzida por ISRS. Também é uma excelente opção para pacientes preocupados com ganho de peso e para cessação do tabagismo. Deve ser evitada em pacientes com epilepsia. Entre os transtornos alimentares, é formalmente contraindicada apenas em Anorexia Nervosa e Bulimia Nervosa — o Transtorno de Compulsão Alimentar Periódica (TCAP) não compartilha essa contraindicação, já que o risco aumentado de convulsão nos outros dois transtornos está ligado a comportamentos purgativos, ausentes no TCAP (ver Pérolas Clínicas para detalhes sobre o mecanismo e o nível de evidência de uso no TCAP).",

  perolasClinicas: [
    "O risco de convulsão é dose-dependente e amplificado por doses únicas elevadas — nunca prescrever uma dose isolada acima de 150 mg (SR) de uma vez; a formulação XL, por liberar mais lentamente, tem risco convulsivo menor que doses equivalentes de IR/SR fracionadas de forma inadequada.",
    "Como associação a um ISRS/IRSN em depressão parcialmente responsiva (estratégia de combinação bastante usada na prática, ex.: 'California Rocket Fuel' quando associada à mirtazapina), costuma ser bem tolerada por mecanismos complementares e sem sobreposição de efeitos sexuais.",
    "É a única opção antidepressiva sem qualquer atividade serotoninérgica direta — útil em pacientes com histórico de síndrome serotoninérgica ou que necessitam manter outros agentes serotoninérgicos (ex. tramadol, triptanos) com menor risco de interação.",
    "Pode induzir ou piorar quadros de ansiedade e sintomas de pânico, especialmente na fase inicial — não é a escolha preferencial em pacientes com transtorno de pânico ou TAG proeminentes como comorbidade principal.",
    "Falso-positivo para anfetaminas em testes toxicológicos de triagem urinária é uma ocorrência relativamente comum e deve ser antecipada/documentada em contextos ocupacionais ou forenses.",
    "Transtornos alimentares — atenção à diferença entre eles: a contraindicação formal (bula) é específica para Anorexia Nervosa e Bulimia Nervosa, historicamente baseada em um ensaio clínico em bulimia com comportamento purgativo no qual 4 de ~50 pacientes tiveram convulsões tônico-clônicas — taxa muito acima da esperada. O mecanismo proposto é a redução do limiar convulsivo somada a distúrbios eletrolíticos (hipocalemia, alcalose) decorrentes da purgação, não o transtorno alimentar em si. Por isso, essa contraindicação NÃO se estende ao Transtorno de Compulsão Alimentar Periódica (TCAP), que não envolve purgação. Ainda assim, a bupropiona isolada não deve ser vista como tratamento estabelecido para o sintoma central do TCAP: um ECR (Guerdjikova et al., 2012) mostrou perda de peso modesta em mulheres com sobrepeso e TCAP, mas sem redução significativa da frequência de compulsões vs. placebo; um ECR mais recente com naltrexona/bupropiona combinados (Grilo et al., 2023) também não mostrou redução da frequência de compulsões superior ao placebo na fase aguda, embora a combinação tenha mostrado taxas maiores de perda de peso ≥5% e sinais de benefício como terapia de manutenção após resposta a outro tratamento. Ou seja: pode ser usada com segurança no TCAP (ao contrário de AN/BN), mas não deve ser prescrita com a expectativa de que vá reduzir os episódios de compulsão por si só — seu papel mais sustentado por evidência aí é adjuvante para perda de peso, não como tratamento central do transtorno.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
    "Horne RL, et al. Treatment of bulimia with bupropion: a multicenter controlled trial. J Clin Psychiatry. 1988 (ensaio original que motivou a contraindicação em bulimia).",
    "Guerdjikova AI, et al. Bupropion for overweight women with binge-eating disorder: a randomized, double-blind, placebo-controlled trial. J Clin Psychiatry. 2012.",
    "Grilo CM, et al. Naltrexone/bupropion for binge-eating disorder: a randomized, double-blind, placebo-controlled trial. Obesity. 2023.",
    "Bula de referência ANVISA/FDA (Wellbutrin/Zyban) — contraindicação em anorexia e bulimia nervosa.",
  ],
};