// ========================================
// الفيديوهات والقنوات والسلاسل — منظم بالكامل
// ========================================

const VIDEO_DATA = {
  // === القنوات العربية ===
  arabicChannels: [
    { name: 'zAmericanEnglish — إبراهيم عادل', url: 'https://www.youtube.com/@ZAmericanEnglish', subs: '12.8M', lang: 'عربي', desc: 'أفضل معلم عربي للإنجليزية' },
    { name: 'English with Lucy (عربي)', url: 'https://www.youtube.com/@EnglishwithLucy', subs: '14.1M', lang: 'عربي', desc: 'شرح بريطاني بالعربية' },
    { name: 'Learn English with TV Series', url: 'https://www.youtube.com/@LearnEnglishwithTVSeries', subs: '4M', lang: 'عربي', desc: 'تعلم من الأفلام والمسلسلات' },
    { name: 'EnglishClass101', url: 'https://www.youtube.com/@EnglishClass101', subs: '4M', lang: 'عربي', desc: 'دروس يومية متنوعة' },
    { name: 'Speak English With Vanessa', url: 'https://www.youtube.com/@SpeakEnglishWithVanessa', subs: '3M', lang: 'عربي', desc: 'محادثات يومية بسيطة' },
    { name: 'engVid', url: 'https://www.youtube.com/@engVid', subs: '7M', lang: 'عربي', desc: 'قواعد ومفردات متنوعة' },
  ],

  // === القنوات الأجنبية ===
  foreignChannels: [
    { name: 'English with Lucy', url: 'https://www.youtube.com/@EnglishwithLucy', subs: '14.1M', lang: 'إنجليزي', desc: 'إنجليزية بريطانية أصيلة' },
    { name: 'BBC Learning English', url: 'https://www.youtube.com/@bbclearningenglish', subs: '10.8M', lang: 'إنجليزي', desc: 'من البي بي سي مباشرة' },
    { name: 'Rachel\'s English', url: 'https://www.youtube.com/@RachelsEnglish', subs: '7M', lang: 'إنجليزي', desc: 'نطق أمريكي دقيق' },
    { name: 'Learn French with Alexa', url: 'https://www.youtube.com/@learnfrenchwithalexa', subs: '2.5M', lang: 'فرنسي', desc: 'أفضل معلمة فرنسية' },
    { name: 'Español con Juan', url: 'https://www.youtube.com/@espanolconjuan', subs: '500K', lang: 'إسباني', desc: 'إسبانية حقيقية من الشارع' },
    { name: 'Deutsch lernen', url: 'https://www.youtube.com/@DeutschLernen', subs: '400K', lang: 'ألماني', desc: 'ألمانية من الصفر' },
    { name: 'Learn Japanese with Miku', url: 'https://www.youtube.com/@LearnJapanesewithMiku', subs: '300K', lang: 'ياباني', desc: 'يابانية ممتعة وسهلة' },
    { name: 'Yoyo Chinese', url: 'https://www.youtube.com/@YoyoChinese', subs: '500K', lang: 'صيني', desc: 'صينية منظمة وممتعة' },
  ],

  // === السلاسل المنظمة مع التتبع ===
  series: [
    {
      id: 'zae_phonetics',
      title: 'كورس الصوتيات — إبراهيم عادل',
      teacher: 'إبراهيم عادل',
      channel: 'zAmericanEnglish',
      lang: 'عربي',
      level: 'مبتدئ',
      color: '#b8860b',
      desc: 'تعلم النطق الصحيح من الصفر',
      videos: [
        { id: 'm8VUaW1b_z8', title: 'كورس شامل من الصفر', duration: 'كامل', order: 1 },
        { id: '9cDYq1cun8o', title: 'خطة الدراسة الصحيحة', duration: 'مقدمة', order: 2 },
        { id: 'Th9S81mblxo', title: 'الدرس السادس: مفردات', duration: 'درس', order: 3 },
        { id: 'dNunBVGnnzE', title: 'أهم الكلمات — الحلقة 2', duration: 'درس', order: 4 },
      ]
    },
    {
      id: 'zae_grammar',
      title: 'كورس القواعد — إبراهيم عادل',
      teacher: 'إبراهيم عادل',
      channel: 'zAmericanEnglish',
      lang: 'عربي',
      level: 'مبتدئ',
      color: '#6366f1',
      desc: 'شرح كامل للقواعد الأساسية',
      videos: [
        { id: 'PLp22-4PivYmLBmV2wctgqyyRlIs1MhmNr', title: 'قائمة تشغيل القواعد كاملة', duration: 'قائمة', order: 1, isPlaylist: true },
      ]
    },
    {
      id: 'lucy_daily',
      title: 'العبارات اليومية — English with Lucy',
      teacher: 'Lucy',
      channel: 'English with Lucy',
      lang: 'إنجليزي',
      level: 'متوسط',
      color: '#ec4899',
      desc: 'عبارات تستخدمها كل يوم',
      videos: [
        { id: 'W6rtPM4jO3E', title: 'عبارات يومية أساسية', duration: '20 د', order: 1 },
        { id: '338muHaMK9Q', title: 'كيف تستخدم To Take', duration: '15 د', order: 2 },
        { id: 'ikHXEIxBUrY', title: 'أتقن هذه الكلمة', duration: '20 د', order: 3 },
        { id: 'Wo-C-jgA4Y8', title: 'روتين دراسي يومي', duration: '15 د', order: 4 },
        { id: 'kotoNOAvNGk', title: 'مفردات متقدمة 90 دقيقة', duration: '90 د', order: 5 },
      ]
    },
    {
      id: 'bbc_6min',
      title: '6 Minute English — BBC',
      teacher: 'BBC',
      channel: 'BBC Learning English',
      lang: 'إنجليزي',
      level: 'متوسط',
      color: '#06b6d4',
      desc: 'دروس يومية من البي بي سي',
      videos: [
        { id: 'fcN0BXzK8bg', title: 'مفردات اللغة — ساعة', duration: '60 د', order: 1 },
        { id: 'nOOm36nz_jY', title: 'مفردات مركزة 30 دقيقة', duration: '30 د', order: 2 },
        { id: '2vwRxpcypVI', title: 'تعبيرات الغضب', duration: '15 د', order: 3 },
        { id: 'bq6GBbh3uhU', title: 'روتينك اليومي', duration: '10 د', order: 4 },
        { id: 'j64n3KdIob0', title: 'تحدث عن الدماغ', duration: '10 د', order: 5 },
      ]
    },
    {
      id: 'french_alexa',
      title: 'Learn French with Alexa',
      teacher: 'Alexa',
      channel: 'Learn French with Alexa',
      lang: 'فرنسي',
      level: 'مبتدئ',
      color: '#8b5cf6',
      desc: 'فرنسية من الصفر مع ألكسا',
      videos: [
        { id: 'eFZNy3tX0xA', title: 'مراجعة الأزمنة', duration: '30 د', order: 1 },
        { id: 'QcpLSHVsNCU', title: 'تحدث معي ساعة كاملة', duration: '60 د', order: 2 },
        { id: 'PLV1-QgpUU7N3ZGbRMIrV24FCuvZoMt4xw', title: 'French Lessons 1-20', duration: 'قائمة', order: 3, isPlaylist: true },
      ]
    },
    {
      id: 'japanese_miku',
      title: 'Learn Japanese with Miku',
      teacher: 'Miku',
      channel: 'Learn Japanese with Miku',
      lang: 'ياباني',
      level: 'مبتدئ',
      color: '#ec4899',
      desc: 'يابانية ممتعة وسهلة',
      videos: [
        { id: 'jjzvxQBZlW4', title: 'كيف تتحدث بطلاقة', duration: '20 د', order: 1 },
      ]
    },
    {
      id: 'chinese_yoyo',
      title: 'Yoyo Chinese',
      teacher: 'Yoyo',
      channel: 'Yoyo Chinese',
      lang: 'صيني',
      level: 'مبتدئ',
      color: '#f59e0b',
      desc: 'صينية منظمة وممتعة',
      videos: [
        { id: 'jjzvxQBZlW4', title: 'كيف تتحدث بطلاقة', duration: '20 د', order: 1 },
      ]
    },
  ],

  // === الفيديوهات المحفوظة للعمل بدون إنترنت ===
  // (تُملأ من قبل المستخدم عند الحفظ)
  savedVideos: JSON.parse(localStorage.getItem('offline_videos') || '[]')
};

