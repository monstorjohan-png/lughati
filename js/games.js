// ========================================
// التمارين التفاعلية — Exercises
// ========================================

let exerciseData = [];
let exerciseIndex = 0;
let exerciseScore = 0;
let exerciseType = '';

// ===== الترجمة =====
function openTranslation(langKey) {
  const lang = langKey || selectedLanguage;
  exerciseData = [...(TRANSLATION_EXERCISES[lang] || TRANSLATION_EXERCISES.english)];
  exerciseType = 'translation';
  exerciseIndex = 0;
  exerciseScore = 0;
  startExercise('ترجم الجملة التالية');
}

// ===== الاستماع =====
function openListening(langKey) {
  const lang = langKey || selectedLanguage;
  exerciseData = [...(LISTENING_EXERCISES[lang] || LISTENING_EXERCISES.english)];
  
  if (exerciseData.length === 0) {
    showToast('تمارين الاستماع لهذه اللغة قيد التطوير');
    return;
  }
  
  exerciseType = 'listening';
  exerciseIndex = 0;
  exerciseScore = 0;
  startExercise('استمع ثم اختر الترجمة الصحيحة');
}

function startExercise(title) {
  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'exerciseModal';
  modal.innerHTML = `
    <div class="lesson-content">
      <button class="close-btn" onclick="closeExercise()">✕</button>
      <h2>${title}</h2>
      <div class="flashcard-stats">
        <span class="flash-stat">سؤال ${exerciseIndex + 1}/${exerciseData.length}</span>
        <span class="flash-stat">النقاط: <strong id="exScore">0</strong></span>
      </div>
      <div class="quiz-progress" style="margin-bottom:var(--space-5);">
        <div class="progress-bar" id="exProgress" style="width:${(exerciseIndex / exerciseData.length) * 100}%"></div>
      </div>
      <div id="exerciseContent"></div>
    </div>
  `;
  document.body.appendChild(modal);
  renderExercise();
}

function renderExercise() {
  const item = exerciseData[exerciseIndex];
  if (!item) return finishExercise();

  const content = document.getElementById('exerciseContent');
  
  if (exerciseType === 'translation') {
    content.innerHTML = `
      <div class="exercise-question">
        <p class="exercise-text" lang="${selectedLanguage}">${item.text}</p>
        <button class="btn btn-outline btn-sm" onclick="speak('${item.text.replace(/'/g, "\\'")}', '${selectedLanguage}')">استمع</button>
      </div>
      <div class="quiz-options" id="exOptions">
        ${item.options.map((opt, i) => `
          <div class="quiz-option" onclick="checkExercise(${i})">${opt}</div>
        `).join('')}
      </div>
    `;
  } else if (exerciseType === 'listening') {
    content.innerHTML = `
      <div class="exercise-question">
        <button class="btn btn-primary btn-listen" onclick="speak('${item.text.replace(/'/g, "\\'")}', '${selectedLanguage}')">
          اضغط للاستماع
        </button>
        <p class="exercise-hint">يمكنك الضغط عدة مرات</p>
      </div>
      <div class="quiz-options" id="exOptions">
        ${item.options.map((opt, i) => `
          <div class="quiz-option" onclick="checkExercise(${i})">${opt}</div>
        `).join('')}
      </div>
    `;
  }
}

function checkExercise(selected) {
  const item = exerciseData[exerciseIndex];
  const options = document.querySelectorAll('#exOptions .quiz-option');
  
  options.forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    if (i === item.correct) opt.classList.add('correct');
    if (i === selected && selected !== item.correct) opt.classList.add('wrong');
  });

  if (selected === item.correct) {
    exerciseScore++;
    document.getElementById('exScore').textContent = exerciseScore;
    playSound('correct');
  } else {
    playSound('wrong');
  }

  setTimeout(() => {
    exerciseIndex++;
    if (exerciseIndex < exerciseData.length) {
      document.getElementById('exProgress').style.width = `${(exerciseIndex / exerciseData.length) * 100}%`;
      renderExercise();
    } else {
      finishExercise();
    }
  }, 1200);
}

function finishExercise() {
  const total = exerciseData.length;
  const accuracy = Math.round((exerciseScore / total) * 100);
  
  // مكافآت
  const currentWords = parseInt(localStorage.getItem('wordsLearned') || 0);
  localStorage.setItem('wordsLearned', currentWords + exerciseScore);
  const wordsEl = document.getElementById('wordsLearned');
  if (wordsEl) wordsEl.textContent = currentWords + exerciseScore;

  // تسجيل التمرين كمكتمل
  const exDone = parseInt(localStorage.getItem('exercisesDone') || '0') + 1;
  localStorage.setItem('exercisesDone', exDone);

  addActivity(`أنهيت تمرين ${exerciseType === 'translation' ? 'الترجمة' : 'الاستماع'} (${accuracy}%)`);
  updateProgressBars();
  checkAchievements();

  const content = document.getElementById('exerciseContent');
  content.innerHTML = `
    <div class="quiz-result">
      <h3>${accuracy >= 80 ? 'ممتاز!' : accuracy >= 60 ? 'جيد!' : 'تحتاج تدريب'}</h3>
      <p>النتيجة: ${exerciseScore}/${total} (${accuracy}%)</p>
      <div class="lesson-actions" style="justify-content:center; margin-top:var(--space-5);">
        <button class="btn btn-primary" onclick="restartExercise()">حاول مجدداً</button>
        <button class="btn btn-outline" onclick="closeExercise()">إغلاق</button>
      </div>
    </div>
  `;
}

function restartExercise() {
  exerciseIndex = 0;
  exerciseScore = 0;
  document.getElementById('exScore').textContent = '0';
  document.getElementById('exProgress').style.width = '0%';
  renderExercise();
}

function closeExercise() {
  const modal = document.getElementById('exerciseModal');
  if (modal) modal.remove();
}

// أصوات التغذية الراجعة
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
  } catch (e) {
    // تجاهل
  }
}
