"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { CasoClinico } from "../data/casos-clinicos/types";

interface Props {
  casos: CasoClinico[];
}

export default function CasosClinicosPage({
  casos,
}: Props) {
  const [busca, setBusca] = useState("");

  const lista = useMemo(() => {
    const termo = busca.toLowerCase();

    return casos.filter((c) =>
      (c.titulo + " " + c.categoria + " " + c.diagnosticoFinal)
        .toLowerCase()
        .includes(termo)
    );
  }, [busca, casos]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🩺 Casos Clínicos
        </h1>

        <p className="mt-3 text-slate-400">
          Vinhetas interativas — trabalhe o raciocínio diagnóstico passo a
          passo até a conduta, com diferenciação fina entre hipóteses
          concorrentes.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar caso, categoria ou diagnóstico..."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {lista.map((c) => (
          <Link
            key={c.id}
            href={`/casos-clinicos/${c.id}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
              {c.titulo}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-slate-400">
              {c.apresentacaoInicial}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge color="blue">{c.categoria}</Badge>
              <Badge color="gray">{c.etapas.length} etapa(s)</Badge>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
