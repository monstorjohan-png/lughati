// ========================================
// البوت الذكي — Smart Bot v2
// يفهم السؤال ويولّد رداً بناءً عليه
// وليس ردود ثابتة فقط
// ========================================

const SmartBot = {
  // تحليل النية (Intent Recognition)
  detectIntent(message) {
    const m = message.toLowerCase().trim();

    // === الوداع (يُفحص أولاً لتجنب الخلط مع السلام) ===
    if (/(goodbye|bye\b|see you|farewell|good night|take care)/.test(m) ||
        /(وداعا|وداعاً|مع السلامة|إلى اللقاء|باي|تصبح على خير|مع السلامه|إلى اللقاء|وداعاً)/.test(m)) {
      return { intent: 'farewell', confidence: 0.95 };
    }

    // === التحيات ===
    if (/(hello|hi\b|hey\b|good morning|good afternoon|good evening|hi there|howdy|what's up|how are you)/.test(m) ||
        /(مرحبا|مرحباً|اهلا|أهلا|اهلاً|أهلاً|صباح الخير|مساء الخير|هاي|أهلا وسهلا|أهلاً وسهلاً)/.test(m) ||
        /(^|\s)السلام(\s|$| عليكم| عليكم ورحمه الله)/.test(m)) {
      return { intent: 'greeting', confidence: 0.95 };
    }

    // === الشكر ===
    if (/(thank you|thanks|thx|appreciate)/.test(m) ||
        /(شكرا|شكراً|شكراً جزيلا|ممنون|مشكور|يعطيك|تسلم|جزاك)/.test(m)) {
      return { intent: 'thanks', confidence: 0.95 };
    }

    // === هوية البوت ===
    if (/(who are you|what are you\b|your name|what.s your name)/.test(m) ||
        /(من أنت|من انت|مين أنت|مين انت|اسمك|من هو|من هي)/.test(m)) {
      return { intent: 'identity', confidence: 0.9 };
    }

    // === المستوى ===
    if (/(my level|what level|level am i|my score)/.test(m) ||
        /(مستواي|مستواك|مستوى|مستوي|اختبرني|اختبار|ما هو مستواي)/.test(m)) {
      return { intent: 'level', confidence: 0.9 };
    }

    // === النصيحة ===
    if (/(advice|tips?\b|how (can|do|should) i|how to|suggest|help me|ساعدني|ساعدني|نصيحة|نصائح|نصيحه|كيف أتعلم|كيف اتعلم|كيف أ improve|كيف أفضل)/.test(m)) {
      return { intent: 'advice', confidence: 0.85 };
    }

    // === الخطة ===
    if (/(plan|schedule|roadmap|study plan|make a plan)/.test(m) ||
        /(خطة|خطه|جدول|برنامج|ضع خطة|اعطني خطة|أعطني خطة|خطتي)/.test(m)) {
      return { intent: 'plan', confidence: 0.9 };
    }

    // === التحفيز ===
    if (/(sad|depressed|motivate|motivation|inspire|give up|stuck|frustrated|tired of|can.t do)/.test(m) ||
        /(حزين|زعلان|محبط|يائس|صعب|مستحيل|ملل|متضايق|تعبان|إحباط|ابتلاء|ما أقدر|ما أستطيع)/.test(m)) {
      return { intent: 'motivation', confidence: 0.9 };
    }

    // === اللغة ===
    if (/(language|which language|what language|learn language)/.test(m) ||
        /(لغة|لغات|أي لغة|اي لغة|تعلم لغة|لغه)/.test(m)) {
      return { intent: 'language', confidence: 0.85 };
    }

    // === الوقت ===
    if (/(what time|time now|current time|date today|what.s the date|what time is it)/.test(m) ||
        /(الوقت|كم الساعة|الساعة كم|التاريخ|كم اليوم|ما هو الوقت|ما التاريخ)/.test(m)) {
      return { intent: 'time', confidence: 0.95 };
    }

    // === الترجمة ===
    if (/(translate|meaning of|what does .* mean|how do i say|tell me the meaning)/.test(m) ||
        /(ترجم|معنى|معنى كلمة|ماذا يعني|كيف أقول|كيف اقول|ترجمة)/.test(m)) {
      return { intent: 'translate', confidence: 0.85 };
    }

    // === القواعد ===
    if (/(grammar|conjugation|verb|tense|present perfect|past tense|past simple|article|preposition)/.test(m) ||
        /(قاعدة|قواعد|نحو|فعل|تصريف|أزمنة|ازمنة|قواعد اللغة)/.test(m)) {
      return { intent: 'grammar', confidence: 0.85 };
    }

    // === الكورسات ===
    if (/(course|lesson|video|videos|study material|curriculum|ibrahim)/.test(m) ||
        /(كورس|دورة|دروس|درس|فيديو|فيديوهات|محتوى|إبراهيم عادل|ابراهيم عادل|material)/.test(m)) {
      return { intent: 'courses', confidence: 0.85 };
    }

    // === الشهادات والتوظيف ===
    if (/(certificate|certification|ielts|toefl|job|career|work|employment|cv|resume)/.test(m) ||
        /(شهادة|شهادات|توظيف|وظيفة|وظائف|عمل|سيرة ذاتية|تدريب)/.test(m)) {
      return { intent: 'certificates', confidence: 0.85 };
    }

    // === المحادثة ===
    if (/(converse|talk|chat|conversation|practice speaking|speaking practice)/.test(m) ||
        /(محادثة|تحدث|تكلم|كلم|أتحدث|اتحدث|تمرين محادثة)/.test(m)) {
      return { intent: 'conversation', confidence: 0.85 };
    }

    // === عن الموقع ===
    if (/(site|website|app|how.*work|features|what can you do)/.test(m) ||
        /(موقع|تطبيق|كيف يعمل|مميزات|ماذا يقدم|ما الذي يقدم)/.test(m)) {
      return { intent: 'about_site', confidence: 0.85 };
    }

    // === النكتة ===
    if (/(joke|funny|laugh|make me laugh|funny story|tell me a joke)/.test(m) ||
        /(نكتة|نكته|ضحك|اضحك|مزحة|مزح|خليني اضحك)/.test(m)) {
      return { intent: 'joke', confidence: 0.9 };
    }

    // === الطقس ===
    if (/(weather|rain|snow|sunny|cold|hot|temperature)/.test(m) ||
        /(الطقس| الجو|مطر|ثلج|حار|بارد|مشمس|ممطر)/.test(m)) {
      return { intent: 'weather', confidence: 0.8 };
    }

    // === سؤال عام (يبدأ بـ what/how/why/when/where أو عربي) ===
    if (/^(what|how|why|when|where|who|which|can|could|do|does|is|are|will|would|should|tell me|explain)/.test(m) ||
        /^(ما|ماذا|كيف|لماذا|متى|أين|من|هل|كم|اشرح|أخبرني|وضح|اريد|أريد|ابغى|ابي)/.test(m)) {
      return { intent: 'question', confidence: 0.7 };
    }

    return { intent: 'general', confidence: 0.3 };
  },

  // تحليل الكلمات المفتاحية
  extractKeywords(message) {
    const stopWords = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'and', 'or', 'but', 'not', 'no', 'do', 'does', 'did', 'can', 'could', 'will', 'would', 'should', 'may', 'might', 'shall', 'have', 'has', 'had', 'be', 'been', 'being', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their', 'what', 'which', 'who', 'whom', 'whose', 'where', 'when', 'why', 'how', 'all', 'each', 'every', 'both', 'few', 'more', 'most', 'other', 'some', 'such', 'than', 'too', 'very', 'just', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'between', 'again', 'further', 'once', 'here', 'there', 'then', 'so', 'if', 'because', 'as', 'while', 'until', 'against', 'don', 'doesnt', 'didnt', 'isnt', 'arent', 'wasnt', 'werent', 'cant', 'couldnt', 'wont', 'wouldnt', 'shouldnt', 'aint']);

    const words = message.toLowerCase()
      .replace(/[^\w\s\u0600-\u06FF]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 2 && !stopWords.has(w));

    return words;
  },

  // فحص التشابه مع المواضيع
  findRelatedTopic(message, keywords) {
    const topicMap = {
      travel: ['travel', 'trip', 'vacation', 'flight', 'airport', 'hotel', 'سفر', 'سفرة', 'رحلة', 'مطار', 'فندق'],
      food: ['food', 'eat', 'restaurant', 'cook', 'recipe', 'hungry', 'dinner', 'lunch', 'breakfast', 'طعام', 'أكل', 'مطعم', 'طبخ', 'جوعان'],
      work: ['work', 'job', 'career', 'office', 'business', 'employed', 'salary', 'وظيفة', 'عمل', 'مكتب', 'شركة', 'رواتب'],
      family: ['family', 'mother', 'father', 'brother', 'sister', 'parents', 'children', 'son', 'daughter', 'عائلة', 'أم', 'أب', 'أخ', 'أخت'],
      health: ['health', 'doctor', 'hospital', 'medicine', 'sick', 'exercise', 'gym', 'صحة', 'طبيب', 'مستشفى', 'دواء', 'مريض'],
      education: ['school', 'university', 'study', 'exam', 'test', 'teacher', 'student', 'degree', 'مدرسة', 'جامعة', 'دراسة', 'امتحان', 'معلم'],
      technology: ['computer', 'internet', 'phone', 'app', 'software', 'program', 'code', 'technology', 'حاسوب', 'انترنت', 'هاتف', 'تقنية'],
      music: ['music', 'song', 'band', 'singer', 'concert', 'guitar', 'piano', 'موسيقى', 'أغنية', 'لحن'],
      movie: ['movie', 'film', 'actor', 'actress', 'cinema', 'series', 'netflix', 'فيلم', 'مسلسل', 'سينما'],
      sports: ['sport', 'football', 'basketball', 'running', 'swimming', 'tennis', 'game', 'رياضة', 'كرة قدم', 'سباحة'],
      weather: ['weather', 'rain', 'snow', 'sunny', 'cold', 'hot', 'temperature', 'طقس', 'مطر', 'ثلج', 'حار', 'بارد'],
      shopping: ['buy', 'shop', 'store', 'price', 'cost', 'cheap', 'expensive', 'تسوق', 'شراء', 'متجر', 'سعر', 'رخيص'],
      emotions: ['happy', 'sad', 'angry', 'love', 'hate', 'fear', 'excited', 'nervous', 'سعيد', 'حزين', 'غاضب', 'حب', 'كره']
    };

    for (const [topic, words] of Object.entries(topicMap)) {
      for (const kw of keywords) {
        if (words.includes(kw)) return topic;
      }
      // فحص مباشر في الرسالة
      for (const w of words) {
        if (message.toLowerCase().includes(w)) return topic;
      }
    }
    return null;
  },

  // توليد رد ذكي
  generateResponse(message, conversationHistory = []) {
    const intent = this.detectIntent(message);
    const keywords = this.extractKeywords(message);
    const topic = this.findRelatedTopic(message, keywords);
    const lang = selectedLanguage;
    const level = localStorage.getItem('userLevel') || 'مبتدئ';
    const userName = Auth.getCurrentUser()?.name || 'صديقي';

    // === الردود حسب النية ===
    switch (intent.intent) {

      case 'greeting': {
        const time = new Date().getHours();
        let timeGreeting;
        if (time < 12) timeGreeting = lang === 'english' ? 'Good morning!' : 'صباح الخير!';
        else if (time < 18) timeGreeting = lang === 'english' ? 'Good afternoon!' : 'مساء الخير!';
        else timeGreeting = lang === 'english' ? 'Good evening!' : 'مساء الخير!';

        const greetings = [
          `${timeGreeting} ${userName}! How are you feeling today?`,
          `${timeGreeting}! I'm glad you're here. What would you like to practice today?`,
          `Hey ${userName}! Ready to learn something new?`,
          `${timeGreeting}! Let's make today productive. What topic interests you?`
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
      }

      case 'farewell': {
        const farewells = [
          `Goodbye ${userName}! Keep practicing every day. You're doing great!`,
          `See you next time! Remember: consistency is the key to success.`,
          `Bye! I'll be here whenever you want to practice. Take care!`,
          `Until next time! Don't forget to review your vocabulary today.`
        ];
        return farewells[Math.floor(Math.random() * farewells.length)];
      }

      case 'thanks': {
        const thanks = [
          `You're welcome, ${userName}! That's what I'm here for.`,
          `My pleasure! Keep up the great work!`,
          `Anytime! I'm always happy to help you learn.`,
          `You're too kind! Now let's continue learning something new.`
        ];
        return thanks[Math.floor(Math.random() * thanks.length)];
      }

      case 'identity':
        return `I'm your AI language learning companion! I understand what you say and respond naturally.\n\nI can:\n• Have real conversations with you\n• Correct your grammar mistakes\n• Answer any question you have\n• Create personalized study plans\n• Track your progress\n\nI'm ${userName}'s dedicated assistant! What would you like to explore?`;

      case 'level': {
        const tests = localStorage.getItem('testsTaken') || '0';
        const words = localStorage.getItem('wordsLearned') || '0';
        return `Based on your activity:\n\n📊 Your Level: ${level}\n📝 Words Learned: ${words}\n✅ Tests Taken: ${tests}\n🔥 Streak: ${localStorage.getItem('streak') || 0} days\n\n${intent.confidence > 0.8 ? 'Take a new test for updated results!' : ''}\nTo improve: practice 15 min daily, use flashcards, and chat with me!`;
      }

      case 'advice': {
        const tips = [
          `Here's my top advice for you, ${userName}:\n\n1. **Practice consistently** — 15 minutes daily beats 2 hours once a week\n2. **Use flashcards** — review vocabulary every morning\n3. **Think in the language** — try to name objects around you\n4. **Listen actively** — watch videos with subtitles first, then without\n5. **Speak out loud** — even when alone, narrate your day\n\nWhich tip would you like me to elaborate on?`,
          `Great question! Here are personalized tips for your ${level} level:\n\n• Start with high-frequency words (top 100)\n• Use the spacing technique — review after 1 day, 3 days, 7 days\n• Practice with me in conversations daily\n• Don't fear mistakes — they're your best teachers\n• Set small daily goals and celebrate completing them\n\nWant tips on any specific skill? (Speaking, listening, reading, writing)`,
          `My advice: Make learning a habit, not a chore.\n\n✅ Set a fixed time each day\n✅ Use the app during commute/waiting time\n✅ Practice speaking with me — I won't judge!\n✅ Track your progress in the Progress section\n✅ Reward yourself after each milestone\n\nWhat specific challenge are you facing? I can give targeted advice.`
        ];
        return tips[Math.floor(Math.random() * tips.length)];
      }

      case 'plan': {
        const plans = [
          `Here's your personalized ${level} study plan, ${userName}:\n\n📅 **Daily Schedule:**\n• Morning (10 min): Review 5 flashcards\n• Afternoon (10 min): Listen to a short lesson\n• Evening (15 min): Chat with me about a topic\n\n📅 **Weekly Goals:**\n• Learn 30 new words\n• Complete 2 lessons\n• Take 1 practice quiz\n• Have 3 conversations with me\n\n📊 **Monthly Target:**\n• Reach 100 words\n• Complete 1 full course\n• Score 70%+ on tests\n\nShall I adjust this plan for you?`,
          `Your 8-week learning roadmap:\n\nWeek 1-2: Foundation\n  → Basic greetings, numbers, alphabet\n  → 50 core vocabulary words\n  → Simple present tense\n\nWeek 3-4: Building\n  → Daily conversations\n  → 100 vocabulary words\n  → Past tense introduction\n\nWeek 5-6: Expanding\n  → Reading short texts\n  → 200 vocabulary words\n  → Complex sentences\n\nWeek 7-8: Mastery\n  → Full conversations\n  → 300+ vocabulary words\n  → Write paragraphs\n\nWhich week would you like to start with?`
        ];
        return plans[Math.floor(Math.random() * plans.length)];
      }

      case 'motivation': {
        const motivations = [
          `I understand it feels tough sometimes, ${userName}. But remember:\n\n💪 Every expert was once a beginner.\n💪 Mistakes are proof that you're trying.\n💪 Language learning is a marathon, not a sprint.\n💪 You're already ahead of millions who never started.\n\nThink about why you started. Your goal is waiting for you!\n\nWhat's making you feel stuck? Let's solve it together.`,
          `Hey, I hear you. But let me remind you:\n\n🌟 The fact that you're asking shows you haven't given up.\n🌟 Progress isn't always visible — your brain is processing.\n🌟 Even 5 minutes today is better than 0 minutes.\n🌟 Compare yourself to yesterday, not to others.\n\nWhat specific difficulty are you facing? We can break it down into smaller steps.`,
          `Don't give up, ${userName}! Here's some real talk:\n\n🔥 Learning a language rewires your brain — it's literally making you smarter.\n🔥 Every word you learn opens new doors.\n🔥 The struggle you feel now is where the growth happens.\n🔥 I've seen students go from zero to fluent — and you can too.\n\nLet's make a deal: just 10 minutes today. That's it. Can you do that?`
        ];
        return motivations[Math.floor(Math.random() * motivations.length)];
      }

      case 'language': {
        return `We support 6 languages:\n\n🇬🇧 English — Global business language\n🇫🇷 French — Language of art & culture\n🇪🇸 Spanish — 2nd most spoken language\n🇩🇪 German — Language of science & tech\n🇯🇵 Japanese — Innovation & anime\n🇨🇳 Chinese — Future of trade\n\nYou're currently learning: ${LANGUAGES[selectedLanguage]?.name}\n\nTip: Focus on ONE language at a time for best results!\n\nWould you like to switch languages or continue with your current one?`;
      }

      case 'time': {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        return `🕐 Current time: ${time}\n📅 Today is: ${date}\n\nDon't forget your daily study session! You have ${localStorage.getItem('streak') || 0} day streak to maintain!`;
      }

      case 'translate': {
        const extracted = message.replace(/(ترجم|translate|meaning of|معنى|what does|كيف أقول|how do i say|tell me the meaning of)/gi, '').trim();
        if (extracted) {
          const vocab = VOCABULARY[selectedLanguage] || VOCABULARY.english;
          const found = vocab.find(v =>
            v.en.toLowerCase().includes(extracted.toLowerCase()) ||
            v.ar.includes(extracted)
          );
          if (found) {
            return `"${found.en}" = "${found.ar}"\n\nPronunciation: ${found.pron}\n\nExample: Let's practice using this word in a sentence!`;
          }
          return `Let me help you translate "${extracted}".\n\nIn English, common translations vary by context. Try:\n• Using flashcards for word-by-word translation\n• Practice with our translation exercises\n• Ask me "What does [word] mean?" for specific words\n\nCould you give me more context?`;
        }
        return `I'd love to help you translate! Just say:\n\n"What does [word] mean?"\n"Translate [word]"\n"How do I say [phrase]?"\n\nOr try our Translation Exercises section for structured practice!`;
      }

      case 'grammar': {
        const grammarExplanations = {
          'present perfect': 'Present Perfect (المضارع التام):\n\nStructure: have/has + past participle\n\nExamples:\n• I have eaten (لقد أكلت)\n• She has gone (لقد ذهبت)\n\nUse it for:\n1. Actions that happened at an unspecified time\n2. Life experiences\n3. Actions continuing to now\n\nCommon mistakes:\n❌ I have went → ✅ I have gone\n❌ She has ate → ✅ She has eaten',
          'past tense': 'Past Tense (الماضي):\n\nRegular: verb + ed\n• play → played\n• walk → walked\n\nIrregular (must memorize):\n• go → went\n• eat → ate\n• see → saw\n• take → took\n\nNegative: did not + base verb\n• I did not go (لم أذهب)',
          'present simple': 'Present Simple (المضارع البسيط):\n\nStructure: base verb (he/she/it + s)\n\nExamples:\n• I eat (أنا آكل)\n• He eats (هو يأكل)\n\nUse for: habits, facts, routines\n\nNegative: don\'t/doesn\'t + base\n• I don\'t like → She doesn\'t like'
        };

        const foundKey = Object.keys(grammarExplanations).find(k =>
          message.toLowerCase().includes(k)
        );

        if (foundKey) {
          return grammarExplanations[foundKey];
        }

        return `Grammar is the backbone of any language! Here are key areas:\n\n📌 Tenses (الأزمنة):\n• Present Simple, Present Continuous\n• Past Simple, Present Perfect\n• Future (will / going to)\n\n📌 Parts of Speech (أ Parts of Speech):\n• Nouns, Verbs, Adjectives, Adverbs\n\n📌 Common Rules:\n• Subject-Verb Agreement\n• Article Usage (a, an, the)\n• Prepositions (in, on, at)\n\nAsk me about any specific grammar topic!`;
      }

      case 'courses':
        return `📚 We have complete courses for all levels:\n\n🎯 **Ibrahim Adel Course** — 24 lessons (beginner to advanced)\n🎯 **Speaking Master** — 16 lessons (conversation focus)\n🎯 **IELTS/TOEFL Prep** — 30 lessons (test preparation)\n\nEach course includes:\n✅ Video lessons\n✅ Practice exercises\n✅ Progress tracking\n✅ Quizzes\n✅ Downloadable content\n\nGo to the Courses section to start! Which course interests you?`;

      case 'certificates':
        return `🎓 Valuable resources for your career:\n\n📜 **Certificates:**\n• IELTS / TOEFL — International English tests\n• Cambridge FCE/CAE — Widely recognized\n• Google/Coursera certificates\n• LinkedIn Learning certificates\n\n💼 **Job Sites:**\n• LinkedIn, Bayt, Wuzzuf\n• Indeed, Glassdoor\n• Freelance: Upwork, Fiverr\n\nCheck our Resources section for direct links!`;

      case 'conversation':
        return `💬 Let's have a real conversation! I understand what you say and respond naturally.\n\nJust start talking about anything:\n• Tell me about your day\n• Discuss your favorite movie\n• Talk about your dreams\n• Ask me any question\n\nOr click the "Start Conversation" button for structured practice with voice input!`;

      case 'about_site':
        return `🌟 This platform includes:\n\n1️⃣ **Smart Level Test** — Different questions each time\n2️⃣ **6 Languages** — English, French, Spanish, German, Japanese, Chinese\n3️⃣ **Complete Courses** — With video content\n4️⃣ **Offline Conversation** — Chat with AI without internet\n5️⃣ **28-Day Learning Path** — Structured daily plan\n6️⃣ **Flashcards** — Spaced repetition learning\n7️⃣ **Voice Practice** — Speaking & listening exercises\n8️⃣ **Progress Tracking** — Monitor your growth\n9️⃣ **Certificates & Jobs** — Career resources\n🔟 **Works Offline** — Download once, learn forever`;

      case 'joke': {
        const jokes = [
          "Why did the student eat his homework? Because his teacher said it was a piece of cake! 😄",
          "Why did the phone go to jail? It had too many missed calls! 📱",
          "What do you call a bear with no teeth? A gummy bear! 🐻",
          "Why don't scientists trust atoms? Because they make up everything! ⚛️",
          "What did the ocean say to the beach? Nothing, it just waved! 🌊",
          "Why did the math book look sad? Because it had too many problems! 📚",
          "I told my wife she was drawing her eyebrows too high. She looked surprised! 😲"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      }

      case 'weather':
        return `I can't check real-time weather, but I can help you talk about weather in English:\n\n☀️ Sunny — مشمس\n🌧️ Rainy — ممطر\n❄️ Snowy — مثلج\n🌬️ Windy — عاصف\n☁️ Cloudy — غائم\n🌡️ Hot — حار\n🥶 Cold — بارد\n\nExample: "The weather is beautiful today! How's the weather where you are?"\n\nTry describing today's weather to me!`;

      // === الردود حسب الموضوع المكتشف ===
      default: {
        if (topic) {
          return this.getTopicResponse(topic, message, keywords, userName);
        }

        // تحليل السؤال وبناء رد ذكي
        if (intent.intent === 'question') {
          return this.getSmartAnswer(message, keywords, userName);
        }

        // رد عام ذكي
        return this.getGeneralResponse(message, keywords, userName, conversationHistory);
      }
    }
  },

  // ردود حسب الموضوع
  getTopicResponse(topic, message, keywords, userName) {
    const responses = {
      travel: `Traveling is one of the best ways to practice a language! ✈️\n\nUseful travel phrases:\n• "Where is the airport?" — أين المطار؟\n• "I'd like a room for 2 nights" — أريد غرفة لليومين\n• "How much does it cost?" — كم التكلفة؟\n• "Can you help me?" — هل يمكنك مساعدتي؟\n\nWhere would you like to travel? Tell me and I'll help you prepare!`,

      food: `Food is a universal topic! 🍽️\n\nLet's practice ordering food:\n• "I'd like to order, please" — أريد أن أطلب\n• "What do you recommend?" — ماذا تنصح؟\n• "The bill, please" — الحساب من فضلك\n• "I'm allergic to nuts" — أنا حساس من المكسرات\n\nWhat's your favorite cuisine? Let's discuss it!`,

      work: `Let's talk about work and career! 💼\n\nCommon phrases:\n• "I work as a..." — أعمل كـ...\n• "I'm looking for a job" — أبحث عن وظيفة\n• "What do you do?" — ماذا تعمل؟\n• "I have 5 years of experience" — لدي 5 سنوات خبرة\n\nWhat field do you work in? Describe your job to me!`,

      family: `Family is important! 👨‍👩‍👧‍👦\n\nFamily members:\n• Mother — الأم\n• Father — الأب\n• Brother — الأخ\n• Sister — الأخت\n• Grandmother — الجدة\n• Grandfather — الجد\n\nTell me about your family! I'd love to hear about them.`,

      education: `Education is the key to success! 📚\n\nAcademic vocabulary:\n• Study — يدرس\n• Exam — امتحان\n• Degree — شهادة\n• Professor — أستاذ\n• Research — بحث\n• Assignment — واجب\n\nWhat are you studying? Tell me about your education!`,

      technology: `Technology is fascinating! 💻\n\nTech vocabulary:\n• Computer — حاسوب\n• Software — برمجيات\n• Internet — إنترنت\n• Programming — برمجة\n• Artificial Intelligence — ذكاء اصطناعي\n\nWhat technology interests you most?`,

      music: `Music helps language learning! 🎵\n\nMusic vocabulary:\n• Song — أغنية\n• Melody — لحن\n• Lyrics — كلمات الأغنية\n• Concert — حفلة\n• Guitar — جيتار\n\nWhat kind of music do you like? Describe your favorite song!`,

      movie: `Movies are great for learning! 🎬\n\nFilm vocabulary:\n• Actor — ممثل\n• Director — مخرج\n• Plot — حبكة\n• Subtitle — ترجمة\n• Genre — نوع\n\nWhat's your favorite movie? Describe the plot to me!`,

      sports: `Sports keep us healthy! ⚽\n\nSports vocabulary:\n• Play football — يلعب كرة قدم\n• Team — فريق\n• Championship — بطولة\n• Score — نتيجة\n• Exercise — تمرين رياضي\n\nDo you play any sports? Tell me about your favorite!`,

      emotions: `It's important to express feelings! 💭\n\nEmotions in English:\n• I feel happy — أنا سعيد\n• I feel sad — أنا حزين\n• I'm excited — أنا متحمس\n• I'm worried — أنا قلق\n• I'm proud — أنا فخور\n\nHow are you feeling right now? Express it in English!`,

      health: `Health is wealth! 🏥\n\nHealth vocabulary:\n• Doctor — طبيب\n• Hospital — مستشفى\n• Medicine — دواء\n• Exercise — تمارين رياضية\n• Healthy — صحي\n\nTell me about your health routine!`,

      shopping: `Let's practice shopping! 🛍️\n\nShopping phrases:\n• How much is this? — كم سعر هذا؟\n• Can I try it on? — هل يمكنني قياسه؟\n• Do you have a bigger size? — هل لديك مقاس أكبر؟\n• It's too expensive — إنه غالٍ جداً\n\nWhat do you like to shop for?`
    };

    return responses[topic] || this.getGeneralResponse(message, selectedLanguage, 'صديقي', []);
  },

  // رد ذكي لأسئلة عامة
  getSmartAnswer(message, keywords, userName) {
    const lowerMsg = message.toLowerCase();

    // تحليل نوع السؤال
    if (lowerMsg.startsWith('what')) {
      if (keywords.includes('your') || keywords.includes('name')) {
        return `I'm your AI language learning companion! I can understand your questions and give you intelligent responses. What would you like to know?`;
      }
      return `Good question! Based on what you're asking about "${keywords.slice(0, 3).join(', ')}"... Let me explain:\n\nThis is a topic we can explore together. Try our courses for structured learning, or ask me a more specific question and I'll give you a detailed answer.\n\nFor example:\n• "What does [word] mean?"\n• "What is the difference between X and Y?"\n• "What should I study today?"`;
    }

    if (lowerMsg.startsWith('how')) {
      return `Great question about "how"! Here's what I suggest:\n\n1. Start with the basics in our courses\n2. Practice with flashcards daily\n3. Have conversations with me\n4. Take quizzes to test yourself\n\nFor "${keywords.slice(0, 3).join(' ')}" specifically, I recommend checking our structured courses which break down complex topics into easy steps.\n\nWant me to create a step-by-step guide for you?`;
    }

    if (lowerMsg.startsWith('why')) {
      return `That's a thoughtful question! 🤔\n\nUnderstanding "why" helps you learn deeper. Regarding "${keywords.slice(0, 3).join(' ')}":\n\n• Context matters — knowing why something is gives you real understanding\n• Our courses explain the reasoning behind rules\n• I can discuss any topic in depth with you\n\nWould you like to explore this topic further?`;
    }

    if (lowerMsg.startsWith('where')) {
      return `Interesting! Let me help you with that.\n\nFor "${keywords.slice(0, 3).join(' ')}", check:\n• Our Courses section for structured lessons\n• The Resources page for external links\n• The Learning Path for step-by-step guidance\n\nIs there something specific you're looking for?`;
    }

    // رد عام مفيد
    return `I understand you're asking about "${keywords.slice(0, 5).join(' ')}".\n\nHere's what I can do for you:\n\n📚 **Learn**: Check our courses for structured lessons\n💬 **Practice**: Chat with me about this topic\n📝 **Test**: Take a quiz on this subject\n🎯 **Track**: See your progress in the dashboard\n\nWould you like me to:\n1. Explain this topic in detail?\n2. Create practice questions?\n3. Give you a study plan?\n\nJust tell me what you prefer!`;
  },

  // رد عام ذكي
  getGeneralResponse(message, keywords, userName, history) {
    const responses = [
      `That's interesting, ${userName}! Tell me more about "${keywords.slice(0, 3).join(' ')}".\n\nI can discuss any topic with you. Just share your thoughts and I'll respond thoughtfully!`,

      `I appreciate you sharing that! "${keywords.slice(0, 3).join(' ')}" is a good topic.\n\nWould you like to:\n• Discuss this topic in English?\n• Learn related vocabulary?\n• Practice sentences about it?`,

      `Great point, ${userName}! I understand what you mean.\n\nLet me suggest: try expressing that same idea using different words. Language learning is about expanding how you communicate.\n\nCan you rephrase that in a simpler way? I'll help you improve it!`,

      `I hear you! "${keywords.slice(0, 4).join(' ')}" — that's worth talking about.\n\nHere's what I think... but more importantly, what do YOU think? Express your opinion and I'll help you say it better in ${LANGUAGES[selectedLanguage]?.name || 'English'}!`,

      `Thanks for sharing! I want to make sure I understand you correctly. Could you elaborate on "${keywords.slice(0, 3).join(' ')}"?\n\nThe more we chat, the better I can help you improve your language skills!`
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }
};
