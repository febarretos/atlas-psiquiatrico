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

type Velocidade = "conservadora" | "padrao";

interface Etapa {
  numero: number;
  doseMg: number;
  ultima: boolean;
}

const inputClass =
  "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500";
const labelClass = "text-sm font-medium text-slate-400";

function formatar(valor: number): string {
  return valor.toFixed(2).replace(/\.?0+$/, "").replace(/\.$/, "");
}

export default function DesmameBenzodiazepinicos() {
  const [benzoId, setBenzoId] = useState("alprazolam");
  const [dose, setDose] = useState("");
  const [velocidade, setVelocidade] = useState<Velocidade>("padrao");

  const benzo = benzodiazepinicos.find((b) => b.id === benzoId);

  const resultado = useMemo(() => {
    const doseNum = parseFloat(dose.replace(",", "."));

    if (!doseNum || doseNum <= 0 || !benzo) {
      return null;
    }

    // Converte a dose atual para diazepam-equivalente (mg).
    const doseInicialDiazepam = (doseNum / benzo.fatorDiazepam10mg) * 10;
    const limiarSuspensao = doseInicialDiazepam * 0.1;
    const percentualReducao = velocidade === "conservadora" ? 0.1 : 0.25;

    const etapas: Etapa[] = [];
    let doseAtualDiazepam = doseInicialDiazepam;
    let numero = 1;

    etapas.push({
      numero,
      doseMg: (doseAtualDiazepam / 10) * benzo.fatorDiazepam10mg,
      ultima: false,
    });

    while (doseAtualDiazepam > limiarSuspensao && numero < 40) {
      doseAtualDiazepam = doseAtualDiazepam * (1 - percentualReducao);
      numero += 1;

      const abaixoDoLimiar = doseAtualDiazepam <= limiarSuspensao;

      etapas.push({
        numero,
        doseMg: (doseAtualDiazepam / 10) * benzo.fatorDiazepam10mg,
        ultima: abaixoDoLimiar,
      });
    }

    return etapas;
  }, [dose, benzo, velocidade]);

  const duracaoEtapa =
    velocidade === "conservadora" ? "1-2 semanas" : "2 semanas";

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Gera um esquema orientativo de retirada gradual, convertendo a dose
        atual para diazepam-equivalente e aplicando reduções percentuais
        sucessivas até uma dose residual mínima (~10% da inicial), quando se
        considera a suspensão.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Benzodiazepínico em uso</label>
          <select
            value={benzoId}
            onChange={(e) => setBenzoId(e.target.value)}
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
          <label className={labelClass}>Dose atual (mg/dia)</label>
          <input
            type="number"
            min="0"
            inputMode="decimal"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            placeholder="Ex: 2"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Velocidade de redução</label>
          <select
            value={velocidade}
            onChange={(e) => setVelocidade(e.target.value as Velocidade)}
            className={inputClass}
          >
            <option value="conservadora">
              Conservadora (redução de 10% a cada 1-2 semanas)
            </option>
            <option value="padrao">
              Padrão (redução de 25% a cada 2 semanas)
            </option>
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Esquema de retirada sugerido
        </div>

        {resultado !== null && resultado.length > 0 && benzo ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-500">
                  <th className="py-2 pr-4 font-semibold">Etapa</th>
                  <th className="py-2 pr-4 font-semibold">Dose</th>
                  <th className="py-2 font-semibold">
                    Duração aproximada da etapa
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultado.map((etapa) => (
                  <tr
                    key={etapa.numero}
                    className="border-b border-slate-800/60 last:border-0"
                  >
                    <td className="py-2 pr-4 text-slate-300">
                      {etapa.numero}
                    </td>
                    <td className="py-2 pr-4 font-medium text-white">
                      {formatar(etapa.doseMg)} mg de {benzo.nome}
                      {etapa.ultima && (
                        <span className="ml-2 text-xs font-normal text-yellow-300/90">
                          (considerar suspensão)
                        </span>
                      )}
                    </td>
                    <td className="py-2 text-slate-300">{duracaoEtapa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <span className="text-2xl font-bold text-slate-600">—</span>
        )}
      </div>

      <p className="mt-4 text-xs leading-5 text-yellow-300/90">
        Esquema orientativo simplificado — a velocidade real de redução deve
        ser individualizada conforme sintomas de abstinência, tempo de uso
        prévio, dose inicial e comorbidades. Reduções mais lentas costumam
        ser necessárias após uso prolongado ({">"}6-12 meses) ou em doses
        altas. Considerar transição para um benzodiazepínico de ação mais
        longa (ex: diazepam) antes de iniciar o desmame quando a retirada de
        um agente de ação curta (ex: alprazolam) for mal tolerada.
      </p>
    </div>
  );
}
