interface BadgeProps {
  children: React.ReactNode;
  color?: "blue" | "green" | "yellow" | "red" | "gray";
}

const colors = {
  blue: "bg-accent-soft text-accent border-accent-border",
  green: "bg-ok-bg text-ok border-ok-border",
  yellow: "bg-warn-bg text-warn border-warn-border",
  red: "bg-alert-bg text-alert border-alert-border",
  gray: "bg-hover-warm text-ink-2 border-rule",
};

export default function Badge({
  children,
  color = "gray",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${colors[color]}`}
    >
      {children}
    </span>
  );
}
