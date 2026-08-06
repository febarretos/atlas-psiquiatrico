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

  // Ids de data/escalas referenciados por este passo do algoritmo (ex.:
  // "aplicar a escala X") — renderiza um mini-card da escala (sigla,
  // nome, categoria) que linka para a página completa dela. Pode
  // aparecer tanto em node "pergunta" (indicação do instrumento antes
  // de decidir) quanto "conduta".
  escalasRelacionadas?: string[];

  // Ids de data/diagnosticos referenciados por este node (ex.: um node
  // de diagnóstico diferencial que aponta pro diagnóstico formal
  // correspondente) — renderiza um mini-card do diagnóstico (nome,
  // categoria, CID) que linka para a página completa dele.
  diagnosticosRelacionados?: string[];
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
