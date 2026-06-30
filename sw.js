// v3.2: service worker-ийг түр минимал болгосон. Cache алдаа үүсгэхгүй.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
