// ========================================
// قاعدة بيانات المفردات والتدريبات
// ========================================

const VOCABULARY = {
  english: [
    { ar: 'مرحبا', en: 'Hello', pron: 'هيلو' },
    { ar: 'وداعا', en: 'Goodbye', pron: 'جود باي' },
    { ar: 'شكرا', en: 'Thank you', pron: 'ثانك يو' },
    { ar: 'من فضلك', en: 'Please', pron: 'بليز' },
    { ar: 'نعم', en: 'Yes', pron: 'يس' },
    { ar: 'لا', en: 'No', pron: 'نو' },
    { ar: 'كتاب', en: 'Book', pron: 'بوك' },
    { ar: 'قلم', en: 'Pen', pron: 'بن' },
    { ar: 'بيت', en: 'House', pron: 'هاوس' },
    { ar: 'ماء', en: 'Water', pron: 'ووتر' },
    { ar: 'صديق', en: 'Friend', pron: 'فريند' },
    { ar: 'مدرسة', en: 'School', pron: 'سكيول' },
    { ar: 'جميل', en: 'Beautiful', pron: 'بيوتيفول' },
    { ar: 'سعيد', en: 'Happy', pron: 'هابي' },
    { ar: 'طعام', en: 'Food', pron: 'فود' },
    { ar: 'شمس', en: 'Sun', pron: 'صن' },
    { ar: 'قمر', en: 'Moon', pron: 'مون' },
    { ar: 'نجمة', en: 'Star', pron: 'ستار' },
    { ar: 'وردة', en: 'Rose', pron: 'روز' },
    { ar: 'شجرة', en: 'Tree', pron: 'تري' }
  ],
  french: [
    { ar: 'مرحبا', en: 'Bonjour', pron: 'بونجور' },
    { ar: 'وداعا', en: 'Au revoir', pron: 'أو ريفوار' },
    { ar: 'شكرا', en: 'Merci', pron: 'ميرسي' },
    { ar: 'نعم', en: 'Oui', pron: 'وي' },
    { ar: 'لا', en: 'Non', pron: 'نون' },
    { ar: 'كتاب', en: 'Livre', pron: 'ليفر' },
    { ar: 'بيت', en: 'Maison', pron: 'ميزون' },
    { ar: 'ماء', en: 'Eau', pron: 'أو' },
    { ar: 'صديق', en: 'Ami', pron: 'امي' },
    { ar: 'مدرسة', en: 'École', pron: 'إيكول' }
  ],
  spanish: [
    { ar: 'مرحبا', en: 'Hola', pron: 'هولا' },
    { ar: 'وداعا', en: 'Adiós', pron: 'اديوس' },
    { ar: 'شكرا', en: 'Gracias', pron: 'غراثياس' },
    { ar: 'نعم', en: 'Sí', pron: 'سي' },
    { ar: 'لا', en: 'No', pron: 'نو' },
    { ar: 'كتاب', en: 'Libro', pron: 'ليبرو' },
    { ar: 'بيت', en: 'Casa', pron: 'كاسا' },
    { ar: 'ماء', en: 'Agua', pron: 'اجوا' },
    { ar: 'صديق', en: 'Amigo', pron: 'اميغو' },
    { ar: 'مدرسة', en: 'Escuela', pron: 'إسكويلا' }
  ],
  german: [
    { ar: 'مرحبا', en: 'Hallo', pron: 'هالو' },
    { ar: 'وداعا', en: 'Tschüss', pron: 'تشوس' },
    { ar: 'شكرا', en: 'Danke', pron: 'دانكه' },
    { ar: 'نعم', en: 'Ja', pron: 'يا' },
    { ar: 'لا', en: 'Nein', pron: 'ناين' },
    { ar: 'كتاب', en: 'Buch', pron: 'بوخ' },
    { ar: 'بيت', en: 'Haus', pron: 'هاوس' },
    { ar: 'ماء', en: 'Wasser', pron: 'فاسر' },
    { ar: 'صديق', en: 'Freund', pron: 'فروند' },
    { ar: 'مدرسة', en: 'Schule', pron: 'شولي' }
  ],
  japanese: [
    { ar: 'مرحبا', en: 'こんにちは', pron: 'كونيتشيوا' },
    { ar: 'وداعا', en: 'さようなら', pron: 'سايونارا' },
    { ar: 'شكرا', en: 'ありがとう', pron: 'اريغاتو' },
    { ar: 'نعم', en: 'はい', pron: 'هاي' },
    { ar: 'لا', en: 'いいえ', pron: 'إييه' },
    { ar: 'كتاب', en: '本', pron: 'هون' },
    { ar: 'بيت', en: '家', pron: 'إيه' },
    { ar: 'ماء', en: '水', pron: 'ميزو' },
    { ar: 'صديق', en: '友達', pron: 'توموداتشي' },
    { ar: 'مدرسة', en: '学校', pron: 'جاكو' }
  ],
  chinese: [
    { ar: 'مرحبا', en: '你好', pron: 'ني هاو' },
    { ar: 'وداعا', en: '再见', pron: 'زاي جيان' },
    { ar: 'شكرا', en: '谢谢', pron: 'شيه شيه' },
    { ar: 'نعم', en: '是', pron: 'شي' },
    { ar: 'لا', en: '不', pron: 'بو' },
    { ar: 'كتاب', en: '书', pron: 'شو' },
    { ar: 'بيت', en: '家', pron: 'جيا' },
    { ar: 'ماء', en: '水', pron: 'شوي' },
    { ar: 'صديق', en: '朋友', pron: 'بنغ يو' },
    { ar: 'مدرسة', en: '学校', pron: 'شوي شياو' }
  ]
};

