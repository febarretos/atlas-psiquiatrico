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
      <h2 className="mb-4 font-serif text-2xl font-medium text-ink print:text-black">
        {titulo}
      </h2>

      <div className="rounded-xl border border-rule bg-panel p-6 print:border-none print:bg-white print:p-0 print:text-black">
        {children}
      </div>
    </section>
  );
}
