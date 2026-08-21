const CACHE_NAME = "atlas-psiquiatrico-v3";
const OFFLINE_URL = "/offline";
const PRECACHE_URLS = ["/", OFFLINE_URL];
const ASSET_URL_PATTERN = /\/_next\/static\/[^"'()\s]+/g;
// Rede "lie-fi" (tecnicamente online, efetivamente travada) não deve
// prender a navegação — depois desse tempo, cai pro cache/offline em vez
// de esperar indefinidamente por uma resposta que pode nunca chegar.
const NAVEGACAO_TIMEOUT_MS = 4000;

self.addEventListener("install", (event) => {
  event.waitUntil(
    // cache.addAll é tudo-ou-nada: se "/offline" falhar, "/" também não
    // entrava no cache. cache.add por URL, tolerando falha individual,
    // evita que uma falha isolada derrube o precache inteiro.
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.all(PRECACHE_URLS.map((url) => cache.add(url).catch(() => {})))
      )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
  );
  self.clients.claim();
});

// Disparado pela página (ServiceWorkerRegister) só depois de autenticado,
// pra baixar todo o conteúdo de uma vez e o app funcionar offline completo
// desde o primeiro uso, sem precisar visitar cada página manualmente antes.
// Falhas individuais de fetch/cache não abortam o precache como um todo
// (uma página fora do ar não deve impedir as demais de ficarem
// disponíveis offline), mas precisam ser contadas e reportadas de volta
// à aba — antes eram engolidas em silêncio e o app anunciava cobertura
// offline completa mesmo quando parte do precache tinha falhado.
async function precacheAll(client) {
  const cache = await caches.open(CACHE_NAME);

  let pageUrls;
  try {
    const res = await fetch("/offline-urls.json");
    pageUrls = await res.json();
  } catch {
    client?.postMessage({ type: "PRECACHE_DONE", total: 0, falhas: 0, erro: true });
    return;
  }

  let falhas = 0;
  const assetUrls = new Set();

  await Promise.all(
    pageUrls.map((url) =>
      fetch(url)
        .then(async (res) => {
          if (!res.ok) {
            falhas++;
            return;
          }

          const texto = await res.clone().text();
          for (const match of texto.matchAll(ASSET_URL_PATTERN)) {
            assetUrls.add(match[0]);
          }

          return cache.put(url, res);
        })
        .catch(() => {
          falhas++;
        })
    )
  );

  await Promise.all(
    [...assetUrls].map((url) =>
      fetch(url)
        .then((res) => {
          if (res.ok) return cache.put(url, res);
        })
        .catch(() => {})
    )
  );

  client?.postMessage({ type: "PRECACHE_DONE", total: pageUrls.length, falhas });
}

self.addEventListener("message", (event) => {
  if (event.data?.type === "PRECACHE_ALL") {
    event.waitUntil(precacheAll(event.source));
  }
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET" || !request.url.startsWith(self.location.origin)) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        // O fetch em si nunca é cancelado — mesmo que a corrida abaixo
        // caia pro cache por timeout, esta promise segue rodando em
        // segundo plano e ainda atualiza o cache se/quando responder.
        const fetchPromise = fetch(request)
          .then((response) => {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
            return response;
          })
          .catch(() => null);

        const timeout = new Promise((resolve) =>
          setTimeout(resolve, NAVEGACAO_TIMEOUT_MS, null)
        );

        const resposta = await Promise.race([fetchPromise, timeout]);
        if (resposta) return resposta;

        const cached = await caches.match(request);
        if (cached) return cached;

        // Sem nada em cache: só aí vale esperar a rede lenta terminar de
        // verdade, em vez de desistir com o timeout curto.
        return (await fetchPromise) ?? (await caches.match(OFFLINE_URL));
      })()
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(() => cached);

      return cached ?? fetchPromise;
    })
  );
});
