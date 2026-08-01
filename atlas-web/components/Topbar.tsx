"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { medicamentos } from "../data/medicamentos";
import { diagnosticos } from "../data/diagnosticos";
import { escalas } from "../data/escalas";
import { emergencias } from "../data/emergencias";
import { fluxogramas } from "../data/fluxogramas";
import { dominiosPsicopatologicos } from "../data/psicopatologia";

interface Resultado {
  tipo: string;
  nome: string;
  sub: string;
  href: string;
}

interface Props {
  onAbrirMenu: () => void;
}

export default function Topbar({ onAbrirMenu }: Props) {
  const [busca, setBusca] = useState("");
  const [aberto, setAberto] = useState(false);

  const resultados = useMemo<Resultado[]>(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) return [];

    const itens: Resultado[] = [
      ...medicamentos.map((m) => ({
        tipo: "Medicamento",
        nome: m.nome,
        sub: m.classe,
        href: `/medicamentos/${encodeURIComponent(m.nome)}`,
      })),
      ...diagnosticos.map((d) => ({
        tipo: "Diagnóstico",
        nome: d.nome,
        sub: d.categoria,
        href: `/diagnosticos/${d.id}`,
      })),
      ...escalas.map((e) => ({
        tipo: "Escala",
        nome: `${e.nome} (${e.sigla})`,
        sub: e.categoria,
        href: `/escalas/${e.id}`,
      })),
      ...emergencias.map((e) => ({
        tipo: "Emergência",
        nome: e.nome,
        sub: e.categoria,
        href: `/emergencias/${e.id}`,
      })),
      ...fluxogramas.map((f) => ({
        tipo: "Fluxograma",
        nome: f.titulo,
        sub: f.categoria,
        href: `/fluxogramas/${f.id}`,
      })),
      ...dominiosPsicopatologicos.map((d) => ({
        tipo: "Psicopatologia",
        nome: d.nome,
        sub: `${d.achados.length} achado(s)`,
        href: `/psicopatologia/${d.id}`,
      })),
      ...dominiosPsicopatologicos.flatMap((d) =>
        d.achados.map((a) => ({
          tipo: "Achado psicopatológico",
          nome: a.nome,
          sub: d.nome,
          href: `/psicopatologia/${d.id}`,
        }))
      ),
    ];

    return itens
      .filter((item) =>
        (item.nome + " " + item.sub).toLowerCase().includes(termo)
      )
      .slice(0, 8);
  }, [busca]);

  return (
    <header className="flex h-16 items-center justify-between gap-3 border-b border-slate-800 bg-slate-950 px-4 print:hidden md:px-8">

      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onAbrirMenu}
          aria-label="Abrir menu"
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition-colors hover:border-blue-500 hover:text-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <h2 className="truncate text-lg font-semibold text-white md:text-xl">
          Atlas Psiquiátrico
        </h2>
      </div>

      <div className="relative w-full max-w-[420px]">
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onFocus={() => setAberto(true)}
          onBlur={() => setTimeout(() => setAberto(false), 150)}
          placeholder="Pesquisar..."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
        />

        {aberto && busca.trim() !== "" && (
          <div className="absolute right-0 top-full z-50 mt-2 w-[min(420px,90vw)] overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-xl">
            {resultados.length > 0 ? (
              resultados.map((r) => (
                <Link
                  key={`${r.tipo}-${r.href}`}
                  href={r.href}
                  className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-3 text-sm last:border-b-0 hover:bg-slate-800"
                >
                  <span className="text-white">{r.nome}</span>

                  <span className="whitespace-nowrap text-xs text-slate-500">
                    {r.tipo}
                  </span>
                </Link>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-slate-500">
                Nenhum resultado encontrado.
              </div>
            )}
          </div>
        )}
      </div>

    </header>
  );
}