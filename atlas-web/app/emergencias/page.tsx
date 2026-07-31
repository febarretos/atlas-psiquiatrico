import EmergenciasPage from "../../components/EmergenciasPage";
import { emergencias } from "../../data/emergencias";

export default function Page() {
  return (
    <EmergenciasPage
      emergencias={emergencias}
    />
  );
}
