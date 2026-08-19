"use client";

import type { Dispatch, SetStateAction } from "react";

import MedicamentoSelect from "../MedicamentoSelect";
import type { Medicamento } from "../../data/types";

interface Props {
  idsManual: string[];
  setIdsManual: Dispatch<SetStateAction<string[]>>;
  medicamentos: Medicamento[];
}

export default function AssistenteManual({ idsManual, setIdsManual, medicamentos }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-ink-2">
        Já tem candidatos específicos em mente — escolha até 4 medicamentos
        para comparar diretamente.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {idsManual.map((id, i) => (
          <MedicamentoSelect
            key={i}
            medicamentos={medicamentos}
            label={`Medicamento ${i + 1}`}
            value={id}
            onChange={(value) =>
              setIdsManual((prev) => prev.map((v, idx) => (idx === i ? value : v)))
            }
          />
        ))}
      </div>
    </div>
  );
}
