import { Emergencia } from "./types";

export const sindromeNeurolepticaMaligna: Emergencia = {
  id: "sindrome-neuroleptica-maligna",

  nome: "Síndrome Neuroléptica Maligna",

  categoria: "Induzida por medicamento",

  gravidade: "muito alta",

  descricao:
    "Reação idiossincrática rara e potencialmente fatal ao uso de antipsicóticos (ou à retirada abrupta de agonistas dopaminérgicos), caracterizada por rigidez muscular, hipertermia e disautonomia. Mortalidade histórica de até 10-20% sem tratamento adequado.",

  quadroClinico: [
    "Rigidez muscular difusa 'em cano de chumbo'",
    "Hipertermia, frequentemente >38°C, podendo ultrapassar 40°C",
    "Instabilidade autonômica: taquicardia, labilidade pressórica, taquipneia, sudorese profusa",
    "Alteração do nível de consciência, de confusão a coma",
    "Elevação acentuada de CK (creatinofosfoquinase), frequentemente muito elevada",
    "Evolução tipicamente ao longo de dias (1 a 3 dias), diferente da instalação mais rápida da síndrome serotoninérgica",
  ],

  causasComuns: [
    "Início ou aumento recente de dose de antipsicótico, especialmente de alta potência (haloperidol)",
    "Uso de antipsicóticos de depósito (ação prolongada)",
    "Retirada abrupta de agonistas dopaminérgicos (ex: levodopa em doença de Parkinson)",
    "Desidratação, exaustão física e agitação psicomotora concomitantes",
  ],

  condutaImediata: [
    "Suspender imediatamente o antipsicótico (ou reintroduzir o agonista dopaminérgico, se a causa foi retirada abrupta)",
    "Internação, geralmente em unidade de terapia intensiva",
    "Hidratação venosa vigorosa e resfriamento ativo",
    "Considerar dantroleno (relaxante muscular de ação periférica) e/ou bromocriptina (agonista dopaminérgico) em casos moderados a graves",
    "Benzodiazepínicos para controle de agitação e rigidez",
    "Considerar eletroconvulsoterapia em casos refratários ao tratamento farmacológico",
    "Monitorização de função renal (risco de lesão renal aguda por rabdomiólise) e correção de distúrbios eletrolíticos",
  ],

  medicamentosResgate: ["dantroleno", "bromocriptina"],

  examesComplementares: [
    "CK sérica (tipicamente muito elevada, podendo ultrapassar 1.000-100.000 U/L)",
    "Leucocitose",
    "Função renal (risco de lesão renal aguda por rabdomiólise)",
    "Eletrólitos",
  ],

  diagnosticoDiferencial: [
    "Síndrome serotoninérgica (instalação mais rápida, hiperreflexia e clônus em vez de rigidez difusa e hiporreflexia)",
    "Catatonia maligna",
    "Hipertermia maligna anestésica",
    "Golpe de calor",
    "Infecção do sistema nervoso central / sepse",
  ],

  referencias: [
    "Strawn JR, Keck PE, Caroff SN. Neuroleptic malignant syndrome. Am J Psychiatry. 2007.",
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};
