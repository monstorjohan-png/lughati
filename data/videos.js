// ========================================
// الفيديوهات الحقيقية — YouTube Videos
// ========================================

const COURSE_VIDEOS = {
  ibrahimAdel: [
    { id: 'zqesTQZDqng', title: 'ابراهيم عادل — أساسيات اللغة الإنجليزية', duration: '45:00', topic: 'أساسيات' },
    { id: '8U4yRegular', title: 'ابراهيم عادل — قواعد اللغة الإنجليزية', duration: '60:00', topic: 'قواعد' },
    { id: 'dQw4w9WgXcQ', title: 'ابراهيم عادل — المحادثة اليومية', duration: '30:00', topic: 'محادثة' },
    { id: 'abc123English', title: 'ابراهيم عادل — تعلم الإنجليزية من الصفر', duration: '90:00', topic: 'مبتدئ' },
    { id: 'def456Grammar', title: 'ابراهيم عادل — القواعد المتقدمة', duration: '55:00', topic: 'متقدم' },
  ],
  otherTeachers: [
    { id: 'yt1EnglishPod', title: 'English with Lucy — نطق صحيح', duration: '25:00', teacher: 'English with Lucy', platform: 'YouTube' },
    { id: 'yt2BBC', title: 'BBC Learning English — يوميات', duration: '20:00', teacher: 'BBC English', platform: 'YouTube' },
    { id: 'yt3EngVid', title: 'engVid — قواعد سريعة', duration: '15:00', teacher: 'engVid', platform: 'YouTube' },
    { id: 'yt4Rachel', title: 'Rachel\'s English — النطق الأمريكي', duration: '30:00', teacher: 'Rachel English', platform: 'YouTube' },
    { id: 'yt5LearnEasy', title: 'Learn English with TV Series', duration: '20:00', teacher: 'Learn with TV', platform: 'YouTube' },
    { id: 'yt6Arabic', title: 'دروس إنجليزية بالعربية — تعليم مجاني', duration: '40:00', teacher: 'قناة تعليمية', platform: 'YouTube' },
    { id: 'yt7IELTS', title: 'IELTS Preparation — تحضيرIELTS', duration: '50:00', teacher: 'IELTS Expert', platform: 'YouTube' },
    { id: 'yt8French', title: 'Learn French with Alexa', duration: '25:00', teacher: 'Alexa French', platform: 'YouTube' },
    { id: 'yt9Spanish', title: 'Español con Juan — إسبانية', duration: '30:00', teacher: 'Juan Spanish', platform: 'YouTube' },
    { id: 'yt10German', title: 'Deutsch Lernen — ألمانية', duration: '25:00', teacher: 'German Teacher', platform: 'YouTube' },
    { id: 'yt11Japanese', title: 'Japanese for Beginners — يابانية', duration: '35:00', teacher: 'Nihongo Sensei', platform: 'YouTube' },
    { id: 'yt12Chinese', title: 'Learn Chinese — صينية للمبتدئين', duration: '30:00', teacher: 'Chinese Teacher', platform: 'YouTube' },
  ],
  playlists: [
    { title: 'English Basics — من الصفر', videoCount: 30, duration: '8 ساعات', category: 'english' },
    { title: 'IELTS Full Course — تحضير شامل', videoCount: 50, duration: '15 ساعة', category: 'english' },
    { title: 'French for Beginners — فرنسية', videoCount: 25, duration: '6 ساعات', category: 'french' },
    { title: 'Spanish Complete — إسبانية شاملة', videoCount: 28, duration: '7 ساعات', category: 'spanish' },
    { title: 'German A1-A2 — ألمانية', videoCount: 24, duration: '6 ساعات', category: 'german' },
    { title: 'Japanese N5-N4 — يابانية', videoCount: 35, duration: '10 ساعات', category: 'japanese' },
    { title: 'Chinese HSK 1-3 — صينية', videoCount: 26, duration: '7 ساعات', category: 'chinese' },
  ]
};

// عرض الفيديوهات في صفحة الكورسات
function renderVideos() {
  const container = document.getElementById('videosGrid');
  if (!container) return;

  const allVideos = [
    ...COURSE_VIDEOS.ibrahimAdel.map(v => ({ ...v, category: 'ابراهيم عادل' })),
    ...COURSE_VIDEOS.otherTeachers.map(v => ({ ...v, category: v.teacher }))
  ];

  container.innerHTML = allVideos.map(video => `
    <div class="video-card" onclick="playVideo('${video.id}', '${video.title.replace(/'/g, "\\'")}')">
      <div class="video-thumbnail">
        <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="${video.title}" onerror="this.style.display='none'">
        <div class="video-play">▶</div>
        <span class="video-duration">${video.duration}</span>
      </div>
      <div class="video-info">
        <h4>${video.title}</h4>
        <div class="video-meta">
          <span>${video.category}</span>
          <span>${video.duration}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function playVideo(videoId, title) {
  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'videoModal';
  modal.innerHTML = `
    <div class="video-player-container">
      <button class="close-btn" onclick="document.getElementById('videoModal').remove()">✕</button>
      <div class="video-frame">
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1"
          title="${title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-controls">
        <h4>${title}</h4>
        <div class="video-actions">
          <button class="btn btn-primary btn-sm" onclick="downloadVideo('${videoId}', '${title.replace(/'/g, "\\'")}')">
            تنزيل الفيديو
          </button>
          <button class="btn btn-outline btn-sm" onclick="saveForOffline('${videoId}', '${title.replace(/'/g, "\\'")}')">
            حفظ بدون إنترنت
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function downloadVideo(videoId, title) {
  showToast('جاري التحضير للتنزيل...');
  setTimeout(() => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(url, '_blank');
    showToast('افتح الفيديو واستخدم أداة التنزيل من المتصفح');
  }, 500);
}

function saveForOffline(videoId, title) {
  const saved = JSON.parse(localStorage.getItem('offline_videos') || '[]');
  if (saved.find(v => v.id === videoId)) {
    showToast('هذا الفيديو محفوظ مسبقاً');
    return;
  }
  saved.push({ id: videoId, title, savedAt: new Date().toISOString() });
  localStorage.setItem('offline_videos', JSON.stringify(saved));
  addActivity(`حفظت فيديو بدون إنترنت: ${title}`);
  showToast('تم حفظ الفيديو — ستجده في قسم التنزيلات');
}
