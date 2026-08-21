"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import BotaoCopiarProntuario from "./BotaoCopiarProntuario";
import MedicamentoMiniCard from "./fluxogramas/MedicamentoMiniCard";

import type { CasoClinico, NoInterativo, OpcaoInterativa } from "../data/casos-clinicos/types";
import { diagnosticos } from "../data/diagnosticos";
import { medicamentos } from "../data/medicamentos";
import { dominiosPsicopatologicos } from "../data/psicopatologia";
import { gerarTextoEvolucaoCasoInterativo } from "../lib/gerarTextoProntuario";

interface Props {
  caso: CasoClinico;
}

interface PassoHistorico {
  noId: string;
  opcaoEscolhida?: OpcaoInterativa;
}

const TURNOS: NonNullable<NoInterativo["turno"]>[] = [
  "entrevista",
  "exames",
  "conduta",
  "evolucao",
  "desfecho",
];

const TURNO_LABEL: Record<NonNullable<NoInterativo["turno"]>, string> = {
  entrevista: "Entrevista",
  exames: "Exames",
  conduta: "Conduta",
  evolucao: "Evolução",
  desfecho: "Desfecho",
};

const QUALIDADE_ESTILO: Record<
  NonNullable<OpcaoInterativa["qualidadeDecisao"]>,
  { label: string; classe: string; badgeColor: "green" | "yellow" | "red" }
> = {
  ideal: { label: "Ideal", classe: "border-ok-border bg-ok-bg text-ok", badgeColor: "green" },
  aceitavel: { label: "Aceitável", classe: "border-warn-border bg-warn-bg text-warn", badgeColor: "yellow" },
  problematica: { label: "Problemática", classe: "border-alert-border bg-alert-bg text-alert", badgeColor: "red" },
};

// Feedback construtivo baseado na mistura de qualidadeDecisao das
// escolhas do caminho — nunca acusatório, sempre apontando o próximo
// passo (revisar a etapa específica).
function gerarFeedbackQualidade(opcoesEscolhidas: OpcaoInterativa[]): string {
  const comQualidade = opcoesEscolhidas.filter((o) => o.qualidadeDecisao !== undefined);
  if (comQualidade.length === 0) return "";

  const total = comQualidade.length;
  const ideais = comQualidade.filter((o) => o.qualidadeDecisao === "ideal").length;
  const problematicas = comQualidade.filter((o) => o.qualidadeDecisao === "problematica").length;

  if (problematicas === 0 && ideais === total) {
    return "Conduta exemplar: todas as decisões tomadas ao longo do caso foram as mais adequadas clinicamente. Esse é o padrão a manter na prática real.";
  }

  if (problematicas === 0) {
    return "Boa condução do caso, sem decisões problemáticas — algumas escolhas foram aceitáveis mas não as ideais. Vale revisar essas etapas específicas abaixo pra entender o que teria sido ainda melhor.";
  }

  if (problematicas === 1) {
    return "Condução majoritariamente adequada, com uma decisão problemática ao longo do caminho — revise essa etapa abaixo com atenção: entender o motivo evita repetir esse tipo de escolha na prática real.";
  }

  return `Foram ${problematicas} decisões problemáticas ao longo deste caso — vale revisar cada uma delas abaixo com calma. Errar num caso simulado é exatamente pra isso: identificar lacunas antes que apareçam com um paciente de verdade.`;
}

// Mesma lógica do feedback narrativo acima, mas para o estilo MCQ
// (correta/explicacao) — paridade de acabamento entre os dois estilos na
// tela de síntese.
function gerarFeedbackCorreta(opcoesComCorreta: OpcaoInterativa[]): string {
  const total = opcoesComCorreta.length;
  if (total === 0) return "";

  const acertos = opcoesComCorreta.filter((o) => o.correta).length;

  if (acertos === total) {
    return "Todas as respostas corretas — domínio sólido do raciocínio clínico exigido neste caso.";
  }

  if (acertos === 0) {
    return "Nenhuma resposta correta neste caso — vale revisar cada etapa abaixo com calma antes de refazer.";
  }

  const erros = total - acertos;
  return `${acertos} de ${total} respostas corretas (${erros} para revisar) — as explicações abaixo mostram por que cada alternativa é ou não compatível com o quadro.`;
}

