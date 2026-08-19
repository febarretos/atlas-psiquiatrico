"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import Badge from "../Badge";
import MedicamentoMiniCard from "../fluxogramas/MedicamentoMiniCard";
import MonitorFisiologico, { type PulsoAcao } from "./MonitorFisiologico";

import type {
  AcaoDisponivel,
  CasoSimuladorEmergencia,
  SinaisVitais,
} from "../../data/simulador-emergencia/types";
import { emergencias } from "../../data/emergencias";
import { medicamentos } from "../../data/medicamentos";
import {
  camposConfirmatorios,
  criarEstadoInicial,
  escolherAcao,
  estaEmAlarme,
  type EstadoJogo,
} from "../../lib/motorSimuladorEmergencia";

interface Props {
  caso: CasoSimuladorEmergencia;
}

type Severidade = "normal" | "alerta" | "critico";

const SEVERIDADE_CLASSE: Record<Severidade, string> = {
  normal: "border-ok-border bg-ok-bg text-ok",
  alerta: "border-warn-border bg-warn-bg text-warn",
  critico: "border-alert-border bg-alert-bg text-alert animate-pulse",
};

// Faixas de referência genéricas (não específicas de um caso) só pra
// colorir os cards de consciência/agitação/rigidez — FC/PA/temperatura/
// SpO2/risco agora são desenhados pelo monitor Phaser (ver
// MonitorFisiologico.tsx). A lógica de vitória/óbito de verdade está
// inteira em lib/motorSimuladorEmergencia.ts; isto aqui é puramente
// visual.
function severidadeConsciencia(v: SinaisVitais["nivelConsciencia"]): Severidade {
  if (v === "torporoso" || v === "coma") return "critico";
  if (v === "sonolento" || v === "confuso") return "alerta";
  return "normal";
}

function severidadeEscala0a10(v: number): Severidade {
  if (v >= 7) return "critico";
  if (v >= 4) return "alerta";
  return "normal";
}

const CATEGORIA_LABEL: Record<AcaoDisponivel["categoria"], string> = {
  medicacao: "Medicação",
  exame: "Exame",
  suporte: "Suporte",
  contencao: "Contenção",
  comunicacao: "Comunicação",
};

function VitalCard({
  label,
  valor,
  severidade,
}: {
  label: string;
  valor: string;
  severidade: Severidade;
}) {
  return (
    <div className={`rounded-xl border p-4 text-center ${SEVERIDADE_CLASSE[severidade]}`}>
      <div className="text-xs font-semibold uppercase tracking-wider opacity-80">{label}</div>
      <div className="mt-1 text-2xl font-bold">{valor}</div>
    </div>
  );
}

const CAMPO_LABEL: Record<string, string> = {
  frequenciaCardiaca: "Frequência cardíaca",
  "pressaoArterial.sistolica": "Pressão sistólica",
  "pressaoArterial.diastolica": "Pressão diastólica",
  temperatura: "Temperatura",
  saturacaoO2: "Saturação de O₂",
  agitacaoPsicomotora: "Agitação psicomotora",
  rigidezMuscular: "Rigidez muscular",
  riscoIminente: "Risco iminente",
  nivelConsciencia: "Nível de consciência",
};

function formatarSinal(valor: number): string {
  const arredondado = Math.round(valor * 10) / 10;
  const sinal = arredondado > 0 ? "+" : "";
  return `${sinal}${Number.isInteger(arredondado) ? arredondado : arredondado.toFixed(1)}`;
}

// Diferença entre os sinais vitais antes/depois de UM turno (evolução
// natural + efeito da ação + riscoSeIncorreta, se aplicável, já
// combinados) — usado só pra montar o resumo temporário mostrado ao
// jogador logo após clicar numa ação (TAREFA 3 do pedido original).
function calcularDiferencas(antes: SinaisVitais, depois: SinaisVitais): string[] {
  const diffs: string[] = [];
  const EPSILON = 0.05;

  const numerico = (campo: string, unidade: string, valorAntes: number, valorDepois: number) => {
    if (Math.abs(valorDepois - valorAntes) < EPSILON) return;
    diffs.push(`${CAMPO_LABEL[campo]} ${formatarSinal(valorDepois - valorAntes)}${unidade}`);
  };

  numerico("frequenciaCardiaca", " bpm", antes.frequenciaCardiaca, depois.frequenciaCardiaca);
  numerico("temperatura", "°C", antes.temperatura, depois.temperatura);
  numerico("saturacaoO2", "%", antes.saturacaoO2, depois.saturacaoO2);
  numerico("agitacaoPsicomotora", "", antes.agitacaoPsicomotora, depois.agitacaoPsicomotora);
  if (antes.rigidezMuscular !== undefined && depois.rigidezMuscular !== undefined) {
    numerico("rigidezMuscular", "", antes.rigidezMuscular, depois.rigidezMuscular);
  }
  numerico("riscoIminente", "", antes.riscoIminente, depois.riscoIminente);

  if (antes.nivelConsciencia !== depois.nivelConsciencia) {
    diffs.push(`Nível de consciência: ${antes.nivelConsciencia} → ${depois.nivelConsciencia}`);
  }

  return diffs;
}

