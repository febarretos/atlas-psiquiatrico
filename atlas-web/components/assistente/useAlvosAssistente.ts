"use client";

import { useMemo, useState } from "react";

import { buscarMedicamentosTransdiagnostico } from "../../lib/condicoesAlvo";
import { paresAntagonicosAtivos } from "../../lib/paresAntagonicos";
import type { CandidatoBase } from "./types";

export function useAlvosAssistente() {
  const [alvosSelecionados, setAlvosSelecionados] = useState<Set<string>>(new Set());

  function alternarAlvo(id: string) {
    setAlvosSelecionados((atual) => {
      const novo = new Set(atual);
      if (novo.has(id)) novo.delete(id);
      else novo.add(id);
      return novo;
    });
  }

  function reset() {
    setAlvosSelecionados(new Set());
  }

  const resultadosAlvos = useMemo(
    () => buscarMedicamentosTransdiagnostico([...alvosSelecionados]),
    [alvosSelecionados]
  );

  const paresAtivos = useMemo(
    () => paresAntagonicosAtivos(alvosSelecionados),
    [alvosSelecionados]
  );

  // buscarMedicamentosTransdiagnostico já devolve a lista ordenada
  // corretamente (cobertura, depois soma de evidência) — o mapeamento
  // abaixo só anota cada candidato, sem recalcular nem alterar a ordem.
  const candidatosBase = useMemo<CandidatoBase[]>(
    () =>
      resultadosAlvos.map((r) => ({
        medicamento: r.medicamento,
        badgePrincipal: `${r.cobertura.length}/${alvosSelecionados.size} alvo(s) coberto(s)`,
        evidenciaMinima: r.cobertura.reduce(
          (min: number, c) => Math.min(min, c.nivelEvidencia ?? 1),
          5
        ) as 1 | 2 | 3 | 4 | 5,
        detalhes: r.cobertura.map((c) => ({
          texto: `${c.condicaoNome} (${c.indicacaoEncontrada})`,
          nivelEvidencia: c.nivelEvidencia,
          primeiraLinha: c.primeiraLinha,
        })),
      })),
    [resultadosAlvos, alvosSelecionados]
  );

  return {
    alvosSelecionados,
    alternarAlvo,
    resultadosAlvos,
    paresAtivos,
    candidatosBase,
    reset,
  };
}

export type UseAlvosAssistente = ReturnType<typeof useAlvosAssistente>;
