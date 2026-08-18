"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Medicamento } from "../data/types";
import { normalizarBusca } from "../lib/normalizarBusca";
import {
  EFFECT_TEXT_COLORS,
  EffectLevel,
  normalizeEffectKey,
} from "../lib/effectScale";

interface Props {
  medicamentos: Medicamento[];
}

interface Filtro {
  chave: "gravidez" | "sedacao" | "peso";
  rotulo: string;
}

const filtrosDisponiveis: Filtro[] = [
  { chave: "gravidez", rotulo: "Preferencial na gravidez" },
  { chave: "sedacao", rotulo: "Sedação baixa" },
  { chave: "peso", rotulo: "Baixo ganho de peso" },
];

const NIVEIS_BAIXOS: EffectLevel[] = ["nenhum", "muitobaixo", "baixo"];

const ROTULO_GESTACAO: Record<string, string> = {
  preferencial: "Preferencial",
  cautela: "Cautela",
  evitar: "Evitar",
};

const SELO_GESTACAO_CLASSES: Record<string, string> = {
  preferencial: "border-ok-border bg-ok-bg text-ok",
  cautela: "border-warn-border bg-warn-bg text-warn",
  evitar: "border-alert-border bg-alert-bg text-alert",
};

function EixoRisco({ valor }: { valor: string }) {
  const key = normalizeEffectKey(valor);
  return (
    <span className={`font-mono text-[11.5px] ${key ? EFFECT_TEXT_COLORS[key] : "text-ink-3"}`}>
      {valor}
    </span>
  );
}

