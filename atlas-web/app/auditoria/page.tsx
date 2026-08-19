import Badge from "../../components/Badge";
import Section from "../../components/Section";
import { auditarIntegridade } from "../../lib/auditoria";

export default function AuditoriaPage() {
  const problemas = auditarIntegridade();

  const porCategoria = new Map<string, typeof problemas>();
  for (const p of problemas) {
    porCategoria.set(p.categoria, [...(porCategoria.get(p.categoria) ?? []), p]);
  }

  return (
    <main className="mx-auto max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">Auditoria de Integridade</h1>
        <p className="mt-3 text-ink-2">
          Checagem automática de referências cruzadas entre módulos de
          conteúdo (casos clínicos → diagnósticos/medicamentos/psicopatologia,
          diagnósticos → sintomas/medicamentos, faixas de escalas, pares
          antagônicos do Assistente) — roda sobre o conteúdo real a cada
          carregamento da página. Ferramenta de manutenção de conteúdo, não
          de uso clínico.
        </p>
      </div>

      <Section
        titulo={
          problemas.length === 0
            ? "Nenhum problema encontrado"
            : `${problemas.length} problema(s) encontrado(s)`
        }
      >
        {problemas.length === 0 ? (
          <p className="text-ink-2">
            Todas as referências cruzadas checadas resolvem corretamente.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {[...porCategoria.entries()].map(([categoria, itens]) => (
              <div key={categoria}>
                <div className="mb-2 flex items-center gap-2">
                  <Badge color="red">{categoria}</Badge>
                  <span className="text-xs text-ink-3">
                    {itens.length} problema(s)
                  </span>
                </div>
                <ul className="list-disc space-y-1 pl-6 text-sm text-ink-2">
                  {itens.map((p, i) => (
                    <li key={i}>{p.descricao}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
