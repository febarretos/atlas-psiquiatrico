"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "../Badge";
import BotaoCopiarProntuario from "../BotaoCopiarProntuario";
import MedicamentoMiniCard from "../fluxogramas/MedicamentoMiniCard";

import type { CasoSimulador, NoSimulador, OpcaoSimulador } from "../../data/simulador/types";
import { diagnosticos } from "../../data/diagnosticos";
import { medicamentos } from "../../data/medicamentos";
import { gerarTextoSimulador } from "../../lib/gerarTextoProntuario";

interface Props {
  caso: CasoSimulador;
}

interface PassoHistorico {
  noId: string;
  opcaoEscolhida?: OpcaoSimulador;
}

const TURNOS: NoSimulador["turno"][] = ["entrevista", "exames", "conduta", "evolucao", "desfecho"];

const TURNO_LABEL: Record<NoSimulador["turno"], string> = {
  entrevista: "Entrevista",
  exames: "Exames",
  conduta: "Conduta",
  evolucao: "Evolução",
  desfecho: "Desfecho",
};

const QUALIDADE_ESTILO: Record<OpcaoSimulador["qualidadeDecisao"], { label: string; classe: string }> = {
  ideal: { label: "Ideal", classe: "border-ok-border bg-ok-bg text-ok" },
  aceitavel: { label: "Aceitável", classe: "border-warn-border bg-warn-bg text-warn" },
  problematica: { label: "Problemática", classe: "border-alert-border bg-alert-bg text-alert" },
};

// Feedback construtivo baseado na mistura de qualidadeDecisao das
// escolhas do caminho — nunca acusatório, sempre apontando o próximo
// passo (revisar a etapa específica).
function gerarFeedback(opcoesEscolhidas: OpcaoSimulador[]): string {
  if (opcoesEscolhidas.length === 0) return "";

  const total = opcoesEscolhidas.length;
  const ideais = opcoesEscolhidas.filter((o) => o.qualidadeDecisao === "ideal").length;
  const problematicas = opcoesEscolhidas.filter((o) => o.qualidadeDecisao === "problematica").length;

  if (problematicas === 0 && ideais === total) {
    return "Conduta exemplar: todas as decisões tomadas ao longo do caso foram as mais adequadas clinicamente. Esse é o padrão a manter na prática real.";
  }

  if (problematicas === 0) {
    return "Boa condução do caso, sem decisões problemáticas — algumas escolhas foram aceitáveis mas não as ideais. Vale revisar essas etapas específicas abaixo pra entender o que teria sido ainda melhor.";
  }

  if (problematicas === 1) {
    return "Condução majoritariamente adequada, com uma decisão problemática ao longo do caminho — revise essa etapa abaixo com atenção: entender o motivo evita repetir esse tipo de escolha na prática real.";
  }

  return `Foram ${problematicas} decisões problemáticas ao longo deste caso — vale revisar cada uma delas abaixo com calma. Errar num caso simulado é exatamente pra isso: identificar lacunas antes que apareçam com um paciente de verdade.`;
}

