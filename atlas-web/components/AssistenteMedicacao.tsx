"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import ComparisonTable from "./ComparisonTable";
import EffectRadarChart from "./EffectRadarChart";
import EvidenciaStars from "./EvidenciaStars";
import MedicamentoSelect from "./MedicamentoSelect";

import { sintomas, categoriasSintomas } from "../data/sintomas";
import { diagnosticos } from "../data/diagnosticos";
import { Diagnostico } from "../data/diagnosticos/types";
import { medicamentos } from "../data/medicamentos";
import { Medicamento } from "../data/types";
import { condicoesAlvo, buscarMedicamentosTransdiagnostico } from "../lib/condicoesAlvo";
import {
  FiltrosPerfil,
  filtrosPerfilIniciais,
  filtrosPerfilDisponiveis,
  avaliarMedicamento,
} from "../lib/avaliacaoPerfil";

type Modo = "sintomas" | "alvos" | "manual";
type EstadoSintoma = "presente" | "ausente";

// Marcar um sintoma-chave como "ausente" pesa mais do que a simples ausência
// de marcação (não avaliado) — descartar ativamente um sintoma quase
// patognomônico (peso 3) deve derrubar o candidato para perto de 0%, mas
// descartar um único sintoma pouco específico (peso 1) não deve eliminar um
// candidato bem sustentado pelos demais. 1.5x é o multiplicador mínimo que
// produz essa distinção nos dois casos de teste (TEPT / Depressão Maior).
const PENALIDADE_AUSENTE_MULTIPLICADOR = 1.5;

interface DetalheCandidato {
  texto: string;
  nivelEvidencia?: 1 | 2 | 3 | 4 | 5;
}

interface CandidatoBase {
  medicamento: Medicamento;
  badgePrincipal?: string;
  evidenciaMinima?: 1 | 2 | 3 | 4 | 5;
  detalhes?: DetalheCandidato[];
  ordemPrimaria: number;
}

const MAX_RADAR = 4;

interface SintomaPillProps {
  rotulo: string;
  estado?: EstadoSintoma;
  onMarcar: (estado: EstadoSintoma) => void;
}

// Pílula de duas zonas: clicar no texto marca "presente" (mantém o gesto de
// um clique já existente), clicar no ✗ marca "ausente" — sem ciclo escondido
// entre estados, os dois gestos ficam sempre visíveis e diretos.
function SintomaPill({ rotulo, estado, onMarcar }: SintomaPillProps) {
  return (
    <div
      className={`inline-flex items-stretch overflow-hidden rounded-full border text-sm transition-colors ${
        estado === "presente"
          ? "border-blue-500"
          : estado === "ausente"
            ? "border-red-500/60"
            : "border-slate-700"
      }`}
    >
      <button
        type="button"
        onClick={() => onMarcar("presente")}
        className={`px-4 py-2 text-left transition-colors ${
          estado === "presente"
            ? "bg-blue-500/10 text-blue-300"
            : "bg-slate-900 text-slate-300 hover:border-slate-600"
        }`}
      >
        {rotulo}
      </button>

      <button
        type="button"
        onClick={() => onMarcar("ausente")}
        title="Marcar como ausente/descartado"
        className={`border-l px-2 py-2 text-xs transition-colors ${
          estado === "ausente"
            ? "border-red-500/40 bg-red-500/10 text-red-300"
            : "border-slate-700 bg-slate-900 text-slate-500 hover:text-red-300"
        }`}
      >
        ✗
      </button>
    </div>
  );
}

