import { CasoSimuladorEmergencia } from "./types";

// Caso escrito à mão (NÃO gerado pelo Gemini/script), mesmo padrão dos
// outros casos deste módulo. diazepam conferem com data/medicamentos;
// tiamina — parte central da conduta real (previne encefalopatia de
// Wernicke) — não está modelada no app, por isso aparece só no label da
// ação, sem medicamentoId. A armadilha aqui é trocar o benzodiazepínico
// por antipsicótico pra conter a agitação: não trata a abstinência e
// reduz o limiar convulsivo numa DT — erro real e documentado.
export const deliriumTremensFraturaFemur: CasoSimuladorEmergencia = {
  id: "delirium-tremens-fratura-femur",

  emergenciaBaseId: "delirium-tremens",

  nomeAnedotico: "A Internação que Cortou a Bebida",

  historiaClinica:
    "Antônio, 58 anos, etilista há mais de 20 anos, está internado há 3 dias por uma fratura de fêmur — e parou de beber abruptamente com a internação. Na última noite passou a ver 'bichos andando pela parede', está tremendo muito e não sabe dizer onde está. A enfermagem relata sudorese intensa e taquicardia progressiva ao longo da noite.",

  sinaisVitaisIniciais: {
    frequenciaCardiaca: 128,
    pressaoArterial: { sistolica: 158, diastolica: 96 },
    temperatura: 38.4,
    saturacaoO2: 95,
    nivelConsciencia: "confuso",
    agitacaoPsicomotora: 7,
    riscoIminente: 6,
  },

  regrasDeEvolucaoNatural: [
    {
      condicao: "Abstinência alcoólica grave progredindo sem benzodiazepínico, risco de convulsão e colapso autonômico",
      efeitoPorTurno: {
        frequenciaCardiaca: 6,
        pressaoArterial: { sistolica: 3, diastolica: 2 },
        temperatura: 0.4,
        agitacaoPsicomotora: 0.6,
        riscoIminente: 1.3,
      },
    },
  ],

  acoesDisponiveis: [
    {
      id: "beneodiazepinico-titulado",
      label: "Benzodiazepínico em dose ajustada à gravidade (guiado por CIWA-Ar)",
      categoria: "medicacao",
      medicamentoId: "diazepam",
      custoTempo: 1,
      efeitoImediato: {
        agitacaoPsicomotora: -3,
        temperatura: -0.4,
        pressaoArterial: { sistolica: -6, diastolica: -4 },
        riscoIminente: -3,
      },
      repetivel: true,
    },
    {
      // reposicao-tiamina e ambiente-calmo-reorientacao eram
      // repetivel:true com custoTempo:0 e reduziam riscoIminente — o
      // mesmo padrão de bug encontrado em "ambiente calmo" do surto
      // psicótico (clique grátis infinito). Ambas viram decisão de uma
      // vez só agora.
      id: "reposicao-tiamina",
      label: "Repor tiamina antes/junto da glicose",
      categoria: "suporte",
      custoTempo: 0,
      efeitoImediato: { riscoIminente: -1 },
      repetivel: false,
    },
    {
      id: "correcao-eletrolitica",
      label: "Corrigir magnésio e potássio",
      categoria: "suporte",
      custoTempo: 1,
      efeitoImediato: { riscoIminente: -1, frequenciaCardiaca: -3 },
      repetivel: false,
    },
    {
      id: "ambiente-calmo-reorientacao",
      label: "Ambiente calmo, bem iluminado, com reorientação frequente",
      categoria: "suporte",
      custoTempo: 0,
      efeitoImediato: { agitacaoPsicomotora: -1 },
      repetivel: false,
    },
    {
      id: "antipsicotico-em-vez-de-bzd",
      label: "Usar antipsicótico pra conter a agitação e as alucinações",
      categoria: "medicacao",
      medicamentoId: "haloperidol",
      custoTempo: 1,
      efeitoImediato: { agitacaoPsicomotora: -2 },
      condicaoDeUso:
        "Tentador pela agitação intensa e pelas alucinações, mas antipsicótico não trata a abstinência em si e reduz o limiar convulsivo numa DT — pode piorar o quadro em vez de controlá-lo.",
      riscoSeIncorreta: {
        frequenciaCardiaca: 15,
        temperatura: 1.0,
        riscoIminente: 3,
      },
      repetivel: false,
    },
    {
      id: "escala-ciwa",
      label: "Aplicar a escala CIWA-Ar",
      categoria: "exame",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "CIWA-Ar: 28 pontos — abstinência grave. Indica benzodiazepínico em doses altas e monitorização contínua.",
      repetivel: true,
    },
    {
      id: "monitorizacao-continua",
      label: "Chamar reforço da equipe para monitorização contínua de sinais vitais",
      categoria: "comunicacao",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto: "A equipe reforça a monitorização à beira do leito — qualquer piora será notada rápido.",
      repetivel: false,
    },
    {
      id: "tranquilizar-familia",
      label: "Explicar à família a gravidade do quadro",
      categoria: "comunicacao",
      custoTempo: 1,
      efeitoImediato: {},
      resultadoTexto:
        "A família confirma o padrão de consumo de longa data e uma internação anterior com abstinência grave — reforça o diagnóstico.",
      repetivel: false,
    },
  ],

  turnosMaximos: 8,

  limiaresDesfecho: {
    estabilizacao: {
      agitacaoPsicomotora: 2,
      temperatura: 37.3,
    },
    obito: {
      frequenciaCardiaca: 170,
      temperatura: 41,
      nivelConsciencia: "coma",
    },
    piora: {
      frequenciaCardiaca: 150,
      agitacaoPsicomotora: 9,
    },
  },
};
