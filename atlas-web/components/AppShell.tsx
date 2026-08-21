"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import SearchPalette from "./SearchPalette";

interface Props {
  children: ReactNode;
}

export default function AppShell({ children }: Props) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [buscaAberta, setBuscaAberta] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function aoTeclar(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setBuscaAberta(true);
      }
      if (e.key === "Escape") setBuscaAberta(false);
    }

    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, []);

  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex h-dvh overflow-hidden bg-paper">
      <Sidebar
        aberto={menuAberto}
        onFechar={() => setMenuAberto(false)}
        onAbrirBusca={() => setBuscaAberta(true)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          onAbrirMenu={() => setMenuAberto(true)}
          onAbrirBusca={() => setBuscaAberta(true)}
        />

        <main className="flex-1 overflow-y-auto bg-paper px-4 pb-20 md:px-10">
          {children}

          <footer className="mx-auto mt-11 max-w-[1060px] border-t border-rule pt-[18px] text-xs leading-[1.7] text-ink-3">
            Conteúdo destinado a profissionais de saúde como ferramenta de
            apoio à decisão clínica. Não substitui o julgamento médico,
            a avaliação individualizada do paciente nem as bulas e
            diretrizes oficiais vigentes.
          </footer>
        </main>
      </div>

      <SearchPalette aberto={buscaAberta} onFechar={() => setBuscaAberta(false)} />
    </div>
  );
}
