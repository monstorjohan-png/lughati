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

// تحميل التقدم عند بدء التطبيق
document.addEventListener('DOMContentLoaded', () => {
  updateStreak();
  loadProgress();
  saveProgress();
});
