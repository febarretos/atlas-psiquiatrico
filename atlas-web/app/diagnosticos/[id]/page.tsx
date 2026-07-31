import { diagnosticos } from "../../../data/diagnosticos";
import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import InfoCard from "../../../components/InfoCard";
import Lista from "../../../components/Lista";
import Section from "../../../components/Section";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DiagnosticoDetalhe({
  params,
}: Props) {
  const { id } = await params;

  const diagnostico = diagnosticos.find(
    (d) => d.id === decodeURIComponent(id)
  );

  if (!diagnostico) {
    notFound();
  }

  return (
    <main className="text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-xl border border-slate-800 bg-slate-900 p-8">
          <h1 className="text-5xl font-bold">
            🧠 {diagnostico.nome}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3">
            <Badge color="blue">
              {diagnostico.categoria}
            </Badge>

            {diagnostico.cid11 && (
              <Badge color="green">
                CID-11 {diagnostico.cid11}
              </Badge>
            )}

            {diagnostico.cid10 && (
              <Badge color="gray">
                CID-10 {diagnostico.cid10}
              </Badge>
            )}
          </div>

          <p className="mt-6 text-slate-400">
            {diagnostico.descricao}
          </p>
        </div>

        <Section titulo="📋 Critérios Diagnósticos (DSM-5-TR)">
          <Lista itens={diagnostico.criteriosDiagnosticos} />
        </Section>

        {diagnostico.especificadores && diagnostico.especificadores.length > 0 && (
          <Section titulo="🏷️ Especificadores">
            <Lista itens={diagnostico.especificadores} />
          </Section>
        )}

        <Section titulo="📊 Panorama Clínico">
          <div className="grid gap-5 md:grid-cols-2">
            {diagnostico.prevalencia && (
              <InfoCard
                titulo="Prevalência"
                valor={diagnostico.prevalencia}
              />
            )}

            {diagnostico.duracaoMinima && (
              <InfoCard
                titulo="Duração mínima"
                valor={diagnostico.duracaoMinima}
              />
            )}

            {diagnostico.cursoEPrognostico && (
              <InfoCard
                titulo="Curso e prognóstico"
                valor={diagnostico.cursoEPrognostico}
              />
            )}
          </div>
        </Section>

        <Section titulo="🔍 Diagnóstico Diferencial">
          <Lista itens={diagnostico.diagnosticoDiferencial} />
        </Section>

        {diagnostico.comorbidadesComuns && diagnostico.comorbidadesComuns.length > 0 && (
          <Section titulo="🔗 Comorbidades Comuns">
            <Lista itens={diagnostico.comorbidadesComuns} />
          </Section>
        )}

        <Section titulo="💊 Tratamento de Primeira Linha">
          <Lista itens={diagnostico.tratamentoPrimeiraLinha} />
        </Section>

        {diagnostico.referencias && diagnostico.referencias.length > 0 && (
          <Section titulo="📚 Referências">
            <Lista itens={diagnostico.referencias} />
          </Section>
        )}
      </div>
    </main>
  );
}
