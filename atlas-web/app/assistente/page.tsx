import AssistenteAvaliacao from "../../components/assistente/AssistenteAvaliacao";

export default function AssistentePage() {
  return (
    <main className="mx-auto max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🧭 Assistente de Avaliação
        </h1>

        <p className="mt-3 text-slate-400">
          Sintomas → diagnósticos prováveis → perfil de medicamento. Uma
          ferramenta de apoio ao raciocínio clínico, não um substituto da
          avaliação médica.
        </p>
      </div>

      <AssistenteAvaliacao />
    </main>
  );
}
