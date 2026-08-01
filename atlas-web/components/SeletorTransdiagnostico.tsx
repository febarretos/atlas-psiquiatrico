"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import EffectRadarChart from "./EffectRadarChart";
import EvidenciaStars from "./EvidenciaStars";

import { condicoesAlvo, buscarMedicamentosTransdiagnostico } from "../lib/condicoesAlvo";

const MAX_RADAR_OVERLAY = 4;

export default function SeletorTransdiagnostico() {
  const [selecionadas, setSelecionadas] = useState<Set<string>>(new Set());

  function alternar(id: string) {
    setSelecionadas((prev) => {
      const novo = new Set(prev);
      if (novo.has(id)) {
        novo.delete(id);
      } else {
        novo.add(id);
      }
      return novo;
    });
  }

  const resultados = useMemo(
    () => buscarMedicamentosTransdiagnostico([...selecionadas]),
    [selecionadas]
  );

  const totalAlvos = selecionadas.size;

  const candidatosParaRadar = resultados.slice(0, MAX_RADAR_OVERLAY);

  const coberturaCompleta = resultados.filter(
    (r) => r.cobertura.length === totalAlvos
  );

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Selecione duas ou mais condições-alvo para encontrar medicamentos com
        indicação documentada para várias delas ao mesmo tempo, e comparar o
        perfil de efeitos entre os candidatos.
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {condicoesAlvo.map((c) => {
          const ativo = selecionadas.has(c.id);

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => alternar(c.id)}
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

      {totalAlvos === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center text-sm text-slate-500">
          Selecione ao menos uma condição-alvo acima para ver os candidatos.
        </div>
      ) : resultados.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center text-sm text-slate-500">
          Nenhum medicamento cadastrado tem indicação documentada para
          nenhuma das condições selecionadas.
        </div>
      ) : (
        <div className="space-y-8">
          {totalAlvos > 1 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Perfil de efeitos — top {candidatosParaRadar.length} candidato(s)
              </div>

              {coberturaCompleta.length === 0 && (
                <p className="mb-4 text-sm text-yellow-300/90">
                  Nenhum medicamento cadastrado cobre todas as{" "}
                  {totalAlvos} condições selecionadas simultaneamente —
                  mostrando os candidatos com maior cobertura combinada.
                </p>
              )}

              <div className="flex justify-center">
                <EffectRadarChart
                  perfis={candidatosParaRadar.map((r) => ({
                    nome: r.medicamento.nome,
                    ganhoPeso: r.medicamento.ganhoPeso,
                    sedacao: r.medicamento.sedacao,
                    sexual: r.medicamento.sexual,
                    qt: r.medicamento.qt,
                  }))}
                  size={300}
                />
              </div>
            </div>
          )}

          <div className="space-y-4">
            {resultados.map((r) => (
              <div
                key={r.medicamento.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/medicamentos/${encodeURIComponent(r.medicamento.nome)}`}
                    className="text-xl font-semibold text-white hover:text-blue-400"
                  >
                    {r.medicamento.nome}
                  </Link>

                  <Badge color={r.cobertura.length === totalAlvos ? "green" : "blue"}>
                    {r.cobertura.length}/{totalAlvos} alvo(s) cobertos
                  </Badge>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {r.medicamento.classe}
                  {r.medicamento.subclasse ? ` — ${r.medicamento.subclasse}` : ""}
                </p>

                <ul className="mt-4 space-y-2">
                  {r.cobertura.map((c) => (
                    <li
                      key={c.condicaoId}
                      className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 pt-2 text-sm first:border-t-0 first:pt-0"
                    >
                      <span className="text-slate-300">
                        {c.condicaoNome}
                        <span className="text-slate-500">
                          {" "}
                          ({c.indicacaoEncontrada})
                        </span>
                      </span>

                      {c.nivelEvidencia && (
                        <EvidenciaStars nivel={c.nivelEvidencia} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-6 text-xs leading-5 text-yellow-300/90">
        Cruzamento baseado exclusivamente nas indicações já cadastradas
        neste app — a ausência de um medicamento aqui não significa ausência
        de evidência na literatura. Sempre validar com diretrizes atualizadas
        e o julgamento clínico individualizado antes de prescrever.
      </p>
    </div>
  );
}
