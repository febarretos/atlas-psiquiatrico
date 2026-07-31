import Card from "../components/Card";

const modulos = [
  {
    titulo: "🧭 Assistente de Avaliação",
    descricao: "Sintomas → diagnósticos prováveis → perfil de medicamento",
    href: "/assistente",
  },
  {
    titulo: "🚨 Emergências",
    descricao: "Reconhecimento e conduta em quadros agudos com risco de vida",
    href: "/emergencias",
  },
  {
    titulo: "💊 Medicamentos",
    descricao: "Biblioteca completa de psicofármacos",
    href: "/medicamentos",
  },
  {
    titulo: "🧠 Diagnósticos",
    descricao: "DSM-5-TR, CID-11 e diferenciais",
    href: "/diagnosticos",
  },
  {
    titulo: "📋 Escalas",
    descricao: "Escalas com cálculo automático",
    href: "/escalas",
  },
  {
    titulo: "🧮 Calculadoras",
    descricao: "Ferramentas clínicas",
    href: "/calculadoras",
  },
  {
    titulo: "🌳 Fluxogramas",
    descricao: "Algoritmos diagnósticos e terapêuticos",
    href: "/fluxogramas",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white">
          Atlas Psiquiátrico
        </h1>

        <p className="mt-3 text-slate-400">
          Biblioteca clínica para consulta rápida baseada em evidências.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {modulos.map((m) => (
          <Card
            key={m.href}
            titulo={m.titulo}
            descricao={m.descricao}
            href={m.href}
          />
        ))}
      </div>
    </main>
  );
}