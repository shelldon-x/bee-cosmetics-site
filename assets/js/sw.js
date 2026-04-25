/* =========================================================
   BEE COSMETICS — Service Worker (sw.js)
   Estratégia:
   - Cache-first para assets estáticos (CSS, JS, fontes, imagens)
   - Network-first para HTML (sempre busca a versão mais nova)
   - Stale-while-revalidate para Open Graph e ícones
   - Bypass total para POST/analytics/marketplaces externos
   --------------------------------------------------------- */

const VERSION = 'bee-v1.0.0';
const STATIC_CACHE = `bee-static-${VERSION}`;
const RUNTIME_CACHE = `bee-runtime-${VERSION}`;

// Assets críticos cacheados na instalação
const CORE_ASSETS = [
  '/',
  '/assets/css/bee.css',
  '/assets/js/bee.js',
  '/site.webmanifest',
  '/logos/bee-logo-official.svg',
  '/logos/bee-icon-official.svg',
  '/logos/bee-logo-footer.svg'
];

// === INSTALL ===
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      return cache.addAll(CORE_ASSETS).catch(err => {
        console.warn('[sw] Falha em alguns assets core:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// === ACTIVATE — limpa caches antigos ===
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(k => k.startsWith('bee-') && k !== STATIC_CACHE && k !== RUNTIME_CACHE)
          .map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// === FETCH — estratégia por tipo ===
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Bypass: métodos não-GET, marketplaces, analytics, terceiros
  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  // HTML: network-first
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // CSS/JS: cache-first
  if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Imagens: cache-first
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Fontes: cache-first
  if (request.destination === 'font') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Default: network-first com fallback de cache
  event.respondWith(networkFirst(request));
});

// === Helpers ===
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.status === 200 && response.type === 'basic') {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return caches.match('/') || new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    return caches.match('/') || new Response('Offline', { status: 503 });
  }
}

// === MESSAGE — permite pular waiting por comando ===
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
