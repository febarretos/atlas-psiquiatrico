import { Emergencia } from "./types";

export const sindromeSerotoninergica: Emergencia = {
  id: "sindrome-serotoninergica",

  nome: "Síndrome Serotoninérgica",

  categoria: "Induzida por medicamento",

  gravidade: "muito alta",

  descricao:
    "Síndrome tóxica causada por excesso de atividade serotoninérgica no sistema nervoso central, geralmente decorrente da associação de dois ou mais fármacos serotoninérgicos ou de superdosagem. Instalação tipicamente rápida, em horas.",

  quadroClinico: [
    "Alteração do estado mental: agitação, ansiedade, confusão",
    "Hiperatividade autonômica: taquicardia, hipertensão, hipertermia, diaforese, diarreia",
    "Anormalidades neuromusculares: tremor, mioclonia, hiperreflexia e clônus (especialmente em membros inferiores), podendo evoluir para rigidez em casos graves",
    "Tríade clássica: alteração do estado mental + hiperatividade autonômica + anormalidades neuromusculares",
    "Instalação geralmente em horas após a exposição ao(s) agente(s) causador(es)",
  ],

  causasComuns: [
    "Associação de dois ou mais agentes serotoninérgicos (ex: ISRS/ISRSN + IMAO, ISRS + tramadol, ISRS + triptanos, ISRS + linezolida)",
    "Associação de antidepressivo serotoninérgico com lítio ou trazodona em doses altas",
    "Superdosagem de antidepressivo serotoninérgico",
    "Início recente de tratamento ou aumento de dose",
  ],

  condutaImediata: [
    "Suspender imediatamente todos os agentes serotoninérgicos envolvidos",
    "Suporte clínico: hidratação, controle de agitação e hipertermia (resfriamento ativo, benzodiazepínicos)",
    "Considerar ciproeptadina (antagonista serotoninérgico) em casos moderados a graves",
    "Casos graves (hipertermia >41°C, rigidez importante) requerem UTI, podendo necessitar sedação profunda, bloqueio neuromuscular e intubação orotraqueal",
    "Evitar antipsicóticos com potente ação anti-histamínica/anticolinérgica no manejo agudo, pois podem mascarar o quadro clínico",
  ],

  medicamentosResgate: ["ciproeptadina"],

  examesComplementares: [
    "Diagnóstico predominantemente clínico (critérios de Hunter)",
    "CK sérica",
    "Função renal",
    "Gasometria arterial em casos graves",
  ],

  diagnosticoDiferencial: [
    "Síndrome neuroléptica maligna (instalação mais lenta em dias, rigidez difusa 'em cano de chumbo' e hiporreflexia, em vez de hiperreflexia/clônus)",
    "Intoxicação anticolinérgica",
    "Hipertermia maligna anestésica",
  ],

  referencias: [
    "Dunkley EJ, et al. The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM. 2003.",
    "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005.",
    "Maudsley Prescribing Guidelines",
  ],
};
