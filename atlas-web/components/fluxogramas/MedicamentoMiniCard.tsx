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
      className="group block rounded-lg border border-rule bg-paper p-4 transition-colors hover:border-accent"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-ink group-hover:text-accent">
          {medicamento.nome}
        </h4>

        <span className="whitespace-nowrap text-xs text-ink-3">
          {medicamento.classe}
        </span>
      </div>

      {posologiaRelevante && (
        <p className="mt-2 text-sm text-ink-2">
          <span className="font-medium text-ink-2">Dose inicial: </span>
          {posologiaRelevante.doseInicial}
        </p>
      )}

      {perolaPrincipal && (
        <p className="mt-2 text-sm leading-5 text-ink-2">
          {perolaPrincipal}
        </p>
      )}
    </Link>
  );
}
