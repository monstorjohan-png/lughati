// ========================================
// المسار التعليمي — Learning Path
// مسار مدروس ومسلي يمنع الملل والكسل
// ========================================

const LearningPath = {
  // مراحل المسار
  stages: [
    {
      id: 'stage_1',
      title: 'البداية الممتعة',
      subtitle: 'أول 7 أيام — الأساسيات',
      icon: '●',
      color: '#10b981',
      goal: 'تعلم الأساسيات وكسر حاجز الخوف',
      days: [
        { day: 1, title: 'أول خطوة', tasks: ['اختبار المستوى المبدئي', 'تعلم 5 كلمات جديدة', 'تعرف على واجهة الموقع'], reward: '10 نقاط', duration: '15 دقيقة' },
        { day: 2, title: 'التحيات', tasks: ['تعلم 10 تحيات', 'استمع للنطق الصحيح', 'تدرب على النطق'], reward: '15 نقطة', duration: '20 دقيقة' },
        { day: 3, title: 'الأرقام', tasks: ['تعلم الأرقام 1-20', 'اختبار سريع', 'مطابقة الأرقام'], reward: '15 نقطة', duration: '20 دقيقة' },
        { day: 4, title: 'الألوان والأشياء', tasks: ['تعلم 10 ألوان', 'بطاقات المفردات', 'اختبار مطابقة'], reward: '20 نقطة', duration: '25 دقيقة' },
        { day: 5, title: 'العائلة', tasks: ['أسماء أفراد العائلة', 'تحدث عن عائلتك', 'اختبار'], reward: '20 نقطة', duration: '25 دقيقة' },
        { day: 6, title: 'الطعام', tasks: ['أسماء الأطعمة', 'في المطعم', 'محاكاة طلب'], reward: '25 نقطة', duration: '30 دقيقة' },
        { day: 7, title: 'أسبوع كامل!', tasks: ['مراجعة الأسبوع', 'اختبار شامل', 'احصل على شارة البداية'], reward: 'شارة ★ + 50 نقطة', duration: '30 دقيقة' }
      ]
    },
    {
      id: 'stage_2',
      title: 'بناء الثقة',
      subtitle: 'الأسبوع 2-3 — المحادثة',
      icon: '◆',
      color: '#6366f1',
      goal: 'التحدث بثقة في مواقف بسيطة',
      days: [
        { day: 8, title: 'التحية والتعارف', tasks: ['تعلم عبارات التعارف', 'محادثة مع المساعد', 'تدريب صوتي'], reward: '25 نقطة', duration: '30 دقيقة' },
        { day: 9, title: 'الأسئلة', tasks: ['كيف تسأل', 'أنواع الأسئلة', 'تدريب المحادثة'], reward: '25 نقطة', duration: '30 دقيقة' },
        { day: 10, title: 'الأفعال الأساسية', tasks: ['10 أفعال يومية', 'المضارع البسيط', 'اختبار'], reward: '30 نقطة', duration: '35 دقيقة' },
        { day: 11, title: 'في الشارع', tasks: ['السؤال عن الطريق', 'موقف واقعي', 'محادثة تفاعلية'], reward: '30 نقطة', duration: '35 دقيقة' },
        { day: 12, title: 'التسوق', tasks: ['عبارات التسوق', 'الأسعار', 'محاكاة شراء'], reward: '35 نقطة', duration: '30 دقيقة' },
        { day: 13, title: 'المطعم', tasks: ['طلب الطعام', 'التقييم', 'محادثة كاملة'], reward: '35 نقطة', duration: '35 دقيقة' },
        { day: 14, title: 'نهاية الأسبوع 2', tasks: ['اختبار شامل', 'مراجعة', 'شارة جديدة'], reward: 'شارة ◆ + 75 نقطة', duration: '40 دقيقة' }
      ]
    },
    {
      id: 'stage_3',
      title: 'التطور',
      subtitle: 'الأسبوع 4-6 — التوسع',
      icon: '★',
      color: '#f59e0b',
      goal: 'توسيع المفردات وتحسين الفهم',
      days: [
        { day: 15, title: 'السفر', tasks: ['المطار والفندق', 'الاتجاهات', 'محاكاة سفر'], reward: '40 نقطة', duration: '40 دقيقة' },
        { day: 16, title: 'العمل', tasks: ['مفردات العمل', 'المقابلات', 'كتابة سيرة ذاتية'], reward: '40 نقطة', duration: '40 دقيقة' },
        { day: 17, title: 'المشاعر', tasks: ['التعبير عن المشاعر', 'الأفعال', 'محادثة عميقة'], reward: '45 نقطة', duration: '35 دقيقة' },
        { day: 18, title: 'الماضي', tasks: ['التكلم عن الماضي', 'القصص', 'اختبار'], reward: '45 نقطة', duration: '40 دقيقة' },
        { day: 19, title: 'المستقبل', tasks: ['خطط المستقبل', 'الأحلام', 'محادثة'], reward: '50 نقطة', duration: '40 دقيقة' },
        { day: 20, title: 'الثقافة', tasks: ['عادات وتقاليد', 'أمثال', 'قصص'], reward: '50 نقطة', duration: '35 دقيقة' },
        { day: 21, title: 'نهاية الأسبوع 3', tasks: ['اختبار شامل', 'تقييم شامل', 'شارة جديدة'], reward: 'شارة ★ + 100 نقطة', duration: '45 دقيقة' }
      ]
    },
    {
      id: 'stage_4',
      title: 'الإتقان',
      subtitle: 'الأسبوع 7-8 — الاحتراف',
      icon: '♦',
      color: '#ec4899',
      goal: 'الوصول لمستوى متقدم والطلاقة',
      days: [
        { day: 22, title: 'النقاش', tasks: ['التعبير عن الرأي', 'الحوار', 'محاولة إقناع'], reward: '55 نقطة', duration: '45 دقيقة' },
        { day: 23, title: 'الكتابة', tasks: ['فقرة قصيرة', 'رسالة', 'تدقيق'], reward: '55 نقطة', duration: '45 دقيقة' },
        { day: 24, title: 'القراءة', tasks: ['نص متوسط', 'استخراج المعاني', 'اختبار فهم'], reward: '60 نقطة', duration: '45 دقيقة' },
        { day: 25, title: 'الاستماع المتقدم', tasks: ['فيديو بدون ترجمة', 'ملاحظات', 'اختبار'], reward: '60 نقطة', duration: '50 دقيقة' },
        { day: 26, title: 'التصوير', tasks: ['وصف الصور', 'السرد', 'محادثة'], reward: '65 نقطة', duration: '45 دقيقة' },
        { day: 27, title: 'التحضير للاختبار', tasks: ['مراجعة شاملة', 'نقاط الضعف', 'تدريب مكثف'], reward: '70 نقطة', duration: '50 دقيقة' },
        { day: 28, title: 'التخرج!', tasks: ['الاختبار النهائي', 'تقييم المستوى', 'احصل على شارة التخرج'], reward: 'شارة ♦ + 200 نقطة', duration: '60 دقيقة' }
      ]
    }
  ],

  // حساب التقدم
  getProgress() {
    const completedDays = parseInt(localStorage.getItem('path_completed_days') || '0');
    const totalDays = 28;
    return {
      completedDays,
      totalDays,
      percent: Math.round((completedDays / totalDays) * 100),
      currentStage: this.getCurrentStage(completedDays),
      currentDay: Math.min(completedDays + 1, totalDays)
    };
  },

  getCurrentStage(completedDays) {
    if (completedDays < 7) return 0;
    if (completedDays < 14) return 1;
    if (completedDays < 21) return 2;
    return 3;
  },

  getDayInfo(dayNumber) {
    for (const stage of this.stages) {
      const day = stage.days.find(d => d.day === dayNumber);
      if (day) return { ...day, stage };
    }
    return null;
  },

  // تنفيذ يوم
  completeDay(dayNumber) {
    const completed = parseInt(localStorage.getItem('path_completed_days') || '0');
    if (dayNumber <= completed) return; // مكتمل مسبقاً

    localStorage.setItem('path_completed_days', dayNumber);

    // إضافة نقاط
    const dayInfo = this.getDayInfo(dayNumber);
    const currentPoints = parseInt(localStorage.getItem('total_points') || '0');
    const rewardPoints = dayInfo ? parseInt(dayInfo.reward.match(/\d+/)?.[0] || '0') : 10;
    localStorage.setItem('total_points', currentPoints + rewardPoints);

    addActivity(`أكملت اليوم ${dayNumber} من المسار التعليمي`);
    checkAchievements();

    // إشعار
    if (dayInfo) {
      Notifications.send(`يوم ${dayNumber} مكتمل! ★`, `${dayInfo.title} — حصلت على ${dayInfo.reward}`);
    }
  }
};

