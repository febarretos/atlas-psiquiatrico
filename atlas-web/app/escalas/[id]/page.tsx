import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import Section from "../../../components/Section";
import EscalaForm from "../../../components/escalas/EscalaForm";

import { escalas } from "../../../data/escalas";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EscalaPage({ params }: Props) {
  const { id } = await params;

  const escala = escalas.find((e) => e.id === decodeURIComponent(id));

  if (!escala) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10 rounded-xl border border-slate-800 bg-slate-900 p-8 print:hidden">
        <h1 className="text-4xl font-bold text-white">
          📋 {escala.nome}
        </h1>

        <div className="mt-5 flex flex-wrap gap-3">
          <Badge color="blue">{escala.sigla}</Badge>
          <Badge color="gray">{escala.categoria}</Badge>
        </div>

        <p className="mt-6 text-slate-400">{escala.descricao}</p>
      </div>

      {/* Cabeçalho enxuto exibido apenas na impressão/PDF */}
      <div className="hidden print:mb-6 print:block print:text-black">
        <h1 className="text-2xl font-bold">
          {escala.nome} ({escala.sigla})
        </h1>
        <p className="text-sm text-slate-700">
          Aplicada em {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>

      <Section titulo="🖊️ Instruções">
        <p className="text-slate-300 print:text-black">{escala.instrucoes}</p>
      </Section>

      <Section titulo="✅ Formulário de avaliação">
        <EscalaForm escala={escala} />
      </Section>

      {escala.referencias && escala.referencias.length > 0 && (
        <Section titulo="📚 Referências">
          <ul className="list-disc space-y-2 pl-6 text-sm text-slate-400">
            {escala.referencias.map((ref) => (
              <li key={ref}>{ref}</li>
            ))}
          </ul>
        </Section>
      )}
    </main>
  );
}
