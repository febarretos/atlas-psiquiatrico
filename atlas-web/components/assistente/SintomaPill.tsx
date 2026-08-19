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
          ? "border-accent"
          : estado === "ausente"
            ? "border-alert"
            : "border-rule"
      }`}
    >
      <button
        type="button"
        onClick={() => onMarcar("presente")}
        className={`px-4 py-2 text-left transition-colors ${
          estado === "presente"
            ? "bg-accent-soft text-accent"
            : "bg-panel text-ink-2 hover:border-accent-border"
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
            ? "border-alert-border bg-alert-bg text-alert"
            : "border-rule bg-panel text-ink-3 hover:text-alert"
        }`}
      >
        ✗
      </button>
    </div>
  );
}
