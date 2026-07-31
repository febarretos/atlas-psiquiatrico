"use client";

import { useMemo, useState } from "react";

import Badge from "../Badge";

type Sexo = "M" | "F";

interface Classificacao {
  label: string;
  cor: "blue" | "green" | "yellow" | "red" | "gray";
}

function classificar(qtc: number, sexo: Sexo): Classificacao {
  const limiteNormal = sexo === "F" ? 460 : 450;
  const limiteProlongado = sexo === "F" ? 480 : 470;

  if (qtc < limiteNormal) {
    return { label: "Normal", cor: "green" };
  }

  if (qtc <= limiteProlongado) {
    return { label: "Limítrofe", cor: "yellow" };
  }

  return { label: "Prolongado", cor: "red" };
}

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500";
const labelClass = "text-sm font-medium text-slate-400";

export default function CalculadoraQTc() {
  const [qt, setQt] = useState("");
  const [fc, setFc] = useState("");
  const [sexo, setSexo] = useState<Sexo>("M");

  const resultado = useMemo(() => {
    const qtNum = parseFloat(qt.replace(",", "."));
    const fcNum = parseFloat(fc.replace(",", "."));

    if (!qtNum || !fcNum || qtNum <= 0 || fcNum <= 0) {
      return null;
    }

    const rr = 60 / fcNum;
    const bazett = qtNum / Math.sqrt(rr);
    const fridericia = qtNum / Math.cbrt(rr);

    return { bazett, fridericia };
  }, [qt, fc]);

  const classificacaoBazett =
    resultado !== null ? classificar(resultado.bazett, sexo) : null;
  const classificacaoFridericia =
    resultado !== null ? classificar(resultado.fridericia, sexo) : null;

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Corrige o intervalo QT para a frequência cardíaca, usando RR = 60 /
        FC (segundos). Fórmula de{" "}
        <span className="text-slate-300">Bazett</span>: QTc = QT / √RR.
        Fórmula de <span className="text-slate-300">Fridericia</span>: QTc =
        QT / RR<sup>1/3</sup> (menos sensível a taquicardia/bradicardia).
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>QT medido (ms)</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={qt}
            onChange={(e) => setQt(e.target.value)}
            placeholder="Ex: 400"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Frequência cardíaca (bpm)</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={fc}
            onChange={(e) => setFc(e.target.value)}
            placeholder="Ex: 75"
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 px-5 py-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            QTc (Bazett)
          </div>

          {resultado !== null && classificacaoBazett ? (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-2xl font-bold text-white">
                {resultado.bazett.toFixed(0)} ms
              </span>

              <Badge color={classificacaoBazett.cor}>
                {classificacaoBazett.label}
              </Badge>
            </div>
          ) : (
            <span className="text-2xl font-bold text-slate-600">—</span>
          )}
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 px-5 py-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            QTc (Fridericia)
          </div>

          {resultado !== null && classificacaoFridericia ? (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-2xl font-bold text-white">
                {resultado.fridericia.toFixed(0)} ms
              </span>

              <Badge color={classificacaoFridericia.cor}>
                {classificacaoFridericia.label}
              </Badge>
            </div>
          ) : (
            <span className="text-2xl font-bold text-slate-600">—</span>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Relevante ao prescrever ou monitorar fármacos que prolongam o QT,
        como citalopram/escitalopram, antipsicóticos (haloperidol,
        ziprasidona, entre outros), alguns antidepressivos tricíclicos e
        combinações que aumentem esse risco. QTc {">"} 500 ms ou aumento{" "}
        {">"} 60 ms do basal costuma indicar risco elevado e reavaliação da
        conduta.
      </p>
    </div>
  );
}
