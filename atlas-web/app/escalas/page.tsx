"use client";

import { useMemo, useState } from "react";

import Badge from "../../components/Badge";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";

import { normalizarBusca } from "../../lib/normalizarBusca";
import { escalas } from "../../data/escalas";
import { ORDEM_USO } from "../../lib/escalasOrdemUso";

// Escalas não listadas em ORDEM_USO (ex.: futuras) caem no fim, em ordem
// alfabética — lib/auditoria.ts audita que toda escala existente está
// listada, então essa lacuna só deve acontecer para conteúdo novo ainda
// não classificado.

// Categorias também seguem a mesma lógica de prevalência/frequência de uso,
// não ordem alfabética — usa a categoria da primeira escala de cada uma na
// ORDEM_USO para definir a posição do grupo inteiro.
function ordenarPorUso<T extends { id: string; nome: string }>(itens: T[]): T[] {
  return [...itens].sort((a, b) => {
    const posA = ORDEM_USO.indexOf(a.id);
    const posB = ORDEM_USO.indexOf(b.id);

    if (posA === -1 && posB === -1) return a.nome.localeCompare(b.nome);
    if (posA === -1) return 1;
    if (posB === -1) return -1;

    return posA - posB;
  });
}

export default function Escalas() {
  const [busca, setBusca] = useState("");

  const lista = useMemo(() => {
    const filtradas = escalas.filter((e) => {
      const texto = normalizarBusca(e.nome + " " + e.sigla + " " + e.categoria);

      return texto.includes(normalizarBusca(busca));
    });

    return ordenarPorUso(filtradas);
  }, [busca]);

  const categorias = useMemo(() => {
    const unicas = Array.from(new Set(lista.map((e) => e.categoria)));

    return unicas.sort((catA, catB) => {
      const primeiraA = lista.findIndex((e) => e.categoria === catA);
      const primeiraB = lista.findIndex((e) => e.categoria === catB);

      return primeiraA - primeiraB;
    });
  }, [lista]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">Escalas</h1>

        <p className="mt-3 text-ink-2">
          {lista.length} escala(s) e instrumento(s) de avaliação clínica.
          Ordenados por frequência de uso em consultório ambulatorial.
        </p>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar escala por nome, sigla ou categoria..."
        />
      </div>

      {lista.length === 0 ? (
        <div className="rounded-xl border border-dashed border-rule bg-panel p-12 text-center text-ink-3">
          Nenhuma escala encontrada para &quot;{busca}&quot;.
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {categorias.map((categoria) => (
            <div key={categoria}>
              <h2 className="mb-4 text-lg font-semibold text-ink-2">
                {categoria}
              </h2>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {lista
                  .filter((e) => e.categoria === categoria)
                  .map((e) => (
                    <Card
                      key={e.id}
                      titulo={e.nome}
                      descricao={e.descricao}
                      href={`/escalas/${e.id}`}
                    >
                      <div className="flex flex-wrap gap-2">
                        <Badge color="blue">{e.sigla}</Badge>
                        <Badge color="gray">{e.categoria}</Badge>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
