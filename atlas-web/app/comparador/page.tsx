"use client";

import { useMemo, useState } from "react";

import ComparisonTable from "../../components/ComparisonTable";
import EffectRadarChart from "../../components/EffectRadarChart";
import MedicamentoSelect from "../../components/MedicamentoSelect";

import { medicamentos } from "../../data/medicamentos";

export default function ComparadorPage() {
  const [ids, setIds] = useState<string[]>(["", "", "", ""]);

  function alterar(index: number, value: string) {
    const novo = [...ids];
    novo[index] = value;
    setIds(novo);
  }

  const selecionados = useMemo(() => {
    return medicamentos.filter((m) => ids.includes(m.id));
  }, [ids]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          ⚖️ Comparador de Medicamentos
        </h1>

        <p className="mt-3 text-slate-400">
          Compare até quatro medicamentos lado a lado.
        </p>
      </div>

      <div className="mb-8 grid gap-5 md:grid-cols-2">
        {ids.map((id, index) => (
          <MedicamentoSelect
            key={index}
            medicamentos={medicamentos}
            label={`Medicamento ${index + 1}`}
            value={id}
            onChange={(value) => alterar(index, value)}
          />
        ))}
      </div>

      {selecionados.length >= 2 ? (
        <div className="space-y-8">
          <div className="flex justify-center rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <EffectRadarChart
              perfis={selecionados.map((m) => ({
                nome: m.nome,
                ganhoPeso: m.ganhoPeso,
                sedacao: m.sedacao,
                sexual: m.sexual,
                qt: m.qt,
              }))}
              size={320}
            />
          </div>

          <ComparisonTable medicamentos={selecionados} />
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center text-slate-400">
          Selecione pelo menos dois medicamentos para comparar.
        </div>
      )}
    </main>
  );
}