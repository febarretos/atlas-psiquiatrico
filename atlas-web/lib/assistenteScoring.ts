import { sintomas } from "../data/sintomas/index.ts";
import type { Diagnostico } from "../data/diagnosticos/types.ts";

export type EstadoSintoma = "presente" | "ausente";

// Marcar um sintoma-chave como "ausente" pesa mais do que a simples ausência
// de marcação (não avaliado) — descartar ativamente um sintoma quase
// patognomônico (peso 3) deve derrubar o candidato para perto de 0%, mas
// descartar um único sintoma pouco específico (peso 1) não deve eliminar um
// candidato bem sustentado pelos demais. 1.5x é o multiplicador mínimo que
// produz essa distinção (ver assistenteScoring.test.ts).
//
// Simplificação assumida: presença e ausência do mesmo sintoma usam o mesmo
// peso-base (só escalado por este multiplicador), não uma força de exclusão
// clinicamente calibrada por sintoma — alguns sintomas são muito mais
// excludentes quando ausentes do que outros (ex.: ausência de história de
// mania é quase exclusão de Bipolar tipo I), e este modelo não capta essa
// diferença.
export const PENALIDADE_AUSENTE_MULTIPLICADOR = 1.5;

function rotuloDoSintoma(id: string): string {
  return sintomas.find((s) => s.id === id)?.rotulo ?? id;
}

export interface CandidatoDiagnostico {
  diagnostico: Diagnostico;
  // Chave de ordenação (não clampada) — usar para sort/desempate, nunca
  // para exibição.
  scoreBruto: number;
  // Percentual exibido ao usuário, sempre entre 0 e 1.
  score: number;
  matchedCount: number;
  totalCount: number;
  matchedRotulos: string[];
  descartadosRotulos: string[];
}

export function calcularCandidatosDiagnostico(
  diagnosticos: Diagnostico[],
  sintomasMarcados: Map<string, EstadoSintoma>
): CandidatoDiagnostico[] {
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
        matchedRotulos: presentes.map((c) => rotuloDoSintoma(c.id)),
        descartadosRotulos: ausentes.map((c) => rotuloDoSintoma(c.id)),
      };
    })
    .filter((c) => c.matchedCount > 0)
    .sort((a, b) => b.scoreBruto - a.scoreBruto || b.matchedCount - a.matchedCount)
    .slice(0, 6);
}

export interface SintomaDiscriminador {
  id: string;
  rotulo: string;
}

export interface Discriminacao {
  a: Diagnostico;
  b: Diagnostico;
  // Sintomas-chave exclusivos de `a` (ausentes do sintomasChave de `b`) e
  // ainda não avaliados — em ordem decrescente de peso.
  soA: SintomaDiscriminador[];
  soB: SintomaDiscriminador[];
}

// Sintomas-chave que discriminam dois candidatos: exclusivos de um deles
// (não presentes no sintomasChave do outro) e ainda não avaliados — ou
// seja, "perguntas que valeria a pena fazer agora" para separar as duas
// hipóteses. Recebe os dois candidatos explicitamente (não necessariamente
// o top-2 do ranking) para permitir comparação manual de qualquer par.
export function calcularDiscriminacao(
  a: Diagnostico,
  b: Diagnostico,
  sintomasMarcados: Map<string, EstadoSintoma>
): Discriminacao {
  const chaveA = a.sintomasChave ?? [];
  const chaveB = b.sintomasChave ?? [];
  const idsA = new Set(chaveA.map((c) => c.id));
  const idsB = new Set(chaveB.map((c) => c.id));

  const exclusivos = (
    chave: { id: string; peso: number }[],
    idsOutro: Set<string>
  ): SintomaDiscriminador[] =>
    chave
      .filter((c) => !idsOutro.has(c.id) && !sintomasMarcados.has(c.id))
      .sort((x, y) => y.peso - x.peso)
      .map((c) => ({ id: c.id, rotulo: rotuloDoSintoma(c.id) }));

  return {
    a,
    b,
    soA: exclusivos(chaveA, idsB),
    soB: exclusivos(chaveB, idsA),
  };
}
