"use client";

import { useState } from "react";

import { baralhos, type Flashcard } from "../../lib/flashcards";

function embaralhar<T>(itens: T[]): T[] {
  const copia = [...itens];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export default function EstudoApp() {
  const [baralhoId, setBaralhoId] = useState<string | null>(null);
  const [fila, setFila] = useState<Flashcard[]>([]);
  const [total, setTotal] = useState(0);
  const [dominados, setDominados] = useState(0);
  const [revelado, setRevelado] = useState(false);

  const baralho = baralhos.find((b) => b.id === baralhoId) ?? null;

  function iniciar(id: string) {
    const b = baralhos.find((x) => x.id === id);
    if (!b) return;

    const cartas = embaralhar(b.gerar());
    setBaralhoId(id);
    setFila(cartas);
    setTotal(cartas.length);
    setDominados(0);
    setRevelado(false);
  }

  function marcarSabia() {
    setFila((atual) => atual.slice(1));
    setDominados((d) => d + 1);
    setRevelado(false);
  }

  function marcarNaoSabia() {
    // A carta volta para o fim da fila da sessão atual, para reforço
    // imediato — nada persiste entre sessões (sem localStorage).
    setFila((atual) => (atual.length > 1 ? [...atual.slice(1), atual[0]] : atual));
    setRevelado(false);
  }

  function trocarBaralho() {
    setBaralhoId(null);
    setFila([]);
    setRevelado(false);
  }

  if (!baralho) {
    return (
      <div className="flex flex-col gap-4">
        {baralhos.map((b) => {
          const quantidade = b.gerar().length;

          return (
            <button
              key={b.id}
              type="button"
              onClick={() => iniciar(b.id)}
              disabled={quantidade === 0}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <h3 className="text-lg font-bold text-white">{b.nome}</h3>
              <p className="mt-1 text-sm text-slate-400">{b.descricao}</p>
              <p className="mt-2 text-xs text-slate-500">{quantidade} carta(s)</p>
            </button>
          );
        })}
      </div>
    );
  }

  if (fila.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
        <p className="text-xl font-bold text-white">🎉 Baralho concluído!</p>
        <p className="mt-2 text-slate-400">
          {dominados} de {total} carta(s) marcada(s) como &quot;sabia&quot; nesta sessão.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => iniciar(baralho.id)}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Repetir baralho
          </button>
          <button
            type="button"
            onClick={trocarBaralho}
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
          >
            Escolher outro baralho
          </button>
        </div>
      </div>
    );
  }

  const carta = fila[0];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-slate-300">{baralho.nome}</p>
        <p className="text-sm text-slate-500">
          {dominados} de {total} dominada(s) — {fila.length} na fila
        </p>
      </div>

      <button
        type="button"
        onClick={() => setRevelado((r) => !r)}
        className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
      >
        <p className="text-lg text-white">{revelado ? carta.verso : carta.frente}</p>
        <p className="mt-4 text-xs text-slate-500">
          {revelado ? "Clique para ver a pergunta" : "Clique para revelar a resposta"}
        </p>
      </button>

      {revelado && (
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={marcarNaoSabia}
            className="rounded-xl border border-red-900/50 bg-red-500/5 px-5 py-3 text-sm font-semibold text-red-300 transition-colors hover:border-red-500"
          >
            ✗ Não sabia
          </button>
          <button
            type="button"
            onClick={marcarSabia}
            className="rounded-xl border border-green-900/50 bg-green-500/5 px-5 py-3 text-sm font-semibold text-green-300 transition-colors hover:border-green-500"
          >
            ✓ Sabia
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={trocarBaralho}
        className="self-start text-sm text-slate-500 transition-colors hover:text-slate-300"
      >
        ← Trocar de baralho
      </button>
    </div>
  );
}
