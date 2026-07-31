"use client";

import { useMemo, useState } from "react";

import Badge from "../Badge";

type Sexo = "M" | "F";

interface Classificacao {
  label: string;
  cor: "blue" | "green" | "yellow" | "red" | "gray";
}

function classificar(clCr: number): Classificacao {
  if (clCr >= 90) {
    return { label: "Normal", cor: "green" };
  }

  if (clCr >= 60) {
    return { label: "Redução leve", cor: "blue" };
  }

  if (clCr >= 30) {
    return { label: "Redução moderada", cor: "yellow" };
  }

  if (clCr >= 15) {
    return { label: "Redução grave", cor: "red" };
  }

  return { label: "Falência renal", cor: "red" };
}

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500";
const labelClass = "text-sm font-medium text-slate-400";

export default function ClearanceCreatinina() {
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [creatinina, setCreatinina] = useState("");
  const [sexo, setSexo] = useState<Sexo>("M");

  const resultado = useMemo(() => {
    const idadeNum = parseFloat(idade.replace(",", "."));
    const pesoNum = parseFloat(peso.replace(",", "."));
    const creatininaNum = parseFloat(creatinina.replace(",", "."));

    if (
      !idadeNum ||
      !pesoNum ||
      !creatininaNum ||
      idadeNum <= 0 ||
      pesoNum <= 0 ||
      creatininaNum <= 0
    ) {
      return null;
    }

    const base = ((140 - idadeNum) * pesoNum) / (72 * creatininaNum);
    const clCr = sexo === "F" ? base * 0.85 : base;

    return clCr;
  }, [idade, peso, creatinina, sexo]);

  const classificacao = resultado !== null ? classificar(resultado) : null;

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Estima a taxa de filtração glomerular pela fórmula de{" "}
        <span className="text-slate-300">Cockcroft-Gault</span>: ClCr = [(140
        − idade) × peso] / (72 × creatinina sérica), com correção de 0,85
        para o sexo feminino.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Idade (anos)</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Ex: 45"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Peso (kg)</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Creatinina sérica (mg/dL)</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={creatinina}
            onChange={(e) => setCreatinina(e.target.value)}
            placeholder="Ex: 1,0"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Sexo biológico</label>
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value as Sexo)}
            className={inputClass}
          >
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Clearance de creatinina estimado
        </div>

        {resultado !== null && classificacao ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-2xl font-bold text-white">
              {resultado.toFixed(1)} mL/min
            </span>

            <Badge color={classificacao.cor}>{classificacao.label}</Badge>
          </div>
        ) : (
          <span className="text-2xl font-bold text-slate-600">—</span>
        )}
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Relevante para ajuste de dose de fármacos de excreção renal, como
        lítio, gabapentina, alguns antipsicóticos de depósito e outros
        medicamentos com estreita margem terapêutica. Sempre correlacionar
        com julgamento clínico.
      </p>
    </div>
  );
}
