import type {
  SinaisVitais,
  EfeitoSinaisVitais,
  RegraEvolucao,
  AcaoDisponivel,
  CasoSimuladorEmergencia,
} from "../data/simulador-emergencia/types";

// Motor determinístico do Simulador de Emergência — sem nenhuma chamada
// de API durante o jogo. Ver o comentário de topo em
// data/simulador-emergencia/types.ts para a semântica completa (delta vs
// override, riscoSeIncorreta incondicional etc.). Resumo das decisões de
// desfecho tomadas aqui, por não estarem 100% definidas no schema:
//
// - ÓBITO: riscoIminente >= 10, OU qualquer campo especificado em
//   limiaresDesfecho.obito atinge seu valor (direção inferida comparando
//   o limiar com sinaisVitaisIniciais — ver campoNumericoAtingido). É OR:
//   várias formas independentes de o caso terminar mal.
// - ESTABILIZAÇÃO: só riscoIminente <= 0. Os campos extras de
//   limiaresDesfecho.estabilizacao são tratados como informativos (pra
//   mostrar na tela de resultado o que "voltou ao normal"), não como
//   condição adicional obrigatória — isso evita que uma combinação de
//   limiares mal calibrada pelo gerador torne a vitória inalcançável.
// - TEMPO ESGOTADO: turnoAtual >= turnosMaximos sem ter estabilizado nem
//   morrido — terceiro desfecho, ruim mas distinto de óbito.

const ORDEM_CONSCIENCIA: SinaisVitais["nivelConsciencia"][] = [
  "alerta",
  "sonolento",
  "confuso",
  "torporoso",
  "coma",
];

function ordinalConsciencia(nivel: SinaisVitais["nivelConsciencia"]): number {
  return ORDEM_CONSCIENCIA.indexOf(nivel);
}

function clamp(valor: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, valor));
}

// Aplica um efeito a um estado de sinais vitais sem mutar o original.
// Campos numéricos somam (delta); nivelConsciencia substitui (override).
export function aplicarEfeito(atual: SinaisVitais, efeito: EfeitoSinaisVitais): SinaisVitais {
  const proximo: SinaisVitais = {
    ...atual,
    pressaoArterial: { ...atual.pressaoArterial },
  };

  if (efeito.frequenciaCardiaca !== undefined) {
    proximo.frequenciaCardiaca = Math.max(0, atual.frequenciaCardiaca + efeito.frequenciaCardiaca);
  }
  if (efeito.pressaoArterial?.sistolica !== undefined) {
    proximo.pressaoArterial.sistolica = Math.max(
      0,
      atual.pressaoArterial.sistolica + efeito.pressaoArterial.sistolica
    );
  }
  if (efeito.pressaoArterial?.diastolica !== undefined) {
    proximo.pressaoArterial.diastolica = Math.max(
      0,
      atual.pressaoArterial.diastolica + efeito.pressaoArterial.diastolica
    );
  }
  if (efeito.temperatura !== undefined) {
    proximo.temperatura = atual.temperatura + efeito.temperatura;
  }
  if (efeito.saturacaoO2 !== undefined) {
    proximo.saturacaoO2 = clamp(atual.saturacaoO2 + efeito.saturacaoO2, 0, 100);
  }
  if (efeito.nivelConsciencia !== undefined) {
    proximo.nivelConsciencia = efeito.nivelConsciencia;
  }
  if (efeito.agitacaoPsicomotora !== undefined) {
    proximo.agitacaoPsicomotora = clamp(atual.agitacaoPsicomotora + efeito.agitacaoPsicomotora, 0, 10);
  }
  if (efeito.rigidezMuscular !== undefined) {
    proximo.rigidezMuscular = clamp((atual.rigidezMuscular ?? 0) + efeito.rigidezMuscular, 0, 10);
  }
  if (efeito.riscoIminente !== undefined) {
    proximo.riscoIminente = clamp(atual.riscoIminente + efeito.riscoIminente, 0, 10);
  }

  return proximo;
}

