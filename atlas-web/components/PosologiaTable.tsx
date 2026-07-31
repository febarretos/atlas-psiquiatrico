import type { Posologia } from "../data/types";

interface PosologiaTableProps {
  posologias: Posologia[];
}

export default function PosologiaTable({
  posologias,
}: PosologiaTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-xl border border-slate-800">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">
              Indicação
            </th>
            <th className="px-4 py-3 text-left font-semibold">
              Inicial
            </th>
            <th className="px-4 py-3 text-left font-semibold">
              Usual
            </th>
            <th className="px-4 py-3 text-left font-semibold">
              Máxima
            </th>
          </tr>
        </thead>

        <tbody>
          {posologias.map((p) => (
            <tr
              key={p.indicacao}
              className="border-t border-slate-800"
            >
              <td className="px-4 py-3">
                {p.indicacao}
              </td>

              <td className="px-4 py-3">
                {p.doseInicial}
              </td>

              <td className="px-4 py-3">
                {p.doseUsual}
              </td>

              <td className="px-4 py-3">
                {p.doseMaxima}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}