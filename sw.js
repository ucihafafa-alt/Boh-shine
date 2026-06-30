// v4: minimal service worker. Cache барьж хуучин код гацахаас сэргийлсэн.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
