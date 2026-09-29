// ========================================
// نظام تتبع التقدم
// ========================================

function loadProgress() {
  const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
  const wordsLearned = localStorage.getItem('wordsLearned') || 0;
  const streak = localStorage.getItem('streak') || 0;
  
  const lessonsEl = document.getElementById('lessonsCompleted');
  const wordsEl = document.getElementById('wordsLearned');
  const streakEl = document.getElementById('streak');
  
  if (lessonsEl) lessonsEl.textContent = completedLessons.length;
  if (wordsEl) wordsEl.textContent = wordsLearned;
  if (streakEl) streakEl.textContent = streak;
}

function updateStreak() {
  const lastVisit = localStorage.getItem('lastVisit');
  const today = new Date().toDateString();
  
  if (lastVisit !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastVisit === yesterday.toDateString()) {
      const streak = parseInt(localStorage.getItem('streak') || '0') + 1;
      localStorage.setItem('streak', streak);
    } else {
      localStorage.setItem('streak', '1');
    }
    
    localStorage.setItem('lastVisit', today);
  }
}

function saveProgress() {
  const progress = {
    language: selectedLanguage,
    level: localStorage.getItem('userLevel'),
    completedLessons: JSON.parse(localStorage.getItem('completedLessons') || '[]'),
    wordsLearned: localStorage.getItem('wordsLearned') || 0,
    streak: localStorage.getItem('streak') || 0,
    lastVisit: new Date().toISOString()
  };
  
  localStorage.setItem('userProgress', JSON.stringify(progress));
}

// الخطة اليومية في لوحة التحكم
function generateDailyPlan(level) {
  const plans = {
    'مبتدئ': [
      'تعلم 5 كلمات جديدة اليوم',
      'استمع لمحادثة بسيطة لمدة 10 دقائق',
      'كرر التحيات الأساسية 5 مرات',
      'اكتب 3 جمل بسيطة عن نفسك'
    ],
    'متوسط': [
      'تعلم 10 كلمات جديدة',
      'اقرأ نصاً قصيراً وحاول فهم الفكرة العامة',
      'استمع لبودكاست لمدة 15 دقيقة',
      'تحدث مع نفسك لمدة 5 دقائق'
    ],
    'متقدم': [
      'تعلم 15 كلمة جديدة',
      'شاهد فيديو بدون ترجمة',
      'اكتب فقرة قصيرة عن يومك',
      'راجع قاعدة نحوية متقدمة'
    ],
    'خبير': [
      'اقرأ مقالاً طويلاً',
      'شارك في محادثة مع متحدث أصلي',
      'اكتب مقالاً قصيراً',
      'علم شخصاً آخر ما تعلمته'
    ]
  };

  const plan = plans[level] || plans['مبتدئ'];
  const planEl = document.getElementById('dailyPlan');
  if (planEl) planEl.innerHTML = plan.map(item => `<li>${item}</li>`).join('');
}

// تحميل التقدم عند بدء التطبيق
document.addEventListener('DOMContentLoaded', () => {
  updateStreak();
  loadProgress();
  saveProgress();
});
