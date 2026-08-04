"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import CasoClinicoPlayer from "./CasoClinicoPlayer";
import SearchBar from "./SearchBar";

import { CasoClinico } from "../data/casos-clinicos/types";
import { diagnosticos } from "../data/diagnosticos";
import type { Dificuldade } from "../lib/gerarCasoPrompt";

interface Props {
  casos: CasoClinico[];
}

const DIFICULDADES: { valor: Dificuldade; rotulo: string }[] = [
  { valor: "classico", rotulo: "Clássico" },
  { valor: "atipico", rotulo: "Atípico" },
  { valor: "diferencial-dificil", rotulo: "Diferencial difícil" },
];

export default function CasosClinicosPage({
  casos,
}: Props) {
  const [busca, setBusca] = useState("");

  const [painelAberto, setPainelAberto] = useState(false);
  const [diagnosticoEscolhido, setDiagnosticoEscolhido] = useState("");
  const [dificuldade, setDificuldade] = useState<Dificuldade>("classico");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [casoGerado, setCasoGerado] = useState<CasoClinico | null>(null);

  async function gerarCaso() {
    setCarregando(true);
    setErro(null);

    try {
      const resposta = await fetch("/api/gerar-caso", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          diagnosticoId: diagnosticoEscolhido || undefined,
          dificuldade,
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados?.erro ?? `Erro ${resposta.status}`);
      }

      setCasoGerado(dados as CasoClinico);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro desconhecido ao gerar o caso.");
    } finally {
      setCarregando(false);
    }
  }

  const lista = useMemo(() => {
    const termo = busca.toLowerCase();

    return casos.filter((c) =>
      (c.titulo + " " + c.categoria + " " + c.diagnosticoFinal)
        .toLowerCase()
        .includes(termo)
    );
  }, [busca, casos]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🩺 Casos Clínicos
        </h1>

        <p className="mt-3 text-slate-400">
          Vinhetas interativas — trabalhe o raciocínio diagnóstico passo a
          passo até a conduta, com diferenciação fina entre hipóteses
          concorrentes.
        </p>
      </div>

      {casoGerado ? (
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-900/50 bg-red-500/10 p-4">
            <p className="text-sm font-semibold text-red-300">
              ⚠️ Caso sintético gerado por IA — não revisado clinicamente.
              Pode conter erros. Não usar como referência clínica.
            </p>

            <button
              type="button"
              onClick={() => setCasoGerado(null)}
              className="whitespace-nowrap rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
            >
              ← Voltar para os casos
            </button>
          </div>

          <CasoClinicoPlayer caso={casoGerado} />
        </div>
      ) : (
        <>
          <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <button
              type="button"
              onClick={() => setPainelAberto((v) => !v)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-lg font-semibold text-white">
                🎲 Gerar caso novo
              </span>
              <span className="text-sm text-slate-500">{painelAberto ? "▲" : "▼"}</span>
            </button>

            {painelAberto && (
              <div className="mt-5 flex flex-col gap-4">
                <p className="text-sm text-slate-400">
                  Gera um caso clínico sintético via IA, no mesmo formato dos
                  casos curados manualmente — não persiste, não é revisado
                  clinicamente, e pode conter erros.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-400">
                      Diagnóstico (opcional — aleatório se vazio)
                    </label>
                    <select
                      value={diagnosticoEscolhido}
                      onChange={(e) => setDiagnosticoEscolhido(e.target.value)}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                    >
                      <option value="">Aleatório</option>
                      {diagnosticos.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.nome}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-400">
                      Dificuldade
                    </label>
                    <select
                      value={dificuldade}
                      onChange={(e) => setDificuldade(e.target.value as Dificuldade)}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
                    >
                      {DIFICULDADES.map((d) => (
                        <option key={d.valor} value={d.valor}>
                          {d.rotulo}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {erro && (
                  <div className="rounded-lg border border-red-900/50 bg-red-500/10 p-3 text-sm text-red-300">
                    {erro}
                  </div>
                )}

                <button
                  type="button"
                  onClick={gerarCaso}
                  disabled={carregando}
                  className="self-start rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {carregando ? "Gerando…" : "Gerar caso"}
                </button>
              </div>
            )}
          </div>

          <div className="mb-8">
            <SearchBar
              value={busca}
              onChange={setBusca}
              placeholder="Pesquisar caso, categoria ou diagnóstico..."
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {lista.map((c) => (
              <Link
                key={c.id}
                href={`/casos-clinicos/${c.id}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
              >
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-400">
                  {c.titulo}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                  {c.apresentacaoInicial}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge color="blue">{c.categoria}</Badge>
                  <Badge color="gray">{c.etapas.length} etapa(s)</Badge>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
