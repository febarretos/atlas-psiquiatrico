import { Emergencia } from "./types";

export const convulsaoAbstinenciaAlcoolica: Emergencia = {
  id: "convulsao-abstinencia-alcoolica",

  nome: "Convulsão por Abstinência Alcoólica",

  categoria: "Abstinência",

  gravidade: "muito alta",

  descricao:
    "Crise convulsiva, tipicamente tônico-clônica generalizada, decorrente da interrupção ou redução abrupta do consumo de álcool em paciente com dependência estabelecida. Costuma ocorrer entre 6 e 48 horas após a última dose — classicamente antes do delirium tremens, que pode ou não se seguir. É uma entidade distinta do delirium tremens (ver entrada específica neste módulo), embora ambas façam parte do espectro da síndrome de abstinência alcoólica e a convulsão exija vigilância ativa para progressão ao quadro confusional.",

  quadroClinico: [
    "Convulsão tônico-clônica generalizada, geralmente única ou em pequeno número de episódios",
    "Instalação tipicamente entre 6 e 48 horas após a última dose de álcool ou redução importante da ingesta",
    "Pode ocorrer sem pródromo evidente de outros sinais de abstinência",
    "Tremor, hiperatividade autonômica (taquicardia, hipertensão, sudorese) e ansiedade frequentemente concomitantes",
    "Risco de progressão para delirium tremens nas horas a dias seguintes",
  ],

  criteriosDiagnosticos: [
    "Convulsão temporalmente relacionada à interrupção ou redução do consumo de álcool em paciente com uso pesado e regular estabelecido",
    "Ocorrência tipicamente dentro de 48 horas da última dose",
    "Ausência de outra causa identificável para a convulsão após avaliação inicial (diagnóstico de exclusão nesse sentido)",
  ],

  causasComuns: [
    "Interrupção ou redução abrupta do consumo de álcool em dependência estabelecida",
    "História prévia de convulsão por abstinência — forte fator de risco para recorrência (fenômeno de sensibilização/kindling)",
    "Múltiplos episódios prévios de abstinência alcoólica",
    "Distúrbios eletrolíticos associados, especialmente hipomagnesemia",
  ],

  condutaImediata: [
    "Benzodiazepínicos são o tratamento e a profilaxia de escolha — diazepam ou lorazepam. Com convulsão em curso ou história de convulsão/delirium tremens prévios (abstinência complicada), preferir esquema fixo/front-loading (ASAM) em vez de terapia guiada por sintomas isolada (ex.: CIWA-Ar), que pressupõe abstinência não complicada e paciente comunicativo",
    "Diante de convulsão em curso, tratar de forma semelhante a uma crise convulsiva aguda: benzodiazepínico intravenoso e reavaliação continuada",
    "Reposição de tiamina antes ou junto da administração de glicose, para prevenir encefalopatia de Wernicke",
    "Correção de distúrbios hidroeletrolíticos, especialmente magnésio e potássio",
    "Anticonvulsivantes que não benzodiazepínicos (ex.: fenitoína) não são eficazes como tratamento isolado da convulsão por abstinência alcoólica e não substituem o benzodiazepínico",
    "Internação e monitorização contínua para vigilância de progressão ao delirium tremens",
  ],

  medicamentosResgate: ["diazepam", "lorazepam", "tiamina"],

  examesComplementares: [
    "Eletrólitos, com atenção especial a magnésio e potássio",
    "Glicemia",
    "Função hepática",
    "Neuroimagem se for a primeira convulsão do paciente, houver achado neurológico focal, trauma cranioencefálico associado ou dúvida diagnóstica",
    "Eletroencefalograma se houver dúvida quanto à etiologia da crise",
  ],

  diagnosticoDiferencial: [
    "Convulsão por outras causas: hipoglicemia, trauma cranioencefálico, acidente vascular cerebral, infecção do sistema nervoso central, epilepsia preexistente",
    "Abstinência de benzodiazepínicos concomitante",
    "Progressão para delirium tremens (ver entrada específica neste módulo)",
    "Status epilepticus de outra etiologia",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Mainerova B, et al. Alcohol withdrawal delirium — diagnosis, course and treatment. Biomed Pap. 2015.",
    "American Society of Addiction Medicine (ASAM) Guideline",
  ],
};
