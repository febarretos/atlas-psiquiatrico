"use client";

import { useMemo, useState } from "react";

import { Fluxograma, FluxogramaNode } from "../../data/fluxogramas/types";
import { medicamentos } from "../../data/medicamentos";
import { escalas } from "../../data/escalas";
import { diagnosticos } from "../../data/diagnosticos";
import MedicamentoMiniCard from "./MedicamentoMiniCard";
import EscalaMiniCard from "./EscalaMiniCard";
import DiagnosticoMiniCard from "./DiagnosticoMiniCard";
import CondutaProntuarioPanel from "./CondutaProntuarioPanel";
import { limparRotuloParaTrilha } from "../../lib/gerarTextoProntuario";

interface FluxogramaViewerProps {
  fluxograma: Fluxograma;
  // Node de entrada, quando se chega ao fluxograma já num passo específico
  // (ex.: link "ver conduta" a partir do resultado de uma escala de risco).
  // "Reiniciar" sempre volta pro nodeInicialId real do algoritmo, não pra
  // este override — o atalho é só um ponto de entrada, não redefine o começo.
  nodeInicialId?: string;
}

interface PassoHistorico {
  nodeId: string;
  opcaoEscolhida?: string;
}

const nivelEstilo: Record<
  NonNullable<FluxogramaNode["nivel"]>,
  { borda: string; fundo: string; titulo: string; rotulo: string }
> = {
  alerta: {
    borda: "border-red-500/50",
    fundo: "bg-red-500/10",
    titulo: "text-red-300",
    rotulo: "🚨 Alerta",
  },
  atencao: {
    borda: "border-yellow-500/50",
    fundo: "bg-yellow-500/10",
    titulo: "text-yellow-300",
    rotulo: "⚠️ Atenção",
  },
  rotina: {
    borda: "border-blue-500/50",
    fundo: "bg-blue-500/10",
    titulo: "text-blue-300",
    rotulo: "✅ Conduta de rotina",
  },
};

