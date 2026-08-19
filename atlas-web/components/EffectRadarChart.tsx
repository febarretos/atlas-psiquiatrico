import { effectFraction } from "../lib/effectScale";

export interface PerfilEfeitos {
  nome: string;
  ganhoPeso: string;
  sedacao: string;
  sexual: string;
  qt: string;
}

interface Props {
  perfis: PerfilEfeitos[];
  size?: number;
}

const EIXOS: { chave: keyof Omit<PerfilEfeitos, "nome">; rotulo: string }[] = [
  { chave: "ganhoPeso", rotulo: "Peso" },
  { chave: "sedacao", rotulo: "Sedação" },
  { chave: "sexual", rotulo: "Sexual" },
  { chave: "qt", rotulo: "QT" },
];

const PALETA = ["#2E5487", "#34d399", "#fbbf24", "#f472b6", "#a78bfa", "#22d3ee"];

function ponto(cx: number, cy: number, raio: number, fracao: number, anguloDeg: number) {
  const rad = (anguloDeg * Math.PI) / 180;
  return {
    x: cx + raio * fracao * Math.cos(rad),
    y: cy + raio * fracao * Math.sin(rad),
  };
}

export default function EffectRadarChart({ perfis, size = 260 }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const raio = size * 0.32;
  const passo = 360 / EIXOS.length;
  const angulos = EIXOS.map((_, i) => -90 + i * passo);
  const grades = [0.2, 0.4, 0.6, 0.8, 1];

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {grades.map((g) => {
          const pts = angulos.map((a) => ponto(cx, cy, raio, g, a));
          return (
            <polygon
              key={g}
              points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="#E6E2D9"
              strokeWidth={1}
            />
          );
        })}

        {angulos.map((a, i) => {
          const p = ponto(cx, cy, raio, 1, a);
          return (
            <line
              key={EIXOS[i].chave}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="#E6E2D9"
              strokeWidth={1}
            />
          );
        })}

        {EIXOS.map((eixo, i) => {
          const p = ponto(cx, cy, raio, 1.22, angulos[i]);
          return (
            <text
              key={eixo.chave}
              x={p.x}
              y={p.y}
              fill="#75797F"
              fontSize={12}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {eixo.rotulo}
            </text>
          );
        })}

        {perfis.map((perfil, idx) => {
          const cor = PALETA[idx % PALETA.length];
          const pts = EIXOS.map((eixo, i) =>
            ponto(cx, cy, raio, effectFraction(perfil[eixo.chave]), angulos[i])
          );
          return (
            <polygon
              key={perfil.nome}
              points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
              fill={cor}
              fillOpacity={0.18}
              stroke={cor}
              strokeWidth={2}
            />
          );
        })}
      </svg>

      {perfis.length > 1 && (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
          {perfis.map((perfil, idx) => (
            <div key={perfil.nome} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: PALETA[idx % PALETA.length] }}
              />

              <span className="text-ink-2">{perfil.nome}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
