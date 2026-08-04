"use client";

import { useState } from "react";

interface Props {
  // String pronta, não uma função — permite usar este botão a partir de
  // Server Components também (função como prop não atravessa a fronteira
  // servidor/cliente do RSC; string atravessa sem problema).
  texto: string;
  className?: string;
}

const classePadrao =
  "rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white";

export default function BotaoCopiarProntuario({ texto, className }: Props) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // API de clipboard pode falhar (permissão negada, contexto não
      // seguro) — o texto já está visível na tela pro usuário copiar
      // manualmente, então uma falha silenciosa aqui é aceitável.
    }
  }

  return (
    <button type="button" onClick={copiar} className={className ?? classePadrao}>
      {copiado ? "✅ Copiado!" : "📋 Copiar pro prontuário"}
    </button>
  );
}
