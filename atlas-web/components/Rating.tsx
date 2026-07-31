import {
  EFFECT_COLORS,
  EFFECT_LABELS,
  EFFECT_WIDTHS,
  normalizeEffectKey,
} from "../lib/effectScale";

interface RatingProps {
  value: string;
}

export default function Rating({ value }: RatingProps) {
  const key = normalizeEffectKey(value);

  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-28 rounded-full bg-slate-700 overflow-hidden">
        <div
          className={`h-full ${key ? EFFECT_COLORS[key] : "bg-slate-500"}`}
          style={{
            width: `${key ? EFFECT_WIDTHS[key] : 50}%`,
          }}
        />
      </div>

      <span className="text-sm text-slate-300">
        {key ? EFFECT_LABELS[key] : value}
      </span>
    </div>
  );
}