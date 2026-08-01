import { Medicamento } from "../../types";

export const imipramina: Medicamento = {
  id: "imipramina",

  nome: "Imipramina",

  nomeComercial: [
    "Imipra",
    "Depramina",
    "Praminan",
    "Uni Imiprax",
  ],

  classe: "Antidepressivo",

  subclasse: "Antidepressivo Tricíclico (TCA)",

  mecanismo:
    "Antidepressivo tricíclico que inibe a recaptação de noradrenalina e serotonina, com discreto predomínio do efeito noradrenérgico. Também apresenta antagonismo dos receptores muscarínicos, histamínicos H1 e α1-adrenérgicos, responsáveis por seus efeitos anticolinérgicos, sedativos e cardiovasculares.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25–50 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "300 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "10–25 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 3,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada (off-label)",
      doseInicial: "25 mg/dia",
      doseUsual: "75–150 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 2,
    },
    {
      indicacao: "Enurese noturna (crianças >6 anos)",
      doseInicial: "10–25 mg à noite",
      doseUsual: "25–50 mg/noite",
      doseMaxima: "75 mg/noite",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "8–20 horas",

  metabolizacao:
    "Metabolização hepática principalmente pela CYP2D6 e CYP2C19, formando desipramina, seu principal metabólito ativo.",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno do Pânico",
    "Transtorno de Ansiedade Generalizada (off-label)",
    "Enurese noturna",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Infarto agudo do miocárdio recente",
    "Arritmias cardíacas importantes",
    "Glaucoma de ângulo fechado",
    "Retenção urinária",
    "Hipersensibilidade à imipramina",
  ],

  vantagens: [
    "Alta eficácia antidepressiva",
    "Boa evidência para transtorno do pânico",
    "Pode ser útil em pacientes com ansiedade importante",
    "Tratamento tradicional da enurese noturna",
  ],

  desvantagens: [
    "Importante efeito anticolinérgico",
    "Sedação",
    "Hipotensão ortostática",
    "Ganho de peso",
    "Maior risco em overdose",
  ],

  efeitosAdversos: [
    "Boca seca",
    "Constipação",
    "Visão borrada",
    "Retenção urinária",
    "Sonolência",
    "Hipotensão ortostática",
    "Taquicardia",
    "Sudorese",
  ],

  serotoninergico: true,

  cargaAnticolinergica: "Alta",

  interacoes: [
    "IMAO",
    "Fluoxetina",
    "Paroxetina",
    "Álcool",
    "Benzodiazepínicos",
    "Outros medicamentos que prolongam QT",
    "Cimetidina, quinidina, terbinafina e bupropiona (inibidores potentes da CYP2D6 — aumentam níveis séricos e risco de toxicidade/cardiotoxicidade)",
    "Clonidina (a imipramina pode reduzir/reverter seu efeito anti-hipertensivo)",
    "Varfarina (pode aumentar os níveis do anticoagulante e o risco de sangramento)",
    "Simpatomiméticos, incluindo anestésicos locais com vasoconstritor — adrenalina/noradrenalina (risco de efeitos cardiovasculares exagerados/arritmias)",
    "Antipsicóticos e outros anticolinérgicos (efeito aditivo anticolinérgico, sedativo e de prolongamento de QT)",
  ],

  ganhoPeso: "Alto",

  sedacao: "Alta",

  sexual: "Moderada",

  qt: "Alto",

  gravidez:
    "Pode ser utilizada quando os benefícios superarem os riscos. Existe experiência clínica relativamente extensa durante a gestação.",

  gravidezCategoria: "cautela",

  lactacao:
    "Pequenas quantidades são excretadas no leite materno. Geralmente compatível com a amamentação, mediante acompanhamento clínico.",

  lactacaoCategoria: "compativel",

  renal:
    "Geralmente não necessita ajuste de dose.",

  ajusteRenalNecessario: false,

  hepatica:
    "Iniciar com doses menores e titular lentamente em pacientes com insuficiência hepática.",

  observacoes:
    "A imipramina foi o primeiro antidepressivo tricíclico introduzido na prática clínica e permanece como uma medicação altamente eficaz para depressão maior. Atualmente é utilizada principalmente em casos resistentes, transtorno do pânico e enurese noturna. Seu perfil de efeitos adversos limita o uso como tratamento de primeira linha, especialmente devido aos efeitos anticolinérgicos, risco cardiovascular e toxicidade em overdose. Recomenda-se cautela em idosos e considerar realização de ECG antes do início do tratamento em pacientes com fatores de risco cardiovasculares.",

  perolasClinicas: [
    "Na enurese noturna, o efeito costuma aparecer já na primeira semana (diferente da latência antidepressiva de semanas) — se não houver resposta em 2 semanas na dose adequada, é pouco provável que doses maiores ajudem, e deve-se reconsiderar o diagnóstico ou terapia alternativa (alarme, desmopressina).",
    "Em crianças, a margem terapêutica é estreita e a cardiotoxicidade em superdosagem é particularmente perigosa — combinado ao risco de ingestão acidental por irmãos menores, a quantidade prescrita/dispensada deve ser rigorosamente controlada.",
    "Como um dos poucos tricíclicos com evidência histórica robusta em transtorno do pânico, pode ser considerada em pacientes que falharam múltiplos ISRS/IRSN e não toleram ou não respondem a benzodiazepínicos de manutenção.",
    "Níveis séricos combinados de imipramina + desipramina (metabólito ativo) podem ser dosados e são úteis para checar adesão ou investigar resposta inadequada, sendo um dos poucos antidepressivos com monitorização terapêutica de nível sérico bem estabelecida.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline for the Treatment of Depression",
    "NICE Guideline NG222",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines in Psychiatry",
  ],
};