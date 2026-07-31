import { Medicamento } from "../../types";

export const venlafaxina: Medicamento = {
  id: "venlafaxina",

  nome: "Venlafaxina",

  nomeComercial: [
    "Efexor XR",
    "Venlift OD",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRSN",

  mecanismo:
    "Inibidor da recaptação de serotonina e noradrenalina (ISRSN). Em doses baixas predomina o bloqueio da recaptação de serotonina; acima de aproximadamente 150 mg/dia aumenta significativamente a inibição da recaptação de noradrenalina.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "37,5–75 mg/dia",
      doseUsual: "75–225 mg/dia",
      doseMaxima: "375 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "37,5 mg/dia",
      doseUsual: "75–225 mg/dia",
      doseMaxima: "225 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "37,5 mg/dia",
      doseUsual: "75–225 mg/dia",
      doseMaxima: "225 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno de Ansiedade Social",
      doseInicial: "37,5–75 mg/dia",
      doseUsual: "75–225 mg/dia",
      doseMaxima: "225 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "37,5–75 mg/dia",
      doseUsual: "150–225 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 2,
    },
  ],

  meiaVida:
    "5 horas (venlafaxina) e 11 horas (O-desmetilvenlafaxina)",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6, formando o metabólito ativo O-desmetilvenlafaxina (ODV).",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Social",
    "Transtorno Obsessivo-Compulsivo",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à venlafaxina",
  ],

  vantagens: [
    "Excelente eficácia para depressão moderada a grave",
    "Muito eficaz para transtornos de ansiedade",
    "Efeito noradrenérgico em doses maiores",
    "Boa evidência em dor neuropática e fibromialgia (off-label)",
    "Pode melhorar energia e sintomas cognitivos em alguns pacientes",
  ],

  desvantagens: [
    "Síndrome de descontinuação frequente",
    "Pode elevar pressão arterial em doses elevadas",
    "Náusea no início do tratamento",
    "Disfunção sexual",
    "Pode aumentar ansiedade nas primeiras semanas",
  ],

  efeitosAdversos: [
    "Náusea",
    "Sudorese",
    "Insônia",
    "Constipação",
    "Boca seca",
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

  gravidezCategoria: "cautela",

  lactacao:
    "Passa para o leite materno em pequenas quantidades. Avaliar individualmente riscos e benefícios.",

  lactacaoCategoria: "cautela",

  renal:
    "Reduzir a dose em insuficiência renal moderada a grave.",

  ajusteRenalNecessario: true,

  hepatica:
    "Recomenda-se redução da dose e titulação mais lenta em insuficiência hepática.",

  observacoes:
    "Um dos antidepressivos de maior eficácia para depressão e transtornos de ansiedade. Em doses acima de aproximadamente 150 mg/dia ocorre maior efeito noradrenérgico, podendo beneficiar pacientes com fadiga, lentificação psicomotora e sintomas cognitivos. Deve-se monitorar pressão arterial em doses elevadas e realizar retirada gradual devido ao elevado risco de síndrome de descontinuação.",

  perolasClinicas: [
    "É, junto com a paroxetina, o antidepressivo com maior taxa de síndrome de descontinuação — sua meia-vida curta (5h para a molécula-mãe) faz com que sintomas de retirada apareçam já 1-2 dias após esquecer uma dose; útil explicar isso ao paciente para reduzir alarme desnecessário e reforçar adesão.",
    "Considerada por muitos como um dos antidepressivos mais eficazes disponíveis para depressão grave/melancólica, junto com os TCAs e a mirtazapina, mas com melhor tolerabilidade — é uma opção de escalonamento razoável antes de partir para tricíclicos em depressão resistente.",
    "A formulação XR (liberação prolongada) tem incidência de náusea significativamente menor que a formulação IR de liberação imediata — ao trocar de IR para XR na mesma dose diária total, a tolerabilidade costuma melhorar.",
    "Hipertensão arterial dose-dependente é clinicamente relevante sobretudo acima de 225 mg/dia — medir PA antes de iniciar e reavaliar a cada aumento de dose, não apenas na consulta de retorno padrão.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};