// === نظام تتبع السلاسل ===
const SeriesTracker = {
  // جلب تقدم سلسلة
  getProgress(seriesId) {
    const all = JSON.parse(localStorage.getItem('series_progress') || '{}');
    return all[seriesId] || { completed: [], lastWatched: null, startedAt: null };
  },

  // حفظ تقدم سلسلة
  saveProgress(seriesId, videoId) {
    const all = JSON.parse(localStorage.getItem('series_progress') || '{}');
    const progress = all[seriesId] || { completed: [], lastWatched: null, startedAt: null };
    
    if (!progress.completed.includes(videoId)) {
      progress.completed.push(videoId);
    }
    progress.lastWatched = videoId;
    if (!progress.startedAt) progress.startedAt = new Date().toISOString();
    
    all[seriesId] = progress;
    localStorage.setItem('series_progress', JSON.stringify(all));
    
    return progress;
  },

  // نسبة الإكمال
  getPercent(seriesId, totalVideos) {
    const progress = this.getProgress(seriesId);
    return Math.round((progress.completed.length / totalVideos) * 100);
  },

  // هل الفيديو مكتمل؟
  isCompleted(seriesId, videoId) {
    const progress = this.getProgress(seriesId);
    return progress.completed.includes(videoId);
  },

  // إعادة تعيين سلسلة
  reset(seriesId) {
    const all = JSON.parse(localStorage.getItem('series_progress') || '{}');
    delete all[seriesId];
    localStorage.setItem('series_progress', JSON.stringify(all));
  }
};

