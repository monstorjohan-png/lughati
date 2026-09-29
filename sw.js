// لغتي — Service Worker للعمل بدون إنترنت
const CACHE_NAME = 'lughati-v6';
const ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png',
  '/css/design-system.css',
  '/css/components.css',
  '/css/animations.css',
  '/css/responsive.css',
  '/css/features.css',
  '/css/advanced.css',
  '/css/media.css',
  '/css/lesson-engine.css',
  '/data/content.js',
  '/data/vocabulary.js',
  '/data/courses.js',
  '/data/course-content.js',
  '/data/course-content-extra.js',
  '/data/videos.js',
  '/data/resources.js',
  '/js/speech.js',
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
  '/js/downloads.js',
  '/js/pwa.js',
  './js/app.js'
];

// تحويل المسارات المطلقة إلى نسبية حتى تعمل تحت مجلد فرعي (GitHub Pages: /lughati/)
const REL_ASSETS = ASSETS.map((u) => (u === '/' ? './' : u.replace(/^\//, './')));

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(REL_ASSETS.map((url) =>
        cache.add(new Request(url, { cache: 'reload' })).catch(() => {})
      ))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // صور يوتيوب الخارجية: كاش أولاً ثم الشبكة
  if (url.hostname === 'i.ytimg.com' || e.request.url.includes('img.youtube.com')) {
    e.respondWith(
      caches.match(e.request).then((cached) => cached ||
        fetch(e.request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return response;
        }).catch(() => cached || Response.error())
      )
    );
    return;
  }

  // بقية المواقع الخارجية: لا نتدخل (الشبكة مباشرة)
  if (url.origin !== self.location.origin) return;

  // الملفات المحلية: الشبكة أولاً (مع تجاهل الكاش المؤقت) لضمان وصول التحديثات ثم الكاش
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then((response) => {
      if (response && response.ok && response.type === 'basic') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
      }
      return response;
    }).catch(() =>
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        if (e.request.mode === 'navigate') return caches.match('./index.html');
        return Response.error();
      })
    )
  );
});
