"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { Medicamento } from "../data/types";

interface Props {
  medicamentos: Medicamento[];
}

interface Filtro {
  chave: "gravidez" | "lactacao" | "renal";
  rotulo: string;
}

const filtrosDisponiveis: Filtro[] = [
  { chave: "gravidez", rotulo: "🤰 Preferencial na gravidez" },
  { chave: "lactacao", rotulo: "🤱 Compatível com lactação" },
  { chave: "renal", rotulo: "🩺 Sem ajuste renal necessário" },
];

export default function MedicamentosPage({
  medicamentos,
}: Props) {
  const [busca, setBusca] = useState("");
  const [filtrosAtivos, setFiltrosAtivos] = useState<Set<string>>(new Set());

  function alternarFiltro(chave: string) {
    setFiltrosAtivos((atual) => {
      const novo = new Set(atual);
      if (novo.has(chave)) {
        novo.delete(chave);
      } else {
        novo.add(chave);
      }
      return novo;
    });
  }

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

        if (!texto.includes(busca.toLowerCase())) return false;

        if (filtrosAtivos.has("gravidez") && m.gravidezCategoria !== "preferencial") {
          return false;
        }

        if (filtrosAtivos.has("lactacao") && m.lactacaoCategoria !== "compativel") {
          return false;
        }

        if (filtrosAtivos.has("renal") && m.ajusteRenalNecessario !== false) {
          return false;
        }

        return true;
      })
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [busca, medicamentos, filtrosAtivos]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-4xl font-bold text-white">
            💊 Medicamentos
          </h1>

          <Link
            href="/medicamentos/classes"
            className="whitespace-nowrap rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
          >
            🗂️ Navegar por classe
          </Link>
        </div>

        <p className="mt-3 text-slate-400">
          {lista.length} medicamento(s)
        </p>
      </div>

      <div className="mb-5">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar medicamento..."
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {filtrosDisponiveis.map((f) => {
          const ativo = filtrosAtivos.has(f.chave);

          return (
            <button
              key={f.chave}
              type="button"
              onClick={() => alternarFiltro(f.chave)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                ativo
                  ? "border-blue-500 bg-blue-500/10 text-blue-300"
                  : "border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-600"
              }`}
            >
              {f.rotulo}
            </button>
          );
        })}
      </div>

      {lista.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center text-slate-400">
          Nenhum medicamento encontrado com os filtros atuais.
        </div>
      ) : (
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
      )}
    </main>
  );
}
