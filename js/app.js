// ========================================
// التطبيق الرئيسي
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // تحريك العناصر عند التمرير
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
  // شريط تقدم القراءة
  const progressBar = document.getElementById('readingProgress');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';
  });
  
  // التنقل السلس
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // تحميل الوضع المحفوظ
  loadTheme();
  
  // تحميل التقدم
  loadSavedData();
  
  // تحديث واجهة المصادقة
  updateAuthUI();
  
  // فحص الشارات
  checkAchievements();
  
  // الإشعارات
  Notifications.requestPermission();
  Notifications.checkDailyReminder();
  Notifications.checkMilestones();
  Notifications.checkReturnReminder();
  
  // تأثير الموجة للأزرار
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
  });
  
  // تسجيل Service Worker للعمل بدون إنترنت
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});

// === تبديل الوضع ===
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector('.theme-icon');
  
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    if (icon) icon.textContent = '☀';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    if (icon) icon.textContent = '☾';
    localStorage.setItem('theme', 'dark');
  }
}

function loadTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.body.classList.add(saved);
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = saved === 'dark' ? '☾' : '☀';
}

// === تحميل البيانات المحفوظة ===
function loadSavedData() {
  const level = localStorage.getItem('userLevel');
  const lang = localStorage.getItem('selectedLanguage');
  const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
  const words = localStorage.getItem('wordsLearned') || '0';
  const streak = localStorage.getItem('streak') || '0';
  
  if (level) {
    const levelEl = document.getElementById('currentLevel');
    if (levelEl) levelEl.textContent = level;
  }
  
  if (lang && LANGUAGES[lang]) {
    selectedLanguage = lang;
    const langEl = document.getElementById('selectedLang');
    if (langEl) langEl.textContent = LANGUAGES[lang].name;
  }
  
  const lessonsEl = document.getElementById('lessonsCompleted');
  if (lessonsEl) lessonsEl.textContent = completed.length;
  
  const wordsEl = document.getElementById('wordsLearned');
  if (wordsEl) wordsEl.textContent = words;
  
  const streakEl = document.getElementById('streak');
  if (streakEl) streakEl.textContent = streak;
  
  // إظهار الأقسام إذا تم البدء مسبقاً
  if (localStorage.getItem('assessmentCompleted')) {
    showAllSections();
    loadLessons();
    generateDailyPlan(level || 'مبتدئ');
    renderCourses(selectedLanguage);
    renderLearningPath();
    updateProgressBars();
    updateAchievementsMeta();
    
    // إعادة التحريك
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    }, 100);
  }
  
  // سجل النشاط
  renderActivityLog();
}

function showAllSections() {
  ['dashboard', 'lessons', 'courses', 'path', 'practice', 'progress', 'assessment', 'chat', 'videos', 'resources'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  });
  
  // عرض الفيديوهات والموارد
  try { renderVideos(); } catch(e) {}
  try { renderResources(); } catch(e) {}
}

// === تحديث أشرطة التقدم ===
function updateProgressBars() {
  const words = parseInt(localStorage.getItem('wordsLearned') || '0');
  const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]').length;
  const totalLessons = LANGUAGES[selectedLanguage]?.lessons.length || 6;
  const exercises = parseInt(localStorage.getItem('exercisesDone') || '0');
  const pathDays = parseInt(localStorage.getItem('path_completed_days') || '0');
  
  const setBar = (barId, percentId, value) => {
    const bar = document.getElementById(barId);
    const label = document.getElementById(percentId);
    if (bar) bar.style.width = value + '%';
    if (label) label.textContent = value + '%';
  };
  
  setBar('vocabBar', 'vocabPercent', Math.min(100, Math.round((words / 100) * 100)));
  setBar('lessonsBar', 'lessonsPercent', Math.min(100, Math.round((completed / totalLessons) * 100)));
  setBar('exercisesBar', 'exercisesPercent', Math.min(100, Math.round((exercises / 20) * 100)));
  setBar('pathBar', 'pathPercent', Math.min(100, Math.round((pathDays / 28) * 100)));
}

// === تحديث عداد الشارات ===
function updateAchievementsMeta() {
  const earned = JSON.parse(localStorage.getItem('achievements') || '[]');
  const el = document.getElementById('achievementsMeta');
  if (el) el.textContent = `${earned.length}/${ACHIEVEMENTS.length}`;
}

// === سجل النشاط ===
function addActivity(text) {
  const log = JSON.parse(localStorage.getItem('activityLog') || '[]');
  log.unshift({
    text,
    time: new Date().toLocaleString('ar-SA', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' })
  });
  if (log.length > 20) log.pop();
  localStorage.setItem('activityLog', JSON.stringify(log));
  renderActivityLog();
}

function renderActivityLog() {
  const log = JSON.parse(localStorage.getItem('activityLog') || '[]');
  const container = document.getElementById('activityLog');
  if (!container) return;
  
  if (log.length === 0) {
    container.innerHTML = '<p class="activity-empty">ابدأ التعلم لتظهر نشاطاتك هنا</p>';
    return;
  }
  
  container.innerHTML = log.map(item => `
    <div class="activity-item">
      <span>●</span>
      <span>${item.text}</span>
      <span class="activity-time">${item.time}</span>
    </div>
  `).join('');
}

// === إظهار إشعار ===
function showToast(message, type) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// === تأثير الموجة ===
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  const rect = button.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add('ripple');
  
  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) ripple.remove();
  
  button.appendChild(circle);
}

// === صوت التغذية الراجعة ===
function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.value = 0.1;
    
    if (type === 'correct') {
      osc.frequency.value = 800;
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.setValueAtTime(1000, ctx.currentTime + 0.1);
    } else {
      osc.frequency.value = 300;
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.setValueAtTime(200, ctx.currentTime + 0.1);
    }
    
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {}
}

// حفظ التقدم
window.addEventListener('beforeunload', () => {
  saveProgress();
});
