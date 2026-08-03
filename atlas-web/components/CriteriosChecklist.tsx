"use client";

import { useState } from "react";

interface Props {
  itens: string[];
}

// Marca cada critério como lido/observado durante a entrevista — só
// contabiliza quantos foram marcados, sem tentar calcular
// automaticamente se o diagnóstico "fecha". A contagem mínima exigida,
// as exclusões e os itens obrigatórios variam de formato entre os
// diagnósticos (texto livre, não estruturado) — um veredito automático
// aqui arriscaria dar falsa segurança se o texto for mal interpretado.
export default function CriteriosChecklist({ itens }: Props) {
  const [marcados, setMarcados] = useState<Set<number>>(new Set());

  function alternar(indice: number) {
    setMarcados((atual) => {
      const novo = new Set(atual);
      if (novo.has(indice)) novo.delete(indice);
      else novo.add(indice);
      return novo;
    });
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-sm text-slate-400">
          Marque os itens observados/relatados para organizar a leitura
          durante a entrevista — {marcados.size} de {itens.length}{" "}
          marcado(s). Não calcula automaticamente se os critérios estão
          preenchidos: a contagem mínima exigida e as exclusões variam por
          diagnóstico, verifique o texto de cada item.
        </p>

        {marcados.size > 0 && (
          <button
            type="button"
            onClick={() => setMarcados(new Set())}
            className="whitespace-nowrap rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
          >
            Limpar marcações
          </button>
        )}
      </div>

      <ul className="space-y-2">
        {itens.map((item, indice) => {
          const marcado = marcados.has(indice);

          return (
            <li key={indice}>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1 print:cursor-default">
                <input
                  type="checkbox"
                  checked={marcado}
                  onChange={() => alternar(indice)}
                  className="mt-1 h-4 w-4 accent-blue-500 print:hidden"
                />
                <span
                  className={
                    marcado ? "text-white" : "text-slate-300 print:text-black"
                  }
                >
                  {item}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
