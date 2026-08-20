"use client";

import Link from "next/link";

import Badge from "./Badge";

import type { Diagnostico } from "../data/diagnosticos/types";
import { avaliarAlgoritmo, avaliarRastreio } from "../lib/entrevistaEstruturada";

interface Props {
  diagnostico: Diagnostico; // precisa ter entrevistaEstruturada definido — checar antes de renderizar
  // Ids brutos de CriterioEntrevista (não a chave composta usada na página) -> resposta.
  respostasCriterios: Map<string, boolean>;
  // valor undefined = "desmarcar"/limpar a resposta (usado por "reabrir rastreio").
  onResponderCriterio: (criterioId: string, valor: boolean | undefined) => void;
}

function BotaoSimNao({
  valor,
  onResponder,
}: {
  valor: boolean | undefined;
  onResponder: (valor: boolean) => void;
}) {
  return (
    <div className="flex gap-2 print:hidden">
      <button
        type="button"
        onClick={() => onResponder(true)}
        className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
          valor === true
            ? "border-accent bg-accent-soft text-accent"
            : "border-rule text-ink-2 hover:border-accent hover:text-accent"
        }`}
      >
        Sim
      </button>
      <button
        type="button"
        onClick={() => onResponder(false)}
        className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
          valor === false
            ? "border-rule bg-hover-warm text-ink"
            : "border-rule text-ink-2 hover:border-accent hover:text-accent"
        }`}
      >
        Não
      </button>
    </div>
  );
}

// Módulo de entrevista estruturada (tipo SCID) de 1 diagnóstico: pergunta(s)
// de rastreio primeiro — se TODAS forem negativas, o módulo é pulado
// (skip-out); basta 1 positiva pra abrir o resto dos critérios. Cálculo do
// algoritmo formal ao vivo. Nunca declara diagnóstico fechado — só reporta
// a contagem/subgrupos formais, sempre ao lado do lembrete de duração/
// exclusão/diferencial pra confirmação clínica humana.
export default function EntrevistaEstruturadaModulo({
  diagnostico,
  respostasCriterios,
  onResponderCriterio,
}: Props) {
  const entrevista = diagnostico.entrevistaEstruturada;
  if (!entrevista) return null;

  const estadoRastreio = avaliarRastreio(respostasCriterios, entrevista.criteriosRastreioIds);
  const criteriosRastreio = entrevista.criterios.filter((c) =>
    entrevista.criteriosRastreioIds.includes(c.id)
  );
  const criteriosRestantes = entrevista.criterios.filter(
    (c) => !entrevista.criteriosRastreioIds.includes(c.id)
  );

  const resultado = avaliarAlgoritmo(respostasCriterios, entrevista.algoritmo);
  const totalContavel = entrevista.algoritmo.itensContaveis.length;

  return (
    <div className="rounded-lg border border-rule bg-paper">
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="font-medium text-ink">{diagnostico.nome}</span>
        <Link
          href={`/diagnosticos/${encodeURIComponent(diagnostico.id)}`}
          className="text-xs text-ink-3 hover:text-accent print:hidden"
        >
          ver diagnóstico ↗
        </Link>
      </div>

      <div className="border-t border-rule-soft px-4 py-3">
        {estadoRastreio === "pendente" && (
          <div className="flex flex-col gap-3">
            {criteriosRastreio.map((criterio) => (
              <div key={criterio.id} className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-ink-2">{criterio.pergunta}</p>
                <BotaoSimNao
                  valor={respostasCriterios.get(criterio.id)}
                  onResponder={(valor) => onResponderCriterio(criterio.id, valor)}
                />
              </div>
            ))}
          </div>
        )}

        {estadoRastreio === "pulado" && (
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-ink-3">Rastreio negativo — módulo encerrado.</p>
            <button
              type="button"
              onClick={() => criteriosRastreio.forEach((c) => onResponderCriterio(c.id, undefined))}
              className="text-xs text-ink-3 transition-colors hover:text-accent print:hidden"
            >
              reabrir
            </button>
          </div>
        )}

        {estadoRastreio === "positivo" && (
          <div className="flex items-center justify-between gap-3 pb-3">
            <p className="text-sm text-ink-3">Rastreio positivo.</p>
            <button
              type="button"
              onClick={() => criteriosRastreio.forEach((c) => onResponderCriterio(c.id, undefined))}
              className="text-xs text-ink-3 transition-colors hover:text-accent print:hidden"
            >
              revisar rastreio
            </button>
          </div>
        )}

        {estadoRastreio === "positivo" && (
          <div className="flex flex-col gap-4">
            <ul className="space-y-2">
              {criteriosRestantes.map((criterio) => {
                const marcado = respostasCriterios.get(criterio.id) === true;

                return (
                  <li key={criterio.id}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1 print:cursor-default">
                      <input
                        type="checkbox"
                        checked={marcado}
                        onChange={(e) => onResponderCriterio(criterio.id, e.target.checked)}
                        className="mt-1 h-4 w-4 accent-accent print:hidden"
                      />
                      <span className={marcado ? "text-ink" : "text-ink-2 print:text-black"}>
                        {criterio.pergunta}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            <div>
              <Badge color={resultado.criteriosFormaisAtingidos ? "yellow" : "gray"}>
                Critérios formais: {resultado.contagemPositiva}/{totalContavel}
                {resultado.criteriosFormaisAtingidos ? " — atingidos" : ""}
              </Badge>
            </div>

            {resultado.criteriosFormaisAtingidos && (
              <div className="rounded-lg border border-rule-soft bg-panel p-3 text-xs text-ink-3">
                <p>
                  Contagem/subgrupos formais atingidos — isto não é um diagnóstico confirmado.
                  Confira antes de considerar o diagnóstico:
                </p>
                <ul className="mt-1.5 list-disc space-y-1 pl-4">
                  {entrevista.algoritmo.duracaoMinima && (
                    <li>Duração mínima exigida: {entrevista.algoritmo.duracaoMinima}</li>
                  )}
                  {entrevista.algoritmo.observacaoExclusao && (
                    <li>{entrevista.algoritmo.observacaoExclusao}</li>
                  )}
                  {diagnostico.diagnosticoDiferencial.length > 0 && (
                    <li>Diagnóstico diferencial: {diagnostico.diagnosticoDiferencial.join("; ")}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
