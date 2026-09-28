// ========================================
// المساعد الذكي
// ========================================

let assistantOpen = false;
let assistantGreeted = false;

function toggleAssistant() {
  assistantOpen = !assistantOpen;
  const panel = document.getElementById('assistantPanel');
  
  if (assistantOpen) {
    panel.classList.remove('hidden');
    if (!assistantGreeted) {
      addAssistantMessage('assistant', 'مرحباً! أنا مساعدك الذكي لتعلم اللغات. يمكنني مساعدتك في:\n\n• تحديد مستواك\n• وضع خطة تعلم\n• الإجابة عن أسئلتك\n• تقديم نصائح دراسية\n\nاضغط على الأزرار السريعة أو اكتب سؤالك.');
      assistantGreeted = true;
      localStorage.setItem('assistantUsed', 'true');
      addActivity('سألت المساعد الذكي');
      checkAchievements();
    }
  } else {
    panel.classList.add('hidden');
  }
}

function openAssistant() {
  if (!assistantOpen) {
    toggleAssistant();
  }
}

function quickAsk(question) {
  const input = document.getElementById('assistantInput');
  input.value = question;
  sendMessage();
}

function handleAssistantKeypress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById('assistantInput');
  const message = input.value.trim();
  
  if (!message) return;
  
  addAssistantMessage('user', message);
  input.value = '';
  
  // حفظ السجل
  const history = JSON.parse(localStorage.getItem('assistant_history') || '[]');
  history.push({ role: 'user', text: message, time: Date.now() });
  if (history.length > 50) history.shift();
  localStorage.setItem('assistant_history', JSON.stringify(history));
  
  // استخدام البوت الذكي أولاً، ثم الرد القديم كاحتياط
  setTimeout(() => {
    let response;
    try {
      response = SmartBot.generateResponse(message, history);
    } catch (e) {
      response = generateResponse(message);
    }
    
    addAssistantMessage('assistant', response);
    
    // حفظ الرد
    history.push({ role: 'assistant', text: response, time: Date.now() });
    if (history.length > 50) history.shift();
    localStorage.setItem('assistant_history', JSON.stringify(history));
  }, 600);
}

