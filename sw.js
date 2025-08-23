// Service Worker for PWA capabilities
const CACHE_NAME = 'fikri-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/js/script.js',
  '/assets/images/profile.png',
  '/assets/images/orbit-dashboard.jpg',
  '/assets/images/fritana-website.jpg',
  '/assets/images/arabic-platform.jpg',
  '/assets/images/tabla-landing.png',
  '/assets/images/mahalo-platform.png',
  '/assets/images/orbit-pos.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});