// === واجهة المسار التعليمي ===
function renderLearningPath() {
  const progress = LearningPath.getProgress();
  const container = document.getElementById('pathContainer');
  if (!container) return;

  const points = localStorage.getItem('total_points') || '0';

  container.innerHTML = `
    <div class="path-overview">
      <div class="path-progress-ring">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="var(--bg-secondary)" stroke-width="8"/>
          <circle cx="60" cy="60" r="54" fill="none" stroke="url(#goldGrad)" stroke-width="8"
            stroke-dasharray="${2 * Math.PI * 54}"
            stroke-dashoffset="${2 * Math.PI * 54 * (1 - progress.percent / 100)}"
            stroke-linecap="round" transform="rotate(-90 60 60)"/>
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#b8860b"/>
              <stop offset="100%" stop-color="#daa520"/>
            </linearGradient>
          </defs>
        </svg>
        <div class="path-percent">${progress.percent}%</div>
      </div>
      <div class="path-stats">
        <div class="path-stat">
          <strong>${progress.completedDays}</strong>
          <span>يوم مكتمل</span>
        </div>
        <div class="path-stat">
          <strong>${points}</strong>
          <span>نقطة</span>
        </div>
        <div class="path-stat">
          <strong>${progress.currentDay}</strong>
          <span>اليوم الحالي</span>
        </div>
      </div>
    </div>

    <div class="path-stages">
      ${LearningPath.stages.map((stage, idx) => {
        const isCurrent = idx === progress.currentStage;
        const isCompleted = idx < progress.currentStage;
        const stageDone = stage.days.filter(d => d.day <= progress.completedDays).length;
        const stagePercent = Math.round((stageDone / stage.days.length) * 100);

        return `
        <div class="path-stage ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''}">
          <div class="stage-header" style="border-color: ${stage.color};">
            <div class="stage-icon" style="background: ${stage.color}22; color: ${stage.color};">${stage.icon}</div>
            <div class="stage-info">
              <h3>${stage.title}</h3>
              <p>${stage.subtitle}</p>
              <span class="stage-goal">${stage.goal}</span>
            </div>
            <div class="stage-progress">
              <strong>${stagePercent}%</strong>
              <div class="stage-progress-bar">
                <div class="stage-progress-fill" style="width: ${stagePercent}%; background: ${stage.color};"></div>
              </div>
            </div>
          </div>

          ${isCurrent || isCompleted ? `
          <div class="stage-days">
            ${stage.days.map(day => {
              const isDone = day.day <= progress.completedDays;
              const isToday = day.day === progress.currentDay;
              return `
              <div class="path-day ${isDone ? 'done' : ''} ${isToday ? 'today' : ''}" 
                   onclick="${isDone ? '' : `completePathDay(${day.day})`}">
                <div class="day-number">${isDone ? '✓' : day.day}</div>
                <div class="day-info">
                  <h4>${day.title}</h4>
                  <ul>${day.tasks.map(t => `<li>${t}</li>`).join('')}</ul>
                  <div class="day-meta">
                    <span>${day.duration}</span>
                    <span>${day.reward}</span>
                  </div>
                </div>
                ${isToday ? '<div class="day-badge">اليوم</div>' : ''}
              </div>
            `;
            }).join('')}
          </div>
          ` : ''}
        </div>
      `;
      }).join('')}
    </div>
  `;
}

function completePathDay(dayNumber) {
  LearningPath.completeDay(dayNumber);
  renderLearningPath();

  // فتح نشاط اليوم
  const dayInfo = LearningPath.getDayInfo(dayNumber);
  if (dayInfo) {
    showToast(`يوم ${dayNumber}: ${dayInfo.title} — ${dayInfo.reward}`);
  }
}
