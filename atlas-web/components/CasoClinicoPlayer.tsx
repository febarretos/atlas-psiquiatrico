"use client";

import { useState } from "react";
import Link from "next/link";

import Badge from "./Badge";

import { CasoClinico } from "../data/casos-clinicos/types";
import { medicamentos } from "../data/medicamentos";
import { diagnosticos } from "../data/diagnosticos";
import { dominiosPsicopatologicos } from "../data/psicopatologia";

interface Props {
  caso: CasoClinico;
}

export default function CasoClinicoPlayer({ caso }: Props) {
  const [respostas, setRespostas] = useState<Record<string, number>>({});

  function responder(etapaId: string, opcaoIndex: number) {
    if (respostas[etapaId] !== undefined) return;
    setRespostas((prev) => ({ ...prev, [etapaId]: opcaoIndex }));
  }

  function reiniciar() {
    setRespostas({});
  }

  const etapasVisiveis: number[] = [];
  for (let i = 0; i < caso.etapas.length; i++) {
    etapasVisiveis.push(i);
    if (respostas[caso.etapas[i].id] === undefined) break;
  }

  const concluido = etapasVisiveis.length === caso.etapas.length &&
    respostas[caso.etapas[caso.etapas.length - 1].id] !== undefined;

  const acertos = caso.etapas.filter(
    (e) => e.opcoes[respostas[e.id]]?.correta
  ).length;

  const diagnosticoLink = caso.diagnosticoId
    ? diagnosticos.find((d) => d.id === caso.diagnosticoId)
    : undefined;

  const medicamentosLink = (caso.medicamentosRelacionados ?? [])
    .map((id) => medicamentos.find((m) => m.id === id))
    .filter((m): m is NonNullable<typeof m> => !!m);

  const achadosLink = (caso.achadosPsicopatologicos ?? [])
    .map((ref) => {
      const dominio = dominiosPsicopatologicos.find(
        (d) => d.id === ref.dominioId
      );
      const achado = dominio?.achados.find((a) => a.id === ref.achadoId);
      return dominio && achado ? { dominio, achado } : null;
    })
    .filter((v): v is NonNullable<typeof v> => !!v);

  return (
    <div>
      <div className="mb-6 rounded-xl border border-rule bg-panel p-6">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
          Apresentação do caso
        </div>

        <p className="text-ink-2">{caso.apresentacaoInicial}</p>
      </div>

      <div className="space-y-6">
        {etapasVisiveis.map((i) => {
          const etapa = caso.etapas[i];
          const respostaIndex = respostas[etapa.id];
          const respondida = respostaIndex !== undefined;

          return (
            <div
              key={etapa.id}
              className="rounded-xl border border-rule bg-panel p-6"
            >
              {etapa.narrativaAdicional && (
                <p className="mb-4 rounded-lg border-l-4 border-accent bg-accent-soft p-4 text-sm italic text-ink-2">
                  {etapa.narrativaAdicional}
                </p>
              )}

              <h3 className="mb-4 text-lg font-semibold text-ink">
                {etapa.pergunta}
              </h3>

              <div className="flex flex-col gap-3">
                {etapa.opcoes.map((opcao, idx) => {
                  const selecionada = respostaIndex === idx;
                  const mostrarCorreta = respondida && opcao.correta;
                  const mostrarErradaSelecionada =
                    respondida && selecionada && !opcao.correta;

                  return (
                    <div key={opcao.texto}>
                      <button
                        type="button"
                        disabled={respondida}
                        onClick={() => responder(etapa.id, idx)}
                        className={`w-full rounded-lg border p-4 text-left transition-colors ${
                          mostrarCorreta
                            ? "border-ok bg-ok-bg"
                            : mostrarErradaSelecionada
                              ? "border-alert bg-alert-bg"
                              : respondida
                                ? "border-rule bg-paper"
                                : "border-rule bg-paper hover:border-accent"
                        }`}
                      >
                        <span
                          className={
                            mostrarCorreta
                              ? "text-ok"
                              : mostrarErradaSelecionada
                                ? "text-alert"
                                : "text-ink-2"
                          }
                        >
                          {opcao.texto}
                        </span>
                      </button>

                      {respondida && (mostrarCorreta || selecionada) && (
                        <p className="mt-2 px-1 text-sm leading-6 text-ink-2">
                          {opcao.explicacao}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {concluido && (
        <div className="mt-6 rounded-xl border border-accent-border bg-panel p-6">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Síntese do caso — {acertos}/{caso.etapas.length} corretas
          </div>

          <h3 className="mb-4 text-xl font-bold text-ink">
            {caso.diagnosticoFinal}
          </h3>

          {(diagnosticoLink || medicamentosLink.length > 0 || achadosLink.length > 0) && (
            <div className="mb-5 flex flex-wrap gap-2">
              {diagnosticoLink && (
                <Link href={`/diagnosticos/${diagnosticoLink.id}`}>
                  <Badge color="blue">{diagnosticoLink.nome}</Badge>
                </Link>
              )}

              {medicamentosLink.map((m) => (
                <Link key={m.id} href={`/medicamentos/${encodeURIComponent(m.nome)}`}>
                  <Badge color="green">{m.nome}</Badge>
                </Link>
              ))}

              {achadosLink.map(({ dominio, achado }) => (
                <Link key={achado.id} href={`/psicopatologia/${dominio.id}`}>
                  <Badge color="gray">{achado.nome}</Badge>
                </Link>
              ))}
            </div>
          )}

          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
            Pontos de ensino
          </div>

          <ul className="mb-5 list-disc space-y-1.5 pl-6 text-ink-2">
            {caso.pontosDeEnsino.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          {caso.referencias && caso.referencias.length > 0 && (
            <>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
                Referências
              </div>

              <ul className="mb-5 list-disc space-y-1 pl-6 text-sm text-ink-3">
                {caso.referencias.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          )}

          <button
            type="button"
            onClick={reiniciar}
            className="rounded-lg border border-rule px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
          >
            Refazer caso
          </button>
        </div>
      )}
    </div>
  );
}
