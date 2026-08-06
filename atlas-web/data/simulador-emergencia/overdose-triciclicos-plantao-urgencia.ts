import { CasoSimuladorEmergencia } from "./types";

export const overdoseTriciclicosPlantaoUrgencia: CasoSimuladorEmergencia = {
  "id": "overdose-triciclicos-plantao-urgencia",
  "emergenciaBaseId": "overdose-triciclicos",
  "nomeAnedotico": "Plantão Crítico: O Alerta do QRS",
  "historiaClinica": "Carlos, 28 anos, foi encontrado desacordado em seu quarto por familiares, ao lado de cartelas vazias de amitriptilina pertencentes a sua avó, após uma discussão familiar grave. No momento em que você assume o plantão na sala vermelha, o paciente apresenta-se torporoso, com agitação psicomotora intermitente, taquicardia sinusal intensa, mucosas excessivamente secas e midríase, estando o quadro cardiotóxico e anticolinérgico plenamente instalado.",
  "sinaisVitaisIniciais": {
    "frequenciaCardiaca": 135,
    "pressaoArterial": {
      "sistolica": 85,
      "diastolica": 50
    },
    "temperatura": 38.5,
    "saturacaoO2": 91,
    "nivelConsciencia": "torporoso",
    "agitacaoPsicomotora": 6,
    "riscoIminente": 7
  },
  "regrasDeEvolucaoNatural": [
    {
      "condicao": "Cardiotoxicidade e acidose não tratadas em overdose de tricíclicos",
      "efeitoPorTurno": {
        "temperatura": 0.2,
        "riscoIminente": 1
      }
    }
  ],
  "acoesDisponiveis": [
    {
      "id": "bicarbonato-sodio",
      "label": "Administrar Bicarbonato de Sódio IV",
      "categoria": "medicacao",
      "custoTempo": 1,
      "efeitoImediato": {
        "temperatura": -0.3,
        "riscoIminente": -2.5
      },
      "condicaoDeUso": "Indicado para reverter cardiotoxicidade e alargamento do QRS",
      "resultadoTexto": "Bicarbonato de sódio infundido. O pH sérico eleva-se, favorecendo a redução do bloqueio dos canais de sódio cardíacos.",
      "repetivel": true
    },
    {
      "id": "carvao-ativado",
      "label": "Administrar Carvão Ativado por SNG",
      "categoria": "medicacao",
      "custoTempo": 1,
      "efeitoImediato": {
        "riscoIminente": -1
      },
      "condicaoDeUso": "Via aérea protegida e ingestão recente",
      "resultadoTexto": "Carvão ativado administrado com sucesso, reduzindo a absorção gastrointestinal remanescente do fármaco.",
      "repetivel": false
    },
    {
      "id": "suporte-oxigenio",
      "label": "Instalar Oxigenoterapia sob Máscara",
      "categoria": "suporte",
      "custoTempo": 0,
      "efeitoImediato": {
        "saturacaoO2": 5
      },
      "condicaoDeUso": "Saturação de O2 abaixo de 95%",
      "resultadoTexto": "Oxigênio suplementar instalado. A saturação recupera-se para níveis seguros.",
      "repetivel": false
    },
    {
      "id": "solucao-fisiologica",
      "label": "Expandir Volume com Solução Fisiológica IV",
      "categoria": "suporte",
      "custoTempo": 1,
      "efeitoImediato": {
        "pressaoArterial": {
          "sistolica": 15
        }
      },
      "condicaoDeUso": "Hipotensão arterial e má perfusão — expansão volêmica dá suporte à pressão, mas não trata a cardiotoxicidade em si.",
      "resultadoTexto": "Expansão volêmica realizada, promovendo leve melhora nos níveis pressóricos.",
      "repetivel": true
    },
    {
      "id": "ecg-seriado",
      "label": "Solicitar Eletrocardiograma Seriado",
      "categoria": "exame",
      "custoTempo": 1,
      "efeitoImediato": {},
      "condicaoDeUso": "Monitorização contínua do intervalo QRS e QT",
      "resultadoTexto": "ECG demonstra taquicardia sinusal com QRS alargado (140 ms) e eixo desviado para a direita, confirmando cardiotoxicidade moderada a grave.",
      "repetivel": true
    },
    {
      "id": "chamar-uti",
      "label": "Solicitar Vaga de UTI com Urgência",
      "categoria": "comunicacao",
      "custoTempo": 1,
      "efeitoImediato": {},
      "condicaoDeUso": "Necessidade de suporte avançado contínuo por 24h",
      "resultadoTexto": "A equipe da UTI confirma o leito e o encaminhamento imediato do paciente após estabilização inicial.",
      "repetivel": false
    },
    {
      "id": "manter-antisicotico",
      "label": "Administrar Antipsicótico Sedativo",
      "categoria": "medicacao",
      "custoTempo": 1,
      "efeitoImediato": {},
      "condicaoDeUso": "Erro de conduta: agrava o bloqueio de canais de sódio e hipotensão",
      "riscoSeIncorreta": {
        "temperatura": 0.5,
        "riscoIminente": 3
      },
      "repetivel": false
    }
  ],
  "turnosMaximos": 6,
  "limiaresDesfecho": {
    "estabilizacao": {
      "temperatura": 37,
      "riscoIminente": 0
    },
    "obito": {
      "temperatura": 41.5,
      "riscoIminente": 10
    },
    "piora": {
      "temperatura": 40,
      "riscoIminente": 9
    }
  }
};
