import type { Fluxograma } from "../data/fluxogramas/types";
import type { VinculoEscalaFluxograma } from "./escalaFluxogramaLinks";

export interface ContextoValidacaoVinculo {
  idsEscalas: Set<string>;
  fluxogramas: Fluxograma[];
}

// Confere que cada vínculo escala→fluxograma aponta pra coisas que existem
// de verdade: a escala, o fluxograma, e o node dentro daquele fluxograma
// específico. Função pura, mesmo padrão de lib/validarFluxograma.ts.
export function validarVinculoEscalaFluxograma(
  vinculo: VinculoEscalaFluxograma,
  contexto: ContextoValidacaoVinculo
): string[] {
  const problemas: string[] = [];

  if (!contexto.idsEscalas.has(vinculo.escalaId)) {
    problemas.push(`vínculo referencia escalaId "${vinculo.escalaId}", que não existe`);
  }

  const fluxograma = contexto.fluxogramas.find((f) => f.id === vinculo.fluxogramaId);
  if (!fluxograma) {
    problemas.push(`vínculo referencia fluxogramaId "${vinculo.fluxogramaId}", que não existe`);
    return problemas;
  }

  if (!fluxograma.nodes.some((n) => n.id === vinculo.nodeId)) {
    problemas.push(
      `vínculo referencia nodeId "${vinculo.nodeId}" no fluxograma "${vinculo.fluxogramaId}", que não existe`
    );
  }

  return problemas;
}
