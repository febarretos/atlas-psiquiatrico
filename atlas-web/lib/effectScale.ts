// Escala categórica compartilhada para os eixos de efeito (ganho de peso,
// sedação, disfunção sexual, QT, risco metabólico, EPS etc.) — usada por
// Rating, EffectRadarChart e pela tabela de Medicamentos. Baseada na escala
// de 7 níveis do redesenho: Nenhum(a) 5% · Muito baixo(a) 15% · Baixo(a) 35% ·
// Leve / Baixa a moderada 50% · Moderado(a) 65% · Alto(a) 85% · Muito alto(a) 100%.
export type EffectLevel =
  | "nenhum"
  | "muitobaixo"
  | "baixo"
  | "leve"
  | "moderado"
  | "alto"
  | "muitoalto";

export const EFFECT_COLORS: Record<EffectLevel, string> = {
  nenhum: "bg-ok",
  muitobaixo: "bg-ok",
  baixo: "bg-ok",
  leve: "bg-warn",
  moderado: "bg-warn",
  alto: "bg-alert",
  muitoalto: "bg-alert",
};

export const EFFECT_TEXT_COLORS: Record<EffectLevel, string> = {
  nenhum: "text-ok",
  muitobaixo: "text-ok",
  baixo: "text-ok",
  leve: "text-warn",
  moderado: "text-warn",
  alto: "text-alert",
  muitoalto: "text-alert",
};

export const EFFECT_LABELS: Record<EffectLevel, string> = {
  nenhum: "Nenhum",
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
  nenhum: 5,
  muitobaixo: 15,
  baixo: 35,
  leve: 50,
  moderado: 65,
  alto: 85,
  muitoalto: 100,
};

// Tabela de correspondência exata (não heurística) entre os rótulos usados
// em data/medicamentos e os níveis acima — cobre variações de gênero
// ("Baixo"/"Baixa") e rótulos compostos ("Baixa a moderada") que uma troca
// de sufixo simples não resolveria.
const ROTULOS: Record<string, EffectLevel> = {
  "nenhum": "nenhum",
  "nenhuma": "nenhum",
  "muito baixo": "muitobaixo",
  "muito baixa": "muitobaixo",
  "baixo": "baixo",
  "baixa": "baixo",
  "leve": "leve",
  "baixa a moderada": "leve",
  "moderado": "moderado",
  "moderada": "moderado",
  "alto": "alto",
  "alta": "alto",
  "muito alto": "muitoalto",
  "muito alta": "muitoalto",
};

export function normalizeEffectKey(value: string): EffectLevel | null {
  const normalized = value.trim().toLowerCase();
  return ROTULOS[normalized] ?? null;
}

export function effectFraction(value: string): number {
  const key = normalizeEffectKey(value);
  return key ? EFFECT_WIDTHS[key] / 100 : 0.5;
}
