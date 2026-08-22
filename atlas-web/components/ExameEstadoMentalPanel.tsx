"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import BotaoCopiarProntuario from "./BotaoCopiarProntuario";

import type { DominioPsicopatologico } from "../data/psicopatologia/types";
import {
  alternarAchadoSelecionado,
  limparSelecao,
  obterAchadosSelecionados,
} from "../lib/exameEstadoMental";
import { gerarTextoExameEstadoMental } from "../lib/gerarTextoProntuario";

interface Props {
  dominios: DominioPsicopatologico[];
}

export default function ExameEstadoMentalPanel({ dominios }: Props) {
  const [idsSelecionados, setIdsSelecionados] = useState<string[]>([]);
  const [texto, setTexto] = useState("");

  // localStorage só existe no cliente: carrega a seleção após a
  // montagem, evitando divergência entre servidor e cliente.
  useEffect(() => {
    const ids = obterAchadosSelecionados();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
    setIdsSelecionados(ids);
    setTexto(gerarTextoExameEstadoMental(dominios, ids));
  }, [dominios]);

  // Regenera o texto quando a seleção muda, mas só se o usuário ainda
  // não editou o campo manualmente — mesmo mecanismo de
  // DiagnosticoProntuarioPanel.tsx, pra não sobrescrever uma edição em
  // andamento.
  const ultimoGeradoRef = useRef(texto);

  useEffect(() => {
    const novoTexto = gerarTextoExameEstadoMental(dominios, idsSelecionados);
    setTexto((atual) => (atual === ultimoGeradoRef.current ? novoTexto : atual));
    ultimoGeradoRef.current = novoTexto;
  }, [idsSelecionados, dominios]);

  function removerAchado(achadoId: string) {
    alternarAchadoSelecionado(achadoId);
    setIdsSelecionados((atual) => atual.filter((id) => id !== achadoId));
  }

  function limpar() {
    limparSelecao();
    setIdsSelecionados([]);
    setTexto("");
    ultimoGeradoRef.current = "";
  }

  if (idsSelecionados.length === 0) {
    return (
      <div className="rounded-xl border border-rule bg-panel p-8 text-center">
        <p className="text-ink-2">
          Nenhum achado marcado ainda. Navegue pelos domínios de
          Psicopatologia e clique em &ldquo;Observar no EEM&rdquo; nos
          achados presentes no paciente.
        </p>

        <Link
          href="/psicopatologia"
          className="mt-4 inline-block rounded-lg border border-rule bg-paper px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
        >
          Ir para Psicopatologia
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-rule bg-panel p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">
            Achados marcados ({idsSelecionados.length})
          </p>

          <button
            type="button"
            onClick={limpar}
            className="text-sm text-ink-2 hover:text-alert"
          >
            Limpar seleção
          </button>
        </div>

        <div className="space-y-4">
          {dominios.map((dominio) => {
            const achadosDoDominio = dominio.achados.filter((a) =>
              idsSelecionados.includes(a.id)
            );
            if (achadosDoDominio.length === 0) return null;

            return (
              <div key={dominio.id}>
                <p className="mb-1.5 text-sm font-semibold text-ink">
                  {dominio.nome}
                </p>

                <div className="flex flex-wrap gap-2">
                  {achadosDoDominio.map((achado) => (
                    <button
                      key={achado.id}
                      type="button"
                      onClick={() => removerAchado(achado.id)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent hover:border-alert-border hover:bg-alert-bg hover:text-alert"
                      title="Remover"
                    >
                      {achado.nome}
                      <span aria-hidden="true">×</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-rule bg-panel p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
          Texto (revise antes de copiar)
        </p>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={8}
          className="w-full rounded-lg border border-rule bg-paper p-3 text-[16px] text-ink outline-none focus:border-accent"
        />

        <div className="mt-3">
          <BotaoCopiarProntuario texto={texto} />
        </div>
      </div>
    </div>
  );
}
