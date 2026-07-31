"use client";

import { useMemo, useState } from "react";

import { medicamentos } from "../../data/medicamentos";
import { Medicamento } from "../../data/types";
import MedicamentoSelect from "../MedicamentoSelect";

function temSedacaoAlta(m: Medicamento) {
  return m.sedacao === "Alta" || m.sedacao === "Muito alta";
}

function temQtAlto(m: Medicamento) {
  return m.qt === "Alto" || m.qt === "Muito alto";
}

function ehDepressorClasse(m: Medicamento) {
  return m.classe === "Benzodiazepínico" || m.classe === "Hipnótico";
}

export default function VerificadorInteracoes() {
  const [idA, setIdA] = useState("");
  const [idB, setIdB] = useState("");

  const medA = useMemo(
    () => medicamentos.find((m) => m.id === idA),
    [idA]
  );
  const medB = useMemo(
    () => medicamentos.find((m) => m.id === idB),
    [idB]
  );

  const resultado = useMemo(() => {
    if (!medA || !medB || medA.id === medB.id) return null;

    const documentadasDeAparaB = (medA.interacoes ?? []).filter((texto) =>
      texto.toLowerCase().includes(medB.nome.toLowerCase())
    );
    const documentadasDeBparaA = (medB.interacoes ?? []).filter((texto) =>
      texto.toLowerCase().includes(medA.nome.toLowerCase())
    );

    const alertas: string[] = [];

    if (temQtAlto(medA) && temQtAlto(medB)) {
      alertas.push(
        "Ambos têm risco alto de prolongamento do intervalo QT — risco aditivo relevante; considerar ECG basal e evitar a associação quando houver alternativa."
      );
    }

    if (temSedacaoAlta(medA) && temSedacaoAlta(medB)) {
      alertas.push(
        "Ambos têm perfil de sedação alta — risco de sedação excessiva/depressão do SNC aditiva, com cautela redobrada em idosos ou uso concomitante de álcool."
      );
    }

    if (
      medA.classe === "Antidepressivo" &&
      medB.classe === "Antidepressivo"
    ) {
      alertas.push(
        "Associação de dois antidepressivos — avaliar risco de síndrome serotoninérgica se ambos tiverem ação serotoninérgica significativa, especialmente no início do tratamento ou em doses altas."
      );
    }

    if (ehDepressorClasse(medA) && ehDepressorClasse(medB)) {
      alertas.push(
        "Associação de dois depressores do SNC de classe benzodiazepínico/hipnótico — geralmente não recomendada; risco de sedação excessiva e depressão respiratória."
      );
    }

    if (
      (medA.classe === "Antipsicótico" && medB.classe === "Anticolinérgico") ||
      (medB.classe === "Antipsicótico" && medA.classe === "Anticolinérgico")
    ) {
      alertas.push(
        "Associação de antipsicótico com anticolinérgico — efeito anticolinérgico cumulativo (constipação, boca seca, risco de confusão/delirium em idosos); reservar o anticolinérgico para quando sintomas extrapiramidais efetivamente surgirem, não usar profilaticamente de rotina."
      );
    }

    return {
      documentadasDeAparaB,
      documentadasDeBparaA,
      alertas,
    };
  }, [medA, medB]);

  const semDados =
    resultado !== null &&
    resultado.documentadasDeAparaB.length === 0 &&
    resultado.documentadasDeBparaA.length === 0 &&
    resultado.alertas.length === 0;

  return (
    <div>
      <p className="mb-5 text-sm leading-6 text-slate-400">
        Selecione dois medicamentos para cruzar as interações já documentadas
        na ficha de cada um e identificar alertas de perfil combinado
        (ex: risco aditivo de sedação ou de prolongamento de QT).
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <MedicamentoSelect
          medicamentos={medicamentos}
          label="Medicamento A"
          value={idA}
          onChange={setIdA}
        />

        <MedicamentoSelect
          medicamentos={medicamentos}
          label="Medicamento B"
          value={idB}
          onChange={setIdB}
        />
      </div>

      <div className="mt-6">
        {!medA || !medB ? (
          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-6 text-center text-sm text-slate-500">
            Selecione os dois medicamentos para verificar.
          </div>
        ) : medA.id === medB.id ? (
          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950 p-6 text-center text-sm text-slate-500">
            Selecione dois medicamentos diferentes.
          </div>
        ) : semDados ? (
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-sm text-slate-400">
            Nenhuma interação direta documentada entre {medA.nome} e{" "}
            {medB.nome} nos dados desta ferramenta, nem alerta de perfil
            combinado identificado.{" "}
            <strong className="text-slate-300">
              Isso não significa ausência de interação
            </strong>{" "}
            — sempre consultar a bula e uma base de interações completa
            antes de associar medicamentos.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {(resultado!.documentadasDeAparaB.length > 0 ||
              resultado!.documentadasDeBparaA.length > 0) && (
              <div className="rounded-xl border border-red-900/40 bg-slate-950 p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-red-400">
                  Interações documentadas
                </div>

                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
                  {resultado!.documentadasDeAparaB.map((texto) => (
                    <li key={`a-${texto}`}>
                      <strong>{medA.nome}:</strong> {texto}
                    </li>
                  ))}
                  {resultado!.documentadasDeBparaA.map((texto) => (
                    <li key={`b-${texto}`}>
                      <strong>{medB.nome}:</strong> {texto}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resultado!.alertas.length > 0 && (
              <div className="rounded-xl border border-yellow-900/40 bg-slate-950 p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                  Alertas de perfil combinado
                </div>

                <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
                  {resultado!.alertas.map((texto) => (
                    <li key={texto}>{texto}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="mt-4 text-xs leading-5 text-yellow-300/90">
        Ferramenta de apoio baseada nos dados já cadastrados neste app — não
        é uma base de interações medicamentosas completa nem substitui a
        consulta a fontes especializadas (ex: Micromedex, Stockley&apos;s,
        UpToDate) antes de associar medicamentos.
      </p>
    </div>
  );
}
