import { NextResponse } from "next/server";

import { medicamentos } from "../../data/medicamentos";
import { diagnosticos } from "../../data/diagnosticos";
import { escalas } from "../../data/escalas";
import { fluxogramas } from "../../data/fluxogramas";
import { emergencias } from "../../data/emergencias";
import { dominiosPsicopatologicos } from "../../data/psicopatologia";
import { casosClinicos } from "../../data/casos-clinicos";

export function GET() {
  const urls = [
    "/",
    "/medicamentos",
    "/diagnosticos",
    "/psicopatologia",
    "/casos-clinicos",
    "/escalas",
    "/fluxogramas",
    "/emergencias",
    "/assistente",
    ...medicamentos.map((m) => `/medicamentos/${encodeURIComponent(m.nome)}`),
    ...diagnosticos.map((d) => `/diagnosticos/${encodeURIComponent(d.id)}`),
    ...escalas.map((e) => `/escalas/${encodeURIComponent(e.id)}`),
    ...fluxogramas.map((f) => `/fluxogramas/${encodeURIComponent(f.id)}`),
    ...emergencias.map((e) => `/emergencias/${encodeURIComponent(e.id)}`),
    ...dominiosPsicopatologicos.map((d) => `/psicopatologia/${encodeURIComponent(d.id)}`),
    ...casosClinicos.map((c) => `/casos-clinicos/${encodeURIComponent(c.id)}`),
  ];

  return NextResponse.json(urls);
}
