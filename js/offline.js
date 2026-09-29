// ========================================
// التحميل بدون إنترنت — Offline Download
// ========================================

const OfflineManager = {
  // تحميل كل المحتوى للعمل بدون إنترنت
  async downloadAllContent() {
    showToast('جاري تجهيز المحتوى للتحميل...');

    const content = {
      vocabulary: typeof VOCABULARY !== 'undefined' ? VOCABULARY : {},
      lessons: typeof LESSONS !== 'undefined' ? LESSONS : {},
      courses: typeof COURSES !== 'undefined' ? COURSES : {},
      videos: typeof COURSE_VIDEOS !== 'undefined' ? COURSE_VIDEOS : {},
      resources: typeof RESOURCES !== 'undefined' ? RESOURCES : {},
      downloadedAt: new Date().toISOString()
    };

    try {
      const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'لغتي-المحتوى الكامل.json';
      a.click();
      URL.revokeObjectURL(url);

      localStorage.setItem('offline_content_downloaded', 'true');
      localStorage.setItem('offline_download_date', new Date().toISOString());

      addActivity('حملت المحتوى الكامل للعمل بدون إنترنت');
      showToast('تم تحميل المحتوى — يمكنك الوصول إليه بدون إنترنت');
    } catch (e) {
      showToast('خطأ في التحميل: ' + e.message, 'error');
    }
  },

  // تحميل قاموس كامل
  downloadDictionary(lang) {
    const vocab = VOCABULARY[lang] || VOCABULARY.english;
    const csv = 'العربية,الأجنبية,النطق\n' + vocab.map(v => `${v.ar},${v.en},${v.pron}`).join('\n');

    try {
      const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `قاموس-${LANGUAGES[lang]?.name || 'english'}.csv`;
      a.click();
      URL.revokeObjectURL(url);

      showToast('تم تحميل القاموس');
    } catch (e) {
      showToast('خطأ في التحميل', 'error');
    }
  },

  // تحميل خطة التعلم
  downloadPlan() {
    const plan = {
      level: localStorage.getItem('userLevel') || 'مبتدئ',
      language: LANGUAGES[selectedLanguage]?.name || 'الإنجليزية',
      completedLessons: JSON.parse(localStorage.getItem('completedLessons') || '[]'),
      wordsLearned: localStorage.getItem('wordsLearned') || '0',
      streak: localStorage.getItem('streak') || '0',
      pathProgress: localStorage.getItem('path_completed_days') || '0',
      assessmentDate: localStorage.getItem('assessment_date') || 'غير محدد'
    };

    const text = `خطة التعلم — لغتي
=============================
المستوى: ${plan.level}
اللغة: ${plan.language}
الكلمات المتعلمة: ${plan.wordsLearned}
الأيام المتتالية: ${plan.streak}
تقدم المسار: ${plan.pathProgress}/28 يوم
تاريخ التقييم: ${plan.assessmentDate}
الدروس المكتملة: ${plan.completedLessons.length}

تم الإنشاء: ${new Date().toLocaleDateString('ar-SA')}
`;

    try {
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'خطة-التعلم.txt';
      a.click();
      URL.revokeObjectURL(url);
      showToast('تم تحميل الخطة');
    } catch (e) {
      showToast('خطأ', 'error');
    }
  },

  // فحص حالة التنزيلات
  getStatus() {
    const hasContent = localStorage.getItem('offline_content_downloaded') === 'true';
    const downloadDate = localStorage.getItem('offline_download_date');
    const offlineVideos = JSON.parse(localStorage.getItem('offline_videos') || '[]');
    const hasSW = 'serviceWorker' in navigator;

    return { hasContent, downloadDate, offlineVideos: offlineVideos.length, hasSW };
  },

  // تسجيل Service Worker
  async registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        // مسار نسبي حتى يعمل على GitHub Pages تحت مجلد فرعي
        await navigator.serviceWorker.register('sw.js', { scope: './' });
        console.log('Service Worker registered');
        if (typeof showToast === 'function') showToast('تم تفعيل وضع عدم الاتصال');
      } catch (e) {
        console.log('SW registration skipped:', e.message);
      }
    }
  }
};

// عرض واجهة التحميل
function showDownloadPanel() {
  const status = OfflineManager.getStatus();

  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'downloadModal';
  modal.innerHTML = `
    <div class="download-container">
      <button class="close-btn" onclick="document.getElementById('downloadModal').remove()">✕</button>
      <div class="download-header">
        <h2>التحميل والمحتوى المتاح بدون إنترنت</h2>
        <p>حمّل مرة واحدة واستخدمه للأبد</p>
      </div>

      <div class="download-status">
        <div class="status-item">
          <span class="status-label">حالة المحتوى:</span>
          <span class="status-value ${status.hasContent ? 'active' : 'inactive'}">
            ${status.hasContent ? '✓ محمّل' : '✗ غير محمّل'}
          </span>
        </div>
        ${status.downloadDate ? `
        <div class="status-item">
          <span class="status-label">تاريخ التحميل:</span>
          <span class="status-value">${new Date(status.downloadDate).toLocaleDateString('ar-SA')}</span>
        </div>` : ''}
        <div class="status-item">
          <span class="status-label">فيديوهات محفوظة:</span>
          <span class="status-value">${status.offlineVideos}</span>
        </div>
        <div class="status-item">
          <span class="status-label">وضع عدم الاتصال:</span>
          <span class="status-value ${navigator.onLine ? 'inactive' : 'active'}">
            ${navigator.onLine ? 'متصل' : 'غير متصل'}
          </span>
        </div>
      </div>

      <div class="download-actions">
        <button class="download-btn primary" onclick="OfflineManager.downloadAllContent()">
          <span class="dl-icon">⬇</span>
          <div>
            <strong>تحميل المحتوى الكامل</strong>
            <p>كل الدروس والمفردات والكورسات — ملف واحد</p>
          </div>
        </button>

        <button class="download-btn" onclick="OfflineManager.downloadDictionary(selectedLanguage)">
          <span class="dl-icon">📖</span>
          <div>
            <strong>تحميل القاموس (${LANGUAGES[selectedLanguage]?.name})</strong>
            <p>كل الكلمات بصيغة CSV</p>
          </div>
        </button>

        <button class="download-btn" onclick="OfflineManager.downloadPlan()">
          <span class="dl-icon">📋</span>
          <div>
            <strong>تحميل خطة التعلم</strong>
            <p>ملخص تقدمك كاملاً</p>
          </div>
        </button>

        <button class="download-btn" onclick="window.print()">
          <span class="dl-icon">🖨</span>
          <div>
            <strong>طباعة الصفحة</strong>
            <p>اطبع أي محتوى تريده</p>
          </div>
        </button>
      </div>

      <div class="download-tips">
        <h4>نصائح للعمل بدون إنترنت:</h4>
        <ul>
          <li>حمّل المحتوى مرة واحدة وسيبقى متاحاً دائماً</li>
          <li>استخدم وضع عدم الاتصال في المتصفح</li>
          <li>الفيديوهات المنزَّلة في قسم «التنزيلات» تعمل بدون إنترنت تماماً</li>
          <li>كل تقدمك محفوظ محلياً على جهازك</li>
        </ul>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}
