import { ReactNode } from "react";

interface SectionProps {
  titulo: string;
  children: ReactNode;
}

export default function Section({
  titulo,
  children,
}: SectionProps) {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-6 w-1 rounded-full bg-blue-500" />

        <h2 className="text-2xl font-bold text-white">
          {titulo}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
        {children}
      </div>
    </section>
  );
}