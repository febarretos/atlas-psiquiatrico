import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import FluxogramaViewer from "../../../components/fluxogramas/FluxogramaViewer";

import { fluxogramas } from "../../../data/fluxogramas";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function FluxogramaPage({ params }: Props) {
  const { id } = await params;

  const fluxograma = fluxogramas.find(
    (f) => f.id === decodeURIComponent(id)
  );

  if (!fluxograma) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🌳 {fluxograma.titulo}
        </h1>

        <div className="mt-4">
          <Badge color="blue">{fluxograma.categoria}</Badge>
        </div>

        <p className="mt-4 text-slate-400">{fluxograma.descricao}</p>
      </div>

      <FluxogramaViewer fluxograma={fluxograma} />

      {fluxograma.referencias && fluxograma.referencias.length > 0 && (
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Referências
          </div>

          <ul className="space-y-2 text-sm text-slate-400">
            {fluxograma.referencias.map((referencia) => (
              <li key={referencia}>{referencia}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
