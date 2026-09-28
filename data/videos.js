// ========================================
// الفيديوهات الحقيقية — Verified YouTube Videos
// جميع المعرفات مُتحقَّق منها عبر YouTube oEmbed
// ========================================

const COURSE_VIDEOS = {
  // === إبراهيم عادل — zAmericanEnglish (12.8M مشترك) ===
  ibrahimAdel: [
    { id: 'm8VUaW1b_z8', title: 'كورس شامل لتعلم الإنجليزية من الصفر — إبراهيم عادل', duration: 'كامل', topic: 'مبتدئ', channel: 'zAmericanEnglish', subs: '12.8M' },
    { id: '9cDYq1cun8o', title: 'دروس الإنجليزية بالترتيب — خطة الدراسة الصحيحة', duration: 'مقدمة', topic: 'خطة', channel: 'zAmericanEnglish', subs: '12.8M' },
    { id: 'Th9S81mblxo', title: 'الدرس السادس: مفردات للمبتدئين', duration: 'درس', topic: 'مفردات', channel: 'zAmericanEnglish', subs: '12.8M' },
    { id: 'dNunBVGnnzE', title: 'أهم الكلمات في اللغة الإنجليزية — الحلقة الثانية', duration: 'درس', topic: 'مفردات', channel: 'zAmericanEnglish', subs: '12.8M' },
    { id: 'PLp22-4PivYmLBmV2wctgqyyRlIs1MhmNr', title: 'كورس قواعد الإنجليزي للمبتدئين — المستوى الأول (قائمة تشغيل)', duration: 'قائمة', topic: 'قواعد', channel: 'zAmericanEnglish', subs: '12.8M', isPlaylist: true },
  ],

  // === أفضل المعلمين العالميين ===
  otherTeachers: [
    { id: 'W6rtPM4jO3E', title: 'العبارات اليومية التي تستخدمها كل يوم — English with Lucy', duration: 'مفردات', topic: 'محادثة', channel: 'English with Lucy', subs: '14.1M' },
    { id: 'kotoNOAvNGk', title: 'كل المفردات المتقدمة في 90 دقيقة — English with Lucy', duration: '90 د', topic: 'متقدم', channel: 'English with Lucy', subs: '14.1M' },
    { id: 'Wo-C-jgA4Y8', title: 'روتين دراسي يومي لتحسين الإنجليزية — English with Lucy', duration: 'نصائح', topic: 'خطة', channel: 'English with Lucy', subs: '14.1M' },
    { id: '338muHaMK9Q', title: 'كيف تستخدم الفعل To Take — English with Lucy', duration: 'قواعد', topic: 'قواعد', channel: 'English with Lucy', subs: '14.1M' },
    { id: 'ikHXEIxBUrY', title: 'أتقن هذه الكلمة واحدة وستتحدث بطلاق — English with Lucy', duration: 'نطق', topic: 'نطق', channel: 'English with Lucy', subs: '14.1M' },
    { id: 'bq6GBbh3uhU', title: 'كيف تتحدث عن روتينك اليومي — BBC Learning English', duration: 'محادثة', topic: 'محادثة', channel: 'BBC Learning English', subs: '10.8M' },
    { id: 'fcN0BXzK8bg', title: '6 Minute English: مفردات اللغة (ساعة كاملة) — BBC', duration: '60 د', topic: 'مفردات', channel: 'BBC Learning English', subs: '10.8M' },
    { id: 'nOOm36nz_jY', title: 'English Language Mega-class: 30 دقيقة مفردات — BBC', duration: '30 د', topic: 'مفردات', channel: 'BBC Learning English', subs: '10.8M' },
    { id: '2vwRxpcypVI', title: 'تعبيرات الغضب والانفعال بالإنجليزية — BBC', duration: 'تعبيرات', topic: 'تعبيرات', channel: 'BBC Learning English', subs: '10.8M' },
    { id: 'j64n3KdIob0', title: 'كيف تتحدث عن الدماغ — Real Easy English (BBC)', duration: 'سهل', topic: 'محادثة', channel: 'BBC Learning English', subs: '10.8M' },
    { id: 'jjzvxQBZlW4', title: 'كيف تتحدث الإنجليزية بطلاقة — Rachel\'s English', duration: 'نطق', topic: 'نطق', channel: 'Rachel\'s English', subs: '7M' },
    { id: 'eFZNy3tX0xA', title: 'مراجعة الأزمنة الفرنسية — Learn French With Alexa', duration: 'قواعد', topic: 'قواعد', channel: 'Learn French with Alexa', subs: '2.5M' },
    { id: 'QcpLSHVsNCU', title: 'تحدث معي بالفرنسية ساعة كاملة — Learn French With Alexa', duration: '60 د', topic: 'محادثة', channel: 'Learn French with Alexa', subs: '2.5M' },
  ],

  // === قوائم تشغيل مرتبة لكل لغة ===
  playlists: [
    { id: 'PLp22-4PivYmLBmV2wctgqyyRlIs1MhmNr', title: 'قواعد الإنجليزي للمبتدئين — المستوى الأول', channel: 'zAmericanEnglish', category: 'english', desc: 'شرح كامل للقواعد من الصفر' },
    { id: 'PLV1-QgpUU7N3ZGbRMIrV24FCuvZoMt4xw', title: 'French Lessons 1-20 — فرنسية من الصفر', channel: 'Learn French with Alexa', category: 'french', desc: '20 درس مرتّب' },
    { id: 'PLaNNx1k0ao1v8I2C8DAxXOayC3dG00xtj', title: 'IELTS Lessons — تحضير IELTS', channel: 'engVid', category: 'english', desc: 'استراتيجيات الاختبار' },
    { id: 'PLzMXToX8Kzqggrhr-v0aWQA2g8pzWLBrR', title: 'Common British English Expressions', channel: 'English with Lucy', category: 'english', desc: 'تعبيرات بريطانية شائعة' },
  ],

  // === روابط قنوات يوتيوب الرسمية ===
  channels: [
    { name: 'zAmericanEnglish — إبراهيم عادل', url: 'https://www.youtube.com/@ZAmericanEnglish', subs: '12.8M', lang: 'عربي/إنجليزي' },
    { name: 'English with Lucy', url: 'https://www.youtube.com/@EnglishwithLucy', subs: '14.1M', lang: 'إنجليزي' },
    { name: 'BBC Learning English', url: 'https://www.youtube.com/@bbclearningenglish', subs: '10.8M', lang: 'إنجليزي' },
    { name: 'Learn English with TV Series', url: 'https://www.youtube.com/@LearnEnglishwithTVSeries', subs: '4M', lang: 'إنجليزي' },
    { name: 'Learn French with Alexa', url: 'https://www.youtube.com/@learnfrenchwithalexa', subs: '2.5M', lang: 'فرنسي' },
    { name: 'EnglishClass101', url: 'https://www.youtube.com/@EnglishClass101', subs: '4M', lang: 'إنجليزي' },
    { name: 'Speak English With Vanessa', url: 'https://www.youtube.com/@SpeakEnglishWithVanessa', subs: '3M', lang: 'إنجليزي' },
    { name: 'engVid', url: 'https://www.youtube.com/@engVid', subs: '7M', lang: 'إنجليزي' },
    { name: 'Rachel\'s English', url: 'https://www.youtube.com/@RachelsEnglish', subs: '7M', lang: 'إنجليزي' },
    { name: 'IELTS Liz', url: 'https://www.youtube.com/@IELTSLiz', subs: '3M', lang: 'إنجليزي' },
  ]
};