// Módulo interativo unificado — generaliza o antigo CasoClinicoPlayer
// (múltipla escolha linear, feedback certo/errado imediato) e o antigo
// SimuladorPlayer (árvore narrativa ramificada, qualidadeDecisao revelada
// só no fim). Qual estilo usar é decidido por nó/opção: `correta`
// dispara o modo MCQ (trava a etapa, exige "Continuar" pra avançar);
// `qualidadeDecisao` dispara o modo narrativo (avança direto, sem travar).
export default function CasoInterativoPlayer({ caso }: Props) {
  const [historico, setHistorico] = useState<PassoHistorico[]>([{ noId: caso.noInicialId }]);
  const [aguardandoContinuar, setAguardandoContinuar] = useState(false);

  const nosPorId = useMemo(() => {
    const mapa = new Map<string, NoInterativo>();
    for (const no of caso.nos) mapa.set(no.id, no);
    return mapa;
  }, [caso]);

  const passoAtual = historico[historico.length - 1];
  const noAtual = nosPorId.get(passoAtual.noId);

  function escolherOpcao(opcao: OpcaoInterativa) {
    const ehMcq = opcao.correta !== undefined;

    setHistorico((atual) => {
      const novo = [...atual];
      novo[novo.length - 1] = { ...novo[novo.length - 1], opcaoEscolhida: opcao };
      if (!ehMcq) novo.push({ noId: opcao.proximoNoId });
      return novo;
    });

    if (ehMcq) setAguardandoContinuar(true);
  }

  function continuar() {
    if (!passoAtual.opcaoEscolhida) return;
    setHistorico((atual) => [...atual, { noId: passoAtual.opcaoEscolhida!.proximoNoId }]);
    setAguardandoContinuar(false);
  }

  // Se está aguardando "Continuar" (MCQ recém-respondido), só desfaz a
  // resposta atual sem navegar — evita voltar 2 etapas de uma vez. Caso
  // contrário, volta pra etapa anterior e a deixa novamente respondível.
  function voltar() {
    if (aguardandoContinuar) {
      setHistorico((atual) => {
        const novo = [...atual];
        novo[novo.length - 1] = { noId: novo[novo.length - 1].noId };
        return novo;
      });
      setAguardandoContinuar(false);
      return;
    }

    if (historico.length <= 1) return;

    setHistorico((atual) =>
      atual.slice(0, -1).map((passo, index, arr) =>
        index === arr.length - 1 ? { noId: passo.noId } : passo
      )
    );
  }

  function reiniciar() {
    setHistorico([{ noId: caso.noInicialId }]);
    setAguardandoContinuar(false);
  }

  if (!noAtual) {
    return (
      <div className="rounded-xl border border-alert-border bg-alert-bg p-6 text-alert">
        Nó do caso não encontrado. Reinicie o caso.
      </div>
    );
  }

  const caminhoPercorrido = historico.slice(0, -1);
  const opcoesEscolhidas = historico
    .map((p) => p.opcaoEscolhida)
    .filter((o): o is OpcaoInterativa => Boolean(o));

  const terminou = noAtual.opcoes.length === 0;
  const usaTurno = caso.nos.some((n) => n.turno !== undefined);
  const indiceTurnoAtual = noAtual.turno ? TURNOS.indexOf(noAtual.turno) : -1;
  const diagnosticoReal = caso.diagnosticoId
    ? diagnosticos.find((d) => d.id === caso.diagnosticoId)
    : undefined;

  return (
    <div>
      {usaTurno && (
        <div className="mb-6 flex items-center gap-2">
          {TURNOS.map((turno, i) => (
            <div key={turno} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`h-1.5 w-full rounded-full ${
                  i <= indiceTurnoAtual ? "bg-accent" : "bg-hover-warm"
                }`}
              />
              <span
                className={`text-[10px] font-semibold uppercase tracking-wider ${
                  i <= indiceTurnoAtual ? "text-accent" : "text-ink-4"
                }`}
              >
                {TURNO_LABEL[turno]}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 rounded-xl border border-rule bg-panel p-6">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
          Apresentação do caso
        </div>
        <p className="text-ink-2">{caso.apresentacaoInicial}</p>
      </div>

      {caminhoPercorrido.length > 0 && (
        <div className="mb-6 max-h-80 overflow-y-auto rounded-xl border border-rule bg-panel p-5">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-3">
            Histórico
          </div>

          <ol className="space-y-4">
            {caminhoPercorrido.map((passo, index) => {
              const no = nosPorId.get(passo.noId);
              if (!no) return null;

              return (
                <li key={`${passo.noId}-${index}`} className="text-sm">
                  <p className="text-ink-2">{no.pergunta ?? no.narrativa}</p>

                  {passo.opcaoEscolhida && (
                    <>
                      <p className="mt-2 font-medium text-accent">→ {passo.opcaoEscolhida.texto}</p>
                      {(passo.opcaoEscolhida.consequencia ?? passo.opcaoEscolhida.explicacao) && (
                        <p className="mt-1 italic text-ink-3">
                          {passo.opcaoEscolhida.consequencia ?? passo.opcaoEscolhida.explicacao}
                        </p>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {!terminou ? (
        <div className="rounded-xl border border-rule bg-panel p-8">
          {usaTurno && (
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
              {noAtual.turno ? TURNO_LABEL[noAtual.turno] : ""}
            </div>
          )}

          {noAtual.narrativaAdicional && (
            <p className="mb-4 rounded-lg border-l-4 border-accent bg-accent-soft p-4 text-sm italic text-ink-2">
              {noAtual.narrativaAdicional}
            </p>
          )}

          {noAtual.pergunta ? (
            <h3 className="text-lg font-semibold text-ink">{noAtual.pergunta}</h3>
          ) : (
            <p className="whitespace-pre-line text-lg leading-7 text-ink-2">{noAtual.narrativa}</p>
          )}

          <div className={noAtual.pergunta ? "mt-4 flex flex-col gap-3" : "mt-6 flex flex-col gap-3"}>
            {noAtual.opcoes.map((opcao, idx) => {
              const respondida = aguardandoContinuar && passoAtual.opcaoEscolhida !== undefined;
              const selecionada = respondida && passoAtual.opcaoEscolhida === opcao;
              const mostrarCorreta = respondida && opcao.correta;
              const mostrarErradaSelecionada = respondida && selecionada && !opcao.correta;
              const ehMcq = opcao.correta !== undefined;

              return (
                <div key={idx}>
                  <button
                    type="button"
                    disabled={respondida}
                    onClick={() => escolherOpcao(opcao)}
                    className={
                      ehMcq
                        ? `w-full rounded-lg border p-4 text-left transition-colors ${
                            mostrarCorreta
                              ? "border-ok bg-ok-bg"
                              : mostrarErradaSelecionada
                                ? "border-alert bg-alert-bg"
                                : respondida
                                  ? "border-rule bg-paper"
                                  : "border-rule bg-paper hover:border-accent"
                          }`
                        : "rounded-xl border border-rule bg-hover-warm px-5 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
                    }
                  >
                    <span
                      className={
                        ehMcq
                          ? mostrarCorreta
                            ? "text-ok"
                            : mostrarErradaSelecionada
                              ? "text-alert"
                              : "text-ink-2"
                          : undefined
                      }
                    >
                      {opcao.texto}
                    </span>
                  </button>

                  {ehMcq && respondida && (mostrarCorreta || selecionada) && opcao.explicacao && (
                    <p className="mt-2 px-1 text-sm leading-6 text-ink-2">{opcao.explicacao}</p>
                  )}
                </div>
              );
            })}
          </div>

          {aguardandoContinuar && (
            <div className="mt-6">
              <button
                type="button"
                onClick={continuar}
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Continuar →
              </button>
            </div>
          )}
        </div>
      ) : (
        <TelaSintese
          caso={caso}
          opcoesEscolhidas={opcoesEscolhidas}
          diagnosticoReal={diagnosticoReal}
        />
      )}

      {(historico.length > 1 || aguardandoContinuar) && (
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={voltar}
            className="rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
          >
            ← Voltar
          </button>

          <button
            type="button"
            onClick={reiniciar}
            className="rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
          >
            ↺ Refazer caso
          </button>
        </div>
      )}
    </div>
  );
}

function TelaSintese({
  caso,
  opcoesEscolhidas,
  diagnosticoReal,
}: {
  caso: CasoClinico;
  opcoesEscolhidas: OpcaoInterativa[];
  diagnosticoReal: ReturnType<typeof diagnosticos.find>;
}) {
  const opcoesComCorreta = opcoesEscolhidas.filter((o) => o.correta !== undefined);
  const opcoesComQualidade = opcoesEscolhidas.filter((o) => o.qualidadeDecisao !== undefined);
  const acertos = opcoesComCorreta.filter((o) => o.correta).length;

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
    <div className="rounded-xl border border-accent-border bg-panel p-6">
      {opcoesComCorreta.length > 0 && (
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
          Síntese do caso — {acertos}/{opcoesComCorreta.length} corretas
        </div>
      )}

      <h3 className="mb-4 text-xl font-bold text-ink">{caso.diagnosticoFinal}</h3>

      {(diagnosticoReal || medicamentosLink.length > 0 || achadosLink.length > 0) && (
        <div className="mb-5 flex flex-wrap gap-2">
          {diagnosticoReal && (
            <Link href={`/diagnosticos/${diagnosticoReal.id}`}>
              <Badge color="blue">{diagnosticoReal.nome}</Badge>
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

      {opcoesComQualidade.length > 0 && (
        <p className="mb-5 text-sm leading-6 text-ink-2">{gerarFeedbackQualidade(opcoesComQualidade)}</p>
      )}

      {opcoesComCorreta.length > 0 && (
        <p className="mb-5 text-sm leading-6 text-ink-2">{gerarFeedbackCorreta(opcoesComCorreta)}</p>
      )}

      {opcoesEscolhidas.length > 0 && (
        <div className="mb-5">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
            Suas decisões neste caso
          </div>

          <ul className="flex flex-col gap-2">
            {opcoesEscolhidas.map((opcao, index) => {
              const medicamento = opcao.medicamentoId
                ? medicamentos.find((m) => m.id === opcao.medicamentoId)
                : undefined;

              const estiloQualidade = opcao.qualidadeDecisao
                ? QUALIDADE_ESTILO[opcao.qualidadeDecisao]
                : undefined;

              const classe = estiloQualidade
                ? estiloQualidade.classe
                : opcao.correta
                  ? "border-ok-border bg-ok-bg text-ok"
                  : opcao.correta === false
                    ? "border-alert-border bg-alert-bg text-alert"
                    : "border-rule bg-paper text-ink-2";

              const badgeLabel = estiloQualidade
                ? estiloQualidade.label
                : opcao.correta !== undefined
                  ? opcao.correta
                    ? "Correta"
                    : "Incorreta"
                  : undefined;

              const badgeColor = estiloQualidade
                ? estiloQualidade.badgeColor
                : opcao.correta !== undefined
                  ? opcao.correta
                    ? "green"
                    : "red"
                  : "gray";

              return (
                <li key={index} className={`rounded-xl border p-4 text-sm ${classe}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-medium">{opcao.texto}</span>
                    {badgeLabel && <Badge color={badgeColor}>{badgeLabel}</Badge>}
                  </div>

                  {(opcao.consequencia ?? opcao.explicacao) && (
                    <p className="mt-2 text-sm leading-6">{opcao.consequencia ?? opcao.explicacao}</p>
                  )}

                  {medicamento && (
                    <div className="mt-3">
                      <MedicamentoMiniCard medicamento={medicamento} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {caso.pontosDeEnsino.length > 0 && (
        <>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
            Pontos de ensino
          </div>
          <ul className="mb-5 list-disc space-y-1.5 pl-6 text-ink-2">
            {caso.pontosDeEnsino.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </>
      )}

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

      {caso.inspiracaoExterna && (
        <p className="mb-5 text-xs text-ink-3">
          Inspirado em:{" "}
          <a
            href={caso.inspiracaoExterna.url}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-ink-2"
          >
            {caso.inspiracaoExterna.titulo}
          </a>
        </p>
      )}

      {diagnosticoReal && opcoesEscolhidas.length > 0 && (
        <BotaoCopiarProntuario
          texto={gerarTextoEvolucaoCasoInterativo(caso, diagnosticoReal, opcoesEscolhidas)}
        />
      )}
    </div>
  );
}
