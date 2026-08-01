import { Medicamento } from "../../types";

export const duloxetina: Medicamento = {
  id: "duloxetina",

  nome: "Duloxetina",

  nomeComercial: [
    "Cymbalta",
    "Velija",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRSN",

  mecanismo:
    "Inibidor da recaptação de serotonina e noradrenalina (ISRSN). Atua de forma equilibrada sobre ambos os neurotransmissores em doses terapêuticas, além de apresentar eficácia em síndromes dolorosas crônicas.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "30 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "120 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "30 mg/dia",
      doseUsual: "60–120 mg/dia",
      doseMaxima: "120 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Dor Neuropática Diabética",
      doseInicial: "30 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "120 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Fibromialgia",
      doseInicial: "30 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "120 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Dor Musculoesquelética Crônica",
      doseInicial: "30 mg/dia",
      doseUsual: "60 mg/dia",
      doseMaxima: "120 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "12 horas",

  metabolizacao:
    "Metabolização hepática principalmente pelas enzimas CYP1A2 e CYP2D6.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Dor Neuropática Diabética",
    "Fibromialgia",
    "Dor Musculoesquelética Crônica",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Doença hepática grave",
    "Insuficiência renal grave (ClCr <30 mL/min)",
    "Hipersensibilidade à duloxetina",
  ],

  vantagens: [
    "Excelente eficácia para depressão e ansiedade",
    "Benefício adicional em síndromes dolorosas",
    "Boa opção para pacientes com dor crônica associada",
    "Baixo risco de prolongamento do QT",
    "Perfil pouco sedativo",
  ],

  desvantagens: [
    "Náusea frequente no início do tratamento",
    "Pode aumentar pressão arterial",
    "Disfunção sexual",
    "Síndrome de descontinuação quando suspensa abruptamente",
  ],

  efeitosAdversos: [
    "Náusea",
    "Boca seca",
    "Constipação",
    "Sudorese",
    "Insônia",
    "Tontura",
    "Disfunção sexual",
    "Redução do apetite",
  ],

  serotoninergico: true,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Lítio",
    "Anticoagulantes",
    "Fluvoxamina (inibidor potente da CYP1A2 — aumenta a AUC da duloxetina em cerca de 460%; associação a evitar)",
    "Ciprofloxacino (inibidor potente da CYP1A2 — pode aumentar significativamente os níveis de duloxetina; associação a evitar)",
    "Outros inibidores potentes da CYP1A2 (ex. enoxacino)",
    "AINEs e AAS (aumentam o risco de sangramento)",
    "Substratos da CYP2D6 (ex. tamoxifeno, antidepressivos tricíclicos, alguns antipsicóticos, metoprolol) — duloxetina é inibidora moderada da CYP2D6",
    "Triptanos (risco de síndrome serotoninérgica)",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Moderada",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  gravidezCategoria: "cautela",

  lactacao:
    "Dados limitados. Avaliar individualmente riscos e benefícios.",

  lactacaoCategoria: "cautela",

  renal:
    "Contraindicada em insuficiência renal grave (clearance de creatinina inferior a 30 mL/min).",

  ajusteRenalNecessario: true,

  hepatica:
    "Evitar em pacientes com doença hepática crônica ou insuficiência hepática.",

  observacoes:
    "A duloxetina é um dos antidepressivos de escolha quando depressão ou ansiedade coexistem com dor crônica, fibromialgia ou neuropatia diabética. A dose de 60 mg/dia costuma oferecer o melhor equilíbrio entre eficácia e tolerabilidade, enquanto doses superiores raramente aumentam significativamente a eficácia clínica. Deve ser utilizada com cautela em pacientes com hipertensão arterial e evitada na presença de doença hepática importante.",

  perolasClinicas: [
    "As cápsulas são de liberação entérica e não devem ser abertas, mastigadas ou trituradas — isso destrói o revestimento protetor da mucosa gástrica e aumenta muito a degradação/irritação, sendo motivo comum de intolerância gástrica evitável.",
    "Iniciar diretamente com 60 mg em pacientes ansiosos ou sensíveis a efeitos colaterais frequentemente causa náusea e tontura significativas — considerar iniciar com 30 mg por 1-2 semanas antes de titular, mesmo que a bula permita início direto em 60 mg.",
    "É uma opção particularmente atraente em pacientes com síndrome dolorosa crônica associada a depressão (ex. lombalgia crônica, osteoartrite, fibromialgia) por tratar ambas as condições com um único fármaco, reduzindo polifarmácia.",
    "Descontinuação abrupta causa síndrome de retirada proeminente (tontura, parestesias, irritabilidade) mesmo após poucas semanas de uso — reduzir gradualmente, inclusive ao trocar de classe.",
    "Hepatotoxicidade é rara mas descrita; evitar associação com uso pesado de álcool e monitorar função hepática se houver fatores de risco.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};