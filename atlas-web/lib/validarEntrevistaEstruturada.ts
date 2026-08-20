import type { EntrevistaEstruturada } from "../data/diagnosticos/types.ts";

// Valida a integridade estrutural de uma EntrevistaEstruturada (ids de
// critério referenciados pelo algoritmo, contagem mínima coerente com o
// total de itens contáveis). Retorna uma lista de problemas em texto —
// lista vazia significa que passou. Função pura, sem depender de
// node:test, mesmo padrão de lib/validarFluxograma.ts (ver
// lib/entrevistaEstruturada.test.ts pra fixtures quebradas de propósito).
export function validarIntegridadeEntrevista(entrevista: EntrevistaEstruturada): string[] {
  const problemas: string[] = [];
  const idsCriterios = new Set(entrevista.criterios.map((c) => c.id));

  if (idsCriterios.size !== entrevista.criterios.length) {
    problemas.push(`há pelo menos um id de critério duplicado`);
  }

  if (entrevista.criteriosRastreioIds.length === 0) {
    problemas.push(`criteriosRastreioIds está vazio — nenhum critério de rastreio definido`);
  }

  for (const id of entrevista.criteriosRastreioIds) {
    if (!idsCriterios.has(id)) {
      problemas.push(`criteriosRastreioIds referencia "${id}", que não corresponde a nenhum critério`);
    }
  }

  const { algoritmo } = entrevista;

  for (const id of algoritmo.itensContaveis) {
    if (!idsCriterios.has(id)) {
      problemas.push(`algoritmo.itensContaveis referencia "${id}", que não existe entre os critérios`);
    }
  }

  if (
    algoritmo.contagemMinima !== undefined &&
    algoritmo.contagemMinima > algoritmo.itensContaveis.length
  ) {
    problemas.push(
      `algoritmo.contagemMinima (${algoritmo.contagemMinima}) é maior que o total de itensContaveis (${algoritmo.itensContaveis.length}) — nunca fecharia`
    );
  }

  (algoritmo.gruposObrigatorios ?? []).forEach((grupo, indice) => {
    if (grupo.length === 0) {
      problemas.push(`algoritmo.gruposObrigatorios[${indice}] está vazio — nunca seria satisfeito`);
      return;
    }

    for (const id of grupo) {
      if (!idsCriterios.has(id)) {
        problemas.push(
          `algoritmo.gruposObrigatorios[${indice}] referencia "${id}", que não existe entre os critérios`
        );
      }
    }
  });

  (algoritmo.subgruposComMinimo ?? []).forEach((sg, indice) => {
    if (sg.itens.length === 0) {
      problemas.push(`algoritmo.subgruposComMinimo[${indice}] não tem itens`);
      return;
    }

    if (sg.minimo > sg.itens.length) {
      problemas.push(
        `algoritmo.subgruposComMinimo[${indice}].minimo (${sg.minimo}) é maior que o total de itens do subgrupo (${sg.itens.length}) — nunca seria satisfeito`
      );
    }

    for (const id of sg.itens) {
      if (!idsCriterios.has(id)) {
        problemas.push(
          `algoritmo.subgruposComMinimo[${indice}] referencia "${id}", que não existe entre os critérios`
        );
      }
    }
  });

  return problemas;
}
