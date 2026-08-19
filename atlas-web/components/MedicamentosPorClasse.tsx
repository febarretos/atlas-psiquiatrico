"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { Medicamento } from "../data/types";

interface Props {
  medicamentos: Medicamento[];
}

export default function MedicamentosPorClasse({ medicamentos }: Props) {
  const [busca, setBusca] = useState("");
  const [abertas, setAbertas] = useState<Set<string>>(new Set());

  function alternarClasse(classe: string) {
    setAbertas((atual) => {
      const novo = new Set(atual);
      if (novo.has(classe)) novo.delete(classe);
      else novo.add(classe);
      return novo;
    });
  }

  const classes = useMemo(() => {
    const porClasse = new Map<string, Medicamento[]>();

    for (const m of medicamentos) {
      const texto = (m.nome + " " + m.classe + " " + (m.subclasse ?? "")).toLowerCase();
      if (busca && !texto.includes(busca.toLowerCase())) continue;

      const lista = porClasse.get(m.classe) ?? [];
      lista.push(m);
      porClasse.set(m.classe, lista);
    }

    return [...porClasse.entries()]
      .map(([classe, lista]) => ({
        classe,
        medicamentos: [...lista].sort((a, b) => a.nome.localeCompare(b.nome)),
      }))
      .sort((a, b) => b.medicamentos.length - a.medicamentos.length || a.classe.localeCompare(b.classe));
  }, [medicamentos, busca]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-4xl font-bold text-ink">Medicamentos por Classe</h1>

          <Link
            href="/medicamentos"
            className="whitespace-nowrap rounded-lg border border-rule px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
          >
            ← Ver lista completa
          </Link>
        </div>

        <p className="mt-3 text-ink-2">
          {classes.length} classe(s) farmacológica(s), {medicamentos.length} medicamento(s) no total.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Filtrar por medicamento, classe ou subclasse..."
        />
      </div>

      {classes.length === 0 ? (
        <div className="rounded-xl border border-dashed border-rule bg-panel p-12 text-center text-ink-3">
          Nenhuma classe encontrada com essa busca.
        </div>
      ) : (
        <div className="space-y-4">
          {classes.map(({ classe, medicamentos: listaDaClasse }) => {
            const aberta = abertas.has(classe) || busca.length > 0;

            return (
              <section
                key={classe}
                className="rounded-xl border border-rule bg-panel"
              >
                <button
                  type="button"
                  onClick={() => alternarClasse(classe)}
                  className="flex w-full items-center justify-between gap-3 p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-ink">{classe}</h2>
                    <Badge color="gray">{listaDaClasse.length}</Badge>
                  </div>

                  <span className="text-ink-3">{aberta ? "▲" : "▼"}</span>
                </button>

                {aberta && (
                  <div className="grid gap-4 border-t border-rule p-6 pt-5 sm:grid-cols-2 xl:grid-cols-3">
                    {listaDaClasse.map((m) => (
                      <Link
                        key={m.id}
                        href={`/medicamentos/${encodeURIComponent(m.nome)}`}
                        className="group rounded-lg border border-rule bg-paper p-4 transition-colors hover:border-accent"
                      >
                        <h3 className="font-semibold text-ink group-hover:text-accent">
                          {m.nome}
                        </h3>

                        {m.nomeComercial && (
                          <p className="mt-1 text-xs text-ink-3">{m.nomeComercial.join(", ")}</p>
                        )}

                        {m.subclasse && (
                          <p className="mt-2 text-sm text-ink-2">{m.subclasse}</p>
                        )}
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
