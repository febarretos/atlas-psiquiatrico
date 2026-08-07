import type { Fluxograma } from "../data/fluxogramas/types.ts";

export interface ContextoValidacaoFluxograma {
  idsMedicamentos: Set<string>;
  idsEscalas: Set<string>;
  idsDiagnosticos: Set<string>;
}

// Valida a integridade estrutural de um Fluxograma (grafo de nodes) e as
// referências cruzadas pra outros módulos. Retorna uma lista de problemas
// em texto — lista vazia significa que passou. Função pura, sem depender
// de node:test, pra poder ser testada diretamente contra fixtures
// quebradas de propósito (ver lib/fluxogramas.test.ts).
export function validarIntegridadeFluxograma(
  fluxograma: Fluxograma,
  contexto: ContextoValidacaoFluxograma
): string[] {
  const problemas: string[] = [];
  const idsNos = new Set(fluxograma.nodes.map((n) => n.id));

  if (idsNos.size !== fluxograma.nodes.length) {
    problemas.push(`há pelo menos um id de node duplicado`);
  }

  if (!idsNos.has(fluxograma.nodeInicialId)) {
    problemas.push(`nodeInicialId "${fluxograma.nodeInicialId}" não corresponde a nenhum node`);
  }

  for (const node of fluxograma.nodes) {
    for (const opcao of node.opcoes ?? []) {
      if (!idsNos.has(opcao.proximoNodeId)) {
        problemas.push(
          `node "${node.id}" opção "${opcao.label}" aponta pra "${opcao.proximoNodeId}", que não existe`
        );
      }
    }

    if (node.tipo === "pergunta" && (!node.opcoes || node.opcoes.length === 0)) {
      problemas.push(`node "${node.id}" é tipo "pergunta" mas não tem opções — beco sem saída`);
    }

    for (const id of node.medicamentosRelacionados ?? []) {
      if (!contexto.idsMedicamentos.has(id)) {
        problemas.push(`node "${node.id}" medicamentosRelacionados referencia "${id}", que não existe`);
      }
    }
    for (const id of node.escalasRelacionadas ?? []) {
      if (!contexto.idsEscalas.has(id)) {
        problemas.push(`node "${node.id}" escalasRelacionadas referencia "${id}", que não existe`);
      }
    }
    for (const id of node.diagnosticosRelacionados ?? []) {
      if (!contexto.idsDiagnosticos.has(id)) {
        problemas.push(`node "${node.id}" diagnosticosRelacionados referencia "${id}", que não existe`);
      }
    }
  }

  // Alcançabilidade — só roda se nodeInicialId for válido, senão o BFS
  // não tem por onde começar (o problema já foi reportado acima).
  if (idsNos.has(fluxograma.nodeInicialId)) {
    const alcancados = new Set<string>();
    const fila = [fluxograma.nodeInicialId];

    while (fila.length > 0) {
      const atual = fila.shift()!;
      if (alcancados.has(atual)) continue;
      alcancados.add(atual);

      const node = fluxograma.nodes.find((n) => n.id === atual);
      for (const opcao of node?.opcoes ?? []) {
        if (idsNos.has(opcao.proximoNodeId)) fila.push(opcao.proximoNodeId);
      }
    }

    const inalcancaveis = fluxograma.nodes.map((n) => n.id).filter((id) => !alcancados.has(id));
    if (inalcancaveis.length > 0) {
      problemas.push(
        `node(s) inalcançável(is) a partir de "${fluxograma.nodeInicialId}": ${inalcancaveis.join(", ")}`
      );
    }
  }

  return problemas;
}
