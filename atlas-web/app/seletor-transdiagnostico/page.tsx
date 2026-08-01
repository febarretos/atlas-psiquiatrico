import SeletorTransdiagnostico from "../../components/SeletorTransdiagnostico";

export default function SeletorTransdiagnosticoPage() {
  return (
    <main className="mx-auto max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          🎯 Seletor Transdiagnóstico
        </h1>

        <p className="mt-3 text-slate-400">
          Escolha por perfil do paciente — cruze múltiplos alvos clínicos e
          compare o perfil de efeitos entre os candidatos.
        </p>
      </div>

      <SeletorTransdiagnostico />
    </main>
  );
}
