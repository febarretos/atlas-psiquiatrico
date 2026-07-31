import { Emergencia } from "./types";

export const intoxicacaoLitio: Emergencia = {
  id: "intoxicacao-litio",

  nome: "Intoxicação por Lítio",

  categoria: "Induzida por medicamento",

  gravidade: "alta",

  descricao:
    "Quadro tóxico decorrente de níveis séricos elevados de lítio, podendo ocorrer por superdosagem aguda, acúmulo crônico (ex: desidratação, uso de diuréticos/AINEs, piora de função renal) ou combinação de ambos. A litemia não se correlaciona perfeitamente com a gravidade clínica, especialmente na intoxicação crônica.",

  quadroClinico: [
    "Leve a moderada: tremor grosseiro, náuseas, vômitos, diarreia, ataxia, disartria, fraqueza muscular",
    "Grave: confusão mental, mioclonias, convulsões, hiper-reflexia, arritmias cardíacas, coma",
    "Sintomas neurológicos podem persistir ou ser irreversíveis se o tratamento for postergado",
  ],

  causasComuns: [
    "Desidratação (vômitos, diarreia, restrição hídrica, exercício intenso, calor)",
    "Uso concomitante de diuréticos tiazídicos, IECA, BRA ou AINEs",
    "Piora aguda ou crônica da função renal",
    "Superdosagem intencional ou acidental",
    "Dieta hipossódica ou restrição abrupta de sódio",
  ],

  condutaImediata: [
    "Suspender o lítio imediatamente",
    "Hidratação venosa vigorosa com solução salina para promover a excreção renal do lítio",
    "Monitorização cardíaca contínua (ECG)",
    "Considerar hemodiálise em intoxicação grave (litemia >4 mEq/L em ingestão aguda, ou >2,5 mEq/L com sintomas neurológicos graves, ou disfunção renal que impeça a eliminação)",
    "Avaliação neurológica seriada — atraso no tratamento aumenta o risco de neurotoxicidade permanente",
    "Evitar diuréticos de alça/tiazídicos e AINEs durante o manejo",
  ],

  examesComplementares: [
    "Litemia seriada",
    "Função renal (ureia, creatinina)",
    "Eletrólitos",
    "Eletrocardiograma",
  ],

  diagnosticoDiferencial: [
    "Síndrome serotoninérgica",
    "Encefalopatia metabólica de outras causas",
    "Acidente vascular cerebral",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Baird-Gunning J, et al. Lithium poisoning. J Intensive Care Med. 2017.",
  ],
};
