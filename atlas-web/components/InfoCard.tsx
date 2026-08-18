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
    <div className="rounded-lg border border-rule bg-panel px-5 py-4">
      <div className="mb-2 font-mono text-[10px] tracking-wider uppercase text-ink-3">
        {titulo}
      </div>

      <div className="text-[15px] text-ink">
        {valor}
      </div>
    </div>
  );
}
