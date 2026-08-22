"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import BotaoCopiarProntuario from "./BotaoCopiarProntuario";

import type { DominioPsicopatologico } from "../data/psicopatologia/types";
import {
  alternarAchadoSelecionado,
  limparSelecao,
  obterAchadosSelecionadosValidos,
  obterAtualizadoEm,
  obterTextoEditadoValido,
  PARES_ANTAGONICOS,
  salvarTextoEditado,
} from "../lib/exameEstadoMental";
import { gerarTextoExameEstadoMental } from "../lib/gerarTextoProntuario";

interface Props {
  dominios: DominioPsicopatologico[];
}

const LIMIAR_SELECAO_ANTIGA_MS = 3 * 60 * 60 * 1000; // 3h

function formatarTempoDecorrido(desdeMs: number): string {
  const minutos = Math.round(desdeMs / 60000);
  if (minutos < 60) return `${minutos} min`;

  const horas = Math.round(minutos / 60);
  return `${horas}h`;
}

export default function ExameEstadoMentalPanel({ dominios }: Props) {
  const [idsSelecionados, setIdsSelecionados] = useState<string[]>([]);
  const [atualizadoEm, setAtualizadoEm] = useState(0);
  const [agora, setAgora] = useState(0);
  // Estado inicial não depende de localStorage: com baseline "normal"
  // por domínio, o texto pra seleção vazia já é o texto completo — não
  // há mais flash de "carregando"/"vazio" esperando o efeito de mount.
  const [texto, setTexto] = useState(() => gerarTextoExameEstadoMental(dominios, []));

  const ultimoGeradoRef = useRef(texto);
  // A regeneração condicional (efeito abaixo) não deve rodar na mesma
  // passagem em que a hidratação roda — nesse instante ela ainda veria
  // o idsSelecionados=[] inicial e sobrescreveria o texto já hidratado.
  // Pula deliberadamente a primeira invocação; only depois disso ela
  // reage a mudanças reais de seleção.
  const primeiraRegeneracao = useRef(true);

  // localStorage só existe no cliente: hidrata seleção, timestamp e
  // eventual texto editado manualmente num único efeito de mount — evita
  // a corrida entre dois efeitos concorrentes.
  useEffect(() => {
    const idsValidos = obterAchadosSelecionadosValidos(dominios);
    const textoGerado = gerarTextoExameEstadoMental(dominios, idsValidos);
    const textoEditado = obterTextoEditadoValido(idsValidos);

    ultimoGeradoRef.current = textoGerado;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com localStorage (indisponível durante SSR)
    setIdsSelecionados(idsValidos);
    setAtualizadoEm(obterAtualizadoEm());
    setAgora(Date.now());
    setTexto(textoEditado ?? textoGerado);
  }, [dominios]);

  useEffect(() => {
    if (primeiraRegeneracao.current) {
      primeiraRegeneracao.current = false;
      return;
    }

    const novoTexto = gerarTextoExameEstadoMental(dominios, idsSelecionados);
    setTexto((atual) => (atual === ultimoGeradoRef.current ? novoTexto : atual));
    ultimoGeradoRef.current = novoTexto;
  }, [idsSelecionados, dominios]);

  function editarTexto(novoTexto: string) {
    setTexto(novoTexto);
    salvarTextoEditado(novoTexto, idsSelecionados);
  }

  function removerAchado(achadoId: string) {
    alternarAchadoSelecionado(achadoId);
    setIdsSelecionados((atual) => atual.filter((id) => id !== achadoId));
  }

  function limpar() {
    limparSelecao();
    const textoBase = gerarTextoExameEstadoMental(dominios, []);
    ultimoGeradoRef.current = textoBase;
    setIdsSelecionados([]);
    setAtualizadoEm(0);
    setTexto(textoBase);
  }

  const achadoPorId = new Map(dominios.flatMap((d) => d.achados.map((a) => [a.id, a.nome] as const)));

  const paresContraditorios = PARES_ANTAGONICOS.filter(
    ([a, b]) => idsSelecionados.includes(a) && idsSelecionados.includes(b)
  );

  const selecaoAntiga =
    atualizadoEm > 0 && agora > 0 && agora - atualizadoEm > LIMIAR_SELECAO_ANTIGA_MS;

  return (
    <div className="space-y-6">
      {selecaoAntiga && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-warn-border bg-warn-bg p-4">
          <p className="text-sm text-warn">
            Seleção iniciada há {formatarTempoDecorrido(agora - atualizadoEm)} — confirme que
            ainda é o mesmo atendimento antes de copiar.
          </p>

          <button
            type="button"
            onClick={limpar}
            className="flex-none rounded-md border border-warn-border bg-paper px-3 py-1.5 text-sm font-medium text-warn hover:bg-warn-bg"
          >
            Novo atendimento (limpar seleção)
          </button>
        </div>
      )}

      {paresContraditorios.length > 0 && (
        <div className="rounded-xl border border-alert-border bg-alert-bg p-4">
          <p className="text-sm font-semibold text-alert">
            Achados possivelmente contraditórios marcados:
          </p>

          <ul className="mt-1.5 space-y-1 text-sm text-alert">
            {paresContraditorios.map(([a, b]) => (
              <li key={`${a}-${b}`}>
                {achadoPorId.get(a) ?? a} + {achadoPorId.get(b) ?? b} — revise antes de copiar.
              </li>
            ))}
          </ul>
        </div>
      )}

      {idsSelecionados.length === 0 && (
        <p className="text-sm text-ink-2">
          Nenhum achado marcado ainda — o texto abaixo usa o padrão normal por domínio.{" "}
          <Link href="/psicopatologia" className="text-accent hover:underline">
            Marque achados presentes
          </Link>{" "}
          nos domínios de Psicopatologia para substituí-los.
        </p>
      )}

      {idsSelecionados.length > 0 && (
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
                    {dominio.rotuloClinico}
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
      )}

      <div className="rounded-xl border border-rule bg-panel p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
          Texto (revise antes de copiar)
        </p>

        <textarea
          value={texto}
          onChange={(e) => editarTexto(e.target.value)}
          rows={14}
          className="w-full rounded-lg border border-rule bg-paper p-3 text-[16px] text-ink outline-none focus:border-accent"
        />

        <div className="mt-3">
          <BotaoCopiarProntuario texto={texto} />
        </div>
      </div>
    </div>
  );
}
