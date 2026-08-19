export default function OfflinePage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center gap-4 py-24 text-center text-ink">
      <h1 className="text-3xl font-bold">Sem conexão</h1>

      <p className="text-ink-2">
        Esta página ainda não foi salva para uso offline. Conecte-se à
        internet e visite-a uma vez para que fique disponível
        automaticamente da próxima vez sem conexão.
      </p>
    </main>
  );
}
