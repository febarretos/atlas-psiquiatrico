"use client";

import { useMemo, useState } from "react";

import Badge from "../Badge";

type UnidadeAltura = "cm" | "m";

interface Classificacao {
  label: string;
  cor: "blue" | "green" | "yellow" | "red" | "gray";
}

function classificar(imc: number): Classificacao {
  if (imc < 18.5) {
    return { label: "Abaixo do peso", cor: "yellow" };
  }

  if (imc < 25) {
    return { label: "Eutrofia (peso normal)", cor: "green" };
  }

  if (imc < 30) {
    return { label: "Sobrepeso", cor: "yellow" };
  }

  if (imc < 35) {
    return { label: "Obesidade grau I", cor: "red" };
  }

  if (imc < 40) {
    return { label: "Obesidade grau II", cor: "red" };
  }

  return { label: "Obesidade grau III", cor: "red" };
}

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500";
const labelClass = "text-sm font-medium text-slate-400";

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [unidade, setUnidade] = useState<UnidadeAltura>("cm");

  const resultado = useMemo(() => {
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", "."));

    if (!pesoNum || !alturaNum || pesoNum <= 0 || alturaNum <= 0) {
      return null;
    }

    const alturaM = unidade === "cm" ? alturaNum / 100 : alturaNum;

    if (alturaM <= 0) {
      return null;
    }

    return pesoNum / (alturaM * alturaM);
  }, [peso, altura, unidade]);

  const classificacao = resultado !== null ? classificar(resultado) : null;

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Índice de Massa Corporal: IMC = peso (kg) / altura (m)². Classificação
        conforme critérios da OMS.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
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
          <label className={labelClass}>Altura</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder={unidade === "cm" ? "Ex: 170" : "Ex: 1,70"}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Unidade</label>
          <select
            value={unidade}
            onChange={(e) => setUnidade(e.target.value as UnidadeAltura)}
            className={inputClass}
          >
            <option value="cm">Centímetros (cm)</option>
            <option value="m">Metros (m)</option>
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          IMC calculado
        </div>

        {resultado !== null && classificacao ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-2xl font-bold text-white">
              {resultado.toFixed(1)} kg/m²
            </span>

            <Badge color={classificacao.cor}>{classificacao.label}</Badge>
          </div>
        ) : (
          <span className="text-2xl font-bold text-slate-600">—</span>
        )}
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Relevante no monitoramento metabólico de pacientes em uso de
        antipsicóticos (especialmente olanzapina, clozapina e quetiapina) e
        estabilizadores de humor associados a ganho de peso, como parte do
        rastreio de síndrome metabólica.
      </p>
    </div>
  );
}
