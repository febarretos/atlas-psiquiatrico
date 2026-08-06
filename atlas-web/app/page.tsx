import Card from "../components/Card";

const modulos = [
  {
    titulo: "🧭 Assistente de Medicação",
    descricao: "Por sintomas, por condições-alvo ou comparação manual — escolha de medicamento",
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
    titulo: "🧩 Psicopatologia",
    descricao: "Semiologia psiquiátrica, com diferenciação fina entre achados",
    href: "/psicopatologia",
  },
  {
    titulo: "🩺 Casos Clínicos",
    descricao: "Vinhetas interativas — raciocínio diagnóstico passo a passo",
    href: "/casos-clinicos",
  },
  {
    titulo: "📋 Escalas",
    descricao: "Escalas com cálculo automático",
    href: "/escalas",
  },
  {
    titulo: "🌳 Fluxogramas",
    descricao: "Algoritmos diagnósticos e terapêuticos",
    href: "/fluxogramas",
  },
  {
    titulo: "🗂️ Entrevista SCID-5-CV",
    descricao: "Checklist de apoio à entrevista estruturada, por módulos diagnósticos",
    href: "/entrevista-scid",
  },
  {
    titulo: "🎮 Simulador de Psiquiatria",
    descricao: "Casos narrativos em árvore de decisão — tom leve, fundamento clínico exato",
    href: "/simulador",
  },
  {
    titulo: "🚨 Simulador de Emergência",
    descricao: "Jogo de tensão em tempo real — sinais vitais evoluem por turno, banco de casos das Emergências",
    href: "/simulador-emergencia",
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