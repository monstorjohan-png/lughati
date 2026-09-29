// ========================================
// تثبيت الموقع كتطبيق على الهاتف (PWA)
// ========================================

const PWA = {
  deferred: null,
  isStandalone: false,

  init() {
    try {
      this.isStandalone = window.matchMedia('(display-mode: standalone)').matches
        || window.navigator.standalone === true;
    } catch (e) { this.isStandalone = false; }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferred = e;
      this.refreshButtons();
    });

    window.addEventListener('appinstalled', () => {
      this.deferred = null;
      this.refreshButtons();
      if (typeof showToast === 'function') showToast('تم تثبيت «لغتي» على جهازك');
      if (typeof addActivity === 'function') addActivity('ثبّت تطبيق لغتي على جهازه');
    });

    this.refreshButtons();
    document.addEventListener('click', (e) => {
      const btn = e.target.closest && e.target.closest('.pwa-install-btn');
      if (btn) { e.preventDefault(); this.install(); }
    });
  },

  refreshButtons() {
    document.querySelectorAll('.pwa-install-btn').forEach((b) => {
      b.classList.toggle('hidden', this.isStandalone);
      if (this.deferred && !this.isStandalone) b.classList.add('is-ready');
    });
  },

  platform() {
    const ua = navigator.userAgent || '';
    if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
    if (/Android/i.test(ua)) return 'android';
    if (/Edg\//i.test(ua)) return 'edge';
    if (/Chrome\//i.test(ua)) return 'chrome';
    if (/Firefox\//i.test(ua)) return 'firefox';
    return 'other';
  },

  async install() {
    if (this.isStandalone) {
      if (typeof showToast === 'function') showToast('التطبيق مثبَّت بالفعل');
      return;
    }
    if (this.deferred) {
      try {
        this.deferred.prompt();
        const choice = await this.deferred.userChoice;
        if (choice && choice.outcome === 'accepted') {
          if (typeof showToast === 'function') showToast('جاري تثبيت التطبيق...');
        }
        this.deferred = null;
        this.refreshButtons();
        return;
      } catch (e) { this.deferred = null; }
    }
    this.showGuide();
  },

  showGuide() {
    const p = this.platform();
    const steps = {
      ios: [
        'افتح هذا الموقع في متصفح Safari.',
        'اضغط زر «المشاركة» (المربع والسهم) في شريط الأدوات السفلي.',
        'اختر «إضافة إلى الشاشة الرئيسية».',
        'اضغط «إضافة» في الأعلى — سيظهر أيقونة لغتي على شاشتك.'
      ],
      android: [
        'افتح الموقع في متصفح Chrome.',
        'اضغط قائمة «⋮» في الأعلى.',
        'اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».',
        'اضغط «تثبيت» — سيُثبَّت كتطبيق مستقل.'
      ],
      edge: [
        'افتح الموقع في متصفح Microsoft Edge.',
        'اضغط قائمة «⋯» ثم «تطبيقات» › «تثبيت هذا الموقع كتطبيق».',
        'اضغط «تثبيت».'
      ],
      chrome: [
        'افتح الموقع في متصفح Chrome.',
        'اضغط قائمة «⋮» ثم «تثبيت لغتي...» أو «إنشاء اختصار».',
        'اضغط «تثبيت».'
      ],
      firefox: [
        'افتح الموقع في متصفح Firefox.',
        'اضغط «⋮» ثم «تثبيت» / «إضافة إلى الشاشة الرئيسية».'
      ],
      other: [
        'استخدم متصفح Chrome أو Safari لأفضل دعم للتثبيت.',
        'ابحث في قائمة المتصفح عن «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».'
      ]
    }[p];

    const old = document.getElementById('pwaGuideModal');
    if (old) old.remove();
    const modal = document.createElement('div');
    modal.className = 'lesson-modal';
    modal.id = 'pwaGuideModal';
    modal.innerHTML = `
      <div class="download-container">
        <button class="close-btn" onclick="document.getElementById('pwaGuideModal').remove()">✕</button>
        <div class="download-header">
          <h2>تثبيت لغتي كتطبيق على الهاتف</h2>
          <p>يعمل بدون متصفح وبدون إنترنت بعد التثبيت</p>
        </div>
        <ol class="dl-steps">
          ${steps.map((s) => `<li>${escapeAttr(s)}</li>`).join('')}
        </ol>
        <div class="download-tips">
          <p>بعد التثبيت سيفتح التطبيق بملء الشاشة بأيقونته الخاصة، وتبقى كل تنزيلاتك وتقدمك محفوظاً كما هي.</p>
        </div>
        <div class="download-actions">
          <button class="download-btn primary" onclick="OfflineManager.registerSW()">
            <div><strong>تفعيل وضع عدم الاتصال</strong><p>يخزّن الموقع كاملاً ليعمل بدون إنترنت</p></div>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.style.opacity = '1';
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => PWA.init());
} else {
  PWA.init();
}
