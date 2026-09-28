// لغتي — Service Worker للعمل بدون إنترنت
const CACHE_NAME = 'lughati-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/design-system.css',
  '/css/components.css',
  '/css/animations.css',
  '/css/responsive.css',
  '/css/features.css',
  '/css/advanced.css',
  '/data/content.js',
  '/data/vocabulary.js',
  '/data/courses.js',
  '/data/videos.js',
  '/data/resources.js',
  '/js/speech.js',
  '/js/quiz.js',
  '/js/dynamic-quiz.js',
  '/js/lessons.js',
  '/js/flashcards.js',
  '/js/games.js',
  '/js/conversation.js',
  '/js/achievements.js',
  '/js/assistant.js',
  '/js/smartbot.js',
  '/js/notifications.js',
  '/js/auth.js',
  '/js/path.js',
  '/js/progress.js',
  '/js/offline.js',
  '/js/app.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  // للصور الخارجية، استخدم الشبكة أولاً ثم الكاش
  if (e.request.url.includes('img.youtube.com')) {
    e.respondWith(
      caches.match(e.request).then(cached => cached ||
        fetch(e.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return response;
        }).catch(() => cached)
      )
    );
    return;
  }

  // للملفات المحلية: كاش أولاً ثم شبكة
  e.respondWith(
    caches.match(e.request).then(cached => cached ||
      fetch(e.request).then(response => {
        if (response.ok && e.request.url.startsWith(self.location.origin)) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        if (e.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      })
    )
  );
});
