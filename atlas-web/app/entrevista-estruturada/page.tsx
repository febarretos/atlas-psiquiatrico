import { Suspense } from "react";

import EntrevistaEstruturadaChecklist from "../../components/EntrevistaEstruturadaChecklist";

import { diagnosticos } from "../../data/diagnosticos";

export default function EntrevistaEstruturada() {
  return (
    <Suspense>
      <EntrevistaEstruturadaChecklist diagnosticos={diagnosticos} />
    </Suspense>
  );
}
