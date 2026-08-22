"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import Badge from "./Badge";
import SearchBar from "./SearchBar";

import { normalizarBusca } from "../lib/normalizarBusca";
import { obterAchadosSelecionados } from "../lib/exameEstadoMental";
import { DominioPsicopatologico } from "../data/psicopatologia/types";

interface Props {
  dominios: DominioPsicopatologico[];
}

export default function PsicopatologiaPage({
  dominios,
}: Props) {
  const [busca, setBusca] = useState("");
  const [totalSelecionados, setTotalSelecionados] = useState(0);

  // localStorage só existe no cliente: sincroniza a contagem após a
  // montagem, evitando divergência entre servidor e cliente.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
    setTotalSelecionados(obterAchadosSelecionados().length);
  }, []);

  const lista = useMemo(() => {
    const termo = normalizarBusca(busca);

    return dominios.filter((d) => {
      const textoDominio = normalizarBusca(d.nome + " " + d.descricao);
      if (textoDominio.includes(termo)) return true;

      return d.achados.some((a) =>
        normalizarBusca(a.nome + " " + (a.sinonimos ?? []).join(" ")).includes(termo)
      );
    });
  }, [busca, dominios]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">
          Psicopatologia
        </h1>

        <p className="mt-3 text-ink-2">
          Semiologia psiquiátrica por domínio — definições precisas,
          diferenciação fina entre achados semelhantes e vinhetas clínicas.
        </p>

        <Link
          href="/psicopatologia/exame"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-rule bg-panel px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
        >
          Exame do Estado Mental
          {totalSelecionados > 0 && (
            <Badge color="blue">{totalSelecionados} marcado(s)</Badge>
          )}
        </Link>
      </div>

      <div className="mb-8">
        <SearchBar
          value={busca}
          onChange={setBusca}
          placeholder="Pesquisar achado, sinônimo ou domínio..."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {lista.map((d) => (
          <Link
            key={d.id}
            href={`/psicopatologia/${d.id}`}
            className="group rounded-xl border border-rule bg-panel p-6 transition-colors hover:border-accent"
          >
            <h2 className="text-xl font-semibold text-ink group-hover:text-accent">
              {d.nome}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-ink-2">
              {d.descricao}
            </p>

            <div className="mt-5">
              <Badge color="blue">
                {d.achados.length} achado(s)
              </Badge>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
