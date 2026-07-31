import { Medicamento } from "../../types";

export const paroxetina: Medicamento = {
  id: "paroxetina",

  nome: "Paroxetina",

  nomeComercial: [
    "Aropax",
    "Pondera",
    "Cebrilin",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica. Apresenta discreta atividade anticolinérgica e potente inibição da CYP2D6.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "50 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "10–20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "50 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "10 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "60 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "20 mg/dia",
      doseUsual: "40–60 mg/dia",
      doseMaxima: "60 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "20 mg/dia",
      doseUsual: "20–50 mg/dia",
      doseMaxima: "50 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno de Estresse Pós-Traumático",
      doseInicial: "20 mg/dia",
      doseUsual: "20–50 mg/dia",
      doseMaxima: "50 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "21 horas",

  metabolizacao:
    "Metabolização hepática predominantemente pela CYP2D6, da qual também é potente inibidora.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno Obsessivo-Compulsivo",
    "Fobia Social",
    "Transtorno de Estresse Pós-Traumático",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Uso concomitante com tioridazina",
    "Uso concomitante com pimozida",
    "Hipersensibilidade à paroxetina",
  ],

  vantagens: [
    "Excelente eficácia para transtornos de ansiedade",
    "Importante efeito ansiolítico",
    "Boa evidência para TOC",
    "Boa opção quando há insônia associada",
  ],

  desvantagens: [
    "Maior risco de síndrome de descontinuação entre os ISRS",
    "Maior incidência de disfunção sexual",
    "Maior potencial de ganho de peso",
    "Potente inibição da CYP2D6",
    "Pode causar sonolência",
  ],

  efeitosAdversos: [
    "Náusea",
    "Sonolência",
    "Constipação",
    "Boca seca",
    "Sudorese",
    "Disfunção sexual",
    "Ganho de peso",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Tamoxifeno",
    "Antidepressivos tricíclicos",
    "Metoprolol",
    "Lítio",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Moderada",

  sexual: "Alta",

  qt: "Baixo",

  gravidez:
    "Evitar quando possível, especialmente no primeiro trimestre, devido à associação com aumento do risco de malformações cardíacas fetais observada em alguns estudos.",

  gravidezCategoria: "evitar",

  lactacao:
    "Pode ser utilizada durante a amamentação quando indicada, embora sertralina e paroxetina sejam geralmente as opções preferidas entre os ISRS.",

  lactacaoCategoria: "cautela",

  renal:
    "Considerar redução da dose em insuficiência renal grave.",

  ajusteRenalNecessario: true,

  hepatica:
    "Recomenda-se iniciar com doses menores e titular lentamente.",

  observacoes:
    "ISRS bastante eficaz para transtornos de ansiedade, porém associado a maior incidência de síndrome de descontinuação, ganho de peso e disfunção sexual. Deve ser retirado gradualmente. É um potente inibidor da CYP2D6, aumentando o potencial de interações medicamentosas.",

  perolasClinicas: [
    "Tem a maior taxa de síndrome de descontinuação entre os ISRS, pela combinação de meia-vida curta e propriedades anticolinérgicas leves — retirar sempre de forma muito gradual (reduções de 10% a cada 1-2 semanas nas doses finais), especialmente após uso prolongado.",
    "É o ISRS com maior atividade anticolinérgica intrínseca, o que explica em parte sua maior sedação e ganho de peso comparado a outros da classe — evitar em idosos e pacientes com risco de comprometimento cognitivo pelo mesmo motivo que se evitam TCAs.",
    "Evitar na gravidez, particularmente no primeiro trimestre, pela associação (embora debatida) com maior risco de malformações cardíacas fetais — quando uma paciente engravida em uso de paroxetina, considerar troca planejada para sertralina ou outro ISRS com perfil gestacional mais estabelecido, em vez de suspensão abrupta.",
    "Sendo o inibidor mais potente da CYP2D6 entre os ISRS, pode inativar de forma clinicamente relevante pró-fármacos que dependem dessa via para ativação (ex. tamoxifeno, codeína/tramadol) — evitar associação em pacientes em uso de tamoxifeno para câncer de mama.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};