import { medicamentos } from "../../../data/medicamentos";
import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import EffectRadarChart from "../../../components/EffectRadarChart";
import EvidenciaStars from "../../../components/EvidenciaStars";
import InfoCard from "../../../components/InfoCard";
import Lista from "../../../components/Lista";
import Rating from "../../../components/Rating";
import Section from "../../../components/Section";

interface Props {
  params: Promise<{
    nome: string;
  }>;
}

const corGravidez = {
  preferencial: "green" as const,
  cautela: "yellow" as const,
  evitar: "red" as const,
};

const rotuloGravidez = {
  preferencial: "Opção preferencial",
  cautela: "Usar com cautela",
  evitar: "Evitar quando possível",
};

const corLactacao = {
  compativel: "green" as const,
  cautela: "yellow" as const,
  evitar: "red" as const,
};

const rotuloLactacao = {
  compativel: "Geralmente compatível",
  cautela: "Usar com cautela",
  evitar: "Geralmente evitar",
};

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

                  <th className="px-4 py-3 text-left font-semibold">
                    Evidência
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

                    <td className="px-4 py-3">
                      {p.nivelEvidencia ? (
                        <EvidenciaStars nivel={p.nivelEvidencia} />
                      ) : (
                        <span className="text-slate-600">—</span>
                      )}
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

        {medicamento.perolasClinicas && medicamento.perolasClinicas.length > 0 && (
          <Section titulo="💡 Pérolas Clínicas">
            <Lista itens={medicamento.perolasClinicas} />
          </Section>
        )}

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

        <Section titulo="🤰 Populações Especiais">
          <div className="grid gap-5 lg:grid-cols-2">
            <InfoCard
              titulo="Gravidez"
              valor={
                <div className="flex flex-col gap-2">
                  {medicamento.gravidezCategoria && (
                    <Badge color={corGravidez[medicamento.gravidezCategoria]}>
                      {rotuloGravidez[medicamento.gravidezCategoria]}
                    </Badge>
                  )}
                  <span>{medicamento.gravidez}</span>
                </div>
              }
            />

            <InfoCard
              titulo="Lactação"
              valor={
                <div className="flex flex-col gap-2">
                  {medicamento.lactacaoCategoria && (
                    <Badge color={corLactacao[medicamento.lactacaoCategoria]}>
                      {rotuloLactacao[medicamento.lactacaoCategoria]}
                    </Badge>
                  )}
                  <span>{medicamento.lactacao}</span>
                </div>
              }
            />

            <InfoCard
              titulo="Insuficiência Renal"
              valor={
                <div className="flex flex-col gap-2">
                  {medicamento.ajusteRenalNecessario !== undefined && (
                    <Badge color={medicamento.ajusteRenalNecessario ? "yellow" : "green"}>
                      {medicamento.ajusteRenalNecessario
                        ? "Requer ajuste/cautela"
                        : "Sem ajuste necessário"}
                    </Badge>
                  )}
                  <span>{medicamento.renal}</span>
                </div>
              }
            />

            <InfoCard
              titulo="Insuficiência Hepática"
              valor={medicamento.hepatica}
            />
          </div>
        </Section>

        <Section titulo="📊 Perfil Clínico">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex justify-center rounded-xl border border-slate-800 bg-slate-900 p-4">
              <EffectRadarChart
                perfis={[
                  {
                    nome: medicamento.nome,
                    ganhoPeso: medicamento.ganhoPeso,
                    sedacao: medicamento.sedacao,
                    sexual: medicamento.sexual,
                    qt: medicamento.qt,
                  },
                ]}
                size={220}
              />
            </div>

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
          </div>
        </Section>
      </div>
    </main>
  );
}