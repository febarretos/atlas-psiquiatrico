// Semântica do motor (ver lib/motorSimuladorEmergencia.ts para a
// implementação) — documentada aqui porque o pseudocódigo original desse
// schema não distingue "delta" de "valor absoluto":
//
// 1. Todo campo NUMÉRICO de SinaisVitais (frequenciaCardiaca, temperatura,
//    saturacaoO2, agitacaoPsicomotora, rigidezMuscular, riscoIminente, e
//    pressaoArterial.sistolica/diastolica) é tratado como DELTA aditivo
//    em efeitoPorTurno/efeitoImediato/riscoSeIncorreta — soma-se ao
//    valor atual, nunca substitui.
// 2. nivelConsciencia é o único campo categórico — quando presente num
//    efeito, é um OVERRIDE (define o novo estado), não um delta.
// 3. riscoSeIncorreta é aplicado de forma INCONDICIONAL sempre que essa
//    ação específica é escolhida — não há avaliação de contexto em tempo
//    real. Por isso uma ação que só é errada em certos contextos (ex.:
//    "aumentar o antipsicótico") não deve ser modelada com
//    riscoSeIncorreta num caso onde ela é a conduta correta; o campo
//    existe pra ações que são incorretas *neste caso específico*, ponto.
//    condicaoDeUso é só texto informativo pro jogador — não é avaliado
//    pelo motor.
// 4. regrasDeEvolucaoNatural são todas aplicadas a cada turno decorrido,
//    incondicionalmente (representam a progressão da doença não tratada)
//    — `condicao` é só o rótulo legível mostrado no log, não uma
//    condição avaliada pelo motor.
// 5. limiaresDesfecho: a direção de "piorou o suficiente" de cada campo é
//    inferida comparando o limiar contra sinaisVitaisIniciais (limiar
//    maior que o inicial = "subir é ruim/é a meta", limiar menor = "descer
//    é ruim/é a meta"). nivelConsciencia usa uma ordem fixa de gravidade
//    (alerta < sonolento < confuso < torporoso < coma).

export interface PressaoArterial {
  sistolica: number;
  diastolica: number;
}

export interface SinaisVitais {
  frequenciaCardiaca: number;
  pressaoArterial: PressaoArterial;
  temperatura: number; // °C — crítico pra NMS, síndrome serotoninérgica, DT
  saturacaoO2: number; // %
  nivelConsciencia: "alerta" | "sonolento" | "confuso" | "torporoso" | "coma";
  agitacaoPsicomotora: number; // 0-10
  rigidezMuscular?: number; // 0-10 — relevante pra NMS/catatonia
  riscoIminente: number; // 0-10 — "termômetro" geral; 0 = estabilizado, 10 = óbito
}

// Delta aditivo pros campos numéricos + override categórico pra
// nivelConsciencia (ver semântica acima). pressaoArterial aqui é
// Partial<PressaoArterial> pra permitir alterar só a sistólica, só a
// diastólica, ou ambas.
export interface EfeitoSinaisVitais {
  frequenciaCardiaca?: number;
  pressaoArterial?: Partial<PressaoArterial>;
  temperatura?: number;
  saturacaoO2?: number;
  nivelConsciencia?: SinaisVitais["nivelConsciencia"];
  agitacaoPsicomotora?: number;
  rigidezMuscular?: number;
  riscoIminente?: number;
}

export interface RegraEvolucao {
  // Descrição legível do processo fisiológico — mostrada no log do jogo,
  // não avaliada pelo motor (ver item 4 acima).
  condicao: string;
  efeitoPorTurno: EfeitoSinaisVitais;
}

export interface AcaoDisponivel {
  id: string;
  label: string;
  categoria: "medicacao" | "exame" | "suporte" | "contencao" | "comunicacao";

  // Id de data/medicamentos — omitir quando o fármaco correto não está
  // modelado no app (ex.: dantroleno, bromocriptina), sem inventar um id.
  medicamentoId?: string;

  custoTempo: number; // turnos consumidos ao escolher esta ação
  efeitoImediato: EfeitoSinaisVitais;

  // Texto informativo pro jogador (ex.: "indicado se temperatura > 39°C")
  // — não avaliado pelo motor, ver item 3 acima.
  condicaoDeUso?: string;

  // Texto fixo mostrado no histórico quando esta ação é escolhida — o
  // "resultado" narrativo da ação (ex.: valor de um exame pedido, resposta
  // da UTI, reação da família). Puramente narrativo: não afeta
  // SinaisVitais nem é avaliado pelo motor. Principalmente relevante pra
  // ações de exame/comunicação, cujo efeitoImediato costuma ser {} — sem
  // isso, a ação não dá nenhum feedback visível ao jogador.
  resultadoTexto?: string;

  // Presente SÓ em ações que são incorretas *neste caso específico* —
  // aplicado sempre que a ação é escolhida, sem checagem de contexto.
  riscoSeIncorreta?: EfeitoSinaisVitais;
}

export interface CasoSimuladorEmergencia {
  id: string;

  // Vínculo com data/emergencias (Emergencia.id) — a fisiopatologia real
  // por trás do caso.
  emergenciaBaseId: string;

  nomeAnedotico: string;

  // Texto narrativo mostrado ao jogador antes/durante a partida — quem é o
  // paciente, o que levou até aqui, por que a crise já está instalada
  // quando o jogador chega. Sem isso o jogador cai direto no monitor de
  // sinais vitais sem nenhum contexto clínico.
  historiaClinica: string;

  sinaisVitaisIniciais: SinaisVitais;

  regrasDeEvolucaoNatural: RegraEvolucao[];

  acoesDisponiveis: AcaoDisponivel[];

  turnosMaximos: number;

  limiaresDesfecho: {
    estabilizacao: EfeitoSinaisVitais;
    obito: EfeitoSinaisVitais;
    piora: EfeitoSinaisVitais;
  };
}
