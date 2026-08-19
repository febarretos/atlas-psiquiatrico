"use client";

import { useEffect, useState } from "react";

import { baralhos, type Flashcard } from "../../lib/flashcards";
import {
  carregarProgresso,
  limparProgresso,
  salvarProgresso,
} from "../../lib/estudoProgresso";

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

  // Restaura o baralho em andamento, se houver, depois da montagem (o
  // localStorage não existe durante o SSR).
  useEffect(() => {
    const progresso = carregarProgresso();
    if (!progresso) return;

    const b = baralhos.find((x) => x.id === progresso.baralhoId);
    if (!b) return;

    const cartasPorId = new Map(b.gerar().map((c) => [c.id, c]));
    const filaRestaurada = progresso.filaIds
      .map((id) => cartasPorId.get(id))
      .filter((c): c is Flashcard => c !== undefined);

    if (filaRestaurada.length === 0) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
    setBaralhoId(progresso.baralhoId);
    setFila(filaRestaurada);
    setTotal(progresso.total);
    setDominados(progresso.dominados);
  }, []);

  function iniciar(id: string) {
    const b = baralhos.find((x) => x.id === id);
    if (!b) return;

    const cartas = embaralhar(b.gerar());
    setBaralhoId(id);
    setFila(cartas);
    setTotal(cartas.length);
    setDominados(0);
    setRevelado(false);
    salvarProgresso({
      baralhoId: id,
      filaIds: cartas.map((c) => c.id),
      dominados: 0,
      total: cartas.length,
    });
  }

  function marcarSabia() {
    setFila((atual) => {
      const nova = atual.slice(1);
      const novosDominados = dominados + 1;

      if (nova.length === 0 || !baralhoId) {
        limparProgresso();
      } else {
        salvarProgresso({
          baralhoId,
          filaIds: nova.map((c) => c.id),
          dominados: novosDominados,
          total,
        });
      }

      return nova;
    });
    setDominados((d) => d + 1);
    setRevelado(false);
  }

  function marcarNaoSabia() {
    // A carta volta para o fim da fila da sessão atual, para reforço
    // imediato.
    setFila((atual) => {
      const nova = atual.length > 1 ? [...atual.slice(1), atual[0]] : atual;

      if (baralhoId) {
        salvarProgresso({
          baralhoId,
          filaIds: nova.map((c) => c.id),
          dominados,
          total,
        });
      }

      return nova;
    });
    setRevelado(false);
  }

  function trocarBaralho() {
    setBaralhoId(null);
    setFila([]);
    setRevelado(false);
    limparProgresso();
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
              className="rounded-xl border border-rule bg-panel p-6 text-left transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              <h3 className="text-lg font-bold text-ink">{b.nome}</h3>
              <p className="mt-1 text-sm text-ink-2">{b.descricao}</p>
              <p className="mt-2 text-xs text-ink-3">{quantidade} carta(s)</p>
            </button>
          );
        })}
      </div>
    );
  }

  if (fila.length === 0) {
    return (
      <div className="rounded-xl border border-rule bg-panel p-10 text-center">
        <p className="text-xl font-bold text-ink">Baralho concluído!</p>
        <p className="mt-2 text-ink-2">
          {dominados} de {total} carta(s) marcada(s) como &quot;sabia&quot; nesta sessão.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => iniciar(baralho.id)}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Repetir baralho
          </button>
          <button
            type="button"
            onClick={trocarBaralho}
            className="rounded-lg border border-rule px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
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
        <p className="text-sm font-semibold text-ink-2">{baralho.nome}</p>
        <p className="text-sm text-ink-3">
          {dominados} de {total} dominada(s) — {fila.length} na fila
        </p>
      </div>

      <button
        type="button"
        onClick={() => setRevelado((r) => !r)}
        className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-rule bg-panel p-8 text-center transition-colors hover:border-accent"
      >
        <p className="text-lg text-ink">{revelado ? carta.verso : carta.frente}</p>
        <p className="mt-4 text-xs text-ink-3">
          {revelado ? "Clique para ver a pergunta" : "Clique para revelar a resposta"}
        </p>
      </button>

      {revelado && (
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={marcarNaoSabia}
            className="rounded-lg border border-alert-border bg-alert-bg px-5 py-3 text-sm font-semibold text-alert transition-colors hover:border-alert"
          >
            ✗ Não sabia
          </button>
          <button
            type="button"
            onClick={marcarSabia}
            className="rounded-lg border border-ok-border bg-ok-bg px-5 py-3 text-sm font-semibold text-ok transition-colors hover:border-ok"
          >
            ✓ Sabia
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={trocarBaralho}
        className="self-start text-sm text-ink-3 transition-colors hover:text-ink-2"
      >
        ← Trocar de baralho
      </button>
    </div>
  );
}
