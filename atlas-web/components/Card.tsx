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
    <div className="group h-full rounded-xl border border-rule bg-panel p-6 transition-colors hover:border-accent">
      <h3 className="font-serif text-xl font-medium text-ink transition-colors group-hover:text-accent">
        {titulo}
      </h3>

      {descricao && (
        <p className="mt-3 text-sm leading-6 text-ink-2">
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