// Aplica todas as regras de evolução natural, uma vez por turno
// decorrido — representam a doença não tratada progredindo.
export function aplicarEvolucaoNatural(
  atual: SinaisVitais,
  regras: RegraEvolucao[],
  turnosDecorridos: number
): SinaisVitais {
  let resultado = atual;
  for (let i = 0; i < turnosDecorridos; i++) {
    for (const regra of regras) {
      resultado = aplicarEfeito(resultado, regra.efeitoPorTurno);
    }
  }
  return resultado;
}

// Direção de "atingiu o limiar" inferida comparando o valor do limiar
// com o valor inicial do caso: limiar acima do inicial => atingir é
// subir até lá (ou além); limiar abaixo => atingir é descer até lá.
function campoNumericoAtingido(atual: number, inicial: number, limiar: number): boolean {
  return limiar >= inicial ? atual >= limiar : atual <= limiar;
}

interface CampoAvaliado {
  campo: string;
  atingiu: boolean;
}

// direcaoConsciencia: "cima" = ordem de gravidade maior conta como
// atingido (usado pra óbito/piora); "baixo" = o oposto (usado só de
// forma informativa pra estabilização, ver verificarDesfecho).
function avaliarCampos(
  atual: SinaisVitais,
  inicial: SinaisVitais,
  limiar: EfeitoSinaisVitais,
  direcaoConsciencia: "cima" | "baixo"
): CampoAvaliado[] {
  const resultado: CampoAvaliado[] = [];

  const checar = (
    campo: string,
    valorAtual: number | undefined,
    valorInicial: number | undefined,
    valorLimiar: number | undefined
  ) => {
    if (valorLimiar === undefined || valorAtual === undefined || valorInicial === undefined) return;
    resultado.push({ campo, atingiu: campoNumericoAtingido(valorAtual, valorInicial, valorLimiar) });
  };

  checar("frequenciaCardiaca", atual.frequenciaCardiaca, inicial.frequenciaCardiaca, limiar.frequenciaCardiaca);
  checar(
    "pressaoArterial.sistolica",
    atual.pressaoArterial.sistolica,
    inicial.pressaoArterial.sistolica,
    limiar.pressaoArterial?.sistolica
  );
  checar(
    "pressaoArterial.diastolica",
    atual.pressaoArterial.diastolica,
    inicial.pressaoArterial.diastolica,
    limiar.pressaoArterial?.diastolica
  );
  checar("temperatura", atual.temperatura, inicial.temperatura, limiar.temperatura);
  checar("saturacaoO2", atual.saturacaoO2, inicial.saturacaoO2, limiar.saturacaoO2);
  checar("agitacaoPsicomotora", atual.agitacaoPsicomotora, inicial.agitacaoPsicomotora, limiar.agitacaoPsicomotora);
  checar("rigidezMuscular", atual.rigidezMuscular, inicial.rigidezMuscular, limiar.rigidezMuscular);
  checar("riscoIminente", atual.riscoIminente, inicial.riscoIminente, limiar.riscoIminente);

  if (limiar.nivelConsciencia !== undefined) {
    const ord = ordinalConsciencia(atual.nivelConsciencia);
    const ordLimiar = ordinalConsciencia(limiar.nivelConsciencia);
    const atingiu = direcaoConsciencia === "cima" ? ord >= ordLimiar : ord <= ordLimiar;
    resultado.push({ campo: "nivelConsciencia", atingiu });
  }

  return resultado;
}

export type Desfecho = "estabilizacao" | "obito" | "tempo-esgotado";

export function verificarDesfecho(
  caso: CasoSimuladorEmergencia,
  atual: SinaisVitais,
  turnoAtual: number
): Desfecho | null {
  const inicial = caso.sinaisVitaisIniciais;

  if (atual.riscoIminente >= 10) return "obito";

  const camposObito = avaliarCampos(atual, inicial, caso.limiaresDesfecho.obito, "cima");
  if (camposObito.some((c) => c.atingiu)) return "obito";

  if (atual.riscoIminente <= 0) return "estabilizacao";

  if (turnoAtual >= caso.turnosMaximos) return "tempo-esgotado";

  return null;
}

