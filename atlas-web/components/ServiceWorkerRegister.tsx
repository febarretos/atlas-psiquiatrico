"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type EstadoPrecache =
  | { fase: "baixando" }
  | { fase: "concluido"; total: number; falhas: number }
  | { fase: "erro" };

export default function ServiceWorkerRegister() {
  const pathname = usePathname();
  const precacheDisparado = useRef(false);
  const [estado, setEstado] = useState<EstadoPrecache | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  // O precache reporta total/falhas (ver public/sw.js) — ligado aqui num
  // indicador visível em vez de só console.warn, já que baixar ~180
  // páginas na primeira visita é um uso de dados perceptível que o usuário
  // deveria conseguir acompanhar (e, se falhar parcialmente, saber disso
  // em vez de o app anunciar cobertura offline completa por engano).
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    function aoReceberMensagem(event: MessageEvent) {
      if (event.data?.type !== "PRECACHE_DONE") return;

      const { total, falhas, erro } = event.data;
      if (erro) {
        setEstado({ fase: "erro" });
        console.warn("[offline] não foi possível carregar a lista de páginas para precache.");
      } else {
        setEstado({ fase: "concluido", total, falhas });
        if (falhas > 0) {
          console.warn(`[offline] ${falhas} de ${total} página(s) não puderam ser salvas para uso offline.`);
        }
      }
    }

    navigator.serviceWorker.addEventListener("message", aoReceberMensagem);
    return () => navigator.serviceWorker.removeEventListener("message", aoReceberMensagem);
  }, []);

  // Login acontece via navegação client-side (sem recarregar a página), então
  // esse efeito precisa reagir a mudanças de rota, não só rodar uma vez no
  // mount — senão o gatilho nunca dispara depois do login.
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (pathname === "/login") return;
    if (precacheDisparado.current) return;

    precacheDisparado.current = true;
    setEstado({ fase: "baixando" });

    navigator.serviceWorker.ready
      .then((registration) => {
        registration.active?.postMessage({ type: "PRECACHE_ALL" });
      })
      .catch(() => {});
  }, [pathname]);

  if (!estado) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 print:hidden md:bottom-6 md:left-6 md:translate-x-0">
      {estado.fase === "baixando" && (
        <div className="flex items-center gap-2.5 rounded-lg border border-rule bg-panel px-4 py-2.5 text-xs text-ink-2 shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          Preparando o app para uso offline…
        </div>
      )}

      {estado.fase === "concluido" && estado.falhas === 0 && (
        <button
          type="button"
          onClick={() => setEstado(null)}
          className="rounded-lg border border-ok-border bg-ok-bg px-4 py-2.5 text-xs text-ok shadow-sm"
        >
          Disponível offline ✓ — toque para dispensar
        </button>
      )}

      {estado.fase === "concluido" && estado.falhas > 0 && (
        <button
          type="button"
          onClick={() => setEstado(null)}
          className="rounded-lg border border-warn-border bg-warn-bg px-4 py-2.5 text-xs text-warn shadow-sm"
        >
          {estado.falhas} de {estado.total} página(s) não ficaram disponíveis offline — toque para
          dispensar
        </button>
      )}

      {estado.fase === "erro" && (
        <button
          type="button"
          onClick={() => setEstado(null)}
          className="rounded-lg border border-alert-border bg-alert-bg px-4 py-2.5 text-xs text-alert shadow-sm"
        >
          Não foi possível preparar o uso offline — toque para dispensar
        </button>
      )}
    </div>
  );
}
