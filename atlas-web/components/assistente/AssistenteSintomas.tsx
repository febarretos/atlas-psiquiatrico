"use client";

import Link from "next/link";

import Badge from "../Badge";
import SintomaPill from "./SintomaPill";
import type { UseSintomasAssistente } from "./useSintomasAssistente";

import { sintomas, categoriasSintomas } from "../../data/sintomas";
import { alertasSeguranca } from "../../lib/alertasSeguranca";

type Props = UseSintomasAssistente;

export default function AssistenteSintomas({
  sintomasMarcados,
  marcarSintoma,
  diagnosticoEscolhido,
  setDiagnosticoEscolhido,
  candidatosDiagnostico,
  discriminacao,
  fixados,
  alternarFixado,
}: Props) {
  const alertasAtivos = alertasSeguranca.filter((a) => a.gatilho(sintomasMarcados));

  if (diagnosticoEscolhido) {
    return (
      <div className="rounded-xl border border-rule bg-panel p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-ink">{diagnosticoEscolhido.nome}</h3>
            <Badge color="blue">{diagnosticoEscolhido.categoria}</Badge>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/diagnosticos/${diagnosticoEscolhido.id}`}
              target="_blank"
              className="rounded-lg border border-rule px-3 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
            >
              Ver critérios
            </Link>
            <button
              type="button"
              onClick={() => setDiagnosticoEscolhido(null)}
              className="rounded-lg border border-rule px-3 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
            >
              ← Trocar diagnóstico
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-warn-border bg-warn-bg p-5">
          <p className="text-sm font-semibold text-warn">
            Antes de fechar essa hipótese, descartar:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-warn">
            {diagnosticoEscolhido.diagnosticoDiferencial.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        {diagnosticoEscolhido.comorbidadesComuns &&
          diagnosticoEscolhido.comorbidadesComuns.length > 0 && (
            <div className="mt-4 rounded-xl border border-rule bg-paper p-5">
              <p className="text-sm font-semibold text-ink-2">
                Rastrear também (comorbidades comuns):
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-ink-2">
                {diagnosticoEscolhido.comorbidadesComuns.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}

        <p className="mt-4 text-sm font-semibold text-ink-2">
          Tratamento de primeira linha (segundo diretrizes):
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-ink-2">
          {diagnosticoEscolhido.tratamentoPrimeiraLinha.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {(!diagnosticoEscolhido.medicamentosPrimeiraLinha ||
          diagnosticoEscolhido.medicamentosPrimeiraLinha.length === 0) && (
          <div className="mt-4 rounded-xl border border-dashed border-rule bg-paper p-4 text-sm text-ink-2">
            Tratamento de primeira linha predominantemente não farmacológico —
            sem sugestão de medicamentos para este diagnóstico.
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-ink-2">
        Marque os sintomas/sinais observados no paciente para ver
        diagnósticos prováveis — ainda não fechou hipótese. Clique no texto
        para marcar como presente; clique no ✗ para marcar como
        ausente/descartado.
      </p>

      {alertasAtivos.length > 0 && (
        <div className="flex flex-col gap-3">
          {alertasAtivos.map((a) => (
            <div
              key={a.id}
              className="rounded-xl border border-alert-border bg-alert-bg p-5"
            >
              <p className="text-sm font-semibold text-alert">
                Não esqueça de descartar: {a.titulo}
              </p>
              <p className="mt-1 text-sm leading-6 text-alert">{a.descricao}</p>
              <Link
                href={a.href}
                target="_blank"
                className="mt-2 inline-block text-sm font-medium text-alert hover:text-alert-deep"
              >
                {a.linkLabel} →
              </Link>
            </div>
          ))}
        </div>
      )}

      {categoriasSintomas.map((categoria) => (
        <div key={categoria}>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink-3">
            {categoria}
          </h3>

          <div className="flex flex-wrap gap-2">
            {sintomas
              .filter((s) => s.categoria === categoria)
              .map((s) => (
                <SintomaPill
                  key={s.id}
                  rotulo={s.rotulo}
                  estado={sintomasMarcados.get(s.id)}
                  onMarcar={(estado) => marcarSintoma(s.id, estado)}
                />
              ))}
          </div>
        </div>
      ))}

      {sintomasMarcados.size > 0 && (
        <div className="rounded-xl border border-warn-border bg-warn-bg p-5 text-sm leading-6 text-warn">
          <strong>Hipóteses diagnósticas, não um diagnóstico.</strong>{" "}
          Ranking calculado pela sobreposição entre os sintomas marcados e um
          conjunto curado de sintomas-chave por diagnóstico — não avalia
          critérios completos, duração, diferenciais nem exclusão de causas
          orgânicas. Presença e ausência de um mesmo sintoma-chave usam o
          mesmo peso como simplificação: na prática clínica, a ausência de
          alguns sintomas é muito mais excludente do que a de outros, e este
          modelo não captura essa diferença.
        </div>
      )}

      {sintomasMarcados.size > 0 && candidatosDiagnostico.length === 0 && (
        <div className="rounded-xl border border-dashed border-rule bg-paper p-8 text-center text-ink-2">
          Nenhum diagnóstico com sobreposição relevante para os sintomas
          marcados. Marque outros sintomas, ou consulte diretamente o módulo
          Diagnósticos.
        </div>
      )}

      {discriminacao && (
        <div className="rounded-xl border border-rule bg-panel p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-ink-2">
              Sintomas que ajudariam a diferenciar
              {fixados.length === 2 ? " os candidatos fixados" : " os 2 principais candidatos"}
            </p>
            {fixados.length === 2 && (
              <span className="text-xs text-ink-3">
                fixado manualmente — clique em &quot;Fixar&quot; num card para
                trocar
              </span>
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-ink-2">
            <Badge color="blue">{discriminacao.a.nome}</Badge>
            <span>vs.</span>
            <Badge color="green">{discriminacao.b.nome}</Badge>
          </div>

          {discriminacao.soA.length === 0 && discriminacao.soB.length === 0 ? (
            <p className="mt-3 text-sm text-ink-3">
              Nenhum sintoma-chave exclusivo de um dos dois ainda não
              avaliado — considere os diferenciais e critérios completos de
              cada um (link &quot;Ver critérios&quot; abaixo).
            </p>
          ) : (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs uppercase tracking-wide text-accent">
                  Sugere {discriminacao.a.nome}, não {discriminacao.b.nome}
                </p>
                <div className="flex flex-wrap gap-2">
                  {discriminacao.soA.length === 0 && (
                    <span className="text-xs text-ink-4">nenhum restante</span>
                  )}
                  {discriminacao.soA.map((s) => (
                    <SintomaPill
                      key={s.id}
                      rotulo={s.rotulo}
                      estado={sintomasMarcados.get(s.id)}
                      onMarcar={(estado) => marcarSintoma(s.id, estado)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wide text-ok">
                  Sugere {discriminacao.b.nome}, não {discriminacao.a.nome}
                </p>
                <div className="flex flex-wrap gap-2">
                  {discriminacao.soB.length === 0 && (
                    <span className="text-xs text-ink-4">nenhum restante</span>
                  )}
                  {discriminacao.soB.map((s) => (
                    <SintomaPill
                      key={s.id}
                      rotulo={s.rotulo}
                      estado={sintomasMarcados.get(s.id)}
                      onMarcar={(estado) => marcarSintoma(s.id, estado)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {candidatosDiagnostico.map((c) => {
          const estaFixado = fixados.includes(c.diagnostico.id);

          return (
            <div
              key={c.diagnostico.id}
              className="rounded-xl border border-rule bg-panel p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-ink">{c.diagnostico.nome}</h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Badge color="blue">{c.diagnostico.categoria}</Badge>
                    <Badge color="gray">
                      {c.matchedCount}/{c.totalCount} sintomas-chave
                    </Badge>
                    {c.descartadosRotulos.length > 0 && (
                      <Badge color="red">{c.descartadosRotulos.length} descartado(s)</Badge>
                    )}
                    <span className="text-xs text-ink-3">
                      cobertura ponderada: {Math.round(c.score * 100)}%
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => alternarFixado(c.diagnostico.id)}
                    title="Fixar para comparar no painel de discriminação"
                    className={`rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                      estaFixado
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-rule text-ink-2 hover:border-accent hover:text-ink"
                    }`}
                  >
                    {estaFixado ? "Fixado" : "Fixar"}
                  </button>

                  <Link
                    href={`/diagnosticos/${c.diagnostico.id}`}
                    target="_blank"
                    className="rounded-xl border border-rule px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    Ver critérios
                  </Link>

                  <button
                    type="button"
                    onClick={() => setDiagnosticoEscolhido(c.diagnostico)}
                    className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                  >
                    Usar este diagnóstico →
                  </button>
                </div>
              </div>

              <p className="mt-4 text-sm text-ink-2">
                Sintomas correspondentes: {c.matchedRotulos.join(", ")}
              </p>

              {c.descartadosRotulos.length > 0 && (
                <p className="mt-1 text-sm text-alert">
                  Descartados (marcados ausentes): {c.descartadosRotulos.join(", ")}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
