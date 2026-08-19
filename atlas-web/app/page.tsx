import Link from "next/link";

import { grupos } from "../lib/navegacao";
import { medicamentos } from "../data/medicamentos";
import { diagnosticos } from "../data/diagnosticos";
import { emergencias } from "../data/emergencias";
import PainelRecentesFavoritos from "../components/PainelRecentesFavoritos";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1060px] animate-atlas-rise pt-[38px]">
      <div className="flex items-end justify-between gap-6 border-b border-rule pb-[22px]">
        <div>
          <h1 className="font-serif text-[42px] font-medium leading-[1.1] tracking-tight text-ink">
            Consulta rápida
          </h1>
          <p className="mt-2.5 max-w-[52ch] text-[15px] text-ink-2">
            Referência psicofarmacológica e diagnóstica baseada em evidências,
            para uso durante o atendimento.
          </p>
        </div>

        <div className="hidden flex-none whitespace-nowrap font-mono text-[11px] leading-[1.8] text-ink-4 text-right sm:block">
          <div>{medicamentos.length} fármacos</div>
          <div>{diagnosticos.length} diagnósticos</div>
          <div>{emergencias.length} emergências</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr]">
        <Link
          href="/emergencias"
          className="flex min-h-[132px] flex-col justify-between rounded-xl border border-alert-border bg-alert-bg p-5 transition-colors hover:border-alert"
        >
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-alert">
            Acesso imediato
          </div>
          <div>
            <div className="font-serif text-[26px] font-medium text-alert-deep">
              Emergências
            </div>
            <div className="mt-1 text-[13px] text-alert-muted">
              Reconhecimento e conduta em quadros com risco de vida
            </div>
          </div>
        </Link>

        <Link
          href="/assistente"
          className="flex min-h-[132px] flex-col justify-between rounded-xl border border-rule bg-panel p-5 transition-colors hover:border-accent"
        >
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-3">
            Ferramenta
          </div>
          <div>
            <div className="font-serif text-[22px] font-medium text-ink">
              Assistente de Medicação
            </div>
            <div className="mt-1 text-[13px] text-ink-2">
              Escolha por sintomas ou condições-alvo
            </div>
          </div>
        </Link>

        <Link
          href="/medicamentos"
          className="flex min-h-[132px] flex-col justify-between rounded-xl border border-rule bg-panel p-5 transition-colors hover:border-accent"
        >
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-3">
            Biblioteca
          </div>
          <div>
            <div className="font-serif text-[22px] font-medium text-ink">
              Medicamentos
            </div>
            <div className="mt-1 text-[13px] text-ink-2">
              Posologia, perfil de efeitos e populações especiais
            </div>
          </div>
        </Link>
      </div>

      <PainelRecentesFavoritos />

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {grupos.map((grupo) => (
          <div key={grupo.titulo}>
            <div className="border-b border-rule pb-2 font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-4">
              {grupo.titulo}
            </div>
            <div className="flex flex-col">
              {grupo.itens.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-baseline justify-between gap-3 border-b border-rule-soft py-[11px] text-ink transition-colors hover:text-accent"
                >
                  <span className="text-[14px]">{item.nome}</span>
                  <span className="whitespace-nowrap font-mono text-[10.5px] text-ink-4">
                    {item.meta}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