interface ToastAcao {
  acaoLabel: string;
  mudancas: string[];
}

export default function SimuladorEmergenciaPlayer({ caso }: Props) {
  const [estado, setEstado] = useState<EstadoJogo>(() => criarEstadoInicial(caso));
  const [toast, setToast] = useState<ToastAcao | null>(null);
  const [pulso, setPulso] = useState<PulsoAcao | null>(null);
  const [mudo, setMudo] = useState(false);
  const pulsoNonceRef = useRef(0);

  useEffect(() => {
    if (!toast) return;
    const temporizador = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(temporizador);
  }, [toast]);

  const emergencia = emergencias.find((e) => e.id === caso.emergenciaBaseId);
  const sinais = estado.sinaisAtuais;
  const alarme = estaEmAlarme(caso, sinais);
  const jogoAcabou = estado.desfecho !== null;

  // Nº de vezes que cada ação já foi escolhida — usado pro contador de
  // dose em ações repetíveis (ex.: "Lorazepam — 2ª dose").
  const contagemPorAcao = useMemo(() => {
    const contagem = new Map<string, number>();
    for (const entrada of estado.log) {
      contagem.set(entrada.acaoId, (contagem.get(entrada.acaoId) ?? 0) + 1);
    }
    return contagem;
  }, [estado.log]);

  function jogar(acao: AcaoDisponivel) {
    const usada = estado.acoesJaUsadas.has(acao.id);
    if (usada && !acao.repetivel) return; // ação de uma vez só já usada — não deveria nem chegar aqui (botão desabilitado), guarda extra.

    const proximo = escolherAcao(caso, estado, acao);
    if (proximo !== estado) {
      const mudancas = calcularDiferencas(estado.sinaisAtuais, proximo.sinaisAtuais);
      setToast({ acaoLabel: acao.label, mudancas });

      const deltaRisco = proximo.sinaisAtuais.riscoIminente - estado.sinaisAtuais.riscoIminente;
      const tipo: PulsoAcao["tipo"] = deltaRisco < 0 ? "boa" : deltaRisco > 0 ? "ruim" : "neutra";
      pulsoNonceRef.current += 1;
      setPulso({ tipo, nonce: pulsoNonceRef.current });
    }
    setEstado(proximo);
  }

  function reiniciar() {
    setEstado(criarEstadoInicial(caso));
    setToast(null);
    setPulso(null);
  }

  return (
    <div>
      <div className="mb-5 rounded-lg border border-orange-200 bg-orange-50 p-4">
        <p className="text-sm font-semibold text-orange-700">
          Simulação de emergência — dramatização com base fisiológica real, não substitui
          protocolo institucional.
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-rule bg-panel p-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
          História clínica
        </div>
        <p className="text-sm leading-6 text-ink-2">{caso.historiaClinica}</p>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-rule bg-panel p-4">
        <div className="flex items-center gap-3">
          <Badge color={alarme ? "red" : "gray"}>
            {alarme ? "EM ALARME" : "monitorando"}
          </Badge>
          {emergencia && <Badge color="gray">{emergencia.nome}</Badge>}
        </div>

        <div className="text-right">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-3">
            Turno
          </div>
          <div className="text-2xl font-bold text-ink">
            {estado.turnoAtual} <span className="text-ink-3">/ {caso.turnosMaximos}</span>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="flex-shrink-0">
          <div className="mb-2 flex items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-3">Monitor</div>
            <button
              type="button"
              onClick={() => setMudo((atual) => !atual)}
              className="rounded-lg border border-rule bg-panel px-2 py-1 text-xs text-ink-2 transition-colors hover:border-accent hover:text-ink"
            >
              {mudo ? "Som desligado" : "Som ligado"}
            </button>
          </div>
          <MonitorFisiologico sinais={sinais} emAlarme={alarme} pulso={pulso} mudo={mudo} />
        </div>

        <div className="grid flex-1 grid-cols-2 gap-3 self-stretch sm:grid-cols-3 lg:grid-cols-1">
          <VitalCard
            label="Consciência"
            valor={sinais.nivelConsciencia}
            severidade={severidadeConsciencia(sinais.nivelConsciencia)}
          />
          <VitalCard
            label="Agitação"
            valor={`${sinais.agitacaoPsicomotora.toFixed(0)}/10`}
            severidade={severidadeEscala0a10(sinais.agitacaoPsicomotora)}
          />
          {sinais.rigidezMuscular !== undefined && (
            <VitalCard
              label="Rigidez muscular"
              valor={`${sinais.rigidezMuscular.toFixed(0)}/10`}
              severidade={severidadeEscala0a10(sinais.rigidezMuscular)}
            />
          )}
        </div>
      </div>

      {toast && (
        <div className="mb-6 rounded-lg border border-accent-border bg-accent-soft p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">
            {toast.acaoLabel}
          </div>
          {toast.mudancas.length > 0 ? (
            <p className="mt-1.5 text-sm text-accent">{toast.mudancas.join(" · ")}</p>
          ) : (
            <p className="mt-1.5 text-sm text-accent">Sem mudança perceptível nos sinais vitais neste turno.</p>
          )}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
        <div>
          {!jogoAcabou ? (
            <div className="rounded-xl border border-rule bg-panel p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-3">
                Conduta
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {caso.acoesDisponiveis.map((acao) => {
                  const vezesUsada = contagemPorAcao.get(acao.id) ?? 0;
                  const jaUsada = estado.acoesJaUsadas.has(acao.id);
                  const bloqueada = jaUsada && !acao.repetivel;

                  return (
                    <button
                      key={acao.id}
                      type="button"
                      disabled={bloqueada}
                      onClick={() => jogar(acao)}
                      className={`rounded-xl border p-4 text-left transition-colors ${
                        bloqueada
                          ? "cursor-not-allowed border-rule bg-hover-warm opacity-50"
                          : "border-rule bg-hover-warm hover:border-accent hover:bg-accent-soft"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-ink">
                          {acao.label}
                          {acao.repetivel && vezesUsada > 0 && (
                            <span className="ml-1.5 font-normal text-accent">
                              — {vezesUsada + 1}ª dose
                            </span>
                          )}
                        </span>
                        {acao.custoTempo > 0 && !bloqueada && (
                          <span className="whitespace-nowrap text-xs text-ink-3">
                            +{acao.custoTempo} {acao.custoTempo === 1 ? "turno" : "turnos"}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge color="gray">{CATEGORIA_LABEL[acao.categoria]}</Badge>
                        {bloqueada && <Badge color="green">✓ já feito</Badge>}
                      </div>
                      {acao.condicaoDeUso && !bloqueada && (
                        <p className="mt-2 text-xs text-ink-3">{acao.condicaoDeUso}</p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <TelaDesfecho caso={caso} estado={estado} emergenciaNome={emergencia?.nome} />
          )}

          {jogoAcabou && (
            <div className="mt-6">
              <button
                type="button"
                onClick={reiniciar}
                className="rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                ↺ Jogar de novo
              </button>
            </div>
          )}
        </div>

        <div className="rounded-xl border border-rule bg-panel p-5 lg:sticky lg:top-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-3">
            Linha do tempo
          </div>

          {estado.log.length === 0 ? (
            <p className="text-sm text-ink-3">Nenhuma conduta ainda — as ações que você tomar aparecem aqui, em ordem.</p>
          ) : (
            <ol className="max-h-[32rem] space-y-2 overflow-y-auto">
              {estado.log.map((entrada, index) => (
                <li
                  key={index}
                  className={`rounded-lg border px-3 py-2 text-sm ${
                    entrada.foiIncorreta
                      ? "border-alert-border bg-alert-bg text-alert"
                      : "border-rule bg-paper text-ink-2"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">Turno {entrada.turno}</span>
                    {entrada.foiIncorreta && <Badge color="red">inadequada</Badge>}
                  </div>
                  <p className="mt-1">{entrada.acaoLabel}</p>
                  {entrada.resultadoTexto && (
                    <p className="mt-1.5 text-xs italic text-ink-2">{entrada.resultadoTexto}</p>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

function TelaDesfecho({
  caso,
  estado,
  emergenciaNome,
}: {
  caso: CasoSimuladorEmergencia;
  estado: EstadoJogo;
  emergenciaNome: string | undefined;
}) {
  const emergencia = emergencias.find((e) => e.id === caso.emergenciaBaseId);
  const desfecho = estado.desfecho;

  const acoesIncorretasTomadas = estado.log.filter((e) => e.foiIncorreta);
  const acoesCorretasTomadas = estado.log.filter((e) => !e.foiIncorreta);

  // Ações que ajudavam de verdade (reduziam riscoIminente e não têm
  // riscoSeIncorreta) e que o jogador nunca chegou a escolher — usadas
  // só na tela de óbito/tempo esgotado, pra mostrar "o que faltou fazer".
  const idsEscolhidos = new Set(estado.log.map((e) => e.acaoId));
  const condutasNaoTomadas = caso.acoesDisponiveis.filter(
    (a) =>
      !idsEscolhidos.has(a.id) &&
      !a.riscoSeIncorreta &&
      (a.efeitoImediato.riscoIminente ?? 0) < 0
  );

  if (desfecho === "estabilizacao") {
    const confirmatorios = camposConfirmatorios(caso, estado.sinaisAtuais, "estabilizacao");

    return (
      <div className="rounded-xl border border-ok-border bg-ok-bg p-8">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-ok">
          Desfecho
        </div>
        <h2 className="text-2xl font-bold text-ink">Paciente estabilizado</h2>

        <p className="mt-4 text-sm leading-6 text-ink-2">
          Risco iminente controlado no turno {estado.turnoAtual} de {caso.turnosMaximos}
          {confirmatorios.length > 0 && (
            <> — parâmetros que confirmam a melhora: {confirmatorios.map((c) => CAMPO_LABEL[c] ?? c).join(", ")}.</>
          )}
        </p>

        <BlocoFisiopatologia emergencia={emergencia} emergenciaNome={emergenciaNome} />
        <BlocoCondutas titulo="Condutas que ajudaram" acoes={acoesCorretasTomadas} tomBom />
        {acoesIncorretasTomadas.length > 0 && (
          <BlocoCondutas
            titulo="Condutas que atrapalharam ao longo do caminho"
            acoes={acoesIncorretasTomadas}
            tomBom={false}
          />
        )}
      </div>
    );
  }

  const foiObito = desfecho === "obito";

  return (
    <div className="rounded-xl border border-alert-border bg-alert-bg p-8">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-alert">
        Desfecho
      </div>
      <h2 className="text-2xl font-bold text-ink">
        {foiObito ? "Óbito do paciente" : "Tempo esgotado sem estabilizar"}
      </h2>

      <p className="mt-4 text-sm leading-6 text-ink-2">
        {foiObito
          ? "Este é um desfecho de treino, não um julgamento — a ideia é entender exatamente o que na fisiopatologia levou até aqui, pra reconhecer o padrão na prática real."
          : "O quadro não chegou a se estabilizar dentro do prazo simulado. Veja abaixo o que teria acelerado a resposta."}
      </p>

      <BlocoFisiopatologia emergencia={emergencia} emergenciaNome={emergenciaNome} />

      {acoesIncorretasTomadas.length > 0 && (
        <BlocoCondutas
          titulo="O que piorou o quadro"
          acoes={acoesIncorretasTomadas}
          tomBom={false}
        />
      )}

      {condutasNaoTomadas.length > 0 && (
        <div className="mt-6 border-t border-alert/20 pt-6">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-2">
            A conduta correta teria incluído
          </div>
          <ul className="space-y-3">
            {condutasNaoTomadas.map((acao) => {
              const medicamento = acao.medicamentoId
                ? medicamentos.find((m) => m.id === acao.medicamentoId)
                : undefined;
              return (
                <li key={acao.id} className="rounded-lg border border-rule bg-paper p-4 text-sm text-ink-2">
                  {acao.label}
                  {medicamento && (
                    <div className="mt-3">
                      <MedicamentoMiniCard medicamento={medicamento} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function BlocoFisiopatologia({
  emergencia,
  emergenciaNome,
}: {
  emergencia: ReturnType<typeof emergencias.find>;
  emergenciaNome: string | undefined;
}) {
  return (
    <div className="mt-6 border-t border-ink/10 pt-6">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-2">
        A fisiopatologia por trás do caso
      </div>

      {emergencia ? (
        <>
          <Link
            href={`/emergencias/${emergencia.id}`}
            className="text-lg font-bold text-ink hover:text-accent"
          >
            {emergencia.nome} →
          </Link>
          <p className="mt-2 text-sm leading-6 text-ink-2">{emergencia.descricao}</p>
        </>
      ) : (
        <p className="text-sm text-ink-2">{emergenciaNome}</p>
      )}
    </div>
  );
}

function BlocoCondutas({
  titulo,
  acoes,
  tomBom,
}: {
  titulo: string;
  acoes: EstadoJogo["log"];
  tomBom: boolean;
}) {
  return (
    <div className="mt-6 border-t border-ink/10 pt-6">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-2">
        {titulo}
      </div>
      <ul className="space-y-2">
        {acoes.map((entrada, index) => (
          <li
            key={index}
            className={`rounded-lg border px-3 py-2 text-sm ${
              tomBom
                ? "border-ok-border bg-ok-bg text-ok"
                : "border-alert-border bg-alert-bg text-alert"
            }`}
          >
            Turno {entrada.turno}: {entrada.acaoLabel}
          </li>
        ))}
      </ul>
    </div>
  );
}
