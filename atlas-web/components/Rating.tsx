interface RatingProps {
  value: string;
}

const colors: Record<string, string> = {
  MuitoBaixo: "bg-green-500",
  Baixo: "bg-green-400",
  Leve: "bg-lime-400",
  Moderado: "bg-yellow-400",
  Alto: "bg-orange-500",
  MuitoAlto: "bg-red-600",
};

const labels: Record<string, string> = {
  MuitoBaixo: "Muito baixo",
  Baixo: "Baixo",
  Leve: "Leve",
  Moderado: "Moderado",
  Alto: "Alto",
  MuitoAlto: "Muito alto",
};

export default function Rating({ value }: RatingProps) {
  const key = value.replace(/\s/g, "");

  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-28 rounded-full bg-slate-700 overflow-hidden">
        <div
          className={`h-full ${colors[key] ?? "bg-slate-500"}`}
          style={{
            width:
              key === "MuitoBaixo"
                ? "15%"
                : key === "Baixo"
                ? "35%"
                : key === "Leve"
                ? "50%"
                : key === "Moderado"
                ? "65%"
                : key === "Alto"
                ? "85%"
                : key === "MuitoAlto"
                ? "100%"
                : "50%",
          }}
        />
      </div>

      <span className="text-sm text-slate-300">
        {labels[key] ?? value}
      </span>
    </div>
  );
}