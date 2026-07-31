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
        <div className="h-6 w-1 rounded-full bg-blue-500 print:hidden" />

        <h2 className="text-2xl font-bold text-white print:text-black">
          {titulo}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm print:border-none print:bg-white print:p-0 print:text-black print:shadow-none">
        {children}
      </div>
    </section>
  );
}