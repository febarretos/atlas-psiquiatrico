"use client";

import { useEffect, useMemo, useState } from "react";

import Badge from "../Badge";

import {
  EntradaHistorico,
  obterHistoricoDaEscala,
  obterPacientes,
  removerEntrada,
  removerPaciente,
} from "../../lib/historicoEscalas";

interface Props {
  escalaId: string;
  pontuacaoMaxima: number;
  // Incrementado pelo componente pai sempre que uma nova entrada é salva,
  // para forçar a releitura do localStorage sem precisar de um estado global.
  versao: number;
}

function formatarData(dataISO: string) {
  return new Date(dataISO).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

export default function HistoricoEscala({
  escalaId,
  pontuacaoMaxima,
  versao,
}: Props) {
  const [pacientes, setPacientes] = useState<string[]>([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState<string>("");
  const [entradas, setEntradas] = useState<EntradaHistorico[]>([]);

  // localStorage só existe no cliente: o efeito sincroniza o estado React
  // com esse "sistema externo" após a montagem, evitando divergência entre
  // a renderização no servidor (sem acesso a localStorage) e no cliente.
  useEffect(() => {
    const lista = obterPacientes(escalaId);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
    setPacientes(lista);

    setPacienteSelecionado((atual) =>
      atual && lista.includes(atual) ? atual : lista[0] ?? ""
    );
  }, [escalaId, versao]);

  useEffect(() => {
    if (!pacienteSelecionado) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
      setEntradas([]);
      return;
    }

    setEntradas(
      obterHistoricoDaEscala(escalaId).filter(
        (e) => e.pacienteLabel === pacienteSelecionado
      )
    );
  }, [escalaId, pacienteSelecionado, versao]);

  function excluirEntrada(id: string) {
    removerEntrada(id);
    setEntradas((atual) => atual.filter((e) => e.id !== id));
  }

  function excluirPaciente() {
    if (!pacienteSelecionado) return;

    removerPaciente(escalaId, pacienteSelecionado);
    setPacientes((atual) => atual.filter((p) => p !== pacienteSelecionado));
    setEntradas([]);
    setPacienteSelecionado("");
  }

  const pontos = useMemo(() => {
    const largura = 600;
    const altura = 160;
    const margemEsquerda = 32;
    const margemInferior = 24;

    if (entradas.length === 0) return null;

    const passoX =
      entradas.length > 1
        ? (largura - margemEsquerda - 10) / (entradas.length - 1)
        : 0;

    return entradas.map((entrada, indice) => {
      const x = margemEsquerda + indice * passoX;
      const proporcao = pontuacaoMaxima > 0 ? entrada.pontuacao / pontuacaoMaxima : 0;
      const y = (altura - margemInferior) - proporcao * (altura - margemInferior - 10);

      return { x, y, entrada };
    });
  }, [entradas, pontuacaoMaxima]);

  if (pacientes.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-rule bg-panel p-5 text-sm text-ink-3 print:hidden">
        Nenhum histórico salvo neste navegador ainda para esta escala.
        Preencha o formulário acima e use &quot;Salvar no histórico&quot; para
        acompanhar a evolução de um paciente entre consultas.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-rule bg-panel p-6 print:hidden">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-ink">
          Histórico de aplicações
        </h3>

        <div className="flex items-center gap-2">
          <select
            value={pacienteSelecionado}
            onChange={(e) => setPacienteSelecionado(e.target.value)}
            className="rounded-lg border border-rule bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          >
            {pacientes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={excluirPaciente}
            className="rounded-lg border border-alert-border px-3 py-2 text-xs font-medium text-alert transition-colors hover:border-alert"
          >
            Excluir paciente
          </button>
        </div>
      </div>

      {entradas.length >= 2 && pontos && (
        <div className="mb-5 overflow-x-auto rounded-xl border border-rule bg-paper p-4">
          <svg viewBox="0 0 600 160" className="h-40 w-full min-w-[500px]">
            <polyline
              points={pontos.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="#2E5487"
              strokeWidth={2}
            />

            {pontos.map(({ x, y, entrada }) => (
              <g key={entrada.id}>
                <circle cx={x} cy={y} r={4} fill="#2E5487" />
                <text x={x} y={y - 10} textAnchor="middle" fontSize={11} fill="#191B1E">
                  {entrada.pontuacao}
                </text>
                <text x={x} y={152} textAnchor="middle" fontSize={10} fill="#8F939A">
                  {formatarData(entrada.dataISO)}
                </text>
              </g>
            ))}
          </svg>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-rule">
        <table className="min-w-full">
          <thead className="bg-sticky-head">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-ink">Data</th>
              <th className="px-4 py-3 text-left font-semibold text-ink">Pontuação</th>
              <th className="px-4 py-3 text-left font-semibold text-ink">Interpretação</th>
              <th className="px-4 py-3 text-left font-semibold" />
            </tr>
          </thead>

          <tbody>
            {entradas.map((entrada) => (
              <tr key={entrada.id} className="border-t border-rule-soft">
                <td className="px-4 py-3 text-ink-2">{formatarData(entrada.dataISO)}</td>
                <td className="px-4 py-3 font-semibold text-ink">
                  {entrada.pontuacao}
                </td>
                <td className="px-4 py-3">
                  <Badge color={entrada.faixaCor}>{entrada.faixaLabel}</Badge>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => excluirEntrada(entrada.id)}
                    className="text-xs text-ink-3 hover:text-alert"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink-3">
        Dados salvos apenas neste navegador (localStorage) — não são
        enviados a nenhum servidor. Use apenas iniciais ou identificadores
        não sensíveis para o paciente.
      </p>
    </div>
  );
}
