"use client";

import { useMemo, useState } from "react";

interface Antidepressivo {
  id: string;
  nome: string;
  // Dose (mg) aproximadamente equivalente a fluoxetina 20 mg.
  fatorFluoxetina20mg: number;
}

const antidepressivos: Antidepressivo[] = [
  { id: "fluoxetina", nome: "Fluoxetina", fatorFluoxetina20mg: 20 },
  { id: "sertralina", nome: "Sertralina", fatorFluoxetina20mg: 50 },
  { id: "escitalopram", nome: "Escitalopram", fatorFluoxetina20mg: 10 },
  { id: "citalopram", nome: "Citalopram", fatorFluoxetina20mg: 20 },
  { id: "paroxetina", nome: "Paroxetina", fatorFluoxetina20mg: 20 },
  { id: "fluvoxamina", nome: "Fluvoxamina", fatorFluoxetina20mg: 100 },
  { id: "venlafaxina", nome: "Venlafaxina", fatorFluoxetina20mg: 75 },
  {
    id: "desvenlafaxina",
    nome: "Desvenlafaxina",
    fatorFluoxetina20mg: 50,
  },
  { id: "duloxetina", nome: "Duloxetina", fatorFluoxetina20mg: 30 },
  { id: "mirtazapina", nome: "Mirtazapina", fatorFluoxetina20mg: 30 },
  { id: "bupropiona", nome: "Bupropiona", fatorFluoxetina20mg: 150 },
];

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500";
const labelClass = "text-sm font-medium text-slate-400";

export default function EquivalenciaAntidepressivos() {
  const [origemId, setOrigemId] = useState("fluoxetina");
  const [dose, setDose] = useState("");
  const [destinoId, setDestinoId] = useState("sertralina");

  const resultado = useMemo(() => {
    const doseNum = parseFloat(dose.replace(",", "."));

    if (!doseNum || doseNum <= 0) {
      return null;
    }

    const origem = antidepressivos.find((a) => a.id === origemId);
    const destino = antidepressivos.find((a) => a.id === destinoId);

    if (!origem || !destino) {
      return null;
    }

    const doseEmFluoxetina20mg = doseNum / origem.fatorFluoxetina20mg;
    const doseEquivalente = doseEmFluoxetina20mg * destino.fatorFluoxetina20mg;

    return doseEquivalente;
  }, [dose, origemId, destinoId]);

  const destino = antidepressivos.find((a) => a.id === destinoId);

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Converte a dose entre antidepressivos com base em fatores de
        equivalência aproximada em relação à fluoxetina 20 mg/dia como
        referência.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Antidepressivo de origem</label>
          <select
            value={origemId}
            onChange={(e) => setOrigemId(e.target.value)}
            className={inputClass}
          >
            {antidepressivos.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Dose (mg)</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            placeholder="Ex: 20"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Antidepressivo de destino</label>
          <select
            value={destinoId}
            onChange={(e) => setDestinoId(e.target.value)}
            className={inputClass}
          >
            {antidepressivos.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nome}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Dose equivalente estimada
        </div>

        {resultado !== null && destino ? (
          <span className="text-2xl font-bold text-white">
            {resultado.toFixed(2).replace(/\.00$/, "")} mg de {destino.nome}
          </span>
        ) : (
          <span className="text-2xl font-bold text-slate-600">—</span>
        )}
      </div>

      <p className="mt-4 text-xs leading-5 text-yellow-300/90">
        Equivalências aproximadas derivadas de doses habitualmente citadas
        como comparáveis na literatura — não validadas por estudos de
        bioequivalência direta entre todos os pares. Usar apenas como ponto
        de partida ao trocar de classe; titular clinicamente conforme
        resposta e tolerabilidade. NÃO usar para conversão abrupta/imediata
        — trocas de antidepressivo geralmente exigem titulação cruzada
        gradual, não substituição direta no mesmo dia.
      </p>
    </div>
  );
}
