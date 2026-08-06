import EntrevistaScidChecklist from "../../components/EntrevistaScidChecklist";

import { diagnosticos } from "../../data/diagnosticos";

export default function EntrevistaScid() {
  return <EntrevistaScidChecklist diagnosticos={diagnosticos} />;
}
