// ========================================
// نظام الشارات والمكافآت — Achievements
// ========================================

function checkAchievements() {
  const earned = JSON.parse(localStorage.getItem('achievements') || '[]');
  const lessons = JSON.parse(localStorage.getItem('completedLessons') || '[]').length;
  const streak = parseInt(localStorage.getItem('streak') || '0');
  const words = parseInt(localStorage.getItem('wordsLearned') || '0');
  const quizCompleted = localStorage.getItem('assessmentCompleted') === 'true';
  const assistantUsed = localStorage.getItem('assistantUsed') === 'true';
  const perfectScore = localStorage.getItem('perfectScore') === 'true';

  const newAchievements = [];

  ACHIEVEMENTS.forEach(ach => {
    if (earned.includes(ach.id)) return;

    let unlocked = false;
    switch (ach.condition) {
      case 'lessons >= 1': unlocked = lessons >= 1; break;
      case 'lessons >= 5': unlocked = lessons >= 5; break;
      case 'quiz >= 1': unlocked = quizCompleted; break;
      case 'streak >= 3': unlocked = streak >= 3; break;
      case 'streak >= 7': unlocked = streak >= 7; break;
      case 'streak >= 30': unlocked = streak >= 30; break;
      case 'words >= 50': unlocked = words >= 50; break;
      case 'words >= 100': unlocked = words >= 100; break;
      case 'perfect >= 1': unlocked = perfectScore; break;
      case 'assistant >= 1': unlocked = assistantUsed; break;
    }

    if (unlocked) {
      earned.push(ach.id);
      newAchievements.push(ach);
    }
  });

  localStorage.setItem('achievements', JSON.stringify(earned));

  // إظهار إشعار بالشارات الجديدة
  newAchievements.forEach((ach, i) => {
    setTimeout(() => {
      showAchievementNotification(ach);
    }, i * 2000);
  });
}

function showAchievementNotification(ach) {
  const notif = document.createElement('div');
  notif.className = 'achievement-notification';
  notif.innerHTML = `
    <span class="achievement-icon">${ach.icon}</span>
    <div class="achievement-info">
      <strong>شارة جديدة!</strong>
      <p>${ach.title} — ${ach.description}</p>
    </div>
  `;
  document.body.appendChild(notif);

  setTimeout(() => notif.classList.add('show'), 100);
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.remove(), 400);
  }, 4000);
}

function openAchievements() {
  const earned = JSON.parse(localStorage.getItem('achievements') || '[]');
  
  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'achievementsModal';
  modal.innerHTML = `
    <div class="lesson-content">
      <button class="close-btn" onclick="closeAchievements()">✕</button>
      <h2>الشارات والمكافآت</h2>
      <p style="text-align:center; color:var(--text-secondary); margin-bottom:var(--space-5);">
        حصلت على ${earned.length} من ${ACHIEVEMENTS.length} شارة
      </p>
      <div class="achievements-grid">
        ${ACHIEVEMENTS.map(ach => {
          const isEarned = earned.includes(ach.id);
          return `
            <div class="achievement-card ${isEarned ? 'earned' : 'locked'}">
              <span class="achievement-card-icon">${isEarned ? ach.icon : '🔒'}</span>
              <h4>${ach.title}</h4>
              <p>${ach.description}</p>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeAchievements() {
  const modal = document.getElementById('achievementsModal');
  if (modal) modal.remove();
}
