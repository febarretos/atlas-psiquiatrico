"use client";

import { useMemo, useState } from "react";

interface Antipsicotico {
  id: string;
  nome: string;
  // Dose (mg) aproximadamente equivalente a clorpromazina 100 mg.
  fatorClorpromazina100mg: number;
}

const antipsicoticos: Antipsicotico[] = [
  {
    id: "clorpromazina",
    nome: "Clorpromazina (referência)",
    fatorClorpromazina100mg: 100,
  },
  { id: "haloperidol", nome: "Haloperidol", fatorClorpromazina100mg: 2 },
  { id: "risperidona", nome: "Risperidona", fatorClorpromazina100mg: 2 },
  { id: "olanzapina", nome: "Olanzapina", fatorClorpromazina100mg: 5 },
  { id: "quetiapina", nome: "Quetiapina", fatorClorpromazina100mg: 75 },
  { id: "aripiprazol", nome: "Aripiprazol", fatorClorpromazina100mg: 7.5 },
  { id: "ziprasidona", nome: "Ziprasidona", fatorClorpromazina100mg: 60 },
  {
    id: "paliperidona",
    nome: "Paliperidona",
    fatorClorpromazina100mg: 1.5,
  },
  { id: "clozapina", nome: "Clozapina", fatorClorpromazina100mg: 50 },
  { id: "lurasidona", nome: "Lurasidona", fatorClorpromazina100mg: 20 },
];

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500";
const labelClass = "text-sm font-medium text-slate-400";

export default function EquivalenciaClorpromazina() {
  const [antipsicoticoId, setAntipsicoticoId] = useState("haloperidol");
  const [dose, setDose] = useState("");

  const resultado = useMemo(() => {
    const doseNum = parseFloat(dose.replace(",", "."));

    if (!doseNum || doseNum <= 0) {
      return null;
    }

    const antipsicotico = antipsicoticos.find(
      (a) => a.id === antipsicoticoId
    );

    if (!antipsicotico) {
      return null;
    }

    return (doseNum / antipsicotico.fatorClorpromazina100mg) * 100;
  }, [dose, antipsicoticoId]);

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Converte a dose diária de um antipsicótico em equivalente de
        clorpromazina (CPZ-equivalente), ferramenta clássica para comparar
        potência relativa e carga antipsicótica total. Cálculo: dose
        informada / fator do fármaco × 100.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Antipsicótico</label>
          <select
            value={antipsicoticoId}
            onChange={(e) => setAntipsicoticoId(e.target.value)}
            className={inputClass}
          >
            {antipsicoticos.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Dose diária (mg)</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            placeholder="Ex: 5"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Equivalente de clorpromazina (CPZ-eq)
        </div>

        {resultado !== null ? (
          <span className="text-2xl font-bold text-white">
            {resultado.toFixed(2).replace(/\.00$/, "")} mg/dia de CPZ
          </span>
        ) : (
          <span className="text-2xl font-bold text-slate-600">—</span>
        )}
      </div>

      <p className="mt-4 text-xs leading-5 text-yellow-300/90">
        Equivalências de dose antipsicótica (CPZ-equivalente) são
        estimativas amplamente citadas na literatura para comparar potência
        relativa entre diferentes antipsicóticos, mas variam entre
        diferentes fontes e não substituem julgamento clínico — úteis
        principalmente para pesquisa e comparações grosseiras de carga
        antipsicótica total, não para conversão direta de tratamento entre
        pacientes.
      </p>
    </div>
  );
}
