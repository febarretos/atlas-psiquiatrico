import { CasoSimuladorEmergencia } from "./types";

export const catatoniaMalignaPlantao: CasoSimuladorEmergencia = {
  "id": "catatonia-maligna-plantao",
  "emergenciaBaseId": "catatonia-maligna",
  "nomeAnedotico": "Estupor, Febre e Instabilidade na Emergência",
  "historiaClinica": "Paciente do sexo masculino, 29 anos, com histórico de Transtorno Bipolar, deu entrada na emergência trazido pela família após 4 dias de mutismo, negativismo e manutenção de posturas bizarras. Nas últimas 6 horas, evoluiu com rigidez muscular em cano de chumbo, diaforese profusa, instabilidade hemodinâmica e febre alta de início súbito. Na triagem de outro serviço, recebeu inadvertidamente uma dose de Haloperidol IM para contenção de agitação prévia, o que precipitou a rápida deterioração autonômica e a suspeita de Catatonia Maligna. Você assume o plantão com o paciente torporoso, febril e gravemente instável.",
  "sinaisVitaisIniciais": {
    "frequenciaCardiaca": 130,
    "pressaoArterial": {
      "sistolica": 165,
      "diastolica": 105
    },
    "temperatura": 39.2,
    "saturacaoO2": 92,
    "nivelConsciencia": "torporoso",
    "agitacaoPsicomotora": 2,
    "rigidezMuscular": 8,
    "riscoIminente": 6
  },
  "regrasDeEvolucaoNatural": [
    {
      "condicao": "Progressão da hipertermia e colapso autonômico na Catatonia Maligna não tratada",
      "efeitoPorTurno": {
        "frequenciaCardiaca": 6,
        "pressaoArterial": {
          "sistolica": 6
        },
        "temperatura": 0.4
      }
    },
    {
      "condicao": "Instabilidade autonômica (disautonomia) progressiva da catatonia maligna não tratada",
      "efeitoPorTurno": {
        "frequenciaCardiaca": 5,
        "pressaoArterial": {
          "sistolica": 5
        },
        "temperatura": 0.2,
        "saturacaoO2": -1,
        "rigidezMuscular": 0.5,
        "riscoIminente": 1
      }
    }
  ],
  "acoesDisponiveis": [
    {
      "id": "administrar-lorazepam-iv",
      "label": "Administrar Lorazepam 2mg IV lento (Teste do Lorazepam)",
      "categoria": "medicacao",
      "medicamentoId": "lorazepam",
      "custoTempo": 1,
      "efeitoImediato": {
        "frequenciaCardiaca": -15,
        "pressaoArterial": {
          "sistolica": -15
        },
        "temperatura": -0.5,
        "saturacaoO2": 1,
        "rigidezMuscular": -3,
        "riscoIminente": -2
      },
      "condicaoDeUso": "Primeira linha absoluta. Diagnóstica e terapêutica para catatonia.",
      "resultadoTexto": "Após a infusão de 2mg de lorazepam, o paciente apresenta redução parcial do tônus rígido em cano de chumbo, com moderação da taquicardia e diminuição da labilidade autonômica.",
      "repetivel": true
    },
    {
      "id": "administrar-haloperidol-im",
      "label": "Administrar Haloperidol 5mg IM para controle da instabilidade",
      "categoria": "medicacao",
      "medicamentoId": "haloperidol",
      "custoTempo": 1,
      "efeitoImediato": {},
      "condicaoDeUso": "Absolutamente contraindicado na catatonia e suspeita de catatonia maligna.",
      "riscoSeIncorreta": {
        "frequenciaCardiaca": 20,
        "pressaoArterial": {
          "sistolica": 25
        },
        "temperatura": 1.2,
        "rigidezMuscular": 3,
        "riscoIminente": 3
      },
      "resultadoTexto": "CONDUTA INCORRETA: O antipsicótico de alta potência agravou o bloqueio dopaminérgico grave, intensificando a rigidez muscular e disparando a temperatura e a instabilidade hemodinâmica.",
      "repetivel": false
    },
    {
      "id": "oxigenioterapia-mascara",
      "label": "Instalar O2 suplementar via máscara de reinalação (10 L/min)",
      "categoria": "suporte",
      "custoTempo": 1,
      "efeitoImediato": {
        "frequenciaCardiaca": -5,
        "saturacaoO2": 5,
        "riscoIminente": -0.5
      },
      "condicaoDeUso": "Indicado para hipoxemia decorrente do comprometimento ventilatório por rigidez torácica.",
      "resultadoTexto": "Máscara de O2 ofertando 10 L/min. A oxigenação tecidual melhora e a saturação de O2 sobe para níveis mais seguros.",
      "repetivel": false
    },
    {
      "id": "hidratacao-e-resfriamento",
      "label": "Iniciar hidratação venosa vigorosa (SF 0,9%) e resfriamento físico ativo",
      "categoria": "suporte",
      "custoTempo": 1,
      "efeitoImediato": {
        "frequenciaCardiaca": -10,
        "pressaoArterial": {
          "sistolica": -8
        },
        "temperatura": -0.8,
        "riscoIminente": -0.5
      },
      "condicaoDeUso": "Essencial para prevenção de insuficiência renal por rabdomiólise e combate à hipertermia.",
      "resultadoTexto": "Instaladas compressas frias em axilas e virilhas concomitante à infusão de 1000ml de Salina 0,9%. Nota-se redução gradual da hipertermia e estabilização do volume vascular.",
      "repetivel": false
    },
    {
      "id": "solicitar-ect-urgencia",
      "label": "Solicitar avaliação para Eletroconvulsoterapia (ECT) de urgência e leito de UTI",
      "categoria": "comunicacao",
      "custoTempo": 2,
      "efeitoImediato": {
        "riscoIminente": -0.5
      },
      "condicaoDeUso": "Tratamento de escolha definitivo em formas malignas ou refratárias ao benzodiazepínico.",
      "resultadoTexto": "A equipe de psiquiatria intervencionista e a UTI confirmam vaga e preparam o procedimento de ECT de urgência.",
      "repetivel": false
    },
    {
      "id": "solicitar-exames-laboratoriais",
      "label": "Coletar exames: CPK sérica, gasometria arterial, função renal e eletrólitos",
      "categoria": "exame",
      "custoTempo": 1,
      "efeitoImediato": {},
      "condicaoDeUso": "Avaliação de gravidade sistemática na suspeita de síndrome autonômica e rabdomiólise.",
      "resultadoTexto": "Resultado dos exames: CPK sérica = 24.500 U/L (marcadamente elevada); Cr = 1,7 mg/dL; Gasometria com acidose metabólica discreta (pH 7,31, HCO3 18); K+ = 5,1 mEq/L. Confirmado sofrimento muscular grave.",
      "repetivel": false
    },
    {
      "id": "exame-fisico-neurologico",
      "label": "Aplicar escala de Catatonia de Bush-Francis e exame neurológico detalhado",
      "categoria": "exame",
      "custoTempo": 0,
      "efeitoImediato": {},
      "condicaoDeUso": "Mapeamento sistemático de sinais catatônicos.",
      "resultadoTexto": "Bush-Francis: 24 pontos. Observa-se catalepsia, flexibilidade cérea, mutismo completo, olhar fixo e rigidez marcante em membros e tronco.",
      "repetivel": false
    },
    {
      "id": "administrar-dantroleno",
      "label": "Administrar Dantroleno 1 mg/kg IV",
      "categoria": "medicacao",
      "medicamentoId": "dantroleno",
      "custoTempo": 1,
      "efeitoImediato": {
        "temperatura": -0.5,
        "rigidezMuscular": -2,
        "riscoIminente": -1
      },
      "condicaoDeUso": "Indicado como adjuvante em hiperpirexia e rigidez extrema.",
      "resultadoTexto": "Dantroleno injetado via IV. Observa-se abrandamento da hipertonia muscular hipermetabólica.",
      "repetivel": true
    }
  ],
  "turnosMaximos": 8,
  "limiaresDesfecho": {
    "estabilizacao": {
      "frequenciaCardiaca": 85,
      "pressaoArterial": {
        "sistolica": 120
      },
      "temperatura": 37.2,
      "saturacaoO2": 97,
      "rigidezMuscular": 2,
      "riscoIminente": 0
    },
    "obito": {
      "frequenciaCardiaca": 170,
      "temperatura": 42,
      "saturacaoO2": 80,
      "riscoIminente": 10
    },
    "piora": {
      "frequenciaCardiaca": 150,
      "temperatura": 40.5,
      "rigidezMuscular": 9,
      "riscoIminente": 8
    }
  }
};
