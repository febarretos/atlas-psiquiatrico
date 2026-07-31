import { Diagnostico } from "./types";

export const bulimiaNervosa: Diagnostico = {
  id: "bulimia-nervosa",

  nome: "Bulimia Nervosa",

  categoria: "Transtornos Alimentares",

  cid11: "6B81",

  cid10: "F50.2",

  descricao:
    "Transtorno alimentar caracterizado por episódios recorrentes de compulsão alimentar seguidos de comportamentos compensatórios inadequados para prevenir ganho de peso, associados a autoavaliação indevidamente influenciada pela forma e peso corporais. Diferentemente da anorexia nervosa, o peso corporal costuma estar dentro da faixa normal ou acima dela.",

  criteriosDiagnosticos: [
    "A. Episódios recorrentes de compulsão alimentar. Um episódio de compulsão alimentar é caracterizado pelos dois aspectos a seguir: (1) ingestão, em um período determinado de tempo (por exemplo, dentro de um período de 2 horas), de quantidade de alimento definitivamente maior do que a maioria dos indivíduos consumiria no mesmo período em circunstâncias semelhantes; (2) sensação de falta de controle sobre a ingestão durante o episódio (sentir que não consegue parar de comer ou controlar o quê ou quanto está comendo).",
    "B. Comportamentos compensatórios inadequados recorrentes para prevenir o ganho de peso, como vômito autoinduzido, uso indevido de laxantes, diuréticos ou outros medicamentos, jejum ou exercício físico excessivo.",
    "C. A compulsão alimentar e os comportamentos compensatórios inadequados ocorrem, em média, pelo menos uma vez por semana durante 3 meses.",
    "D. A autoavaliação é indevidamente influenciada pela forma e pelo peso corporais.",
    "E. A perturbação não ocorre exclusivamente durante episódios de anorexia nervosa.",
  ],

  especificadores: [
    "Em remissão parcial: após satisfação plena dos critérios, alguns, mas não todos, os critérios foram mantidos por período sustentado",
    "Em remissão completa: após satisfação plena dos critérios, nenhum dos critérios foi satisfeito por período sustentado",
    "Gravidade baseada na frequência média de comportamentos compensatórios inadequados por semana: leve (1-3 episódios/semana), moderada (4-7), grave (8-13), extrema (14 ou mais)",
  ],

  duracaoMinima: "Compulsão alimentar e comportamentos compensatórios com frequência mínima de 1 vez por semana, por pelo menos 3 meses",

  prevalencia:
    "Prevalência ao longo da vida estimada em torno de 1-1,5% em mulheres e significativamente menor em homens; início tipicamente no final da adolescência ou início da vida adulta. Frequentemente subdiagnosticada pela manutenção de peso corporal normal e pela ocultação dos comportamentos purgativos.",

  cursoEPrognostico:
    "Curso frequentemente crônico e flutuante se não tratado, com períodos de remissão parcial intercalados com recaídas. Com tratamento baseado em evidência, cerca de 50% dos pacientes atingem remissão sustentada em longo prazo. Complicações médicas relacionadas à purgação incluem desequilíbrios eletrolíticos (hipocalemia, com risco de arritmias), erosão dentária, esofagite e, em casos raros, ruptura esofágica ou gástrica. Risco de transição diagnóstica para outros transtornos alimentares ao longo do tempo.",

  diagnosticoDiferencial: [
    "Anorexia nervosa tipo compulsão alimentar purgativa (critério de exclusão formal: bulimia nervosa não é diagnosticada se os episódios ocorrem exclusivamente no contexto de anorexia nervosa/baixo peso significativo)",
    "Transtorno de Compulsão Alimentar Periódica (ausência de comportamentos compensatórios inadequados recorrentes)",
    "Síndrome de Kleine-Levin e outras causas neurológicas raras de hiperfagia",
    "Transtorno Depressivo Maior com hiperfagia atípica (sem os comportamentos compensatórios e sem a centralidade da forma/peso na autoavaliação)",
    "Transtorno de Personalidade Borderline com impulsividade alimentar (compulsão alimentar como uma entre múltiplas áreas de impulsividade, não circunscrita ao padrão bulímico)",
    "Condições médicas com vômitos recorrentes (gastroparesia, refluxo grave) sem os critérios psicológicos associados",
  ],

  comorbidadesComuns: [
    "Transtorno Depressivo Maior",
    "Transtornos de ansiedade",
    "Transtorno por Uso de Substâncias (particularmente álcool)",
    "Transtorno de Personalidade Borderline",
    "TDAH",
    "Transtornos do controle de impulsos",
  ],

  tratamentoPrimeiraLinha: [
    "Fluoxetina em dose de 60 mg/dia (mais alta que a dose usual antidepressiva) é a única medicação formalmente aprovada para o tratamento da bulimia nervosa, com evidência de redução da frequência de compulsão alimentar e purgação",
    "TCC especializada em transtornos alimentares (CBT-E) é a psicoterapia de primeira linha, com eficácia bem estabelecida, focando em normalização do padrão alimentar e reestruturação de crenças sobre peso/forma corporal",
    "Combinação de fluoxetina em dose alta com TCC-E recomendada como abordagem de primeira linha nos casos moderados a graves",
    "Terapia Interpessoal como alternativa psicoterápica eficaz, com efeito mais lento que a TCC mas resultados comparáveis em longo prazo",
    "Monitorização de eletrólitos (potássio, magnésio) e avaliação cardiológica em casos com purgação frequente, dado o risco de arritmias",
  ],

  sintomasChave: [
    { id: "compulsao-alimentar", peso: 3 },
    { id: "comportamento-compensatorio", peso: 3 },
  ],

  medicamentosPrimeiraLinha: ["fluoxetina"],

  referencias: [
    "DSM-5-TR (American Psychiatric Association, 2022)",
    "APA Practice Guideline for the Treatment of Patients with Eating Disorders",
    "NICE Guideline NG69 - Eating disorders: recognition and treatment",
    "Fluoxetine Bulimia Nervosa Collaborative Study Group",
    "CID-11 (OMS)",
  ],
};
