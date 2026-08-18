"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import SearchBar from "./SearchBar";
import { normalizarBusca } from "../lib/normalizarBusca";

import { Emergencia } from "../data/emergencias/types";

interface Props {
  emergencias: Emergencia[];
}

export default function EmergenciasPage({
  emergencias,
}: Props) {
  const [busca, setBusca] = useState("");

  const lista = useMemo(() => {
    const termo = normalizarBusca(busca.trim());

    return [...emergencias]
      .filter((e) => normalizarBusca(e.nome + " " + e.categoria).includes(termo))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [busca, emergencias]);

  return (
    <div className="mx-auto max-w-[1000px] animate-atlas-rise pt-[38px]">
      <div className="border-b border-alert-border pb-5">
        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-alert">
          Conduta imediata
        </div>
        <h1 className="mt-2 font-serif text-[38px] font-medium tracking-tight text-ink">
          Emergências psiquiátricas
        </h1>
        <p className="mt-2 max-w-[60ch] text-[14px] text-ink-2">
          {emergencias.length} quadros agudos com risco de vida. Reconhecimento, primeiras
          medidas e critérios de transferência.
        </p>
      </div>

      <div className="mb-2 mt-6">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar emergência..."
        />
      </div>

      <div className="mt-4 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {lista.map((e) => {
          const critico = e.gravidade === "muito alta";
          return (
            <Link
              key={e.id}
              href={`/emergencias/${e.id}`}
              className={`flex items-start justify-between gap-3.5 rounded-lg border px-4.5 py-4 transition-colors hover:border-alert ${
                critico ? "border-alert-border bg-alert-tint" : "border-rule bg-panel"
              }`}
            >
              <div>
                <div className="text-[15px] font-medium text-ink">{e.nome}</div>
                <div className="mt-0.5 text-[12.5px] text-ink-3">{e.categoria}</div>
              </div>

              <span
                className={`whitespace-nowrap rounded px-2 py-[3px] font-mono text-[9.5px] tracking-[0.1em] uppercase ${
                  critico ? "bg-alert-bg text-alert" : "bg-hover-warm text-ink-2"
                }`}
              >
                {critico ? "Gravidade muito alta" : "Gravidade alta"}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
