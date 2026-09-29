// ========================================
// تنزيل الفيديو فعلياً للعرض بدون إنترنت
// التخزين: IndexedDB (ملفات حقيقية في المتصفح)
// ========================================

const DownloadsDB = {
  DB_NAME: 'lughati_downloads',
  STORE: 'videos',
  _ready: null,

  ready() {
    if (this._ready) return this._ready;
    this._ready = new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) {
        reject(new Error('التخزين الدائم غير مدعوم في هذا المتصفح'));
        return;
      }
      const req = indexedDB.open(this.DB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.STORE)) {
          db.createObjectStore(this.STORE, { keyPath: 'id' });
        }
      };
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror = () => reject(req.error || new Error('تعذر فتح قاعدة البيانات'));
    });
    return this._ready;
  },

  _run(mode, fn) {
    return this.ready().then((db) => new Promise((resolve, reject) => {
      let out;
      let req;
      try {
        const tx = db.transaction(this.STORE, mode);
        req = fn(tx.objectStore(this.STORE));
        if (req) req.onsuccess = () => { out = req.result; };
        tx.oncomplete = () => resolve(out);
        tx.onerror = () => reject(tx.error || new Error('فشلت العملية'));
        tx.onabort = () => reject(tx.error || new Error('أُلغيت العملية'));
      } catch (err) {
        reject(err);
      }
    }));
  },

  put(rec) { return this._run('readwrite', (st) => st.put(rec)); },
  all() { return this._run('readonly', (st) => st.getAll()); },
  get(id) { return this._run('readonly', (st) => st.get(id)); },
  remove(id) { return this._run('readwrite', (st) => st.delete(id)); },
  clear() { return this._run('readwrite', (st) => st.clear()); }
};

