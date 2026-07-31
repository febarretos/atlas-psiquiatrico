"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Badge from "../Badge";

import { sintomas, categoriasSintomas } from "../../data/sintomas";
import { diagnosticos } from "../../data/diagnosticos";
import { Diagnostico } from "../../data/diagnosticos/types";
import { medicamentos } from "../../data/medicamentos";
import { Medicamento } from "../../data/types";

interface Candidato {
  diagnostico: Diagnostico;
  score: number;
  matchedCount: number;
  totalCount: number;
  matchedRotulos: string[];
}

interface FiltrosPerfil {
  evitarGanhoPeso: boolean;
  evitarSedacao: boolean;
  evitarDisfuncaoSexual: boolean;
  evitarQt: boolean;
  gestante: boolean;
  lactante: boolean;
  evitarAjusteRenal: boolean;
}

interface MedicamentoAvaliado {
  medicamento: Medicamento;
  pontos: number;
  positivos: string[];
  alertas: string[];
}

const filtrosIniciais: FiltrosPerfil = {
  evitarGanhoPeso: false,
  evitarSedacao: false,
  evitarDisfuncaoSexual: false,
  evitarQt: false,
  gestante: false,
  lactante: false,
  evitarAjusteRenal: false,
};

function avaliarMedicamento(m: Medicamento, f: FiltrosPerfil): MedicamentoAvaliado {
  const positivos: string[] = [];
  const alertas: string[] = [];
  let pontos = 0;

  const baixo = (v: string) => v === "Baixo" || v === "Baixa" || v === "Muito baixo" || v === "Muito baixa";
  const alto = (v: string) => v === "Alto" || v === "Alta" || v === "Muito alto" || v === "Muito alta";

  if (f.evitarGanhoPeso) {
    if (baixo(m.ganhoPeso)) { pontos++; positivos.push("Baixo ganho de peso"); }
    else if (alto(m.ganhoPeso)) { pontos--; alertas.push(`Ganho de peso: ${m.ganhoPeso.toLowerCase()}`); }
  }

  if (f.evitarSedacao) {
    if (baixo(m.sedacao)) { pontos++; positivos.push("Baixa sedação"); }
    else if (alto(m.sedacao)) { pontos--; alertas.push(`Sedação: ${m.sedacao.toLowerCase()}`); }
  }

  if (f.evitarDisfuncaoSexual) {
    if (baixo(m.sexual)) { pontos++; positivos.push("Baixo risco de disfunção sexual"); }
    else if (alto(m.sexual)) { pontos--; alertas.push(`Disfunção sexual: ${m.sexual.toLowerCase()}`); }
  }

  if (f.evitarQt) {
    if (baixo(m.qt)) { pontos++; positivos.push("Baixo risco de prolongamento de QT"); }
    else if (alto(m.qt)) { pontos--; alertas.push(`Prolongamento de QT: ${m.qt.toLowerCase()}`); }
  }

  if (f.gestante) {
    if (m.gravidezCategoria === "preferencial") { pontos++; positivos.push("Opção preferencial na gravidez"); }
    else if (m.gravidezCategoria === "evitar") { pontos -= 2; alertas.push("Evitar na gravidez quando possível"); }
    else if (m.gravidezCategoria === "cautela") { alertas.push("Usar com cautela na gravidez"); }
  }

  if (f.lactante) {
    if (m.lactacaoCategoria === "compativel") { pontos++; positivos.push("Geralmente compatível com lactação"); }
    else if (m.lactacaoCategoria === "evitar") { pontos -= 2; alertas.push("Geralmente evitar na lactação"); }
    else if (m.lactacaoCategoria === "cautela") { alertas.push("Usar com cautela na lactação"); }
  }

  if (f.evitarAjusteRenal) {
    if (m.ajusteRenalNecessario === false) { pontos++; positivos.push("Sem ajuste renal necessário"); }
    else if (m.ajusteRenalNecessario === true) { pontos--; alertas.push("Requer ajuste/cautela na insuficiência renal"); }
  }

  return { medicamento: m, pontos, positivos, alertas };
}

