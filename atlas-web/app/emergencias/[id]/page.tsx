import Link from "next/link";

import { emergencias } from "../../../data/emergencias";
import { medicamentos } from "../../../data/medicamentos";
import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import BotaoFavoritar from "../../../components/BotaoFavoritar";
import Lista from "../../../components/Lista";
import Section from "../../../components/Section";
import VisitaTracker from "../../../components/VisitaTracker";

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

  const medicamentosResgate = (emergencia.medicamentosResgate ?? [])
    .map((id) => medicamentos.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <main className="text-ink">
      <div className="mx-auto max-w-7xl">
        <VisitaTracker
          tipo="emergencia"
          id={emergencia.id}
          nome={emergencia.nome}
          href={`/emergencias/${encodeURIComponent(emergencia.id)}`}
        />

        <div className="mb-10 rounded-xl border border-alert-border bg-alert-bg p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-5xl font-bold text-alert-deep">
              {emergencia.nome}
            </h1>

            <BotaoFavoritar
              tipo="emergencia"
              id={emergencia.id}
              nome={emergencia.nome}
              href={`/emergencias/${encodeURIComponent(emergencia.id)}`}
            />
          </div>

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

          {medicamentosResgate.length > 0 && (
            <div className="mt-5 border-t border-rule-soft pt-5">
              <div className="mb-2.5 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                Medicamentos de resgate citados na conduta
              </div>
              <div className="flex flex-wrap gap-2">
                {medicamentosResgate.map((m) => (
                  <Link key={m.id} href={`/medicamentos/${encodeURIComponent(m.nome)}`}>
                    <Badge color="blue">{m.nome}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
