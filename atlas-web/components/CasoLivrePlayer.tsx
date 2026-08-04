"use client";

import { useState } from "react";
import Link from "next/link";

import Badge from "./Badge";

import type { CasoLivre } from "../lib/casoLivreSchema";
import type { AvaliacaoRespostaLivre } from "../lib/avaliarRespostaLivreSchema";
import { medicamentos } from "../data/medicamentos";
import { diagnosticos } from "../data/diagnosticos";
import { dominiosPsicopatologicos } from "../data/psicopatologia";

interface Props {
  caso: CasoLivre;
}

interface Tentativa {
  resposta: string;
  avaliacao: AvaliacaoRespostaLivre;
}

export default function CasoLivrePlayer({ caso }: Props) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [tentativas, setTentativas] = useState<Record<number, Tentativa[]>>({});
  const [rascunho, setRascunho] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [concluido, setConcluido] = useState(false);

  const ultimaEtapa = etapaAtual === caso.perguntasAbertas.length - 1;

  async function enviarResposta() {
    if (!rascunho.trim()) return;
    const etapa = caso.perguntasAbertas[etapaAtual];

    setEnviando(true);
    setErro(null);

    try {
      const resposta = await fetch("/api/avaliar-resposta-livre", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          pergunta: etapa.pergunta,
          gabaritoInterno: etapa.gabaritoInterno,
          respostaDoUsuario: rascunho,
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados?.erro ?? `Erro ${resposta.status}`);
      }

      const avaliacao = dados as AvaliacaoRespostaLivre;
      setTentativas((prev) => ({
        ...prev,
        [etapaAtual]: [...(prev[etapaAtual] ?? []), { resposta: rascunho, avaliacao }],
      }));
      setRascunho("");
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro desconhecido ao avaliar a resposta.");
    } finally {
      setEnviando(false);
    }
  }

  function avancar() {
    if (ultimaEtapa) {
      setConcluido(true);
      return;
    }
    setEtapaAtual((i) => i + 1);
  }

  function reiniciar() {
    setEtapaAtual(0);
    setTentativas({});
    setRascunho("");
    setErro(null);
    setConcluido(false);
  }

  const diagnosticoLink = caso.diagnosticoId
    ? diagnosticos.find((d) => d.id === caso.diagnosticoId)
    : undefined;

  const medicamentosLink = (caso.medicamentosRelacionados ?? [])
    .map((id) => medicamentos.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => !!m);

  const achadosLink = (caso.achadosPsicopatologicos ?? [])
    .map((ref) => {
      const dominio = dominiosPsicopatologicos.find((d) => d.id === ref.dominioId);
      const achado = dominio?.achados.find((a) => a.id === ref.achadoId);
      return dominio && achado ? { dominio, achado } : null;
    })
    .filter((v): v is NonNullable<typeof v> => !!v);

  return (
    <div>
      <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
          Apresentação do caso
        </div>

        <p className="text-slate-200">{caso.vinheta}</p>
      </div>

      <div className="space-y-6">
        {caso.perguntasAbertas.slice(0, etapaAtual + 1).map((p, i) => {
          const tentativasDaEtapa = tentativas[i] ?? [];
          const ultimaTentativa = tentativasDaEtapa[tentativasDaEtapa.length - 1];
          const liberado = ultimaTentativa?.avaliacao.proximaEtapaLiberada ?? false;
          const ehAtual = i === etapaAtual && !concluido;

          return (
            <div
              key={`${p.etapa}-${i}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                {p.etapa}
              </div>

              {p.contextoAdicional && (
                <p className="mb-4 rounded-xl border-l-4 border-blue-500 bg-slate-800/50 p-4 text-sm italic text-slate-300">
                  {p.contextoAdicional}
                </p>
              )}

              <h3 className="mb-4 text-lg font-semibold text-white">{p.pergunta}</h3>

              {tentativasDaEtapa.map((t, idx) => (
                <div key={idx} className="mb-3 space-y-2">
                  <div className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-slate-200">
                    {t.resposta}
                  </div>

                  <div
                    className={`rounded-xl border p-4 text-sm leading-6 ${
                      t.avaliacao.correto
                        ? "border-green-500 bg-green-500/10 text-green-200"
                        : "border-amber-500/60 bg-amber-500/10 text-amber-200"
                    }`}
                  >
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wider">
                      Preceptor
                    </span>
                    {t.avaliacao.feedback}
                  </div>
                </div>
              ))}

              {ehAtual && !liberado && (
                <div className="mt-2">
                  <textarea
                    value={rascunho}
                    onChange={(e) => setRascunho(e.target.value)}
                    rows={4}
                    placeholder="Escreva sua resposta..."
                    disabled={enviando}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-blue-500"
                  />

                  {erro && (
                    <div className="mt-2 rounded-lg border border-red-900/50 bg-red-500/10 p-3 text-sm text-red-300">
                      {erro}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={enviarResposta}
                    disabled={enviando || !rascunho.trim()}
                    className="mt-3 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {enviando ? "Avaliando…" : "Enviar resposta"}
                  </button>
                </div>
              )}

              {ehAtual && liberado && (
                <button
                  type="button"
                  onClick={avancar}
                  className="mt-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  {ultimaEtapa ? "Ver síntese do caso →" : "Próxima etapa →"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {concluido && (
        <div className="mt-6 rounded-2xl border border-blue-500/40 bg-slate-900 p-6">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Síntese do caso
          </div>

          <h3 className="mb-4 text-xl font-bold text-white">{caso.diagnosticoFinal}</h3>

          {(diagnosticoLink || medicamentosLink.length > 0 || achadosLink.length > 0) && (
            <div className="mb-5 flex flex-wrap gap-2">
              {diagnosticoLink && (
                <Link href={`/diagnosticos/${diagnosticoLink.id}`}>
                  <Badge color="blue">📖 {diagnosticoLink.nome}</Badge>
                </Link>
              )}

              {medicamentosLink.map((m) => (
                <Link key={m.id} href={`/medicamentos/${encodeURIComponent(m.nome)}`}>
                  <Badge color="green">💊 {m.nome}</Badge>
                </Link>
              ))}

              {achadosLink.map(({ dominio, achado }) => (
                <Link key={achado.id} href={`/psicopatologia/${dominio.id}`}>
                  <Badge color="gray">🧩 {achado.nome}</Badge>
                </Link>
              ))}
            </div>
          )}

          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Pontos de ensino
          </div>

          <ul className="mb-5 list-disc space-y-1.5 pl-6 text-slate-300">
            {caso.pontosDeEnsino.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={reiniciar}
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
          >
            🔄 Refazer caso
          </button>
        </div>
      )}
    </div>
  );
}
