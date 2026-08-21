import { Emergencia } from "./types";

export const intoxicacaoLitio: Emergencia = {
  id: "intoxicacao-litio",

  nome: "Intoxicação por Lítio",

  categoria: "Induzida por medicamento",

  gravidade: "muito alta",

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
    "Hemodiálise indicada por critério de litemia (EXTRIP 2015): litemia >5 mEq/L, ou >4 mEq/L com disfunção renal significativa, ou >2,5 mEq/L com sintomas neurológicos graves/risco à vida (rebaixamento de consciência, convulsão, arritmia com risco à vida) — MAS a indicação também é independente da litemia diante de qualquer um desses achados clínicos graves, já que a litemia sérica não reflete bem a concentração intracelular/neurotóxica, especialmente na intoxicação crônica",
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
    "Decker BS, et al. Extracorporeal Treatment for Lithium Poisoning: Systematic Review and Recommendations from the EXTRIP Workgroup. Clin J Am Soc Nephrol. 2015.",
  ],
};
