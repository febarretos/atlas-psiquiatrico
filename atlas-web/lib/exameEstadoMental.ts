// Persistência local (somente neste navegador) dos achados
// psicopatológicos marcados como observados no paciente atual, pra
// montar o Exame do Estado Mental em components/ExameEstadoMentalPanel.tsx.
// Mesmo padrão de lib/favoritos.ts.

const CHAVE_ARMAZENAMENTO = "atlas-psiquiatrico:exame-estado-mental";

function carregarTudo(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const bruto = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);
    if (!bruto) return [];

    const dados = JSON.parse(bruto);
    return Array.isArray(dados) ? dados : [];
  } catch {
    return [];
  }
}

function salvarTudo(ids: string[]) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(ids));
}

export function obterAchadosSelecionados(): string[] {
  return carregarTudo();
}

export function estaSelecionado(achadoId: string): boolean {
  return carregarTudo().includes(achadoId);
}

// Retorna o novo estado (true = passou a estar selecionado).
export function alternarAchadoSelecionado(achadoId: string): boolean {
  const atuais = carregarTudo();
  const jaEstava = atuais.includes(achadoId);

  if (jaEstava) {
    salvarTudo(atuais.filter((id) => id !== achadoId));
    return false;
  }

  salvarTudo([...atuais, achadoId]);
  return true;
}

export function limparSelecao() {
  salvarTudo([]);
}
