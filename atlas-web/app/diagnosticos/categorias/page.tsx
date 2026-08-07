import DiagnosticosPorCategoria from "../../../components/DiagnosticosPorCategoria";
import { diagnosticos } from "../../../data/diagnosticos";

export default function DiagnosticosCategorias() {
  return <DiagnosticosPorCategoria diagnosticos={diagnosticos} />;
}
