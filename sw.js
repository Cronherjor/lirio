self.addEventListener('fetch', (event) => {
    // Esto permite que la web sea instalable como App
    event.respondWith(fetch(event.request));
});