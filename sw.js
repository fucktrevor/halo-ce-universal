// The site moved to /HCE-Mobile/. This replaces the old app's service worker
// so it stops serving the cached old build, then removes itself. Caches are
// left alone: they are shared with the new address on this origin.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach((client) => client.navigate(client.url));
  })());
});
