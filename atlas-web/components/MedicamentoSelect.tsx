"use client";

import { Medicamento } from "../data/types";

interface Props {
  medicamentos: Medicamento[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export default function MedicamentoSelect({
  medicamentos,
  value,
  onChange,
  label,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-ink-2">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-rule bg-panel px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
      >
        <option value="">
          Selecione...
        </option>

        {medicamentos
          .slice()
          .sort((a, b) => a.nome.localeCompare(b.nome))
          .map((m) => (
            <option
              key={m.id}
              value={m.id}
            >
              {m.nome}
            </option>
          ))}
      </select>
    </div>
  );
}