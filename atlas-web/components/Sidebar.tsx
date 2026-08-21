"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { grupos, ItemMenu } from "../lib/navegacao";

interface Props {
  aberto: boolean;
  onFechar: () => void;
  onAbrirBusca: () => void;
}

export default function Sidebar({ aberto, onFechar, onAbrirBusca }: Props) {
  const pathname = usePathname();

  const ativo = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  // O <aside> fica sempre no DOM (só desloca com -translate-x-full em
  // mobile) — sem isso, leitor de tela e navegação por teclado enxergam o
  // menu fechado como se estivesse visível. `md:` é 768px no Tailwind
  // (breakpoint padrão), mesmo limiar usado nas classes md: abaixo.
  const [fechadoEmMobile, setFechadoEmMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const atualizar = () => setFechadoEmMobile(mq.matches && !aberto);
    atualizar();
    mq.addEventListener("change", atualizar);
    return () => mq.removeEventListener("change", atualizar);
  }, [aberto]);

  return (
    <>
      {aberto && (
        <div
          className="fixed inset-0 z-30 bg-ink/40 md:hidden"
          onClick={onFechar}
          aria-hidden="true"
        />
      )}

      <aside
        aria-hidden={fechadoEmMobile}
        inert={fechadoEmMobile ? true : undefined}
        className={`fixed inset-y-0 left-0 z-40 flex w-[272px] min-h-dvh -translate-x-full transform flex-col overflow-y-auto border-r border-rule bg-panel transition-transform duration-200 ease-out print:hidden md:static md:translate-x-0 ${
          aberto ? "translate-x-0" : ""
        }`}
      >
        <div className="border-b border-rule-soft px-[22px] pb-[18px] pt-[26px]">
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-3">
            Biblioteca clínica
          </div>
          <Link
            href="/"
            onClick={onFechar}
            className="mt-1 block font-serif text-[23px] font-medium tracking-tight text-ink hover:text-ink"
          >
            Atlas Psiquiátrico
          </Link>
        </div>

        <div className="px-4 pb-2 pt-4">
          <button
            type="button"
            onClick={onAbrirBusca}
            className="group flex w-full items-center justify-between gap-2.5 rounded-lg border border-rule bg-paper px-3 py-2.5 text-ink-3 transition-colors hover:border-accent hover:text-accent active:bg-hover-warm"
          >
            <span className="text-[13px]">Buscar em tudo…</span>
            <span className="rounded border border-rule bg-panel px-[5px] py-px font-mono text-[10px] group-hover:border-accent-border">
              ⌘K
            </span>
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-4 pb-7 pt-3">
          <div className="flex flex-col gap-px">
            <ItemLink
              item={{ nome: "Início", href: "/" }}
              ativo={ativo("/")}
              onClick={onFechar}
            />
          </div>

          {grupos.map((grupo) => (
            <div key={grupo.titulo} className="flex flex-col gap-px">
              <div className="px-2 pb-[7px] font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-4">
                {grupo.titulo}
              </div>

              {grupo.itens.map((item) => (
                <ItemLink
                  key={item.href}
                  item={item}
                  ativo={ativo(item.href)}
                  onClick={onFechar}
                />
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

function ItemLink({
  item,
  ativo,
  onClick,
}: {
  item: ItemMenu;
  ativo: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`flex items-center gap-2.5 rounded-md px-2.5 py-2.5 transition-colors ${
        ativo ? "bg-accent-soft text-accent" : "text-ink hover:bg-hover-warm active:bg-hover-warm"
      }`}
      style={ativo ? { fontWeight: 500 } : undefined}
    >
      <span
        className={`h-[15px] w-[3px] rounded-sm ${ativo ? "bg-accent" : "bg-transparent"}`}
      />
      <span className="text-[13.5px]">{item.nome}</span>
    </Link>
  );
}
