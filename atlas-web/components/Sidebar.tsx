"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemMenu {
  nome: string;
  href: string;
  icone: string;
}

interface GrupoMenu {
  titulo: string;
  itens: ItemMenu[];
}

const inicio: ItemMenu = { nome: "Início", href: "/", icone: "🏠" };

const grupos: GrupoMenu[] = [
  {
    titulo: "Referência",
    itens: [
      { nome: "Emergências", href: "/emergencias", icone: "🚨" },
      { nome: "Medicamentos", href: "/medicamentos", icone: "💊" },
      { nome: "Diagnósticos", href: "/diagnosticos", icone: "🧠" },
      { nome: "Psicopatologia", href: "/psicopatologia", icone: "🧩" },
      { nome: "Escalas", href: "/escalas", icone: "📋" },
      { nome: "Fluxogramas", href: "/fluxogramas", icone: "🌳" },
    ],
  },
  {
    titulo: "Ferramentas de Consulta",
    itens: [
      { nome: "Assistente de Medicação", href: "/assistente", icone: "🧭" },
      { nome: "Entrevista Diagnóstica Estruturada", href: "/entrevista-estruturada", icone: "📝" },
      { nome: "Mapa de Conhecimento", href: "/mapa", icone: "🕸️" },
    ],
  },
  {
    titulo: "Casos & Prática",
    itens: [
      { nome: "Casos Clínicos", href: "/casos-clinicos", icone: "🩺" },
      { nome: "Simulador", href: "/simulador", icone: "🎮" },
      { nome: "Simulador de Emergência", href: "/simulador-emergencia", icone: "🚑" },
      { nome: "Modo de Estudo", href: "/estudo", icone: "🗂️" },
    ],
  },
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

        <nav className="space-y-6">
          {(() => {
            const ativo = (href: string) =>
              pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

            const link = (item: ItemMenu) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onFechar}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  ativo(item.href)
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <span>{item.icone}</span>
                <span>{item.nome}</span>
              </Link>
            );

            return (
              <>
                <div className="space-y-2">{link(inicio)}</div>

                {grupos.map((grupo) => (
                  <div key={grupo.titulo} className="space-y-2">
                    <h2 className="px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {grupo.titulo}
                    </h2>
                    {grupo.itens.map(link)}
                  </div>
                ))}
              </>
            );
          })()}
        </nav>
      </aside>
    </>
  );
}
