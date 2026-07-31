import { Medicamento } from "../../types";

export const sertralina: Medicamento = {
  id: "sertralina",

  nome: "Sertralina",

  nomeComercial: [
    "Zoloft",
    "Assert",
    "Serenata",
    "Tolrest",
    "Dieloft",
    "Sered",
  ],

  classe: "Antidepressivo",

  subclasse: "ISRS",

  mecanismo:
    "Inibidor seletivo da recaptação de serotonina (ISRS), aumentando a disponibilidade de serotonina na fenda sináptica.",

  posologias: [
    {
      indicacao: "Transtorno Depressivo Maior",
      doseInicial: "25–50 mg/dia",
      doseUsual: "50–200 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno de Ansiedade Generalizada",
      doseInicial: "25 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno do Pânico",
      doseInicial: "25 mg/dia",
      doseUsual: "50–200 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Obsessivo-Compulsivo",
      doseInicial: "50 mg/dia",
      doseUsual: "100–200 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "TEPT",
      doseInicial: "25 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Fobia Social",
      doseInicial: "25 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "200 mg/dia",
      nivelEvidencia: 5,
    },
    {
      indicacao: "Transtorno Disfórico Pré-Menstrual",
      doseInicial: "50 mg/dia",
      doseUsual: "50–150 mg/dia",
      doseMaxima: "150 mg/dia",
      nivelEvidencia: 4,
    },
  ],

  meiaVida: "26 horas",

  metabolizacao:
    "Metabolização hepática (CYP2B6, CYP2C19, CYP2D6 e CYP3A4).",

  indicacoes: [
    "Transtorno Depressivo Maior",
    "Transtorno de Ansiedade Generalizada",
    "Transtorno do Pânico",
    "Transtorno Obsessivo-Compulsivo",
    "Transtorno de Estresse Pós-Traumático",
    "Fobia Social",
    "Transtorno Disfórico Pré-Menstrual",
  ],

  contraIndicacoes: [
    "Uso concomitante com IMAO",
    "Hipersensibilidade à sertralina",
  ],

  vantagens: [
    "Excelente evidência científica",
    "Boa tolerabilidade",
    "Baixo potencial de interação medicamentosa",
    "Boa opção em pacientes com doença cardiovascular",
    "Ampla experiência clínica",
  ],

  desvantagens: [
    "Disfunção sexual",
    "Náuseas nas primeiras semanas",
    "Pode aumentar ansiedade no início do tratamento",
  ],

  efeitosAdversos: [
    "Náusea",
    "Diarreia",
    "Insônia",
    "Cefaleia",
    "Tremor",
    "Sudorese",
  ],

  interacoes: [
    "IMAO",
    "Linezolida",
    "Tramadol",
    "Lítio",
    "Anticoagulantes",
  ],

  ganhoPeso: "Baixo",

  sedacao: "Baixa",

  sexual: "Moderada",

  qt: "Baixo",

  gravidez:
    "Pode ser utilizada quando os benefícios superam os riscos. Uma das opções mais estudadas durante a gestação.",

  gravidezCategoria: "preferencial",

  lactacao:
    "Compatível com amamentação na maioria dos casos, com baixa passagem para o leite materno.",

  lactacaoCategoria: "compativel",

  renal:
    "Não necessita ajuste de dose na insuficiência renal.",

  ajusteRenalNecessario: false,

  hepatica:
    "Considerar doses menores e titulação mais lenta em insuficiência hepática.",

  observacoes:
    "Um dos antidepressivos mais versáteis da prática clínica. Possui excelente evidência para depressão, transtornos de ansiedade, TOC e TEPT. Frequentemente utilizada como primeira escolha devido ao bom equilíbrio entre eficácia, segurança e tolerabilidade.",

  perolasClinicas: [
    "As formulações genéricas variam bastante em relação a alimentos; orientar para tomar sempre da mesma forma (com ou sem alimento) para manter absorção consistente, já que a absorção da sertralina é discretamente aumentada com alimentos.",
    "No TDPM, pode ser usada em esquema intermitente (apenas na fase lútea, 14 dias antes da menstruação) com eficácia comparável ao uso contínuo — opção útil para reduzir exposição cumulativa e efeitos adversos sexuais.",
    "Diarreia é o efeito gastrointestinal mais característico da sertralina entre os ISRS (mais que náusea isolada), possivelmente relacionado à ação sobre receptores serotoninérgicos entéricos; costuma atenuar após 1-2 semanas.",
    "Em pacientes com doença cardiovascular estabelecida (pós-IAM, insuficiência cardíaca), é o ISRS com maior corpo de evidência de segurança cardiovascular (estudo SADHART), sendo frequentemente a primeira escolha nesse contexto.",
    "Doses acima de 200 mg/dia raramente agregam benefício adicional relevante e aumentam desproporcionalmente efeitos adversos gastrointestinais e sexuais — refratariedade a 200 mg costuma justificar troca de classe em vez de escalonamento adicional.",
  ],

  referencias: [
    "CANMAT 2023",
    "APA Practice Guideline",
    "NICE Guideline",
    "Stahl's Essential Psychopharmacology",
    "Maudsley Prescribing Guidelines",
  ],
};