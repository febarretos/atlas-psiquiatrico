"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";

import { ArestaGrafo, GrafoConhecimento, NoGrafo, TipoNo } from "../lib/mapaConhecimento";
import { calcularLayout } from "../lib/forcaGrafo";

interface Props {
  grafo: GrafoConhecimento;
}

const LARGURA = 1100;
const ALTURA = 700;

const CORES: Record<TipoNo, string> = {
  diagnostico: "#60a5fa", // azul
  medicamento: "#34d399", // verde
  escala: "#fbbf24", // amarelo
  fluxograma: "#f472b6", // rosa
};

const ROTULOS: Record<TipoNo, string> = {
  diagnostico: "Diagnósticos",
  medicamento: "Medicamentos",
  escala: "Escalas",
  fluxograma: "Fluxogramas",
};

const TODOS_TIPOS: TipoNo[] = ["diagnostico", "medicamento", "escala", "fluxograma"];

export default function MapaConhecimento({ grafo }: Props) {
  const [tiposVisiveis, setTiposVisiveis] = useState<Set<TipoNo>>(new Set(TODOS_TIPOS));
  const [mostrarPrimeiraLinha, setMostrarPrimeiraLinha] = useState(false);
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const [busca, setBusca] = useState("");
  const [arrastando, setArrastando] = useState<string | null>(null);
  const [posicoesManuais, setPosicoesManuais] = useState<Map<string, { x: number; y: number }>>(
    new Map()
  );
  const svgRef = useRef<SVGSVGElement>(null);

  function alternarTipo(tipo: TipoNo) {
    setTiposVisiveis((atual) => {
      const novo = new Set(atual);
      if (novo.has(tipo)) novo.delete(tipo);
      else novo.add(tipo);
      return novo;
    });
    setSelecionado(null);
  }

  const grafoFiltrado = useMemo(() => {
    const nosFiltrados = grafo.nos.filter((n) => tiposVisiveis.has(n.tipo));
    const idsVisiveis = new Set(nosFiltrados.map((n) => n.id));

    const arestasFiltradas = grafo.arestas.filter((a) => {
      if (!idsVisiveis.has(a.origem) || !idsVisiveis.has(a.destino)) return false;
      if (a.tipoAresta === "primeira-linha" && !mostrarPrimeiraLinha) return false;
      return true;
    });

    // Reaplica a regra "sem nó isolado" depois de filtrar arestas de
    // primeira linha (que podem ser a única conexão de um medicamento).
    const idsConectados = new Set<string>();
    for (const a of arestasFiltradas) {
      idsConectados.add(a.origem);
      idsConectados.add(a.destino);
    }

    return {
      nos: nosFiltrados.filter((n) => idsConectados.has(n.id)),
      arestas: arestasFiltradas,
    };
  }, [grafo, tiposVisiveis, mostrarPrimeiraLinha]);

  const chaveLayout = useMemo(
    () => grafoFiltrado.nos.map((n) => n.id).sort().join("|"),
    [grafoFiltrado]
  );

  const posicoesBase = useMemo(() => {
    return calcularLayout(
      grafoFiltrado.nos.map((n) => n.id),
      grafoFiltrado.arestas.map((a) => ({ origem: a.origem, destino: a.destino })),
      LARGURA,
      ALTURA
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chaveLayout]);

  function posicaoDe(id: string) {
    return posicoesManuais.get(id) ?? posicoesBase.get(id) ?? { x: LARGURA / 2, y: ALTURA / 2 };
  }

  const grauPorNo = useMemo(() => {
    const grau = new Map<string, number>();
    for (const a of grafoFiltrado.arestas) {
      grau.set(a.origem, (grau.get(a.origem) ?? 0) + 1);
      grau.set(a.destino, (grau.get(a.destino) ?? 0) + 1);
    }
    return grau;
  }, [grafoFiltrado]);

  const noSelecionado = grafoFiltrado.nos.find((n) => n.id === selecionado) ?? null;

  const vizinhos = useMemo(() => {
    if (!selecionado) return new Set<string>();
    const set = new Set<string>();
    for (const a of grafoFiltrado.arestas) {
      if (a.origem === selecionado) set.add(a.destino);
      if (a.destino === selecionado) set.add(a.origem);
    }
    return set;
  }, [selecionado, grafoFiltrado]);

  const termoBusca = busca.trim().toLowerCase();
  const nosDestacadosPelaBusca = useMemo(() => {
    if (!termoBusca) return null;
    return new Set(
      grafoFiltrado.nos.filter((n) => n.label.toLowerCase().includes(termoBusca)).map((n) => n.id)
    );
  }, [termoBusca, grafoFiltrado]);

  function opacidadeNo(no: NoGrafo): number {
    if (nosDestacadosPelaBusca) return nosDestacadosPelaBusca.has(no.id) ? 1 : 0.12;
    if (!selecionado) return 1;
    if (no.id === selecionado || vizinhos.has(no.id)) return 1;
    return 0.12;
  }

  function opacidadeAresta(a: ArestaGrafo): number {
    if (selecionado) {
      return a.origem === selecionado || a.destino === selecionado ? 0.9 : 0.05;
    }
    return a.tipoAresta === "primeira-linha" ? 0.25 : 0.5;
  }

  function raioNo(no: NoGrafo): number {
    const grau = grauPorNo.get(no.id) ?? 1;
    return Math.min(6 + grau * 1.6, 22);
  }

  function coordenadasSvg(evento: React.MouseEvent): { x: number; y: number } | null {
    const svg = svgRef.current;
    if (!svg) return null;
    const ponto = svg.createSVGPoint();
    ponto.x = evento.clientX;
    ponto.y = evento.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return null;
    const transformado = ponto.matrixTransform(ctm.inverse());
    return { x: transformado.x, y: transformado.y };
  }

  function onMouseMoveSvg(evento: React.MouseEvent) {
    if (!arrastando) return;
    const coords = coordenadasSvg(evento);
    if (!coords) return;
    setPosicoesManuais((atual) => {
      const novo = new Map(atual);
      novo.set(arrastando, coords);
      return novo;
    });
  }

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-ink">Mapa de Conhecimento</h1>
        <p className="mt-3 text-ink-2">
          Grafo interativo de todas as conexões já cadastradas no Atlas entre diagnósticos,
          medicamentos, escalas e fluxogramas. Clique num nó pra destacar as conexões diretas dele,
          ou arraste pra reorganizar. Só aparecem aqui nós que têm pelo menos uma conexão real nos
          dados — não é uma lista completa dos módulos.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar um nó pelo nome..."
          className="rounded-lg border border-rule bg-panel px-4 py-2 text-[16px] text-ink placeholder-ink-3 focus:border-accent focus:outline-none"
        />

        {TODOS_TIPOS.map((tipo) => {
          const ativo = tiposVisiveis.has(tipo);
          return (
            <button
              key={tipo}
              type="button"
              onClick={() => alternarTipo(tipo)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                ativo
                  ? ""
                  : "border-rule bg-panel text-ink-3"
              }`}
              style={ativo ? { borderColor: CORES[tipo], color: CORES[tipo] } : undefined}
            >
              {ROTULOS[tipo]}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => setMostrarPrimeiraLinha((v) => !v)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            mostrarPrimeiraLinha
              ? "border-accent bg-accent-soft text-accent"
              : "border-rule bg-panel text-ink-3"
          }`}
        >
          {mostrarPrimeiraLinha ? "✓" : "☐"} Vínculos diagnóstico→medicamento (primeira linha)
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="overflow-hidden rounded-xl border border-rule bg-panel">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${LARGURA} ${ALTURA}`}
            className="h-[700px] w-full"
            onMouseMove={onMouseMoveSvg}
            onMouseUp={() => setArrastando(null)}
            onMouseLeave={() => setArrastando(null)}
          >
            {grafoFiltrado.arestas.map((a, i) => {
              const p1 = posicaoDe(a.origem);
              const p2 = posicaoDe(a.destino);
              return (
                <line
                  key={i}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke={a.tipoAresta === "fluxograma" ? "#A9ADB4" : "#C5C1B8"}
                  strokeWidth={a.tipoAresta === "fluxograma" ? 1.4 : 1}
                  opacity={opacidadeAresta(a)}
                />
              );
            })}

            {grafoFiltrado.nos.map((no) => {
              const pos = posicaoDe(no.id);
              const raio = raioNo(no);
              const emFoco = selecionado === no.id;

              return (
                <g
                  key={no.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  opacity={opacidadeNo(no)}
                  className="cursor-pointer"
                  onMouseDown={() => setArrastando(no.id)}
                  onClick={() => setSelecionado(selecionado === no.id ? null : no.id)}
                >
                  <circle
                    r={raio}
                    fill={CORES[no.tipo]}
                    stroke={emFoco ? "#191B1E" : "none"}
                    strokeWidth={2}
                  />
                  {(raio > 12 || emFoco) && (
                    <text
                      y={raio + 12}
                      textAnchor="middle"
                      fontSize={11}
                      fill="#5C6067"
                      className="pointer-events-none select-none"
                    >
                      {no.label.length > 22 ? no.label.slice(0, 21) + "…" : no.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="rounded-xl border border-rule bg-panel p-5">
          {noSelecionado ? (
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: CORES[noSelecionado.tipo] }}
                />
                <span className="text-xs uppercase tracking-wider text-ink-3">
                  {ROTULOS[noSelecionado.tipo]}
                </span>
              </div>

              <h2 className="mb-4 text-lg font-bold text-ink">{noSelecionado.label}</h2>

              <Link
                href={noSelecionado.href}
                className="mb-5 inline-block rounded-lg border border-rule px-3 py-2 text-sm font-medium text-accent transition-colors hover:border-accent"
              >
                Ver página completa →
              </Link>

              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
                Conectado com ({vizinhos.size})
              </h3>
              <ul className="space-y-1">
                {[...vizinhos].map((idVizinho) => {
                  const vizinho = grafoFiltrado.nos.find((n) => n.id === idVizinho);
                  if (!vizinho) return null;
                  return (
                    <li key={idVizinho}>
                      <button
                        type="button"
                        onClick={() => setSelecionado(idVizinho)}
                        className="flex items-center gap-2 text-left text-sm text-ink-2 hover:text-accent"
                      >
                        <span
                          className="h-2 w-2 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: CORES[vizinho.tipo] }}
                        />
                        {vizinho.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="text-sm text-ink-2">
              <p className="mb-4">
                Clique num nó do grafo pra ver os detalhes e as conexões diretas dele.
              </p>
              <p>
                {grafoFiltrado.nos.length} nó(s) e {grafoFiltrado.arestas.length} conexão(ões)
                visíveis com os filtros atuais.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
