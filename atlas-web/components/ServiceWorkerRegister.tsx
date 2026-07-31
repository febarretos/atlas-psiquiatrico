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
