// ========================================
// المحادثة بدون إنترنت — Offline Conversation
// يفهم ويجيب بالـ NLP مبسط بدون خادم
// ========================================

const ConversationEngine = {
  // قاعدة المعرفة للغات مختلفة
  conversations: {
    english: {
      patterns: [
        { match: /\b(hello|hi|hey|good morning|good afternoon|good evening)\b/i, responses: ['Hello! How are you today?', 'Hi there! Nice to meet you!', 'Hey! How can I help you?'] },
        { match: /\b(how are you|how do you do|how's it going)\b/i, responses: ["I'm doing great, thank you! How about you?", "I'm fine! What about you?", 'Pretty good! And you?'] },
        { match: /\b(what is your name|who are you|what are you)\b/i, responses: ["I'm your English conversation partner!", "I'm Lughati Assistant. Nice to meet you!", "You can call me your English buddy!"] },
        { match: /\b(my name is|im|i am|i'm) (.+)\b/i, responses: ['Nice to meet you, {2}!', 'Hello {2}! How can I help you today?', 'Great name, {2}!'] },
        { match: /\b(what do you like|favorite|hobby|hobbies)\b/i, responses: ['I love learning languages! What about you?', 'I enjoy reading and having conversations. And you?'] },
        { match: /\b(where are you from|i am from|i'm from)\b/i, responses: ['I am from the internet! Where are you from?', 'I live in your browser! And you?'] },
        { match: /\b(thank you|thanks|thank you very much)\b/i, responses: ["You're welcome!", "No problem! Happy to help.", "Anytime!"] },
        { match: /\b(goodbye|bye|see you|good night)\b/i, responses: ['Goodbye! Keep practicing!', 'See you later! Great talking to you.', 'Bye! Have a wonderful day!'] },
        { match: /\b(love|like) (you|this)\b/i, responses: ['I love learning with you too!', 'That is so nice of you!'] },
        { match: /\b(help|what can you do|how does this work)\b/i, responses: ['I can practice English conversations with you! Just talk to me naturally.', 'You can chat with me in English to improve your skills!'] },
        { match: /\b(yes|yeah|yep|sure)\b/i, responses: ['Great! Tell me more.', 'I understand. What else?', 'Nice! Keep going!'] },
        { match: /\b(no|nope|not really)\b/i, responses: ["That's okay! Let's try something else.", 'No problem. What would you like to talk about?'] },
        { match: /\b(weather|sunny|rain|cold|hot)\b/i, responses: ['The weather is beautiful today! What is it like where you are?', 'I love sunny days! Do you like the rain?'] },
        { match: /\b(food|eat|hungry|pizza|bread)\b/i, responses: ['I love pizza! What is your favorite food?', 'Food is great! What do you like to eat?'] },
        { match: /\b(work|job|office)\b/i, responses: ['What do you do for work?', 'Work can be busy! What is your job like?'] },
        { match: /\b(study|school|university|learn)\b/i, responses: ['What are you studying?', 'Learning is fun! What subject do you like most?'] },
        { match: /\b(happy|glad|good|great|awesome)\b/i, responses: ["That's wonderful to hear!", 'I am glad you are happy!', 'Awesome! Keep that energy!'] },
        { match: /\b(sad|tired|bad|angry)\b/i, responses: ["I'm sorry to hear that. Want to talk about it?", "Let's make your day better! Tell me something fun.", 'Cheer up! Tomorrow will be better!'] },
        { match: /\b(age|how old)\b/i, responses: ["I'm ageless! I live in your browser. How old are you?", 'I am always learning! How old are you?'] },
        { match: /\b(family|mother|father|brother|sister)\b/i, responses: ['Family is important! Tell me about your family.', 'Do you have brothers or sisters?'] },
        { match: /\b(sport|football|basketball|run|gym)\b/i, responses: ['Sports are great for health! What sport do you play?', 'I like watching football! What is your favorite sport?'] },
        { match: /\b(movie|film|watch|tv|series)\b/i, responses: ['What is your favorite movie?', 'I love watching movies! What genre do you like?'] },
        { match: /\b(book|read|reading)\b/i, responses: ['Reading is the best way to learn! What book are you reading?', 'I love books! What is your favorite?'] },
        { match: /\b(travel|trip|vacation|holiday)\b/i, responses: ['Traveling is amazing! Where would you like to go?', 'What is your dream travel destination?'] },
        { match: /\b(what time|time is it)\b/i, responses: () => [`It's ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} right now!`] },
        { match: /\b(what day|today|date)\b/i, responses: () => [`Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}!`] },
        { match: /\b(beautiful|pretty|nice|lovely)\b/i, responses: ['Thank you! You are very kind!', 'That is so sweet of you!'] },
        { match: /\b(story|tell me|interesting)\b/i, responses: ['Once upon a time, a student wanted to learn English. They practiced every day and became fluent! The moral is: practice makes perfect.', 'Here is a fun fact: The word "queue" has the same pronunciation as the letter "Q"!'] },
        { match: /\b(joke|funny|laugh)\b/i, responses: ['Why did the student eat his homework? Because the teacher said it was a piece of cake!', 'Why did the phone go to jail? It had too many missed calls!'] },
        { match: /\b(sentence|grammar|word|meaning)\b/i, responses: ['Let me help! Try making a sentence with a new word you learned.', 'Grammar is important! Practice makes it easier. Give it a try!'] },
      ],
      fallbacks: [
        'Interesting! Can you tell me more?',
        "That's a great point! What do you think?",
        'I see! How does that make you feel?',
        'Really? Tell me more about that!',
        'That sounds amazing! What happened next?',
        'I understand! What would you like to talk about?',
        'Nice! Can you say that in a different way?',
        'Good thought! What else is on your mind?'
      ],
      correctionRules: [
        { wrong: /\bi am agree\b/i, right: 'I agree' },
        { wrong: /\bi have \d+ years\b/i, right: 'I am X years old' },
        { wrong: /\bhe don't\b/i, right: "He doesn't" },
        { wrong: /\bshe don't\b/i, right: "She doesn't" },
        { wrong: /\bi am go\b/i, right: 'I go / I am going' },
        { wrong: /\bmore better\b/i, right: 'better' },
        { wrong: /\bmore easier\b/i, right: 'easier' },
        { wrong: /\bi didn't went\b/i, right: "I didn't go" },
        { wrong: /\bhe go\b/i, right: 'He goes' },
        { wrong: /\bpeoples\b/i, right: 'people' },
        { wrong: /\binformations\b/i, right: 'information' },
        { wrong: /\badvices\b/i, right: 'advice' },
        { wrong: /\bequipments\b/i, right: 'equipment' },
      ]
    },
    french: {
      patterns: [
        { match: /\b(bonjour|salut|bonsoir|coucou)\b/i, responses: ['Bonjour! Comment allez-vous?', 'Salut! Ça va bien?', 'Bonjour! Enchanté!'] },
        { match: /\b(comment ça va|comment allez-vous|ça va)\b/i, responses: ['Ça va bien, merci! Et vous?', 'Très bien! Et toi?', 'Je vais bien! Merci!'] },
        { match: /\b(merci|merci beaucoup)\b/i, responses: ['De rien!', 'Je vous en prie!', 'Pas de souci!'] },
        { match: /\b(aurevoir|au revoir|bye|salut)\b/i, responses: ['Au revoir! À bientôt!', 'Salut! Bonne journée!'] },
        { match: /\b(je m'appelle|mon nom est)\b/i, responses: ['Enchanté!', 'Ravi de vous rencontrer!', 'Bonjour! Comment ça va?'] },
        { match: /\b(j'aime|j'adore|mon préféré)\b/i, responses: ["Moi aussi! Qu'est-ce que vous aimez faire?", "C'est intéressant! Qu'est-ce que vous faites?"] },
        { match: /\b(nous sommes|je suis)\b/i, responses: ['Ah oui! Racontez-moi plus!', 'Intéressant! Continuez!'] },
      ],
      fallbacks: ['Intéressant! Pouvez-vous en dire plus?', 'D\'accord! Et ensuite?', 'Très bien! Qu\'en pensez-vous?', 'Racontez-moi plus!'],
      correctionRules: [
        { wrong: /\bje suis d'accord avec toi\b/i, right: "je suis d'accord avec vous" },
        { wrong: /\bplus bon\b/i, right: 'meilleur' },
        { wrong: /\bplus mieux\b/i, right: 'mieux' },
      ]
    },
    spanish: {
      patterns: [
        { match: /\b(hola|buenos días|buenas tardes|buenas noches)\b/i, responses: ['¡Hola! ¿Cómo estás?', '¡Buenos días! ¿Qué tal?', '¡Hola! Encantado de conocerte.'] },
        { match: /\b(cómo estás|cómo te va|qué tal)\b/i, responses: ['¡Muy bien, gracias! ¿Y tú?', '¡Bien! ¿Y tú cómo estás?', '¡Todo bien! ¿Y tú?'] },
        { match: /\b(gracias|muchas gracias)\b/i, responses: ['¡De nada!', '¡No hay de qué!', '¡A ti!'] },
        { match: /\b(adiós|hasta luego|chao)\b/i, responses: ['¡Adiós! ¡Hasta luego!', '¡Nos vemos! ¡Que tengas un buen día!'] },
        { match: /\b(me llamo|mi nombre es)\b/i, responses: ['¡Encantado!', '¡Mucho gusto! ¿Cómo estás?'] },
        { match: /\b(me gusta|me encanta|mi favorito)\b/i, responses: ['¡A mí también! ¿Qué más te gusta?', '¡Qué interesante! Cuéntame más.'] },
      ],
      fallbacks: ['¡Interesante! ¿Puedes contarme más?', '¡De acuerdo! ¿Y qué más?', '¡Muy bien! ¿Qué opinas?', '¡Cuéntame más!'],
      correctionRules: [
        { wrong: /\byo soy d\b/i, right: 'estoy' },
        { wrong: /\bmás bueno\b/i, right: 'mejor' },
      ]
    },
    german: {
      patterns: [
        { match: /\b(hallo|guten tag|guten morgen|hi)\b/i, responses: ['Hallo! Wie geht es Ihnen?', 'Guten Tag! Wie geht es dir?', 'Hallo! Schön, dich kennenzulernen!'] },
        { match: /\b(wie geht es|wie geht's)\b/i, responses: ['Mir geht es gut, danke! Und Ihnen?', 'Gut, danke! Und dir?', 'Super! Und dir?'] },
        { match: /\b(danke|vielen dank)\b/i, responses: ['Bitte!', 'Gern geschehen!', 'Kein Problem!'] },
        { match: /\b(auf wiedersehen|tschüss|bye)\b/i, responses: ['Auf Wiedersehen! Bis bald!', 'Tschüss! Schönen Tag noch!'] },
        { match: /\b(ich heiße|mein name ist)\b/i, responses: ['Freut mich! Wie geht es Ihnen?', 'Hallo! Schön, Sie kennenzulernen!'] },
      ],
      fallbacks: ['Interessant! Können Sie mehr erzählen?', 'Verstanden! Und was dann?', 'Gut! Was meinen Sie dazu?'],
      correctionRules: [
        { wrong: /\bich bin hunger\b/i, right: 'ich habe Hunger' },
        { wrong: /\bich bin durst\b/i, right: 'ich habe Durst' },
      ]
    },
    japanese: {
      patterns: [
        { match: /(こんにちは|你好|おはよう|こんばんは)/, responses: ['こんにちは！お元気ですか？', 'こんにちは！どうぞよろしく。', 'おはようございます！'] },
        { match: /(お元気ですか|元気)/, responses: ['元気です！ありがとうございます。あなたは？', 'はい、元気です！あなたも元気ですか？'] },
        { match: /(ありがとう|有難う)/, responses: ['どういたしまして！', 'いえいえ！', 'とんでもないです！'] },
        { match: /(さようなら|じゃあね|バイバイ)/, responses: ['さようなら！またね。', 'じゃあね！良い一日を。'] },
        { match: /(お名前は|名前)/, responses: ['私はアシスタントです。あなたのお名前は？', 'よろしくお願いします！'] },
      ],
      fallbacks: ['面白い！もう少し教えてください。', 'なるほど！それで？', 'はい、どうぞ！何が聞きたいですか？'],
      correctionRules: []
    },
    chinese: {
      patterns: [
        { match: /(你好|您好|早上好|晚上好)/, responses: ['你好！你好吗？', '你好！很高兴认识你。', '你好！有什么可以帮你的？'] },
        { match: /(你好吗|怎么样)/, responses: ['我很好，谢谢！你呢？', '还不错！你呢？'] },
        { match: /(谢谢|感谢)/, responses: ['不客气！', '别客气！', '没事！'] },
        { match: /(再见|拜拜|明天见)/, responses: ['再见！明天见。', '拜拜！祝你有美好的一天。'] },
        { match: /(我叫|我叫什么名字)/, responses: ['很高兴认识你！你叫什么名字？', '你好！请多关照。'] },
      ],
      fallbacks: ['有意思！你能多说一些吗？', '好的！然后呢？', '明白了！你怎么看？'],
      correctionRules: []
    }
  },

  // تحليل وفهم الرسالة
  analyze(message, lang) {
    const langData = this.conversations[lang] || this.conversations.english;
    const corrections = [];

    // فحص التصحيحات النحوية
    langData.correctionRules.forEach(rule => {
      if (rule.wrong.test(message)) {
        corrections.push({ wrong: message.match(rule.wrong)[0], right: rule.right });
      }
    });

    // البحث عن نمط مطابق
    for (const pattern of langData.patterns) {
      if (pattern.match.test(message)) {
        const responses = typeof pattern.responses === 'function'
          ? pattern.responses()
          : pattern.responses;
        const response = responses[Math.floor(Math.random() * responses.length)];
        return { response, corrections, matched: true };
      }
    }

    // رد افتراضي
    const fallback = langData.fallbacks[Math.floor(Math.random() * langData.fallbacks.length)];
    return { response: fallback, corrections, matched: false };
  },

  // حوار موجه (موجه للطالب)
  getGuidedTopic(lang) {
    const topics = {
      english: [
        { prompt: "Let's talk about your day! How was your day?", followUp: ['What was the best part?', 'Did anything interesting happen?', 'What did you do in the morning?'] },
        { prompt: "Tell me about your family. Do you have brothers or sisters?", followUp: ['What does your mother do?', 'How old is your brother?', 'Do you have any pets?'] },
        { prompt: "What is your favorite food? Do you like cooking?", followUp: ['Can you cook pizza?', 'What food do you eat every day?', 'Do you like sweet or salty food?'] },
        { prompt: "If you could travel anywhere in the world, where would you go?", followUp: ['Why do you want to go there?', 'Who would you travel with?', 'What would you do there?'] },
        { prompt: "What do you want to be in the future? Tell me about your dream job.", followUp: ['Why do you want that job?', 'What skills do you need?', 'Where would you work?'] },
        { prompt: "Describe your best friend. What do you like about them?", followUp: ['How long have you been friends?', 'What do you do together?', 'What makes a good friend?'] },
        { prompt: "What is your favorite season? Do you prefer summer or winter?", followUp: ['What do you do in summer?', 'Do you like rain?', 'What is the weather like in your country?'] },
        { prompt: "Tell me about a movie or book you really enjoyed.", followUp: ['What is it about?', 'Who is the main character?', 'Would you recommend it?'] },
      ],
      french: [
        { prompt: "Racontez-moi votre journée. Comment s'est passée votre journée?", followUp: ['Qu\'est-ce que vous avez fait ce matin?', 'Quelle est la meilleure partie?'] },
        { prompt: "Parlez-moi de votre famille. Avez-vous des frères et sœurs?", followUp: ['Que fait votre mère?', 'Quel âge a votre frère?'] },
        { prompt: "Quel est votre plat préféré? Aimez-vous cuisiner?", followUp: ['Pouvez-vous cuisiner?', 'Qu\'est-ce que vous mangez chaque jour?'] },
      ],
      spanish: [
        { prompt: "Cuéntame sobre tu día. ¿Cómo estuvo tu día?", followUp: ['¿Qué hiciste esta mañana?', '¿Qué fue lo mejor del día?'] },
        { prompt: "Háblame de tu familia. ¿Tienes hermanos?", followUp: ['¿Qué hace tu madre?', '¿Qué edad tiene tu hermano?'] },
        { prompt: "¿Cuál es tu comida favorita? ¿Te gusta cocinar?", followUp: ['¿Puedes cocinar?', '¿Qué comes cada día?'] },
      ],
      german: [
        { prompt: "Erzählen Sie mir von Ihrem Tag. Wie war Ihr Tag?", followUp: ['Was haben Sie heute Morgen gemacht?', 'Was war das Beste am Tag?'] },
        { prompt: "Erzählen Sie mir von Ihrer Familie. Haben Sie Geschwister?", followUp: ['Was macht Ihre Mutter?', 'Wie alt ist Ihr Bruder?'] },
      ],
      japanese: [
        { prompt: "あなたの一日について教えてください。今日はどうでしたか？", followUp: ['今朝は何をしましたか？', '今日の一番良かったことは？'] },
        { prompt: "あなたの家族について教えてください。兄弟姉妹はいますか？", followUp: ['お母さんは何をしていますか？', 'お兄さんは何歳ですか？'] },
      ],
      chinese: [
        { prompt: "告诉我你的一天。今天怎么样？", followUp: ['你今天早上做了什么？', '今天最好的部分是什么？'] },
        { prompt: "告诉我你的家人。你有兄弟姐妹吗？", followUp: ['你妈妈是做什么的？', '你哥哥多大了？'] },
      ]
    };

    const langTopics = topics[lang] || topics.english;
    return langTopics[Math.floor(Math.random() * langTopics.length)];
  },

  // تقييم إجابة الطالب
  evaluateAnswer(answer, lang) {
    if (!answer || answer.trim().length < 2) {
      return { score: 0, feedback: 'حاول أن تجيب بجملة أطول.' };
    }

    let score = 0;
    const words = answer.trim().split(/\s+/);

    // نقاط للطول
    if (words.length >= 5) score += 30;
    else if (words.length >= 3) score += 15;

    // نقاط للتنوع في المفردات
    const uniqueWords = new Set(words.map(w => w.toLowerCase().replace(/[^a-z\u0600-\u06FF\u3040-\u30FF\u4E00-\u9FFF]/gi, '')));
    score += Math.min(30, uniqueWords.size * 5);

    // نقاط للجمل الكاملة
    if (answer.match(/[.!?؟。！？]$/)) score += 15;

    // نقاط للنحو الصحيح
    if (answer.match(/^(i|you|he|she|it|we|they|je|tu|il|elle|yo|tú|él|ella|ich|du|er|sie|私は|あなたは|我|你)/i)) score += 25;

    score = Math.min(100, score);

    let feedback;
    if (score >= 80) feedback = 'ممتاز! جملة رائعة!';
    else if (score >= 60) feedback = 'جيد! حاول إضافة المزيد من التفاصيل.';
    else if (score >= 40) feedback = 'مقبول. حاول تكوين جملة أطول.';
    else feedback = 'حاول مرة أخرى بجملة كاملة.';

    return { score, feedback };
  }
};

// === واجهة المحادثة ===
let conversationState = {
  active: false,
  topic: null,
  messageCount: 0,
  totalScore: 0
};

function openConversation() {
  closeConversation();

  const lang = selectedLanguage;
  conversationState = { active: true, topic: ConversationEngine.getGuidedTopic(lang), messageCount: 0, totalScore: 0 };

  const langName = LANGUAGES[lang]?.name || 'اللغة';

  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'conversationModal';
  modal.innerHTML = `
    <div class="conversation-container">
      <div class="conversation-header">
        <div>
          <h3>محادثة ${langName}</h3>
          <span class="conv-level">كل المستويات — بدون إنترنت</span>
        </div>
        <button class="close-btn" onclick="closeConversation()">✕</button>
      </div>

      <div class="conversation-info">
        <div class="conv-topic" id="convTopic">
          <strong>موضوع المحادثة:</strong> ${conversationState.topic.prompt}
        </div>
        <div class="conv-stats">
          <span>الرسائل: <strong id="convMessages">0</strong></span>
          <span>التقييم: <strong id="convScore">0</strong>%</span>
        </div>
      </div>

      <div class="conversation-messages" id="convMessagesArea">
        <div class="conv-msg assistant">
          <div class="conv-avatar">◆</div>
          <div class="conv-bubble">
            <p>${conversationState.topic.prompt}</p>
            <button class="conv-speak" onclick="speak('${conversationState.topic.prompt.replace(/'/g, "\\'")}', '${lang}')">♪ استمع</button>
          </div>
        </div>
      </div>

      <div class="conversation-followups" id="convFollowups">
        ${conversationState.topic.followUp.map(q => `
          <button class="followup-btn" onclick="sendFollowUp('${q.replace(/'/g, "\\'")}')">${q}</button>
        `).join('')}
      </div>

      <div class="conversation-input">
        <button class="conv-mic" onclick="startVoiceInput()" title="تحدث">●</button>
        <input type="text" id="convInput" placeholder="اكتب ردك هنا أو اضغط الميكروفون..." onkeypress="if(event.key==='Enter')sendConvMessage()">
        <button class="btn btn-primary" onclick="sendConvMessage()">إرسال</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeConversation() {
  const modal = document.getElementById('conversationModal');
  if (modal) modal.remove();
  conversationState.active = false;
}

function sendConvMessage() {
  const input = document.getElementById('convInput');
  const message = input.value.trim();
  if (!message) return;

  addConvMessage('student', message);
  input.value = '';

  // تقييم الإجابة
  const evaluation = ConversationEngine.evaluateAnswer(message, selectedLanguage);
  conversationState.totalScore += evaluation.score;
  conversationState.messageCount++;

  const avgScore = Math.round(conversationState.totalScore / conversationState.messageCount);
  document.getElementById('convMessages').textContent = conversationState.messageCount;
  document.getElementById('convScore').textContent = avgScore;

  // رد المساعد — استخدام البوت الذكي أولاً
  setTimeout(() => {
    let reply;
    let corrections = [];
    
    try {
      // محاولة استخدام البوت الذكي
      const smartReply = SmartBot.generateResponse(message, []);
      reply = smartReply;
    } catch(e) {
      // استخدام المحرك القديم كاحتياط
      const result = ConversationEngine.analyze(message, selectedLanguage);
      reply = result.response;
      corrections = result.corrections;
    }
    
    // فحص التصحيحات النحوية
    const convResult = ConversationEngine.analyze(message, selectedLanguage);
    if (convResult.corrections.length > 0) {
      const c = convResult.corrections[0];
      reply = `💡 تصحيح: "${c.wrong}" → "${c.right}"\n\n` + reply;
    }

    addConvMessage('assistant', reply);
    
    // نطق الرد
    const speechText = reply.replace(/💡[^\n]*\n/, '').split('\n')[0];
    speak(speechText, selectedLanguage);

    // تقييم تلقائي
    setTimeout(() => {
      addConvMessage('system', `تقييمك: ${evaluation.score}% — ${evaluation.feedback}`);
    }, 500);

    // تحديث موضوع المحادثة بعد 4 رسائل
    if (conversationState.messageCount % 4 === 0) {
      conversationState.topic = ConversationEngine.getGuidedTopic(selectedLanguage);
      document.getElementById('convTopic').innerHTML = `<strong>موضوع جديد:</strong> ${conversationState.topic.prompt}`;
      updateFollowups();
    }
  }, 600);
}

function sendFollowUp(text) {
  document.getElementById('convInput').value = text;
  sendConvMessage();
}

function updateFollowups() {
  const container = document.getElementById('convFollowups');
  if (!container || !conversationState.topic) return;
  container.innerHTML = conversationState.topic.followUp.map(q => `
    <button class="followup-btn" onclick="sendFollowUp('${q.replace(/'/g, "\\'")}')">${q}</button>
  `).join('');
}

function addConvMessage(type, text) {
  const area = document.getElementById('convMessagesArea');
  if (!area) return;

  const lang = selectedLanguage;
  const msg = document.createElement('div');

  if (type === 'system') {
    msg.className = 'conv-msg system';
    msg.innerHTML = `<div class="conv-bubble system">${text}</div>`;
  } else if (type === 'student') {
    msg.className = 'conv-msg student';
    msg.innerHTML = `
      <div class="conv-bubble student">
        <p>${escapeHtml(text)}</p>
      </div>
      <div class="conv-avatar student-avatar">أنت</div>
    `;
  } else {
    msg.className = 'conv-msg assistant';
    msg.innerHTML = `
      <div class="conv-avatar">◆</div>
      <div class="conv-bubble">
        <p>${escapeHtml(text)}</p>
        <button class="conv-speak" onclick="speak('${text.replace(/'/g, "\\'").replace(/\n/g, ' ')}', '${lang}')">♪ استمع</button>
      </div>
    `;
  }

  area.appendChild(msg);
  area.scrollTop = area.scrollHeight;
}

function startVoiceInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast('التعرف على الصوت غير مدعوم في متصفحك');
    return;
  }

  const recognition = new SpeechRecognition();
  const langMap = { english: 'en-US', french: 'fr-FR', spanish: 'es-ES', german: 'de-DE', japanese: 'ja-JP', chinese: 'zh-CN' };
  recognition.lang = langMap[selectedLanguage] || 'en-US';
  recognition.interimResults = false;

  const micBtn = document.querySelector('.conv-mic');
  if (micBtn) {
    micBtn.classList.add('listening');
    micBtn.textContent = '● جاري الاستماع...';
  }

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('convInput').value = transcript;
    if (micBtn) {
      micBtn.classList.remove('listening');
      micBtn.textContent = '●';
    }
    sendConvMessage();
  };

  recognition.onerror = () => {
    if (micBtn) {
      micBtn.classList.remove('listening');
      micBtn.textContent = '●';
    }
    showToast('لم يتم التعرف على الصوت');
  };

  recognition.start();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
