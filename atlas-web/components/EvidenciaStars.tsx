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

const cor: Record<number, string> = {
  5: "bg-ok",
  4: "bg-ok",
  3: "bg-warn",
  2: "bg-alert",
  1: "bg-alert",
};

export default function EvidenciaStars({
  nivel,
}: EvidenciaStarsProps) {
  return (
    <span className="inline-flex items-center gap-2" title={rotulos[nivel]}>
      <span
        className="block h-[5px] w-[62px] overflow-hidden rounded-full bg-rule-soft"
        aria-hidden="true"
      >
        <span
          className={`block h-full ${cor[nivel]}`}
          style={{ width: `${nivel * 20}%` }}
        />
      </span>

      <span className="font-mono text-[11px] text-ink-3">{nivel}/5</span>

      <span className="sr-only">
        Nível de evidência: {nivel} de 5 — {rotulos[nivel]}
      </span>
    </span>
  );
}
