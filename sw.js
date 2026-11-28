/* SHRAPNEL offline shell. Bump CACHE when shipping a new build. */
const CACHE = 'shrapnel-v1-10';
const ASSETS = [
  "./",
  "./assets/barlow-condensed-latin-500-normal-BgYH2mbd.woff2",
  "./assets/barlow-condensed-latin-500-normal-HIEiP5Ov.woff",
  "./assets/barlow-condensed-latin-700-normal-Dmwat-ge.woff",
  "./assets/barlow-condensed-latin-700-normal-v1xN8_Wq.woff2",
  "./assets/index-CJIiXzvk.js",
  "./assets/index-DmWr-ar2.css",
  "./assets/teko-latin-500-normal-CnS-PWFz.woff2",
  "./assets/teko-latin-500-normal-DJUwy4_e.woff",
  "./assets/teko-latin-600-normal-CSggg3rU.woff",
  "./assets/teko-latin-600-normal-Cj5MAY47.woff2",
  "./favicon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./index.html",
  "./manifest.webmanifest",
  "./portraits/abby.webp",
  "./portraits/amara.webp",
  "./portraits/bo.webp",
  "./portraits/calloway_rex.webp",
  "./portraits/calloway_rhea.webp",
  "./portraits/ch_glacier.webp",
  "./portraits/ch_kestrel.webp",
  "./portraits/ch_viper.webp",
  "./portraits/dax.webp",
  "./portraits/felix.webp",
  "./portraits/gus.webp",
  "./portraits/hank.webp",
  "./portraits/hiro.webp",
  "./portraits/ingrid.webp",
  "./portraits/isabela.webp",
  "./portraits/kade.webp",
  "./portraits/kenji.webp",
  "./portraits/kira.webp",
  "./portraits/lena.webp",
  "./portraits/m_doc.webp",
  "./portraits/m_fuma.webp",
  "./portraits/m_fuma_lock.webp",
  "./portraits/m_grim.webp",
  "./portraits/m_showtime.webp",
  "./portraits/m_tanaka.webp",
  "./portraits/magnus.webp",
  "./portraits/mara.webp",
  "./portraits/maya.webp",
  "./portraits/odin.webp",
  "./portraits/otis.webp",
  "./portraits/priya.webp",
  "./portraits/rosa.webp",
  "./portraits/ruben.webp",
  "./portraits/sergei.webp",
  "./portraits/tomas.webp",
  "./portraits/ug_brick.webp",
  "./portraits/ug_furnace.webp",
  "./portraits/ug_kingpin.webp",
  "./portraits/ug_rat.webp",
  "./portraits/vulcan.webp",
  "./portraits/yuki.webp",
  "./portraits/zara.webp",
  "./story/dealer_booth.webp"
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const url of ASSETS) {
      try { await cache.add(url); } catch (e) { /* one miss must not fail the whole install */ }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy)).catch(() => {});
      }
      return response;
    } catch (e) {
      const dest = event.request.destination;
      const nav = event.request.mode === 'navigate' || dest === 'document';
      // Never fall back to index.html for scripts/styles — that leaves the boot
      // screen up forever when a PWA update races or the network blips.
      if (nav) return (await caches.match('./index.html')) || Promise.reject(e);
      return Promise.reject(e);
    }
  })());
});
