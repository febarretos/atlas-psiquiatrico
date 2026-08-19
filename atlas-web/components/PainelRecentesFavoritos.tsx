"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { obterFavoritos } from "../lib/favoritos";
import { ItemReferencia, TipoItemReferencia } from "../lib/itemReferencia";
import { obterRecentes } from "../lib/recentes";

const ROTULO_TIPO: Record<TipoItemReferencia, string> = {
  medicamento: "Medicamento",
  diagnostico: "Diagnóstico",
  escala: "Escala",
  emergencia: "Emergência",
};

function ListaItens({ itens }: { itens: ItemReferencia[] }) {
  return (
    <div className="flex flex-col">
      {itens.map((item) => (
        <Link
          key={`${item.tipo}-${item.id}`}
          href={item.href}
          className="flex items-baseline justify-between gap-3 border-b border-rule-soft py-[11px] text-ink transition-colors last:border-b-0 hover:text-accent"
        >
          <span className="text-[14px]">{item.nome}</span>
          <span className="whitespace-nowrap font-mono text-[10.5px] text-ink-4">
            {ROTULO_TIPO[item.tipo]}
          </span>
        </Link>
      ))}
    </div>
  );
}

// Recentes/favoritos vivem só no localStorage deste navegador — o server
// component da Início não tem como lê-los, então esse painel entra como
// uma ilha de cliente à parte, populada depois da montagem.
export default function PainelRecentesFavoritos() {
  const [recentes, setRecentes] = useState<ItemReferencia[]>([]);
  const [favoritos, setFavoritos] = useState<ItemReferencia[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
    setRecentes(obterRecentes());
    setFavoritos(obterFavoritos());
  }, []);

  if (recentes.length === 0 && favoritos.length === 0) return null;

  return (
    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
      {favoritos.length > 0 && (
        <div>
          <div className="border-b border-rule pb-2 font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-4">
            Favoritos
          </div>
          <ListaItens itens={favoritos} />
        </div>
      )}

      {recentes.length > 0 && (
        <div>
          <div className="border-b border-rule pb-2 font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-4">
            Visitados recentemente
          </div>
          <ListaItens itens={recentes} />
        </div>
      )}
    </div>
  );
}
