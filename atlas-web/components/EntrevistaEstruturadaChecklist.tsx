"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import BotaoCopiarProntuario from "./BotaoCopiarProntuario";
import EntrevistaEstruturadaModulo from "./EntrevistaEstruturadaModulo";
import SearchBar from "./SearchBar";

import { Diagnostico } from "../data/diagnosticos/types";
import { chaveCriterio } from "../lib/entrevistaEstruturada";
import { gerarTextoEntrevistaEstruturada, type RespostaModuloEntrevista } from "../lib/gerarTextoProntuario";
import { normalizarBusca } from "../lib/normalizarBusca";

interface Props {
  diagnosticos: Diagnostico[];
}

export default function EntrevistaEstruturadaChecklist({ diagnosticos }: Props) {
  const searchParams = useSearchParams();
  const [busca, setBusca] = useState("");
  const [pacienteLabel, setPacienteLabel] = useState("");
  const [respostasEstruturadas, setRespostasEstruturadas] = useState<Map<string, boolean>>(new Map());

  // Deep link a partir da ficha de diagnóstico ("Aplicar como entrevista
  // estruturada") — filtra direto pro módulo daquele diagnóstico, em vez de
  // abrir com os 33 módulos simultaneamente.
  useEffect(() => {
    const diagnosticoId = searchParams.get("diagnostico");
    if (!diagnosticoId) return;

    const diagnostico = diagnosticos.find((d) => d.id === diagnosticoId);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronizando com o parâmetro de URL (só disponível após montagem)
    if (diagnostico) setBusca(diagnostico.nome);
  }, [searchParams, diagnosticos]);

  function responderCriterioEstruturado(
    diagnosticoId: string,
    criterioId: string,
    valor: boolean | undefined
  ) {
    setRespostasEstruturadas((atual) => {
      const novo = new Map(atual);
      const chave = chaveCriterio(diagnosticoId, criterioId);
      if (valor === undefined) novo.delete(chave);
      else novo.set(chave, valor);
      return novo;
    });
  }

  // Extrai, do Map global (chave composta), só as respostas de 1
  // diagnóstico, com a chave "crua" que o motor/algoritmo espera.
  function respostasDoModulo(diagnosticoId: string): Map<string, boolean> {
    const prefixo = `${diagnosticoId}::`;
    const resultado = new Map<string, boolean>();
    for (const [chave, valor] of respostasEstruturadas) {
      if (chave.startsWith(prefixo)) resultado.set(chave.slice(prefixo.length), valor);
    }
    return resultado;
  }

  function limparMarcacoes() {
    setRespostasEstruturadas(new Map());
  }

  const modulos = useMemo(() => {
    const porCategoria = new Map<string, Diagnostico[]>();

    for (const d of diagnosticos) {
      const texto = normalizarBusca(d.nome + " " + d.categoria);
      if (busca && !texto.includes(normalizarBusca(busca))) continue;

      const lista = porCategoria.get(d.categoria) ?? [];
      lista.push(d);
      porCategoria.set(d.categoria, lista);
    }

    return [...porCategoria.entries()]
      .map(([categoria, lista]) => ({
        categoria,
        diagnosticos: [...lista].sort((a, b) => a.nome.localeCompare(b.nome)),
      }))
      .sort((a, b) => a.categoria.localeCompare(b.categoria));
  }, [diagnosticos, busca]);

  const totalMarcados = [...respostasEstruturadas.values()].filter(Boolean).length;

  // Texto final SEMPRE construído a partir de `diagnosticos` (lista
  // completa, não a `modulos` filtrada pela busca) — pra nunca perder um
  // item marcado que saiu do filtro de busca no meio da sessão.
  const textoResumo = useMemo(() => {
    if (totalMarcados === 0) return "";

    const modulosEstruturados: RespostaModuloEntrevista[] = diagnosticos.map((d) => ({
      diagnostico: d,
      respostasCriterios: respostasDoModulo(d.id),
    }));

    return gerarTextoEntrevistaEstruturada(modulosEstruturados);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- respostasDoModulo depende só de respostasEstruturadas, já listado
  }, [diagnosticos, respostasEstruturadas, totalMarcados]);

  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-8 rounded-xl border border-rule bg-panel p-8">
        <h1 className="text-4xl font-bold text-ink">Entrevista Diagnóstica Estruturada</h1>

        <p className="mt-4 text-ink-2">
          Entrevista tipo SCID: pergunta de rastreio por módulo (pula o módulo inteiro se
          negativa) e cálculo ao vivo da contagem/subgrupos formais do DSM-5-TR.
        </p>

        <p className="mt-3 text-sm text-ink-3">
          O cálculo formal não substitui o julgamento clínico — duração, exclusões e diferencial
          continuam sendo sua responsabilidade conferir. Nada aqui é salvo entre sessões nem
          compartilhado com a ficha do diagnóstico.
        </p>

        <div className="mt-5 max-w-sm print:hidden">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-3">
            Paciente (rótulo, opcional)
          </label>
          <input
            type="text"
            value={pacienteLabel}
            onChange={(e) => setPacienteLabel(e.target.value)}
            placeholder="ex: iniciais ou nº de atendimento"
            className="w-full rounded-lg border border-rule bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between print:hidden">
        <div className="max-w-md flex-1">
          <SearchBar
            value={busca}
            onChange={setBusca}
            placeholder="Filtrar por transtorno ou módulo..."
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-ink-2">{totalMarcados} item(ns) marcado(s)</span>

          {totalMarcados > 0 && (
            <>
              <BotaoCopiarProntuario
                texto={pacienteLabel ? `Paciente: ${pacienteLabel}\n\n${textoResumo}` : textoResumo}
              />
              <button
                type="button"
                onClick={limparMarcacoes}
                className="whitespace-nowrap rounded-lg border border-rule px-3 py-2 text-xs font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                Limpar marcações
              </button>
            </>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {modulos.map(({ categoria, diagnosticos: listaDoModulo }) => (
          <section
            key={categoria}
            className="rounded-xl border border-rule bg-panel p-6 print:border-none print:bg-white print:p-0 print:text-black print:shadow-none"
          >
            <h2 className="mb-4 text-xl font-bold text-ink print:text-black">
              Módulo — {categoria}
            </h2>

            <div className="space-y-3">
              {listaDoModulo.map((d) => (
                <EntrevistaEstruturadaModulo
                  key={d.id}
                  diagnostico={d}
                  respostasCriterios={respostasDoModulo(d.id)}
                  onResponderCriterio={(criterioId, valor) =>
                    responderCriterioEstruturado(d.id, criterioId, valor)
                  }
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
