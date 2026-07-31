import { Medicamento } from "../../types";

export const vortioxetina: Medicamento = {
  id: "vortioxetina",

  nome: "Vortioxetina",

  nomeComercial: [
    "Brintellix",
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
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada (off-label)",
      doseInicial: "5–10 mg/dia",
      doseUsual: "10–20 mg/dia",
      doseMaxima: "20 mg/dia",
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

  lactacao:
    "Dados insuficientes. Avaliar individualmente riscos e benefícios.",

  renal:
    "Não necessita ajuste de dose.",

  hepatica:
    "Geralmente não necessita ajuste em insuficiência hepática leve ou moderada.",

  observacoes:
    "A vortioxetina diferencia-se dos demais antidepressivos pela evidência consistente de melhora da função cognitiva em pacientes com depressão, incluindo atenção, velocidade de processamento e funções executivas. É uma excelente opção para pacientes com lentificação cognitiva, queixas de memória ou quando a disfunção sexual é uma preocupação importante. A náusea costuma ser transitória e é o principal fator limitante do tratamento.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};