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
      className="group block rounded-lg border border-rule bg-paper p-4 transition-colors hover:border-accent"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-ink group-hover:text-accent">
          {escala.sigla}
        </h4>

        <span className="whitespace-nowrap text-xs text-ink-3">
          {escala.categoria}
        </span>
      </div>

      <p className="mt-2 text-sm text-ink-2">{escala.nome}</p>
    </Link>
  );
}
