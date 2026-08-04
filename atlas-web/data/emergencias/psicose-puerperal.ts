import { Emergencia } from "./types";

export const psicosePuerperal: Emergencia = {
  id: "psicose-puerperal",

  nome: "Psicose Puerperal",

  categoria: "Situação especial",

  gravidade: "muito alta",

  descricao:
    "Emergência psiquiátrica rara, porém grave, de início agudo — tipicamente nas primeiras semanas após o parto, podendo começar já em 48-72 horas — caracterizada por humor rapidamente flutuante, confusão, delírios (frequentemente relacionados ao bebê) e alucinações. Está fortemente associada a transtorno bipolar (história pessoal ou familiar) e carrega risco significativo tanto de suicídio quanto de infanticídio, exigindo internação psiquiátrica na quase totalidade dos casos. Não deve ser confundida com o baby blues (tristeza puerperal leve e autolimitada) nem com a depressão pós-parto sem sintomas psicóticos, quadros muito mais comuns e de gravidade bem menor — ver o caso clínico 'Depressão Pós-Parto' no módulo Casos Clínicos para essa diferenciação.",

  quadroClinico: [
    "Início agudo, tipicamente nas primeiras 2-4 semanas pós-parto, podendo começar já em 48-72 horas",
    "Humor rapidamente flutuante — elação, irritabilidade e desespero podem alternar-se no mesmo dia",
    "Confusão mental e desorientação",
    "Delírios, frequentemente relacionados ao bebê (ex.: crença de que o bebê está morto, foi trocado, ou de que a mãe precisa 'salvá-lo' de algum mal)",
    "Alucinações",
    "Insônia severa, não explicada apenas pelos cuidados noturnos com o bebê",
    "Comportamento desorganizado e perda de insight sobre o próprio estado",
  ],

  criteriosDiagnosticos: [
    "Início dos sintomas dentro de aproximadamente 4 semanas pós-parto (especificador 'com início no periparto')",
    "Presença de sintomas psicóticos francos e/ou instabilidade grave do humor",
    "História pessoal ou familiar de transtorno bipolar é o fator de risco isolado mais fortemente associado",
  ],

  causasComuns: [
    "Transtorno bipolar prévio — maior fator de risco identificado",
    "História familiar de psicose puerperal ou de transtorno bipolar",
    "Primeiro episódio de transtorno bipolar desencadeado pelo puerpério",
    "Privação de sono extrema no período pós-parto",
    "Interrupção abrupta de estabilizador de humor durante a gestação ou o puerpério",
    "Episódio prévio de psicose puerperal — risco elevado de recorrência em gestações subsequentes",
  ],

  condutaImediata: [
    "Internação hospitalar é indicada na quase totalidade dos casos, idealmente em unidade que permita avaliação conjunta mãe-bebê quando disponível",
    "Avaliação de segurança explícita e direcionada tanto para risco de suicídio quanto de infanticídio — perguntar diretamente sobre pensamentos de causar dano ao bebê, sem presumir ausência de risco pela aparência de vínculo afetivo preservado",
    "Não deixar a mãe sozinha com o bebê sem supervisão até a avaliação de risco estar completa",
    "Tratamento farmacológico conforme o quadro predominante (características maníacas, depressivas ou mistas): antipsicótico e/ou estabilizador de humor — doses e compatibilidade com amamentação exigem avaliação individualizada (ver módulo Medicamentos)",
    "Eletroconvulsoterapia (ECT) é opção eficaz e de resposta rápida em casos graves ou refratários",
    "Decisão sobre amamentação deve ser individualizada, ponderando os benefícios do aleitamento contra a exposição do lactente à medicação e, sobretudo, contra a capacidade clínica da mãe de cuidar do bebê com segurança no momento agudo",
    "Envolver ativamente a rede de apoio e serviços sociais para garantir o cuidado seguro do bebê durante o tratamento",
  ],

  examesComplementares: [
    "Exames laboratoriais gerais para excluir causas orgânicas: função tireoidiana (tireoidite pós-parto pode mimetizar ou precipitar sintomas psiquiátricos), hemograma (descartar anemia ou infecção puerperal), eletrólitos",
    "Rastreio de pré-eclâmpsia/eclâmpsia se ainda no período periparto imediato",
    "Considerar neuroimagem se houver sinais atípicos ou achados neurológicos",
  ],

  diagnosticoDiferencial: [
    "Baby blues (tristeza puerperal leve, autolimitada, sem sintomas psicóticos)",
    "Depressão pós-parto sem sintomas psicóticos",
    "Delirium pós-parto de causa orgânica (infecção puerperal, eclâmpsia, distúrbio metabólico, hemorragia)",
    "Episódio maníaco ou psicótico não relacionado especificamente ao puerpério",
  ],

  referencias: [
    "Sit D, Rothschild AJ, Wisner KL. A review of postpartum psychosis. J Womens Health. 2006.",
    "NICE Guideline — Antenatal and Postnatal Mental Health: Clinical Management and Service Guidance.",
    "Kaplan & Sadock's Comprehensive Textbook of Psychiatry",
  ],
};
