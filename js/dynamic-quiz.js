// ========================================
// الاختبار الديناميكي — فريد لكل مستخدم
// كل لغة مستقلة تماماً بدون أي افتراضي
// ========================================

const DynamicQuiz = {
  // مولّد الأسئلة
  generators: {
    // توليد أسئلة مترجمة
    translation(lang) {
      const vocab = VOCABULARY[lang];
      if (!vocab || vocab.length === 0) return [];
      const shuffled = [...vocab].sort(() => Math.random() - 0.5);
      const count = Math.min(5, shuffled.length);

      const questions = [];
      for (let i = 0; i < count; i++) {
        const word = shuffled[i];
        const wrongOptions = shuffled
          .filter((_, idx) => idx !== i)
          .slice(0, 3)
          .map(w => w.ar);

        if (wrongOptions.length < 3) {
          wrongOptions.push('كلمة أخرى', 'لا أعرف', 'خطأ');
        }

        const options = [...wrongOptions, word.ar]
          .sort(() => Math.random() - 0.5);

        questions.push({
          question: `ما معنى كلمة "${word.en}"؟`,
          options,
          correct: options.indexOf(word.ar),
          level: 'مبتدئ'
        });
      }
      return questions;
    },

    // توليد أسئلة نطق
    pronunciation(lang) {
      const vocab = VOCABULARY[lang];
      if (!vocab || vocab.length === 0) return [];
      const shuffled = [...vocab].sort(() => Math.random() - 0.5);

      return shuffled.slice(0, 3).map(word => ({
        question: `كيف تنطق "${word.ar}"؟`,
        options: [word.pron, word.en, 'غير صحيح', 'لا يوجد'],
        correct: 0,
        level: 'متوسط'
      }));
    },

    // توليد أسئلة قواعد — كل لغة لها قواعدها الخاصة
    grammar(lang) {
      const grammarSets = {
        english: [
          { q: 'She ___ to school every day', opts: ['go', 'goes', 'going', 'went'], correct: 1 },
          { q: 'I ___ a student', opts: ['is', 'are', 'am', 'be'], correct: 2 },
          { q: 'They ___ playing football', opts: ['is', 'am', 'are', 'be'], correct: 2 },
          { q: 'He ___ like coffee', opts: ['do', 'does', 'don\'t', 'doesn\'t'], correct: 3 },
          { q: 'We ___ seen that movie', opts: ['has', 'have', 'had', 'having'], correct: 1 },
          { q: 'The book ___ on the table', opts: ['is', 'are', 'am', 'be'], correct: 0 },
          { q: 'I ___ to the store yesterday', opts: ['go', 'goes', 'went', 'going'], correct: 2 },
          { q: 'She ___ been working here for 5 years', opts: ['has', 'have', 'had', 'is'], correct: 0 },
          { q: 'If I ___ rich, I would travel', opts: ['am', 'was', 'were', 'be'], correct: 2 },
          { q: 'The children ___ playing outside', opts: ['is', 'are', 'am', 'was'], correct: 1 }
        ],
        french: [
          { q: 'Je ___ français', opts: ['parle', 'parles', 'parlons', 'parlez'], correct: 0 },
          { q: 'Nous ___ étudiants', opts: ['sommes', 'êtes', 'sont', 'est'], correct: 0 },
          { q: 'Il ___ dans la maison', opts: ['est', 'suis', 'sommes', 'sont'], correct: 0 },
          { q: 'Vous ___ français', opts: ['parle', 'parles', 'parlons', 'parlez'], correct: 3 },
          { q: 'Elle ___ contente', opts: ['est', 'suis', 'sommes', 'sont'], correct: 0 },
          { q: 'Tu ___ un livre', opts: ['as', 'ai', 'a', 'ont'], correct: 0 },
          { q: 'Ils ___ à Paris', opts: ['sont', 'est', 'êtes', 'sommes'], correct: 0 },
          { q: 'Nous ___ mangé', opts: ['avons', 'avez', 'ont', 'ai'], correct: 0 }
        ],
        spanish: [
          { q: 'Yo ___ estudiante', opts: ['soy', 'eres', 'es', 'somos'], correct: 0 },
          { q: 'Nosotros ___ en casa', opts: ['estamos', 'estáis', 'están', 'está'], correct: 0 },
          { q: 'Ella ___ contenta', opts: ['está', 'estoy', 'estamos', 'están'], correct: 0 },
          { q: 'Ellos ___ amigos', opts: ['son', 'es', 'somos', 'eres'], correct: 0 },
          { q: 'Tú ___ español', opts: ['hablas', 'hablo', 'hablamos', 'habláis'], correct: 0 },
          { q: 'Yo ___ un libro', opts: ['tengo', 'tiene', 'tenemos', 'tienen'], correct: 0 },
          { q: 'Ella ___ a Madrid', opts: ['va', 'voy', 'vamos', 'van'], correct: 0 },
          { q: 'Nosotros ___ español', opts: ['hablamos', 'habláis', 'hablan', 'hablo'], correct: 0 }
        ],
        german: [
          { q: 'Ich ___ Student', opts: ['bin', 'bist', 'ist', 'sind'], correct: 0 },
          { q: 'Wir ___ zu Hause', opts: ['sind', 'bist', 'ist', 'seid'], correct: 0 },
          { q: 'Er ___ Lehrer', opts: ['ist', 'bin', 'bist', 'sind'], correct: 0 },
          { q: 'Ihr ___ deutsch', opts: ['seid', 'sind', 'bist', 'ist'], correct: 0 },
          { q: 'Sie ___ groß', opts: ['sind', 'bin', 'bist', 'ist'], correct: 0 },
          { q: 'Du ___ ein Buch', opts: ['hast', 'habe', 'haben', 'hat'], correct: 0 },
          { q: 'Ich ___ nach Hause', opts: ['gehe', 'gehst', 'geht', 'gehen'], correct: 0 },
          { q: 'Wir ___ Deutsch', opts: ['sprechen', 'spricht', 'sprichst', 'spreche'], correct: 0 }
        ],
        japanese: [
          { q: '私 ___ 学生です', opts: ['は', 'が', 'を', 'に'], correct: 0 },
          { q: '水 ___ 飲みます', opts: ['を', 'は', 'が', 'で'], correct: 0 },
          { q: '学校 ___ 行きます', opts: ['に', 'を', 'で', 'と'], correct: 0 },
          { q: 'これ ___ 本です', opts: ['は', 'が', 'を', 'に'], correct: 0 },
          { q: '友達 ___ 会います', opts: ['に', 'を', 'で', 'と'], correct: 0 },
          { q: '彼 ___ 先生です', opts: ['は', 'が', 'を', 'に'], correct: 0 },
          { q: '猫 ___ います', opts: ['が', 'は', 'を', 'に'], correct: 0 },
          { q: '本 ___ 読みます', opts: ['を', 'は', 'が', 'で'], correct: 0 }
        ],
        chinese: [
          { q: '我 ___ 学生', opts: ['是', '在', '有', '会'], correct: 0 },
          { q: '他 ___ 中国人', opts: ['是', '在', '有', '会'], correct: 0 },
          { q: '我 ___ 吃饭', opts: ['在', '是', '有', '会'], correct: 0 },
          { q: '你 ___ 说中文吗', opts: ['会', '是', '在', '有'], correct: 0 },
          { q: '这里 ___ 一本书', opts: ['有', '是', '在', '会'], correct: 0 },
          { q: '我 ___ 北京', opts: ['在', '是', '有', '会'], correct: 0 },
          { q: '他 ___ 工作', opts: ['有', '是', '在', '会'], correct: 0 },
          { q: '我们 ___ 学习', opts: ['在', '是', '有', '会'], correct: 0 }
        ]
      };

      const set = grammarSets[lang];
      if (!set) return [];
      const shuffled = [...set].sort(() => Math.random() - 0.5);

      return shuffled.slice(0, 5).map(item => ({
        question: `أكمل: "${item.q}"`,
        options: item.opts,
        correct: item.correct,
        level: 'متوسط'
      }));
    },

    // توليد أسئلة استماع — كل لغة لها جملها الخاصة
    listening(lang) {
      const sentences = {
        english: [
          { text: 'The cat is on the table', opts: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 },
          { text: 'I go to school every day', opts: ['أذهب إلى السوق كل يوم', 'أذهب إلى المدرسة كل يوم', 'أذهب إلى البيت كل يوم', 'أذهب إلى العمل كل يوم'], correct: 1 },
          { text: 'She likes to read books', opts: ['هي تحب كتابة الكتب', 'هي تحب قراءة الكتب', 'هي تحب شراء الكتب', 'هي تحب بيع الكتب'], correct: 1 },
          { text: 'The weather is nice today', opts: ['الطقس بارد اليوم', 'الطقس حار اليوم', 'الطقس جميل اليوم', 'الطقس ممطر اليوم'], correct: 2 },
          { text: 'We are having dinner now', opts: ['نأكل العشاء الآن', 'نأكل الغداء الآن', 'نأكل الفطور الآن', 'نطبخ الآن'], correct: 0 }
        ],
        french: [
          { text: 'Le chat est sur la table', opts: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 },
          { text: 'Je mange du pain', opts: ['أشرب الخبز', 'آكل الخبز', 'أشتري الخبز', 'أطبخ الخبز'], correct: 1 },
          { text: 'Il va à l\'école', opts: ['يذهب إلى المدرسة', 'يذهب إلى السوق', 'يذهب إلى البيت', 'يذهب إلى العمل'], correct: 0 },
          { text: 'Nous sommes contents', opts: ['نحن سعداء', 'نحن حزين', 'نحن غاضبون', 'نحن متعبون'], correct: 0 },
          { text: 'Elle lit un livre', opts: ['هي تقرأ كتاباً', 'هي تكتب كتاباً', 'هي تشتري كتاباً', 'هي تبيع كتاباً'], correct: 0 }
        ],
        spanish: [
          { text: 'El gato está en la mesa', opts: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 },
          { text: 'Yo bebo agua', opts: ['آكل الماء', 'أشرب الماء', 'أشتري الماء', 'أطبخ الماء'], correct: 1 },
          { text: 'Ella va a la escuela', opts: ['تذهب إلى المدرسة', 'تذهب إلى السوق', 'تذهب إلى البيت', 'تذهب إلى العمل'], correct: 0 },
          { text: 'Nosotros estamos felices', opts: ['نحن سعداء', 'نحن حزين', 'نحن غاضبون', 'نحن متعبون'], correct: 0 },
          { text: 'Él lee un libro', opts: ['هو يقرأ كتاباً', 'هو يكتب كتاباً', 'هو يشتري كتاباً', 'هو يبيع كتاباً'], correct: 0 }
        ],
        german: [
          { text: 'Die Katze ist auf dem Tisch', opts: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 },
          { text: 'Ich esse Brot', opts: ['أشرب الخبز', 'آكل الخبز', 'أشتري الخبز', 'أطبخ الخبز'], correct: 1 },
          { text: 'Er geht zur Schule', opts: ['يذهب إلى المدرسة', 'يذهب إلى السوق', 'يذهب إلى البيت', 'يذهب إلى العمل'], correct: 0 },
          { text: 'Wir sind glücklich', opts: ['نحن سعداء', 'نحن حزين', 'نحن غاضبون', 'نحن متعبون'], correct: 0 },
          { text: 'Sie liest ein Buch', opts: ['هي تقرأ كتاباً', 'هي تكتب كتاباً', 'هي تشتري كتاباً', 'هي تبيع كتاباً'], correct: 0 }
        ],
        japanese: [
          { text: '猫はテーブルの上にいます', opts: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 },
          { text: '私は学校に行きます', opts: ['أذهب إلى المدرسة', 'أذهب إلى السوق', 'أذهب إلى البيت', 'أذهب إلى العمل'], correct: 0 },
          { text: '彼女は本を読みます', opts: ['هي تقرأ كتاباً', 'هي تكتب كتاباً', 'هي تشتري كتاباً', 'هي تبيع كتاباً'], correct: 0 },
          { text: '私たちは幸せです', opts: ['نحن سعداء', 'نحن حزين', 'نحن غاضبون', 'نحن متعبون'], correct: 0 },
          { text: '水を飲みます', opts: ['أشرب الماء', 'آكل الماء', 'أشتري الماء', 'أطبخ الماء'], correct: 0 }
        ],
        chinese: [
          { text: '猫在桌子上', opts: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 },
          { text: '我去学校', opts: ['أذهب إلى المدرسة', 'أذهب إلى السوق', 'أذهب إلى البيت', 'أذهب إلى العمل'], correct: 0 },
          { text: '她看书', opts: ['هي تقرأ كتاباً', 'هي تكتب كتاباً', 'هي تشتري كتاباً', 'هي تبيع كتاباً'], correct: 0 },
          { text: '我们很高兴', opts: ['نحن سعداء', 'نحن حزين', 'نحن غاضبون', 'نحن متعبون'], correct: 0 },
          { text: '我喝水', opts: ['أشرب الماء', 'آكل الماء', 'أشتري الماء', 'أطبخ الماء'], correct: 0 }
        ]
      };

      const set = sentences[lang];
      if (!set || set.length === 0) return [];
      const shuffled = [...set].sort(() => Math.random() - 0.5);

      return shuffled.slice(0, 3).map(item => ({
        question: `استمع للجملة: "${item.text}" — ما معناها؟`,
        options: item.opts,
        correct: item.correct,
        level: 'متوسط',
        speakText: item.text
      }));
    },

    // توليد أسئلة محادثة — كل لغة لها أسئلتها الخاصة
    conversation(lang) {
      const convQuestions = {
        english: [
          { q: 'كيف تقول "كيف حالك؟" بالإنجليزية؟', opts: ['How are you?', 'What is your name?', 'Where are you?', 'What time is it?'], correct: 0 },
          { q: 'كيف تقدم نفسك؟', opts: ['I am go', 'My name is Ahmed', 'I like food', 'He is happy'], correct: 1 },
          { q: 'كيف تسأل عن الاتجاهات؟', opts: ['How old are you?', 'Where is the airport?', 'What is this?', 'Who are you?'], correct: 1 },
          { q: 'كيف تقول "شكراً"؟', opts: ['Sorry', 'Please', 'Thank you', 'Excuse me'], correct: 2 },
          { q: 'كيف تقول "لا أفهم"؟', opts: ['I don\'t understand', 'I don\'t know', 'I don\'t like', 'I don\'t have'], correct: 0 },
          { q: 'كيف تطلب المساعدة؟', opts: ['Can you help me?', 'Can I go?', 'Can I eat?', 'Can I sleep?'], correct: 0 },
          { q: 'كيف تقول "أين الحمام؟"', opts: ['Where is the food?', 'Where is the bathroom?', 'Where is the car?', 'Where is the book?'], correct: 1 },
          { q: 'كيف تقول "أنا جائع"؟', opts: ['I am happy', 'I am sad', 'I am hungry', 'I am tired'], correct: 2 }
        ],
        french: [
          { q: 'كيف تقول "شكراً" بالفرنسية؟', opts: ['Bonjour', 'Merci', 'Au revoir', 'S\'il vous plaît'], correct: 1 },
          { q: 'كيف تقول "مرحباً"؟', opts: ['Au revoir', 'Bonjour', 'Merci', 'Non'], correct: 1 },
          { q: 'كيف تقول "نعم"؟', opts: ['Non', 'Peut-être', 'Oui', 'Merci'], correct: 2 },
          { q: 'كيف تسأل "كيف حالك؟"', opts: ['Où est?', 'Comment ça va?', 'Qui êtes-vous?', 'Qu\'est-ce que c\'est?'], correct: 1 },
          { q: 'كيف تقول "لا أفهم"؟', opts: ['Je ne comprends pas', 'Je ne sais pas', 'Je n\'aime pas', 'Je n\'ai pas'], correct: 0 },
          { q: 'كيف تقول "أين الحمام؟"', opts: ['Où est la cuisine?', 'Où sont les toilettes?', 'Où est la voiture?', 'Où est le livre?'], correct: 1 }
        ],
        spanish: [
          { q: 'كيف تقول "شكراً" بالإسبانية؟', opts: ['Hola', 'Gracias', 'Adiós', 'Por favor'], correct: 1 },
          { q: 'كيف تقول "مرحباً"؟', opts: ['Adiós', 'Gracias', 'Hola', 'De nada'], correct: 2 },
          { q: 'كيف تقول "نعم"؟', opts: ['No', 'Sí', 'Tal vez', 'Por supuesto'], correct: 1 },
          { q: 'كيف تسأل "كيف حالك؟"', opts: ['¿Dónde estás?', '¿Cómo estás?', '¿Quién eres?', '¿Qué es esto?'], correct: 1 },
          { q: 'كيف تقول "لا أفهم"؟', opts: ['No entiendo', 'No sé', 'No me gusta', 'No tengo'], correct: 0 },
          { q: 'كيف تقول "أين الحمام؟"', opts: ['¿Dónde está la cocina?', '¿Dónde está el baño?', '¿Dónde está el coche?', '¿Dónde está el libro?'], correct: 1 }
        ],
        german: [
          { q: 'كيف تقول "شكراً" بالألمانية؟', opts: ['Hallo', 'Danke', 'Tschüss', 'Bitte'], correct: 1 },
          { q: 'كيف تقول "مرحباً"؟', opts: ['Tschüss', 'Danke', 'Hallo', 'Nein'], correct: 2 },
          { q: 'كيف تقول "نعم"؟', opts: ['Nein', 'Vielleicht', 'Ja', 'Danke'], correct: 2 },
          { q: 'كيف تسأل "كيف حالك؟"', opts: ['Wo bist du?', 'Wie geht es dir?', 'Wer bist du?', 'Was ist das?'], correct: 1 },
          { q: 'كيف تقول "لا أفهم"؟', opts: ['Ich verstehe nicht', 'Ich weiß nicht', 'Ich mag nicht', 'Ich habe nicht'], correct: 0 },
          { q: 'كيف تقول "أين الحمام؟"', opts: ['Wo ist die Küche?', 'Wo ist die Toilette?', 'Wo ist das Auto?', 'Wo ist das Buch?'], correct: 1 }
        ],
        japanese: [
          { q: 'كيف تقول "شكراً" باليابانية؟', opts: ['こんにちは', 'ありがとう', 'さようなら', 'はい'], correct: 1 },
          { q: 'كيف تقول "مرحباً"؟', opts: ['さようなら', 'ありがとう', 'こんにちは', 'いいえ'], correct: 2 },
          { q: 'كيف تقول "نعم"؟', opts: ['いいえ', 'はい', 'もう少し', 'すみません'], correct: 1 },
          { q: 'كيف تسأل "كيف حالك؟"', opts: ['お名前は？', 'お元気ですか？', 'どこですか？', '何ですか？'], correct: 1 },
          { q: 'كيف تقول "لا أفهم"؟', opts: ['わかりません', '知りません', '好きではありません', 'ありません'], correct: 0 },
          { q: 'كيف تقول "أين الحمام؟"', opts: ['トイレはどこですか？', '台所はどこですか？', '車はどこですか？', '本はどこですか？'], correct: 0 }
        ],
        chinese: [
          { q: 'كيف تقول "شكراً" بالصينية؟', opts: ['你好', '谢谢', '再见', '是'], correct: 1 },
          { q: 'كيف تقول "مرحباً"؟', opts: ['再见', '谢谢', '你好', '不'], correct: 2 },
          { q: 'كيف تقول "نعم"؟', opts: ['不', '是', '好', '有'], correct: 1 },
          { q: 'كيف تسأل "كيف حالك؟"', opts: ['你叫什么名字？', '你好吗？', '你在哪里？', '这是什么？'], correct: 1 },
          { q: 'كيف تقول "لا أفهم"؟', opts: ['我不懂', '我不知道', '我不喜欢', '我没有'], correct: 0 },
          { q: 'كيف تقول "أين الحمام؟"', opts: ['洗手间在哪里？', '厨房在哪里？', '车在哪里？', '书在哪里？'], correct: 0 }
        ]
      };

      const set = convQuestions[lang];
      if (!set) return [];
      const shuffled = [...set].sort(() => Math.random() - 0.5);

      return shuffled.slice(0, 4).map(item => ({
        question: item.q,
        options: item.opts,
        correct: item.correct,
        level: 'متوسط'
      }));
    },

    // أسئلة ثقافة — كل لغة لها ثقافتها الخاصة
    culture(lang) {
      const cultureQs = {
        english: [
          { q: 'ما هي عاصمة بريطانيا؟', opts: ['Manchester', 'London', 'Edinburgh', 'Birmingham'], correct: 1 },
          { q: 'ما هو العملة في أمريكا؟', opts: ['Euro', 'Pound', 'Dollar', 'Yen'], correct: 2 },
          { q: 'كم عدد قارات العالم؟', opts: ['5', '6', '7', '8'], correct: 2 },
          { q: 'ما أكبر محيط في العالم؟', opts: ['الأطلسي', 'الهندي', 'الهادئ', 'المتجمد'], correct: 2 }
        ],
        french: [
          { q: 'ما هي عاصمة فرنسا؟', opts: ['Marseille', 'Lyon', 'Paris', 'Nice'], correct: 2 },
          { q: 'ما هي العملة في فرنسا؟', opts: ['Franc', 'Euro', 'Pound', 'Dollar'], correct: 1 },
          { q: 'ما هو أشهر برج في فرنسا؟', opts: ['Big Ben', 'Eiffel Tower', 'Colosseum', 'Statue of Liberty'], correct: 1 },
          { q: 'ما هي اللغة الرسمية في فرنسا؟', opts: ['الإنجليزية', 'الفرنسية', 'الألمانية', 'الإسبانية'], correct: 1 }
        ],
        spanish: [
          { q: 'ما هي عاصمة إسبانيا؟', opts: ['Barcelona', 'Sevilla', 'Madrid', 'Valencia'], correct: 2 },
          { q: 'ما هي العملة في إسبانيا؟', opts: ['Peseta', 'Euro', 'Peso', 'Dollar'], correct: 1 },
          { q: 'ما هي اللغة الرسمية في إسبانيا؟', opts: ['البرتغالية', 'الإسبانية', 'الفرنسية', 'الإيطالية'], correct: 1 },
          { q: 'ما هي أشهر مدينة سياحية في إسبانيا؟', opts: ['مدريد', 'برشلونة', 'إشبيلية', 'فالنسيا'], correct: 1 }
        ],
        german: [
          { q: 'ما هي عاصمة ألمانيا؟', opts: ['Munich', 'Hamburg', 'Berlin', 'Frankfurt'], correct: 2 },
          { q: 'ما هي العملة في ألمانيا؟', opts: ['Mark', 'Euro', 'Franc', 'Pound'], correct: 1 },
          { q: 'ما هي اللغة الرسمية في ألمانيا؟', opts: ['الإنجليزية', 'الفرنسية', 'الألمانية', 'الهولندية'], correct: 2 },
          { q: 'ما هي أكبر مدينة في ألمانيا؟', opts: ['هامبورغ', 'ميونخ', 'برلين', 'فرانكفورت'], correct: 2 }
        ],
        japanese: [
          { q: 'ما هي عاصمة اليابان؟', opts: ['Osaka', 'Kyoto', 'Tokyo', 'Nagoya'], correct: 2 },
          { q: 'ما هي العملة في اليابان؟', opts: ['Yuan', 'Won', 'Yen', 'Dollar'], correct: 2 },
          { q: 'كم جزيرة في اليابان؟', opts: ['4', '5', '6', '7'], correct: 0 },
          { q: 'ما هي اللغة الرسمية في اليابان؟', opts: ['الصينية', 'الكورية', 'اليابانية', 'الإنجليزية'], correct: 2 }
        ],
        chinese: [
          { q: 'ما هي عاصمة الصين؟', opts: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'], correct: 1 },
          { q: 'ما هي العملة في الصين؟', opts: ['Yen', 'Won', 'Yuan', 'Dollar'], correct: 2 },
          { q: 'ما أطول نهر في العالم؟', opts: ['النيل', 'الأمازون', 'اليانجتسي', 'المسيسيبي'], correct: 0 },
          { q: 'ما هي اللغة الرسمية في الصين؟', opts: ['اليابانية', 'الكورية', 'الصينية', 'الإنجليزية'], correct: 2 }
        ]
      };

      const set = cultureQs[lang];
      if (!set) return [];
      const shuffled = [...set].sort(() => Math.random() - 0.5);

      return shuffled.slice(0, 3).map(item => ({
        question: item.q,
        options: item.opts,
        correct: item.correct,
        level: 'متوسط'
      }));
    }
  },

  // توليد اختبار متكامل فريد
  generateFullTest(lang) {
    const allQuestions = [
      ...this.generators.translation(lang),
      ...this.generators.grammar(lang),
      ...this.generators.pronunciation(lang),
      ...this.generators.listening(lang),
      ...this.generators.conversation(lang),
      ...this.generators.culture(lang)
    ];

    // خلط عشوائي
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);

    // اختيار 10 أسئلة
    return shuffled.slice(0, 10);
  },

  // اختبار سريع (5 أسئلة)
  generateQuickTest(lang) {
    const allQuestions = [
      ...this.generators.translation(lang),
      ...this.generators.grammar(lang),
      ...this.generators.conversation(lang)
    ];

    return allQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
  },

  // اختبار مخصص (تحديد الأنواع)
  generateCustomTest(lang, types) {
    let questions = [];
    types.forEach(type => {
      if (this.generators[type]) {
        questions = [...questions, ...this.generators[type](lang)];
      }
    });
    return questions.sort(() => Math.random() - 0.5).slice(0, 10);
  }
};

