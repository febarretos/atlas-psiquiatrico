import { Emergencia } from "./types";

export const abstinenciaOpioides: Emergencia = {
  id: "abstinencia-opioides",

  nome: "Abstinência de Opioides",

  categoria: "Abstinência",

  gravidade: "alta",

  descricao:
    "Síndrome decorrente da interrupção ou redução abrupta de opioides em indivíduo com dependência física, ou precipitada pela administração de antagonista opioide (naloxona ou naltrexona) em paciente dependente. É intensamente desconfortável, mas — diferente da abstinência de álcool ou de benzodiazepínicos — raramente é fatal em adultos saudáveis; a exceção relevante é a desidratação e o distúrbio eletrolítico decorrentes de vômitos e diarreia intensos, especialmente em pacientes vulneráveis. Após período de abstinência ou desintoxicação, o maior risco à vida do paciente passa a ser a overdose acidental por perda de tolerância.",

  quadroClinico: [
    "Midríase, lacrimejamento, rinorreia, bocejos repetidos, piloereção ('arrepios')",
    "Sudorese, tremor, mialgia e artralgia difusas",
    "Cólicas abdominais, náusea, vômitos, diarreia",
    "Taquicardia e hipertensão leve a moderada",
    "Ansiedade, disforia intensa e fissura (craving) pela substância",
    "Insônia",
    "Início em cerca de 6-12 horas após a última dose para opioides de ação curta, com pico em 1-3 dias; início mais tardio (24-48 horas) e curso mais prolongado para opioides de ação longa (ex.: metadona)",
  ],

  criteriosDiagnosticos: [
    "Sinais objetivos de abstinência (midríase, taquicardia, piloereção, lacrimejamento) associados aos sintomas subjetivos — a presença de sinais objetivos ajuda a confirmar abstinência verdadeira, e não apenas fissura/ansiedade isolada",
    "Instrumentos como a Clinical Opiate Withdrawal Scale (COWS) podem ser usados para graduar objetivamente a gravidade",
    "Relação temporal com a última dose de opioide ou com a administração de um antagonista opioide (abstinência precipitada)",
  ],

  causasComuns: [
    "Interrupção abrupta de uso crônico de opioide",
    "Redução rápida de dose",
    "Administração de antagonista opioide (naloxona ou naltrexona) em paciente dependente — abstinência precipitada, de início mais rápido e intenso",
    "Falha em manter dose de manutenção com agonista opioide (metadona ou buprenorfina) em paciente em tratamento",
  ],

  condutaImediata: [
    "Tratamento de escolha: agonistas opioides (metadona ou buprenorfina) sob protocolo especializado de desintoxicação ou manutenção — encaminhar a serviço especializado em transtorno por uso de substâncias sempre que disponível",
    "Quando agonista opioide não estiver disponível ou não for indicado, considerar agonista alfa-2 adrenérgico (ex.: clonidina) para controle dos sintomas autonômicos, com monitorização de pressão arterial",
    "Tratamento sintomático adjuvante: antieméticos, antidiarreicos, analgésicos não opioides, hidratação para repor perdas por vômito e diarreia",
    "Benzodiazepínico apenas se ansiedade significativa, com cautela pelo risco de uso concomitante de depressores do sistema nervoso central",
    "Monitorizar sinais de complicação clínica (desidratação, distúrbio eletrolítico), especialmente em pacientes com comorbidades",
    "Suporte psicossocial e encaminhamento a programa de tratamento do transtorno por uso de opioides, incluindo avaliação para manutenção prolongada com agonista opioide, estratégia com evidência robusta de redução de mortalidade",
    "Orientar explicitamente o paciente e a família sobre o risco de overdose por perda de tolerância após o período de abstinência ou desintoxicação, antes da alta",
  ],

  examesComplementares: [
    "Triagem toxicológica, para identificar uso concomitante de outras substâncias e apoiar a confirmação diagnóstica",
    "Eletrólitos e função renal se houver vômitos ou diarreia significativos",
    "Avaliação de comorbidades infecciosas (HIV, hepatites B e C) quando pertinente pela via de uso",
  ],

  diagnosticoDiferencial: [
    "Abstinência de álcool ou de benzodiazepínicos — diferencial importante, já que essas SIM podem ser fatais, ao contrário da abstinência de opioides isolada",
    "Transtorno de ansiedade ou pânico",
    "Quadro infeccioso ou gastrointestinal, que pode mimetizar parte dos sintomas gerais",
    "Abstinência precipitada por antagonista versus abstinência espontânea",
  ],

  referencias: [
    "American Society of Addiction Medicine (ASAM) Guideline",
    "Wesson DR, Ling W. The Clinical Opiate Withdrawal Scale (COWS). J Psychoactive Drugs. 2003.",
    "Kaplan & Sadock's Comprehensive Textbook of Psychiatry",
  ],
};
