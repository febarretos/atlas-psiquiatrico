// Persistência local (somente neste navegador, sem envio a servidor algum)
// dos últimos itens de referência visitados, pra acesso rápido a partir da
// Início. Mesmo padrão de lib/historicoEscalas.ts.

import { ItemReferencia } from "./itemReferencia";

const CHAVE_ARMAZENAMENTO = "atlas-psiquiatrico:recentes";
const LIMITE = 8;

interface EntradaRecente extends ItemReferencia {
  visitadoEmISO: string;
}

function carregarTudo(): EntradaRecente[] {
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

function salvarTudo(entradas: EntradaRecente[]) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(entradas));
}

export function registrarVisita(item: ItemReferencia) {
  const outras = carregarTudo().filter(
    (e) => !(e.tipo === item.tipo && e.id === item.id)
  );

  const novaLista = [
    { ...item, visitadoEmISO: new Date().toISOString() },
    ...outras,
  ].slice(0, LIMITE);

  salvarTudo(novaLista);
}

export function obterRecentes(): EntradaRecente[] {
  return carregarTudo()
    .sort((a, b) => b.visitadoEmISO.localeCompare(a.visitadoEmISO))
    .slice(0, LIMITE);
}
