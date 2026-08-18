"use client";

export default function BotaoImprimir() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg border border-rule bg-panel px-4 py-2.5 text-center text-[12.5px] text-ink-2 transition-colors hover:border-accent hover:text-accent"
    >
      Imprimir ficha
    </button>
  );
}
