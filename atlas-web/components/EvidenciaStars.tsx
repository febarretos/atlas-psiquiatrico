interface EvidenciaStarsProps {
  nivel: 1 | 2 | 3 | 4 | 5;
}

const rotulos: Record<number, string> = {
  5: "Primeira linha / forte recomendação",
  4: "Boa evidência, recomendação consistente",
  3: "Segunda linha ou evidência moderada",
  2: "Evidência limitada / uso mais seletivo",
  1: "Off-label, evidência restrita",
};

export default function EvidenciaStars({
  nivel,
}: EvidenciaStarsProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5"
      title={rotulos[nivel]}
    >
      <span
        className="tracking-tight text-amber-400"
        aria-hidden="true"
      >
        {"★".repeat(nivel)}
        <span className="text-slate-700">{"★".repeat(5 - nivel)}</span>
      </span>

      <span className="sr-only">
        Nível de evidência: {nivel} de 5 — {rotulos[nivel]}
      </span>
    </span>
  );
}