export default function MedicamentosPage({
  medicamentos,
}: Props) {
  const [busca, setBusca] = useState("");
  const [filtrosAtivos, setFiltrosAtivos] = useState<Set<string>>(new Set());

  function alternarFiltro(chave: string) {
    setFiltrosAtivos((atual) => {
      const novo = new Set(atual);
      if (novo.has(chave)) {
        novo.delete(chave);
      } else {
        novo.add(chave);
      }
      return novo;
    });
  }

  const lista = useMemo(() => {
    const termo = normalizarBusca(busca.trim());

    return [...medicamentos]
      .filter((m) => {
        const texto = normalizarBusca(
          m.nome + " " + (m.nomeComercial?.join(" ") ?? "") + " " + m.classe + " " + (m.subclasse ?? "")
        );

        if (termo && !texto.includes(termo)) return false;

        if (filtrosAtivos.has("gravidez") && m.gravidezCategoria !== "preferencial") {
          return false;
        }

        if (filtrosAtivos.has("sedacao")) {
          const nivel = normalizeEffectKey(m.sedacao);
          if (!nivel || !NIVEIS_BAIXOS.includes(nivel)) return false;
        }

        if (filtrosAtivos.has("peso")) {
          const nivel = normalizeEffectKey(m.ganhoPeso);
          if (!nivel || !NIVEIS_BAIXOS.includes(nivel)) return false;
        }

        return true;
      })
      .sort((a, b) => a.classe.localeCompare(b.classe) || a.nome.localeCompare(b.nome));
  }, [busca, medicamentos, filtrosAtivos]);

  return (
    <div className="mx-auto max-w-[1120px] animate-atlas-rise pt-[38px]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-[38px] font-medium tracking-tight text-ink">
            Medicamentos
          </h1>
          <p className="mt-2 text-[14px] text-ink-2">
            {lista.length} de {medicamentos.length} psicofármacos · ordenados por classe
          </p>
        </div>

        <Link
          href="/medicamentos/classes"
          className="whitespace-nowrap rounded-md border border-rule bg-panel px-3 py-[7px] font-mono text-[11px] text-ink-2 transition-colors hover:border-accent hover:text-accent"
        >
          por classe
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2.5">
        <div className="relative min-w-[260px] flex-1">
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Nome genérico, comercial ou classe"
            className="w-full rounded-lg border border-rule bg-panel px-3.5 py-2.5 text-[14px] text-ink outline-none placeholder:text-ink-3 focus:border-accent"
          />
        </div>

        {filtrosDisponiveis.map((f) => {
          const ativo = filtrosAtivos.has(f.chave);
          return (
            <button
              key={f.chave}
              type="button"
              onClick={() => alternarFiltro(f.chave)}
              className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-[12.5px] transition-colors ${
                ativo ? "border-accent bg-accent-soft text-accent" : "border-rule bg-panel text-ink-2"
              }`}
            >
              {f.rotulo}
            </button>
          );
        })}
      </div>

      {lista.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-rule bg-panel p-12 text-center text-ink-3">
          Nenhum medicamento encontrado com os filtros atuais.
        </div>
      ) : (
        <>
          {/* Tabela densa — telas médias/grandes */}
          <div className="mt-5 hidden overflow-hidden rounded-xl border border-rule bg-panel md:block">
            <div className="sticky top-0 z-[5] grid grid-cols-[2.1fr_1.5fr_0.9fr_0.9fr_0.9fr_1.1fr] gap-4 rounded-t-[11px] border-b border-rule bg-sticky-head px-5 py-[11px] font-mono text-[9.5px] tracking-[0.13em] uppercase text-ink-3 shadow-[0_6px_14px_-10px_rgba(25,27,30,0.35)]">
              <div>Fármaco</div>
              <div>Classe</div>
              <div>Sedação</div>
              <div>Peso</div>
              <div>Sexual</div>
              <div>Gestação</div>
            </div>

            {lista.map((m) => (
              <Link
                key={m.id}
                href={`/medicamentos/${encodeURIComponent(m.nome)}`}
                className="grid grid-cols-[2.1fr_1.5fr_0.9fr_0.9fr_0.9fr_1.1fr] items-center gap-4 border-b border-rule-soft bg-panel px-5 py-[13px] transition-colors last:border-b-0 hover:bg-paper"
              >
                <div>
                  <div className="text-[14.5px] font-medium text-ink">{m.nome}</div>
                  {m.subclasse && (
                    <div className="mt-px text-[12px] text-ink-4">{m.subclasse}</div>
                  )}
                </div>
                <div className="text-[12.5px] text-ink-2">{m.classe}</div>
                <EixoRisco valor={m.sedacao} />
                <EixoRisco valor={m.ganhoPeso} />
                <EixoRisco valor={m.sexual} />
                <div>
                  {m.gravidezCategoria && (
                    <span
                      className={`rounded-full border px-2.5 py-[3px] text-[11px] ${SELO_GESTACAO_CLASSES[m.gravidezCategoria]}`}
                    >
                      {ROTULO_GESTACAO[m.gravidezCategoria]}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Lista empilhada — telas pequenas */}
          <div className="mt-5 flex flex-col gap-2.5 md:hidden">
            {lista.map((m) => (
              <Link
                key={m.id}
                href={`/medicamentos/${encodeURIComponent(m.nome)}`}
                className="rounded-lg border border-rule bg-panel px-4 py-3"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-[14.5px] font-medium text-ink">{m.nome}</div>
                  {m.gravidezCategoria && (
                    <span
                      className={`whitespace-nowrap rounded-full border px-2.5 py-[3px] text-[11px] ${SELO_GESTACAO_CLASSES[m.gravidezCategoria]}`}
                    >
                      {ROTULO_GESTACAO[m.gravidezCategoria]}
                    </span>
                  )}
                </div>
                <div className="mt-0.5 text-[12px] text-ink-4">
                  {m.classe}
                  {m.subclasse ? ` · ${m.subclasse}` : ""}
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-ink-3">
                  <span>Sedação <EixoRisco valor={m.sedacao} /></span>
                  <span>Peso <EixoRisco valor={m.ganhoPeso} /></span>
                  <span>Sexual <EixoRisco valor={m.sexual} /></span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="mt-3.5 font-mono text-[10.5px] text-ink-4">
        clique numa linha para abrir a ficha completa
      </div>
    </div>
  );
}
