"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import BotaoCopiarProntuario from "./BotaoCopiarProntuario";
import SearchBar from "./SearchBar";

import { Diagnostico } from "../data/diagnosticos/types";

interface Props {
  diagnosticos: Diagnostico[];
}

// Chave estável pra identificar um item marcado: id do diagnóstico + índice
// do critério dentro de criteriosDiagnosticos.
function chaveItem(diagnosticoId: string, indice: number): string {
  return `${diagnosticoId}::${indice}`;
}

export default function EntrevistaScidChecklist({ diagnosticos }: Props) {
  const [busca, setBusca] = useState("");
  const [marcados, setMarcados] = useState<Set<string>>(new Set());
  const [abertos, setAbertos] = useState<Set<string>>(new Set());

  function alternarItem(diagnosticoId: string, indice: number) {
    const chave = chaveItem(diagnosticoId, indice);
    setMarcados((atual) => {
      const novo = new Set(atual);
      if (novo.has(chave)) novo.delete(chave);
      else novo.add(chave);
      return novo;
    });
  }

  function alternarAberto(diagnosticoId: string) {
    setAbertos((atual) => {
      const novo = new Set(atual);
      if (novo.has(diagnosticoId)) novo.delete(diagnosticoId);
      else novo.add(diagnosticoId);
      return novo;
    });
  }

  const modulos = useMemo(() => {
    const porCategoria = new Map<string, Diagnostico[]>();

    for (const d of diagnosticos) {
      const texto = (d.nome + " " + d.categoria).toLowerCase();
      if (busca && !texto.includes(busca.toLowerCase())) continue;

      const lista = porCategoria.get(d.categoria) ?? [];
      lista.push(d);
      porCategoria.set(d.categoria, lista);
    }

    return [...porCategoria.entries()]
      .map(([categoria, lista]) => ({
        categoria,
        diagnosticos: [...lista].sort((a, b) => a.nome.localeCompare(b.nome)),
      }))
      .sort((a, b) => a.categoria.localeCompare(b.categoria));
  }, [diagnosticos, busca]);

  const totalMarcados = marcados.size;

  const textoResumo = useMemo(() => {
    if (totalMarcados === 0) return "";

    const linhas: string[] = ["ENTREVISTA ESTRUTURADA (checklist DSM-5-TR, formato SCID-5-CV) — itens positivos:", ""];

    for (const { categoria, diagnosticos: listaDoModulo } of modulos) {
      const diagnosticosComMarcado = listaDoModulo.filter((d) =>
        d.criteriosDiagnosticos.some((_, i) => marcados.has(chaveItem(d.id, i)))
      );
      if (diagnosticosComMarcado.length === 0) continue;

      linhas.push(`## ${categoria}`);
      for (const d of diagnosticosComMarcado) {
        linhas.push(`${d.nome}:`);
        d.criteriosDiagnosticos.forEach((item, i) => {
          if (marcados.has(chaveItem(d.id, i))) linhas.push(`  [x] ${item}`);
        });
        linhas.push("");
      }
    }

    return linhas.join("\n").trim();
  }, [modulos, marcados, totalMarcados]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-4xl font-bold text-white">🗂️ Entrevista SCID-5-CV</h1>

        <p className="mt-4 text-slate-400">
          Checklist de apoio à entrevista clínica estruturada, organizado no formato de módulos
          do SCID-5-CV (Structured Clinical Interview for DSM-5 — Clinician Version). Os itens de
          cada transtorno vêm dos critérios diagnósticos do DSM-5-TR já cadastrados no Atlas —{" "}
          <strong className="text-slate-300">
            não é uma reprodução do roteiro/texto proprietário do SCID-5
          </strong>{" "}
          publicado pela American Psychiatric Publishing. Use como apoio de memória durante a
          entrevista, não como substituto do instrumento original nem de treinamento formal em
          sua aplicação.
        </p>

        <p className="mt-3 text-sm text-slate-500">
          Marcar um item aqui não calcula automaticamente se o diagnóstico &quot;fecha&quot; — a contagem
          mínima exigida, itens obrigatórios e critérios de exclusão variam por transtorno e estão
          descritos no próprio texto de cada item. A leitura clínica final é sempre sua.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between print:hidden">
        <div className="max-w-md flex-1">
          <SearchBar
            value={busca}
            onChange={setBusca}
            placeholder="Filtrar por transtorno ou módulo..."
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-400">{totalMarcados} item(ns) marcado(s)</span>

          {totalMarcados > 0 && (
            <>
              <BotaoCopiarProntuario texto={textoResumo} />
              <button
                type="button"
                onClick={() => setMarcados(new Set())}
                className="whitespace-nowrap rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
              >
                Limpar marcações
              </button>
            </>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {modulos.map(({ categoria, diagnosticos: listaDoModulo }) => (
          <section
            key={categoria}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm print:border-none print:bg-white print:p-0 print:text-black print:shadow-none"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-6 w-1 rounded-full bg-blue-500 print:hidden" />
              <h2 className="text-xl font-bold text-white print:text-black">
                Módulo — {categoria}
              </h2>
            </div>

            <div className="space-y-3">
              {listaDoModulo.map((d) => {
                const aberto = abertos.has(d.id);
                const marcadosNoDiagnostico = d.criteriosDiagnosticos.filter((_, i) =>
                  marcados.has(chaveItem(d.id, i))
                ).length;

                return (
                  <div key={d.id} className="rounded-xl border border-slate-800 bg-slate-950/50">
                    <button
                      type="button"
                      onClick={() => alternarAberto(d.id)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                    >
                      <span className="font-medium text-white">{d.nome}</span>

                      <span className="flex items-center gap-3">
                        {marcadosNoDiagnostico > 0 && (
                          <Badge color="blue">
                            {marcadosNoDiagnostico}/{d.criteriosDiagnosticos.length}
                          </Badge>
                        )}
                        <Link
                          href={`/diagnosticos/${d.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs text-slate-500 hover:text-blue-400 print:hidden"
                        >
                          ver diagnóstico ↗
                        </Link>
                        <span className="text-slate-500 print:hidden">{aberto ? "▲" : "▼"}</span>
                      </span>
                    </button>

                    {(aberto || marcadosNoDiagnostico > 0) && (
                      <ul className="space-y-2 border-t border-slate-800 px-4 py-3">
                        {d.criteriosDiagnosticos.map((item, indice) => {
                          const marcado = marcados.has(chaveItem(d.id, indice));

                          return (
                            <li key={indice}>
                              <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1 print:cursor-default">
                                <input
                                  type="checkbox"
                                  checked={marcado}
                                  onChange={() => alternarItem(d.id, indice)}
                                  className="mt-1 h-4 w-4 accent-blue-500 print:hidden"
                                />
                                <span
                                  className={
                                    marcado ? "text-white" : "text-slate-300 print:text-black"
                                  }
                                >
                                  {item}
                                </span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
