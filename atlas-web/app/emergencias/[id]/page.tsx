import { emergencias } from "../../../data/emergencias";
import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import Lista from "../../../components/Lista";
import Section from "../../../components/Section";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EmergenciaDetalhe({
  params,
}: Props) {
  const { id } = await params;

  const emergencia = emergencias.find(
    (e) => e.id === decodeURIComponent(id)
  );

  if (!emergencia) {
    notFound();
  }

  return (
    <main className="text-ink">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-xl border border-alert-border bg-alert-bg p-8">
          <h1 className="text-5xl font-bold text-alert-deep">
            {emergencia.nome}
          </h1>

          <div className="mt-5 flex flex-wrap gap-3">
            <Badge color="gray">
              {emergencia.categoria}
            </Badge>

            <Badge color="red">
              {emergencia.gravidade === "muito alta" ? "Gravidade muito alta" : "Gravidade alta"}
            </Badge>
          </div>

          <p className="mt-6 text-alert-muted">
            {emergencia.descricao}
          </p>
        </div>

        <Section titulo="Quadro Clínico">
          <Lista itens={emergencia.quadroClinico} />
        </Section>

        {emergencia.criteriosDiagnosticos && emergencia.criteriosDiagnosticos.length > 0 && (
          <Section titulo="Critérios / Red Flags">
            <Lista itens={emergencia.criteriosDiagnosticos} />
          </Section>
        )}

        {emergencia.causasComuns && emergencia.causasComuns.length > 0 && (
          <Section titulo="Causas Comuns">
            <Lista itens={emergencia.causasComuns} />
          </Section>
        )}

        <Section titulo="Conduta Imediata">
          <Lista itens={emergencia.condutaImediata} />
        </Section>

        {emergencia.examesComplementares && emergencia.examesComplementares.length > 0 && (
          <Section titulo="Exames Complementares">
            <Lista itens={emergencia.examesComplementares} />
          </Section>
        )}

        {emergencia.diagnosticoDiferencial && emergencia.diagnosticoDiferencial.length > 0 && (
          <Section titulo="Diagnóstico Diferencial">
            <Lista itens={emergencia.diagnosticoDiferencial} />
          </Section>
        )}

        {emergencia.referencias && emergencia.referencias.length > 0 && (
          <Section titulo="Referências">
            <Lista itens={emergencia.referencias} />
          </Section>
        )}
      </div>
    </main>
  );
}