function addAssistantMessage(type, text) {
  const messagesContainer = document.getElementById('assistantMessages');
  const messageEl = document.createElement('div');
  messageEl.className = `message ${type}`;
  
  // دعم تنسيق بسيط: **نص عريض** و \n
  const formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  
  messageEl.innerHTML = formatted;
  messagesContainer.appendChild(messageEl);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateResponse(message) {
  const lowerMsg = message.toLowerCase();
  
  // تحية
  if (lowerMsg.includes('مرحبا') || lowerMsg.includes('اهلا') || lowerMsg.includes('السلام') || lowerMsg.includes('هاي')) {
    return ASSISTANT_KNOWLEDGE.greetings[Math.floor(Math.random() * ASSISTANT_KNOWLEDGE.greetings.length)];
  }
  
  // سؤال عن المستوى
  if (lowerMsg.includes('مستواي') || lowerMsg.includes('مستوا') || lowerMsg.includes('مستوى')) {
    const level = localStorage.getItem('userLevel');
    if (level) {
      return `مستواك الحالي هو: ${level}\n\n${ASSISTANT_KNOWLEDGE.levelHelp[level]}`;
    }
    return 'لم تحدد مستواك بعد. أقترح عليك إجراء اختبار المستوى أولاً لتحديد نقطة البداية المناسبة لك.';
  }
  
  // نصائح
  if (lowerMsg.includes('نصيحة') || lowerMsg.includes('نصائح') || lowerMsg.includes('كيف اتعلم') || lowerMsg.includes('طريقة')) {
    const tips = ASSISTANT_KNOWLEDGE.studyTips;
    const randomTips = tips.sort(() => 0.5 - Math.random()).slice(0, 3);
    return 'إليك بعض النصائح المفيدة:\n\n' + randomTips.map((tip, i) => `${i + 1}. ${tip}`).join('\n');
  }
  
  // تحفيز
  if (lowerMsg.includes('حزين') || lowerMsg.includes('فشل') || lowerMsg.includes('صعب') || lowerMsg.includes('مستحيل') || lowerMsg.includes('ملل')) {
    return ASSISTANT_KNOWLEDGE.motivation[Math.floor(Math.random() * ASSISTANT_KNOWLEDGE.motivation.length)];
  }
  
  // اللغات
  if (lowerMsg.includes('لغات') || lowerMsg.includes('لغة') || lowerMsg.includes('أي لغة') || lowerMsg.includes('اللغات')) {
    return 'اللغات المتاحة حالياً:\n\n1. الإنجليزية\n2. الفرنسية\n3. الإسبانية\n4. الألمانية\n5. اليابانية\n6. الصينية\n\nاختر اللغة التي تريد تعلمها وسأساعدك في البدء!';
  }
  
  // الخطة
  if (lowerMsg.includes('خطة') || lowerMsg.includes('برنامج') || lowerMsg.includes('جدول') || lowerMsg.includes('ضع خطة')) {
    const level = localStorage.getItem('userLevel') || 'مبتدئ';
    return `بناءً على مستواك (${level})، إليك خطة مقترحة:\n\nالأسبوع 1-2: أساسيات اللغة والمفردات الشائعة\nالأسبوع 3-4: قواعد أساسية ومحادثات بسيطة\nالأسبوع 5-6: ممارسة الاستماع والتحدث\nالأسبوع 7-8: قراءة وكتابة متوسطة\n\nتذكر: الممارسة اليومية أهم من الممارسة المكثفة مرة واحدة!`;
  }
  
  // الوقت
  if (lowerMsg.includes('وقت') || lowerMsg.includes('كم ساعة') || lowerMsg.includes('مدة')) {
    return 'الوقت المطلوب لتعلم اللغة يعتمد على عدة عوامل:\n\n• اللغة المختارة\n• مستواك الحالي\n• الوقت المتاح يومياً\n\nبشكل عام:\n- المبتدئ: 3-6 أشهر (30 دقيقة يومياً)\n- المتوسط: 6-12 شهر\n- المتقدم: 1-2 سنة\n\nالأهم هو الاستمرارية وليس السرعة!';
  }
  
  // التطبيق
  if (lowerMsg.includes('كيف') && (lowerMsg.includes('استخدم') || lowerMsg.includes('موقع') || lowerMsg.includes('تطبيق'))) {
    return 'هذا الموقع مصمم لمساعدتك في تعلم اللغات بطريقة تفاعلية:\n\n1. اختر لغتك من قسم "اختر لغتك"\n2. أجرِ اختبار لتحديد مستواك\n3. اتبع خطة تعلم مخصصة\n4. استخدم بطاقات المفردات للحفظ\n5. تدرب على الترجمة والاستماع\n6. راقب تقدمك في قسم "تقدمي"\n\nكل شيء يعمل مباشرة في المتصفح بدون تحميل!';
  }
  
  // الترجمة
  if (lowerMsg.includes('ترجم') || lowerMsg.includes('معنى')) {
    return 'للاستفادة القصوى من تمرين الترجمة:\n\n1. اقرأ الجملة بصوت عالٍ أولاً\n2. حاول ترجمتها ذهنياً\n3. اختر الإجابة الصحيحة\n4. راجع أخطائك\n\nيمكنك أيضاً استخدام بطاقات المفردات لتعلم كلمات جديدة!';
  }
  
  // المفردات / بطاقات
  if (lowerMsg.includes('مفردات') || lowerMsg.includes('كلمات') || lowerMsg.includes('بطاقات')) {
    return 'بطاقات المفردات هي طريقة فعالة للحفظ:\n\n1. اضغط على البطاقة لقلبها\n2. حاول تذكر المعنى قبل القلب\n3. استمع للنطق الصحيح\n4. صنّف الكلمة: أعرفها أو تحتاج مراجعة\n\nانصح بتعلم 5-10 كلمات يومياً!';
  }
  
  // عن المساعد
  if (lowerMsg.includes('من أنت') || lowerMsg.includes('اسمك') || lowerMsg.includes('مين أنت')) {
    return 'أنا مساعدك الذكي لتعلم اللغات. مهامتي:\n\n• مساعدتك في تحديد مستواك\n• وضع خطط تعلم مخصصة\n• الإجابة عن أسئلتك\n• تقديم نصائح تحفيزية\n\nاسألني أي شيء عن تعلم اللغات!';
  }
  
  // رد افتراضي
  return 'شكراً لسؤالك! يمكنني مساعدتك في:\n\n• تحديد مستواك في اللغة\n• وضع خطة تعلم مخصصة\n• تقديم نصائح دراسية\n• الإجابة عن أسئلتك حول اللغات\n\nجرب أن تسألني عن: "مستواي"، "نصائح"، "ضع خطة"، أو "اللغات المتاحة"';
}
