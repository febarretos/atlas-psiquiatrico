import MedicamentosPorClasse from "../../../components/MedicamentosPorClasse";
import { medicamentos } from "../../../data/medicamentos";

export default function MedicamentosClasses() {
  return <MedicamentosPorClasse medicamentos={medicamentos} />;
}
