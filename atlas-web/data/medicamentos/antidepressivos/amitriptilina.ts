import { Medicamento } from "../../types";

export const amitriptilina: Medicamento = {
  id: "amitriptilina",

  nome: "Amitriptilina",

  nomeComercial: [
    "Tryptanol",
    "Amytril",
  ],

  classe: "Antidepressivo",

  subclasse: "Antidepressivo Tricíclico (TCA)",

  mecanismo:
    "Inibidor da recaptação de serotonina e noradrenalina, com potente antagonismo dos receptores muscarínicos, histamínicos H1 e α1-adrenérgicos. Essas ações explicam tanto sua eficácia antidepressiva quanto seus efeitos sedativos e anticolinérgicos.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25–50 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Dor neuropática",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–75 mg/dia",
      doseMaxima: "150 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Fibromialgia",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–50 mg/dia",
      doseMaxima: "75 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Profilaxia da enxaqueca",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–75 mg/dia",
      doseMaxima: "150 mg/dia",
      nivelEvidencia: 4,
    },
    {
      indicacao: "Insônia (off-label)",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–50 mg/dia",
      doseMaxima: "75 mg/dia",
      nivelEvidencia: 2,
    },
  ],

  meiaVida: "10–28 horas",

  metabolizacao:
    "Metabolização hepática principalmente pelas CYP2D6 e CYP2C19, formando nortriptilina, seu metabólito ativo.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Dor neuropática",
    "Fibromialgia",
    "Profilaxia da enxaqueca",
    "Insônia (off-label)",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Infarto agudo do miocárdio recente",
    "Arritmias cardíacas significativas",
    "Glaucoma de ângulo fechado",
    "Retenção urinária",
    "Hipersensibilidade à amitriptilina",
  ],

  vantagens: [
    "Alta eficácia antidepressiva",
    "Excelente evidência para dor neuropática",
    "Útil em fibromialgia",
    "Auxilia na insônia",
    "Eficaz na profilaxia da enxaqueca",
  ],

  desvantagens: [
    "Importante efeito anticolinérgico",
    "Sedação intensa",
    "Ganho de peso",
    "Hipotensão ortostática",
    "Maior risco em overdose",
  ],

  efeitosAdversos: [
    "Sonolência",
    "Boca seca",
    "Constipação",
    "Visão borrada",
    "Retenção urinária",
    "Hipotensão ortostática",
    "Taquicardia",
    "Ganho de peso",
  ],

  serotoninergico: true,

  cargaAnticolinergica: "Alta",

  interacoes: [
    "IMAO",
    "ISRS (especialmente fluoxetina e paroxetina)",
    "Álcool",
    "Benzodiazepínicos",
    "Antiarrítmicos classe IA e III",
    "Outros medicamentos que prolongam QT",
    "Cimetidina, quinidina, terbinafina e bupropiona (outros inibidores potentes da CYP2D6 — aumentam níveis séricos e risco de toxicidade/cardiotoxicidade)",
    "Clonidina (a amitriptilina pode reduzir/reverter seu efeito anti-hipertensivo)",
    "Varfarina (pode aumentar os níveis do anticoagulante e o risco de sangramento)",
    "Simpatomiméticos, incluindo anestésicos locais com vasoconstritor — adrenalina/noradrenalina (risco de efeitos cardiovasculares exagerados/arritmias)",
    "Antipsicóticos e outros anticolinérgicos (efeito aditivo anticolinérgico, sedativo e de prolongamento de QT)",
  ],

  ganhoPeso: "Alto",

  sedacao: "Muito alta",

  sexual: "Moderada",

  qt: "Alto",

  gravidez:
    "Pode ser utilizada quando os benefícios superarem os riscos. Existe experiência clínica relativamente extensa.",

  gravidezCategoria: "cautela",

  lactacao:
    "Pequenas quantidades são excretadas no leite. Geralmente considerada compatível com a amamentação, mediante acompanhamento clínico.",

  lactacaoCategoria: "compativel",

  renal:
    "Geralmente não necessita ajuste de dose.",

  ajusteRenalNecessario: false,

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "A amitriptilina permanece como uma das medicações mais eficazes para dor neuropática, fibromialgia e profilaxia da enxaqueca, frequentemente em doses inferiores às utilizadas para depressão. Em psiquiatria, atualmente costuma ser reservada para casos resistentes ou pacientes com depressão acompanhada de insônia importante e dor crônica. Deve ser utilizada com cautela em idosos devido ao elevado potencial anticolinérgico, risco de quedas e comprometimento cognitivo. Também apresenta maior cardiotoxicidade e risco em overdose quando comparada aos antidepressivos modernos.",

  perolasClinicas: [
    "Ao prescrever para dor crônica/insônia, deixar claro para o paciente (e para outros prescritores) que a dose usada (10-75mg) não é dose antidepressiva plena — evita confusão quando o paciente é reavaliado por outro profissional que pode interpretar a dose baixa como 'tratamento de depressão subdosado'.",
    "Antes de prescrever, considerar ECG basal em pacientes acima de 40-50 anos ou com fatores de risco cardiovascular, pela possibilidade de prolongamento de PR, QRS e QTc — especialmente relevante se houver associação com outros medicamentos que prolongam QT.",
    "Em caso de intenção suicida ou histórico de tentativas, avaliar cuidadosamente a quantidade de comprimidos dispensada por receita — a amitriptilina está entre os antidepressivos mais letais em overdose devido à cardiotoxicidade (arritmias por bloqueio de canais de sódio).",
    "A nortriptilina (seu metabólito ativo) tem perfil de efeitos colaterais mais tolerável; ao trocar de amitriptilina para nortriptilina por intolerância, considerar dose equivalente em torno de 1:1 a 1:1,5.",
    "Boca seca e constipação costumam ser dose-limitantes antes que ocorra efeito analgésico pleno — orientar sobre laxantes profiláticos e higiene do sono desde o início da titulação.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
  ],
};