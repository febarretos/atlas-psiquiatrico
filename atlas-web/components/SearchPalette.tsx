"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { buscarNoIndice, getIndiceBusca } from "../lib/indiceBusca";

interface Props {
  aberto: boolean;
  onFechar: () => void;
}

export default function SearchPalette({ aberto, onFechar }: Props) {
  const router = useRouter();
  const [consulta, setConsulta] = useState("");
  const [selecionado, setSelecionado] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const painelRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    if (!aberto) return;
    // autoFocus não é confiável em modais montados condicionalmente —
    // o input ainda não existe no DOM no primeiro paint.
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [aberto]);

  // Trava o scroll da página por trás enquanto a paleta está aberta —
  // sem isso, um arraste no overlay em touch ainda rola o conteúdo atrás.
  useEffect(() => {
    if (!aberto) return;

    const overflowOriginal = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowOriginal;
    };
  }, [aberto]);

  const resultados = useMemo(() => buscarNoIndice(consulta), [consulta]);
  const totalIndice = useMemo(() => getIndiceBusca().length, []);

  // Nova busca invalida o índice destacado anterior — evita apontar pra
  // fora dos limites da nova lista de resultados. Ajustado direto durante a
  // renderização (padrão recomendado pelo React pra "resetar estado quando
  // uma dependência muda"), não num efeito — dispara um re-render imediato
  // em vez de uma cascata de commit-então-efeito.
  const [ultimaConsulta, setUltimaConsulta] = useState(consulta);
  if (consulta !== ultimaConsulta) {
    setUltimaConsulta(consulta);
    setSelecionado(0);
  }

  useEffect(() => {
    itemRefs.current[selecionado]?.scrollIntoView({ block: "nearest" });
  }, [selecionado]);

  if (!aberto) return null;

  function fechar() {
    setConsulta("");
    onFechar();
  }

  function navegarPara(href: string) {
    fechar();
    router.push(href);
  }

  function aoTeclarNoInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      fechar();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelecionado((i) => (resultados.length === 0 ? 0 : (i + 1) % resultados.length));
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelecionado((i) =>
        resultados.length === 0 ? 0 : (i - 1 + resultados.length) % resultados.length
      );
      return;
    }

    if (e.key === "Enter") {
      const alvo = resultados[selecionado];
      if (alvo) {
        e.preventDefault();
        navegarPara(alvo.href);
      }
      return;
    }

    // Foco preso no modal: Tab a partir do input (primeiro elemento
    // focável) volta pro último resultado; Shift+Tab não sai pra trás.
    if (e.key === "Tab" && e.shiftKey) {
      const ultimo = itemRefs.current[resultados.length - 1];
      if (ultimo) {
        e.preventDefault();
        ultimo.focus();
      }
    }
  }

  function aoTeclarNoResultado(e: React.KeyboardEvent<HTMLAnchorElement>, indice: number) {
    if (e.key === "Escape") {
      fechar();
      return;
    }

    // Tab a partir do último resultado (último elemento focável) volta
    // pro campo de busca, fechando o ciclo do foco dentro do modal.
    if (e.key === "Tab" && !e.shiftKey && indice === resultados.length - 1) {
      e.preventDefault();
      inputRef.current?.focus();
    }
  }

  const rodape =
    resultados.length === totalIndice
      ? `${totalIndice} itens no índice`
      : `${resultados.length} ${resultados.length === 1 ? "resultado" : "resultados"}`;

  return (
    <div
      onClick={fechar}
      className="animate-atlas-fade fixed inset-0 z-[60] flex items-start justify-center bg-ink/30 px-4 pt-[12vh]"
    >
      <div
        ref={painelRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Busca global"
        className="w-full max-w-[620px] overflow-hidden rounded-xl border border-rule bg-panel shadow-[0_24px_60px_rgba(25,27,30,0.18)]"
      >
        <input
          ref={inputRef}
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          onKeyDown={aoTeclarNoInput}
          placeholder="Fármaco, diagnóstico, emergência…"
          aria-activedescendant={resultados[selecionado] ? `busca-resultado-${selecionado}` : undefined}
          role="combobox"
          aria-expanded="true"
          aria-controls="busca-lista-resultados"
          autoComplete="off"
          className="w-full border-b border-rule-soft px-6 py-5 text-[17px] text-ink outline-none placeholder:text-ink-3"
        />

        <div id="busca-lista-resultados" role="listbox" className="max-h-[340px] overflow-y-auto">
          {resultados.length === 0 ? (
            <div className="px-6 py-5 text-sm text-ink-3">Nenhum resultado encontrado.</div>
          ) : (
            resultados.map((r, indice) => (
              <a
                key={`${r.tipo}-${r.href}-${r.nome}`}
                id={`busca-resultado-${indice}`}
                ref={(el) => {
                  itemRefs.current[indice] = el;
                }}
                href={r.href}
                role="option"
                aria-selected={indice === selecionado}
                onMouseEnter={() => setSelecionado(indice)}
                onClick={(e) => {
                  // Deixa ctrl/cmd/middle-click abrir em nova aba normalmente —
                  // só intercepta o clique simples pra fechar a paleta antes
                  // de navegar na mesma aba.
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
                  e.preventDefault();
                  navegarPara(r.href);
                }}
                onKeyDown={(e) => aoTeclarNoResultado(e, indice)}
                className={`flex items-center justify-between gap-4 border-b border-rule-faint px-6 py-3 last:border-b-0 ${
                  indice === selecionado ? "bg-paper" : ""
                }`}
              >
                <span className="text-[14.5px] text-ink">{r.nome}</span>

                <span className="whitespace-nowrap font-mono text-[10px] tracking-wider uppercase text-ink-4">
                  {r.tipo}
                </span>
              </a>
            ))
          )}
        </div>

        <div className="flex items-center justify-between bg-paper px-6 py-2.5 font-mono text-[10px] tracking-wider uppercase text-ink-4">
          <span>{rodape}</span>
          <span>↑↓ navegar · enter abrir · esc fechar</span>
        </div>
      </div>
    </div>
  );
}
