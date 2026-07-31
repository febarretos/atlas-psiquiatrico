import { Medicamento } from "../data/types";
import Rating from "./Rating";

interface Props {
  medicamentos: Medicamento[];
}

export default function ComparisonTable({
  medicamentos,
}: Props) {
  const linhas = [
    {
      titulo: "Classe",
      render: (m: Medicamento) => m.classe,
    },
    {
      titulo: "Subclasse",
      render: (m: Medicamento) => m.subclasse ?? "-",
    },
    {
      titulo: "Posologias",
      render: (m: Medicamento) => (
        <div className="space-y-2">
          {m.posologias.map((p) => (
            <div key={p.indicacao}>
              <div className="font-medium">
                {p.indicacao}
              </div>

              <div className="text-sm text-slate-400">
                {p.doseInicial} → {p.doseUsual} (máx. {p.doseMaxima})
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      titulo: "Meia-vida",
      render: (m: Medicamento) => m.meiaVida ?? "-",
    },
    {
      titulo: "Ganho de peso",
      render: (m: Medicamento) => (
        <Rating value={m.ganhoPeso} />
      ),
    },
    {
      titulo: "Sedação",
      render: (m: Medicamento) => (
        <Rating value={m.sedacao} />
      ),
    },
    {
      titulo: "Disfunção sexual",
      render: (m: Medicamento) => (
        <Rating value={m.sexual} />
      ),
    },
    {
      titulo: "QT",
      render: (m: Medicamento) => (
        <Rating value={m.qt} />
      ),
    },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-800">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
              Característica
            </th>

            {medicamentos.map((m) => (
              <th
                key={m.id}
                className="px-6 py-4 text-left text-lg font-bold text-white"
              >
                {m.nome}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {linhas.map((linha) => (
            <tr
              key={linha.titulo}
              className="border-t border-slate-800"
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-400">
                {linha.titulo}
              </td>

              {medicamentos.map((m) => (
                <td
                  key={`${m.id}-${linha.titulo}`}
                  className="px-6 py-4 align-top text-white"
                >
                  {linha.render(m)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}