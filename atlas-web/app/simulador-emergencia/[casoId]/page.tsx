import { notFound } from "next/navigation";

import SimuladorEmergenciaPlayer from "../../../components/simulador-emergencia/SimuladorEmergenciaPlayer";

import { casosSimuladorEmergencia } from "../../../data/simulador-emergencia";

interface Props {
  params: Promise<{
    casoId: string;
  }>;
}

export default async function SimuladorEmergenciaCasoPage({ params }: Props) {
  const { casoId } = await params;

  const caso = casosSimuladorEmergencia.find((c) => c.id === decodeURIComponent(casoId));

  if (!caso) {
    notFound();
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">🚨 {caso.nomeAnedotico}</h1>
        </div>

        <SimuladorEmergenciaPlayer key={caso.id} caso={caso} />
      </div>
    </main>
  );
}
