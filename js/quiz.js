// ========================================
// نظام اختبار المستوى
// ========================================

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function startAssessment() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  
  document.getElementById('assessment').classList.remove('hidden');
  document.getElementById('assessment').scrollIntoView({ behavior: 'smooth' });
  
  showQuestion();
}

function showQuestion() {
  const question = ASSESSMENT_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion) / ASSESSMENT_QUESTIONS.length) * 100;
  
  document.getElementById('quizProgress').style.width = progress + '%';
  document.getElementById('quizQuestion').textContent = question.question;
  
  const optionsContainer = document.getElementById('quizOptions');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionEl = document.createElement('div');
    optionEl.className = 'quiz-option';
    optionEl.textContent = option;
    optionEl.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(optionEl);
  });
  
  document.getElementById('quizResult').classList.add('hidden');
}

function selectAnswer(index) {
  const question = ASSESSMENT_QUESTIONS[currentQuestion];
  const options = document.querySelectorAll('.quiz-option');
  
  options.forEach((opt, i) => {
    if (i === question.correct) {
      opt.classList.add('correct');
    } else if (i === index && index !== question.correct) {
      opt.classList.add('wrong');
    }
    opt.style.pointerEvents = 'none';
  });
  
  if (index === question.correct) {
    score++;
    playSound('correct');
  } else {
    playSound('wrong');
  }
  
  userAnswers.push({
    question: question.question,
    selected: index,
    correct: index === question.correct
  });
  
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < ASSESSMENT_QUESTIONS.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

function showResult() {
  const percentage = (score / ASSESSMENT_QUESTIONS.length) * 100;
  let level, message;
  
  if (percentage >= 90) {
    level = 'خبير';
    message = 'ممتاز! أنت متقدم جداً. يمكنك البدء بدروس المستوى المتقدم.';
    localStorage.setItem('perfectScore', 'true');
  } else if (percentage >= 70) {
    level = 'متقدم';
    message = 'رائع! لديك أساس جيد. ننصحك بمراجعة القواعد المتقدمة.';
  } else if (percentage >= 50) {
    level = 'متوسط';
    message = 'جيد! أنت في المستوى المتوسط. ركز على تحسين المحادثة.';
  } else {
    level = 'مبتدئ';
    message = 'لا بأس! كل رحلة تبدأ بخطوة. سنبدأ معك من الأساسيات.';
  }
  
  document.getElementById('quizProgress').style.width = '100%';
  document.getElementById('quizQuestion').textContent = 'اكتمل الاختبار!';
  document.getElementById('quizOptions').innerHTML = '';
  
  const resultEl = document.getElementById('quizResult');
  resultEl.innerHTML = `
    <h3>مستواك: ${level}</h3>
    <p>النتيجة: ${score}/${ASSESSMENT_QUESTIONS.length} (${percentage}%)</p>
    <p>${message}</p>
    <button class="btn btn-primary" onclick="createPlan('${level}')">أنشئ خطتي التعليمية</button>
  `;
  resultEl.classList.remove('hidden');
  
  // حفظ النتيجة
  localStorage.setItem('userLevel', level);
  localStorage.setItem('assessmentCompleted', 'true');
  
  addActivity(`أنهيت اختبار المستوى: ${level} (${percentage}%)`);
  checkAchievements();
}

function createPlan(level) {
  document.getElementById('assessment').classList.add('hidden');
  showAllSections();
  
  const levelEl = document.getElementById('currentLevel');
  if (levelEl) levelEl.textContent = level;
  
  generateDailyPlan(level);
  loadLessons();
  renderCourses(selectedLanguage);
  renderLearningPath();
  updateProgressBars();
  updateAchievementsMeta();
  renderActivityLog();
  
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
  }, 100);
  
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}

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
