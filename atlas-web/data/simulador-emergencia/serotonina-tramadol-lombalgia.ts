import { CasoSimuladorEmergencia } from "./types";

// Caso escrito à mão (NÃO gerado pelo Gemini/script), no mesmo padrão do
// caso de NMS (nms-plantao-sexta.ts): lorazepam/sertralina/ciproeptadina
// conferem com data/medicamentos. rigidezMuscular é deliberadamente OMITIDO
// aqui: a síndrome serotoninérgica cursa com HIPERreflexia/clônus, o
// oposto da rigidez "em cano de chumbo" da NMS — usar o mesmo campo pras
// duas confundiria exatamente o achado que diferencia os dois quadros no
// diagnóstico diferencial real. agitacaoPsicomotora carrega a
// hiperatividade neuromuscular/comportamental neste caso.
export const serotoninaTramadolLombalgia: CasoSimuladorEmergencia = {
  id: "serotonina-tramadol-lombalgia",

  emergenciaBaseId: "sindrome-serotoninergica",

  nomeAnedotico: "Tramadol pra Dor nas Costas",

  historiaClinica:
    "Camila, 27 anos, em tratamento com sertralina 100mg/dia para transtorno depressivo maior há 3 meses, foi à emergência clínica há 2 dias por uma lombalgia intensa e saiu de lá com tramadol associado. Há cerca de 6 horas a família notou que ela está agitada, trêmula e 'fora do ar', respondendo de forma confusa. Ao exame você encontra tremor fino, sudorese profusa e taquicardia. É você quem assume o caso agora.",

  sinaisVitaisIniciais: {
    frequenciaCardiaca: 132,
    pressaoArterial: { sistolica: 162, diastolica: 100 },
    temperatura: 39.3,
    saturacaoO2: 95,
    nivelConsciencia: "confuso",
    agitacaoPsicomotora: 7,
    riscoIminente: 5,
  },

  regrasDeEvolucaoNatural: [
    {
      condicao: "Excesso serotoninérgico (ISRS + tramadol) progredindo sem suspensão dos agentes",
      efeitoPorTurno: {
        frequenciaCardiaca: 6,
        pressaoArterial: { sistolica: 3, diastolica: 2 },
        temperatura: 0.5,
        saturacaoO2: -1,
        agitacaoPsicomotora: 0.6,
        riscoIminente: 1.2,
      },
    },
  ],

  acoesDisponiveis: [
    {
      id: "suspender-serotoninergicos",
      label: "Suspender imediatamente sertralina e tramadol",
      categoria: "suporte",
      custoTempo: 0,
      efeitoImediato: { riscoIminente: -1 },
      repetivel: false,
    },
    {
      id: "lorazepam-agitacao",
      label: "Administrar lorazepam para controle da agitação",
      categoria: "medicacao",
      medicamentoId: "lorazepam",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -3, riscoIminente: -1 },
      repetivel: true,
    },
    {
      id: "hidratacao-resfriamento",
      label: "Hidratação venosa vigorosa e resfriamento ativo",
      categoria: "suporte",
      custoTempo: 1,
      efeitoImediato: {
        temperatura: -1.2,
        frequenciaCardiaca: -8,
        saturacaoO2: 2,
        riscoIminente: -1,
      },
      repetivel: false,
    },
    {
      id: "ciproeptadina",
      label: "Administrar ciproeptadina (antagonista serotoninérgico)",
      categoria: "medicacao",
      medicamentoId: "ciproeptadina",
      custoTempo: 1,
      efeitoImediato: {
        agitacaoPsicomotora: -3,
        temperatura: -1.3,
        pressaoArterial: { sistolica: -6, diastolica: -4 },
        riscoIminente: -3,
      },
      repetivel: true,
    },
    {
      id: "reintroduzir-sertralina",
      label: "Reintroduzir a sertralina — pode ser síndrome de descontinuação abrupta",
      categoria: "medicacao",
      medicamentoId: "sertralina",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -1 },
      condicaoDeUso:
        "Tentador se o quadro for confundido com descontinuação abrupta de antidepressivo — é a conduta ERRADA numa síndrome serotoninérgica em curso: mais serotonina piora o quadro.",
      riscoSeIncorreta: {
        temperatura: 1.5,
        agitacaoPsicomotora: 3,
        riscoIminente: 4,
      },
      repetivel: false,
    },
    {
      id: "exames-laboratoriais",
      label: "Solicitar CK sérica, função renal e gasometria arterial",
      categoria: "exame",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "CK sérica discretamente elevada. Função renal preservada. Gasometria sem acidose significativa neste momento — diagnóstico aqui é clínico (critérios de Hunter), não laboratorial.",
      repetivel: false,
    },
    {
      id: "acionar-uti",
      label: "Chamar a UTI para avaliar transferência",
      categoria: "comunicacao",
      custoTempo: 2,
      efeitoImediato: {},
      resultadoTexto:
        "A UTI confirma leito em cerca de 15 minutos e orienta manter resfriamento e sedação até a vaga se efetivar.",
      repetivel: false,
    },
    {
      id: "tranquilizar-familia",
      label: "Explicar à família a gravidade do quadro e a causa provável",
      categoria: "comunicacao",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "A família confirma que Camila começou o tramadol há 2 dias e nunca tinha tido reação parecida antes — ajuda a fechar a hipótese diagnóstica.",
      repetivel: false,
    },
    {
      id: "sedacao-intubacao",
      label: "Sedação profunda e intubação orotraqueal",
      categoria: "suporte",
      custoTempo: 3,
      efeitoImediato: { agitacaoPsicomotora: -4 },
      condicaoDeUso: "Reservado a casos muito graves, com hipertermia >41°C ou rigidez importante.",
      repetivel: false,
    },
  ],

  turnosMaximos: 8,

  limiaresDesfecho: {
    estabilizacao: {
      temperatura: 37.5,
      agitacaoPsicomotora: 2,
    },
    obito: {
      temperatura: 41.5,
      frequenciaCardiaca: 170,
      nivelConsciencia: "coma",
    },
    piora: {
      temperatura: 40,
      agitacaoPsicomotora: 9,
    },
  },
};
