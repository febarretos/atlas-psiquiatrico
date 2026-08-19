import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import CasoClinicoPlayer from "../../../components/CasoClinicoPlayer";

import { casosClinicos } from "../../../data/casos-clinicos";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CasoClinicoDetalhe({
  params,
}: Props) {
  const { id } = await params;

  const caso = casosClinicos.find((c) => c.id === decodeURIComponent(id));

  if (!caso) {
    notFound();
  }

  return (
    <main className="text-ink">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 rounded-xl border border-rule bg-panel p-8">
          <h1 className="text-4xl font-bold">
            {caso.titulo}
          </h1>

          <div className="mt-5">
            <Badge color="blue">{caso.categoria}</Badge>
          </div>
        </div>

        <CasoClinicoPlayer key={caso.id} caso={caso} />
      </div>
    </main>
  );
}
