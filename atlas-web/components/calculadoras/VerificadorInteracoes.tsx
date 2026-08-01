"use client";

import { useMemo, useState } from "react";

import { medicamentos } from "../../data/medicamentos";
import { verificarRegime } from "../../lib/interacoes";
import MedicamentoSelect from "../MedicamentoSelect";

const MAX_MEDICAMENTOS = 8;

export default function VerificadorInteracoes() {
  const [ids, setIds] = useState<string[]>(["", ""]);

  function alterar(index: number, value: string) {
    setIds((prev) => prev.map((id, i) => (i === index ? value : id)));
  }

  function adicionar() {
    setIds((prev) => (prev.length < MAX_MEDICAMENTOS ? [...prev, ""] : prev));
  }

  function remover(index: number) {
    setIds((prev) => prev.filter((_, i) => i !== index));
  }

  const selecionados = useMemo(() => {
    const vistos = new Set<string>();
    return ids
      .map((id) => medicamentos.find((m) => m.id === id))
      .filter((m): m is NonNullable<typeof m> => {
        if (!m || vistos.has(m.id)) return false;
        vistos.add(m.id);
        return true;
      });
  }, [ids]);

  const pares = useMemo(() => verificarRegime(selecionados), [selecionados]);
  const paresComAlerta = pares.filter((p) => p.alertas.length > 0);
  const totalAlertas = paresComAlerta.reduce((s, p) => s + p.alertas.length, 0);

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Monte a lista de medicamentos do regime do paciente para cruzar todas
        as combinações e identificar interações já documentadas ou alertas
        de perfil combinado (ex.: risco aditivo de sedação ou de
        prolongamento de QT) entre qualquer par.
      </p>

      <div className="flex flex-col gap-4">
        {ids.map((id, index) => (
          <div key={index} className="flex items-end gap-3">
            <div className="flex-1">
              <MedicamentoSelect
                medicamentos={medicamentos}
                label={`Medicamento ${index + 1}`}
                value={id}
                onChange={(value) => alterar(index, value)}
              />
            </div>

            {ids.length > 2 && (
              <button
                type="button"
                onClick={() => remover(index)}
                aria-label="Remover medicamento"
                className="mb-1 rounded-lg border border-slate-700 px-3 py-3 text-slate-400 transition hover:border-red-500 hover:text-red-400"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      {ids.length < MAX_MEDICAMENTOS && (
        <button
          type="button"
          onClick={adicionar}
          className="mt-4 rounded-lg border border-dashed border-slate-700 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
        >
          + Adicionar medicamento
        </button>
      )}

      <div className="mt-8">
        {selecionados.length < 2 ? (
          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-6 text-center text-sm text-slate-500">
            Selecione pelo menos dois medicamentos diferentes para verificar.
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="text-sm text-slate-400">
              {pares.length} combinação(ões) verificada(s) entre{" "}
              {selecionados.length} medicamentos —{" "}
              <span className={totalAlertas > 0 ? "text-yellow-300" : "text-green-400"}>
                {totalAlertas} alerta(s) encontrado(s)
              </span>
              .
            </div>

            {paresComAlerta.length === 0 ? (
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm text-slate-400">
                Nenhuma interação direta ou alerta de perfil combinado
                identificado entre os medicamentos selecionados, nos dados
                desta ferramenta.{" "}
                <strong className="text-slate-300">
                  Isso não significa ausência de interação
                </strong>{" "}
                — sempre consultar a bula e uma base de interações completa
                antes de associar medicamentos.
              </div>
            ) : (
              paresComAlerta.map((par) => (
                <div
                  key={`${par.medA.id}-${par.medB.id}`}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-5"
                >
                  <div className="mb-3 text-sm font-semibold text-white">
                    {par.medA.nome} + {par.medB.nome}
                  </div>

                  <ul className="space-y-2 text-sm">
                    {par.alertas.map((a, i) => (
                      <li
                        key={i}
                        className={
                          a.tipo === "documentada"
                            ? "text-slate-200"
                            : "text-slate-200"
                        }
                      >
                        <span
                          className={`mr-2 rounded px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wider ${
                            a.tipo === "documentada"
                              ? "bg-red-900/40 text-red-300"
                              : "bg-yellow-900/40 text-yellow-300"
                          }`}
                        >
                          {a.tipo === "documentada" ? "Documentada" : "Perfil combinado"}
                        </span>
                        {a.origem && <strong>{a.origem}: </strong>}
                        {a.texto}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <p className="mt-6 text-xs leading-5 text-yellow-300/90">
        Ferramenta de apoio baseada nos dados já cadastrados neste app — não
        é uma base de interações medicamentosas completa nem substitui a
        consulta a fontes especializadas (ex: Micromedex, Stockley&apos;s,
        UpToDate) antes de associar medicamentos.
      </p>
    </div>
  );
}
