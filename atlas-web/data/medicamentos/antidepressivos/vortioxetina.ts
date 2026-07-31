import { Medicamento } from "../../types";

export const vortioxetina: Medicamento = {
  id: "vortioxetina",

  nome: "Vortioxetina",

  nomeComercial: [
    "Brintellix",
    "Vognus",
    "Voextor",
  ],

  classe: "Antidepressivo",

  subclasse: "Modulador da serotonina",

  mecanismo:
    "Modulador e estimulador da serotonina. Inibe o transportador de serotonina (SERT) e atua como agonista parcial, agonista ou antagonista em diferentes receptores serotoninérgicos (5-HT1A, 5-HT1B, 5-HT3, 5-HT7 e 5-HT1D), promovendo efeitos sobre cognição, humor e ansiedade.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "10 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada (off-label)",
      doseInicial: "5–10 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
      nivelEvidencia: 2,
    },
  ],

  meiaVida: "66 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6, com participação secundária das CYP3A4, CYP2C9, CYP2C19, CYP2A6 e CYP2C8.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada (off-label)",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à vortioxetina",
  ],

  vantagens: [
    "Melhora comprovada de sintomas cognitivos da depressão",
    "Baixa incidência de disfunção sexual",
    "Baixo potencial de ganho de peso",
    "Boa tolerabilidade",
    "Baixa sedação",
  ],

  desvantagens: [
    "Náusea é muito frequente no início do tratamento",
    "Custo elevado",
    "Menor experiência clínica em comparação aos ISRS clássicos",
  ],

  efeitosAdversos: [
    "Náusea",
    "Constipação",
    "Tontura",
    "Cefaleia",
    "Vômitos",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Rifampicina",
    "Bupropiona (aumenta níveis da vortioxetina)",
  ],

  ganhoPeso: "Muito baixo",

  sedacao: "Muito baixa",

  sexual: "Baixa",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. Dados ainda são mais limitados que para os ISRS clássicos.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados insuficientes. Avaliar individualmente riscos e benefícios.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose.",

  ajusteRenalNecessario: false,

  hepatica:
    "Geralmente não necessita ajuste em insuficiência hepática leve ou moderada.",

  observacoes:
    "A vortioxetina diferencia-se dos demais antidepressivos pela evidência consistente de melhora da função cognitiva em pacientes com depressão, incluindo atenção, velocidade de processamento e funções executivas. É uma excelente opção para pacientes com lentificação cognitiva, queixas de memória ou quando a disfunção sexual é uma preocupação importante. A náusea costuma ser transitória e é o principal fator limitante do tratamento.",

  perolasClinicas: [
    "O benefício cognitivo demonstrado em estudos parece ser parcialmente independente da melhora do humor (efeito pró-cognitivo direto) — é um dos poucos antidepressivos com esse tipo de evidência, útil para argumentar a escolha em pacientes cuja queixa principal é 'neblina mental' associada à depressão.",
    "Náusea é o efeito adverso mais consistente e costuma ser dose-dependente; iniciar em 10 mg (ou até 5 mg em pacientes sensíveis, fracionando o comprimido) e titular após 1-2 semanas reduz bastante a taxa de descontinuação precoce por esse motivo.",
    "Apesar de atuar no sistema serotoninérgico, tem uma das menores taxas de disfunção sexual entre antidepressivos com ação serotoninérgica significativa — opção a considerar especificamente quando a disfunção sexual foi o motivo de troca de um ISRS prévio.",
    "Ainda tem custo elevado e menor tempo de mercado que os ISRS/IRSN clássicos, o que se traduz em menor experiência acumulada em populações especiais (gestação, idade avançada extrema) — ponderar isso ao escolher entre vortioxetina e opções mais consolidadas quando o perfil de eficácia esperado for equivalente.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};