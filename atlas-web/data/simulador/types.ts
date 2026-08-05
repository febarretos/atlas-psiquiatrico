export interface OpcaoSimulador {
  texto: string;

  // Mostrada imediatamente após a escolha — o que acontece na história
  // como resultado direto dessa decisão.
  consequencia: string;

  // Id de data/medicamentos, quando a opção envolve prescrever algo
  // específico.
  medicamentoId?: string;

  proximoNoId: string;

  // Usado só no resumo final do desfecho, nunca exposto durante o jogo —
  // não deve influenciar visualmente a escolha em tempo real.
  qualidadeDecisao: "ideal" | "aceitavel" | "problematica";
}

export interface NoSimulador {
  id: string;

  turno: "entrevista" | "exames" | "conduta" | "evolucao" | "desfecho";

  // Cena em tom anedótico/leve — mas os fatos clínicos citados (critérios,
  // farmacologia, fisiologia) precisam ser exatos.
  narrativa: string;

  // Vazio em nós turno === "desfecho" (são terminais).
  opcoes: OpcaoSimulador[];
}

export interface FonteInspiracaoSimulador {
  titulo: string;
  url: string;
}

export interface CasoSimulador {
  id: string;

  tituloAnedotico: string;

  // Vínculo com data/diagnosticos (Diagnostico.id) — revelado só no
  // desfecho, nunca durante o jogo.
  diagnosticoRealId: string;

  // Relato de caso real (Europe PMC) usado como inspiração de textura na
  // geração — não presente quando a busca não encontrou nada aberto.
  inspiracaoExterna?: FonteInspiracaoSimulador;

  nos: NoSimulador[];

  noInicialId: string;
}