export default function FluxogramaViewer({
  fluxograma,
  nodeInicialId,
}: FluxogramaViewerProps) {
  const [historico, setHistorico] = useState<PassoHistorico[]>([
    { nodeId: nodeInicialId ?? fluxograma.nodeInicialId },
  ]);

  const entrouPorAtalho = Boolean(
    nodeInicialId && nodeInicialId !== fluxograma.nodeInicialId
  );

  const nodesPorId = useMemo(() => {
    const mapa = new Map<string, FluxogramaNode>();

    for (const node of fluxograma.nodes) {
      mapa.set(node.id, node);
    }

    return mapa;
  }, [fluxograma]);

  const passoAtual = historico[historico.length - 1];
  const nodeAtual = nodesPorId.get(passoAtual.nodeId);

  function escolherOpcao(label: string, proximoNodeId: string) {
    setHistorico((atual) => {
      const novo = [...atual];
      novo[novo.length - 1] = { ...novo[novo.length - 1], opcaoEscolhida: label };
      novo.push({ nodeId: proximoNodeId });
      return novo;
    });
  }

  function voltar() {
    setHistorico((atual) => {
      if (atual.length <= 1) {
        return atual;
      }

      return atual.slice(0, -1).map((passo, index, arr) =>
        index === arr.length - 1 ? { nodeId: passo.nodeId } : passo
      );
    });
  }

  function reiniciar() {
    setHistorico([{ nodeId: fluxograma.nodeInicialId }]);
  }

  if (!nodeAtual) {
    return (
      <div className="rounded-2xl border border-red-500/50 bg-red-500/10 p-6 text-red-300">
        Nó do fluxograma não encontrado. Reinicie o algoritmo.
      </div>
    );
  }

  const caminhoPercorrido = historico.slice(0, -1);

  const medicamentosDoNode = (nodeAtual.medicamentosRelacionados ?? [])
    .map((id) => medicamentos.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const escalasDoNode = (nodeAtual.escalasRelacionadas ?? [])
    .map((id) => escalas.find((e) => e.id === id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  const diagnosticosDoNode = (nodeAtual.diagnosticosRelacionados ?? [])
    .map((id) => diagnosticos.find((d) => d.id === id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const trilhaDeDecisoes = caminhoPercorrido
    .map((passo) => passo.opcaoEscolhida)
    .filter((opcao): opcao is string => Boolean(opcao))
    .map(limparRotuloParaTrilha);

  return (
    <div>
      {entrouPorAtalho && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-500/40 bg-blue-500/10 px-5 py-4 text-sm text-blue-200">
          <span>
            Você entrou direto neste passo, a partir do resultado de uma
            escala — as perguntas de triagem anteriores não foram
            percorridas.
          </span>

          <button
            type="button"
            onClick={reiniciar}
            className="whitespace-nowrap font-semibold text-blue-100 underline-offset-2 hover:underline"
          >
            Ver fluxograma completo desde o início
          </button>
        </div>
      )}

      {caminhoPercorrido.length > 0 && (
        <div className="mb-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Caminho percorrido
          </div>

          <ol className="space-y-2">
            {caminhoPercorrido.map((passo, index) => {
              const node = nodesPorId.get(passo.nodeId);

              if (!node) {
                return null;
              }

              return (
                <li
                  key={`${passo.nodeId}-${index}`}
                  className="text-sm text-slate-400"
                >
                  <span className="text-slate-500">{index + 1}.</span>{" "}
                  {node.texto}
                  {passo.opcaoEscolhida && (
                    <>
                      {" "}
                      <span className="text-blue-400">
                        → {passo.opcaoEscolhida}
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {nodeAtual.tipo === "pergunta" ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-xl font-semibold text-white">
            {nodeAtual.texto}
          </h2>

          {nodeAtual.detalhe && (
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {nodeAtual.detalhe}
            </p>
          )}

          {escalasDoNode.length > 0 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {escalasDoNode.map((e) => (
                <EscalaMiniCard key={e.id} escala={e} />
              ))}
            </div>
          )}

          {diagnosticosDoNode.length > 0 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {diagnosticosDoNode.map((d) => (
                <DiagnosticoMiniCard key={d.id} diagnostico={d} />
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {nodeAtual.opcoes?.map((opcao) => (
              <button
                key={opcao.label}
                type="button"
                onClick={() => escolherOpcao(opcao.label, opcao.proximoNodeId)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-left text-sm font-medium text-white transition-colors hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-300"
              >
                {opcao.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`rounded-2xl border p-8 ${nivelEstilo[nodeAtual.nivel ?? "rotina"].borda} ${
            nivelEstilo[nodeAtual.nivel ?? "rotina"].fundo
          }`}
        >
          <div
            className={`mb-3 text-xs font-semibold uppercase tracking-wider ${
              nivelEstilo[nodeAtual.nivel ?? "rotina"].titulo
            }`}
          >
            {nivelEstilo[nodeAtual.nivel ?? "rotina"].rotulo}
          </div>

          <h2 className="text-xl font-semibold text-white">
            {nodeAtual.texto}
          </h2>

          {nodeAtual.detalhe && (
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {nodeAtual.detalhe}
            </p>
          )}

          {medicamentosDoNode.length > 0 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {medicamentosDoNode.map((m) => (
                <MedicamentoMiniCard key={m.id} medicamento={m} />
              ))}
            </div>
          )}

          {escalasDoNode.length > 0 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {escalasDoNode.map((e) => (
                <EscalaMiniCard key={e.id} escala={e} />
              ))}
            </div>
          )}

          {diagnosticosDoNode.length > 0 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {diagnosticosDoNode.map((d) => (
                <DiagnosticoMiniCard key={d.id} diagnostico={d} />
              ))}
            </div>
          )}

          <div className="mt-5">
            <CondutaProntuarioPanel
              key={nodeAtual.id}
              node={nodeAtual}
              trilhaDeDecisoes={trilhaDeDecisoes}
            />
          </div>

          {nodeAtual.opcoes && nodeAtual.opcoes.length > 0 && (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {nodeAtual.opcoes.map((opcao) => (
                <button
                  key={opcao.label}
                  type="button"
                  onClick={() => escolherOpcao(opcao.label, opcao.proximoNodeId)}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-left text-sm font-medium text-white transition-colors hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  {opcao.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={voltar}
          disabled={historico.length <= 1}
          className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-slate-600 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Voltar
        </button>

        <button
          type="button"
          onClick={reiniciar}
          className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-blue-500 hover:text-blue-300"
        >
          ↺ Reiniciar
        </button>
      </div>
    </div>
  );
}
