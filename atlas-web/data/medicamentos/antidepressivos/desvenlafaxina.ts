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
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "50 mg/dia",
      doseUsual: "50–100 mg/dia",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "50 mg/dia",
      doseUsual: "50–100 mg/dia",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Transtorno de Ansiedade Social",
      doseInicial: "50 mg/dia",
      doseUsual: "50–100 mg/dia",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 2,
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

  serotoninergico: true,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Lítio",
    "Anticoagulantes",
    "Outros medicamentos serotoninérgicos",
    "Inibidores potentes da CYP3A4 (ex. cetoconazol) — podem aumentar discretamente a exposição à desvenlafaxina, com maior relevância se houver insuficiência renal ou hepática associada",
    "AINEs e AAS (aumentam o risco de sangramento)",
    "Triptanos (risco de síndrome serotoninérgica)",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Moderada",

  qt: "Baixo",

  hipotensaoOrtostatica: "Baixo",

  riscoConvulsivo: "Baixo",

  sintomasDescontinuacao: "Alto",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados. Avaliar individualmente riscos e benefícios.",

  lactacaoCategoria: "cautela",

  renal:
    "Reduzir a dose na insuficiência renal moderada e grave.",

  ajusteRenalNecessario: true,

  hepatica:
    "Geralmente não necessita ajuste importante, porém recomenda-se cautela em insuficiência hepática grave.",

  observacoes:
    "A desvenlafaxina é o metabólito ativo da venlafaxina e apresenta farmacocinética mais previsível, com menor influência genética da CYP2D6. A dose de 50 mg/dia costuma proporcionar o benefício terapêutico máximo para a maioria dos pacientes; aumentos acima dessa dose tendem a elevar os efeitos adversos mais do que a eficácia. Assim como outros ISRSN, pode elevar a pressão arterial e deve ser retirada gradualmente para minimizar sintomas de descontinuação.",

  perolasClinicas: [
    "A curva dose-resposta é relativamente achatada acima de 50 mg/dia — diferentemente da venlafaxina, aqui não há necessariamente maior benefício noradrenérgico ao subir a dose, tornando 50 mg com frequência a dose 'teto prático' antes de considerar troca de fármaco.",
    "Por não depender da CYP2D6 para ativação (ao contrário da venlafaxina, que precisa ser convertida no próprio metabólito desvenlafaxina), tem farmacocinética mais previsível em metabolizadores ultrarrápidos ou lentos de CYP2D6 — útil quando há suspeita de resposta/efeitos adversos atípicos à venlafaxina.",
    "Não é indicada para 'trocar' diretamente dose a dose pela venlafaxina (não é conversão 1:1 de miligramas) — ao mudar de classe, reavaliar clinicamente a resposta em vez de assumir equivalência posológica direta.",
    "Retirada abrupta, mesmo de doses baixas (50 mg), pode causar síndrome de descontinuação significativa devido à meia-vida relativamente curta (11h) — reduzir de forma gradual, especialmente após uso prolongado.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};