"use client";

import { useEffect } from "react";

import { registrarVisita } from "../lib/recentes";
import { TipoItemReferencia } from "../lib/itemReferencia";

interface Props {
  tipo: TipoItemReferencia;
  id: string;
  nome: string;
  href: string;
}

// Sem renderização própria — só registra a visita no localStorage de
// "recentes" quando a ficha é montada, pra alimentar a seção da Início.
export default function VisitaTracker({ tipo, id, nome, href }: Props) {
  useEffect(() => {
    registrarVisita({ tipo, id, nome, href });
  }, [tipo, id, nome, href]);

  return null;
}
