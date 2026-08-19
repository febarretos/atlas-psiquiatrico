"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import ComparisonTable from "./ComparisonTable";
import EffectRadarChart from "./EffectRadarChart";
import EvidenciaStars from "./EvidenciaStars";
import AssistenteSintomas from "./assistente/AssistenteSintomas";
import AssistenteAlvos from "./assistente/AssistenteAlvos";
import AssistenteManual from "./assistente/AssistenteManual";
import { useSintomasAssistente } from "./assistente/useSintomasAssistente";
import { useAlvosAssistente } from "./assistente/useAlvosAssistente";
import type { CandidatoBase } from "./assistente/types";

import { medicamentos } from "../data/medicamentos";
import { Medicamento } from "../data/types";
import {
  FiltrosPerfil,
  filtrosPerfilIniciais,
  filtrosPerfilDisponiveis,
  avaliarMedicamento,
} from "../lib/avaliacaoPerfil";

type Modo = "sintomas" | "alvos" | "manual";

const MAX_RADAR = 4;

export default function AssistenteMedicacao() {
  const [modo, setModo] = useState<Modo>("sintomas");
  const [filtros, setFiltros] = useState<FiltrosPerfil>(filtrosPerfilIniciais);
  const [mostrarTabela, setMostrarTabela] = useState(false);
  const [idsManual, setIdsManual] = useState<string[]>(["", "", "", ""]);

  const sintomasHook = useSintomasAssistente();
  const alvosHook = useAlvosAssistente();

  function trocarModo(novoModo: Modo) {
    setModo(novoModo);
    setMostrarTabela(false);
  }

  function recomecar() {
    sintomasHook.reset();
    alvosHook.reset();
    setIdsManual(["", "", "", ""]);
    setFiltros(filtrosPerfilIniciais);
    setMostrarTabela(false);
  }

  const medicamentosManual = useMemo(() => {
    const vistos = new Set<string>();
    return idsManual
      .map((id) => medicamentos.find((m) => m.id === id))
      .filter((m): m is Medicamento => {
        if (!m || vistos.has(m.id)) return false;
        vistos.add(m.id);
        return true;
      });
  }, [idsManual]);

  const candidatosManualBase = useMemo<CandidatoBase[]>(
    () => medicamentosManual.map((m) => ({ medicamento: m })),
    [medicamentosManual]
  );

  const candidatosBase: CandidatoBase[] =
    modo === "sintomas"
      ? sintomasHook.candidatosBase
      : modo === "alvos"
        ? alvosHook.candidatosBase
        : candidatosManualBase;

  const candidatosAvaliados = useMemo(() => {
    return candidatosBase
      .map((c) => ({
        ...c,
        avaliacao: avaliarMedicamento(c.medicamento, filtros),
      }))
      .sort((a, b) => {
        // Modo manual preserva sempre a ordem que o usuário escolheu — os
        // filtros de perfil só anotam, nunca reordenam essa lista.
        if (modo === "manual") return 0;

        // Para os demais modos, `candidatosBase` já chega na ordem final
        // correta (ranking de sintomas, ou cobertura+evidência de alvos).
        // O sort do JS é estável (garantido por spec desde ES2019), então
        // ordenar só por `avaliacao.pontos` preserva essa ordem de entrada
        // como desempate, sem precisar de um campo numérico combinado
        // tipo "ordemPrimaria" para representar as duas prioridades.
        return b.avaliacao.pontos - a.avaliacao.pontos;
      });
  }, [candidatosBase, filtros, modo]);

  const algumFiltroAtivo = Object.values(filtros).some(Boolean);
  const candidatosParaRadar = candidatosAvaliados.slice(0, MAX_RADAR);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        {[
          { chave: "sintomas" as const, rotulo: "Por sintomas" },
          { chave: "alvos" as const, rotulo: "Por condições-alvo" },
          { chave: "manual" as const, rotulo: "Comparação manual" },
        ].map((m) => (
          <button
            key={m.chave}
            type="button"
            onClick={() => trocarModo(m.chave)}
            className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
              modo === m.chave
                ? "border-accent bg-accent-soft text-accent"
                : "border-rule bg-panel text-ink-2 hover:border-accent-border"
            }`}
          >
            {m.rotulo}
          </button>
        ))}
      </div>

      {modo === "sintomas" && <AssistenteSintomas {...sintomasHook} />}
      {modo === "alvos" && <AssistenteAlvos {...alvosHook} />}
      {modo === "manual" && (
        <AssistenteManual
          idsManual={idsManual}
          setIdsManual={setIdsManual}
          medicamentos={medicamentos}
        />
      )}

      {candidatosBase.length > 0 && (
        <div className="flex flex-col gap-6 border-t border-rule pt-8">
          <div className="rounded-xl border border-rule bg-panel p-5">
            <p className="mb-3 text-sm font-semibold text-ink-2">
              Perfil do paciente — o que priorizar/evitar? (opcional,
              reordena os candidatos abaixo)
            </p>

            <div className="flex flex-wrap gap-2">
              {filtrosPerfilDisponiveis.map((f) => (
                <button
                  key={f.chave}
                  type="button"
                  onClick={() =>
                    setFiltros((atual) => ({ ...atual, [f.chave]: !atual[f.chave] }))
                  }
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    filtros[f.chave]
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-rule bg-paper text-ink-2 hover:border-accent-border"
                  }`}
                >
                  {f.rotulo}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {candidatosAvaliados.map(
              ({ medicamento, badgePrincipal, evidenciaMinima, detalhes, avaliacao }) => (
              <Link
                key={medicamento.id}
                href={`/medicamentos/${encodeURIComponent(medicamento.nome)}`}
                target="_blank"
                className="rounded-xl border border-rule bg-panel p-6 transition-colors hover:border-accent"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-bold text-ink">{medicamento.nome}</h4>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge color="blue">{medicamento.classe}</Badge>
                    {medicamento.subclasse && (
                      <Badge color="green">{medicamento.subclasse}</Badge>
                    )}
                    {badgePrincipal && <Badge color="gray">{badgePrincipal}</Badge>}
                    {evidenciaMinima && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs text-ink-3"
                        title="Nível de evidência do alvo com menor força entre os cobertos"
                      >
                        evidência mín.
                        <EvidenciaStars nivel={evidenciaMinima} />
                      </span>
                    )}
                  </div>
                </div>

                {detalhes && detalhes.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {detalhes.map((d) => (
                      <li
                        key={d.texto}
                        className="flex flex-wrap items-center justify-between gap-2 text-sm text-ink-2"
                      >
                        <span className="flex items-center gap-2">
                          {d.texto}
                          {d.primeiraLinha && <Badge color="green">Primeira linha</Badge>}
                        </span>
                        {d.nivelEvidencia && <EvidenciaStars nivel={d.nivelEvidencia} />}
                      </li>
                    ))}
                  </ul>
                )}

                {algumFiltroAtivo &&
                  (avaliacao.positivos.length > 0 || avaliacao.alertas.length > 0) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {avaliacao.positivos.map((p) => (
                        <span
                          key={p}
                          className="rounded-full border border-ok-border bg-ok-bg px-3 py-1 text-xs text-ok"
                        >
                          ✓ {p}
                        </span>
                      ))}
                      {avaliacao.alertas.map((a) => (
                        <span
                          key={a}
                          className="rounded-full border border-warn-border bg-warn-bg px-3 py-1 text-xs text-warn"
                        >
                          ⚠ {a}
                        </span>
                      ))}
                    </div>
                  )}
              </Link>
            ))}
          </div>

          <div className="rounded-xl border border-rule bg-panel p-6">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-ink-3">
              Perfil de efeitos — top {candidatosParaRadar.length}
            </div>

            <div className="flex justify-center">
              <EffectRadarChart
                perfis={candidatosParaRadar.map(({ medicamento }) => ({
                  nome: medicamento.nome,
                  ganhoPeso: medicamento.ganhoPeso,
                  sedacao: medicamento.sedacao,
                  sexual: medicamento.sexual,
                  qt: medicamento.qt,
                }))}
                size={280}
              />
            </div>
          </div>

          {candidatosAvaliados.length >= 2 && (
            <div>
              <button
                type="button"
                onClick={() => setMostrarTabela((v) => !v)}
                className="rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                {mostrarTabela ? "Ocultar" : "Ver"} tabela comparativa detalhada
              </button>

              {mostrarTabela && (
                <div className="mt-4">
                  <ComparisonTable
                    medicamentos={candidatosAvaliados
                      .slice(0, MAX_RADAR)
                      .map((c) => c.medicamento)}
                  />
                </div>
              )}
            </div>
          )}

          <p className="text-xs leading-5 text-ink-3">
            Lista de candidatos a partir do modo de entrada escolhido acima —
            não substitui avaliação de comorbidades, interações com outros
            medicamentos em uso, custo, disponibilidade e preferência do
            paciente. Verificar interações medicamentosas em fonte
            especializada (ex.: bula, Micromedex, Stockley&apos;s, UpToDate)
            antes de associar a outros medicamentos já em uso.
          </p>

          <div>
            <button
              type="button"
              onClick={recomecar}
              className="rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
            >
              Recomeçar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