// Campos extras (fora do riscoIminente) que já bateram o limiar de
// óbito/estabilização — só pra narrativa da tela de resultado, nunca usado
// pra decidir o desfecho em si.
export function camposConfirmatorios(
  caso: CasoSimuladorEmergencia,
  atual: SinaisVitais,
  tipo: "obito" | "estabilizacao"
): string[] {
  const direcao = tipo === "obito" ? "cima" : "baixo";
  return avaliarCampos(atual, caso.sinaisVitaisIniciais, caso.limiaresDesfecho[tipo], direcao)
    .filter((c) => c.atingiu)
    .map((c) => c.campo);
}

// Estado "em alarme" (pra UI piscar/ficar vermelha) — não é um desfecho,
// só um alerta visual. riscoIminente alto por si só já dispara, mesmo
// que o caso não tenha preenchido limiaresDesfecho.piora.
export function estaEmAlarme(caso: CasoSimuladorEmergencia, atual: SinaisVitais): boolean {
  if (atual.riscoIminente >= 7) return true;
  return avaliarCampos(atual, caso.sinaisVitaisIniciais, caso.limiaresDesfecho.piora, "cima").some(
    (c) => c.atingiu
  );
}

export interface EntradaLog {
  turno: number;
  acaoId: string;
  acaoLabel: string;
  foiIncorreta: boolean;
  sinaisAposAcao: SinaisVitais;
  resultadoTexto?: string;
}

export interface EstadoJogo {
  sinaisAtuais: SinaisVitais;
  turnoAtual: number;
  log: EntradaLog[];
  desfecho: Desfecho | null;
  // Ids de ações já escolhidas ao menos uma vez nesta partida — usado
  // pela UI pra desabilitar ações não-repetíveis já usadas (ver
  // AcaoDisponivel.repetivel em data/simulador-emergencia/types.ts). Não é
  // consultado por escolherAcao: o motor sempre processa a ação recebida,
  // a restrição é só de interface.
  acoesJaUsadas: Set<string>;
}

export function criarEstadoInicial(caso: CasoSimuladorEmergencia): EstadoJogo {
  return {
    sinaisAtuais: caso.sinaisVitaisIniciais,
    turnoAtual: 0,
    log: [],
    desfecho: verificarDesfecho(caso, caso.sinaisVitaisIniciais, 0),
    acoesJaUsadas: new Set(),
  };
}

// Processa um turno: evolução natural pelo custoTempo da ação, depois o
// efeito da ação (+ riscoSeIncorreta, se a ação tiver um definido —
// aplicado incondicionalmente, ver topo do arquivo). Ignora a chamada se
// o jogo já tiver acabado.
export function escolherAcao(
  caso: CasoSimuladorEmergencia,
  estado: EstadoJogo,
  acao: AcaoDisponivel
): EstadoJogo {
  if (estado.desfecho !== null) return estado;

  const turnosDecorridos = Math.max(0, acao.custoTempo);

  let sinais = aplicarEvolucaoNatural(estado.sinaisAtuais, caso.regrasDeEvolucaoNatural, turnosDecorridos);
  sinais = aplicarEfeito(sinais, acao.efeitoImediato);

  const foiIncorreta = Boolean(acao.riscoSeIncorreta);
  if (acao.riscoSeIncorreta) {
    sinais = aplicarEfeito(sinais, acao.riscoSeIncorreta);
  }

  const novoTurno = estado.turnoAtual + turnosDecorridos;
  const desfecho = verificarDesfecho(caso, sinais, novoTurno);

  return {
    sinaisAtuais: sinais,
    turnoAtual: novoTurno,
    log: [
      ...estado.log,
      {
        turno: novoTurno,
        acaoId: acao.id,
        acaoLabel: acao.label,
        foiIncorreta,
        sinaisAposAcao: sinais,
        resultadoTexto: acao.resultadoTexto,
      },
    ],
    desfecho,
    acoesJaUsadas: new Set(estado.acoesJaUsadas).add(acao.id),
  };
}
