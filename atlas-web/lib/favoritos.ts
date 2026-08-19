// Persistência local (somente neste navegador) dos itens de referência
// marcados como favoritos, pra acesso rápido a partir da Início. Mesmo
// padrão de lib/historicoEscalas.ts e lib/recentes.ts.

import { ItemReferencia, TipoItemReferencia } from "./itemReferencia";

const CHAVE_ARMAZENAMENTO = "atlas-psiquiatrico:favoritos";

function carregarTudo(): ItemReferencia[] {
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

function salvarTudo(itens: ItemReferencia[]) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(itens));
}

export function obterFavoritos(): ItemReferencia[] {
  return carregarTudo();
}

export function estaFavoritado(tipo: TipoItemReferencia, id: string): boolean {
  return carregarTudo().some((i) => i.tipo === tipo && i.id === id);
}

// Retorna o novo estado (true = passou a estar favoritado).
export function alternarFavorito(item: ItemReferencia): boolean {
  const atuais = carregarTudo();
  const jaEstava = atuais.some((i) => i.tipo === item.tipo && i.id === item.id);

  if (jaEstava) {
    salvarTudo(atuais.filter((i) => !(i.tipo === item.tipo && i.id === item.id)));
    return false;
  }

  salvarTudo([item, ...atuais]);
  return true;
}
