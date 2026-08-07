import Link from "next/link";
import { medicamentos } from "../../../data/medicamentos";
import { diagnosticos } from "../../../data/diagnosticos";
import { fluxogramas } from "../../../data/fluxogramas";
import { casosSimuladorEmergencia } from "../../../data/simulador-emergencia";
import { casosSimulador } from "../../../data/simulador";
import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import BotaoCopiarProntuario from "../../../components/BotaoCopiarProntuario";
import EffectRadarChart from "../../../components/EffectRadarChart";
import EvidenciaStars from "../../../components/EvidenciaStars";
import InfoCard from "../../../components/InfoCard";
import Lista from "../../../components/Lista";
import Rating from "../../../components/Rating";
import Section from "../../../components/Section";
import {
  corCargaAnticolinergica,
  corGravidez,
  corLactacao,
  rotuloGravidez,
  rotuloLactacao,
} from "../../../lib/populacoesEspeciais";
import { normalizeEffectKey } from "../../../lib/effectScale";
import { gerarTextoMedicamento } from "../../../lib/gerarTextoProntuario";

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

  const qtKey = normalizeEffectKey(medicamento.qt);
  const qtAlto = qtKey === "alto" || qtKey === "muitoalto";

  // Busca reversa: onde este medicamento é referenciado em outros
  // módulos, que hoje só linkam nessa direção (módulo -> medicamento).
  const diagnosticosQueUsam = diagnosticos.filter((d) =>
    d.medicamentosPrimeiraLinha?.includes(medicamento.id)
  );

  const fluxogramasQueUsam = fluxogramas.filter((f) =>
    f.nodes.some((n) => n.medicamentosRelacionados?.includes(medicamento.id))
  );

  const casosEmergenciaQueUsam = casosSimuladorEmergencia.filter((c) =>
    c.acoesDisponiveis.some((a) => a.medicamentoId === medicamento.id)
  );

  const casosSimuladorQueUsam = casosSimulador.filter((c) =>
    c.nos.some((n) => n.opcoes.some((o) => o.medicamentoId === medicamento.id))
  );

  const temReferenciaCruzada =
    diagnosticosQueUsam.length > 0 ||
    fluxogramasQueUsam.length > 0 ||
    casosEmergenciaQueUsam.length > 0 ||
    casosSimuladorQueUsam.length > 0;

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

          <div className="mt-6">
            <BotaoCopiarProntuario texto={gerarTextoMedicamento(medicamento)} />
          </div>
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

        {(medicamento.serotoninergico !== undefined || medicamento.cargaAnticolinergica) && (
          <Section titulo="🧩 Atenção Estrutural em Combinações">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex flex-wrap gap-3">
                {medicamento.serotoninergico !== undefined && (
                  <Badge color={medicamento.serotoninergico ? "yellow" : "gray"}>
                    {medicamento.serotoninergico ? "Serotoninérgico" : "Não serotoninérgico"}
                  </Badge>
                )}

                {medicamento.cargaAnticolinergica && (
                  <Badge color={corCargaAnticolinergica[medicamento.cargaAnticolinergica]}>
                    Carga anticolinérgica: {medicamento.cargaAnticolinergica}
                  </Badge>
                )}
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Atributos factuais e estáticos do fármaco — não são uma
                checagem automática de interações. Ao associar a outros
                medicamentos, verificar interações em fonte especializada
                (bula, Micromedex, Stockley&apos;s, UpToDate).
              </p>

              {(medicamento.serotoninergico || qtAlto) && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {medicamento.serotoninergico && (
                    <Link
                      href="/emergencias/sindrome-serotoninergica"
                      className="text-sm font-medium text-blue-400 hover:text-blue-300"
                    >
                      Ver: Síndrome Serotoninérgica →
                    </Link>
                  )}

                  {qtAlto && (
                    <Link
                      href="/emergencias/torsades-de-pointes"
                      className="text-sm font-medium text-blue-400 hover:text-blue-300"
                    >
                      Ver: Torsades de Pointes / Prolongamento do QT →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </Section>
        )}

        {temReferenciaCruzada && (
          <Section titulo="🔗 Onde este medicamento aparece">
            <div className="grid gap-6 md:grid-cols-2">
              {diagnosticosQueUsam.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Primeira linha para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {diagnosticosQueUsam.map((d) => (
                      <Link key={d.id} href={`/diagnosticos/${d.id}`}>
                        <Badge color="blue">🧠 {d.nome}</Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {fluxogramasQueUsam.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Usado nestes fluxogramas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {fluxogramasQueUsam.map((f) => (
                      <Link key={f.id} href={`/fluxogramas/${f.id}`}>
                        <Badge color="green">🌳 {f.titulo}</Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {casosEmergenciaQueUsam.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Aparece no Simulador de Emergência
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {casosEmergenciaQueUsam.map((c) => (
                      <Link key={c.id} href={`/simulador-emergencia/${c.id}`}>
                        <Badge color="yellow">🚨 {c.nomeAnedotico}</Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {casosSimuladorQueUsam.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Aparece no Simulador de Psiquiatria
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {casosSimuladorQueUsam.map((c) => (
                      <Link key={c.id} href={`/simulador/${c.id}`}>
                        <Badge color="gray">🎮 {c.tituloAnedotico}</Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Section>
        )}
      </div>
    </main>
  );
}