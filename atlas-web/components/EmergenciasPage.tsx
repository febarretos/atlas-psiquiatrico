"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { Emergencia } from "../data/emergencias/types";

interface Props {
  emergencias: Emergencia[];
}

export default function EmergenciasPage({
  emergencias,
}: Props) {
  const [busca, setBusca] = useState("");

  const lista = useMemo(() => {
    return [...emergencias]
      .filter((e) => {
        const texto = (e.nome + " " + e.categoria).toLowerCase();

        return texto.includes(busca.toLowerCase());
      })
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [busca, emergencias]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🚨 Emergências Psiquiátricas
        </h1>

        <p className="mt-3 text-slate-400">
          Referência rápida para quadros agudos com risco de vida — reconhecimento e conduta imediata.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar emergência..."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {lista.map((e) => (
          <Link
            key={e.id}
            href={`/emergencias/${e.id}`}
            className="group rounded-2xl border border-red-900/40 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-red-500"
          >
            <h2 className="text-xl font-semibold text-white group-hover:text-red-400">
              {e.nome}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-slate-400">
              {e.descricao}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge color="gray">{e.categoria}</Badge>

              <Badge color="red">
                {e.gravidade === "muito alta" ? "Gravidade muito alta" : "Gravidade alta"}
              </Badge>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
