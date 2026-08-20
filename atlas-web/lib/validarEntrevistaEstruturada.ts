import type { EntrevistaEstruturada, RegraAlgoritmoEntrevista } from "../data/diagnosticos/types.ts";

// Validação de 1 RegraAlgoritmoEntrevista contra o conjunto de ids de
// critério válidos — extraída pra ser reaproveitada recursivamente em
// `algoritmo.alternativas` (cada alternativa é uma regra completa).
// `caminho` é só pra identificar a origem do problema na mensagem (ex:
// "algoritmo" ou "algoritmo.alternativas[0]").
function validarAlgoritmo(
  algoritmo: RegraAlgoritmoEntrevista,
  idsCriterios: Set<string>,
  caminho: string
): string[] {
  const problemas: string[] = [];

  for (const id of algoritmo.itensContaveis) {
    if (!idsCriterios.has(id)) {
      problemas.push(`${caminho}.itensContaveis referencia "${id}", que não existe entre os critérios`);
    }
  }

  if (
    algoritmo.contagemMinima !== undefined &&
    algoritmo.contagemMinima > algoritmo.itensContaveis.length
  ) {
    problemas.push(
      `${caminho}.contagemMinima (${algoritmo.contagemMinima}) é maior que o total de itensContaveis (${algoritmo.itensContaveis.length}) — nunca fecharia`
    );
  }

  (algoritmo.gruposObrigatorios ?? []).forEach((grupo, indice) => {
    if (grupo.length === 0) {
      problemas.push(`${caminho}.gruposObrigatorios[${indice}] está vazio — nunca seria satisfeito`);
      return;
    }

    for (const id of grupo) {
      if (!idsCriterios.has(id)) {
        problemas.push(
          `${caminho}.gruposObrigatorios[${indice}] referencia "${id}", que não existe entre os critérios`
        );
      }
    }
  });

  (algoritmo.subgruposComMinimo ?? []).forEach((sg, indice) => {
    if (sg.itens.length === 0) {
      problemas.push(`${caminho}.subgruposComMinimo[${indice}] não tem itens`);
      return;
    }

    if (sg.minimo > sg.itens.length) {
      problemas.push(
        `${caminho}.subgruposComMinimo[${indice}].minimo (${sg.minimo}) é maior que o total de itens do subgrupo (${sg.itens.length}) — nunca seria satisfeito`
      );
    }

    for (const id of sg.itens) {
      if (!idsCriterios.has(id)) {
        problemas.push(
          `${caminho}.subgruposComMinimo[${indice}] referencia "${id}", que não existe entre os critérios`
        );
      }
    }
  });

  if (algoritmo.alternativas !== undefined && algoritmo.alternativas.length === 0) {
    problemas.push(`${caminho}.alternativas está vazio (undefined o campo, em vez de array vazio)`);
  }

  (algoritmo.alternativas ?? []).forEach((alt, indice) => {
    problemas.push(...validarAlgoritmo(alt, idsCriterios, `${caminho}.alternativas[${indice}]`));
  });

  return problemas;
}

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

  problemas.push(...validarAlgoritmo(entrevista.algoritmo, idsCriterios, "algoritmo"));

  return problemas;
}
