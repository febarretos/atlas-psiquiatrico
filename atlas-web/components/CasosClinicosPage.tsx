"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import CasoInterativoPlayer from "./CasoInterativoPlayer";
import CasoLivrePlayer from "./CasoLivrePlayer";
import SearchBar from "./SearchBar";

import { CasoClinico } from "../data/casos-clinicos/types";
import type { CasoLivre } from "../lib/casoLivreSchema";
import { diagnosticos } from "../data/diagnosticos";
import type { Dificuldade } from "../lib/gerarCasoPrompt";
import { chamarComRetryDeQuota } from "../lib/chamarComRetryDeQuota";
import { normalizarBusca } from "../lib/normalizarBusca";

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
    const termo = normalizarBusca(busca);

    return casos.filter((c) =>
      normalizarBusca(c.titulo + " " + c.categoria + " " + c.diagnosticoFinal).includes(termo)
    );
  }, [busca, casos]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">
          Casos Clínicos
        </h1>

        <p className="mt-3 text-ink-2">
          Vinhetas interativas — trabalhe o raciocínio diagnóstico passo a
          passo até a conduta, com diferenciação fina entre hipóteses
          concorrentes.
        </p>
      </div>

      {casoGerado || casoLivreGerado ? (
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-alert-border bg-alert-bg p-4">
            <div>
              <p className="text-sm font-semibold text-alert">
                {fontes.length > 0
                  ? "Caso sintético, inspirado em relato de caso real — não revisado clinicamente."
                  : "Caso sintético gerado por IA — não revisado clinicamente."}{" "}
                Pode conter erros. Não usar como referência clínica.
              </p>

              {fontes.length > 0 && (
                <p className="mt-2 text-xs text-alert-muted">
                  Inspirado em:{" "}
                  {fontes.map((f, i) => (
                    <span key={f.url}>
                      {i > 0 && "; "}
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-alert-deep"
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
              className="whitespace-nowrap rounded-lg border border-rule px-3 py-2 text-xs font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
            >
              ← Voltar para os casos
            </button>
          </div>

          {casoGerado ? (
            <CasoInterativoPlayer caso={casoGerado} />
          ) : casoLivreGerado ? (
            <CasoLivrePlayer caso={casoLivreGerado} />
          ) : null}
        </div>
      ) : (
        <>
          {GERACAO_IA_ATIVA && (
          <div className="mb-8 rounded-xl border border-rule bg-panel p-6">
            <button
              type="button"
              onClick={() => setPainelAberto((v) => !v)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-lg font-semibold text-ink">
                Gerar caso novo
              </span>
              <span className="text-sm text-ink-3">{painelAberto ? "▲" : "▼"}</span>
            </button>

            {painelAberto && (
              <div className="mt-5 flex flex-col gap-4">
                <p className="text-sm text-ink-2">
                  Gera um caso clínico sintético via IA, no mesmo formato dos
                  casos curados manualmente — não persiste, não é revisado
                  clinicamente, e pode conter erros.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-ink-2">
                      Diagnóstico (opcional — aleatório se vazio)
                    </label>
                    <select
                      value={diagnosticoEscolhido}
                      onChange={(e) => setDiagnosticoEscolhido(e.target.value)}
                      className="w-full rounded-lg border border-rule bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
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
                    <label className="mb-2 block text-sm font-medium text-ink-2">
                      Dificuldade
                    </label>
                    <select
                      value={dificuldade}
                      onChange={(e) => setDificuldade(e.target.value as Dificuldade)}
                      className="w-full rounded-lg border border-rule bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
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
                  <div className="rounded-lg border border-warn-border bg-warn-bg p-3 text-sm text-warn">
                    Muitas gerações seguidas — aguardando {aguardandoSegundos}s antes de
                    tentar de novo...
                  </div>
                )}

                {erro && (
                  <div className="rounded-lg border border-alert-border bg-alert-bg p-3 text-sm text-alert">
                    {erro}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => gerarCaso("multipla-escolha")}
                    disabled={carregandoModo !== null}
                    className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {carregandoModo === "multipla-escolha"
                      ? aguardandoSegundos !== null
                        ? `Aguardando ${aguardandoSegundos}s…`
                        : "Gerando…"
                      : "Múltipla escolha (2 etapas)"}
                  </button>

                  <button
                    type="button"
                    onClick={() => gerarCaso("resposta-livre")}
                    disabled={carregandoModo !== null}
                    className="rounded-lg border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {carregandoModo === "resposta-livre"
                      ? aguardandoSegundos !== null
                        ? `Aguardando ${aguardandoSegundos}s…`
                        : "Gerando…"
                      : "Resposta livre (modo difícil)"}
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
                className="group rounded-xl border border-rule bg-panel p-6 transition-colors hover:border-accent"
              >
                <h2 className="text-xl font-semibold text-ink group-hover:text-accent">
                  {c.titulo}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm text-ink-2">
                  {c.apresentacaoInicial}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge color="blue">{c.categoria}</Badge>
                  <Badge color="gray">{c.nos.length} etapa(s)</Badge>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
