import { notFound } from "next/navigation";

import AchadoPsicopatologico from "../../../components/AchadoPsicopatologico";
import Badge from "../../../components/Badge";
import Lista from "../../../components/Lista";
import Section from "../../../components/Section";

import { dominiosPsicopatologicos } from "../../../data/psicopatologia";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DominioPsicopatologicoDetalhe({
  params,
}: Props) {
  const { id } = await params;

  const dominio = dominiosPsicopatologicos.find(
    (d) => d.id === decodeURIComponent(id)
  );

  if (!dominio) {
    notFound();
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-xl border border-slate-800 bg-slate-900 p-8">
          <h1 className="text-5xl font-bold">
            🧩 {dominio.nome}
          </h1>

          <div className="mt-5">
            <Badge color="blue">
              {dominio.achados.length} achado(s)
            </Badge>
          </div>

          <p className="mt-6 text-slate-400">
            {dominio.descricao}
          </p>
        </div>

        <Section titulo="🔎 Achados">
          <div className="space-y-6">
            {dominio.achados.map((achado) => (
              <AchadoPsicopatologico
                key={achado.id}
                achado={achado}
              />
            ))}
          </div>
        </Section>

        {dominio.referencias && dominio.referencias.length > 0 && (
          <Section titulo="📚 Referências">
            <Lista itens={dominio.referencias} />
          </Section>
        )}
      </div>
    </main>
  );
}
