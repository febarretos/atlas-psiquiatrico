"use client";

import { useEffect, useState } from "react";

import Badge from "./Badge";

import { AchadoPsicopatologico as AchadoTipo } from "../data/psicopatologia/types";
import { alternarAchadoSelecionado, estaSelecionado } from "../lib/exameEstadoMental";

interface Props {
  achado: AchadoTipo;
}

export default function AchadoPsicopatologico({ achado }: Props) {
  const [selecionado, setSelecionado] = useState(false);

  // localStorage só existe no cliente: sincroniza o estado após a
  // montagem, evitando divergência entre a renderização no servidor e no
  // cliente.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
    setSelecionado(estaSelecionado(achado.id));
  }, [achado.id]);

  function alternar() {
    setSelecionado(alternarAchadoSelecionado(achado.id));
  }

  return (
    <div className="rounded-xl border border-rule bg-paper p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-ink">
          {achado.nome}
        </h3>

        <button
          type="button"
          onClick={alternar}
          aria-pressed={selecionado}
          className={`inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-md border px-3 py-[7px] font-mono text-[11px] transition-colors print:hidden ${
            selecionado
              ? "border-accent bg-accent-soft text-accent"
              : "border-rule bg-panel text-ink-2 hover:border-accent hover:text-accent"
          }`}
        >
          <span aria-hidden="true">{selecionado ? "☑" : "☐"}</span>
          {selecionado ? "Observado" : "Observar no EEM"}
        </button>
      </div>

      {achado.sinonimos && achado.sinonimos.length > 0 && (
        <p className="mt-1 text-sm italic text-ink-3">
          Sinônimos: {achado.sinonimos.join(", ")}
        </p>
      )}

      <p className="mt-4 text-ink-2">
        {achado.definicao}
      </p>

      {achado.caracteristicas.length > 0 && (
        <ul className="mt-4 list-disc space-y-1.5 pl-6 text-ink-2">
          {achado.caracteristicas.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      )}

      <div className="mt-4 rounded-lg border-l-4 border-accent bg-accent-soft p-4">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
          Vinheta clínica
        </div>

        <p className="text-sm italic text-ink-2">
          {achado.exemploClinico}
        </p>
      </div>

      {achado.diferencialFino && achado.diferencialFino.length > 0 && (
        <div className="mt-4 rounded-lg border border-warn-border bg-warn-bg p-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-warn">
            Diferencial fino
          </div>

          <div className="space-y-3">
            {achado.diferencialFino.map((d) => (
              <div key={d.comparadoCom}>
                <div className="text-sm font-semibold text-warn">
                  vs. {d.comparadoCom}
                </div>

                <p className="mt-0.5 text-sm text-ink-2">
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
