"use client";

import { useState } from "react";
import Link from "next/link";

import Badge from "../Badge";
import MedicamentoMiniCard from "../fluxogramas/MedicamentoMiniCard";

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
  normal: "border-green-500/40 bg-green-500/10 text-green-300",
  alerta: "border-yellow-500/40 bg-yellow-500/10 text-yellow-300",
  critico: "border-red-500/50 bg-red-500/10 text-red-300 animate-pulse",
};

// Faixas de referência genéricas (não específicas de um caso) só pra
// colorir o monitor — a lógica de vitória/óbito de verdade está inteira
// em lib/motorSimuladorEmergencia.ts; isto aqui é puramente visual.
function severidadeFrequenciaCardiaca(v: number): Severidade {
  if (v >= 130 || v < 45) return "critico";
  if (v >= 110 || v < 55) return "alerta";
  return "normal";
}

function severidadePressao(sistolica: number): Severidade {
  if (sistolica >= 180 || sistolica < 80) return "critico";
  if (sistolica >= 150 || sistolica < 90) return "alerta";
  return "normal";
}

function severidadeTemperatura(v: number): Severidade {
  if (v >= 40) return "critico";
  if (v >= 38) return "alerta";
  return "normal";
}

function severidadeSaturacao(v: number): Severidade {
  if (v < 90) return "critico";
  if (v < 95) return "alerta";
  return "normal";
}

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
  medicacao: "💊 Medicação",
  exame: "🔬 Exame",
  suporte: "🩹 Suporte",
  contencao: "🔒 Contenção",
  comunicacao: "💬 Comunicação",
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

