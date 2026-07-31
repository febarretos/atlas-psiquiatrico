"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { nome: "Início", href: "/", icone: "🏠" },
  { nome: "Medicamentos", href: "/medicamentos", icone: "💊" },
  { nome: "Diagnósticos", href: "/diagnosticos", icone: "🧠" },
  { nome: "Escalas", href: "/escalas", icone: "📋" },
  { nome: "Calculadoras", href: "/calculadoras", icone: "🧮" },
  { nome: "Fluxogramas", href: "/fluxogramas", icone: "🌳" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-2xl font-bold text-white mb-8">
        🧠 Atlas Psiquiátrico
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const ativo =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
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
  );
}