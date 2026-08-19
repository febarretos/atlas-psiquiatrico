import Badge from "../../components/Badge";
import Card from "../../components/Card";

import { casosSimuladorEmergencia } from "../../data/simulador-emergencia";
import { emergencias } from "../../data/emergencias";

export default function SimuladorEmergenciaPage() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">Simulador de Emergência</h1>

        <p className="mt-3 text-ink-2">
          Jogo de tensão em tempo real — sinais vitais evoluem a cada turno e a conduta certa
          precisa vir rápido. Baseado nos quadros do módulo de Emergências.
        </p>
      </div>

      {casosSimuladorEmergencia.length === 0 ? (
        <div className="rounded-xl border border-dashed border-rule bg-panel p-12 text-center text-ink-2">
          Nenhum caso disponível ainda. Casos são gerados offline com{" "}
          <code className="rounded bg-hover-warm px-1.5 py-0.5 text-ink-2">
            npm run gerar-caso-emergencia
          </code>{" "}
          e revisados antes de entrar aqui.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {casosSimuladorEmergencia.map((caso) => {
            const emergencia = emergencias.find((e) => e.id === caso.emergenciaBaseId);

            return (
              <Card
                key={caso.id}
                titulo={caso.nomeAnedotico}
                href={`/simulador-emergencia/${caso.id}`}
              >
                <div className="flex flex-wrap gap-2">
                  {emergencia && <Badge color="red">{emergencia.nome}</Badge>}
                  <Badge color="gray">{caso.turnosMaximos} turnos</Badge>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </main>
  );
}