// === دوال مساعدة ===
function isPlaylist(video) {
  return video.isPlaylist || video.id.startsWith('PL');
}

function getYouTubeURL(video) {
  return isPlaylist(video)
    ? `https://www.youtube.com/playlist?list=${video.id}`
    : `https://www.youtube.com/watch?v=${video.id}`;
}

function getEmbedURL(video) {
  return isPlaylist(video)
    ? `https://www.youtube.com/embed/videoseries?list=${video.id}`
    : `https://www.youtube.com/embed/${video.id}?autoplay=1`;
}

function getThumbURL(video) {
  return `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
}

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

// === عرض القنوات العربية ===
function renderArabicChannels() {
  const container = document.getElementById('arabicChannelsGrid');
  if (!container) return;
  container.innerHTML = VIDEO_DATA.arabicChannels.map(c => `
    <a class="channel-card" href="${c.url}" target="_blank" rel="noopener">
      <strong>${c.name}</strong>
      <div class="channel-meta"><span>${c.subs} مشترك</span><span>${c.lang}</span></div>
      <p>${c.desc}</p>
    </a>
  `).join('');
}

// === عرض القنوات الأجنبية ===
function renderForeignChannels() {
  const container = document.getElementById('foreignChannelsGrid');
  if (!container) return;
  container.innerHTML = VIDEO_DATA.foreignChannels.map(c => `
    <a class="channel-card" href="${c.url}" target="_blank" rel="noopener">
      <strong>${c.name}</strong>
      <div class="channel-meta"><span>${c.subs} مشترك</span><span>${c.lang}</span></div>
      <p>${c.desc}</p>
    </a>
  `).join('');
}

// === عرض السلاسل مع التتبع ===
function renderSeries() {
  const container = document.getElementById('seriesGrid');
  if (!container) return;

  container.innerHTML = VIDEO_DATA.series.map(series => {
    const progress = SeriesTracker.getProgress(series.id);
    const percent = SeriesTracker.getPercent(series.id, series.videos.length);
    const isStarted = progress.startedAt !== null;

    return `
      <div class="series-card" style="border-color: ${series.color}">
        <div class="series-header">
          <div class="series-info">
            <h3>${series.title}</h3>
            <p>${series.desc}</p>
            <div class="series-meta">
              <span>${series.teacher}</span>
              <span>${series.lang}</span>
              <span>${series.level}</span>
              <span>${series.videos.length} فيديو</span>
            </div>
            <div class="series-actions">
              <button class="btn btn-primary btn-sm" onclick="VideoDownloader.downloadSeries('${series.id}')">تنزيل السلسلة كاملة</button>
              <button class="btn btn-outline btn-sm" onclick="playSeriesVideo('${series.id}', '${series.videos[0].id}', '${escapeAttr(series.videos[0].title)}')">ابدأ المشاهدة</button>
            </div>
          </div>
          <div class="series-progress">
            <div class="progress-ring" style="--percent: ${percent}; --color: ${series.color}">
              <span>${percent}%</span>
            </div>
            ${isStarted ? `<button class="btn btn-sm btn-outline" onclick="SeriesTracker.reset('${series.id}'); renderSeries();">إعادة</button>` : ''}
          </div>
        </div>
        <div class="series-videos">
          ${series.videos.map(v => {
            const done = SeriesTracker.isCompleted(series.id, v.id);
            return `
            <div class="series-video ${done ? 'completed' : ''}" onclick="playSeriesVideo('${series.id}', '${v.id}', '${escapeAttr(v.title)}')">
              <div class="video-order">${done ? '✓' : v.order}</div>
              <div class="video-info">
                <h4>${v.title}</h4>
                <span>${v.duration}</span>
              </div>
              <button class="video-play-btn" onclick="event.stopPropagation(); saveForOffline('${v.id}', '${escapeAttr(v.title)}')">⬇</button>
            </div>
          `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// === عرض الفيديوهات المحفوظة ===
function renderSavedVideos() {
  const container = document.getElementById('savedVideosGrid');
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem('offline_videos') || '[]');

  if (saved.length === 0) {
    container.innerHTML = '<p class="empty-state">لا توجد فيديوهات محفوظة بعد. اضغط على زر التنزيل بجانب أي فيديو لحفظه، وسيُنزَّل فعلياً إلى قسم «التنزيلات».</p>';
    return;
  }

  container.innerHTML = saved.map(v => `
    <div class="video-card" onclick="playVideo('${v.id}', '${escapeAttr(v.title)}')">
      <div class="video-thumbnail">
        <img src="https://i.ytimg.com/vi/${v.id}/mqdefault.jpg" alt="${escapeAttr(v.title)}" loading="lazy">
        <div class="video-play">▶</div>
        <span class="video-badge" data-saved-badge="${v.id}">محفوظ</span>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <div class="video-meta">
          <span>${new Date(v.savedAt).toLocaleDateString('ar-SA')}</span>
          <button class="btn btn-sm btn-outline" onclick="event.stopPropagation(); removeSavedVideo('${v.id}')">حذف</button>
        </div>
      </div>
    </div>
  `).join('');

  // تحديد ما نُزِّل فعلياً للعمل بدون إنترنت
  if (typeof VideoDownloader !== 'undefined') {
    saved.forEach(v => {
      VideoDownloader.isDownloaded(v.id).then((has) => {
        const badge = container.querySelector('[data-saved-badge="' + v.id + '"]');
        if (badge && has) { badge.textContent = 'منزَّل ✓'; badge.classList.add('is-downloaded'); }
      }).catch(() => {});
    });
  }
}

// === تشغيل فيديو من سلسلة ===
function playSeriesVideo(seriesId, videoId, title) {
  const series = VIDEO_DATA.series.find(s => s.id === seriesId);
  const video = series?.videos.find(v => v.id === videoId);
  if (!video) return;

  // تسجيل التقدم
  SeriesTracker.saveProgress(seriesId, videoId);

  // تشغيل الفيديو
  playVideo(videoId, title);

  // تحديث العرض
  setTimeout(() => renderSeries(), 100);
}

// === حفظ فيديو للعمل بدون إنترنت ===
function saveForOffline(videoId, title) {
  const saved = JSON.parse(localStorage.getItem('offline_videos') || '[]');
  if (saved.find(v => v.id === videoId)) {
    showToast('هذا الفيديو محفوظ مسبقاً');
    return;
  }
  saved.push({ id: videoId, title, url: getYouTubeURL({ id: videoId }), savedAt: new Date().toISOString() });
  localStorage.setItem('offline_videos', JSON.stringify(saved));
  addActivity(`حفظت فيديو للعمل بدون إنترنت: ${title}`);
  showToast('تم حفظ الفيديو — سيظهر في قسم الفيديوهات المحفوظة');
  renderSavedVideos();
}

// === حذف فيديو محفوظ ===
function removeSavedVideo(videoId) {
  let saved = JSON.parse(localStorage.getItem('offline_videos') || '[]');
  saved = saved.filter(v => v.id !== videoId);
  localStorage.setItem('offline_videos', JSON.stringify(saved));
  renderSavedVideos();
  showToast('تم حذف الفيديو');
}

// === تنزيل الفيديو فعلياً (ملف حقيقي يُخزَّن في المتصفح) ===
function saveForOffline(videoId, title) {
  if (typeof VideoDownloader === 'undefined') {
    showToast('وحدة التنزيل غير متاحة', 'error');
    return;
  }
  VideoDownloader.isDownloaded(videoId).then((has) => {
    if (has) {
      showToast('هذا الفيديو منزَّل مسبقاً — موجود في قسم التنزيلات');
      return;
    }
    // حفظ بالقائمة القديمة (يرجع لقسم المحفوظات)
    const saved = JSON.parse(localStorage.getItem('offline_videos') || '[]');
    if (!saved.find(v => v.id === videoId)) {
      saved.push({ id: videoId, title, url: `https://www.youtube.com/watch?v=${videoId}`, savedAt: new Date().toISOString() });
      localStorage.setItem('offline_videos', JSON.stringify(saved));
      renderSavedVideos();
    }
    // ثم محاولة تنزيل الملف الفعلي
    VideoDownloader.downloadYouTube(videoId, title);
  }).catch(() => VideoDownloader.downloadYouTube(videoId, title));
}

// === فتح مشغل الفيديو (يفضّل الملف المنزَّل بدون إنترنت) ===
async function playVideo(videoId, title) {
  if (typeof VideoDownloader !== 'undefined') {
    try {
      const localUrl = await VideoDownloader.getPlayable(videoId);
      if (localUrl) { VideoDownloader.play(videoId); return; }
    } catch (e) { /* تابع بالتشغيل العادي */ }
  }

  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'videoModal';
  modal.innerHTML = `
    <div class="video-player-container">
      <button class="close-btn" onclick="document.getElementById('videoModal').remove()">✕</button>
      <div class="video-frame">
        <iframe src="${getEmbedURL({ id: videoId })}"
          title="${escapeAttr(title)}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
      </div>
      <div class="video-controls">
        <h4>${title}</h4>
        <div class="video-actions">
          <a class="btn btn-primary btn-sm" href="${getYouTubeURL({ id: videoId })}" target="_blank" rel="noopener">فتح في يوتيوب</a>
          <button class="btn btn-outline btn-sm" onclick="saveForOffline('${videoId}', '${escapeAttr(title)}')">حفظ بدون إنترنت</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.style.opacity = '1';
}

// === تهيئة كل شيء ===
function initVideoSections() {
  renderArabicChannels();
  renderForeignChannels();
  renderSeries();
  renderSavedVideos();
  if (typeof renderDownloads === 'function') renderDownloads();
}
