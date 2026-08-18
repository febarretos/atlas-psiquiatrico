import {
  EFFECT_COLORS,
  EFFECT_LABELS,
  EFFECT_TEXT_COLORS,
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
      <div className="h-1.5 w-[90px] overflow-hidden rounded-full bg-rule-soft">
        <div
          className={`h-full ${key ? EFFECT_COLORS[key] : "bg-ink-4"}`}
          style={{
            width: `${key ? EFFECT_WIDTHS[key] : 50}%`,
          }}
        />
      </div>

      <span
        className={`font-mono text-[11.5px] ${key ? EFFECT_TEXT_COLORS[key] : "text-ink-3"}`}
      >
        {key ? EFFECT_LABELS[key] : value}
      </span>
    </div>
  );
}
