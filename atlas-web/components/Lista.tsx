interface ListaProps {
  itens: string[];
}

export default function Lista({ itens }: ListaProps) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}