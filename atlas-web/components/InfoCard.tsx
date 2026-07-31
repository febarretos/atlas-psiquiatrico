import { ReactNode } from "react";

interface InfoCardProps {
  titulo: string;
  valor: ReactNode;
}

export default function InfoCard({
  titulo,
  valor,
}: InfoCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 transition-colors hover:border-slate-700">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {titulo}
      </div>

      <div className="text-base text-white">
        {valor}
      </div>
    </div>
  );
}