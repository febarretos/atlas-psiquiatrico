import Link from "next/link";

import { Diagnostico } from "../../data/diagnosticos/types";

interface Props {
  diagnostico: Diagnostico;
}

// Card compacto de diagnóstico para uso dentro de um node de fluxograma
// — mostra o essencial (nome, categoria, CID) e linka pra página
// completa. Rota de diagnóstico é por `id` (ver app/diagnosticos/[id]/page.tsx).
export default function DiagnosticoMiniCard({ diagnostico }: Props) {
  return (
    <Link
      href={`/diagnosticos/${encodeURIComponent(diagnostico.id)}`}
      className="group block rounded-lg border border-rule bg-paper p-4 transition-colors hover:border-accent"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-ink group-hover:text-accent">
          {diagnostico.nome}
        </h4>

        <span className="whitespace-nowrap text-xs text-ink-3">
          {diagnostico.cid11 ?? diagnostico.cid10 ?? diagnostico.categoria}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-ink-2">{diagnostico.descricao}</p>
    </Link>
  );
}
