import EntrevistaEstruturadaChecklist from "../../components/EntrevistaEstruturadaChecklist";

import { diagnosticos } from "../../data/diagnosticos";

export default function EntrevistaEstruturada() {
  return <EntrevistaEstruturadaChecklist diagnosticos={diagnosticos} />;
}
