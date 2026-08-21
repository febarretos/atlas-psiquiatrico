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
    "Evitar antipsicóticos com potente ação anti-histamínica/anticolinérgica no manejo agudo — não porque \"mascaram o quadro\", mas porque o efeito anticolinérgico inibe a sudorese, prejudicando a dissipação de calor e agravando a hipertermia",
    "Antipiréticos (ex.: paracetamol) NÃO são eficazes: a hipertermia é gerada por atividade muscular excessiva, não por alteração do centro hipotalâmico de termorregulação",
    "Evitar contenção mecânica sempre que possível: a contração isométrica contra a contenção piora a hipertermia e pode precipitar acidose lática — preferir sedação farmacológica para controlar agitação/rigidez",
    "Bromocriptina e dantroleno NÃO são recomendados na síndrome serotoninérgica (diferente da síndrome neuroléptica maligna, onde são usados): bromocriptina tem atividade serotoninérgica própria e pode agravar o quadro, e dantroleno carece de evidência de benefício aqui",
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
