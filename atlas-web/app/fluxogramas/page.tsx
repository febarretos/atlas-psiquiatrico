import Badge from "../../components/Badge";
import Card from "../../components/Card";

import { fluxogramas } from "../../data/fluxogramas";

export default function Fluxogramas() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">🌳 Fluxogramas</h1>

        <p className="mt-3 text-slate-400">
          Algoritmos de decisão clínica interativos: responda passo a passo
          até chegar a uma conduta.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {fluxogramas.map((f) => (
          <Card
            key={f.id}
            titulo={f.titulo}
            descricao={f.descricao}
            href={`/fluxogramas/${f.id}`}
          >
            <Badge color="blue">{f.categoria}</Badge>
          </Card>
        ))}
      </div>
    </main>
  );
}
