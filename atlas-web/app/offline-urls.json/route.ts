import { NextResponse } from "next/server";

import { medicamentos } from "../../data/medicamentos";
import { diagnosticos } from "../../data/diagnosticos";
import { escalas } from "../../data/escalas";
import { fluxogramas } from "../../data/fluxogramas";
import { emergencias } from "../../data/emergencias";

export function GET() {
  const urls = [
    "/",
    "/medicamentos",
    "/diagnosticos",
    "/escalas",
    "/fluxogramas",
    "/emergencias",
    "/calculadoras",
    "/comparador",
    "/assistente",
    ...medicamentos.map((m) => `/medicamentos/${encodeURIComponent(m.nome)}`),
    ...diagnosticos.map((d) => `/diagnosticos/${encodeURIComponent(d.id)}`),
    ...escalas.map((e) => `/escalas/${encodeURIComponent(e.id)}`),
    ...fluxogramas.map((f) => `/fluxogramas/${encodeURIComponent(f.id)}`),
    ...emergencias.map((e) => `/emergencias/${encodeURIComponent(e.id)}`),
  ];

  return NextResponse.json(urls);
}
