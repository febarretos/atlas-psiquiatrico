import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import FluxogramaViewer from "../../../components/fluxogramas/FluxogramaViewer";

import { fluxogramas } from "../../../data/fluxogramas";

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    no?: string;
  }>;
}

export default async function FluxogramaPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { no } = await searchParams;

  const fluxograma = fluxogramas.find(
    (f) => f.id === decodeURIComponent(id)
  );

  if (!fluxograma) {
    notFound();
  }

  const nodeInicialId = fluxograma.nodes.some((n) => n.id === no)
    ? no
    : undefined;

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">
          {fluxograma.titulo}
        </h1>

        <div className="mt-4">
          <Badge color="blue">{fluxograma.categoria}</Badge>
        </div>

        <p className="mt-4 text-ink-2">{fluxograma.descricao}</p>
      </div>

      <FluxogramaViewer fluxograma={fluxograma} nodeInicialId={nodeInicialId} />

      {fluxograma.referencias && fluxograma.referencias.length > 0 && (
        <div className="mt-10 rounded-xl border border-rule bg-panel p-6">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-3">
            Referências
          </div>

          <ul className="space-y-2 text-sm text-ink-2">
            {fluxograma.referencias.map((referencia) => (
              <li key={referencia}>{referencia}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
