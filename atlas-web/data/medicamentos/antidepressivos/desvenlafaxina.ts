import { Medicamento } from "../../types";

export const desvenlafaxina: Medicamento = {
  id: "desvenlafaxina",

  nome: "Desvenlafaxina",

  nomeComercial: [
    "Pristiq",
    "Desve",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRSN",

  mecanismo:
    "Inibidor da recaptação de serotonina e noradrenalina (ISRSN). É o metabólito ativo da venlafaxina, apresentando farmacocinética mais previsível e menor influência do polimorfismo da CYP2D6.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "50 mg/dia",
      doseUsual: "50 mg/dia",
      doseMaxima: "100 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "50 mg/dia",
      doseUsual: "50–100 mg/dia",
      doseMaxima: "100 mg/dia",
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "50 mg/dia",
      doseUsual: "50–100 mg/dia",
      doseMaxima: "100 mg/dia",
    },
    {
      indicacao: "Transtorno de Ansiedade Social",
      doseInicial: "50 mg/dia",
      doseUsual: "50–100 mg/dia",
      doseMaxima: "100 mg/dia",
    },
  ],

  meiaVida: "11 horas",

  metabolizacao:
    "Metabolização principalmente por conjugação (UGT), com pequena participação da CYP3A4. Baixa dependência da CYP2D6.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Social",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à desvenlafaxina ou à venlafaxina",
  ],

  vantagens: [
    "Farmacocinética previsível",
    "Menor potencial de interações medicamentosas",
    "Não depende significativamente da CYP2D6",
    "Boa eficácia para depressão e ansiedade",
    "Posologia simples (1x ao dia)",
  ],

  desvantagens: [
    "Pode aumentar pressão arterial",
    "Síndrome de descontinuação",
    "Disfunção sexual",
    "Náusea no início do tratamento",
  ],

  efeitosAdversos: [
    "Náusea",
    "Boca seca",
    "Sudorese",
    "Constipação",
    "Insônia",
    "Disfunção sexual",
    "Hipertensão dose-dependente",
    "Tontura",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Lítio",
    "Anticoagulantes",
    "Outros medicamentos serotoninérgicos",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Alta",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  lactacao:
    "Dados limitados. Avaliar individualmente riscos e benefícios.",

  renal:
    "Reduzir a dose na insuficiência renal moderada e grave.",

  hepatica:
    "Geralmente não necessita ajuste importante, porém recomenda-se cautela em insuficiência hepática grave.",

  observacoes:
    "A desvenlafaxina é o metabólito ativo da venlafaxina e apresenta farmacocinética mais previsível, com menor influência genética da CYP2D6. A dose de 50 mg/dia costuma proporcionar o benefício terapêutico máximo para a maioria dos pacientes; aumentos acima dessa dose tendem a elevar os efeitos adversos mais do que a eficácia. Assim como outros ISRSN, pode elevar a pressão arterial e deve ser retirada gradualmente para minimizar sintomas de descontinuação.",

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};