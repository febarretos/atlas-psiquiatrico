interface BadgeProps {
  children: React.ReactNode;
  color?: "blue" | "green" | "yellow" | "red" | "gray";
}

const colors = {
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  green: "bg-green-500/20 text-green-300 border-green-500/30",
  yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  red: "bg-red-500/20 text-red-300 border-red-500/30",
  gray: "bg-slate-700/30 text-slate-300 border-slate-700",
};

export default function Badge({
  children,
  color = "gray",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${colors[color]}`}
    >
      {children}
    </span>
  );
}