// تمارين الترجمة
const TRANSLATION_EXERCISES = {
  english: [
    { text: 'How are you?', options: ['كيف حالك؟', 'من أنت؟', 'أين أنت؟', 'متى؟'], correct: 0 },
    { text: 'I love learning languages', options: ['أكره التعلم', 'أحب تعلم اللغات', 'أحب القراءة', 'أتعلم اللغة'], correct: 1 },
    { text: 'Good morning', options: ['تصبح على خير', 'مساء الخير', 'صباح الخير', 'أهلاً'], correct: 2 },
    { text: 'What is your name?', options: ['أين تسكن؟', 'كم عمرك؟', 'ما اسمك؟', 'ماذا تفعل؟'], correct: 2 },
    { text: 'See you tomorrow', options: ['أراك غداً', 'وداعاً', 'صباح الخير', 'مع السلامة'], correct: 0 },
    { text: 'I am a student', options: ['أنا معلم', 'أنا طالب', 'أنا مهندس', 'أنا طبيب'], correct: 1 },
    { text: 'Where is the airport?', options: ['أين الفندق؟', 'أين المطعم؟', 'أين المستشفى؟', 'أين المطار؟'], correct: 3 },
    { text: 'How much does it cost?', options: ['كم يكلف؟', 'كم الوقت؟', 'كم عمرك؟', 'كم سمك؟'], correct: 0 }
  ],
  french: [
    { text: 'Comment ça va?', options: ['كيف حالك؟', 'من أنت؟', 'أين أنت؟', 'ماذا تريد؟'], correct: 0 },
    { text: 'Je voudrais un café', options: ['أريد قهوة', 'أريد شاي', 'أريد ماء', 'أريد حليب'], correct: 0 },
    { text: 'Bonsoir', options: ['صباح الخير', 'مساء الخير', 'تصبح على خير', 'أهلاً'], correct: 1 }
  ],
  spanish: [
    { text: '¿Cómo estás?', options: ['كيف حالك؟', 'من أنت؟', 'أين أنت؟', 'ماذا تريد؟'], correct: 0 },
    { text: 'Buenos días', options: ['تصبح على خير', 'مساء الخير', 'صباح الخير', 'أهلاً'], correct: 2 },
    { text: 'Por favor', options: ['شكراً', 'عفواً', 'من فضلك', 'مرحباً'], correct: 2 }
  ],
  german: [
    { text: 'Wie geht es dir?', options: ['كيف حالك؟', 'من أنت؟', 'أين أنت؟', 'ماذا تريد؟'], correct: 0 },
    { text: 'Guten Morgen', options: ['تصبح على خير', 'مساء الخير', 'صباح الخير', 'أهلاً'], correct: 2 },
    { text: 'Ich heiße Ahmed', options: ['أنا أحمد', 'أنا معلم', 'أنا طالب', 'أنا مهندس'], correct: 0 }
  ],
  japanese: [
    { text: 'お元気ですか', options: ['كيف حالك؟', 'من أنت؟', 'أين أنت؟', 'ماذا تريد؟'], correct: 0 },
    { text: 'はじめまして', options: ['وداعاً', 'شكراً', 'تشرفت بمعرفتك', 'صباح الخير'], correct: 2 }
  ],
  chinese: [
    { text: '你好吗', options: ['كيف حالك؟', 'من أنت؟', 'أين أنت؟', 'ماذا تريد؟'], correct: 0 },
    { text: '早上好', options: ['تصبح على خير', 'مساء الخير', 'صباح الخير', 'أهلاً'], correct: 2 }
  ]
};

