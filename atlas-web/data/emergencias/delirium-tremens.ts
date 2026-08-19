import { Emergencia } from "./types";

export const deliriumTremens: Emergencia = {
  id: "delirium-tremens",

  nome: "Delirium Tremens (Abstinência Alcoólica Grave)",

  categoria: "Abstinência",

  gravidade: "muito alta",

  descricao:
    "Forma mais grave da síndrome de abstinência alcoólica, geralmente com início entre 48 e 96 horas após a última dose de álcool, potencialmente fatal se não tratada adequadamente.",

  quadroClinico: [
    "Confusão mental flutuante / delirium",
    "Alucinações, frequentemente visuais ou táteis",
    "Agitação psicomotora intensa",
    "Tremor grosseiro",
    "Hiperatividade autonômica grave: taquicardia, hipertensão, febre, sudorese profusa",
    "Risco de convulsões, que podem preceder o quadro de delirium",
  ],

  causasComuns: [
    "Interrupção abrupta ou redução importante da ingesta alcoólica em paciente com dependência estabelecida",
    "História prévia de abstinência grave ou convulsões por abstinência",
    "Uso concomitante de outros depressores do sistema nervoso central",
    "Doença clínica aguda concomitante (infecção, trauma) precipitando internação e interrupção do consumo",
  ],

  condutaImediata: [
    "Internação hospitalar, geralmente obrigatória nos casos com delirium já estabelecido",
    "Benzodiazepínicos em doses ajustadas à gravidade (diazepam ou lorazepam), idealmente guiados por protocolo/escala como o CIWA-Ar",
    "Reposição de tiamina antes ou junto da administração de glicose, para prevenir encefalopatia de Wernicke",
    "Correção de distúrbios hidroeletrolíticos, especialmente magnésio e potássio",
    "Ambiente calmo, bem iluminado, com reorientação frequente do paciente",
    "Monitorização contínua de sinais vitais",
  ],

  medicamentosResgate: ["diazepam", "lorazepam", "tiamina"],

  examesComplementares: [
    "Eletrólitos (magnésio, potássio, fósforo)",
    "Função hepática",
    "Glicemia",
    "Escala CIWA-Ar seriada para guiar a dose de benzodiazepínico",
  ],

  diagnosticoDiferencial: [
    "Delirium por outras causas (infecção, distúrbio metabólico, uso de outras substâncias)",
    "Síndrome de abstinência de benzodiazepínicos",
    "Encefalopatia de Wernicke",
  ],

  referencias: [
    "Maudsley Prescribing Guidelines",
    "Mainerova B, et al. Alcohol withdrawal delirium — diagnosis, course and treatment. Biomed Pap. 2015.",
  ],
};
