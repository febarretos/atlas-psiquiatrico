export interface FluxogramaOpcao {
  label: string;
  proximoNodeId: string;
}

export interface FluxogramaNode {
  id: string;

  tipo: "pergunta" | "conduta";

  texto: string;

  detalhe?: string; // texto explicativo adicional, opcional

  opcoes?: FluxogramaOpcao[]; // presente quando tipo === "pergunta"

  nivel?: "alerta" | "atencao" | "rotina"; // presente quando tipo === "conduta"
}

export interface Fluxograma {
  id: string;

  titulo: string;

  categoria: string;

  descricao: string;

  nodeInicialId: string;

  nodes: FluxogramaNode[];

  referencias?: string[];
}