// هل هو قائمة تشغيل؟
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
  return isPlaylist(video)
    ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
}

// عرض كل الفيديوهات
function renderVideos() {
  const container = document.getElementById('videosGrid');
  if (!container) return;

  const all = [
    ...COURSE_VIDEOS.ibrahimAdel.map(v => ({ ...v, group: 'إبراهيم عادل', groupColor: '#b8860b' })),
    ...COURSE_VIDEOS.otherTeachers.map(v => ({ ...v, group: v.channel, groupColor: '#6366f1' }))
  ];

  container.innerHTML = `
    <div class="video-group">
      <h3 class="video-group-title" style="border-color:#b8860b">★ كورسات إبراهيم عادل — zAmericanEnglish</h3>
      <div class="videos-grid-inner">
        ${all.filter(v => v.group === 'إبراهيم عادل').map(v => videoCard(v)).join('')}
      </div>
    </div>
    <div class="video-group">
      <h3 class="video-group-title" style="border-color:#6366f1">◆ أفضل المعلمين العالميين</h3>
      <div class="videos-grid-inner">
        ${all.filter(v => v.group !== 'إبراهيم عادل').map(v => videoCard(v)).join('')}
      </div>
    </div>
    <div class="video-group">
      <h3 class="video-group-title" style="border-color:#10b981">≡ قوائم تشغيل مرتبة</h3>
      <div class="videos-grid-inner">
        ${COURSE_VIDEOS.playlists.map(v => videoCard({ ...v, group: v.channel, groupColor: '#10b981' })).join('')}
      </div>
    </div>
  `;
}

