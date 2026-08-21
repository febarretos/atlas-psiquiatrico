"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { normalizarBusca } from "../lib/normalizarBusca";
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
      const texto = normalizarBusca(d.nome + " " + d.categoria);
      if (busca && !texto.includes(normalizarBusca(busca))) continue;

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
          <h1 className="text-4xl font-bold text-ink">Diagnósticos por Categoria</h1>

          <Link
            href="/diagnosticos"
            className="whitespace-nowrap rounded-lg border border-rule px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
          >
            ← Ver lista completa
          </Link>
        </div>

        <p className="mt-3 text-ink-2">
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
        <div className="rounded-xl border border-dashed border-rule bg-panel p-12 text-center text-ink-3">
          Nenhuma categoria encontrada com essa busca.
        </div>
      ) : (
        <div className="space-y-4">
          {categorias.map(({ categoria, diagnosticos: listaDaCategoria }) => {
            const aberta = abertas.has(categoria) || busca.length > 0;

            return (
              <section
                key={categoria}
                className="rounded-xl border border-rule bg-panel"
              >
                <button
                  type="button"
                  onClick={() => alternarCategoria(categoria)}
                  className="flex w-full items-center justify-between gap-3 p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-ink">{categoria}</h2>
                    <Badge color="gray">{listaDaCategoria.length}</Badge>
                  </div>

                  <span className="text-ink-3">{aberta ? "▲" : "▼"}</span>
                </button>

                {aberta && (
                  <div className="grid gap-4 border-t border-rule p-6 pt-5 sm:grid-cols-2 xl:grid-cols-3">
                    {listaDaCategoria.map((d) => (
                      <Link
                        key={d.id}
                        href={`/diagnosticos/${d.id}`}
                        className="group rounded-lg border border-rule bg-paper p-4 transition-colors hover:border-accent"
                      >
                        <h3 className="font-semibold text-ink group-hover:text-accent">
                          {d.nome}
                        </h3>

                        {(d.cid11 || d.cid10) && (
                          <p className="mt-1 text-xs text-ink-3">
                            {d.cid11 ? `CID-11 ${d.cid11}` : `CID-10 ${d.cid10}`}
                          </p>
                        )}

                        <p className="mt-2 line-clamp-2 text-sm text-ink-2">{d.descricao}</p>
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
