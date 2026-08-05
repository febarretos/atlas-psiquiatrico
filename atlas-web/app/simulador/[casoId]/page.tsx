import { notFound } from "next/navigation";

import SimuladorPlayer from "../../../components/simulador/SimuladorPlayer";

import { casosSimulador } from "../../../data/simulador";

interface Props {
  params: Promise<{
    casoId: string;
  }>;
}

export default async function SimuladorCasoPage({ params }: Props) {
  const { casoId } = await params;

  const caso = casosSimulador.find((c) => c.id === decodeURIComponent(casoId));

  if (!caso) {
    notFound();
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">🎮 {caso.tituloAnedotico}</h1>
        </div>

        <SimuladorPlayer key={caso.id} caso={caso} />
      </div>
    </main>
  );
}
