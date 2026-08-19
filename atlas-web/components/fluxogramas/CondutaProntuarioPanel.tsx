"use client";

import { useEffect, useMemo, useState } from "react";

import BotaoCopiarProntuario from "../BotaoCopiarProntuario";

import type { FluxogramaNode } from "../../data/fluxogramas/types";
import { escalas } from "../../data/escalas";
import { gerarTextoConduta, gerarTextoTendenciaEscala } from "../../lib/gerarTextoProntuario";
import { obterHistoricoDaEscala, obterPacientes } from "../../lib/historicoEscalas";

interface Props {
  node: FluxogramaNode;
  trilhaDeDecisoes: string[];
}

// Sem `key={node.id}` no uso deste componente, o estado (aberto/texto)
// vazaria de um node de conduta pro próximo ao navegar no fluxograma —
// ver FluxogramaViewer.tsx.
export default function CondutaProntuarioPanel({ node, trilhaDeDecisoes }: Props) {
  const [aberto, setAberto] = useState(false);
  const [texto, setTexto] = useState(() => gerarTextoConduta(node, trilhaDeDecisoes));

  const escalasDoNode = useMemo(
    () =>
      (node.escalasRelacionadas ?? [])
        .map((id) => escalas.find((e) => e.id === id))
        .filter((e): e is NonNullable<typeof e> => Boolean(e)),
    [node.escalasRelacionadas]
  );

  const [escalaSelecionadaId, setEscalaSelecionadaId] = useState(
    () => escalasDoNode[0]?.id ?? ""
  );
  const [pacientes, setPacientes] = useState<string[]>([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState("");
  const [entradasDoPaciente, setEntradasDoPaciente] = useState(0);

  // localStorage só existe no cliente: sincroniza depois da montagem, pro
  // primeiro render do cliente bater com o do servidor (mesmo motivo do
  // useEffect em HistoricoEscala.tsx).
  useEffect(() => {
    if (!escalaSelecionadaId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
      setPacientes([]);
      setPacienteSelecionado("");
      return;
    }

    const lista = obterPacientes(escalaSelecionadaId);
    setPacientes(lista);
    setPacienteSelecionado((atual) => (atual && lista.includes(atual) ? atual : lista[0] ?? ""));
  }, [escalaSelecionadaId]);

  useEffect(() => {
    if (!escalaSelecionadaId || !pacienteSelecionado) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
      setEntradasDoPaciente(0);
      return;
    }

    const quantidade = obterHistoricoDaEscala(escalaSelecionadaId).filter(
      (entrada) => entrada.pacienteLabel === pacienteSelecionado
    ).length;

    setEntradasDoPaciente(quantidade);
  }, [escalaSelecionadaId, pacienteSelecionado]);

  function adicionarTendencia() {
    const escala = escalasDoNode.find((e) => e.id === escalaSelecionadaId);
    if (!escala || !pacienteSelecionado) return;

    const entradas = obterHistoricoDaEscala(escalaSelecionadaId).filter(
      (entrada) => entrada.pacienteLabel === pacienteSelecionado
    );
    const tendencia = gerarTextoTendenciaEscala(escala.sigla, entradas);
    if (!tendencia) return;

    setTexto((atual) => `${atual} ${tendencia}`);
  }

  if (!aberto) {
    return (
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="rounded-lg border border-rule bg-panel px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
      >
        Copiar pro prontuário
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-rule bg-panel p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
        Texto (revise antes de copiar)
      </p>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={3}
        className="w-full rounded-lg border border-rule bg-paper p-3 text-[16px] text-ink outline-none focus:border-accent"
      />

      {escalasDoNode.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-rule-soft pt-3">
          {escalasDoNode.length > 1 && (
            <select
              value={escalaSelecionadaId}
              onChange={(e) => setEscalaSelecionadaId(e.target.value)}
              className="rounded-lg border border-rule bg-paper px-3 py-2 text-[16px] text-ink outline-none focus:border-accent"
            >
              {escalasDoNode.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.sigla}
                </option>
              ))}
            </select>
          )}

          {pacientes.length === 0 ? (
            <span className="text-xs text-ink-3">
              Nenhum histórico salvo ainda pra{" "}
              {escalasDoNode.find((e) => e.id === escalaSelecionadaId)?.sigla} — sem tendência
              pra adicionar.
            </span>
          ) : (
            <>
              <select
                value={pacienteSelecionado}
                onChange={(e) => setPacienteSelecionado(e.target.value)}
                className="rounded-lg border border-rule bg-paper px-3 py-2 text-[16px] text-ink outline-none focus:border-accent"
              >
                {pacientes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={adicionarTendencia}
                disabled={entradasDoPaciente < 2}
                title={
                  entradasDoPaciente < 2
                    ? "Precisa de pelo menos 2 aplicações salvas para este paciente"
                    : undefined
                }
                className="rounded-lg border border-rule bg-paper px-3 py-2 text-xs font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                + Adicionar tendência da escala
              </button>
            </>
          )}
        </div>
      )}

      <div className="mt-3 flex items-center gap-3">
        <BotaoCopiarProntuario texto={texto} />

        <button
          type="button"
          onClick={() => setAberto(false)}
          className="text-sm text-ink-2 hover:text-ink"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
