import { CasoSimuladorEmergencia } from "./types";

export const intoxicacaoLitioDeidratacaoGrave: CasoSimuladorEmergencia = {
  "id": "intoxicacao-litio-deidratacao-grave",
  "emergenciaBaseId": "intoxicacao-litio",
  "nomeAnedotico": "O Tremor do Seu Osvaldo",
  "historiaClinica": "Seu Osvaldo, 68 anos, em uso crônico de Carbonato de Lítio (1200mg/dia) para Transtorno Bipolar, apresenta quadro de diarreia e febrícula há 3 dias. Por conta própria e para alívio de dor articular, tomou Diclofenaco por dois dias seguidos. Foi trazido pela família ao pronto-socorro apresentando confusão mental, tremores grosseiros em extremidades, fala arrastada e episódios de mioclonias. Ao dar entrada na sala vermelha, o quadro neurológico e a desidratação já estão francamente instalados.",
  "sinaisVitaisIniciais": {
    "frequenciaCardiaca": 118,
    "pressaoArterial": {
      "sistolica": 90,
      "diastolica": 55
    },
    "temperatura": 37.9,
    "saturacaoO2": 93,
    "nivelConsciencia": "confuso",
    "agitacaoPsicomotora": 6,
    "rigidezMuscular": 5,
    "riscoIminente": 6.5
  },
  "regrasDeEvolucaoNatural": [
    {
      "condicao": "Neurotoxicidade progressiva por acúmulo e retenção renal de Lítio",
      "efeitoPorTurno": {
        "frequenciaCardiaca": 4,
        "pressaoArterial": {
          "sistolica": -8
        },
        "temperatura": 0.3,
        "saturacaoO2": -1,
        "agitacaoPsicomotora": 0.5,
        "rigidezMuscular": 0.5,
        "riscoIminente": 0.8
      }
    }
  ],
  "acoesDisponiveis": [
    {
      "id": "suspender-litio",
      "label": "Suspender Lítio e AINE imediatamente",
      "categoria": "suporte",
      "custoTempo": 1,
      "efeitoImediato": {
        "riscoIminente": -0.5
      },
      "resultadoTexto": "Uso de Lítio e anti-inflamatórios interrompido. Evitada nova absorção enteral do fármaco e insulto renal adicional.",
      "repetivel": false
    },
    {
      "id": "hidratacao-venosa-vigorosa",
      "label": "Hidratação Venosa Vigorosa (Salina 0,9% 1000ml IV em bomba)",
      "categoria": "suporte",
      "custoTempo": 1,
      "efeitoImediato": {
        "frequenciaCardiaca": -12,
        "pressaoArterial": {
          "sistolica": 18
        },
        "temperatura": -0.4,
        "riscoIminente": -1
      },
      "condicaoDeUso": "Indicado para restaurar volemia e excreção renal de lítio",
      "resultadoTexto": "Expansão volêmica iniciada. Aumenta a perfusão renal e melhora a pressão arterial, favorecendo a excreção urinária de lítio.",
      "repetivel": false
    },
    {
      "id": "oxigenioterapia",
      "label": "Instalar Cateter de O2 a 3 L/min",
      "categoria": "suporte",
      "custoTempo": 1,
      "efeitoImediato": {
        "saturacaoO2": 5,
        "riscoIminente": -0.4
      },
      "resultadoTexto": "Cateter nasal instalado. Oxigenação tecidual normalizada.",
      "repetivel": false
    },
    {
      "id": "solicitar-litemia-funcao-renal",
      "label": "Solicitar Litemia de Urgência, Função Renal e Eletrólitos",
      "categoria": "exame",
      "custoTempo": 1,
      "efeitoImediato": {},
      "resultadoTexto": "Litemia sérica: 3,8 mEq/L (nível crítico/tóxico). Creatinina: 2,4 mg/dL (Insuficiência Renal Aguda). Ureia: 88 mg/dL. Na: 132 mEq/L, K: 4,9 mEq/L.",
      "repetivel": false
    },
    {
      "id": "solicitar-hemodialise-uti",
      "label": "Acionar Nefrologia e UTI para Hemodiálise de Emergência",
      "categoria": "medicacao",
      "custoTempo": 2,
      "efeitoImediato": {
        "frequenciaCardiaca": -8,
        "agitacaoPsicomotora": -1,
        "riscoIminente": -4
      },
      "condicaoDeUso": "Indicado em litemia > 2,5 mEq/L com disfunção renal e alteração neurológica — é o tratamento definitivo, que remove diretamente o lítio do sangue. Pode ser repetida: é comum precisar de mais de uma sessão pelo fenômeno de rebote (redistribuição do lítio tecidual de volta pro sangue após a diálise).",
      "resultadoTexto": "Sessão de hemodiálise realizada. Litemia reduzida significativamente; paciente sob monitorização para rebote.",
      "repetivel": true
    },
    {
      "id": "lorazepam-iv",
      "label": "Administrar Lorazepam 2mg IV para abalos mioclônicos",
      "categoria": "medicacao",
      "medicamentoId": "lorazepam",
      "custoTempo": 1,
      "efeitoImediato": {
        "agitacaoPsicomotora": -2,
        "rigidezMuscular": -1,
        "riscoIminente": -0.8
      },
      "condicaoDeUso": "Para controle de mioclonias e agitação neuromuscular",
      "resultadoTexto": "Benzodiazepínico administrado. Observada redução na intensidade das mioclonias e no abalo muscular.",
      "repetivel": true
    },
    {
      "id": "administrar-haloperidol-erro",
      "label": "Administrar Haloperidol 5mg IV para conter agitação",
      "categoria": "medicacao",
      "medicamentoId": "haloperidol",
      "custoTempo": 1,
      "efeitoImediato": {},
      "condicaoDeUso": "Tentador se a agitação e a confusão forem interpretadas como quadro psicótico isolado — é a conduta ERRADA na intoxicação por lítio: a associação lítio + haloperidol tem relatos de neurotoxicidade grave e potencialmente irreversível, além do antipsicótico reduzir o limiar convulsivo.",
      "riscoSeIncorreta": {
        "temperatura": 0.8,
        "agitacaoPsicomotora": 2,
        "rigidezMuscular": 3,
        "riscoIminente": 4
      },
      "repetivel": false
    },
    {
      "id": "administrar-hidroclorotiazida-erro",
      "label": "Administrar Hidroclorotiazida 25mg para forçar diurese",
      "categoria": "medicacao",
      "custoTempo": 1,
      "efeitoImediato": {},
      "condicaoDeUso": "Tentador se a lógica for 'forçar a eliminação do lítio pela urina' — é a conduta ERRADA: diuréticos tiazídicos reduzem a depuração de lítio (aumentam sua reabsorção proximal por contração de volume), piorando a intoxicação em vez de tratá-la.",
      "riscoSeIncorreta": {
        "frequenciaCardiaca": 15,
        "pressaoArterial": {
          "sistolica": -15
        },
        "riscoIminente": 4
      },
      "repetivel": false
    }
  ],
  "turnosMaximos": 8,
  "limiaresDesfecho": {
    "estabilizacao": {
      "frequenciaCardiaca": 80,
      "temperatura": 36.8,
      "saturacaoO2": 97,
      "agitacaoPsicomotora": 1,
      "rigidezMuscular": 1,
      "riscoIminente": 1.5,
      "nivelConsciencia": "alerta"
    },
    "obito": {
      "frequenciaCardiaca": 160,
      "temperatura": 41,
      "saturacaoO2": 80,
      "riscoIminente": 10,
      "nivelConsciencia": "coma"
    },
    "piora": {
      "frequenciaCardiaca": 140,
      "temperatura": 39.5,
      "saturacaoO2": 88,
      "riscoIminente": 8.5,
      "nivelConsciencia": "torporoso"
    }
  }
};
