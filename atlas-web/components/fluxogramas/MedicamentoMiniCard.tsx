import Link from "next/link";

import { Medicamento } from "../../data/types";

interface Props {
  medicamento: Medicamento;
}

// Card compacto de medicamento para uso dentro de um node de conduta de
// fluxograma — mostra só o essencial (nome, dose inicial, pérola mais
// relevante) e linka para a página completa. Rota de medicamento é por
// `nome`, não por `id` (ver app/medicamentos/[nome]/page.tsx).
export default function MedicamentoMiniCard({ medicamento }: Props) {
  const posologiaRelevante =
    medicamento.posologias.find((p) =>
      p.indicacao.toLowerCase().includes("depress")
    ) ?? medicamento.posologias[0];

  const perolaPrincipal = medicamento.perolasClinicas?.[0];

  return (
    <Link
      href={`/medicamentos/${encodeURIComponent(medicamento.nome)}`}
      className="group block rounded-xl border border-slate-700 bg-slate-950 p-4 transition-colors hover:border-blue-500"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-white group-hover:text-blue-400">
          💊 {medicamento.nome}
        </h4>

        <span className="whitespace-nowrap text-xs text-slate-500">
          {medicamento.classe}
        </span>
      </div>

      {posologiaRelevante && (
        <p className="mt-2 text-sm text-slate-400">
          <span className="font-medium text-slate-300">Dose inicial: </span>
          {posologiaRelevante.doseInicial}
        </p>
      )}

      {perolaPrincipal && (
        <p className="mt-2 text-sm leading-5 text-slate-400">
          💡 {perolaPrincipal}
        </p>
      )}
    </Link>
  );
}
