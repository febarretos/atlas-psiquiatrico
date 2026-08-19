"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "../Badge";
import BotaoCopiarProntuario from "../BotaoCopiarProntuario";
import InfoCard from "../InfoCard";
import HistoricoEscala from "./HistoricoEscala";

import { Escala } from "../../data/escalas/types";
import { fluxogramas } from "../../data/fluxogramas";
import { salvarEntrada } from "../../lib/historicoEscalas";
import { gerarTextoEscala } from "../../lib/gerarTextoProntuario";
import { encontrarVinculoEscalaFluxograma } from "../../lib/escalaFluxogramaLinks";

interface Props {
  escala: Escala;
}

export default function EscalaForm({ escala }: Props) {
  // Guarda o índice da opção escolhida (não o valor), pois opções distintas
  // de um mesmo item podem compartilhar o mesmo valor de pontuação (ex: AQ-10).
  const [respostas, setRespostas] = useState<Record<string, number>>({});
  const [pacienteLabel, setPacienteLabel] = useState("");
  const [historicoVersao, setHistoricoVersao] = useState(0);
  const [salvo, setSalvo] = useState(false);

  function responder(itemId: string, indiceOpcao: number) {
    setRespostas((atual) => ({
      ...atual,
      [itemId]: indiceOpcao,
    }));
    setSalvo(false);
  }

  function reiniciar() {
    setRespostas({});
    setSalvo(false);
  }

  const totalItens = escala.itens.length;

  const itensRespondidos = useMemo(() => {
    return escala.itens.filter((item) => respostas[item.id] !== undefined)
      .length;
  }, [escala.itens, respostas]);

  const completo = itensRespondidos === totalItens;

  const pontuacao = useMemo(() => {
    const valores = escala.itens.map((item) => {
      const indiceEscolhido = respostas[item.id];

      return indiceEscolhido !== undefined
        ? item.opcoes[indiceEscolhido]?.valor ?? 0
        : 0;
    });

    if (escala.modoDePontuacao === "maiorItemPositivo") {
      return Math.max(0, ...valores);
    }

    return valores.reduce((soma, valor) => soma + valor, 0);
  }, [escala.itens, escala.modoDePontuacao, respostas]);

  const faixa = useMemo(() => {
    if (!completo) return undefined;

    return escala.faixas.find(
      (f) => pontuacao >= f.min && pontuacao <= f.max
    );
  }, [completo, escala.faixas, pontuacao]);

  const pontuacaoMaxima = useMemo(
    () => Math.max(0, ...escala.faixas.map((f) => f.max)),
    [escala.faixas]
  );

  const vinculoFluxograma = useMemo(() => {
    if (!faixa) return undefined;
    return encontrarVinculoEscalaFluxograma(escala.id, faixa.cor);
  }, [escala.id, faixa]);

  const fluxogramaVinculado = vinculoFluxograma
    ? fluxogramas.find((f) => f.id === vinculoFluxograma.fluxogramaId)
    : undefined;

  function salvarNoHistorico() {
    if (!completo || !faixa || !pacienteLabel.trim()) return;

    salvarEntrada({
      escalaId: escala.id,
      pacienteLabel: pacienteLabel.trim(),
      pontuacao,
      faixaLabel: faixa.label,
      faixaCor: faixa.cor,
    });

    setSalvo(true);
    setHistoricoVersao((v) => v + 1);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 print:hidden">
        {escala.itens.map((item, index) => (
          <div
            key={item.id}
            className="rounded-xl border border-rule bg-panel p-5"
          >
            <p className="mb-4 text-base font-medium text-ink">
              <span className="mr-2 text-ink-3">{index + 1}.</span>
              {item.texto}
            </p>

            <div className="flex flex-col gap-2">
              {item.opcoes.map((opcao, indiceOpcao) => {
                const inputId = `${item.id}-${indiceOpcao}`;
                const selecionado = respostas[item.id] === indiceOpcao;

                return (
                  <label
                    key={inputId}
                    htmlFor={inputId}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                      selecionado
                        ? "border-accent bg-accent-soft"
                        : "border-rule bg-paper hover:border-accent-border"
                    }`}
                  >
                    <input
                      id={inputId}
                      type="radio"
                      name={item.id}
                      value={opcao.valor}
                      checked={selecionado}
                      onChange={() => responder(item.id, indiceOpcao)}
                      className="h-4 w-4 accent-accent"
                    />

                    <span className="flex-1 text-sm text-ink-2">
                      {opcao.label}
                    </span>

                    <span className="text-xs font-semibold text-ink-3">
                      {opcao.valor}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Versão enxuta e limpa para impressão/PDF — evita imprimir os radio
          buttons interativos, mostrando só a pergunta e a resposta escolhida. */}
      {completo && (
        <div className="hidden print:block">
          <h3 className="mb-3 text-lg font-bold text-black">
            Respostas
          </h3>

          <ol className="list-decimal space-y-1 pl-5 text-sm text-black">
            {escala.itens.map((item) => {
              const indiceEscolhido = respostas[item.id];
              const opcao =
                indiceEscolhido !== undefined
                  ? item.opcoes[indiceEscolhido]
                  : undefined;

              return (
                <li key={item.id}>
                  {item.texto} — <strong>{opcao?.label ?? "-"}</strong>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      <div className="rounded-xl border border-rule bg-panel p-6 print:border-none print:bg-white print:p-0 print:text-black">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <h3 className="text-xl font-bold text-ink">Resultado</h3>

          <div className="flex items-center gap-2">
            {completo && faixa && (
              <BotaoCopiarProntuario
                texto={gerarTextoEscala(
                  escala,
                  escala.itens.map((item) => item.opcoes[respostas[item.id]]?.valor ?? 0),
                  pontuacao,
                  faixa
                )}
              />
            )}

            {completo && (
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                Imprimir / Exportar PDF
              </button>
            )}

            <button
              type="button"
              onClick={reiniciar}
              className="rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
            >
              Reiniciar
            </button>
          </div>
        </div>

        {completo ? (
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              titulo="Pontuação total"
              valor={
                <span className="text-2xl font-bold text-ink print:text-black">
                  {pontuacao}
                </span>
              }
            />

            <InfoCard
              titulo="Interpretação"
              valor={
                faixa ? (
                  <div className="flex flex-col gap-2">
                    <Badge color={faixa.cor}>{faixa.label}</Badge>

                    {faixa.descricao && (
                      <span className="text-sm text-ink-2 print:text-black">
                        {faixa.descricao}
                      </span>
                    )}

                    {fluxogramaVinculado && vinculoFluxograma && (
                      <Link
                        href={`/fluxogramas/${vinculoFluxograma.fluxogramaId}?no=${vinculoFluxograma.nodeId}`}
                        className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover print:hidden"
                      >
                        → Ver conduta no fluxograma de {fluxogramaVinculado.titulo}
                      </Link>
                    )}
                  </div>
                ) : (
                  <span className="text-sm text-ink-2">
                    Pontuação fora das faixas cadastradas.
                  </span>
                )
              }
            />
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-rule bg-paper p-6 text-center text-ink-2">
            Faltam {totalItens - itensRespondidos} de {totalItens} item(ns)
            para responder. A pontuação será calculada quando todos os itens
            forem preenchidos.
          </div>
        )}

        {escala.notaInterpretacao && (
          <p className="mt-5 text-sm leading-6 text-ink-2 print:text-black">
            <strong className="text-ink-2 print:text-black">Nota: </strong>
            {escala.notaInterpretacao}
          </p>
        )}

        <p className="mt-6 border-t border-rule pt-4 text-xs text-ink-3 print:border-slate-300">
          Este resultado é uma ferramenta de apoio à triagem clínica e não
          substitui avaliação médica.
        </p>

        {completo && (
          <div className="mt-6 flex flex-wrap items-end gap-3 border-t border-rule pt-6 print:hidden">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-sm font-medium text-ink-2">
                Salvar no histórico deste paciente (iniciais/identificador)
              </label>

              <input
                type="text"
                value={pacienteLabel}
                onChange={(e) => {
                  setPacienteLabel(e.target.value);
                  setSalvo(false);
                }}
                placeholder="Ex: J.S. ou #1234"
                className="rounded-lg border border-rule bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
              />
            </div>

            <button
              type="button"
              onClick={salvarNoHistorico}
              disabled={!pacienteLabel.trim()}
              className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
              {salvo ? "Salvo ✓" : "Salvar no histórico"}
            </button>
          </div>
        )}
      </div>

      <HistoricoEscala
        escalaId={escala.id}
        pontuacaoMaxima={pontuacaoMaxima}
        versao={historicoVersao}
      />
    </div>
  );
}
