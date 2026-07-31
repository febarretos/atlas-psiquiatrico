"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { Diagnostico } from "../data/diagnosticos/types";

interface Props {
  diagnosticos: Diagnostico[];
}

// Ordem aproximada de prevalência/frequência de apresentação em consultório
// psiquiátrico ambulatorial geral (não a prevalência populacional pura) —
// os motivos de consulta mais comuns primeiro, condições mais raras ou mais
// típicas de outros níveis de atenção (ex: esquizofrenia) por último.
// Diagnósticos não listados aqui (futuros) caem no fim, em ordem alfabética.
const ORDEM_PREVALENCIA = [
  "depressao-maior",
  "tag",
  "transtorno-ajustamento",
  "transtorno-depressivo-induzido-substancia",
  "distimia",
  "insonia",
  "fobia-social",
  "transtorno-disforico-pre-menstrual",
  "panico",
  "tdah",
  "bipolar-tipo-2",
  "bipolar-tipo-1",
  "personalidade-borderline",
  "toc",
  "tept",
  "transtorno-uso-alcool",
  "tea",
  "ciclotimia",
  "bulimia-nervosa",
  "anorexia-nervosa",
  "delirium",
  "transtorno-neurocognitivo-maior",
  "esquizofrenia",
];

export default function DiagnosticosPage({
  diagnosticos,
}: Props) {
  const [busca, setBusca] = useState("");

  const lista = useMemo(() => {
    return [...diagnosticos]
      .filter((d) => {
        const texto = (
          d.nome +
          " " +
          d.categoria +
          " " +
          (d.cid11 ?? "") +
          " " +
          (d.cid10 ?? "")
        ).toLowerCase();

        return texto.includes(busca.toLowerCase());
      })
      .sort((a, b) => {
        const posA = ORDEM_PREVALENCIA.indexOf(a.id);
        const posB = ORDEM_PREVALENCIA.indexOf(b.id);

        if (posA === -1 && posB === -1) return a.nome.localeCompare(b.nome);
        if (posA === -1) return 1;
        if (posB === -1) return -1;

        return posA - posB;
      });
  }, [busca, diagnosticos]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🧠 Diagnósticos
        </h1>

        <p className="mt-3 text-slate-400">
          {lista.length} diagnóstico(s) — DSM-5-TR, com referência CID-11.
          Ordenados por prevalência em consultório ambulatorial.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar diagnóstico ou categoria..."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {lista.map((d) => (
          <Link
            key={d.id}
            href={`/diagnosticos/${d.id}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
              {d.nome}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-slate-400">
              {d.descricao}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge color="blue">{d.categoria}</Badge>

              {d.cid11 && (
                <Badge color="gray">CID-11 {d.cid11}</Badge>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
