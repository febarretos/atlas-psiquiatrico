import { Medicamento } from "../../types";

export const nortriptilina: Medicamento = {
  id: "nortriptilina",

  nome: "Nortriptilina",

  nomeComercial: [
    "Pamelor",
    "Nortry",
    "Nortrip",
  ],

  classe: "Antidepressivo",

  subclasse: "Antidepressivo Tricíclico (TCA)",

  mecanismo:
    "Inibidor da recaptação de noradrenalina e, em menor intensidade, de serotonina. Apresenta menor antagonismo dos receptores muscarínicos, histamínicos H1 e α1-adrenérgicos quando comparada à amitriptilina, resultando em melhor tolerabilidade.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25 mg/dia",
      doseUsual: "50–100 mg/dia",
      doseMaxima: "150 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Dor neuropática",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–75 mg/dia",
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 4,
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
      doseMaxima: "100 mg/dia",
      nivelEvidencia: 3,
    },
  ],

  meiaVida: "18–44 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6. É o principal metabólito ativo da amitriptilina.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Dor neuropática",
    "Fibromialgia",
    "Profilaxia da enxaqueca",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Infarto agudo do miocárdio recente",
    "Arritmias cardíacas significativas",
    "Glaucoma de ângulo fechado",
    "Hipersensibilidade à nortriptilina",
  ],

  vantagens: [
    "Menor sedação que a amitriptilina",
    "Menor efeito anticolinérgico",
    "Boa evidência para dor neuropática",
    "Menor risco de hipotensão ortostática",
    "Boa opção entre os tricíclicos para idosos quando um TCA é necessário",
  ],

  desvantagens: [
    "Ainda apresenta efeitos anticolinérgicos",
    "Pode prolongar o intervalo QT",
    "Maior risco em overdose que ISRS/IRSN",
    "Necessidade de titulação gradual",
  ],

  efeitosAdversos: [
    "Boca seca",
    "Constipação",
    "Sonolência",
    "Tontura",
    "Hipotensão ortostática",
    "Taquicardia",
    "Sudorese",
  ],

  serotoninergico: true,

  cargaAnticolinergica: "Moderada",

  interacoes: [
    "IMAO",
    "Fluoxetina",
    "Paroxetina",
    "Quinidina",
    "Álcool",
    "Outros medicamentos que prolongam QT",
    "Cimetidina, terbinafina e bupropiona (outros inibidores potentes da CYP2D6 — aumentam níveis séricos e risco de toxicidade)",
    "Clonidina (a nortriptilina pode reduzir/reverter seu efeito anti-hipertensivo)",
    "Varfarina (pode aumentar os níveis do anticoagulante e o risco de sangramento)",
    "Simpatomiméticos, incluindo anestésicos locais com vasoconstritor — adrenalina/noradrenalina (risco de efeitos cardiovasculares exagerados/arritmias)",
  ],

  ganhoPeso: "Moderado",

  sedacao: "Moderada",

  sexual: "Moderada",

  qt: "Moderado",

  gravidez:
    "Pode ser utilizada quando os benefícios superarem os riscos. Existe experiência clínica relativamente extensa com tricíclicos durante a gestação.",

  gravidezCategoria: "cautela",

  lactacao:
    "Compatível com a amamentação em muitos casos, devido à baixa concentração no leite materno. Recomenda-se acompanhamento clínico.",

  lactacaoCategoria: "compativel",

  renal:
    "Geralmente não necessita ajuste de dose.",

  ajusteRenalNecessario: false,

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "A nortriptilina é considerada um dos tricíclicos com melhor perfil de tolerabilidade, apresentando menor sedação, menor efeito anticolinérgico e menor hipotensão ortostática do que a amitriptilina. Por esse motivo, costuma ser preferida quando há indicação de um antidepressivo tricíclico, especialmente em pacientes idosos ou com maior risco de efeitos adversos. Também possui excelente evidência para dor neuropática e profilaxia da enxaqueca. Em doses elevadas ou em pacientes com doença cardiovascular, recomenda-se monitorização eletrocardiográfica devido ao potencial de alterações de condução cardíaca.",

  perolasClinicas: [
    "É o TCA com relação dose-resposta em 'janela terapêutica' mais bem documentada: níveis séricos muito altos podem, na prática, se associar a MENOR resposta antidepressiva do que níveis intermediários (50-150 ng/mL) — dosagem sérica é útil e mais informativa aqui do que na maioria dos outros antidepressivos.",
    "Entre os tricíclicos, é a opção preferida quando um TCA é necessário em idosos, por combinar menor efeito anticolinérgico/hipotensor com a possibilidade de monitorização por nível sérico — mas ainda assim requer ECG basal e de acompanhamento nessa população.",
    "Em dor neuropática/profilaxia de enxaqueca, iniciar com doses muito baixas (10 mg) à noite e subir lentamente reduz sedação matinal residual, que é o principal motivo de abandono precoce do tratamento nessas indicações.",
    "Constipação e boca seca, embora menos intensas que com amitriptilina, ainda ocorrem e costumam ser subnotificadas pelo paciente — perguntar ativamente, pois raramente é relatada espontaneamente.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
  ],
};