// جمل التدريب على الاستماع
const LISTENING_EXERCISES = {
  english: [
    { text: 'The cat is on the table', options: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 },
    { text: 'I go to school every day', options: ['أذهب إلى السوق كل يوم', 'أذهب إلى المدرسة كل يوم', 'أذهب إلى البيت كل يوم', 'أذهب إلى العمل كل يوم'], correct: 1 },
    { text: 'She likes to read books', options: ['هي تحب كتابة الكتب', 'هي تحب قراءة الكتب', 'هي تحب شراء الكتب', 'هي تحب بيع الكتب'], correct: 1 },
    { text: 'The weather is nice today', options: ['الطقس بارد اليوم', 'الطقس حار اليوم', 'الطقس جميل اليوم', 'الطقس ممطر اليوم'], correct: 2 }
  ],
  french: [
    { text: 'Le chat est sur la table', options: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 }
  ],
  spanish: [
    { text: 'El gato está en la mesa', options: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 }
  ],
  german: [
    { text: 'Die Katze ist auf dem Tisch', options: ['القطة على الطاولة', 'الكلب تحت الطاولة', 'القطة تحت الطاولة', 'الكلب على الطاولة'], correct: 0 }
  ],
  japanese: [],
  chinese: []
};

// الشارات والمكافآت
const ACHIEVEMENTS = [
  { id: 'first_lesson', title: 'الدرس الأول', description: 'أكملت درسك الأول', icon: '★', condition: 'lessons >= 1' },
  { id: 'five_lessons', title: 'خمسة دروس', description: 'أكملت 5 دروس', icon: '★★', condition: 'lessons >= 5' },
  { id: 'first_quiz', title: 'المختبر', description: 'أنهيت اختبار المستوى', icon: '◆', condition: 'quiz >= 1' },
  { id: 'streak_3', title: 'ثابت', description: 'تعلمت 3 أيام متتالية', icon: '●', condition: 'streak >= 3' },
  { id: 'streak_7', title: 'مواظب', description: 'تعلمت 7 أيام متتالية', icon: '●●', condition: 'streak >= 7' },
  { id: 'streak_30', title: 'شغوف', description: 'تعلمت 30 يوم متتالي', icon: '●●●', condition: 'streak >= 30' },
  { id: 'words_50', title: 'جمع الكلمات', description: 'تعلمت 50 كلمة', icon: '✦', condition: 'words >= 50' },
  { id: 'words_100', title: 'كنز المفردات', description: 'تعلمت 100 كلمة', icon: '✦✦', condition: 'words >= 100' },
  { id: 'perfect_score', title: 'المثالي', description: 'حصلت على 100% في الاختبار', icon: '♦', condition: 'perfect >= 1' },
  { id: 'assistant_user', title: 'مستكشف', description: 'سألت المساعد الذكي', icon: '◇', condition: 'assistant >= 1' }
];
