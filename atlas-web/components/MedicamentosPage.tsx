"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { Medicamento } from "../data/types";

interface Props {
  medicamentos: Medicamento[];
}

export default function MedicamentosPage({
  medicamentos,
}: Props) {
  const [busca, setBusca] = useState("");

  const lista = useMemo(() => {
    return [...medicamentos]
      .filter((m) => {
        const texto = (
          m.nome +
          " " +
          (m.nomeComercial?.join(" ") ?? "") +
          " " +
          m.classe +
          " " +
          (m.subclasse ?? "")
        ).toLowerCase();

        return texto.includes(busca.toLowerCase());
      })
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [busca, medicamentos]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          💊 Medicamentos
        </h1>

        <p className="mt-3 text-slate-400">
          {lista.length} medicamento(s)
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar medicamento..."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {lista.map((m) => (
          <Link
            key={m.id}
            href={`/medicamentos/${encodeURIComponent(m.nome)}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
              {m.nome}
            </h2>

            {m.nomeComercial && (
              <p className="mt-2 text-sm text-slate-400">
                {m.nomeComercial.join(", ")}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge color="blue">{m.classe}</Badge>

              {m.subclasse && (
                <Badge color="green">
                  {m.subclasse}
                </Badge>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}