export default function AssistenteAvaliacao() {
  const [passo, setPasso] = useState<1 | 2 | 3>(1);
  const [selecionados, setSelecionados] = useState<Set<string>>(new Set());
  const [diagnosticoEscolhido, setDiagnosticoEscolhido] = useState<Diagnostico | null>(null);
  const [filtros, setFiltros] = useState<FiltrosPerfil>(filtrosIniciais);

  function alternarSintoma(id: string) {
    setSelecionados((atual) => {
      const novo = new Set(atual);
      if (novo.has(id)) novo.delete(id);
      else novo.add(id);
      return novo;
    });
  }

  function recomecar() {
    setPasso(1);
    setSelecionados(new Set());
    setDiagnosticoEscolhido(null);
    setFiltros(filtrosIniciais);
  }

  const candidatos = useMemo<Candidato[]>(() => {
    if (selecionados.size === 0) return [];

    return diagnosticos
      .filter((d) => d.sintomasChave && d.sintomasChave.length > 0)
      .map((d) => {
        const chave = d.sintomasChave!;
        const pesoTotal = chave.reduce((s, c) => s + c.peso, 0);
        const matched = chave.filter((c) => selecionados.has(c.id));
        const pesoMatched = matched.reduce((s, c) => s + c.peso, 0);

        return {
          diagnostico: d,
          score: pesoTotal > 0 ? pesoMatched / pesoTotal : 0,
          matchedCount: matched.length,
          totalCount: chave.length,
          matchedRotulos: matched.map(
            (c) => sintomas.find((s) => s.id === c.id)?.rotulo ?? c.id
          ),
        };
      })
      .filter((c) => c.matchedCount > 0)
      .sort((a, b) => b.score - a.score || b.matchedCount - a.matchedCount)
      .slice(0, 6);
  }, [selecionados]);

  const medicamentosAvaliados = useMemo<MedicamentoAvaliado[]>(() => {
    if (!diagnosticoEscolhido?.medicamentosPrimeiraLinha) return [];

    return diagnosticoEscolhido.medicamentosPrimeiraLinha
      .map((id) => medicamentos.find((m) => m.id === id))
      .filter((m): m is Medicamento => Boolean(m))
      .map((m) => avaliarMedicamento(m, filtros))
      .sort((a, b) => b.pontos - a.pontos);
  }, [diagnosticoEscolhido, filtros]);

  const algumFiltroAtivo = Object.values(filtros).some(Boolean);

  return (
    <div className="flex flex-col gap-8">
      {/* Indicador de passos */}
      <div className="flex items-center gap-2 text-sm">
        {[
          { n: 1, rotulo: "Sintomas" },
          { n: 2, rotulo: "Diagnósticos prováveis" },
          { n: 3, rotulo: "Perfil de medicamento" },
        ].map((p, i) => (
          <div key={p.n} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                passo === p.n
                  ? "bg-blue-600 text-white"
                  : passo > p.n
                  ? "bg-blue-500/20 text-blue-300"
                  : "bg-slate-800 text-slate-500"
              }`}
            >
              {p.n}
            </div>
            <span className={passo === p.n ? "font-semibold text-white" : "text-slate-500"}>
              {p.rotulo}
            </span>
            {i < 2 && <span className="mx-1 text-slate-700">→</span>}
          </div>
        ))}
      </div>

      {/* PASSO 1 — Sintomas */}
      {passo === 1 && (
        <div className="flex flex-col gap-6">
          <p className="text-sm text-slate-400">
            Marque os sintomas/sinais observados no paciente. Quanto mais
            específicos os itens marcados, mais preciso o resultado do
            próximo passo.
          </p>

          {categoriasSintomas.map((categoria) => (
            <div key={categoria}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                {categoria}
              </h3>

              <div className="flex flex-wrap gap-2">
                {sintomas
                  .filter((s) => s.categoria === categoria)
                  .map((s) => {
                    const ativo = selecionados.has(s.id);

                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => alternarSintoma(s.id)}
                        className={`rounded-full border px-4 py-2 text-left text-sm transition-colors ${
                          ativo
                            ? "border-blue-500 bg-blue-500/10 text-blue-300"
                            : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-600"
                        }`}
                      >
                        {s.rotulo}
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}

          <div className="sticky bottom-4 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/95 p-4 backdrop-blur">
            <span className="text-sm text-slate-400">
              {selecionados.size} sintoma(s) selecionado(s)
            </span>

            <button
              type="button"
              onClick={() => setPasso(2)}
              disabled={selecionados.size === 0}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Ver diagnósticos prováveis →
            </button>
          </div>
        </div>
      )}

      {/* PASSO 2 — Diagnósticos prováveis */}
      {passo === 2 && (
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-yellow-900/50 bg-yellow-500/5 p-5 text-sm leading-6 text-yellow-200">
            <strong>⚠️ Hipóteses diagnósticas, não um diagnóstico.</strong>{" "}
            Este ranking é apenas apoio à triagem, calculado pela sobreposição
            entre os sintomas marcados e um conjunto curado de sintomas-chave
            por diagnóstico — não avalia critérios completos, duração,
            diferenciais nem exclusão de causas orgânicas. A confirmação
            diagnóstica exige entrevista clínica estruturada e julgamento do
            médico.
          </div>

          {candidatos.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center text-slate-400">
              Nenhum diagnóstico com sobreposição relevante para os sintomas
              marcados. Volte e marque outros sintomas, ou consulte
              diretamente o módulo Diagnósticos.
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {candidatos.map((c) => (
                <div
                  key={c.diagnostico.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {c.diagnostico.nome}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge color="blue">{c.diagnostico.categoria}</Badge>
                        <Badge color="gray">
                          {Math.round(c.score * 100)}% de sobreposição (
                          {c.matchedCount}/{c.totalCount} sintomas-chave)
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/diagnosticos/${c.diagnostico.id}`}
                        target="_blank"
                        className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
                      >
                        Ver critérios completos
                      </Link>

                      <button
                        type="button"
                        onClick={() => {
                          setDiagnosticoEscolhido(c.diagnostico);
                          setPasso(3);
                        }}
                        className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                      >
                        Usar este diagnóstico →
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-400">
                    Sintomas marcados que correspondem: {c.matchedRotulos.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={() => setPasso(1)}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
            >
              ← Voltar aos sintomas
            </button>
          </div>
        </div>
      )}

      {/* PASSO 3 — Perfil de medicamento */}
      {passo === 3 && diagnosticoEscolhido && (
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-white">
                {diagnosticoEscolhido.nome}
              </h3>
              <Badge color="blue">{diagnosticoEscolhido.categoria}</Badge>
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-300">
              Tratamento de primeira linha (segundo diretrizes):
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-300">
              {diagnosticoEscolhido.tratamentoPrimeiraLinha.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {!diagnosticoEscolhido.medicamentosPrimeiraLinha ||
          diagnosticoEscolhido.medicamentosPrimeiraLinha.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-6 text-sm text-slate-400">
              O tratamento de primeira linha para este diagnóstico é
              predominantemente não farmacológico (ver acima) — este
              assistente não sugere medicamentos como abordagem central
              nesse caso.
            </div>
          ) : (
            <>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p className="mb-3 text-sm font-semibold text-slate-300">
                  O que é mais importante evitar/priorizar para este paciente?
                  (opcional — ajusta a ordem, não remove opções)
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    { chave: "evitarGanhoPeso" as const, rotulo: "Evitar ganho de peso" },
                    { chave: "evitarSedacao" as const, rotulo: "Evitar sedação" },
                    { chave: "evitarDisfuncaoSexual" as const, rotulo: "Evitar disfunção sexual" },
                    { chave: "evitarQt" as const, rotulo: "Evitar prolongamento de QT" },
                    { chave: "gestante" as const, rotulo: "Paciente gestante" },
                    { chave: "lactante" as const, rotulo: "Paciente lactante" },
                    { chave: "evitarAjusteRenal" as const, rotulo: "Insuficiência renal" },
                  ].map((f) => (
                    <button
                      key={f.chave}
                      type="button"
                      onClick={() =>
                        setFiltros((atual) => ({ ...atual, [f.chave]: !atual[f.chave] }))
                      }
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        filtros[f.chave]
                          ? "border-blue-500 bg-blue-500/10 text-blue-300"
                          : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-600"
                      }`}
                    >
                      {f.rotulo}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {medicamentosAvaliados.map(({ medicamento, positivos, alertas }) => (
                  <Link
                    key={medicamento.id}
                    href={`/medicamentos/${encodeURIComponent(medicamento.nome)}`}
                    target="_blank"
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="text-lg font-bold text-white">
                        {medicamento.nome}
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        <Badge color="blue">{medicamento.classe}</Badge>
                        {medicamento.subclasse && (
                          <Badge color="green">{medicamento.subclasse}</Badge>
                        )}
                      </div>
                    </div>

                    {algumFiltroAtivo && (positivos.length > 0 || alertas.length > 0) && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {positivos.map((p) => (
                          <span
                            key={p}
                            className="rounded-full border border-green-900/50 bg-green-500/10 px-3 py-1 text-xs text-green-300"
                          >
                            ✓ {p}
                          </span>
                        ))}
                        {alertas.map((a) => (
                          <span
                            key={a}
                            className="rounded-full border border-yellow-900/50 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300"
                          >
                            ⚠ {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </>
          )}

          <p className="text-xs leading-5 text-slate-500">
            Lista curada de opções com indicação para este diagnóstico — a
            ordem reflete apenas os fatores marcados acima, não substitui
            avaliação de comorbidades, interações com outros medicamentos em
            uso, custo, disponibilidade e preferência do paciente. Use o
            Verificador de Interações (em Calculadoras) antes de associar a
            outros medicamentos já em uso.
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPasso(2)}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
            >
              ← Voltar aos diagnósticos
            </button>

            <button
              type="button"
              onClick={recomecar}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
            >
              Recomeçar avaliação
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
