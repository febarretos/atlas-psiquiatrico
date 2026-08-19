"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ServiceWorkerRegister() {
  const pathname = usePathname();
  const precacheDisparado = useRef(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  // O precache agora reporta falhas em vez de engoli-las em silêncio (ver
  // public/sw.js) — sem indicador visual ainda, mas ao menos fica visível
  // no console pra depuração, em vez de o app anunciar cobertura offline
  // completa quando parte do precache falhou.
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    function aoReceberMensagem(event: MessageEvent) {
      if (event.data?.type !== "PRECACHE_DONE") return;

      const { total, falhas, erro } = event.data;
      if (erro) {
        console.warn("[offline] não foi possível carregar a lista de páginas para precache.");
      } else if (falhas > 0) {
        console.warn(`[offline] ${falhas} de ${total} página(s) não puderam ser salvas para uso offline.`);
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

    navigator.serviceWorker.ready
      .then((registration) => {
        registration.active?.postMessage({ type: "PRECACHE_ALL" });
      })
      .catch(() => {});
  }, [pathname]);

  return null;
}
