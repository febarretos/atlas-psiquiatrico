import { Medicamento } from "../data/types";
import {
  corCargaAnticolinergica,
  corGravidez,
  corLactacao,
  rotuloGravidez,
  rotuloLactacao,
} from "../lib/populacoesEspeciais";
import Badge from "./Badge";
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
    {
      titulo: "Atividade serotoninérgica",
      render: (m: Medicamento) =>
        m.serotoninergico === undefined ? (
          <span className="text-slate-600">—</span>
        ) : (
          <Badge color={m.serotoninergico ? "yellow" : "gray"}>
            {m.serotoninergico ? "Serotoninérgico" : "Não serotoninérgico"}
          </Badge>
        ),
    },
    {
      titulo: "Carga anticolinérgica",
      render: (m: Medicamento) =>
        m.cargaAnticolinergica ? (
          <Badge color={corCargaAnticolinergica[m.cargaAnticolinergica]}>
            {m.cargaAnticolinergica}
          </Badge>
        ) : (
          <span className="text-slate-600">—</span>
        ),
    },
    {
      titulo: "Gravidez",
      render: (m: Medicamento) =>
        m.gravidezCategoria ? (
          <Badge color={corGravidez[m.gravidezCategoria]}>
            {rotuloGravidez[m.gravidezCategoria]}
          </Badge>
        ) : (
          <span className="text-slate-600">—</span>
        ),
    },
    {
      titulo: "Lactação",
      render: (m: Medicamento) =>
        m.lactacaoCategoria ? (
          <Badge color={corLactacao[m.lactacaoCategoria]}>
            {rotuloLactacao[m.lactacaoCategoria]}
          </Badge>
        ) : (
          <span className="text-slate-600">—</span>
        ),
    },
    {
      titulo: "Insuficiência renal",
      render: (m: Medicamento) =>
        m.ajusteRenalNecessario === undefined ? (
          <span className="text-slate-600">—</span>
        ) : (
          <Badge color={m.ajusteRenalNecessario ? "yellow" : "green"}>
            {m.ajusteRenalNecessario ? "Requer ajuste/cautela" : "Sem ajuste necessário"}
          </Badge>
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