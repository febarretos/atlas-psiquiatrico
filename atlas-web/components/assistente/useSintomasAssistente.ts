"use client";

import { useMemo, useState } from "react";

import { diagnosticos } from "../../data/diagnosticos";
import type { Diagnostico } from "../../data/diagnosticos/types";
import { medicamentos } from "../../data/medicamentos";
import type { Medicamento } from "../../data/types";
import {
  calcularCandidatosDiagnostico,
  calcularDiscriminacao,
  type EstadoSintoma,
} from "../../lib/assistenteScoring";
import type { CandidatoBase } from "./types";

const MAX_FIXADOS = 2;

export function useSintomasAssistente() {
  const [sintomasMarcados, setSintomasMarcados] = useState<Map<string, EstadoSintoma>>(
    new Map()
  );
  const [diagnosticoEscolhido, setDiagnosticoEscolhido] = useState<Diagnostico | null>(null);
  // Diagnósticos fixados manualmente para o painel de discriminação — até
  // 2, com o mais antigo saindo quando um terceiro é fixado. Vazio =
  // usar automaticamente os 2 primeiros do ranking.
  const [fixados, setFixados] = useState<string[]>([]);

  function marcarSintoma(id: string, estado: EstadoSintoma) {
    setSintomasMarcados((atual) => {
      const novo = new Map(atual);
      if (novo.get(id) === estado) novo.delete(id);
      else novo.set(id, estado);
      return novo;
    });
  }

  function alternarFixado(diagnosticoId: string) {
    setFixados((atual) => {
      if (atual.includes(diagnosticoId)) {
        return atual.filter((id) => id !== diagnosticoId);
      }

      const novo = [...atual, diagnosticoId];
      return novo.length > MAX_FIXADOS ? novo.slice(novo.length - MAX_FIXADOS) : novo;
    });
  }

  function reset() {
    setSintomasMarcados(new Map());
    setDiagnosticoEscolhido(null);
    setFixados([]);
  }

  const candidatosDiagnostico = useMemo(
    () => calcularCandidatosDiagnostico(diagnosticos, sintomasMarcados),
    [sintomasMarcados]
  );

  const discriminacao = useMemo(() => {
    let a: Diagnostico | undefined;
    let b: Diagnostico | undefined;

    if (fixados.length === MAX_FIXADOS) {
      a = diagnosticos.find((d) => d.id === fixados[0]);
      b = diagnosticos.find((d) => d.id === fixados[1]);
    } else if (candidatosDiagnostico.length >= 2) {
      a = candidatosDiagnostico[0].diagnostico;
      b = candidatosDiagnostico[1].diagnostico;
    }

    if (!a || !b) return null;

    return calcularDiscriminacao(a, b, sintomasMarcados);
  }, [fixados, candidatosDiagnostico, sintomasMarcados]);

  const candidatosBase = useMemo<CandidatoBase[]>(() => {
    if (!diagnosticoEscolhido?.medicamentosPrimeiraLinha) return [];

    return diagnosticoEscolhido.medicamentosPrimeiraLinha
      .map((id) => medicamentos.find((m) => m.id === id))
      .filter((m): m is Medicamento => Boolean(m))
      .map((m) => ({
        medicamento: m,
        // O campo medicamentosPrimeiraLinha é documentado (types.ts) como
        // "primeira OU segunda linha" — inclui casos como clozapina em
        // esquizofrenia, reservada para refratariedade, não intercambiável
        // com os agentes realmente de primeira linha. "Tratamento
        // indicado" evita a badge sugerir equivalência que o texto do
        // próprio diagnóstico contradiz.
        badgePrincipal: `Tratamento indicado — ${diagnosticoEscolhido.nome}`,
      }));
  }, [diagnosticoEscolhido]);

  return {
    sintomasMarcados,
    marcarSintoma,
    diagnosticoEscolhido,
    setDiagnosticoEscolhido,
    candidatosDiagnostico,
    discriminacao,
    fixados,
    alternarFixado,
    candidatosBase,
    reset,
  };
}

export type UseSintomasAssistente = ReturnType<typeof useSintomasAssistente>;
