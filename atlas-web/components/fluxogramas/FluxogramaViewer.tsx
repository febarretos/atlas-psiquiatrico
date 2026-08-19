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
    borda: "border-alert-border",
    fundo: "bg-alert-bg",
    titulo: "text-alert",
    rotulo: "Alerta",
  },
  atencao: {
    borda: "border-warn-border",
    fundo: "bg-warn-bg",
    titulo: "text-warn",
    rotulo: "Atenção",
  },
  rotina: {
    borda: "border-ok-border",
    fundo: "bg-ok-bg",
    titulo: "text-ok",
    rotulo: "Conduta de rotina",
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
      <div className="rounded-xl border border-alert-border bg-alert-bg p-6 text-alert">
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-accent-border bg-accent-soft px-5 py-4 text-sm text-accent">
          <span>
            Você entrou direto neste passo, a partir do resultado de uma
            escala — as perguntas de triagem anteriores não foram
            percorridas.
          </span>

          <button
            type="button"
            onClick={reiniciar}
            className="whitespace-nowrap font-semibold text-accent-hover underline-offset-2 hover:underline"
          >
            Ver fluxograma completo desde o início
          </button>
        </div>
      )}

      {caminhoPercorrido.length > 0 && (
        <div className="mb-6 rounded-xl border border-rule bg-panel p-5">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-3">
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
                  className="text-sm text-ink-2"
                >
                  <span className="text-ink-3">{index + 1}.</span>{" "}
                  {node.texto}
                  {passo.opcaoEscolhida && (
                    <>
                      {" "}
                      <span className="text-accent">
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
        <div className="rounded-xl border border-rule bg-panel p-8">
          <h2 className="text-xl font-semibold text-ink">
            {nodeAtual.texto}
          </h2>

          {nodeAtual.detalhe && (
            <p className="mt-3 text-sm leading-6 text-ink-2">
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
                className="rounded-lg border border-rule bg-paper px-5 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
              >
                {opcao.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`rounded-xl border p-8 ${nivelEstilo[nodeAtual.nivel ?? "rotina"].borda} ${
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

          <h2 className="text-xl font-semibold text-ink">
            {nodeAtual.texto}
          </h2>

          {nodeAtual.detalhe && (
            <p className="mt-3 text-sm leading-6 text-ink-2">
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
                  className="rounded-lg border border-rule bg-paper px-5 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
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
          className="rounded-lg border border-rule bg-panel px-5 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:border-accent-border hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Voltar
        </button>

        <button
          type="button"
          onClick={reiniciar}
          className="rounded-lg border border-rule bg-panel px-5 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
        >
          ↺ Reiniciar
        </button>
      </div>
    </div>
  );
}
