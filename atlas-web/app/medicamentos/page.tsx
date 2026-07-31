import MedicamentosPage from "../../components/MedicamentosPage";
import { medicamentos } from "../../data/medicamentos";

export default function Page() {
  return (
    <MedicamentosPage
      medicamentos={medicamentos}
    />
  );
}