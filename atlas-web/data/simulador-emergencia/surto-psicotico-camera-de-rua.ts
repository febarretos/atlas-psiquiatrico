import { CasoSimuladorEmergencia } from "./types";

// Caso escrito à mão (NÃO gerado pelo Gemini/script), mesmo padrão dos
// outros casos deste módulo. A "armadilha" aqui não é um fármaco errado
// (o antipsicótico em dose baixa É a conduta correta) — é escalar dose e
// sedação repetidamente SEM aprofundar a investigação orgânica, que a
// própria Emergencia (surto-psicotico-agudo.ts) descreve como obrigatória
// em todo primeiro episódio. riscoIminente aqui carrega tanto risco de
// lesão (agitação/heteroagressão) quanto o risco de uma causa orgânica
// grave (ex.: encefalite autoimune) não sendo reconhecida a tempo.
export const surtoPsicoticoCameraDeRua: CasoSimuladorEmergencia = {
  id: "surto-psicotico-camera-de-rua",

  emergenciaBaseId: "surto-psicotico-agudo",

  nomeAnedotico: "As Câmeras da Rua",

  historiaClinica:
    "Bruno, 19 anos, sem nenhum antecedente psiquiátrico conhecido, foi trazido pela família depois de 3 dias falando sozinho e dizendo que as câmeras da rua o vigiam. Dormiu muito pouco nesse período. Na última hora ficou agressivo com o pai e quebrou objetos em casa. No exame, além do discurso desorganizado, ele está desorientado no tempo — o que chama sua atenção, porque não é típico de um primeiro surto psicótico 'puro'.",

  sinaisVitaisIniciais: {
    frequenciaCardiaca: 118,
    pressaoArterial: { sistolica: 145, diastolica: 92 },
    temperatura: 37.6,
    saturacaoO2: 97,
    nivelConsciencia: "confuso",
    agitacaoPsicomotora: 8,
    riscoIminente: 5,
  },

  regrasDeEvolucaoNatural: [
    {
      condicao: "Agitação e risco de lesão progredindo sem controle, possível causa orgânica não investigada evoluindo em paralelo",
      efeitoPorTurno: {
        frequenciaCardiaca: 5,
        temperatura: 0.3,
        agitacaoPsicomotora: 0.7,
        riscoIminente: 1.1,
      },
    },
  ],

  acoesDisponiveis: [
    {
      id: "ambiente-calmo",
      label: "Levar para ambiente calmo, com baixo estímulo",
      categoria: "suporte",
      custoTempo: 0,
      efeitoImediato: { agitacaoPsicomotora: -1, riscoIminente: -1 },
    },
    {
      id: "antipsicotico-dose-baixa",
      label: "Iniciar antipsicótico em dose baixa",
      categoria: "medicacao",
      medicamentoId: "risperidona",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -3, riscoIminente: -1 },
    },
    {
      id: "investigacao-organica",
      label: "Solicitar investigação orgânica (labs gerais, triagem toxicológica, neuroimagem)",
      categoria: "exame",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "Labs gerais e triagem toxicológica normais. A neuroimagem ainda está pendente, mas o EEG mostra lentificação difusa discreta — achado inespecífico, mas que reforça manter a investigação de causa orgânica em aberto.",
    },
    {
      id: "avaliacao-risco-seguranca",
      label: "Avaliar risco de suicídio e de heteroagressão",
      categoria: "exame",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "Sem ideação suicida no momento. Risco de heteroagressão presente enquanto a agitação não for controlada — reforça a indicação de ambiente seguro e, se necessário, contenção.",
    },
    {
      id: "contencao-mecanica",
      label: "Contenção mecânica",
      categoria: "contencao",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -2, riscoIminente: -1 },
      condicaoDeUso: "Último recurso, quando medidas menos restritivas falharam ou há risco iminente de lesão.",
    },
    {
      id: "escalar-antipsicotico-ignorando-piora",
      label: "Aumentar a dose e sedar mais, sem aprofundar a investigação — parece só a psicose piorando",
      categoria: "medicacao",
      medicamentoId: "haloperidol",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -2 },
      condicaoDeUso:
        "Tentador quando a agitação não cede rápido — mas ignorar a confusão e a febre discretas pra insistir só na sedação atrasa o diagnóstico de uma causa orgânica grave por trás do quadro.",
      riscoSeIncorreta: {
        temperatura: 1.2,
        agitacaoPsicomotora: 2,
        riscoIminente: 3,
        nivelConsciencia: "torporoso",
      },
    },
    {
      id: "envolver-familia",
      label: "Envolver a família na história clínica e no plano de cuidado",
      categoria: "comunicacao",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "A família confirma que Bruno nunca teve nada parecido antes e que a mudança de comportamento começou de forma bem abrupta há 3 dias — reforça a urgência da investigação orgânica.",
    },
    {
      id: "acionar-equipe-apoio",
      label: "Chamar apoio de mais profissionais da equipe",
      categoria: "comunicacao",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -1, riscoIminente: -1 },
      resultadoTexto: "Mais dois profissionais chegam pra ajudar a manter o ambiente seguro.",
    },
  ],

  turnosMaximos: 8,

  limiaresDesfecho: {
    estabilizacao: {
      agitacaoPsicomotora: 2,
      temperatura: 37.0,
    },
    obito: {
      temperatura: 40,
      frequenciaCardiaca: 160,
      nivelConsciencia: "coma",
    },
    piora: {
      agitacaoPsicomotora: 9,
      temperatura: 39,
    },
  },
};
