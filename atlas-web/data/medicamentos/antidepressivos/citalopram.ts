import { Medicamento } from "../../types";

export const citalopram: Medicamento = {
  id: "citalopram",

  nome: "Citalopram",

  nomeComercial: [
    "Cipramil",
    "Procimax",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica. É uma mistura racêmica, sendo o escitalopram seu enantiômero ativo.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "10 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "10–20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "10–20 mg/dia",
      doseUsual: "20–40 mg/dia",
      doseMaxima: "40 mg/dia*",
      nivelEvidencia: 2,
    },
  ],

  meiaVida: "35 horas",

  metabolizacao:
    "Metabolização hepática principalmente pelas CYP2C19, CYP3A4 e CYP2D6.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno do Pânico",
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno de Ansiedade Generalizada",
    "Fobia Social",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Uso concomitante com pimozida",
    "Síndrome do QT longo congênito",
    "Hipersensibilidade ao citalopram",
  ],

  vantagens: [
    "Boa eficácia antidepressiva",
    "Boa tolerabilidade",
    "Baixo potencial de interações medicamentosas",
    "Posologia simples",
    "Ampla experiência clínica",
  ],

  desvantagens: [
    "Maior risco de prolongamento do intervalo QT",
    "Disfunção sexual",
    "Náusea nas primeiras semanas",
    "Menor seletividade que o escitalopram",
  ],

  efeitosAdversos: [
    "Náusea",
    "Cefaleia",
    "Insônia",
    "Sonolência",
    "Sudorese",
    "Disfunção sexual",
    "Tremor",
  ],

  serotoninergico: true,

  cargaAnticolinergica: "Nenhuma",

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Outros medicamentos que prolongam o QT",
    "Lítio",
    "Pimozida (contraindicada — risco aditivo de prolongamento do QT)",
    "Omeprazol e outros inibidores da CYP2C19 (ex. cimetidina) — aumentam os níveis séricos de citalopram e o risco de prolongamento do QT; limitar a dose a 20 mg/dia em uso concomitante",
    "AINEs e AAS (aumentam o risco de sangramento)",
    "Varfarina e outros anticoagulantes (aumentam o risco de sangramento)",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Alta",

  qt: "Alto",

  gravidez:
    "Pode ser utilizado durante a gestação quando os benefícios superam os riscos. A decisão deve ser individualizada.",

  gravidezCategoria: "cautela",

  lactacao:
    "Pode ser utilizado durante a amamentação, embora sertralina seja geralmente preferida.",

  lactacaoCategoria: "cautela",

  renal:
    "Não necessita ajuste de dose na insuficiência renal leve a moderada.",

  ajusteRenalNecessario: false,

  hepatica:
    "Recomenda-se dose máxima de 20 mg/dia em insuficiência hepática.",

  observacoes:
    "ISRS eficaz e bem tolerado. Seu principal fator limitante é o risco dose-dependente de prolongamento do intervalo QT, motivo pelo qual recomenda-se evitar doses acima de 40 mg/dia (20 mg/dia em idosos, insuficiência hepática ou metabolizadores lentos de CYP2C19). O escitalopram costuma ser preferido por apresentar melhor relação entre eficácia e tolerabilidade.",

  perolasClinicas: [
    "O alerta da FDA (2011) sobre QT limitou a dose máxima a 40 mg/dia (20 mg em idosos, hepatopatas ou uso concomitante de inibidor da CYP2C19) — muitos prescritores mais antigos ainda usam 60 mg/dia por hábito de bulas anteriores; vale checar e ajustar em pacientes legados de tratamentos antigos.",
    "Como é uma mistura racêmica que contém o escitalopram, na prática 40 mg de citalopram equivalem a aproximadamente 20 mg de escitalopram em termos de fração ativa — útil para pensar equivalência de dose ao trocar entre os dois.",
    "Solicitar ECG basal antes de iniciar em pacientes com cardiopatia estrutural, uso de outros medicamentos que prolongam QT, hipocalemia/hipomagnesemia ou histórico familiar de morte súbita — o risco de Torsades de pointes é real, ainda que raro.",
    "Hoje tem pouca vantagem prática sobre o escitalopram (que tem perfil de QT mais favorável na mesma potência antidepressiva) — geralmente reservado para continuidade em pacientes já estáveis há anos, não como escolha nova de primeira linha.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
    "FDA Drug Safety Communication (Citalopram & QT)",
  ],
};