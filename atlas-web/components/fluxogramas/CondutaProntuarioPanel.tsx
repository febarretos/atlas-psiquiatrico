"use client";

import { useState } from "react";

import BotaoCopiarProntuario from "../BotaoCopiarProntuario";

import type { FluxogramaNode } from "../../data/fluxogramas/types";
import { gerarTextoConduta } from "../../lib/gerarTextoProntuario";

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

  if (!aberto) {
    return (
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
      >
        📋 Copiar pro prontuário
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Texto (revise antes de copiar)
      </p>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={3}
        className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-sm text-white outline-none focus:border-blue-500"
      />

      <div className="mt-3 flex items-center gap-3">
        <BotaoCopiarProntuario texto={texto} />

        <button
          type="button"
          onClick={() => setAberto(false)}
          className="text-sm text-slate-400 hover:text-white"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
