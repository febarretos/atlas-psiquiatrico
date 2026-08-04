"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import CasoClinicoPlayer from "./CasoClinicoPlayer";
import CasoLivrePlayer from "./CasoLivrePlayer";
import SearchBar from "./SearchBar";

import { CasoClinico } from "../data/casos-clinicos/types";
import type { CasoLivre } from "../lib/casoLivreSchema";
import { diagnosticos } from "../data/diagnosticos";
import type { Dificuldade } from "../lib/gerarCasoPrompt";
import { chamarComRetryDeQuota } from "../lib/chamarComRetryDeQuota";

interface Props {
  casos: CasoClinico[];
}

interface FonteInspiracao {
  titulo: string;
  url: string;
}

type ModoGeracao = "multipla-escolha" | "resposta-livre";

// Ligado — usa a API gratuita do Gemini (GEMINI_API_KEY). Se a variável
// não estiver configurada em produção, a rota retorna erro amigável em vez
// de quebrar a página.
const GERACAO_IA_ATIVA = true;

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
  const [carregandoModo, setCarregandoModo] = useState<ModoGeracao | null>(null);
  const [aguardandoSegundos, setAguardandoSegundos] = useState<number | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [casoGerado, setCasoGerado] = useState<CasoClinico | null>(null);
  const [casoLivreGerado, setCasoLivreGerado] = useState<CasoLivre | null>(null);
  const [fontes, setFontes] = useState<FonteInspiracao[]>([]);

  async function gerarCaso(modo: ModoGeracao) {
    setCarregandoModo(modo);
    setErro(null);
    setAguardandoSegundos(null);

    try {
      const { resposta, dados } = await chamarComRetryDeQuota(
        () =>
          fetch("/api/gerar-caso", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              diagnosticoId: diagnosticoEscolhido || undefined,
              dificuldade,
              modo,
            }),
          }),
        setAguardandoSegundos
      );

      const corpo = dados as {
        erro?: string;
        mensagem?: string;
        casoLivre?: CasoLivre;
        caso?: CasoClinico;
        inspiracao?: FonteInspiracao[];
      } | null;

      if (!resposta.ok) {
        throw new Error(corpo?.erro ?? corpo?.mensagem ?? `Erro ${resposta.status}`);
      }

      if (modo === "resposta-livre") {
        setCasoLivreGerado(corpo?.casoLivre as CasoLivre);
        setCasoGerado(null);
      } else {
        setCasoGerado(corpo?.caso as CasoClinico);
        setCasoLivreGerado(null);
      }
      setFontes(corpo?.inspiracao ?? []);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro desconhecido ao gerar o caso.");
    } finally {
      setCarregandoModo(null);
      setAguardandoSegundos(null);
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

      {casoGerado || casoLivreGerado ? (
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-900/50 bg-red-500/10 p-4">
            <div>
              <p className="text-sm font-semibold text-red-300">
                {fontes.length > 0
                  ? "⚠️ Caso sintético, inspirado em relato de caso real — não revisado clinicamente."
                  : "⚠️ Caso sintético gerado por IA — não revisado clinicamente."}{" "}
                Pode conter erros. Não usar como referência clínica.
              </p>

              {fontes.length > 0 && (
                <p className="mt-2 text-xs text-red-200/80">
                  Inspirado em:{" "}
                  {fontes.map((f, i) => (
                    <span key={f.url}>
                      {i > 0 && "; "}
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-red-100"
                      >
                        {f.titulo}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setCasoGerado(null);
                setCasoLivreGerado(null);
                setFontes([]);
              }}
              className="whitespace-nowrap rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
            >
              ← Voltar para os casos
            </button>
          </div>

          {casoGerado ? (
            <CasoClinicoPlayer caso={casoGerado} />
          ) : casoLivreGerado ? (
            <CasoLivrePlayer caso={casoLivreGerado} />
          ) : null}
        </div>
      ) : (
        <>
          {GERACAO_IA_ATIVA && (
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

                {aguardandoSegundos !== null && (
                  <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 p-3 text-sm text-amber-200">
                    ⏳ Muitas gerações seguidas — aguardando {aguardandoSegundos}s antes de
                    tentar de novo...
                  </div>
                )}

                {erro && (
                  <div className="rounded-lg border border-red-900/50 bg-red-500/10 p-3 text-sm text-red-300">
                    {erro}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => gerarCaso("multipla-escolha")}
                    disabled={carregandoModo !== null}
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {carregandoModo === "multipla-escolha"
                      ? aguardandoSegundos !== null
                        ? `Aguardando ${aguardandoSegundos}s…`
                        : "Gerando…"
                      : "🎯 Múltipla escolha (2 etapas)"}
                  </button>

                  <button
                    type="button"
                    onClick={() => gerarCaso("resposta-livre")}
                    disabled={carregandoModo !== null}
                    className="rounded-xl border border-blue-500 px-5 py-3 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {carregandoModo === "resposta-livre"
                      ? aguardandoSegundos !== null
                        ? `Aguardando ${aguardandoSegundos}s…`
                        : "Gerando…"
                      : "✍️ Resposta livre (modo difícil)"}
                  </button>
                </div>
              </div>
            )}
          </div>
          )}

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
