import Badge from "./Badge";

import { AchadoPsicopatologico as AchadoTipo } from "../data/psicopatologia/types";

interface Props {
  achado: AchadoTipo;
}

export default function AchadoPsicopatologico({ achado }: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
      <h3 className="text-xl font-bold text-white">
        {achado.nome}
      </h3>

      {achado.sinonimos && achado.sinonimos.length > 0 && (
        <p className="mt-1 text-sm italic text-slate-500">
          Sinônimos: {achado.sinonimos.join(", ")}
        </p>
      )}

      <p className="mt-4 text-slate-300">
        {achado.definicao}
      </p>

      {achado.caracteristicas.length > 0 && (
        <ul className="mt-4 list-disc space-y-1.5 pl-6 text-slate-300">
          {achado.caracteristicas.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      )}

      <div className="mt-4 rounded-xl border-l-4 border-blue-500 bg-slate-800/50 p-4">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
          Vinheta clínica
        </div>

        <p className="text-sm italic text-slate-300">
          {achado.exemploClinico}
        </p>
      </div>

      {achado.diferencialFino && achado.diferencialFino.length > 0 && (
        <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Diferencial fino
          </div>

          <div className="space-y-3">
            {achado.diferencialFino.map((d) => (
              <div key={d.comparadoCom}>
                <div className="text-sm font-semibold text-amber-300">
                  vs. {d.comparadoCom}
                </div>

                <p className="mt-0.5 text-sm text-slate-300">
                  {d.distincao}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {achado.transtornosAssociados.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {achado.transtornosAssociados.map((t) => (
            <Badge key={t} color="gray">
              {t}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
