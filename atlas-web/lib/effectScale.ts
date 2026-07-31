export type EffectLevel =
  | "muitobaixo"
  | "baixo"
  | "leve"
  | "moderado"
  | "alto"
  | "muitoalto";

export const EFFECT_COLORS: Record<EffectLevel, string> = {
  muitobaixo: "bg-green-500",
  baixo: "bg-green-400",
  leve: "bg-lime-400",
  moderado: "bg-yellow-400",
  alto: "bg-orange-500",
  muitoalto: "bg-red-600",
};

export const EFFECT_LABELS: Record<EffectLevel, string> = {
  muitobaixo: "Muito baixo",
  baixo: "Baixo",
  leve: "Leve",
  moderado: "Moderado",
  alto: "Alto",
  muitoalto: "Muito alto",
};

// Também usado como fração (width / 100) para o gráfico radar, mantendo a
// mesma escala visual da barra de Rating.
export const EFFECT_WIDTHS: Record<EffectLevel, number> = {
  muitobaixo: 15,
  baixo: 35,
  leve: 50,
  moderado: 65,
  alto: 85,
  muitoalto: 100,
};

export function normalizeEffectKey(value: string): EffectLevel | null {
  const normalized = value.replace(/\s/g, "").toLowerCase();
  if (normalized in EFFECT_WIDTHS) return normalized as EffectLevel;

  const alternativo = normalized.replace(/a$/, "o");
  if (alternativo in EFFECT_WIDTHS) return alternativo as EffectLevel;

  return null;
}

export function effectFraction(value: string): number {
  const key = normalizeEffectKey(value);
  return key ? EFFECT_WIDTHS[key] / 100 : 0.5;
}
