"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { Diagnostico } from "../data/diagnosticos/types";

interface Props {
  diagnosticos: Diagnostico[];
}

export default function DiagnosticosPorCategoria({ diagnosticos }: Props) {
  const [busca, setBusca] = useState("");
  const [abertas, setAbertas] = useState<Set<string>>(new Set());

  function alternarCategoria(categoria: string) {
    setAbertas((atual) => {
      const novo = new Set(atual);
      if (novo.has(categoria)) novo.delete(categoria);
      else novo.add(categoria);
      return novo;
    });
  }

  const categorias = useMemo(() => {
    const porCategoria = new Map<string, Diagnostico[]>();

    for (const d of diagnosticos) {
      const texto = (d.nome + " " + d.categoria).toLowerCase();
      if (busca && !texto.includes(busca.toLowerCase())) continue;

      const lista = porCategoria.get(d.categoria) ?? [];
      lista.push(d);
      porCategoria.set(d.categoria, lista);
    }

    return [...porCategoria.entries()]
      .map(([categoria, lista]) => ({
        categoria,
        diagnosticos: [...lista].sort((a, b) => a.nome.localeCompare(b.nome)),
      }))
      .sort((a, b) => b.diagnosticos.length - a.diagnosticos.length || a.categoria.localeCompare(b.categoria));
  }, [diagnosticos, busca]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-4xl font-bold text-white">🧠 Diagnósticos por Categoria</h1>

          <Link
            href="/diagnosticos"
            className="whitespace-nowrap rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
          >
            ← Ver lista completa
          </Link>
        </div>

        <p className="mt-3 text-slate-400">
          {categorias.length} categoria(s), {diagnosticos.length} diagnóstico(s) no total.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Filtrar por diagnóstico ou categoria..."
        />
      </div>

      {categorias.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center text-slate-400">
          Nenhuma categoria encontrada com essa busca.
        </div>
      ) : (
        <div className="space-y-4">
          {categorias.map(({ categoria, diagnosticos: listaDaCategoria }) => {
            const aberta = abertas.has(categoria) || busca.length > 0;

            return (
              <section
                key={categoria}
                className="rounded-2xl border border-slate-800 bg-slate-900 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => alternarCategoria(categoria)}
                  className="flex w-full items-center justify-between gap-3 p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1 rounded-full bg-blue-500" />
                    <h2 className="text-xl font-bold text-white">{categoria}</h2>
                    <Badge color="gray">{listaDaCategoria.length}</Badge>
                  </div>

                  <span className="text-slate-500">{aberta ? "▲" : "▼"}</span>
                </button>

                {aberta && (
                  <div className="grid gap-4 border-t border-slate-800 p-6 pt-5 sm:grid-cols-2 xl:grid-cols-3">
                    {listaDaCategoria.map((d) => (
                      <Link
                        key={d.id}
                        href={`/diagnosticos/${d.id}`}
                        className="group rounded-xl border border-slate-700 bg-slate-950 p-4 transition-colors hover:border-blue-500"
                      >
                        <h3 className="font-semibold text-white group-hover:text-blue-400">
                          {d.nome}
                        </h3>

                        {(d.cid11 || d.cid10) && (
                          <p className="mt-1 text-xs text-slate-500">
                            {d.cid11 ? `CID-11 ${d.cid11}` : `CID-10 ${d.cid10}`}
                          </p>
                        )}

                        <p className="mt-2 line-clamp-2 text-sm text-slate-400">{d.descricao}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </main>
  );
}