// === واجهة الاختبار الديناميكي ===
let dynQuizQuestions = [];
let dynQuizIndex = 0;
let dynQuizScore = 0;
let dynAnswered = false;
let dynQuizMode = 'full';

function startDynamicQuiz(mode) {
  dynQuizMode = mode || 'full';
  const lang = selectedLanguage;

  if (dynQuizMode === 'full') {
    dynQuizQuestions = DynamicQuiz.generateFullTest(lang);
  } else if (dynQuizMode === 'quick') {
    dynQuizQuestions = DynamicQuiz.generateQuickTest(lang);
  } else {
    dynQuizQuestions = DynamicQuiz.generateFullTest(lang);
  }

  if (dynQuizQuestions.length === 0) {
    showToast('لا توجد أسئلة متاحة لهذه اللغة');
    return;
  }

  dynQuizIndex = 0;
  dynQuizScore = 0;
  dynAnswered = false;

  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'dynQuizModal';
  modal.innerHTML = `
    <div class="quiz-container dyn-quiz">
      <button class="close-btn" onclick="closeDynQuiz()">✕</button>
      <div class="dyn-quiz-header">
        <h2>${dynQuizMode === 'quick' ? 'اختبار سريع' : 'اختبار شامل فريد'}</h2>
        <span class="dyn-quiz-badge">أسئلة جديدة في كل مرة</span>
      </div>
      <div class="quiz-progress">
        <div class="progress-bar" id="dynProgress"></div>
      </div>
      <div class="dyn-quiz-info">
        <span>سؤال <span id="dynCurrent">1</span>/${dynQuizQuestions.length}</span>
        <span>النقاط: <strong id="dynScore">0</strong></span>
      </div>
      <div class="quiz-question" id="dynQuestion"></div>
      <div class="quiz-options" id="dynOptions"></div>
      <div class="quiz-result hidden" id="dynResult"></div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.style.opacity = '1';
  modal.style.transform = 'none';

  renderDynQuestion();
}

function renderDynQuestion() {
  const q = dynQuizQuestions[dynQuizIndex];
  if (!q) return finishDynQuiz();

  const progress = (dynQuizIndex / dynQuizQuestions.length) * 100;
  document.getElementById('dynProgress').style.width = progress + '%';
  document.getElementById('dynCurrent').textContent = dynQuizIndex + 1;
  document.getElementById('dynQuestion').textContent = q.question;

  const container = document.getElementById('dynOptions');
  dynAnswered = false;
  container.innerHTML = q.options.map((opt, i) => `
    <div class="quiz-option" onclick="checkDynAnswer(${i})">${opt}</div>
  `).join('');

  // نطق السؤال إذا كان هناك نص صوتي
  if (q.speakText) {
    const speakBtn = document.createElement('button');
    speakBtn.className = 'btn btn-outline btn-sm';
    speakBtn.style.margin = '0 auto 10px';
    speakBtn.textContent = '♪ استمع للجملة';
    speakBtn.onclick = (e) => { e.stopPropagation(); speak(q.speakText, selectedLanguage); };
    container.parentElement.insertBefore(speakBtn, container);
  }
}

function checkDynAnswer(selected) {
  const q = dynQuizQuestions[dynQuizIndex];
  // منع احتساب الإجابة أكثر من مرة (نقر متكرر سريع)
  if (!q || dynAnswered) return;
  dynAnswered = true;
  const options = document.querySelectorAll('#dynOptions .quiz-option');

  options.forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    if (i === q.correct) opt.classList.add('correct');
    if (i === selected && selected !== q.correct) opt.classList.add('wrong');
  });

  if (selected === q.correct) {
    dynQuizScore++;
    document.getElementById('dynScore').textContent = dynQuizScore;
    playSound('correct');
  } else {
    playSound('wrong');
  }

  setTimeout(() => {
    dynQuizIndex++;
    if (dynQuizIndex < dynQuizQuestions.length) {
      renderDynQuestion();
    } else {
      finishDynQuiz();
    }
  }, 1200);
}

function finishDynQuiz() {
  const total = dynQuizQuestions.length;
  const percentage = Math.round((dynQuizScore / total) * 100);

  let level, message;
  if (percentage >= 90) { level = 'خبير'; message = 'أداء ممتاز! أنت في قمة التحكم.'; }
  else if (percentage >= 70) { level = 'متقدم'; message = 'أداء رائع! استمر في هذا المستوى.'; }
  else if (percentage >= 50) { level = 'متوسط'; message = 'أداء جيد! ركز على نقاط الضعف.'; }
  else { level = 'مبتدئ'; message = 'تحتاج المزيد من الممارسة. لا تستسلم!'; }

  document.getElementById('dynProgress').style.width = '100%';
  document.getElementById('dynQuestion').textContent = 'اكتمل الاختبار!';
  document.getElementById('dynOptions').innerHTML = '';

  const result = document.getElementById('dynResult');
  result.innerHTML = `
    <h3>النتيجة: ${percentage}%</h3>
    <p>أجبت بشكل صحيح على ${dynQuizScore} من ${total}</p>
    <p class="quiz-level">مستواك المقدر: <strong>${level}</strong></p>
    <p>${message}</p>
    <div class="dyn-quiz-actions">
      <button class="btn btn-primary" onclick="closeDynQuiz(); startDynamicQuiz('${dynQuizMode}');">اختبار جديد (أسئلة مختلفة)</button>
      <button class="btn btn-outline" onclick="closeDynQuiz()">إغلاق</button>
    </div>
  `;
  result.classList.remove('hidden');

  // حفظ النتيجة
  localStorage.setItem('userLevel', level);
  localStorage.setItem('assessmentCompleted', 'true');

  // عداد الاختبارات
  const tests = parseInt(localStorage.getItem('testsTaken') || '0') + 1;
  localStorage.setItem('testsTaken', tests);

  if (percentage === 100) {
    localStorage.setItem('perfectScore', 'true');
  }

  addActivity(`أنهيت اختباراً ${dynQuizMode === 'quick' ? 'سريع' : 'شاملاً'} — ${percentage}%`);
  checkAchievements();
}

function closeDynQuiz() {
  const modal = document.getElementById('dynQuizModal');
  if (modal) modal.remove();
}
