// ========================================
// نظام بطاقات المفردات — Flashcards
// ========================================

let currentCardIndex = 0;
let cardFlipped = false;
let cardsKnown = 0;
let cardsUnknown = 0;
let currentCards = [];

function openFlashcards(langKey) {
  const lang = langKey || selectedLanguage;
  currentCards = [...(VOCABULARY[lang] || VOCABULARY.english)];
  currentCardIndex = 0;
  cardFlipped = false;
  cardsKnown = 0;
  cardsUnknown = 0;

  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'flashcardModal';
  modal.innerHTML = `
    <div class="lesson-content">
      <button class="close-btn" onclick="closeFlashcards()">✕</button>
      <h2>بطاقات المفردات</h2>
      <div class="flashcard-stats">
        <span class="flash-stat known">أتقيدها: <strong id="knownCount">0</strong></span>
        <span class="flash-stat total">${currentCards.length} بطاقة</span>
        <span class="flash-stat unknown">أعيدها: <strong id="unknownCount">0</strong></span>
      </div>
      <div class="flashcard-container" onclick="flipCard()">
        <div class="flashcard ${cardFlipped ? 'flipped' : ''}" id="flashcard">
          <div class="flashcard-front">
            <p class="flashcard-label">العربية</p>
            <p class="flashcard-word" id="cardFront">${currentCards[0].ar}</p>
            <p class="flashcard-hint">اضغط للكشف</p>
          </div>
          <div class="flashcard-back">
            <p class="flashcard-label">باللغة الأجنبية</p>
            <p class="flashcard-word" id="cardBack">${currentCards[0].en}</p>
            <p class="flashcard-pron" id="cardPron">${currentCards[0].pron || ''}</p>
            <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); speakCard()">استمع</button>
          </div>
        </div>
      </div>
      <div class="flashcard-controls">
        <button class="btn btn-outline" onclick="prevCard()">السابق</button>
        <button class="btn btn-secondary" onclick="skipCard()">تخطي</button>
        <button class="btn btn-primary" onclick="nextCard()">التالي</button>
      </div>
      <div class="flashcard-actions">
        <button class="btn btn-know" onclick="markCard('known')">أعرفها</button>
        <button class="btn btn-unknown" onclick="markCard('unknown')">أراجعها</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function flipCard() {
  cardFlipped = !cardFlipped;
  const card = document.getElementById('flashcard');
  card.classList.toggle('flipped', cardFlipped);
}

function speakCard() {
  const card = currentCards[currentCardIndex];
  speak(card.en, selectedLanguage);
}

function updateCard() {
  const card = currentCards[currentCardIndex];
  if (!card) return;

  cardFlipped = false;
  const cardEl = document.getElementById('flashcard');
  cardEl.classList.remove('flipped');

  setTimeout(() => {
    document.getElementById('cardFront').textContent = card.ar;
    document.getElementById('cardBack').textContent = card.en;
    document.getElementById('cardPron').textContent = card.pron || '';
  }, 200);
}

function nextCard() {
  if (currentCardIndex < currentCards.length - 1) {
    currentCardIndex++;
    updateCard();
  } else {
    showFlashcardComplete();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCard();
  }
}

function skipCard() {
  nextCard();
}

function markCard(status) {
  if (status === 'known') {
    cardsKnown++;
    document.getElementById('knownCount').textContent = cardsKnown;
  } else {
    cardsUnknown++;
    document.getElementById('unknownCount').textContent = cardsUnknown;
  }
  nextCard();
}

function showFlashcardComplete() {
  const modal = document.getElementById('flashcardModal');
  const total = currentCards.length;
  const accuracy = total > 0 ? Math.round((cardsKnown / total) * 100) : 0;

  // تحديث الكلمات المتعلمة
  const currentWords = parseInt(localStorage.getItem('wordsLearned') || 0);
  localStorage.setItem('wordsLearned', currentWords + cardsKnown);
  const wordsEl = document.getElementById('wordsLearned');
  if (wordsEl) wordsEl.textContent = currentWords + cardsKnown;

  // تسجيل النشاط
  addActivity(`أنهيت بطاقات المفردات (${accuracy}%)`);
  updateProgressBars();
  checkAchievements();

  modal.innerHTML = `
    <div class="lesson-content" style="text-align:center;">
      <button class="close-btn" onclick="closeFlashcards()">✕</button>
      <h2>أحسنت!</h2>
      <div class="flashcard-complete">
        <div class="complete-stat">
          <span class="complete-number">${cardsKnown}</span>
          <span class="complete-label">أتقيتها</span>
        </div>
        <div class="complete-stat">
          <span class="complete-number">${cardsUnknown}</span>
          <span class="complete-label">تحتاج مراجعة</span>
        </div>
        <div class="complete-stat">
          <span class="complete-number">${accuracy}%</span>
          <span class="complete-label">الدقة</span>
        </div>
      </div>
      <div class="lesson-actions" style="justify-content:center;">
        <button class="btn btn-primary" onclick="closeFlashcards(); openFlashcards();">إعادة البطاقات</button>
        <button class="btn btn-outline" onclick="closeFlashcards()">إغلاق</button>
      </div>
    </div>
  `;
}

function closeFlashcards() {
  const modal = document.getElementById('flashcardModal');
  if (modal) modal.remove();
}
