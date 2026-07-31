interface PropertyProps {
  label: string;
  value: React.ReactNode;
}

export default function Property({
  label,
  value,
}: PropertyProps) {
  return (
    <div className="flex items-start justify-between border-b border-slate-800 py-3 gap-6">
      <span className="font-medium text-slate-400 min-w-[180px]">
        {label}
      </span>

      <div className="flex-1 text-right text-white">
        {value}
      </div>
    </div>
  );
}