function videoCard(v) {
  const type = isPlaylist(v) ? 'قائمة تشغيل' : 'فيديو';
  return `
    <div class="video-card" onclick="playVideo('${v.id}', '${escapeAttr(v.title)}')">
      <div class="video-thumbnail">
        <img src="${getThumbURL(v)}" alt="${escapeAttr(v.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="video-play" style="display:none">▶</div>
        <div class="video-play">▶</div>
        <span class="video-duration">${v.duration || type}</span>
        <span class="video-badge">${type}</span>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <div class="video-meta">
          <span class="video-channel">${v.channel}</span>
          <span>${v.subs ? v.subs + ' مشترك' : v.topic || ''}</span>
        </div>
      </div>
    </div>
  `;
}

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

// فتح مشغل الفيديو
function playVideo(videoId, title) {
  const video = findVideo(videoId);
  const isPL = isPlaylist({ id: videoId });

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
        <p class="video-sub">${video ? video.channel : ''} ${video && video.subs ? '— ' + video.subs + ' مشترك' : ''}</p>
        <div class="video-actions">
          <a class="btn btn-primary btn-sm" href="${getYouTubeURL({ id: videoId })}" target="_blank" rel="noopener">فتح في يوتيوب</a>
          <button class="btn btn-outline btn-sm" onclick="saveForOffline('${videoId}', '${escapeAttr(title)}')">حفظ بدون إنترنت</button>
          <button class="btn btn-outline btn-sm" onclick="speak('${escapeAttr(title)}', selectedLanguage)">♪ استمع</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function findVideo(id) {
  const all = [...COURSE_VIDEOS.ibrahimAdel, ...COURSE_VIDEOS.otherTeachers, ...COURSE_VIDEOS.playlists];
  return all.find(v => v.id === id);
}

function saveForOffline(videoId, title) {
  const saved = JSON.parse(localStorage.getItem('offline_videos') || '[]');
  if (saved.find(v => v.id === videoId)) {
    showToast('هذا الفيديو محفوظ مسبقاً');
    return;
  }
  saved.push({ id: videoId, title, url: getYouTubeURL({ id: videoId }), savedAt: new Date().toISOString() });
  localStorage.setItem('offline_videos', JSON.stringify(saved));
  addActivity(`حفظت فيديو للعمل بدون إنترنت: ${title}`);
  showToast('تم حفظ الفيديو — سيظهر في لوحة التنزيلات');
}

// عرض قنوات يوتيوب
function renderChannels() {
  const container = document.getElementById('channelsGrid');
  if (!container) return;
  container.innerHTML = COURSE_VIDEOS.channels.map(c => `
    <a class="channel-card" href="${c.url}" target="_blank" rel="noopener">
      <strong>${c.name}</strong>
      <div class="channel-meta"><span>${c.subs} مشترك</span><span>${c.lang}</span></div>
    </a>
  `).join('');
}
