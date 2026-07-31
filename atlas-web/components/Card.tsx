import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  titulo: string;
  descricao?: string;
  href?: string;
  children?: ReactNode;
}

export default function Card({
  titulo,
  descricao,
  href,
  children,
}: CardProps) {
  const conteudo = (
    <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
      <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
        {titulo}
      </h3>

      {descricao && (
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {descricao}
        </p>
      )}

      {children && (
        <div className="mt-5">
          {children}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full"
      >
        {conteudo}
      </Link>
    );
  }

  return conteudo;
}