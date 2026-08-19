"use client";

import { useEffect, useRef, useState } from "react";

import BotaoCopiarProntuario from "./BotaoCopiarProntuario";

import type { Diagnostico } from "../data/diagnosticos/types";
import { gerarTextoDiagnostico } from "../lib/gerarTextoProntuario";

interface Props {
  diagnostico: Diagnostico;
}

export default function DiagnosticoProntuarioPanel({ diagnostico }: Props) {
  const [aberto, setAberto] = useState(false);
  const [especificadoresSelecionados, setEspecificadoresSelecionados] = useState<string[]>([]);
  const [texto, setTexto] = useState(() => gerarTextoDiagnostico(diagnostico));

  // Regenera o texto quando os especificadores mudam, mas só se o
  // usuário ainda não editou o campo manualmente — evita sobrescrever
  // uma edição em andamento.
  const ultimoGeradoRef = useRef(texto);

  useEffect(() => {
    const novoTexto = gerarTextoDiagnostico(diagnostico, especificadoresSelecionados);
    setTexto((atual) => (atual === ultimoGeradoRef.current ? novoTexto : atual));
    ultimoGeradoRef.current = novoTexto;
  }, [especificadoresSelecionados, diagnostico]);

  function alternarEspecificador(especificador: string) {
    setEspecificadoresSelecionados((atual) =>
      atual.includes(especificador)
        ? atual.filter((e) => e !== especificador)
        : [...atual, especificador]
    );
  }

  if (!aberto) {
    return (
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="rounded-lg border border-rule bg-panel px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
      >
        Copiar pro prontuário
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-rule bg-panel p-5">
      {diagnostico.especificadores && diagnostico.especificadores.length > 0 && (
        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
            Especificadores (opcional)
          </p>

          <div className="flex max-h-40 flex-col gap-2 overflow-y-auto pr-2">
            {diagnostico.especificadores.map((especificador) => (
              <label
                key={especificador}
                className="flex items-start gap-2 text-sm text-ink-2"
              >
                <input
                  type="checkbox"
                  checked={especificadoresSelecionados.includes(especificador)}
                  onChange={() => alternarEspecificador(especificador)}
                  className="mt-1 h-4 w-4 accent-accent"
                />
                <span>{especificador}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-3">
        Texto (revise antes de copiar)
      </p>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={3}
        className="w-full rounded-lg border border-rule bg-paper p-3 text-sm text-ink outline-none focus:border-accent"
      />

      <div className="mt-3 flex items-center gap-3">
        <BotaoCopiarProntuario texto={texto} />

        <button
          type="button"
          onClick={() => setAberto(false)}
          className="text-sm text-ink-2 hover:text-ink"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
