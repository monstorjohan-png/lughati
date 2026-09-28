// ========================================
// نظام الدروس
// ========================================

let selectedLanguage = 'english';

function selectLanguage(lang) {
  selectedLanguage = lang;
  const langData = LANGUAGES[lang];
  
  localStorage.setItem('selectedLanguage', lang);
  const langEl = document.getElementById('selectedLang');
  if (langEl) langEl.textContent = langData.name;
  
  // إذا لم يكمل الاختبار، ابدأ الاختبار الديناميكي
  if (!localStorage.getItem('assessmentCompleted')) {
    startDynamicQuiz('full');
  } else {
    showAllSections();
    loadLessons();
    generateDailyPlan(localStorage.getItem('userLevel') || 'مبتدئ');
    renderCourses(lang);
    renderLearningPath();
    updateProgressBars();
    updateAchievementsMeta();
    addActivity(`اخترت لغة ${langData.name}`);
    checkAchievements();
    
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    }, 100);
    
    document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
  }
}

function loadLessons() {
  const langData = LANGUAGES[selectedLanguage];
  const grid = document.getElementById('lessonsGrid');
  const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
  
  grid.innerHTML = langData.lessons.map(lesson => {
    const isCompleted = completed.includes(lesson.id);
    return `
    <div class="lesson-card ${isCompleted ? 'completed' : ''}" onclick="openLesson(${lesson.id})">
      ${isCompleted ? '<span class="lesson-done">✓</span>' : ''}
      <h3>${lesson.title}</h3>
      <p>${lesson.description}</p>
      <div class="lesson-meta">
        <span>● ${lesson.duration}</span>
        <span>● ${lesson.level}</span>
      </div>
    </div>
  `;
  }).join('');
}

function openLesson(lessonId) {
  const langData = LANGUAGES[selectedLanguage];
  const lesson = langData.lessons.find(l => l.id === lessonId);
  
  if (!lesson) return;
  
  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'lessonModal';
  modal.innerHTML = `
    <div class="lesson-content">
      <button class="close-btn" onclick="closeLesson()">✕</button>
      <h2>${lesson.title}</h2>
      <p>${lesson.description}</p>
      <div class="lesson-body">
        <div id="lessonMaterial"></div>
        <div class="lesson-actions">
          <button class="btn btn-primary" onclick="markLessonComplete(${lesson.id})">أكملت الدرس</button>
          <button class="btn btn-outline" onclick="closeLesson(); openFlashcards()">تدرب بالمفردات</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  loadLessonMaterial(lesson);
}

function closeLesson() {
  const modal = document.getElementById('lessonModal');
  if (modal) modal.remove();
}

function loadLessonMaterial(lesson) {
  const material = document.getElementById('lessonMaterial');
  
  const content = {
    'مبتدئ': `
      <div class="vocabulary">
        <h4>المفردات الأساسية</h4>
        <ul>
          <li><strong>Hello</strong> — مرحبا <button class="btn btn-sm" onclick="speak('Hello','${selectedLanguage}')">♪</button></li>
          <li><strong>Goodbye</strong> — وداعا <button class="btn btn-sm" onclick="speak('Goodbye','${selectedLanguage}')">♪</button></li>
          <li><strong>Please</strong> — من فضلك <button class="btn btn-sm" onclick="speak('Please','${selectedLanguage}')">♪</button></li>
          <li><strong>Thank you</strong> — شكرا <button class="btn btn-sm" onclick="speak('Thank you','${selectedLanguage}')">♪</button></li>
          <li><strong>Yes</strong> — نعم <button class="btn btn-sm" onclick="speak('Yes','${selectedLanguage}')">♪</button></li>
          <li><strong>No</strong> — لا <button class="btn btn-sm" onclick="speak('No','${selectedLanguage}')">♪</button></li>
        </ul>
      </div>
      <div class="phrases">
        <h4>عبارات مفيدة</h4>
        <p>"Hello, how are you?" — مرحبا، كيف حالك؟ <button class="btn btn-sm" onclick="speak('Hello, how are you?','${selectedLanguage}')">♪</button></p>
        <p>"Thank you very much" — شكرا جزيلا <button class="btn btn-sm" onclick="speak('Thank you very much','${selectedLanguage}')">♪</button></p>
        <p>"Please help me" — من فضلك ساعدني <button class="btn btn-sm" onclick="speak('Please help me','${selectedLanguage}')">♪</button></p>
      </div>
    `,
    'متوسط': `
      <div class="vocabulary">
        <h4>مفردات متوسطة</h4>
        <ul>
          <li><strong>Opportunity</strong> — فرصة <button class="btn btn-sm" onclick="speak('Opportunity','${selectedLanguage}')">♪</button></li>
          <li><strong>Experience</strong> — خبرة <button class="btn btn-sm" onclick="speak('Experience','${selectedLanguage}')">♪</button></li>
          <li><strong>Knowledge</strong> — معرفة <button class="btn btn-sm" onclick="speak('Knowledge','${selectedLanguage}')">♪</button></li>
        </ul>
      </div>
      <div class="grammar">
        <h4>قاعدة نحوية</h4>
        <p>استخدم "Would" للتعبير عن الرغبات:</p>
        <p>"I would like to learn English" — أريد تعلم الإنجليزية</p>
      </div>
    `,
    'متقدم': `
      <div class="vocabulary">
        <h4>مفردات متقدمة</h4>
        <ul>
          <li><strong>Nevertheless</strong> — ومع ذلك <button class="btn btn-sm" onclick="speak('Nevertheless','${selectedLanguage}')">♪</button></li>
          <li><strong>Furthermore</strong> — علاوة على ذلك <button class="btn btn-sm" onclick="speak('Furthermore','${selectedLanguage}')">♪</button></li>
        </ul>
      </div>
    `,
    'خبير': `
      <div class="vocabulary">
        <h4>مفردات احترافية</h4>
        <ul>
          <li><strong>Serendipity</strong> — صدفة سعيدة <button class="btn btn-sm" onclick="speak('Serendipity','${selectedLanguage}')">♪</button></li>
          <li><strong>Ephemeral</strong> — عابر <button class="btn btn-sm" onclick="speak('Ephemeral','${selectedLanguage}')">♪</button></li>
        </ul>
      </div>
    `
  };
  
  material.innerHTML = content[lesson.level] || content['مبتدئ'];
}

function markLessonComplete(lessonId) {
  let completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
  if (!completed.includes(lessonId)) {
    completed.push(lessonId);
    localStorage.setItem('completedLessons', JSON.stringify(completed));
    
    // تحديث العداد
    const counter = document.getElementById('lessonsCompleted');
    if (counter) counter.textContent = completed.length;
    
    addActivity('أكملت درساً جديداً');
    updateProgressBars();
    checkAchievements();
    showToast('أحسنت! أكملت الدرس بنجاح');
  }
  
  closeLesson();
  loadLessons();
}
