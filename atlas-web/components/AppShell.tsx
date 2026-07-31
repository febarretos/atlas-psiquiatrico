"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: ReactNode;
}

export default function AppShell({ children }: Props) {
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar
        aberto={menuAberto}
        onFechar={() => setMenuAberto(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onAbrirMenu={() => setMenuAberto(true)} />

        <main className="flex-1 overflow-auto p-4 md:p-8">
          {children}

          <footer className="mx-auto mt-16 max-w-7xl border-t border-slate-800 pt-6 text-xs leading-5 text-slate-500 print:hidden">
            Conteúdo destinado a profissionais de saúde como ferramenta de
            apoio à decisão clínica. Não substitui o julgamento médico,
            a avaliação individualizada do paciente nem as bulas e
            diretrizes oficiais vigentes.
          </footer>
        </main>
      </div>
    </div>
  );
}
