// ========================================
// النطق المحسن — Enhanced Speech
// ========================================

const SpeechEngine = {
  voices: [],
  initialized: false,

  init() {
    if (this.initialized) return;
    this.voices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
    };
    this.initialized = true;
  },

  getBestVoice(lang) {
    this.init();
    const langCode = { english: 'en', french: 'fr', spanish: 'es', german: 'de', japanese: 'ja', chinese: 'zh' };
    const prefix = langCode[lang] || 'en';

    // تفضل الأصوات المحلية
    let voice = this.voices.find(v => v.lang.startsWith(prefix) && v.localService);
    if (!voice) voice = this.voices.find(v => v.lang.startsWith(prefix));
    if (!voice) voice = this.voices.find(v => v.lang.includes(prefix));
    if (!voice) voice = this.voices[0];

    return voice;
  },

  speak(text, lang, options = {}) {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) {
        showToast('النطق غير مدعوم في متصفحك', 'error');
        resolve();
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = { english: 'en-US', french: 'fr-FR', spanish: 'es-ES', german: 'de-DE', japanese: 'ja-JP', chinese: 'zh-CN' }[lang] || 'en-US';
      utterance.rate = options.rate || 0.8;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      const voice = this.getBestVoice(lang);
      if (voice) utterance.voice = voice;

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    });
  },

  // نطق متعدد الجمل
  speakSlow(text, lang) {
    return this.speak(text, lang, { rate: 0.6 });
  },

  speakFast(text, lang) {
    return this.speak(text, lang, { rate: 1.1 });
  }
};

// دوال متوافقة
function speak(text, lang) {
  SpeechEngine.speak(text, lang || selectedLanguage);
}

function speakSlow(text, lang) {
  SpeechEngine.speakSlow(text, lang || selectedLanguage);
}

// === الميكروفون المحسن ===
function startVoiceRecognition(callback, lang) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    showToast('الميكروفون غير مدعوم في متصفحك — استخدم Chrome أو Edge', 'error');
    return null;
  }

  const recognition = new SpeechRecognition();
  const langMap = { english: 'en-US', french: 'fr-FR', spanish: 'es-ES', german: 'de-DE', japanese: 'ja-JP', chinese: 'zh-CN' };
  recognition.lang = langMap[lang || selectedLanguage] || 'en-US';
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.maxAlternatives = 3;

  recognition.onstart = () => {
    showToast('جاري الاستماع... تحدث الآن');
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(r => r[0].transcript)
      .join(' ');
    callback(transcript, event.results[0].isFinal);
  };

  recognition.onerror = (event) => {
    const errors = {
      'no-speech': 'لم يتم التقاط صوت — حاول مجدداً',
      'audio-capture': 'لا يوجد ميكروفون — تأكد من توصيله',
      'not-allowed': 'تم رفض إذن الميكروفون — اسمح به من إعدادات المتصفح',
      'network': 'خطأ في الشبكة — تحقق من الاتصال'
    };
    showToast(errors[event.error] || 'خطأ في التعرف على الصوت', 'error');
  };

  recognition.onend = () => {
    // انتهى
  };

  try {
    recognition.start();
  } catch (e) {
    showToast('لا يمكن تشغيل الميكروفون', 'error');
  }

  return recognition;
}
