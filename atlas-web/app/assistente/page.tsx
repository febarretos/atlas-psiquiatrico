import AssistenteMedicacao from "../../components/AssistenteMedicacao";

export default function AssistentePage() {
  return (
    <main className="mx-auto max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">
          Assistente de Medicação
        </h1>

        <p className="mt-3 text-ink-2">
          Três formas de chegar a um candidato: por sintomas (ainda sem
          hipótese fechada), por condições-alvo (diagnóstico já definido) ou
          comparação manual entre candidatos específicos — todas terminam no
          mesmo perfil clínico e visual. Apoio ao raciocínio, não substituto
          da avaliação médica.
        </p>
      </div>

      <AssistenteMedicacao />
    </main>
  );
}
