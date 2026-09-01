/**
 * Service worker da Acquatec.
 *
 * Estrategia:
 *  - HTML (navegacoes) e JSON: SEMPRE rede primeiro. Isso evita o erro
 *    "Unexpected token '<' ... is not valid JSON", que acontecia quando um
 *    index.html antigo em cache pedia arquivos de um build que ja nao existe
 *    (o servidor responde o index.html no lugar e o JSON.parse quebra).
 *  - /assets/* (arquivos com hash no nome) e imagens: cache primeiro.
 *  - A versao do cache muda a cada build (__SW_VERSION__ e substituido no
 *    post-build), e o activate apaga tudo que for de versoes anteriores.
 */
const VERSION = '__SW_VERSION__';
const CACHE_NAME = `acquatec-${VERSION}`;
const PRECACHE = ['/logo-header-rodape-calhas-e-telhados-m2-ctba-pr-brasil.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .catch(() => undefined)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
      )
      .then(() => self.clients.claim())
  );
});

/** Somente arquivos com hash no nome e imagens podem ficar em cache. */
function isCacheable(url) {
  return (
    url.pathname.startsWith('/assets/') ||
    /\.(?:png|jpe?g|webp|gif|svg|ico|woff2?)$/i.test(url.pathname)
  );
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isDocument = request.mode === 'navigate' || request.destination === 'document';
  const isData = /\.(?:json|webmanifest|xml|txt)$/i.test(url.pathname);

  // HTML e dados: rede primeiro, cache so como plano B offline.
  if (isDocument || isData) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (isDocument && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/')))
    );
    return;
  }

  if (!isCacheable(url)) return;

  // Assets com hash: cache primeiro.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && response.ok && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});

// Permite forcar a atualizacao a partir da pagina.
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
