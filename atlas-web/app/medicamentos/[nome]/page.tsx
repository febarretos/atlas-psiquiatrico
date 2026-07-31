import { medicamentos } from "../../../data/medicamentos";
import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import InfoCard from "../../../components/InfoCard";
import Lista from "../../../components/Lista";
import Rating from "../../../components/Rating";
import Section from "../../../components/Section";

interface Props {
  params: Promise<{
    nome: string;
  }>;
}

export default async function Medicamento({
  params,
}: Props) {
  const { nome } = await params;

  const medicamento = medicamentos.find(
    (m) => m.nome === decodeURIComponent(nome)
  );

  if (!medicamento) {
    notFound();
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-xl border border-slate-800 bg-slate-900 p-8">
          <h1 className="text-5xl font-bold">
            💊 {medicamento.nome}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3">
            <Badge color="blue">
              {medicamento.classe}
            </Badge>

            {medicamento.subclasse && (
              <Badge color="green">
                {medicamento.subclasse}
              </Badge>
            )}
          </div>

          {medicamento.nomeComercial && (
            <p className="mt-6 text-slate-400">
              <strong>Nome comercial:</strong>{" "}
              {medicamento.nomeComercial.join(", ")}
            </p>
          )}
        </div>

        <Section titulo="💊 Posologia">
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="min-w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">
                    Indicação
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Inicial
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Usual
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Máxima
                  </th>
                </tr>
              </thead>

              <tbody>
                {medicamento.posologias.map((p) => (
                  <tr
                    key={p.indicacao}
                    className="border-t border-slate-800"
                  >
                    <td className="px-4 py-3">
                      {p.indicacao}
                    </td>

                    <td className="px-4 py-3">
                      {p.doseInicial}
                    </td>

                    <td className="px-4 py-3">
                      {p.doseUsual}
                    </td>

                    <td className="px-4 py-3">
                      {p.doseMaxima}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section titulo="⚙️ Farmacologia">
          <div className="grid gap-5 lg:grid-cols-2">
            <InfoCard
              titulo="Mecanismo de ação"
              valor={medicamento.mecanismo}
            />

            <InfoCard
              titulo="Metabolização"
              valor={medicamento.metabolizacao ?? "-"}
            />

            <InfoCard
              titulo="Meia-vida"
              valor={medicamento.meiaVida ?? "-"}
            />
          </div>
        </Section>

        <Section titulo="🧠 Indicações">
          <Lista itens={medicamento.indicacoes} />
        </Section>

        <Section titulo="⭐ Vantagens">
          <Lista itens={medicamento.vantagens} />
        </Section>

        <Section titulo="⚠️ Desvantagens">
          <Lista itens={medicamento.desvantagens} />
        </Section>

        {medicamento.efeitosAdversos && (
          <Section titulo="🚨 Efeitos adversos">
            <Lista itens={medicamento.efeitosAdversos} />
          </Section>
        )}

        {medicamento.interacoes && (
          <Section titulo="🔄 Interações medicamentosas">
            <Lista itens={medicamento.interacoes} />
          </Section>
        )}

        <Section titulo="📊 Perfil Clínico">
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              titulo="Ganho de peso"
              valor={<Rating value={medicamento.ganhoPeso} />}
            />

            <InfoCard
              titulo="Sedação"
              valor={<Rating value={medicamento.sedacao} />}
            />

            <InfoCard
              titulo="Disfunção sexual"
              valor={<Rating value={medicamento.sexual} />}
            />

            <InfoCard
              titulo="Prolongamento do QT"
              valor={<Rating value={medicamento.qt} />}
            />
          </div>
        </Section>
      </div>
    </main>
  );
}