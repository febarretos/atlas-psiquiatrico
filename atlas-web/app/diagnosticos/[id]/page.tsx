import Link from "next/link";
import { diagnosticos } from "../../../data/diagnosticos";
import { medicamentos } from "../../../data/medicamentos";
import { fluxogramas } from "../../../data/fluxogramas";
import { notFound } from "next/navigation";

import Badge from "../../../components/Badge";
import BotaoFavoritar from "../../../components/BotaoFavoritar";
import DiagnosticoProntuarioPanel from "../../../components/DiagnosticoProntuarioPanel";
import InfoCard from "../../../components/InfoCard";
import Lista from "../../../components/Lista";
import VisitaTracker from "../../../components/VisitaTracker";

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

  const medicamentosPrimeiraLinha = (diagnostico.medicamentosPrimeiraLinha ?? [])
    .map((id) => medicamentos.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const fluxogramasQueUsam = fluxogramas.filter((f) =>
    f.nodes.some((n) => n.diagnosticosRelacionados?.includes(diagnostico.id))
  );

  return (
    <div className="mx-auto max-w-[980px] animate-atlas-rise pt-[38px]">
      <VisitaTracker
        tipo="diagnostico"
        id={diagnostico.id}
        nome={diagnostico.nome}
        href={`/diagnosticos/${encodeURIComponent(diagnostico.id)}`}
      />

      <Link
        href="/diagnosticos"
        className="mb-4 inline-block font-mono text-[10.5px] tracking-[0.1em] uppercase text-ink-3 hover:text-accent"
      >
        ← Diagnósticos
      </Link>

      <div className="border-b border-rule pb-[22px]">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <h1 className="font-serif text-[40px] font-medium leading-none tracking-tight text-ink sm:text-[48px]">
            {diagnostico.nome}
          </h1>

          <BotaoFavoritar
            tipo="diagnostico"
            id={diagnostico.id}
            nome={diagnostico.nome}
            href={`/diagnosticos/${encodeURIComponent(diagnostico.id)}`}
          />
        </div>

        <div className="mt-3.5 flex flex-wrap gap-2">
          <Badge color="blue">{diagnostico.categoria}</Badge>
          {diagnostico.cid11 && <Badge color="green">CID-11 {diagnostico.cid11}</Badge>}
          {diagnostico.cid10 && <Badge color="gray">CID-10 {diagnostico.cid10}</Badge>}
        </div>

        <p className="mt-4 max-w-[70ch] text-[14px] leading-relaxed text-ink-2">
          {diagnostico.descricao}
        </p>

        <div className="mt-5">
          <DiagnosticoProntuarioPanel diagnostico={diagnostico} />
        </div>
      </div>

      <div className="mt-9">
        <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-serif text-2xl font-medium text-ink">
            Critérios diagnósticos (DSM-5-TR)
          </h2>
          {diagnostico.entrevistaEstruturada && (
            <Link
              href={`/entrevista-estruturada?diagnostico=${encodeURIComponent(diagnostico.id)}`}
              className="text-sm text-accent hover:underline"
            >
              Aplicar como entrevista estruturada →
            </Link>
          )}
        </div>
        <div className="rounded-xl border border-rule bg-panel p-6">
          <Lista itens={diagnostico.criteriosDiagnosticos} />
        </div>
      </div>

      {diagnostico.especificadores && diagnostico.especificadores.length > 0 && (
        <div className="mt-9">
          <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">Especificadores</h2>
          <div className="rounded-xl border border-rule bg-panel p-6">
            <Lista itens={diagnostico.especificadores} />
          </div>
        </div>
      )}

      <div className="mt-9">
        <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">Panorama clínico</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {diagnostico.prevalencia && (
            <InfoCard titulo="Prevalência" valor={diagnostico.prevalencia} />
          )}
          {diagnostico.duracaoMinima && (
            <InfoCard titulo="Duração mínima" valor={diagnostico.duracaoMinima} />
          )}
          {diagnostico.cursoEPrognostico && (
            <InfoCard titulo="Curso e prognóstico" valor={diagnostico.cursoEPrognostico} />
          )}
        </div>
      </div>

      <div className="mt-9">
        <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">
          Diagnóstico diferencial
        </h2>
        <div className="rounded-xl border border-rule bg-panel p-6">
          <Lista itens={diagnostico.diagnosticoDiferencial} />
        </div>
      </div>

      {diagnostico.comorbidadesComuns && diagnostico.comorbidadesComuns.length > 0 && (
        <div className="mt-9">
          <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">
            Comorbidades comuns
          </h2>
          <div className="rounded-xl border border-rule bg-panel p-6">
            <Lista itens={diagnostico.comorbidadesComuns} />
          </div>
        </div>
      )}

      <div className="mt-9">
        <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">
          Tratamento de primeira linha
        </h2>
        <div className="rounded-xl border border-rule bg-panel p-6">
          <Lista itens={diagnostico.tratamentoPrimeiraLinha} />

          {medicamentosPrimeiraLinha.length > 0 && (
            <div className="mt-5 border-t border-rule-soft pt-5">
              <div className="mb-2.5 font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-4">
                Medicamentos de primeira linha
              </div>
              <div className="flex flex-wrap gap-2">
                {medicamentosPrimeiraLinha.map((m) => (
                  <Link key={m.id} href={`/medicamentos/${encodeURIComponent(m.nome)}`}>
                    <Badge color="blue">{m.nome}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {fluxogramasQueUsam.length > 0 && (
        <div className="mt-9">
          <h2 className="mb-3.5 font-serif text-2xl font-medium text-ink">
            Fluxogramas relacionados
          </h2>
          <div className="rounded-xl border border-rule bg-panel p-6">
            <div className="flex flex-wrap gap-2">
              {fluxogramasQueUsam.map((f) => (
                <Link key={f.id} href={`/fluxogramas/${encodeURIComponent(f.id)}`}>
                  <Badge color="gray">{f.titulo}</Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {diagnostico.referencias && diagnostico.referencias.length > 0 && (
        <div className="mt-9 border-t border-rule pt-6">
          <h2 className="mb-3 font-serif text-[22px] font-medium text-ink">Referências</h2>
          <div className="flex flex-col">
            {diagnostico.referencias.map((r) => (
              <div key={r} className="border-b border-rule-soft py-2 text-[13px] text-ink-2">
                {r}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
