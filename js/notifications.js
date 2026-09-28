// ========================================
// نظام الإشعارات — Notifications
// ========================================

const Notifications = {
  // طلب إذن الإشعارات
  requestPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  },

  // إرسال إشعار
  send(title, body) {
    // إشعار داخل التطبيق
    const notif = document.createElement('div');
    notif.className = 'app-notification';
    notif.innerHTML = `
      <div class="notif-icon">◆</div>
      <div class="notif-content">
        <strong>${title}</strong>
        <p>${body}</p>
      </div>
      <button class="notif-close" onclick="this.parentElement.remove()">✕</button>
    `;
    document.body.appendChild(notif);

    setTimeout(() => notif.classList.add('show'), 100);
    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.remove(), 400);
    }, 5000);

    // إشعار النظام
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, { body, icon: '◆' });
      } catch (e) {}
    }
  },

  // فحص التذكير اليومي
  checkDailyReminder() {
    const lastReminder = localStorage.getItem('last_reminder');
    const today = new Date().toDateString();

    if (lastReminder !== today) {
      const streak = parseInt(localStorage.getItem('streak') || '0');

      setTimeout(() => {
        if (streak > 0) {
          this.send('استمر! 🔥', `يومك ${streak} على التوالي! لا تكسر السلسلة`);
        } else {
          this.send('حان وقت التعلم! ◆', 'خصص 15 دقيقة اليوم لتحسين مهاراتك');
        }
        localStorage.setItem('last_reminder', today);
      }, 3000);
    }
  },

  // تذكير الإنجازات
  checkMilestones() {
    const words = parseInt(localStorage.getItem('wordsLearned') || '0');
    const milestones = [10, 25, 50, 100, 250, 500, 1000];

    milestones.forEach(m => {
      if (words >= m && !localStorage.getItem(`milestone_${m}`)) {
        localStorage.setItem(`milestone_${m}`, 'true');
        setTimeout(() => {
          this.send('إنجاز جديد! ★', `تعلمت ${m} كلمة! استمر في التقدم`);
        }, 1000);
      }
    });
  },

  // تذكير بالعودة
  checkReturnReminder() {
    const lastVisit = localStorage.getItem('last_visit_timestamp');
    if (!lastVisit) {
      localStorage.setItem('last_visit_timestamp', Date.now());
      return;
    }

    const hoursSinceLastVisit = (Date.now() - parseInt(lastVisit)) / (1000 * 60 * 60);

    if (hoursSinceLastVisit > 24) {
      this.send('اشتقنا لك! ◆', 'لم تزُرنا منذ يوم كامل. تقدمك ينتظرك!');
    }

    localStorage.setItem('last_visit_timestamp', Date.now());
  }
};