const VideoDownloader = {
  _urls: {},        // id -> objectURL
  _busy: {},        // id -> { percent, label }
  MAX_BYTES: 500 * 1024 * 1024,

  // ---------- أدوات مساعدة ----------
  fmtSize(bytes) {
    if (!bytes) return '0';
    const units = ['B', 'KB', 'MB', 'GB'];
    let i = 0;
    let n = bytes;
    while (n >= 1024 && i < units.length - 1) { n /= 1024; i++; }
    return `${n.toFixed(n >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
  },

  _setBusy(id, percent, label) {
    this._busy[id] = { percent, label };
    renderDownloads();
  },

  _clearBusy(id) {
    delete this._busy[id];
    renderDownloads();
  },

  // ---------- الحفظ ----------
  detectKind(url, mime) {
    if (mime && mime.indexOf('image/') === 0) return 'image';
    if (mime && mime.indexOf('video/') === 0) return 'video';
    const clean = String(url || '').split('?')[0].toLowerCase();
    if (/\.(jpg|jpeg|png|gif|webp|svg|bmp|avif|ico)$/.test(clean)) return 'image';
    if (/\.(mp4|webm|mkv|mov|m4v|ogv|avi)$/.test(clean)) return 'video';
    return 'video';
  },

  extFromMime(mime) {
    const map = {
      'video/mp4': '.mp4', 'video/webm': '.webm', 'video/quicktime': '.mov',
      'video/x-matroska': '.mkv', 'video/ogg': '.ogv', 'video/avi': '.avi',
      'image/jpeg': '.jpg', 'image/png': '.png', 'image/gif': '.gif',
      'image/webp': '.webp', 'image/svg+xml': '.svg', 'image/bmp': '.bmp',
      'image/avif': '.avif'
    };
    return map[(mime || '').split(';')[0].trim()] || '';
  },

  async _save(id, title, blob, source, kind) {
    const safeId = String(id).replace(/[^A-Za-z0-9_-]/g, '') || (`v_${Date.now()}`);
    delete this._busy[id];
    delete this._busy[safeId];
    const rec = {
      id: safeId,
      title: title || 'ملف',
      source,
      kind: kind || this.detectKind('', blob.type),
      mime: blob.type || 'video/mp4',
      size: blob.size,
      blob,
      savedAt: new Date().toISOString()
    };
    await DownloadsDB.put(rec);
    if (this._urls[safeId]) { URL.revokeObjectURL(this._urls[safeId]); delete this._urls[safeId]; }
    if (this._urls[id]) { URL.revokeObjectURL(this._urls[id]); delete this._urls[id]; }
    if (typeof addActivity === 'function') addActivity(`نزّلت ${rec.kind === 'image' ? 'صورة' : 'فيديو'}: ${rec.title}`);
    if (typeof showToast === 'function') showToast(`تم تنزيل ${rec.kind === 'image' ? 'الصورة' : 'الفيديو'} — متاح الآن بدون إنترنت`);
    renderDownloads();
    if (typeof renderSavedVideos === 'function') renderSavedVideos();
    return rec;
  },

  // إضافة فيديو أو صورة من ملف على الجهاز
  async saveFromFile(file, meta) {
    const m = meta || {};
    const id = m.id || (`file_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`);
    try {
      const rec = await this._save(id, m.title || file.name, file, 'file', this.detectKind(file.name, file.type));
      if (m.onDone) m.onDone(rec);
      return rec;
    } catch (e) {
      if (typeof showToast === 'function') showToast('تعذر حفظ الملف: ' + e.message, 'error');
      return null;
    }
  },

  // تنزيل من رابط مباشر (فيديو أو صورة)
  async saveFromUrl(url, meta) {
    const m = meta || {};
    const id = m.id || (`url_${Date.now()}`);
    const kind = m.kind || this.detectKind(url, '');
    const fallbackTitle = decodeURIComponent(String(url).split('/').pop().split('?')[0]) || 'ملف';
    this._setBusy(id, 0, 'جاري الاتصال...');
    try {
      const res = await fetch(url, { mode: 'cors', credentials: 'omit' });
      if (!res.ok) throw new Error(`رقم الخطأ ${res.status}`);
      const total = Number(res.headers.get('content-length')) || 0;
      const cType = (res.headers.get('content-type') || '').split(';')[0].trim();
      if (!res.body || !res.body.getReader) {
        const blob = await res.blob();
        this._setBusy(id, 100, 'جاري الحفظ...');
        return await this._save(id, m.title || fallbackTitle, blob, 'url', this.detectKind(url, cType));
      }
      const reader = res.body.getReader();
      const chunks = [];
      let received = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (received > this.MAX_BYTES) {
          reader.cancel();
          throw new Error('حجم الملف أكبر من الحد المسموح (500MB)');
        }
        if (total) this._setBusy(id, Math.min(99, Math.round((received / total) * 100)), `${this.fmtSize(received)} / ${this.fmtSize(total)}`);
        else this._setBusy(id, 50, this.fmtSize(received));
      }
      const blob = new Blob(chunks, { type: cType || (kind === 'image' ? 'image/jpeg' : 'video/mp4') });
      return await this._save(id, m.title || fallbackTitle, blob, 'url', this.detectKind(url, cType));
    } catch (e) {
      this._clearBusy(id);
      if (typeof showToast === 'function') showToast('فشل التنزيل: ' + e.message, 'error');
      return null;
    }
  },

  // ---------- مصادر تنزيل فيديوهات يوتيوب ----------
  SOURCES: [
    { shape: 'piped', url: (id) => `https://pipedapi.kavin.rocks/streams/${id}` },
    { shape: 'piped', url: (id) => `https://pipedapi.adminforge.de/streams/${id}` },
    { shape: 'piped', url: (id) => `https://api.piped.private.coffee/streams/${id}` },
    { shape: 'piped', url: (id) => `https://pipedapi.reallyaweso.me/streams/${id}` },
    { shape: 'piped', url: (id) => `https://pipedapi.drgns.space/streams/${id}` },
    { shape: 'piped', url: (id) => `https://watchapi.whatever.social/streams/${id}` },
    { shape: 'invidious', url: (id) => `https://inv.nadeko.net/api/v1/videos/${id}` },
    { shape: 'invidious', url: (id) => `https://yewtu.be/api/v1/videos/${id}` },
    { shape: 'invidious', url: (id) => `https://invidious.nerdvpn.de/api/v1/videos/${id}` },
    { shape: 'invidious', url: (id) => `https://iv.melmac.space/api/v1/videos/${id}` },
    { shape: 'invidious', url: (id) => `https://invidious.f5.si/api/v1/videos/${id}` },
    { shape: 'invidious', url: (id) => `https://invidious.privacyredirect.com/api/v1/videos/${id}` }
  ],

  // توحيد شكل الاستجابة بين المصادر
  normalize(data, shape) {
    if (!data) return null;
    if (shape === 'piped') {
      if (!Array.isArray(data.videoStreams)) return null;
      return {
        title: data.title,
        streams: data.videoStreams.filter((s) => s && s.url).map((s) => ({
          url: s.url, quality: s.quality, videoOnly: !!s.videoOnly, mimeType: s.mimeType || ''
        }))
      };
    }
    if (shape === 'invidious') {
      if (!Array.isArray(data.formatStreams) || !data.formatStreams.length) return null;
      return {
        title: data.title,
        streams: data.formatStreams.filter((f) => f && f.url).map((f) => ({
          url: f.url,
          quality: f.quality,
          videoOnly: false,
          mimeType: f.type || `video/${f.container || 'mp4'}`
        }))
      };
    }
    return null;
  },

  PROXIES: [
    (u) => `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(u)}`,
    (u) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
    (u) => `https://corsproxy.org/?${encodeURIComponent(u)}`,
    (u) => `https://corsproxy.io/?${encodeURIComponent(u)}`
  ],

  // البحث عن مصدر صالح مع مهلة زمنية حتى لا يتأخر المستخدم
  async _resolveSource(videoId, onProgress) {
    const deadline = Date.now() + 22000;
    let step = 0;

    // المرحلة 1: مباشرة من كل المصادر
    for (const src of this.SOURCES) {
      if (Date.now() > deadline) break;
      step++;
      if (onProgress) onProgress(`جاري البحث عن مصدر الفيديو (${step}/${this.SOURCES.length})`);
      const data = await this._fetchJSON(src.url(videoId), false);
      const norm = this.normalize(data, src.shape);
      if (norm && norm.streams.length) return norm;
    }

    // المرحلة 2: عبر كُراسات CORS
    step = 0;
    for (const src of this.SOURCES) {
      if (Date.now() > deadline) break;
      step++;
      if (onProgress) onProgress(`جاري مصادر بديلة (${step})...`);
      const data = await this._fetchJSON(src.url(videoId), true);
      const norm = this.normalize(data, src.shape);
      if (norm && norm.streams.length) return norm;
    }
    return null;
  },

  async _fetchJSON(url, viaProxy) {
    const attempts = viaProxy ? this.PROXIES.map((p) => p(url)) : [url];
    for (const u of attempts) {
      try {
        const res = await this._get(u, 7000);
        if (!res.ok) continue;
        const data = await res.json();
        if (data && !data.error && (data.videoStreams || data.formatStreams || data.title)) return data;
      } catch (e) { /* جرّب التالي */ }
    }
    return null;
  },

  async _get(url, timeout) {
    const ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    const timer = ctrl ? setTimeout(() => ctrl.abort(), timeout) : null;
    try {
      return await fetch(url, ctrl ? { cache: 'no-store', signal: ctrl.signal } : { cache: 'no-store' });
    } finally {
      if (timer) clearTimeout(timer);
    }
  },

  async _fetchBlob(url, onProgress) {
    const attempts = [url].concat(this.PROXIES.map((p) => p(url)));
    const tryDeadline = Date.now() + 45000;
    let lastErr = null;
    for (const u of attempts) {
      if (Date.now() > tryDeadline) { lastErr = new Error('انتهت مهلة الاتصال'); break; }
      try {
        const res = await this._get(u, 15000);
        if (!res.ok) continue;
        const total = Number(res.headers.get('content-length')) || 0;
        if (total && total > this.MAX_BYTES) { lastErr = new Error('حجم أكبر من 500MB'); continue; }
        if (!res.body || !res.body.getReader) {
          const blob = await res.blob();
          if (blob.size > this.MAX_BYTES) { lastErr = new Error('حجم أكبر من 500MB'); continue; }
          return blob;
        }
        const reader = res.body.getReader();
        const chunks = [];
        let received = 0;
        const deadline = Date.now() + 240000;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          received += value.length;
          if (received > this.MAX_BYTES) { reader.cancel(); lastErr = new Error('حجم أكبر من 500MB'); break; }
          if (Date.now() > deadline) { reader.cancel(); lastErr = new Error('انتهت مهلة التنزيل'); break; }
          if (onProgress) onProgress(received, total);
        }
        if (received && received <= this.MAX_BYTES && Date.now() <= deadline) {
          return new Blob(chunks, { type: res.headers.get('content-type') || 'video/mp4' });
        }
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr || new Error('تعذر الوصول لملف الفيديو');
  },

  pickStream(data) {
    const streams = (data && data.videoStreams) || [];
    const withAudio = streams.filter((s) => s && s.url && !s.videoOnly);
    const mp4 = withAudio.filter((s) => !s.mimeType || s.mimeType.indexOf('mp4') > -1);
    const pool = mp4.length ? mp4 : withAudio;
    const q = (s) => parseInt(s.quality, 10) || 0;

    if (pool.length) {
      // جودة معقولة: حتى 720p لحجم خفيف وتنزيل سريع
      const moderate = pool.filter((s) => q(s) > 0 && q(s) <= 720);
      const chosen = moderate.length ? moderate : pool;
      chosen.sort((a, b) => q(b) - q(a));
      return chosen[0];
    }

    const any = streams.filter((s) => s && s.url);
    any.sort((a, b) => q(b) - q(a));
    return any[0] || null;
  },

  // التنزيل الرئيسي لفيديو يوتيوب
  async downloadYouTube(videoId, title, opts) {
    const silent = !!(opts && opts.silent);
    if (this._busy[videoId]) return null;
    this._setBusy(videoId, 2, 'جاري البحث عن مصدر الفيديو...');

    try {
      const source = await this._resolveSource(videoId, (label) => this._setBusy(videoId, 2, label));
      if (!source) throw new Error('no-source');

      const stream = this.pickStream({ videoStreams: source.streams });
      if (!stream) throw new Error('no-source');
      if (stream.quality) this._setBusy(videoId, 3, `جودة ${String(stream.quality).replace(/p$/i, '')}p — جاري التنزيل...`);

      const blob = await this._fetchBlob(stream.url, (received, total) => {
        const pct = total ? Math.min(99, Math.round((received / total) * 100)) : 50;
        this._setBusy(videoId, pct, `${this.fmtSize(received)}${total ? ' / ' + this.fmtSize(total) : ''}`);
      });

      this._setBusy(videoId, 100, 'جاري الحفظ...');
      const rec = await this._save(videoId, title || source.title || 'فيديو يوتيوب', blob, 'youtube', 'video');
      this._clearBusy(videoId);
      return rec;
    } catch (e) {
      this._clearBusy(videoId);
      if (!silent) this.showFallback(videoId, title, e.message);
      if (typeof showToast === 'function' && silent) showToast(`تعذر تنزيل «${title || videoId}»`, 'error');
      return null;
    }
  },

  // استخراج معرّف الفيديو من أي رابط يوتيوب
  extractYouTubeId(url) {
    const s = String(url || '').trim();
    let m = s.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
    if (m) return m[1];
    m = s.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
    if (m) return m[1];
    m = s.match(/\/(?:shorts|embed|live|v)\/([A-Za-z0-9_-]{6,})/);
    if (m) return m[1];
    return null;
  },

  // تنزيل من صندوق الرابط (يوتيوب / فيديو مباشر / صورة)
  async downloadFromInput() {
    const input = document.getElementById('dlUrlInput');
    const url = input ? String(input.value || '').trim() : '';
    if (!/^https?:\/\//i.test(url)) {
      showToast('الصق رابطاً صحيحاً يبدأ بـ http', 'error');
      return;
    }
    const yt = this.extractYouTubeId(url);
    if (yt) {
      if (input) input.value = '';
      return this.downloadYouTube(yt, 'فيديو من يوتيوب');
    }
    if (input) input.value = '';
    const name = decodeURIComponent(url.split('/').pop().split('?')[0]) || 'ملف';
    return this.saveFromUrl(url, { id: `url_${Date.now()}`, title: name });
  },

  // تنزيل سلسلة كاملة
  async downloadSeries(seriesId) {
    if (this._seriesRunning) { showToast('يوجد تنزيل جارٍ بالفعل', 'error'); return; }
    const series = (typeof VIDEO_DATA !== 'undefined' && VIDEO_DATA.series)
      ? VIDEO_DATA.series.find((s) => s.id === seriesId) : null;
    if (!series) { showToast('السلسلة غير موجودة', 'error'); return; }
    return this._runQueue(series.title, series.videos.map((v) => ({ id: v.id, title: v.title })));
  },

  // تنزيل كل الروابط المحفوظة في قائمة الانتظار
  async downloadSavedAll() {
    if (this._seriesRunning) { showToast('يوجد تنزيل جارٍ بالفعل', 'error'); return; }
    let list = [];
    try { list = JSON.parse(localStorage.getItem('offline_videos') || '[]'); } catch (e) { list = []; }
    if (!list.length) { showToast('لا توجد فيديوهات محفوظة'); return; }
    return this._runQueue('قائمة المحفوظات', list.map((v) => ({ id: v.id, title: v.title })));
  },

  // تنفيذ قائمة تنزيل تسلسلية مع بطاقة تقدم
  async _runQueue(title, items) {
    if (!items || !items.length) return;
    this._seriesRunning = true;
    this._seriesProgress = { id: 'queue', title, done: 0, total: items.length, current: '', ok: 0, skip: 0, fail: 0 };
    renderDownloads();

    for (const item of items) {
      try {
        if (await this.isDownloaded(item.id)) {
          this._seriesProgress.skip++;
        } else {
          this._seriesProgress.current = item.title || item.id;
          renderDownloads();
          const rec = await this.downloadYouTube(item.id, item.title, { silent: true });
          if (rec) this._seriesProgress.ok++; else this._seriesProgress.fail++;
        }
      } catch (e) {
        this._seriesProgress.fail++;
      }
      this._seriesProgress.done++;
      renderDownloads();
    }

    const p = this._seriesProgress;
    this._seriesRunning = false;
    this._seriesProgress = null;
    renderDownloads();
    if (typeof renderSavedVideos === 'function') renderSavedVideos();
    const summary = `«${p.title}»: نُزِّل ${p.ok}، محفوظ ${p.skip}، تعذّر ${p.fail}`;
    if (typeof showToast === 'function') showToast(summary, p.fail ? 'error' : 'success');
    if (typeof addActivity === 'function') addActivity(summary);
  },

  // حفظ ملف منزَّل إلى الجهاز
  async saveToDevice(id) {
    try {
      const rec = await DownloadsDB.get(id);
      if (!rec || !rec.blob) { showToast('الملف غير متاح', 'error'); return; }
      const url = URL.createObjectURL(rec.blob);
      const a = document.createElement('a');
      a.href = url;
      const base = String(rec.title || 'download').replace(/[\\/:*?"<>|]/g, '_').slice(0, 80);
      a.download = base + (this.extFromMime(rec.mime) || '');
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      if (typeof showToast === 'function') showToast('جاري حفظ الملف على جهازك');
    } catch (e) {
      if (typeof showToast === 'function') showToast('تعذر الحفظ: ' + e.message, 'error');
    }
  },

  // حذف كل التنزيلات
  async clearAll() {
    try {
      const all = await DownloadsDB.all();
      if (!all.length) { showToast('لا توجد تنزيلات'); return; }
      if (!window.confirm(`حذف ${all.length} ملف منزَّل نهائياً؟`)) return;
      for (const r of all) await DownloadsDB.remove(r.id);
      Object.keys(this._urls).forEach((k) => { URL.revokeObjectURL(this._urls[k]); delete this._urls[k]; });
      showToast('تم حذف كل التنزيلات');
      renderDownloads();
    } catch (e) {
      showToast('تعذر الحذف: ' + e.message, 'error');
    }
  },

  // خطة بديلة عند تعذّر التنزيل المباشر
  showFallback(videoId, title, reason) {
    this._fallbackMeta = { id: videoId, title };
    const old = document.getElementById('dlFallbackModal');
    if (old) old.remove();
    const modal = document.createElement('div');
    modal.className = 'lesson-modal';
    modal.id = 'dlFallbackModal';
    modal.innerHTML = `
      <div class="download-container">
        <button class="close-btn" onclick="document.getElementById('dlFallbackModal').remove()">✕</button>
        <div class="download-header">
          <h2>تنزيل الفيديو وحفظه على جهازك</h2>
          <p>${escapeAttr(title || 'فيديو يوتيوب')}</p>
          ${reason ? `<p class="dl-reason">تعذّر التنزيل المباشر تلقائياً (${escapeAttr(reason === 'no-source' ? 'لا يتوفر مصدر تنزيل' : reason)}) — اتبع الخطوتين</p>` : ''}
        </div>
        <ol class="dl-steps">
          <li>افتح صفحة التنزيل الخاصة بالفيديو في نافذة جديدة.</li>
          <li>اختر جودة مناسبة (360p ممتازة وخفيفة) ثم نزّل الملف.</li>
          <li>عد إلى هنا واضغط «أضف الملف من جهازك» واختر الفيديو الذي نزّلته.</li>
        </ol>
        <div class="download-actions">
          <a class="download-btn primary" href="https://www.y2mate.com/youtube/${videoId}" target="_blank" rel="noopener noopener">
            <div><strong>1. فتح صفحة التنزيل</strong><p>يفتح في نافذة جديدة</p></div>
          </a>
          <button class="download-btn" onclick="VideoDownloader.openFallbackPicker('${videoId}')">
            <div><strong>2. أضف الملف من جهازك</strong><p>يُحفظ داخل الموقع ويعمل بدون إنترنت</p></div>
          </button>
        </div>
        <div class="download-tips">
          <p>الملفات المضافة تُخزَّن محلياً في متصفحك (IndexedDB) وتُعرض من قسم «التنزيلات» بدون إنترنت.</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.style.opacity = '1';
  },

  _fallbackMeta: null,

  openFallbackPicker(videoId) {
    const meta = this._fallbackMeta && this._fallbackMeta.id === videoId
      ? this._fallbackMeta
      : { id: videoId };
    this._fallbackMeta = meta;
    const input = document.getElementById('videoFileInput');
    if (input) { input.value = ''; input.click(); }
  },

  // معالجة الملفات المختارة من أي زر
  async handleFiles(files, meta) {
    if (!files || !files.length) return;
    for (const file of files) {
      const isMedia = /^video\//.test(file.type) || /^image\//.test(file.type)
        || /\.(mp4|webm|mkv|mov|m4v|ogv|avi|jpg|jpeg|png|gif|webp|svg|bmp|avif)$/i.test(file.name);
      if (!isMedia) {
        showToast(`الملف «${file.name}» ليس فيديو أو صورة`, 'error');
        continue;
      }
      await this.saveFromFile(file, meta || {});
    }
    const fb = document.getElementById('dlFallbackModal');
    if (fb) fb.remove();
    this._fallbackMeta = null;
  },

  // ---------- التشغيل ----------
  async getPlayable(id) {
    try {
      if (this._urls[id]) return this._urls[id];
      const rec = await DownloadsDB.get(id);
      if (!rec || !rec.blob) return null;
      const url = URL.createObjectURL(rec.blob);
      this._urls[id] = url;
      return url;
    } catch (e) {
      return null;
    }
  },

  async isDownloaded(id) {
    try {
      const rec = await DownloadsDB.get(id);
      return !!(rec && rec.blob);
    } catch (e) { return false; }
  },

  async remove(id) {
    try {
      await DownloadsDB.remove(id);
      if (this._urls[id]) { URL.revokeObjectURL(this._urls[id]); delete this._urls[id]; }
      showToast('تم حذف الفيديو المنزَّل');
      renderDownloads();
    } catch (e) {
      showToast('تعذر الحذف: ' + e.message, 'error');
    }
  },

  promptUrlDownload() {
    const input = document.getElementById('dlUrlInput');
    if (input) { input.focus(); input.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    else this.downloadFromInput();
  },

  busyList() {
    return Object.keys(this._busy).map((id) => Object.assign({ id }, this._busy[id]));
  }
};

// ========================================
// عرض قسم التنزيلات
// ========================================
async function renderDownloads() {
  const grid = document.getElementById('downloadsGrid');
  if (!grid) return;

  const busy = VideoDownloader.busyList();
  let items = [];
  try {
    items = await DownloadsDB.all();
  } catch (e) {
    grid.innerHTML = `<p class="empty-state">تعذر قراءة التنزيلات: ${escapeAttr(e.message)}</p>`;
    return;
  }
  items.sort((a, b) => (b.savedAt || '').localeCompare(a.savedAt || ''));
  // السجلات القديمة قبل إضافة حقل النوع
  items.forEach((v) => { if (!v.kind) v.kind = VideoDownloader.detectKind(v.title || '', v.mime); });

  const usageEl = document.getElementById('downloadsUsage');
  if (usageEl) {
    if (navigator.storage && navigator.storage.estimate) {
      try {
        const est = await navigator.storage.estimate();
        usageEl.textContent = `مساحة مستخدمة: ${VideoDownloader.fmtSize(est.usage || 0)} من ${VideoDownloader.fmtSize(est.quota || 0)}`;
      } catch (e) { usageEl.textContent = `${items.length} فيديو منزَّل`; }
    } else {
      usageEl.textContent = `${items.length} فيديو منزَّل`;
    }
  }

  const busyHtml = VideoDownloader._seriesProgress ? (() => {
    const p = VideoDownloader._seriesProgress;
    const pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    return `
    <div class="dl-card busy series">
      <div class="dl-progress" style="--p:${pct}%"></div>
      <div class="dl-body">
        <h4>تنزيل سلسلة: ${escapeAttr(p.title)}</h4>
        <div class="dl-bar"><span style="width:${pct}%"></span></div>
        <p>${p.done}/${p.total} — ${escapeAttr(p.current || '...')}</p>
        <p class="dl-series-stats">ناجح ${p.ok} • محفوظ ${p.skip} • فشل ${p.fail}</p>
      </div>
    </div>`;
  })() : busy.map((b) => `
    <div class="dl-card busy">
      <div class="dl-progress" style="--p:${b.percent || 0}%"></div>
      <div class="dl-body">
        <h4>جاري التنزيل...</h4>
        <div class="dl-bar"><span style="width:${b.percent || 0}%"></span></div>
        <p>${escapeAttr(b.label || '')} — ${b.percent || 0}%</p>
      </div>
    </div>
  `).join('');

  const kindLabel = (v) => (v.kind === 'image' ? 'صورة' : v.kind === 'video' ? 'فيديو' : 'ملف');
  const thumbHtml = (v) => {
    if (v.kind !== 'image') return '';
    const u = VideoDownloader._urls[v.id];
    if (!u) return `<div class="dl-thumb" data-thumb="${v.id}"></div>`;
    return `<div class="dl-thumb"><img src="${u}" alt="${escapeAttr(v.title)}" loading="lazy"></div>`;
  };

  const savedHtml = items.map((v) => `
    <div class="dl-card ${v.kind === 'image' ? 'is-image' : ''}">
      ${thumbHtml(v)}
      <div class="dl-body">
        <h4 title="${escapeAttr(v.title)}">${escapeAttr(v.title)}</h4>
        <div class="dl-meta">
          <span>${VideoDownloader.fmtSize(v.size)}</span>
          <span>${new Date(v.savedAt).toLocaleDateString('ar-SA')}</span>
          <span class="dl-source">${kindLabel(v)} • ${v.source === 'youtube' ? 'يوتيوب' : v.source === 'url' ? 'رابط' : 'جهازك'}</span>
        </div>
        <div class="dl-actions">
          <button class="btn btn-primary btn-sm" onclick="VideoDownloader.play('${v.id}')">${v.kind === 'image' ? 'عرض' : 'تشغيل'} بدون إنترنت</button>
          <button class="btn btn-outline btn-sm" onclick="VideoDownloader.saveToDevice('${v.id}')" title="حفظ الملف على الجهاز">حفظ على الجهاز</button>
          <button class="btn btn-outline btn-sm" onclick="VideoDownloader.remove('${v.id}')">حذف</button>
        </div>
      </div>
    </div>
  `).join('');

  if (!busy.length && !items.length && !VideoDownloader._seriesProgress) {
    grid.innerHTML = `
      <p class="empty-state">
        لا توجد ملفات منزَّلة بعد. الصق رابطاً في الأعلى، أو استخدم أزرار التنزيل بجانب أي فيديو أو سلسلة،
        أو أضف ملفاً من جهازك — بعد التنزيل يُخزَّن داخل الموقع وتشاهده بدون إنترنت.
      </p>`;
    return;
  }
  grid.innerHTML = busyHtml + savedHtml;

  // تحميل مصغّرات الصور عند الحاجة
  grid.querySelectorAll('.dl-thumb[data-thumb]').forEach((el) => {
    VideoDownloader.getPlayable(el.getAttribute('data-thumb')).then((u) => {
      if (u) el.innerHTML = `<img src="${u}" alt="" loading="lazy">`;
    });
  });
}

// تشغيل فيديو أو عرض صورة منزَّلة
VideoDownloader.play = async function play(id) {
  const url = await VideoDownloader.getPlayable(id);
  if (!url) { showToast('الملف غير متاح — أعد تنزيله', 'error'); return; }
  let rec = null;
  try { rec = await DownloadsDB.get(id); } catch (e) { rec = null; }
  const isImage = rec && rec.kind === 'image';

  const old = document.getElementById('localVideoModal');
  if (old) old.remove();
  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'localVideoModal';
  modal.innerHTML = `
    <div class="video-player-container">
      <button class="close-btn" onclick="document.getElementById('localVideoModal').remove()">✕</button>
      <div class="video-frame local">
        ${isImage ? `<img src="${url}" alt="${escapeAttr(rec ? rec.title : '')}">`
      : `<video src="${url}" controls autoplay playsinline></video>`}
      </div>
      <div class="video-controls">
        <h4>${escapeAttr(rec ? rec.title : 'ملف منزَّل')}</h4>
        <div class="video-actions">
          <span class="dl-badge">يعمل بدون إنترنت</span>
          <button class="btn btn-outline btn-sm" onclick="VideoDownloader.saveToDevice('${id}')">حفظ على الجهاز</button>
          <button class="btn btn-outline btn-sm" onclick="VideoDownloader.remove('${id}'); document.getElementById('localVideoModal').remove();">حذف المنزَّل</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.style.opacity = '1';
};

// معالجة اختيار الملفات
document.addEventListener('change', (e) => {
  const t = e.target;
  if (t && t.id === 'videoFileInput' && t.files && t.files.length) {
    const meta = VideoDownloader._fallbackMeta || {};
    VideoDownloader.handleFiles(t.files, meta);
  }
});
