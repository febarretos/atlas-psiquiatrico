"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import SearchBar from "./SearchBar";
import { normalizarBusca } from "../lib/normalizarBusca";

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
    const termo = normalizarBusca(busca.trim());

    return [...diagnosticos]
      .filter((d) => {
        const texto = normalizarBusca(
          d.nome + " " + d.categoria + " " + (d.cid11 ?? "") + " " + (d.cid10 ?? "")
        );

        return texto.includes(termo);
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
    <div className="mx-auto max-w-[1000px] animate-atlas-rise pt-[38px]">
      <h1 className="font-serif text-[38px] font-medium tracking-tight text-ink">
        Diagnósticos
      </h1>
      <p className="mt-2 mb-6 text-[14px] text-ink-2">
        {lista.length} diagnóstico(s) — DSM-5-TR, com referência CID-11.
        Ordenados por prevalência em consultório ambulatorial.
      </p>

      <div className="mb-6 flex flex-wrap items-center gap-2.5">
        <div className="min-w-[260px] flex-1">
          <SearchBar
            value={busca}
            onChange={setBusca}
            placeholder="Nome, categoria ou código CID..."
          />
        </div>

        <Link
          href="/diagnosticos/categorias"
          className="whitespace-nowrap rounded-md border border-rule bg-panel px-3 py-[9px] font-mono text-[11px] text-ink-2 transition-colors hover:border-accent hover:text-accent"
        >
          por categoria
        </Link>
      </div>

      {lista.length === 0 ? (
        <div className="rounded-xl border border-dashed border-rule bg-panel p-12 text-center text-ink-3">
          Nenhum diagnóstico encontrado com essa busca.
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-rule bg-panel">
          {lista.map((d, i) => (
            <Link
              key={d.id}
              href={`/diagnosticos/${d.id}`}
              className="flex items-center justify-between gap-5 border-b border-rule-soft px-5 py-3.5 transition-colors last:border-b-0 hover:bg-paper"
            >
              <div className="flex items-baseline gap-3.5">
                <span className="w-[22px] font-mono text-[11px] text-ink-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-ink">{d.nome}</span>
              </div>

              <div className="flex flex-none items-baseline gap-4">
                <span className="hidden text-right text-[12px] text-ink-3 sm:inline">
                  {d.categoria}
                </span>
                <span className="w-[78px] whitespace-nowrap text-right font-mono text-[11px] text-ink-4">
                  {d.cid11 ?? "—"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
