"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { DominioPsicopatologico } from "../data/psicopatologia/types";

interface Props {
  dominios: DominioPsicopatologico[];
}

export default function PsicopatologiaPage({
  dominios,
}: Props) {
  const [busca, setBusca] = useState("");

  const lista = useMemo(() => {
    const termo = busca.toLowerCase();

    return dominios.filter((d) => {
      const textoDominio = (d.nome + " " + d.descricao).toLowerCase();
      if (textoDominio.includes(termo)) return true;

      return d.achados.some((a) =>
        (a.nome + " " + (a.sinonimos ?? []).join(" "))
          .toLowerCase()
          .includes(termo)
      );
    });
  }, [busca, dominios]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🧩 Psicopatologia
        </h1>

        <p className="mt-3 text-slate-400">
          Semiologia psiquiátrica por domínio — definições precisas,
          diferenciação fina entre achados semelhantes e vinhetas clínicas.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar achado, sinônimo ou domínio..."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {lista.map((d) => (
          <Link
            key={d.id}
            href={`/psicopatologia/${d.id}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
              {d.nome}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-slate-400">
              {d.descricao}
            </p>

            <div className="mt-5">
              <Badge color="blue">
                {d.achados.length} achado(s)
              </Badge>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
