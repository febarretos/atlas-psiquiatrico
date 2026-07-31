"use client";

import { useMemo, useState } from "react";

interface Benzodiazepinico {
  id: string;
  nome: string;
  // Dose (mg) aproximadamente equivalente a diazepam 10 mg.
  fatorDiazepam10mg: number;
}

const benzodiazepinicos: Benzodiazepinico[] = [
  { id: "diazepam", nome: "Diazepam", fatorDiazepam10mg: 10 },
  { id: "clonazepam", nome: "Clonazepam", fatorDiazepam10mg: 0.5 },
  { id: "alprazolam", nome: "Alprazolam", fatorDiazepam10mg: 1 },
  { id: "lorazepam", nome: "Lorazepam", fatorDiazepam10mg: 2 },
  { id: "bromazepam", nome: "Bromazepam", fatorDiazepam10mg: 5 },
  { id: "midazolam", nome: "Midazolam", fatorDiazepam10mg: 7.5 },
  {
    id: "clordiazepoxido",
    nome: "Clordiazepóxido",
    fatorDiazepam10mg: 25,
  },
];

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500";
const labelClass = "text-sm font-medium text-slate-400";

export default function EquivalenciaBenzodiazepinicos() {
  const [origemId, setOrigemId] = useState("diazepam");
  const [dose, setDose] = useState("");
  const [destinoId, setDestinoId] = useState("clonazepam");

  const resultado = useMemo(() => {
    const doseNum = parseFloat(dose.replace(",", "."));

    if (!doseNum || doseNum <= 0) {
      return null;
    }

    const origem = benzodiazepinicos.find((b) => b.id === origemId);
    const destino = benzodiazepinicos.find((b) => b.id === destinoId);

    if (!origem || !destino) {
      return null;
    }

    const doseEmDiazepam10mg = doseNum / origem.fatorDiazepam10mg;
    const doseEquivalente = doseEmDiazepam10mg * destino.fatorDiazepam10mg;

    return doseEquivalente;
  }, [dose, origemId, destinoId]);

  const destino = benzodiazepinicos.find((b) => b.id === destinoId);

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Converte a dose entre benzodiazepínicos com base em fatores de
        equivalência aproximada em relação ao diazepam 10 mg como
        referência.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Benzodiazepínico de origem</label>
          <select
            value={origemId}
            onChange={(e) => setOrigemId(e.target.value)}
            className={inputClass}
          >
            {benzodiazepinicos.map((b) => (
              <option key={b.id} value={b.id}>
                {b.nome}
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
            placeholder="Ex: 10"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Benzodiazepínico de destino</label>
          <select
            value={destinoId}
            onChange={(e) => setDestinoId(e.target.value)}
            className={inputClass}
          >
            {benzodiazepinicos.map((b) => (
              <option key={b.id} value={b.id}>
                {b.nome}
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
        Equivalências aproximadas, sujeitas a variação interindividual —
        usar como referência inicial, ajustar clinicamente conforme
        resposta, meia-vida, via de administração e contexto (ex.:
        desmame, troca por perfil de efeitos adversos).
      </p>
    </div>
  );
}
