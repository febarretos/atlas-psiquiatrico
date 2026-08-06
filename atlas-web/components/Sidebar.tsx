"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { nome: "Início", href: "/", icone: "🏠" },
  { nome: "Assistente de Medicação", href: "/assistente", icone: "🧭" },
  { nome: "Emergências", href: "/emergencias", icone: "🚨" },
  { nome: "Medicamentos", href: "/medicamentos", icone: "💊" },
  { nome: "Diagnósticos", href: "/diagnosticos", icone: "🧠" },
  { nome: "Psicopatologia", href: "/psicopatologia", icone: "🧩" },
  { nome: "Casos Clínicos", href: "/casos-clinicos", icone: "🩺" },
  { nome: "Escalas", href: "/escalas", icone: "📋" },
  { nome: "Fluxogramas", href: "/fluxogramas", icone: "🌳" },
  { nome: "Entrevista Diagnóstica Estruturada", href: "/entrevista-estruturada", icone: "📝" },
  { nome: "Simulador", href: "/simulador", icone: "🎮" },
  { nome: "Simulador de Emergência", href: "/simulador-emergencia", icone: "🚨" },
  { nome: "Modo de Estudo", href: "/estudo", icone: "🗂️" },
];

interface Props {
  aberto: boolean;
  onFechar: () => void;
}

export default function Sidebar({
  aberto,
  onFechar,
}: Props) {
  const pathname = usePathname();

  return (
    <>
      {aberto && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={onFechar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 min-h-screen transform overflow-y-auto border-r border-slate-800 bg-slate-900 p-6 transition-transform duration-200 ease-out print:hidden md:static md:translate-x-0 ${
          aberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-bold text-white mb-8">
          🧠 Atlas Psiquiátrico
        </h1>

        <nav className="space-y-2">
          {menu.map((item) => {
            const ativo =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onFechar}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  ativo
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <span>{item.icone}</span>
                <span>{item.nome}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
