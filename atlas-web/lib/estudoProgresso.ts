// Persistência local (somente neste navegador) do baralho em andamento no
// Modo de Estudo, pra não perder o progresso ao fechar a aba. Guarda só os
// ids das cartas restantes (não o conteúdo), reconstruídas a partir de
// Baralho.gerar() na restauração — mesmo padrão de lib/favoritos.ts.

const CHAVE_ARMAZENAMENTO = "atlas-psiquiatrico:estudo-progresso";

export interface ProgressoEstudo {
  baralhoId: string;
  filaIds: string[];
  dominados: number;
  total: number;
}

export function carregarProgresso(): ProgressoEstudo | null {
  if (typeof window === "undefined") return null;

  try {
    const bruto = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);
    if (!bruto) return null;

    const dados = JSON.parse(bruto);
    if (
      !dados ||
      typeof dados.baralhoId !== "string" ||
      !Array.isArray(dados.filaIds) ||
      typeof dados.dominados !== "number" ||
      typeof dados.total !== "number"
    ) {
      return null;
    }

    return dados;
  } catch {
    return null;
  }
}

export function salvarProgresso(progresso: ProgressoEstudo) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(progresso));
}

export function limparProgresso() {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(CHAVE_ARMAZENAMENTO);
}
