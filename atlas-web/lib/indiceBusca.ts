import { medicamentos } from "../data/medicamentos";
import { diagnosticos } from "../data/diagnosticos";
import { escalas } from "../data/escalas";
import { emergencias } from "../data/emergencias";
import { fluxogramas } from "../data/fluxogramas";
import { dominiosPsicopatologicos } from "../data/psicopatologia";
import { casosClinicos } from "../data/casos-clinicos";
import { normalizarBusca } from "./normalizarBusca";

export interface ItemBusca {
  tipo: string;
  nome: string;
  sub: string;
  href: string;
}

let indiceCache: ItemBusca[] | null = null;

export function getIndiceBusca(): ItemBusca[] {
  if (indiceCache) return indiceCache;

  indiceCache = [
    ...medicamentos.map((m) => ({
      tipo: "Medicamento",
      nome: m.nome,
      sub: m.classe,
      href: `/medicamentos/${encodeURIComponent(m.nome)}`,
    })),
    ...diagnosticos.map((d) => ({
      tipo: "Diagnóstico",
      nome: d.nome,
      sub: d.categoria,
      href: `/diagnosticos/${d.id}`,
    })),
    ...escalas.map((e) => ({
      tipo: "Escala",
      nome: `${e.nome} (${e.sigla})`,
      sub: e.categoria,
      href: `/escalas/${e.id}`,
    })),
    ...emergencias.map((e) => ({
      tipo: "Emergência",
      nome: e.nome,
      sub: e.categoria,
      href: `/emergencias/${e.id}`,
    })),
    ...fluxogramas.map((f) => ({
      tipo: "Fluxograma",
      nome: f.titulo,
      sub: f.categoria,
      href: `/fluxogramas/${f.id}`,
    })),
    ...dominiosPsicopatologicos.map((d) => ({
      tipo: "Psicopatologia",
      nome: d.nome,
      sub: `${d.achados.length} achado(s)`,
      href: `/psicopatologia/${d.id}`,
    })),
    ...dominiosPsicopatologicos.flatMap((d) =>
      d.achados.map((a) => ({
        tipo: "Achado psicopatológico",
        nome: a.nome,
        sub: d.nome,
        href: `/psicopatologia/${d.id}`,
      }))
    ),
    ...casosClinicos.map((c) => ({
      tipo: "Caso clínico",
      nome: c.titulo,
      sub: c.categoria,
      href: `/casos-clinicos/${c.id}`,
    })),
  ];

  return indiceCache;
}

export function buscarNoIndice(termo: string, limite = 8): ItemBusca[] {
  const indice = getIndiceBusca();
  const consulta = normalizarBusca(termo.trim());

  if (!consulta) return indice.slice(0, 6);

  return indice
    .filter((item) => normalizarBusca(`${item.nome} ${item.tipo} ${item.sub}`).includes(consulta))
    .slice(0, limite);
}
