"use client";

import Link from "next/link";

import Badge from "./Badge";

import type { Diagnostico } from "../data/diagnosticos/types";
import { alertasSeguranca } from "../lib/alertasSeguranca";
import { avaliarAlgoritmo, avaliarRastreio, contagemExibivel } from "../lib/entrevistaEstruturada";

const alertaRiscoSuicidio = alertasSeguranca.find((a) => a.id === "risco-suicidio")!;

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
  // Depois que o rastreio abre o módulo (basta 1 item positivo — ver
  // avaliarRastreio), os DEMAIS critérios de rastreio continuam aparecendo
  // aqui como checkbox normal, junto com todos os outros. O bloco de
  // rastreio (estadoRastreio === "pendente") e este checklist
  // (estadoRastreio === "positivo") nunca renderizam ao mesmo tempo, então
  // não há risco de repetir a mesma pergunta duas vezes na tela — não é
  // preciso (nem correto) esconder os itens de rastreio já respondidos.
  const criteriosRestantes = entrevista.criterios;
  // Se o rastreio foi desfeito (direto no checklist ou via "revisar
  // rastreio"/"reabrir") depois de já haver critérios marcados, essas
  // respostas continuam no Map — só ficam fora de vista até o módulo
  // reabrir. Avisa que existem pra não parecerem perdidas.
  const respostasPreservadas = entrevista.criterios.filter(
    (c) => respostasCriterios.get(c.id) === true
  ).length;

  const resultado = avaliarAlgoritmo(respostasCriterios, entrevista.algoritmo);
  const { contagem: contagemExibida, total: totalContavel } = contagemExibivel(
    respostasCriterios,
    entrevista.algoritmo
  );

  // Mesmo alerta de risco de suicídio usado no Assistente de Sintomas
  // (lib/alertasSeguranca.ts), disparado aqui por item de critério marcado
  // como `sinalizaRisco` — não pelo vocabulário de EstadoSintoma do
  // Assistente, que não existe neste módulo.
  const riscoSuicidioSinalizado = entrevista.criterios.some(
    (c) => c.sinalizaRisco && respostasCriterios.get(c.id) === true
  );

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

      {riscoSuicidioSinalizado && (
        <div className="mx-4 mt-3 rounded-xl border border-alert-border bg-alert-bg p-4">
          <p className="text-sm font-semibold text-alert">{alertaRiscoSuicidio.titulo}</p>
          <p className="mt-1 text-sm leading-6 text-alert">{alertaRiscoSuicidio.descricao}</p>
          <Link
            href={alertaRiscoSuicidio.href}
            target="_blank"
            className="mt-2 inline-block text-sm font-medium text-alert hover:text-alert-deep print:hidden"
          >
            {alertaRiscoSuicidio.linkLabel} →
          </Link>
        </div>
      )}

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
            {respostasPreservadas > 0 && (
              <p className="text-xs text-ink-3">
                {respostasPreservadas} resposta(s) já marcada(s) neste módulo foram preservadas —
                responda &ldquo;Sim&rdquo; a algum item acima para vê-las de novo.
              </p>
            )}
          </div>
        )}

        {estadoRastreio === "pulado" && (
          <div className="flex flex-col gap-1 pb-1">
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
            {respostasPreservadas > 0 && (
              <p className="text-xs text-ink-3">
                {respostasPreservadas} resposta(s) já marcada(s) neste módulo foram preservadas —
                clique &ldquo;reabrir&rdquo; para vê-las de novo.
              </p>
            )}
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
                Critérios formais:
                {totalContavel > 0 ? ` ${contagemExibida}/${totalContavel}` : ""}
                {resultado.criteriosFormaisAtingidos ? " — atingidos" : " — não atingidos"}
              </Badge>
            </div>

            {(entrevista.algoritmo.duracaoMinima ||
              entrevista.algoritmo.observacaoExclusao ||
              diagnostico.diagnosticoDiferencial.length > 0) && (
              <div className="rounded-lg border border-rule-soft bg-panel p-3 text-xs text-ink-3">
                <p>
                  {resultado.criteriosFormaisAtingidos
                    ? "Contagem/subgrupos formais atingidos — isto não é um diagnóstico confirmado. Confira antes de considerar o diagnóstico:"
                    : "Referência para a entrevista, independentemente da contagem formal — inclusive itens de segurança que exigem avaliação mesmo com poucos critérios marcados:"}
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
