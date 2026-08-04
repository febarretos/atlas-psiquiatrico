import { Emergencia } from "./types";

export const acatisiaGrave: Emergencia = {
  id: "acatisia-grave",

  nome: "Acatisia Grave / Tempestade Acatísica",

  categoria: "Induzida por medicamento",

  gravidade: "muito alta",

  descricao:
    "Inquietação motora subjetiva e objetiva induzida por antipsicóticos (também possível, com menor frequência, no início do tratamento com alguns antidepressivos) que pode variar de um desconforto leve a uma forma grave e refratária — a 'tempestade acatísica' — associada a sofrimento intenso e risco elevado de suicídio ou violência. É frequentemente confundida com piora da ansiedade ou da psicose de base, levando ao erro perigoso de aumentar a dose do próprio antipsicótico causador, o que piora o quadro.",

  quadroClinico: [
    "Inquietação interna subjetiva, urgência de se mover",
    "Incapacidade de permanecer sentado ou parado",
    "Movimentos repetitivos: balançar-se, marchar no lugar, transferir o peso de um pé para o outro",
    "Deambulação incessante (pacing)",
    "Sofrimento e disforia intensos, desproporcionais ao movimento observável",
    "Em quadros graves/refratários: agitação, agressividade e ideação suicida diretamente atribuíveis à inquietação intolerável",
  ],

  criteriosDiagnosticos: [
    "Relação temporal com início ou aumento de dose de antipsicótico (menos comumente, de antidepressivo, especialmente ISRS no início do tratamento)",
    "Presença concomitante de inquietação subjetiva E inquietação motora objetiva — a combinação dos dois componentes diferencia acatisia de ansiedade pura",
    "Pode ser graduada com instrumentos como a Barnes Akathisia Rating Scale (BARS)",
  ],

  causasComuns: [
    "Antipsicóticos, especialmente os de alta potência ou em doses/titulação rápidas",
    "Alguns antidepressivos (ISRS), principalmente no início do tratamento",
    "Metoclopramida",
    "Retirada rápida de benzodiazepínico ou de opioide (menos comum)",
  ],

  condutaImediata: [
    "Reconhecer e diferenciar ativamente de piora da ansiedade ou da psicose de base — o erro mais perigoso é aumentar a dose do antipsicótico causador, o que agrava a acatisia",
    "Reduzir a dose do agente causador ou trocar por antipsicótico com menor risco de sintomas extrapiramidais, quando clinicamente possível",
    "Propranolol como primeira linha farmacológica adjuvante: 10-20 mg 2-3x/dia, podendo titular até 30-80 mg/dia (dose máxima 120 mg/dia) — checar contraindicações cardiovasculares e respiratórias antes de prescrever",
    "Benzodiazepínico (ex.: lorazepam) como alternativa ou adjuvante, especialmente em quadros graves",
    "NÃO usar anticolinérgico (biperideno) como tratamento da acatisia — é ineficaz para esse sintoma específico, cujo mecanismo é predominantemente não colinérgico",
    "Em tempestade acatísica com risco de suicídio ou agressão associado, tratar como emergência comportamental: avaliação de segurança imediata e considerar internação (ver 'Risco de Suicídio Agudo' e 'Agitação Psicomotora Aguda' neste módulo)",
  ],

  examesComplementares: [
    "Geralmente diagnóstico clínico",
    "Considerar exames complementares apenas se houver dúvida diagnóstica com outras causas de agitação",
  ],

  diagnosticoDiferencial: [
    "Ansiedade ou piora do transtorno psiquiátrico de base",
    "Síndrome das pernas inquietas",
    "Agitação psicótica",
    "Distonia aguda (apresentação distinta — postura sustentada, não inquietação difusa; ver entrada específica neste módulo)",
    "Abstinência de substância",
  ],

  referencias: [
    "Barnes TR. A rating scale for drug-induced akathisia. Br J Psychiatry. 1989.",
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};
