"use client";

import { useEffect, useState } from "react";

import { alternarFavorito, estaFavoritado } from "../lib/favoritos";
import { TipoItemReferencia } from "../lib/itemReferencia";

interface Props {
  tipo: TipoItemReferencia;
  id: string;
  nome: string;
  href: string;
}

export default function BotaoFavoritar({ tipo, id, nome, href }: Props) {
  const [favoritado, setFavoritado] = useState(false);

  // localStorage só existe no cliente: sincroniza o estado após a
  // montagem, evitando divergência entre a renderização no servidor e no
  // cliente.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
    setFavoritado(estaFavoritado(tipo, id));
  }, [tipo, id]);

  function alternar() {
    setFavoritado(alternarFavorito({ tipo, id, nome, href }));
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-pressed={favoritado}
      className={`inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-md border px-3 py-[7px] font-mono text-[11px] transition-colors print:hidden ${
        favoritado
          ? "border-accent bg-accent-soft text-accent"
          : "border-rule bg-panel text-ink-2 hover:border-accent hover:text-accent"
      }`}
    >
      <span aria-hidden="true">{favoritado ? "★" : "☆"}</span>
      {favoritado ? "Favoritado" : "Favoritar"}
    </button>
  );
}
