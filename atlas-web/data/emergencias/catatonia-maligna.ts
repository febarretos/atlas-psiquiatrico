import { Emergencia } from "./types";

export const catatoniaMaligna: Emergencia = {
  id: "catatonia-maligna",

  nome: "Catatonia (com risco de forma maligna)",

  categoria: "Síndrome psicomotora",

  gravidade: "muito alta",

  descricao:
    "Síndrome neuropsiquiátrica caracterizada por alterações psicomotoras marcantes, podendo ocorrer em transtornos psiquiátricos primários (do humor ou psicóticos), em condições médicas gerais, ou associada a medicamentos. A forma maligna cursa com instabilidade autonômica e hipertermia, sendo potencialmente fatal e exigindo diagnóstico diferencial cuidadoso com síndrome neuroléptica maligna.",

  quadroClinico: [
    "Estupor, mutismo, negativismo (resistência a instruções ou tentativas de mobilização)",
    "Catalepsia e flexibilidade cérea (manutenção passiva de posturas impostas)",
    "Ecolalia, ecopraxia, maneirismos, estereotipias, careteio",
    "Catatonia excitada: agitação sem propósito externo aparente",
    "Forma maligna: hipertermia, instabilidade autonômica (labilidade de PA e FC) e rigidez, com risco de vida",
  ],

  criteriosDiagnosticos: [
    "Presença de pelo menos 3 dos seguintes: estupor, catalepsia, flexibilidade cérea, mutismo, negativismo, maneirismos, estereotipias, agitação sem propósito externo, careteio, ecolalia ou ecopraxia",
  ],

  causasComuns: [
    "Transtornos do humor, especialmente depressão grave e episódios maníacos",
    "Esquizofrenia e outros transtornos psicóticos",
    "Condições médicas gerais (encefalites, incluindo encefalite anti-NMDA, distúrbios metabólicos)",
    "Uso ou retirada de determinados medicamentos",
  ],

  condutaImediata: [
    "Teste terapêutico com lorazepam (geralmente 1-2 mg IV ou IM) — resposta rápida e significativa é diagnóstica e frequentemente também terapêutica",
    "Eletroconvulsoterapia (ECT) é o tratamento de escolha em casos graves, refratários ao benzodiazepínico, ou na forma maligna",
    "Suporte clínico: hidratação, prevenção de trombose venosa profunda, suporte nutricional",
    "Evitar antipsicóticos, especialmente os de alta potência, até a catatonia ser tratada — risco de precipitar síndrome neuroléptica maligna ou piorar o quadro",
    "Tratar a condição psiquiátrica ou médica de base assim que a catatonia estiver controlada",
  ],

  examesComplementares: [
    "Exclusão de causas orgânicas: exames laboratoriais gerais e neuroimagem quando indicado",
    "CK sérica (pode estar elevada)",
    "Considerar painel de encefalite autoimune (anti-NMDA) em quadros de início atípico ou associados a sintomas neurológicos adicionais",
  ],

  diagnosticoDiferencial: [
    "Síndrome neuroléptica maligna",
    "Encefalite, especialmente anti-NMDA",
    "Estado de mal epiléptico não convulsivo",
    "Mutismo acinético",
  ],

  referencias: [
    "Fink M, Taylor MA. Catatonia: a clinician's guide to diagnosis and treatment. 2003.",
    "Maudsley Prescribing Guidelines",
  ],
};
