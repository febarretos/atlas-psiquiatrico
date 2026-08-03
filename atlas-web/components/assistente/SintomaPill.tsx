"use client";

import type { EstadoSintoma } from "../../lib/assistenteScoring";

interface SintomaPillProps {
  rotulo: string;
  estado?: EstadoSintoma;
  onMarcar: (estado: EstadoSintoma) => void;
}

// Pílula de duas zonas: clicar no texto marca "presente" (mantém o gesto de
// um clique já existente), clicar no ✗ marca "ausente" — sem ciclo escondido
// entre estados, os dois gestos ficam sempre visíveis e diretos.
export default function SintomaPill({ rotulo, estado, onMarcar }: SintomaPillProps) {
  return (
    <div
      className={`inline-flex items-stretch overflow-hidden rounded-full border text-sm transition-colors ${
        estado === "presente"
          ? "border-blue-500"
          : estado === "ausente"
            ? "border-red-500/60"
            : "border-slate-700"
      }`}
    >
      <button
        type="button"
        onClick={() => onMarcar("presente")}
        className={`px-4 py-2 text-left transition-colors ${
          estado === "presente"
            ? "bg-blue-500/10 text-blue-300"
            : "bg-slate-900 text-slate-300 hover:border-slate-600"
        }`}
      >
        {rotulo}
      </button>

      <button
        type="button"
        onClick={() => onMarcar("ausente")}
        title="Marcar como ausente/descartado"
        className={`border-l px-2 py-2 text-xs transition-colors ${
          estado === "ausente"
            ? "border-red-500/40 bg-red-500/10 text-red-300"
            : "border-slate-700 bg-slate-900 text-slate-500 hover:text-red-300"
        }`}
      >
        ✗
      </button>
    </div>
  );
}
