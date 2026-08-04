export interface FluxogramaOpcao {
  label: string;
  proximoNodeId: string;
}

export interface FluxogramaNode {
  id: string;

  tipo: "pergunta" | "conduta";

  texto: string;

  detalhe?: string; // texto explicativo adicional, opcional

  // Presente tipicamente quando tipo === "pergunta"; também pode aparecer
  // em um node "conduta" quando essa conduta precisa continuar o fluxo
  // (ex.: uma recomendação farmacológica personalizada que leva a um
  // node de reavaliação de resposta) — nesse caso o viewer renderiza o
  // card de conduta normalmente e, abaixo, os botões de opções.
  opcoes?: FluxogramaOpcao[];

  nivel?: "alerta" | "atencao" | "rotina"; // presente quando tipo === "conduta"

  // Ids de data/medicamentos referenciados por esta conduta farmacológica
  // específica — usado só quando tipo === "conduta", para renderizar um
  // mini-card do medicamento (nome, dose inicial, pérola clínica) que
  // linka para a página completa dele.
  medicamentosRelacionados?: string[];
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
