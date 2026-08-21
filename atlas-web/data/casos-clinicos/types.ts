// Schema unificado — antes havia dois formatos separados (Casos Clínicos:
// sequência linear de múltipla escolha; Simulador: árvore narrativa
// ramificada sem resposta única). Este tipo generaliza os dois: um caso
// linear de múltipla escolha é o caso particular de um grafo em que cada
// opção aponta explicitamente pra próxima etapa em ordem — não existe mais
// tratamento especial pra sequência implícita.
export interface OpcaoInterativa {
  texto: string;

  // Estilo MCQ (Casos Clínicos): resposta certa com feedback imediato —
  // trava a etapa, colore certo/errado, mostra `explicacao`. Presente
  // junto de `correta` em TODAS as opções do nó, ou em nenhuma.
  correta?: boolean;

  // Mostrada após a escolha, seja ela certa ou errada (só faz sentido
  // junto de `correta`) — o valor didático está em explicar por que cada
  // alternativa, inclusive as erradas, é ou não compatível com o quadro.
  explicacao?: string;

  // Estilo narrativo (Simulador): consequência revelada na hora (sem
  // travar a etapa), qualidade da decisão revelada só no desfecho final —
  // não há resposta "certa" avaliada em tempo real.
  consequencia?: string;
  qualidadeDecisao?: "ideal" | "aceitavel" | "problematica";

  // Id de data/medicamentos, quando a opção envolve prescrever algo
  // específico — usado nos dois estilos.
  medicamentoId?: string;

  // Id do próximo nó em `CasoClinico.nos` — SEMPRE obrigatório (mesmo em
  // sequência linear de MCQ, aponta explicitamente pra próxima etapa).
  // Nó terminal (fim do caso) é identificado por `opcoes: []`, nunca por
  // ausência de proximoNoId.
  proximoNoId: string;
}

export interface NoInterativo {
  id: string;

  // Informação adicional revelada nesta etapa (exame do estado mental,
  // evolução, exames complementares) — estilo Casos Clínicos. Omitir
  // quando o nó não acrescenta contexto além da pergunta/narrativa.
  narrativaAdicional?: string;

  // Pergunta MCQ-style ("qual é a hipótese diagnóstica mais provável?").
  // Um nó tem `pergunta` OU `narrativa` (ou os dois) — pelo menos um dos
  // dois precisa estar presente pra o jogador saber o que está lendo.
  pergunta?: string;

  // Cena/pergunta em estilo narrativo (Simulador) — texto corrido da
  // história, não uma pergunta objetiva.
  narrativa?: string;

  // Rótulo de progresso estilo Simulador (barra de turnos). Omitir em
  // conteúdo migrado de Casos Clínicos, que não tinha essa noção.
  turno?: "entrevista" | "exames" | "conduta" | "evolucao" | "desfecho";

  // Vazio = nó terminal (fim do caso — dispara a tela de síntese/desfecho
  // usando os campos de nível superior de CasoClinico).
  opcoes: OpcaoInterativa[];
}

export interface AchadoReferenciado {
  dominioId: string;
  achadoId: string;
}

export interface FonteInspiracao {
  titulo: string;
  url: string;
}

export interface CasoClinico {
  id: string;

  titulo: string;

  categoria: string;

  apresentacaoInicial: string;

  nos: NoInterativo[];

  noInicialId: string;

  diagnosticoFinal: string;

  // Vínculo com data/diagnosticos (Diagnostico.id) para link direto —
  // omitir se o diagnóstico do caso não tiver entrada própria no módulo.
  diagnosticoId?: string;

  // Ids de data/medicamentos (Medicamento.id) discutidos na conduta.
  medicamentosRelacionados?: string[];

  // Achados do módulo Psicopatologia ilustrados pelo caso, para link direto.
  achadosPsicopatologicos?: AchadoReferenciado[];

  // Principais lições didáticas do caso, além do diagnóstico em si.
  pontosDeEnsino: string[];

  referencias?: string[];

  // Relato de caso real (Europe PMC) usado como inspiração de textura na
  // geração — vindo do estilo narrativo (Simulador). Ausente em casos
  // curados manualmente.
  inspiracaoExterna?: FonteInspiracao;
}
