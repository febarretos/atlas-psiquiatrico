import Badge from "../../components/Badge";
import Card from "../../components/Card";

import { casosSimulador } from "../../data/simulador";
import { diagnosticos } from "../../data/diagnosticos";

export default function SimuladorPage() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">Simulador de Psiquiatria</h1>

        <p className="mt-3 text-ink-2">
          Casos narrativos em árvore de decisão — tom leve e anedótico, fundamento clínico
          exato. Escolha um caso e jogue até o desfecho.
        </p>
      </div>

      {casosSimulador.length === 0 ? (
        <div className="rounded-xl border border-dashed border-rule bg-panel p-12 text-center text-ink-2">
          Nenhum caso disponível ainda. Casos são gerados offline com{" "}
          <code className="rounded bg-hover-warm px-1.5 py-0.5 text-ink-2">
            npm run gerar-caso-simulador
          </code>{" "}
          e revisados antes de entrar aqui.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {casosSimulador.map((caso) => {
            const diagnostico = diagnosticos.find((d) => d.id === caso.diagnosticoRealId);

            return (
              <Card
                key={caso.id}
                titulo={caso.tituloAnedotico}
                href={`/simulador/${caso.id}`}
              >
                <div className="flex flex-wrap gap-2">
                  <Badge color="gray">{caso.nos.length} nós</Badge>
                  {diagnostico && <Badge color="blue">diagnóstico oculto</Badge>}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </main>
  );
}
