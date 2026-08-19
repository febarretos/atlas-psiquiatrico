import { Emergencia } from "./types";

export const abstinenciaBenzodiazepinicos: Emergencia = {
  id: "abstinencia-benzodiazepinicos",

  nome: "Abstinência de Benzodiazepínicos",

  categoria: "Abstinência",

  gravidade: "muito alta",

  descricao:
    "Síndrome decorrente da interrupção abrupta ou redução rápida de benzodiazepínico após uso regular prolongado, podendo variar de sintomas leves (ansiedade, insônia) a quadros potencialmente fatais com convulsões e delirium. O risco é maior com agentes de meia-vida curta e alta potência (ex.: alprazolam) e com interrupção abrupta em vez de retirada gradual.",

  quadroClinico: [
    "Ansiedade, irritabilidade e insônia rebote",
    "Tremor, sudorese, taquicardia e hipertensão",
    "Distúrbios perceptivos: hiperacusia, fotofobia, parestesias, sensação de instabilidade ('abstinência clássica' descrita por Ashton)",
    "Tensão muscular, cãibras, náusea",
    "Em quadros graves: convulsões, que podem ser o sintoma inicial, especialmente com interrupção abrupta de agente de meia-vida curta",
    "Delirium e, mais raramente, sintomas psicóticos em quadros graves",
  ],

  criteriosDiagnosticos: [
    "Uso regular de benzodiazepínico por período prolongado (geralmente semanas a meses) seguido de interrupção abrupta ou redução rápida da dose",
    "Início dos sintomas tipicamente em 1-2 dias após a última dose para agentes de meia-vida curta (ex.: alprazolam), podendo levar até uma semana ou mais para agentes de meia-vida longa (ex.: diazepam)",
    "Convulsão como sintoma inicial em quadro grave, mesmo sem pródromo importante de sintomas leves precedente",
  ],

  causasComuns: [
    "Interrupção abrupta ou redução rápida após uso prolongado e regular",
    "Uso de benzodiazepínico de meia-vida curta em dose alta (maior risco de abstinência precoce e intensa)",
    "História prévia de síndrome de abstinência de benzodiazepínico",
    "Uso concomitante de álcool, que pode mascarar ou se sobrepor ao quadro",
  ],

  condutaImediata: [
    "Reintroduzir o benzodiazepínico (ou um equivalente) e retirar de forma gradual, nunca abrupta — princípio central do manejo",
    "Considerar conversão para um benzodiazepínico de meia-vida longa (ex.: diazepam) quando o quadro decorrer de agente de meia-vida curta, para facilitar uma retirada mais suave; usar como referência a equivalência aproximada já validada no módulo Medicamentos (diazepam 10 mg ≈ alprazolam 0,5–1 mg ≈ clonazepam 0,5–1 mg ≈ lorazepam 1–2 mg), sempre ajustando clinicamente",
    "Diante de convulsão em curso, tratar como emergência convulsiva: benzodiazepínico intravenoso (ex.: diazepam ou lorazepam) e internação hospitalar",
    "Retirada gradual programada ao longo de semanas a meses conforme a dose e o tempo de uso prévios, nunca em esquema fixo genérico — individualizar sempre",
    "Corrigir distúrbios hidroeletrolíticos associados e oferecer suporte clínico geral",
    "Monitorização para sinais de delirium durante a retirada",
  ],

  medicamentosResgate: ["diazepam", "lorazepam"],

  examesComplementares: [
    "Eletrólitos",
    "Função hepática, especialmente se houver conversão para agente com metabolização diferente",
    "Triagem toxicológica se houver suspeita de uso concomitante de outras substâncias",
  ],

  diagnosticoDiferencial: [
    "Abstinência alcoólica concomitante (pode coexistir e potencializar o quadro)",
    "Ansiedade rebote (retorno dos sintomas ansiosos originais, geralmente mais brando e sem os sinais físicos/perceptivos característicos da abstinência verdadeira) versus síndrome de abstinência propriamente dita",
    "Delirium por outras causas",
    "Convulsão de outra etiologia (metabólica, estrutural, epilepsia preexistente)",
  ],

  referencias: [
    "Ashton CH. Benzodiazepines: How They Work and How to Withdraw (The Ashton Manual).",
    "Maudsley Prescribing Guidelines",
    "Stahl's Essential Psychopharmacology",
  ],
};