export default function SimuladorEmergenciaPlayer({ caso }: Props) {
  const [estado, setEstado] = useState<EstadoJogo>(() => criarEstadoInicial(caso));

  const emergencia = emergencias.find((e) => e.id === caso.emergenciaBaseId);
  const sinais = estado.sinaisAtuais;
  const alarme = estaEmAlarme(caso, sinais);
  const jogoAcabou = estado.desfecho !== null;

  function jogar(acao: AcaoDisponivel) {
    setEstado((atual) => escolherAcao(caso, atual, acao));
  }

  function reiniciar() {
    setEstado(criarEstadoInicial(caso));
  }

  return (
    <div>
      <div className="mb-5 rounded-xl border border-orange-900/50 bg-orange-500/10 p-4">
        <p className="text-sm font-semibold text-orange-300">
          🚨 Simulação de emergência — dramatização com base fisiológica real, não substitui
          protocolo institucional.
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          História clínica
        </div>
        <p className="text-sm leading-6 text-slate-300">{caso.historiaClinica}</p>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
        <div className="flex items-center gap-3">
          <Badge color={alarme ? "red" : "gray"}>
            {alarme ? "🔴 EM ALARME" : "🟢 monitorando"}
          </Badge>
          {emergencia && <Badge color="gray">{emergencia.nome}</Badge>}
        </div>

        <div className="text-right">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Turno
          </div>
          <div className="text-2xl font-bold text-white">
            {estado.turnoAtual} <span className="text-slate-500">/ {caso.turnosMaximos}</span>
          </div>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <VitalCard
          label="FC"
          valor={`${Math.round(sinais.frequenciaCardiaca)} bpm`}
          severidade={severidadeFrequenciaCardiaca(sinais.frequenciaCardiaca)}
        />
        <VitalCard
          label="PA"
          valor={`${Math.round(sinais.pressaoArterial.sistolica)}/${Math.round(
            sinais.pressaoArterial.diastolica
          )}`}
          severidade={severidadePressao(sinais.pressaoArterial.sistolica)}
        />
        <VitalCard
          label="Temperatura"
          valor={`${sinais.temperatura.toFixed(1)}°C`}
          severidade={severidadeTemperatura(sinais.temperatura)}
        />
        <VitalCard
          label="SatO₂"
          valor={`${Math.round(sinais.saturacaoO2)}%`}
          severidade={severidadeSaturacao(sinais.saturacaoO2)}
        />
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
        <VitalCard
          label="Risco iminente"
          valor={`${sinais.riscoIminente.toFixed(0)}/10`}
          severidade={severidadeEscala0a10(sinais.riscoIminente)}
        />
      </div>

      {!jogoAcabou ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Conduta
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {caso.acoesDisponiveis.map((acao) => (
              <button
                key={acao.id}
                type="button"
                onClick={() => jogar(acao)}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-left transition-colors hover:border-blue-500 hover:bg-blue-500/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-white">{acao.label}</span>
                  {acao.custoTempo > 0 && (
                    <span className="whitespace-nowrap text-xs text-slate-500">
                      +{acao.custoTempo} {acao.custoTempo === 1 ? "turno" : "turnos"}
                    </span>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <Badge color="gray">{CATEGORIA_LABEL[acao.categoria]}</Badge>
                </div>
                {acao.condicaoDeUso && (
                  <p className="mt-2 text-xs text-slate-500">{acao.condicaoDeUso}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <TelaDesfecho caso={caso} estado={estado} emergenciaNome={emergencia?.nome} />
      )}

      {estado.log.length > 0 && (
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Histórico de condutas
          </div>

          <ol className="space-y-2">
            {estado.log.map((entrada, index) => (
              <li
                key={index}
                className={`rounded-lg border px-3 py-2 text-sm ${
                  entrada.foiIncorreta
                    ? "border-red-500/30 bg-red-500/5 text-red-300"
                    : "border-slate-800 bg-slate-950 text-slate-300"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span>
                    Turno {entrada.turno}: {entrada.acaoLabel}
                  </span>
                  {entrada.foiIncorreta && <Badge color="red">conduta inadequada</Badge>}
                </div>
                {entrada.resultadoTexto && (
                  <p className="mt-1.5 text-xs italic text-slate-400">{entrada.resultadoTexto}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}

      {jogoAcabou && (
        <div className="mt-6">
          <button
            type="button"
            onClick={reiniciar}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
          >
            ↺ Jogar de novo
          </button>
        </div>
      )}
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
      <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-8">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-400">
          Desfecho
        </div>
        <h2 className="text-2xl font-bold text-white">✅ Paciente estabilizado</h2>

        <p className="mt-4 text-sm leading-6 text-slate-300">
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
    <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-8">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400">
        Desfecho
      </div>
      <h2 className="text-2xl font-bold text-white">
        {foiObito ? "☠️ Óbito do paciente" : "⏱️ Tempo esgotado sem estabilizar"}
      </h2>

      <p className="mt-4 text-sm leading-6 text-slate-300">
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
        <div className="mt-6 border-t border-red-500/20 pt-6">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            A conduta correta teria incluído
          </div>
          <ul className="space-y-3">
            {condutasNaoTomadas.map((acao) => {
              const medicamento = acao.medicamentoId
                ? medicamentos.find((m) => m.id === acao.medicamentoId)
                : undefined;
              return (
                <li key={acao.id} className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
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
    <div className="mt-6 border-t border-white/10 pt-6">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        A fisiopatologia por trás do caso
      </div>

      {emergencia ? (
        <>
          <Link
            href={`/emergencias/${emergencia.id}`}
            className="text-lg font-bold text-white hover:text-blue-400"
          >
            {emergencia.nome} →
          </Link>
          <p className="mt-2 text-sm leading-6 text-slate-300">{emergencia.descricao}</p>
        </>
      ) : (
        <p className="text-sm text-slate-400">{emergenciaNome}</p>
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
    <div className="mt-6 border-t border-white/10 pt-6">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {titulo}
      </div>
      <ul className="space-y-2">
        {acoes.map((entrada, index) => (
          <li
            key={index}
            className={`rounded-lg border px-3 py-2 text-sm ${
              tomBom
                ? "border-green-500/30 bg-green-500/5 text-green-200"
                : "border-red-500/30 bg-red-500/5 text-red-200"
            }`}
          >
            Turno {entrada.turno}: {entrada.acaoLabel}
          </li>
        ))}
      </ul>
    </div>
  );
}
