"use client";

import Link from "next/link";
import { useState } from "react";
import { medicamentos } from "../../data/medicamentos";

export default function Medicamentos() {
  const [busca, setBusca] = useState("");

  const lista = medicamentos.filter((m) =>
    m.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-6xl p-10">

        <h1 className="text-5xl font-bold">
          💊 Medicamentos
        </h1>

        <p className="mt-3 text-slate-400">
          Biblioteca de Psicofármacos
        </p>

        <input
          className="mt-8 mb-8 w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
          placeholder="Pesquisar medicamento..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <div className="grid gap-5">

          {lista.map((m) => (

            <Link
              key={m.id}
              href={`/medicamentos/${m.nome}`}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
            >

              <h2 className="text-2xl font-bold">

                {m.nome}

              </h2>

              <p className="text-blue-400">

                {m.subclasse}

              </p>

              <p className="mt-3 text-slate-300">

                {m.indicacoes.join(" • ")}

              </p>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}