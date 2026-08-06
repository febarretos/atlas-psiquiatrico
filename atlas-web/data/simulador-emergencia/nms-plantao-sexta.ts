import { CasoSimuladorEmergencia } from "./types";

// Caso escrito à mão (NÃO gerado pelo Gemini/script) só pra validar o
// schema, o motor e a UI antes da primeira geração real. Doses/ações
// (lorazepam, haloperidol, dantroleno) conferem com data/medicamentos.
// Substituir/remover quando o primeiro caso real for gerado com
// `npm run gerar-caso-emergencia`.
export const nmsPlantaoSexta: CasoSimuladorEmergencia = {
  id: "nms-plantao-sexta",

  emergenciaBaseId: "sindrome-neuroleptica-maligna",

  nomeAnedotico: "Plantão de Sexta à Noite",

  historiaClinica:
    "Ricardo, 34 anos, esquizofrenia diagnosticada há 6 anos, foi internado há 4 dias após uma descompensação psicótica e iniciou haloperidol em dose crescente — hoje já na terceira dose aumentada em menos de uma semana. A enfermagem chama você porque ele está 'estranho': rígido, confuso, suado e muito mais quente ao toque do que o normal. É sexta à noite, o plantão está cheio, e é você quem está de porta na ala.",

  sinaisVitaisIniciais: {
    frequenciaCardiaca: 128,
    pressaoArterial: { sistolica: 155, diastolica: 98 },
    temperatura: 39.8,
    saturacaoO2: 93,
    nivelConsciencia: "confuso",
    agitacaoPsicomotora: 6,
    rigidezMuscular: 7,
    riscoIminente: 6,
  },

  regrasDeEvolucaoNatural: [
    {
      condicao: "Rigidez, hipertermia e disautonomia da NMS progredindo sem tratamento",
      efeitoPorTurno: {
        frequenciaCardiaca: 4,
        pressaoArterial: { sistolica: 3, diastolica: 2 },
        temperatura: 0.4,
        saturacaoO2: -1,
        rigidezMuscular: 0.5,
        agitacaoPsicomotora: 0.3,
        riscoIminente: 1,
      },
    },
  ],

  acoesDisponiveis: [
    {
      id: "suspender-antipsicotico",
      label: "Suspender imediatamente o antipsicótico",
      categoria: "suporte",
      custoTempo: 0,
      efeitoImediato: { riscoIminente: -1 },
      repetivel: false,
    },
    {
      id: "lorazepam-agitacao",
      label: "Administrar lorazepam para controle da agitação e rigidez",
      categoria: "medicacao",
      medicamentoId: "lorazepam",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -3, rigidezMuscular: -2, riscoIminente: -1 },
      repetivel: true,
    },
    {
      id: "hidratacao-resfriamento",
      label: "Hidratação venosa vigorosa e resfriamento ativo",
      categoria: "suporte",
      custoTempo: 1,
      efeitoImediato: {
        temperatura: -1.2,
        frequenciaCardiaca: -6,
        saturacaoO2: 2,
        riscoIminente: -1,
      },
      repetivel: false,
    },
    {
      id: "dantroleno",
      label: "Administrar dantroleno IV",
      categoria: "medicacao",
      medicamentoId: "dantroleno",
      custoTempo: 1,
      efeitoImediato: {
        rigidezMuscular: -4,
        temperatura: -1.5,
        pressaoArterial: { sistolica: -6, diastolica: -4 },
        riscoIminente: -3,
      },
      repetivel: true,
    },
    {
      id: "aumentar-antipsicotico",
      label: "Manter e aumentar a dose do antipsicótico — parece agitação psicótica descompensando",
      categoria: "medicacao",
      medicamentoId: "haloperidol",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -1 },
      condicaoDeUso: "Tentador se a agitação for interpretada como piora da psicose de base — é a conduta ERRADA numa NMS.",
      riscoSeIncorreta: {
        temperatura: 1.5,
        rigidezMuscular: 3,
        riscoIminente: 3,
      },
      repetivel: false,
    },
    {
      id: "exames-laboratoriais",
      label: "Solicitar CK sérica, função renal e eletrólitos",
      categoria: "exame",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "CK sérica: 18.400 U/L (muito elevada — compatível com rabdomiólise). Ureia e creatinina discretamente elevadas. Potássio 5,3 mEq/L. Leucocitose leve (14.200/mm³) sem desvio.",
      repetivel: false,
    },
    {
      id: "acionar-uti",
      label: "Chamar a UTI para avaliar transferência",
      categoria: "comunicacao",
      custoTempo: 2,
      efeitoImediato: {},
      resultadoTexto:
        "A UTI aceita a transferência e confirma leito em cerca de 15 minutos, mas orienta manter as medidas de suporte e resfriamento até a vaga se efetivar.",
      repetivel: false,
    },
    {
      id: "tranquilizar-familia",
      label: "Tranquilizar a família e explicar a gravidade do quadro",
      categoria: "comunicacao",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "A esposa de Ricardo, que estava na sala de espera, entende a gravidade, autoriza as condutas necessárias e pede pra ser avisada assim que houver qualquer mudança.",
      repetivel: false,
    },
    {
      id: "ect-urgencia",
      label: "Considerar eletroconvulsoterapia em caráter de urgência",
      categoria: "suporte",
      custoTempo: 3,
      efeitoImediato: { rigidezMuscular: -3 },
      condicaoDeUso: "Indicado principalmente em casos refratários ao tratamento farmacológico.",
      repetivel: false,
    },
  ],

  turnosMaximos: 8,

  limiaresDesfecho: {
    estabilizacao: {
      temperatura: 37.5,
      rigidezMuscular: 2,
      agitacaoPsicomotora: 2,
    },
    obito: {
      temperatura: 42,
      frequenciaCardiaca: 160,
      nivelConsciencia: "coma",
    },
    piora: {
      temperatura: 40.5,
      agitacaoPsicomotora: 8,
      rigidezMuscular: 9,
    },
  },
};
