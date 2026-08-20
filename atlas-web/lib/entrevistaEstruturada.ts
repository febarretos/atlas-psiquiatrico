import type { RegraAlgoritmoEntrevista } from "../data/diagnosticos/types";

// Chave estável pra identificar a resposta de 1 critério de 1 diagnóstico
// dentro de um Map global compartilhado pela página de Entrevista
// Estruturada (mesmo padrão de chaveItem em EntrevistaEstruturadaChecklist).
export function chaveCriterio(diagnosticoId: string, criterioId: string): string {
  return `${diagnosticoId}::${criterioId}`;
}

export type EstadoRastreio = "pendente" | "pulado" | "positivo";

// "positivo" assim que QUALQUER critério de rastreio for respondido Sim
// (OR entre eles — não precisa esperar os outros); "pulado" só quando
// TODOS já foram respondidos e nenhum foi positivo; "pendente" enquanto
// ainda restar item de rastreio sem resposta e nenhum positivo até agora.
export function avaliarRastreio(
  respostas: Map<string, boolean>,
  criteriosRastreioIds: string[]
): EstadoRastreio {
  let algumPendente = false;

  for (const id of criteriosRastreioIds) {
    const valor = respostas.get(id);
    if (valor === true) return "positivo";
    if (valor === undefined) algumPendente = true;
  }

  return algumPendente ? "pendente" : "pulado";
}

export interface ResultadoAlgoritmo {
  contagemPositiva: number;
  contagemMinimaAtingida: boolean;
  gruposObrigatoriosAtingidos: boolean;
  criteriosFormaisAtingidos: boolean;
}

// Só avalia a contagem/subgrupos formais do DSM-5-TR — duração e exclusão
// diferencial (RegraAlgoritmoEntrevista.duracaoMinima/observacaoExclusao)
// são deliberadamente texto livre, nunca avaliados aqui: permanecem
// julgamento clínico humano, mesma filosofia de CriteriosChecklist.tsx.
export function avaliarAlgoritmo(
  respostas: Map<string, boolean>,
  algoritmo: RegraAlgoritmoEntrevista
): ResultadoAlgoritmo {
  const contagemPositiva = algoritmo.itensContaveis.filter(
    (id) => respostas.get(id) === true
  ).length;

  const contagemMinimaAtingida =
    algoritmo.contagemMinima === undefined ||
    contagemPositiva >= algoritmo.contagemMinima;

  const gruposObrigatoriosAtingidos = (algoritmo.gruposObrigatorios ?? []).every(
    (grupo) => grupo.some((id) => respostas.get(id) === true)
  );

  return {
    contagemPositiva,
    contagemMinimaAtingida,
    gruposObrigatoriosAtingidos,
    criteriosFormaisAtingidos: contagemMinimaAtingida && gruposObrigatoriosAtingidos,
  };
}