export default function AssistenteMedicacao() {
  const [modo, setModo] = useState<Modo>("sintomas");
  const [filtros, setFiltros] = useState<FiltrosPerfil>(filtrosPerfilIniciais);
  const [mostrarTabela, setMostrarTabela] = useState(false);

  const [sintomasMarcados, setSintomasMarcados] = useState<Map<string, EstadoSintoma>>(
    new Map()
  );
  const [diagnosticoEscolhido, setDiagnosticoEscolhido] = useState<Diagnostico | null>(null);

  const [alvosSelecionados, setAlvosSelecionados] = useState<Set<string>>(new Set());

  const [idsManual, setIdsManual] = useState<string[]>(["", "", "", ""]);

  function marcarSintoma(id: string, estado: EstadoSintoma) {
    setSintomasMarcados((atual) => {
      const novo = new Map(atual);
      if (novo.get(id) === estado) novo.delete(id);
      else novo.set(id, estado);
      return novo;
    });
  }

  function alternarAlvo(id: string) {
    setAlvosSelecionados((atual) => {
      const novo = new Set(atual);
      if (novo.has(id)) novo.delete(id);
      else novo.add(id);
      return novo;
    });
  }

  function trocarModo(novoModo: Modo) {
    setModo(novoModo);
    setMostrarTabela(false);
  }

  function recomecar() {
    setSintomasMarcados(new Map());
    setDiagnosticoEscolhido(null);
    setAlvosSelecionados(new Set());
    setIdsManual(["", "", "", ""]);
    setFiltros(filtrosPerfilIniciais);
    setMostrarTabela(false);
  }

  const candidatosDiagnostico = useMemo(() => {
    if (sintomasMarcados.size === 0) return [];

    return diagnosticos
      .filter((d) => d.sintomasChave && d.sintomasChave.length > 0)
      .map((d) => {
        const chave = d.sintomasChave!;
        const pesoTotal = chave.reduce((s, c) => s + c.peso, 0);

        const presentes = chave.filter((c) => sintomasMarcados.get(c.id) === "presente");
        const ausentes = chave.filter((c) => sintomasMarcados.get(c.id) === "ausente");

        const pesoPresente = presentes.reduce((s, c) => s + c.peso, 0);
        const pesoAusente = ausentes.reduce((s, c) => s + c.peso, 0);

        const scoreBruto =
          pesoTotal > 0
            ? (pesoPresente - PENALIDADE_AUSENTE_MULTIPLICADOR * pesoAusente) / pesoTotal
            : 0;

        return {
          diagnostico: d,
          scoreBruto,
          score: Math.max(0, Math.min(1, scoreBruto)),
          matchedCount: presentes.length,
          totalCount: chave.length,
          matchedRotulos: presentes.map(
            (c) => sintomas.find((s) => s.id === c.id)?.rotulo ?? c.id
          ),
          descartadosRotulos: ausentes.map(
            (c) => sintomas.find((s) => s.id === c.id)?.rotulo ?? c.id
          ),
        };
      })
      .filter((c) => c.matchedCount > 0)
      .sort((a, b) => b.scoreBruto - a.scoreBruto || b.matchedCount - a.matchedCount)
      .slice(0, 6);
  }, [sintomasMarcados]);

  // Sintomas-chave que discriminam os 2 principais candidatos do ranking:
  // exclusivos de um deles (não presentes no sintomasChave do outro) e ainda
  // não avaliados — ou seja, "perguntas que valeria a pena fazer agora" para
  // separar as duas hipóteses mais prováveis.
  const discriminacaoTop2 = useMemo(() => {
    if (candidatosDiagnostico.length < 2) return null;

    const [primeiro, segundo] = candidatosDiagnostico;
    const chaveA = primeiro.diagnostico.sintomasChave ?? [];
    const chaveB = segundo.diagnostico.sintomasChave ?? [];
    const idsA = new Set(chaveA.map((c) => c.id));
    const idsB = new Set(chaveB.map((c) => c.id));

    const exclusivos = (chave: { id: string; peso: number }[], idsOutro: Set<string>) =>
      chave
        .filter((c) => !idsOutro.has(c.id) && !sintomasMarcados.has(c.id))
        .sort((a, b) => b.peso - a.peso)
        .map((c) => ({ id: c.id, rotulo: sintomas.find((s) => s.id === c.id)?.rotulo ?? c.id }));

    return {
      a: primeiro.diagnostico,
      b: segundo.diagnostico,
      soA: exclusivos(chaveA, idsB),
      soB: exclusivos(chaveB, idsA),
    };
  }, [candidatosDiagnostico, sintomasMarcados]);

  const resultadosAlvos = useMemo(
    () => buscarMedicamentosTransdiagnostico([...alvosSelecionados]),
    [alvosSelecionados]
  );

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

  const candidatosBase = useMemo<CandidatoBase[]>(() => {
    if (modo === "sintomas") {
      if (!diagnosticoEscolhido?.medicamentosPrimeiraLinha) return [];

      return diagnosticoEscolhido.medicamentosPrimeiraLinha
        .map((id) => medicamentos.find((m) => m.id === id))
        .filter((m): m is Medicamento => Boolean(m))
        .map((m) => ({
          medicamento: m,
          badgePrincipal: `Primeira linha — ${diagnosticoEscolhido.nome}`,
          ordemPrimaria: 0,
        }));
    }

    if (modo === "alvos") {
      return resultadosAlvos.map((r) => ({
        medicamento: r.medicamento,
        badgePrincipal: `${r.cobertura.length}/${alvosSelecionados.size} alvo(s) coberto(s)`,
        evidenciaMinima: r.cobertura.reduce(
          (min: number, c) => Math.min(min, c.nivelEvidencia ?? 1),
          5
        ) as 1 | 2 | 3 | 4 | 5,
        detalhes: r.cobertura.map((c) => ({
          texto: `${c.condicaoNome} (${c.indicacaoEncontrada})`,
          nivelEvidencia: c.nivelEvidencia,
        })),
        ordemPrimaria:
          r.cobertura.length * 10 +
          r.cobertura.reduce((s, c) => s + (c.nivelEvidencia ?? 0), 0),
      }));
    }

    return medicamentosManual.map((m, i) => ({
      medicamento: m,
      ordemPrimaria: -i,
    }));
  }, [modo, diagnosticoEscolhido, resultadosAlvos, alvosSelecionados, medicamentosManual]);

  const candidatosAvaliados = useMemo(() => {
    return candidatosBase
      .map((c) => ({
        ...c,
        avaliacao: avaliarMedicamento(c.medicamento, filtros),
      }))
      .sort((a, b) => {
        if (modo === "manual") return b.ordemPrimaria - a.ordemPrimaria;
        if (b.ordemPrimaria !== a.ordemPrimaria) return b.ordemPrimaria - a.ordemPrimaria;
        return b.avaliacao.pontos - a.avaliacao.pontos;
      });
  }, [candidatosBase, filtros, modo]);

  const algumFiltroAtivo = Object.values(filtros).some(Boolean);
  const candidatosParaRadar = candidatosAvaliados.slice(0, MAX_RADAR);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        {[
          { chave: "sintomas" as const, rotulo: "🧭 Por sintomas" },
          { chave: "alvos" as const, rotulo: "🎯 Por condições-alvo" },
          { chave: "manual" as const, rotulo: "⚖️ Comparação manual" },
        ].map((m) => (
          <button
            key={m.chave}
            type="button"
            onClick={() => trocarModo(m.chave)}
            className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
              modo === m.chave
                ? "border-blue-500 bg-blue-500/10 text-blue-300"
                : "border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-600"
            }`}
          >
            {m.rotulo}
          </button>
        ))}
      </div>

      {modo === "sintomas" && (
        <div className="flex flex-col gap-6">
          {!diagnosticoEscolhido ? (
            <>
              <p className="text-sm text-slate-400">
                Marque os sintomas/sinais observados no paciente para ver
                diagnósticos prováveis — ainda não fechou hipótese. Clique no
                texto para marcar como presente; clique no ✗ para marcar como
                ausente/descartado.
              </p>

              {categoriasSintomas.map((categoria) => (
                <div key={categoria}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
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
                <div className="rounded-xl border border-yellow-900/50 bg-yellow-500/5 p-5 text-sm leading-6 text-yellow-200">
                  <strong>⚠️ Hipóteses diagnósticas, não um diagnóstico.</strong>{" "}
                  Ranking calculado pela sobreposição entre os sintomas
                  marcados e um conjunto curado de sintomas-chave por
                  diagnóstico — não avalia critérios completos, duração,
                  diferenciais nem exclusão de causas orgânicas.
                </div>
              )}

              {sintomasMarcados.size > 0 && candidatosDiagnostico.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center text-slate-400">
                  Nenhum diagnóstico com sobreposição relevante para os
                  sintomas marcados. Marque outros sintomas, ou consulte
                  diretamente o módulo Diagnósticos.
                </div>
              )}

              {discriminacaoTop2 && (
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <p className="text-sm font-semibold text-slate-300">
                    Sintomas que ajudariam a diferenciar os 2 principais candidatos
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                    <Badge color="blue">{discriminacaoTop2.a.nome}</Badge>
                    <span>vs.</span>
                    <Badge color="green">{discriminacaoTop2.b.nome}</Badge>
                  </div>

                  {discriminacaoTop2.soA.length === 0 && discriminacaoTop2.soB.length === 0 ? (
                    <p className="mt-3 text-sm text-slate-500">
                      Nenhum sintoma-chave exclusivo de um dos dois ainda não
                      avaliado — considere os diferenciais e critérios
                      completos de cada um (link &quot;Ver critérios&quot;
                      abaixo).
                    </p>
                  ) : (
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-wide text-blue-300">
                          Sugere {discriminacaoTop2.a.nome}, não {discriminacaoTop2.b.nome}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {discriminacaoTop2.soA.length === 0 && (
                            <span className="text-xs text-slate-600">nenhum restante</span>
                          )}
                          {discriminacaoTop2.soA.map((s) => (
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
                        <p className="mb-2 text-xs uppercase tracking-wide text-green-300">
                          Sugere {discriminacaoTop2.b.nome}, não {discriminacaoTop2.a.nome}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {discriminacaoTop2.soB.length === 0 && (
                            <span className="text-xs text-slate-600">nenhum restante</span>
                          )}
                          {discriminacaoTop2.soB.map((s) => (
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
                {candidatosDiagnostico.map((c) => (
                  <div
                    key={c.diagnostico.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {c.diagnostico.nome}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <Badge color="blue">{c.diagnostico.categoria}</Badge>
                          <Badge color="gray">
                            {c.matchedCount}/{c.totalCount} sintomas-chave
                          </Badge>
                          {c.descartadosRotulos.length > 0 && (
                            <Badge color="red">
                              {c.descartadosRotulos.length} descartado(s)
                            </Badge>
                          )}
                          <span className="text-xs text-slate-500">
                            cobertura ponderada: {Math.round(c.score * 100)}%
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          href={`/diagnosticos/${c.diagnostico.id}`}
                          target="_blank"
                          className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
                        >
                          Ver critérios
                        </Link>

                        <button
                          type="button"
                          onClick={() => setDiagnosticoEscolhido(c.diagnostico)}
                          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                        >
                          Usar este diagnóstico →
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-slate-400">
                      Sintomas correspondentes: {c.matchedRotulos.join(", ")}
                    </p>

                    {c.descartadosRotulos.length > 0 && (
                      <p className="mt-1 text-sm text-red-300/80">
                        Descartados (marcados ausentes): {c.descartadosRotulos.join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-white">
                    {diagnosticoEscolhido.nome}
                  </h3>
                  <Badge color="blue">{diagnosticoEscolhido.categoria}</Badge>
                </div>

                <button
                  type="button"
                  onClick={() => setDiagnosticoEscolhido(null)}
                  className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
                >
                  ← Trocar diagnóstico
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-yellow-900/50 bg-yellow-500/5 p-5">
                <p className="text-sm font-semibold text-yellow-200">
                  Antes de fechar essa hipótese, descartar:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-yellow-100/90">
                  {diagnosticoEscolhido.diagnosticoDiferencial.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              {diagnosticoEscolhido.comorbidadesComuns &&
                diagnosticoEscolhido.comorbidadesComuns.length > 0 && (
                  <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950 p-5">
                    <p className="text-sm font-semibold text-slate-300">
                      Rastrear também (comorbidades comuns):
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-300">
                      {diagnosticoEscolhido.comorbidadesComuns.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

              <p className="mt-4 text-sm font-semibold text-slate-300">
                Tratamento de primeira linha (segundo diretrizes):
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-300">
                {diagnosticoEscolhido.tratamentoPrimeiraLinha.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              {(!diagnosticoEscolhido.medicamentosPrimeiraLinha ||
                diagnosticoEscolhido.medicamentosPrimeiraLinha.length === 0) && (
                <div className="mt-4 rounded-xl border border-dashed border-slate-700 bg-slate-950 p-4 text-sm text-slate-400">
                  Tratamento de primeira linha predominantemente não
                  farmacológico — sem sugestão de medicamentos para este
                  diagnóstico.
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {modo === "alvos" && (
        <div className="flex flex-col gap-6">
          <p className="text-sm text-slate-400">
            Já sabe o(s) alvo(s) clínico(s) — selecione uma ou mais condições
            para cruzar com as indicações documentadas de cada medicamento.
          </p>

          <div className="flex flex-wrap gap-2">
            {condicoesAlvo.map((c) => {
              const ativo = alvosSelecionados.has(c.id);

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => alternarAlvo(c.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    ativo
                      ? "border-blue-500 bg-blue-500/10 text-blue-300"
                      : "border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {c.nome}
                </button>
              );
            })}
          </div>

          {alvosSelecionados.size === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center text-sm text-slate-500">
              Selecione ao menos uma condição-alvo acima para ver os
              candidatos.
            </div>
          ) : (
            resultadosAlvos.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center text-sm text-slate-500">
                Nenhum medicamento cadastrado tem indicação documentada para
                nenhuma das condições selecionadas, nos dados desta
                ferramenta.
              </div>
            )
          )}
        </div>
      )}

      {modo === "manual" && (
        <div className="flex flex-col gap-6">
          <p className="text-sm text-slate-400">
            Já tem candidatos específicos em mente — escolha até 4
            medicamentos para comparar diretamente.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {idsManual.map((id, i) => (
              <MedicamentoSelect
                key={i}
                medicamentos={medicamentos}
                label={`Medicamento ${i + 1}`}
                value={id}
                onChange={(value) =>
                  setIdsManual((prev) => prev.map((v, idx) => (idx === i ? value : v)))
                }
              />
            ))}
          </div>
        </div>
      )}

      {candidatosBase.length > 0 && (
        <div className="flex flex-col gap-6 border-t border-slate-800 pt-8">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="mb-3 text-sm font-semibold text-slate-300">
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
                      ? "border-blue-500 bg-blue-500/10 text-blue-300"
                      : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-600"
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
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-bold text-white">{medicamento.nome}</h4>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge color="blue">{medicamento.classe}</Badge>
                    {medicamento.subclasse && (
                      <Badge color="green">{medicamento.subclasse}</Badge>
                    )}
                    {badgePrincipal && <Badge color="gray">{badgePrincipal}</Badge>}
                    {evidenciaMinima && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs text-slate-500"
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
                        className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-400"
                      >
                        <span>{d.texto}</span>
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
                          className="rounded-full border border-green-900/50 bg-green-500/10 px-3 py-1 text-xs text-green-300"
                        >
                          ✓ {p}
                        </span>
                      ))}
                      {avaliacao.alertas.map((a) => (
                        <span
                          key={a}
                          className="rounded-full border border-yellow-900/50 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300"
                        >
                          ⚠ {a}
                        </span>
                      ))}
                    </div>
                  )}
              </Link>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
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
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
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

          <p className="text-xs leading-5 text-slate-500">
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
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
            >
              Recomeçar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
