import Link from "next/link";

import { Escala } from "../../data/escalas/types";

interface Props {
  escala: Escala;
}

// Card compacto de escala para uso dentro de um node de fluxograma —
// mostra só o essencial (sigla, nome, categoria) e linka para a escala
// completa (com aplicação e cálculo automático). Rota de escala é por
// `id` (ver app/escalas/[id]/page.tsx), diferente de medicamentos.
export default function EscalaMiniCard({ escala }: Props) {
  return (
    <Link
      href={`/escalas/${encodeURIComponent(escala.id)}`}
      className="group block rounded-xl border border-slate-700 bg-slate-950 p-4 transition-colors hover:border-blue-500"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-white group-hover:text-blue-400">
          📋 {escala.sigla}
        </h4>

        <span className="whitespace-nowrap text-xs text-slate-500">
          {escala.categoria}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-400">{escala.nome}</p>
    </Link>
  );
}
