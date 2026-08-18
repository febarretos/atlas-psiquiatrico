interface ListaProps {
  itens: string[];
}

export default function Lista({ itens }: ListaProps) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-ink-2 marker:text-ink-4">
      {itens.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}
