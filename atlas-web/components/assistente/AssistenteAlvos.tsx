"use client";

import { condicoesAlvo } from "../../lib/condicoesAlvo";
import type { UseAlvosAssistente } from "./useAlvosAssistente";

type Props = UseAlvosAssistente;

export default function AssistenteAlvos({
  alvosSelecionados,
  alternarAlvo,
  resultadosAlvos,
  paresAtivos,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-slate-400">
        Já sabe o(s) alvo(s) clínico(s) — selecione uma ou mais condições
        para cruzar com as indicações documentadas de cada medicamento.
      </p>

      <div className="flex flex-wrap gap-2">
        {condicoesAlvo.map((c) => {
          const ativo = alvosSelecionados.has(c.id);

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => alternarAlvo(c.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                ativo
                  ? "border-blue-500 bg-blue-500/10 text-blue-300"
                  : "border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-600"
              }`}
            >
              {c.nome}
            </button>
          );
        })}
      </div>

      {paresAtivos.length > 0 && (
        <div className="flex flex-col gap-3">
          {paresAtivos.map((p) => (
            <div
              key={`${p.idA}-${p.idB}`}
              className="rounded-xl border border-yellow-900/50 bg-yellow-500/5 p-5 text-sm leading-6 text-yellow-200"
            >
              <strong>⚠️ Alvos potencialmente antagônicos.</strong> {p.aviso}
            </div>
          ))}
        </div>
      )}

      {alvosSelecionados.size === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center text-sm text-slate-500">
          Selecione ao menos uma condição-alvo acima para ver os candidatos.
        </div>
      ) : (
        resultadosAlvos.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center text-sm text-slate-500">
            Nenhum medicamento cadastrado tem indicação documentada para
            nenhuma das condições selecionadas, nos dados desta ferramenta.
          </div>
        )
      )}
    </div>
  );
}
