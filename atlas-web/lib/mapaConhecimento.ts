import { diagnosticos } from "../data/diagnosticos";
import { medicamentos } from "../data/medicamentos";
import { escalas } from "../data/escalas";
import { fluxogramas } from "../data/fluxogramas";

export type TipoNo = "diagnostico" | "medicamento" | "escala" | "fluxograma";

export interface NoGrafo {
  id: string; // prefixado por tipo (ex.: "medicamento:sertralina") — os 4 módulos têm ids independentes, podem colidir entre si
  tipo: TipoNo;
  label: string;
  href: string;
}

export interface ArestaGrafo {
  origem: string;
  destino: string;
  // "primeira-linha" é a aresta mais densa do grafo (um diagnóstico chega
  // a ter 10+ medicamentos de primeira linha) — marcada à parte pra poder
  // ser escondida por padrão sem esconder as arestas de fluxograma, mais
  // esparsas e mais "curadas".
  tipoAresta: "primeira-linha" | "fluxograma";
}

export interface GrafoConhecimento {
  nos: NoGrafo[];
  arestas: ArestaGrafo[];
}

function idDiagnostico(id: string) {
  return `diagnostico:${id}`;
}
function idMedicamento(id: string) {
  return `medicamento:${id}`;
}
function idEscala(id: string) {
  return `escala:${id}`;
}
function idFluxograma(id: string) {
  return `fluxograma:${id}`;
}

export function construirGrafoConhecimento(): GrafoConhecimento {
  const nos: NoGrafo[] = [];
  const arestas: ArestaGrafo[] = [];
  const arestasVistas = new Set<string>();

  function adicionarAresta(origem: string, destino: string, tipoAresta: ArestaGrafo["tipoAresta"]) {
    const chave = `${origem}->${destino}`;
    if (arestasVistas.has(chave)) return;
    arestasVistas.add(chave);
    arestas.push({ origem, destino, tipoAresta });
  }

  const idsMedicamentosValidos = new Set(medicamentos.map((m) => m.id));
  const idsDiagnosticosValidos = new Set(diagnosticos.map((d) => d.id));
  const idsEscalasValidas = new Set(escalas.map((e) => e.id));

  for (const d of diagnosticos) {
    nos.push({ id: idDiagnostico(d.id), tipo: "diagnostico", label: d.nome, href: `/diagnosticos/${d.id}` });
  }
  for (const m of medicamentos) {
    nos.push({
      id: idMedicamento(m.id),
      tipo: "medicamento",
      label: m.nome,
      href: `/medicamentos/${encodeURIComponent(m.nome)}`,
    });
  }
  for (const e of escalas) {
    nos.push({ id: idEscala(e.id), tipo: "escala", label: e.sigla, href: `/escalas/${e.id}` });
  }
  for (const f of fluxogramas) {
    nos.push({ id: idFluxograma(f.id), tipo: "fluxograma", label: f.titulo, href: `/fluxogramas/${f.id}` });
  }

  // Diagnóstico -> Medicamento (primeira linha)
  for (const d of diagnosticos) {
    for (const medId of d.medicamentosPrimeiraLinha ?? []) {
      if (!idsMedicamentosValidos.has(medId)) continue;
      adicionarAresta(idDiagnostico(d.id), idMedicamento(medId), "primeira-linha");
    }
  }

  // Fluxograma -> Medicamento / Escala / Diagnóstico (via nós do fluxograma)
  for (const f of fluxogramas) {
    for (const node of f.nodes) {
      for (const medId of node.medicamentosRelacionados ?? []) {
        if (!idsMedicamentosValidos.has(medId)) continue;
        adicionarAresta(idFluxograma(f.id), idMedicamento(medId), "fluxograma");
      }
      for (const escId of node.escalasRelacionadas ?? []) {
        if (!idsEscalasValidas.has(escId)) continue;
        adicionarAresta(idFluxograma(f.id), idEscala(escId), "fluxograma");
      }
      for (const diagId of node.diagnosticosRelacionados ?? []) {
        if (!idsDiagnosticosValidos.has(diagId)) continue;
        adicionarAresta(idFluxograma(f.id), idDiagnostico(diagId), "fluxograma");
      }
    }
  }

  // Só mantém nós com pelo menos uma aresta — nó isolado não ajuda a
  // "navegar conexões", só polui o grafo.
  const idsConectados = new Set<string>();
  for (const a of arestas) {
    idsConectados.add(a.origem);
    idsConectados.add(a.destino);
  }

  return {
    nos: nos.filter((n) => idsConectados.has(n.id)),
    arestas,
  };
}
