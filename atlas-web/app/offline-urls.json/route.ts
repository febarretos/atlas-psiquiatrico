import { NextResponse } from "next/server";

import { medicamentos } from "../../data/medicamentos";
import { diagnosticos } from "../../data/diagnosticos";
import { escalas } from "../../data/escalas";
import { fluxogramas } from "../../data/fluxogramas";
import { emergencias } from "../../data/emergencias";
import { dominiosPsicopatologicos } from "../../data/psicopatologia";
import { casosClinicos } from "../../data/casos-clinicos";
import { casosSimulador } from "../../data/simulador";
import { casosSimuladorEmergencia } from "../../data/simulador-emergencia";

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
    // Estes 4 módulos ficavam de fora da lista — quem abrisse qualquer um
    // deles offline caía em erro, mesmo com o indicador do topo dizendo
    // "offline" como se o app inteiro estivesse disponível.
    "/entrevista-estruturada",
    "/estudo",
    "/simulador",
    "/simulador-emergencia",
    // Idem: botões de primeira linha ao lado da busca em Medicamentos e
    // Diagnósticos, mas ausentes desta lista — mesma classe de bug.
    "/medicamentos/classes",
    "/diagnosticos/categorias",
    ...medicamentos.map((m) => `/medicamentos/${encodeURIComponent(m.nome)}`),
    ...diagnosticos.map((d) => `/diagnosticos/${encodeURIComponent(d.id)}`),
    ...escalas.map((e) => `/escalas/${encodeURIComponent(e.id)}`),
    ...fluxogramas.map((f) => `/fluxogramas/${encodeURIComponent(f.id)}`),
    ...emergencias.map((e) => `/emergencias/${encodeURIComponent(e.id)}`),
    ...dominiosPsicopatologicos.map((d) => `/psicopatologia/${encodeURIComponent(d.id)}`),
    ...casosClinicos.map((c) => `/casos-clinicos/${encodeURIComponent(c.id)}`),
    ...casosSimulador.map((c) => `/simulador/${encodeURIComponent(c.id)}`),
    ...casosSimuladorEmergencia.map((c) => `/simulador-emergencia/${encodeURIComponent(c.id)}`),
  ];

  return NextResponse.json(urls);
}
