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
      className="group block rounded-xl border border-slate-700 bg-slate-950 p-4 transition-colors hover:border-blue-500"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-white group-hover:text-blue-400">
          🧠 {diagnostico.nome}
        </h4>

        <span className="whitespace-nowrap text-xs text-slate-500">
          {diagnostico.cid11 ?? diagnostico.cid10 ?? diagnostico.categoria}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-slate-400">{diagnostico.descricao}</p>
    </Link>
  );
}
