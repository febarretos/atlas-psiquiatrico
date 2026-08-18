"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { buscarNoIndice, getIndiceBusca } from "../lib/indiceBusca";

interface Props {
  aberto: boolean;
  onFechar: () => void;
}

export default function SearchPalette({ aberto, onFechar }: Props) {
  const [consulta, setConsulta] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!aberto) return;
    // autoFocus não é confiável em modais montados condicionalmente —
    // o input ainda não existe no DOM no primeiro paint.
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [aberto]);

  const resultados = useMemo(() => buscarNoIndice(consulta), [consulta]);
  const totalIndice = useMemo(() => getIndiceBusca().length, []);

  if (!aberto) return null;

  function fechar() {
    setConsulta("");
    onFechar();
  }

  const rodape =
    resultados.length === totalIndice
      ? `${totalIndice} itens no índice`
      : `${resultados.length} ${resultados.length === 1 ? "resultado" : "resultados"}`;

  return (
    <div
      onClick={fechar}
      className="animate-atlas-fade fixed inset-0 z-[60] flex items-start justify-center bg-ink/30 px-4 pt-[12vh]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[620px] overflow-hidden rounded-2xl border border-rule bg-panel shadow-[0_24px_60px_rgba(25,27,30,0.18)]"
      >
        <input
          ref={inputRef}
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") fechar();
          }}
          placeholder="Fármaco, diagnóstico, emergência…"
          className="w-full border-b border-rule-soft px-6 py-5 text-[17px] text-ink outline-none placeholder:text-ink-3"
        />

        <div className="max-h-[340px] overflow-y-auto">
          {resultados.length === 0 ? (
            <div className="px-6 py-5 text-sm text-ink-3">Nenhum resultado encontrado.</div>
          ) : (
            resultados.map((r) => (
              <Link
                key={`${r.tipo}-${r.href}-${r.nome}`}
                href={r.href}
                onClick={fechar}
                className="flex items-center justify-between gap-4 border-b border-rule-faint px-6 py-3 last:border-b-0 hover:bg-paper"
              >
                <span className="text-[14.5px] text-ink">{r.nome}</span>

                <span className="whitespace-nowrap font-mono text-[10px] tracking-wider uppercase text-ink-4">
                  {r.tipo}
                </span>
              </Link>
            ))
          )}
        </div>

        <div className="flex items-center justify-between bg-paper px-6 py-2.5 font-mono text-[10px] tracking-wider uppercase text-ink-4">
          <span>{rodape}</span>
          <span>esc para fechar</span>
        </div>
      </div>
    </div>
  );
}
