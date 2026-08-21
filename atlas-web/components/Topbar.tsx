"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { getTrilha } from "../lib/trilha";

interface Props {
  onAbrirMenu: () => void;
  onAbrirBusca: () => void;
}

export default function Topbar({ onAbrirMenu, onAbrirBusca }: Props) {
  const pathname = usePathname();
  const trilha = getTrilha(pathname);

  // Sempre inicia "online" (igual ao SSR, que não tem acesso a `navigator`)
  // e corrige pro valor real só depois de montar — ler `navigator.onLine`
  // já no useState fazia a primeira renderização do cliente divergir da
  // do servidor sempre que `navigator.onLine` era `false` na hidratação,
  // disparando "Hydration failed" e descartando a árvore inteira.
  const [online, setOnline] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com navigator.onLine (indisponível durante SSR)
    setOnline(navigator.onLine);

    const marcarOnline = () => setOnline(true);
    const marcarOffline = () => setOnline(false);

    window.addEventListener("online", marcarOnline);
    window.addEventListener("offline", marcarOffline);

    return () => {
      window.removeEventListener("online", marcarOnline);
      window.removeEventListener("offline", marcarOffline);
    };
  }, []);

  return (
    <header className="flex h-[58px] flex-none items-center justify-between gap-5 border-b border-rule bg-paper/92 px-5 backdrop-blur-sm print:hidden md:px-10">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onAbrirMenu}
          aria-label="Abrir menu"
          className="rounded-md border border-rule p-2.5 text-ink-3 transition-colors hover:border-accent hover:text-accent active:bg-hover-warm md:hidden"
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

        <div className="flex min-w-0 items-center gap-2 font-mono text-[10.5px] tracking-[0.12em] uppercase text-ink-3">
          <span className="hidden sm:inline">Atlas</span>
          <span className="hidden text-ink-6 sm:inline">/</span>
          <span className="truncate text-ink-2">{trilha}</span>
        </div>
      </div>

      <div className="flex flex-none items-center gap-2">
        <button
          type="button"
          onClick={onAbrirBusca}
          className="rounded-md border border-rule bg-panel px-3 py-2 font-mono text-[11px] text-ink-3 transition-colors hover:border-accent hover:text-accent active:bg-hover-warm"
        >
          buscar
        </button>

        <div className="flex items-center gap-1.5 whitespace-nowrap rounded-md border border-rule bg-panel px-2.5 py-[5px] font-mono text-[11px] text-ink-3">
          <span
            className={`inline-block h-[6px] w-[6px] rounded-full ${online ? "bg-ok" : "bg-alert"}`}
            aria-hidden="true"
          />
          {online ? "online" : "offline"}
        </div>
      </div>
    </header>
  );
}
