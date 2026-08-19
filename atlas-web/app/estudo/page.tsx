import EstudoApp from "../../components/estudo/EstudoApp";

export default function EstudoPage() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-ink">Modo de Estudo</h1>
        <p className="mt-3 text-ink-2">
          Flashcards gerados a partir do conteúdo já cadastrado no Atlas —
          sintomas-chave, faixas de escalas, diferenciais e pérolas
          clínicas. Nada é salvo entre sessões.
        </p>
      </div>

      <EstudoApp />
    </main>
  );
}