export default function SimuladorPlayer({ caso }: Props) {
  const [historico, setHistorico] = useState<PassoHistorico[]>([{ noId: caso.noInicialId }]);

  const nosPorId = useMemo(() => {
    const mapa = new Map<string, NoSimulador>();
    for (const no of caso.nos) mapa.set(no.id, no);
    return mapa;
  }, [caso]);

  const passoAtual = historico[historico.length - 1];
  const noAtual = nosPorId.get(passoAtual.noId);

  function escolherOpcao(opcao: OpcaoSimulador) {
    setHistorico((atual) => {
      const novo = [...atual];
      novo[novo.length - 1] = { ...novo[novo.length - 1], opcaoEscolhida: opcao };
      novo.push({ noId: opcao.proximoNoId });
      return novo;
    });
  }

  function reiniciar() {
    setHistorico([{ noId: caso.noInicialId }]);
  }

  if (!noAtual) {
    return (
      <div className="rounded-xl border border-alert-border bg-alert-bg p-6 text-alert">
        Nó do caso não encontrado. Reinicie a simulação.
      </div>
    );
  }

  const caminhoPercorrido = historico.slice(0, -1);
  const opcoesEscolhidas = caminhoPercorrido
    .map((p) => p.opcaoEscolhida)
    .filter((o): o is OpcaoSimulador => Boolean(o));

  const indiceTurnoAtual = TURNOS.indexOf(noAtual.turno);
  const diagnosticoReal = diagnosticos.find((d) => d.id === caso.diagnosticoRealId);

  return (
    <div>
      <div className="mb-5 rounded-lg border border-purple-200 bg-purple-50 p-4">
        <p className="text-sm font-semibold text-purple-700">
          Simulação lúdica com fundamento clínico real — não substitui julgamento profissional.
        </p>
      </div>

      <div className="mb-6 flex items-center gap-2">
        {TURNOS.map((turno, i) => (
          <div key={turno} className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className={`h-1.5 w-full rounded-full ${
                i <= indiceTurnoAtual ? "bg-accent" : "bg-hover-warm"
              }`}
            />
            <span
              className={`text-[10px] font-semibold uppercase tracking-wider ${
                i <= indiceTurnoAtual ? "text-accent" : "text-ink-4"
              }`}
            >
              {TURNO_LABEL[turno]}
            </span>
          </div>
        ))}
      </div>

      {caminhoPercorrido.length > 0 && (
        <div className="mb-6 max-h-80 overflow-y-auto rounded-xl border border-rule bg-panel p-5">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-3">
            Histórico
          </div>

          <ol className="space-y-4">
            {caminhoPercorrido.map((passo, index) => {
              const no = nosPorId.get(passo.noId);
              if (!no) return null;

              return (
                <li key={`${passo.noId}-${index}`} className="text-sm">
                  <p className="text-ink-2">{no.narrativa}</p>

                  {passo.opcaoEscolhida && (
                    <>
                      <p className="mt-2 font-medium text-accent">
                        → {passo.opcaoEscolhida.texto}
                      </p>
                      <p className="mt-1 italic text-ink-3">
                        {passo.opcaoEscolhida.consequencia}
                      </p>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}

      <div className="rounded-xl border border-rule bg-panel p-8">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
          {TURNO_LABEL[noAtual.turno]}
        </div>

        <p className="whitespace-pre-line text-lg leading-7 text-ink-2">{noAtual.narrativa}</p>

        {noAtual.turno !== "desfecho" ? (
          <div className="mt-6 flex flex-col gap-3">
            {noAtual.opcoes.map((opcao) => (
              <button
                key={opcao.texto}
                type="button"
                onClick={() => escolherOpcao(opcao)}
                className="rounded-xl border border-rule bg-hover-warm px-5 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
              >
                {opcao.texto}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-6 border-t border-rule pt-6">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
              Diagnóstico real
            </div>

            {diagnosticoReal ? (
              <Link
                href={`/diagnosticos/${diagnosticoReal.id}`}
                className="text-xl font-bold text-ink hover:text-accent"
              >
                {diagnosticoReal.nome} →
              </Link>
            ) : (
              <h3 className="text-xl font-bold text-ink">{caso.diagnosticoRealId}</h3>
            )}

            {opcoesEscolhidas.length > 0 && (
              <p className="mt-5 text-sm leading-6 text-ink-2">{gerarFeedback(opcoesEscolhidas)}</p>
            )}

            {opcoesEscolhidas.length > 0 && (
              <div className="mt-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
                  Suas decisões neste caso
                </div>

                <ul className="flex flex-col gap-2">
                  {opcoesEscolhidas.map((opcao, index) => {
                    const estilo = QUALIDADE_ESTILO[opcao.qualidadeDecisao];
                    const medicamento = opcao.medicamentoId
                      ? medicamentos.find((m) => m.id === opcao.medicamentoId)
                      : undefined;

                    return (
                      <li
                        key={index}
                        className={`rounded-xl border p-4 text-sm ${estilo.classe}`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-medium">{opcao.texto}</span>
                          <Badge color="gray">{estilo.label}</Badge>
                        </div>

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

            {caso.inspiracaoExterna && (
              <p className="mt-5 text-xs text-ink-3">
                Inspirado em:{" "}
                <a
                  href={caso.inspiracaoExterna.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-ink-2"
                >
                  {caso.inspiracaoExterna.titulo}
                </a>
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {diagnosticoReal && (
                <BotaoCopiarProntuario
                  texto={gerarTextoSimulador(caso, diagnosticoReal, opcoesEscolhidas)}
                />
              )}

              <button
                type="button"
                onClick={reiniciar}
                className="rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                ↺ Jogar de novo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
