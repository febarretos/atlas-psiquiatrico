interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Pesquisar...",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative">
      <svg
        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        />
      </svg>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-rule bg-panel py-2.5 pl-11 pr-4 text-[16px] text-ink placeholder:text-ink-3 outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
