// ========================================
// الكورسات الكاملة — Courses
// ========================================

const COURSES = {
  english: [
    {
      id: 'eng_zae_1',
      title: 'Z American English — كورس إبراهيم عادل الكامل',
      teacher: 'إبراهيم عادل',
      teacherTitle: 'مؤسس قناة Z American English — 12.8M مشترك',
      duration: '20+ ساعة',
      lessons: 50,
      level: 'مبتدئ',
      rating: 4.9,
      students: 12800000,
      image: '🇬🇧',
      color: '#b8860b',
      youtube: 'https://www.youtube.com/@ZAmericanEnglish',
      playlist: 'PLp22-4PivYmLBmV2wctgqyyRlIs1MhmNr',
      curriculum: [
        { id: 1, title: 'كورس الصوتيات — المستوى الأول', duration: '30 درس', type: 'فيديو', description: 'تعلم النطق الصحيح من الصفر مع إبراهيم عادل', videoId: 'm8VUaW1b_z8' },
        { id: 2, title: 'كورس القواعد — المستوى الأول', duration: '20 درس', type: 'فيديو', description: 'شرح كامل للقواعد الأساسية بطريقة مبسطة', videoId: '9cDYq1cun8o' },
        { id: 3, title: 'كورس المحادثة', duration: '25 درس', type: 'عملي', description: 'تعلم التحدث في المواقف اليومية', videoId: 'Th9S81mblxo' },
        { id: 4, title: 'كورس المفردات', duration: '40 درس', type: 'فيديو', description: 'أهم الكلمات المستخدمة في الحياة اليومية', videoId: 'dNunBVGnnzE' },
        { id: 5, title: 'كورس الاستماع', duration: '20 درس', type: 'عملي', description: 'تحسين مهارة الاستماع تدريجياً', videoId: 'm8VUaW1b_z8' },
        { id: 6, title: 'كورس الكتابة', duration: '15 درس', type: 'عملي', description: 'كتابة رسائل وفقرات بالإنجليزية', videoId: '9cDYq1cun8o' },
        { id: 7, title: 'خطة الدراسة الكاملة', duration: '1 درس', type: 'مراجعة', description: 'كيف تدرس بالترتيب الصحيح من القناة', videoId: '9cDYq1cun8o' },
        { id: 8, title: 'كورس القراءة', duration: '15 درس', type: 'عملي', description: 'تحسين مهارة القراءة والفهم', videoId: 'Th9S81mblxo' }
      ]
    },
    {
      id: 'eng_lucy_1',
      title: 'English with Lucy — الإنجليزية  British الحقيقية',
      teacher: 'Lucy (English with Lucy)',
      teacherTitle: '14.1M مشترك — أفضل معلمة بريطانية',
      duration: '15+ ساعة',
      lessons: 30,
      level: 'متوسط',
      rating: 4.9,
      students: 14100000,
      image: '🇬🇧',
      color: '#ec4899',
      youtube: 'https://www.youtube.com/@EnglishwithLucy',
      curriculum: [
        { id: 1, title: 'العبارات اليومية الأساسية', duration: '20 دقيقة', type: 'فيديو', description: 'عبارات تستخدمها كل يوم في الحياة', videoId: 'W6rtPM4jO3E' },
        { id: 2, title: 'كيف تستخدم To Take', duration: '15 دقيقة', type: 'فيديو', description: 'شرح شامل لاستخدامات الفعل', videoId: '338muHaMK9Q' },
        { id: 3, title: 'أتقن هذه الكلمة وستتحدث بطلاقة', duration: '20 دقيقة', type: 'فيديو', description: 'تقنية ذكية لتحسين المحادثة', videoId: 'ikHXEIxBUrY' },
        { id: 4, title: 'روتين دراسي يومي', duration: '15 دقيقة', type: 'نصائح', description: 'كيف تنظم وقتك للتعلم يومياً', videoId: 'Wo-C-jgA4Y8' },
        { id: 5, title: 'كل المفردات المتقدمة في 90 دقيقة', duration: '90 دقيقة', type: 'فيديو', description: 'مفردات متقدمة مع اختبار', videoId: 'kotoNOAvNGk' }
      ]
    },
    {
      id: 'eng_bbc_1',
      title: 'BBC Learning English — الإنجليزية من البي بي سي',
      teacher: 'BBC Learning English',
      teacherTitle: '10.8M مشترك — مصدر موثوق عالمياً',
      duration: '10+ ساعة',
      lessons: 25,
      level: 'مبتدئ',
      rating: 4.8,
      students: 10800000,
      image: '🇬🇧',
      color: '#06b6d4',
      youtube: 'https://www.youtube.com/@bbclearningenglish',
      curriculum: [
        { id: 1, title: '6 Minute English — مفردات اللغة', duration: '60 دقيقة', type: 'فيديو', description: 'ساعة كاملة من المفردات المفيدة', videoId: 'fcN0BXzK8bg' },
        { id: 2, title: 'English Language Mega-class', duration: '30 دقيقة', type: 'فيديو', description: '30 دقيقة مفردات مركزة', videoId: 'nOOm36nz_jY' },
        { id: 3, title: 'تعبيرات الغضب والانفعال', duration: '15 دقيقة', type: 'فيديو', description: 'كيف تعبر عن مشاعرك بالإنجليزية', videoId: '2vwRxpcypVI' },
        { id: 4, title: 'كيف تتحدث عن روتينك اليومي', duration: '10 دقيقة', type: 'فيديو', description: 'محادثة يومية بسيطة وواضحة', videoId: 'bq6GBbh3uhU' },
        { id: 5, title: 'كيف تتحدث عن الدماغ', duration: '10 دقيقة', type: 'فيديو', description: 'محادثة سهلة وممتعة', videoId: 'j64n3KdIob0' }
      ]
    },
    {
      id: 'eng_1',
      title: 'الإنجليزية من الصفر — كورس إبراهيم عادل',
      teacher: 'إبراهيم عادل',
      teacherTitle: 'أحد أفضل معلمي الإنجليزية',
      duration: '12 ساعة',
      lessons: 24,
      level: 'مبتدئ',
      rating: 4.9,
      students: 2500000,
      image: '🇬🇧',
      color: '#6366f1',
      curriculum: [
        { id: 1, title: 'الحروف والأصوات الأساسية', duration: '20 دقيقة', type: 'فيديو', description: 'تعلم نطق الحروف الإنجليزية الـ 26 بشكل صحيح' },
        { id: 2, title: 'Present Simple — المضارع البسيط', duration: '25 دقيقة', type: 'فيديو', description: 'قاعدة المضارع البسيط مع أمثلة عملية' },
        { id: 3, title: 'Present Continuous — المستمر', duration: '25 دقيقة', type: 'فيديو', description: 'الفرق بين البسيط والمستمر' },
        { id: 4, title: 'الأرقام والوقت', duration: '15 دقيقة', type: 'فيديو', description: 'التحدث عن الوقت والأرقام بطلاقة' },
        { id: 5, title: 'التحيات والتعارف', duration: '20 دقيقة', type: 'عملي', description: 'كيف تقدم نفسك وتتحدث مع الآخرين' },
        { id: 6, title: 'المفردات اليومية — الجزء 1', duration: '30 دقيقة', type: 'فيديو', description: '100 كلمة أساسية للاستخدام اليومي' },
        { id: 7, title: 'الأسئلة وصيغتها', duration: '25 دقيقة', type: 'فيديو', description: 'كيف تطرح الأسئلة بنماذج مختلفة' },
        { id: 8, title: 'الماضي البسيط', duration: '30 دقيقة', type: 'فيديو', description: 'التعبير عن الماضي مع القواعد والأفعال الشاذة' },
        { id: 9, title: 'الحاضر التام', duration: '25 دقيقة', type: 'فيديو', description: 'Present Perfect مع الفرق عن الماضي' },
        { id: 10, title: 'اختبار منتصف الكورس', duration: '15 دقيقة', type: 'اختبار', description: 'اختبر ما تعلمته حتى الآن' },
        { id: 11, title: 'المستقبل — Will & Going to', duration: '25 دقيقة', type: 'فيديو', description: 'التعبير عن المستقبل بطرق مختلفة' },
        { id: 12, title: 'الأسماء المعدودة وغير المعدودة', duration: '20 دقيقة', type: 'فيديو', description: 'متى نقول a, an, some, any' },
        { id: 13, title: 'ضمائر الملكية', duration: '20 دقيقة', type: 'فيديو', description: 'my, your, his, her, its, our, their' },
        { id: 14, title: 'المقارنة والتفضيل', duration: '25 دقيقة', type: 'فيديو', description: 'er, est, more, most مع أمثلة' },
        { id: 15, title: 'الأفعال الناقصة', duration: '30 دقيقة', type: 'فيديو', description: 'can, could, must, should, may, might' },
        { id: 16, title: 'المبني للمجهول', duration: '25 دقيقة', type: 'فيديو', description: 'Passive Voice مع كل الأزمنة' },
        { id: 17, title: 'أدوات الربط والعبارات', duration: '20 دقيقة', type: 'فيديو', description: 'however, moreover, therefore, besides' },
        { id: 18, title: 'الكتابة الأساسية', duration: '30 دقيقة', type: 'عملي', description: 'كتابة رسائل وفقرات بسيطة' },
        { id: 19, title: 'المحادثة — Daily Conversations', duration: '25 دقيقة', type: 'عملي', description: 'محادثات واقعية في المواقف اليومية' },
        { id: 20, title: 'مشاهدة الأفلام والمسلسلات', duration: '20 دقيقة', type: 'فيديو', description: 'كيف تفهم الأفلام بدون ترجمة' },
        { id: 21, title: 'الاستماع والفهم', duration: '25 دقيقة', type: 'عملي', description: 'تمارين استماع متدرجة الصعوبة' },
        { id: 22, title: 'التحدث بثقة', duration: '30 دقيقة', type: 'عملي', description: 'تقنيات التحدث أمام الناس' },
        { id: 23, title: 'مراجعة شاملة', duration: '30 دقيقة', type: 'مراجعة', description: 'مراجعة كل القواعد والمفردات' },
        { id: 24, title: 'الاختبار النهائي', duration: '30 دقيقة', type: 'اختبار', description: 'اختبار شامل لقياس تقدمك' }
      ]
    },
    {
      id: 'eng_2',
      title: 'محادثة إنجليزية متقدمة — Speaking Master',
      teacher: 'د. أحمد الشريف',
      teacherTitle: 'مدرب محادثة معتمد',
      duration: '8 ساعات',
      lessons: 16,
      level: 'متوسط',
      rating: 4.8,
      students: 800000,
      image: '🎙',
      color: '#ec4899',
      curriculum: [
        { id: 1, title: 'كسر حاجز الخوف من التحدث', duration: '15 دقيقة', type: 'فيديو', description: 'تقنيات التغلب على الخوف' },
        { id: 2, title: 'النطق الصحيح للكلمات', duration: '25 دقيقة', type: 'عملي', description: 'تدريب على النطق الأمريكي والبريطاني' },
        { id: 3, title: 'عبارات محادثة شائعة', duration: '20 دقيقة', type: 'فيديو', description: 'عبارات تستخدم في محادثات الحياة اليومية' },
        { id: 4, title: 'التحدث عن نفسك', duration: '20 دقيقة', type: 'عملي', description: 'كيف تقدم نفسك باحترافية' },
        { id: 5, title: 'المناقشة والتعبير عن الرأي', duration: '25 دقيقة', type: 'عملي', description: 'كيف تعبّر عن رأيك بثقة' },
        { id: 6, title: 'التعارض وحل الخلافات', duration: '20 دقيقة', type: 'فيديو', description: 'عبارات المهادنة والإقناع' },
        { id: 7, title: 'التحدث في المقابلات', duration: '30 دقيقة', type: 'عملي', description: 'أسئلة المقابلات وإجاباتها' },
        { id: 8, title: 'العرض التقديمي', duration: '25 دقيقة', type: 'عملي', description: 'كيف تقدم عرضاً احترافياً' },
        { id: 9, title: 'الهاتف والمكالمات', duration: '15 دقيقة', type: 'فيديو', description: 'عبارات المكالمات الهاتفية' },
        { id: 10, title: 'السفر والمطار', duration: '20 دقيقة', type: 'فيديو', description: 'موقف السفر بالكامل' },
        { id: 11, title: 'في المطعم والتسوق', duration: '20 دقيقة', type: 'عملي', description: 'مواقع واقعية' },
        { id: 12, title: 'الروية والقصص', duration: '25 دقيقة', type: 'عملي', description: 'كيف تحكي قصة بالإنجليزية' },
        { id: 13, title: 'ال幽默 والدعابات', duration: '15 دقيقة', type: 'فيديو', description: 'الضحك بالإنجليزية' },
        { id: 14, title: 'لقاءات اجتماعية', duration: '20 دقيقة', type: 'عملي', description: 'حفلات وتجمعات' },
        { id: 15, title: 'محاكاة محادثة حقيقية', duration: '30 دقيقة', type: 'عملي', description: 'محادثة كاملة مع تقييم' },
        { id: 16, title: 'الاختبار النهائي', duration: '20 دقيقة', type: 'اختبار', description: 'اختبار المحادثة الشامل' }
      ]
    },
    {
      id: 'eng_3',
      title: 'IELTS & TOEFL — التحضير للاختبارات',
      teacher: 'سارة محمد',
      teacherTitle: 'مدرّبة IELTS معتمدة',
      duration: '15 ساعة',
      lessons: 30,
      level: 'متقدم',
      rating: 4.9,
      students: 500000,
      image: '📋',
      color: '#06b6d4',
      curriculum: [
        { id: 1, title: 'فهم بنية الاختبار', duration: '20 دقيقة', type: 'فيديو', description: 'كل ما تحتاج معرفته عن IELTS' },
        { id: 2, title: 'Reading — القراءة', duration: '30 دقيقة', type: 'فيديو', description: 'استراتيجيات فهم النصوص الطويلة' },
        { id: 3, title: 'Listening — الاستماع', duration: '30 دقيقة', type: 'عملي', description: 'تمارين استماع بنمط الاختبار' },
        { id: 4, title: 'Writing Task 1', duration: '35 دقيقة', type: 'عملي', description: 'كتابة وصف الرسوم البيانية' },
        { id: 5, title: 'Writing Task 2', duration: '35 دقيقة', type: 'عملي', description: 'كتابة المقال الحجاجي' },
        { id: 6, title: 'Speaking — المحادثة', duration: '30 دقيقة', type: 'عملي', description: 'كل أجزاء المحادثة مع نماذج' },
        { id: 7, title: 'القواعد المتقدمة', duration: '25 دقيقة', type: 'فيديو', description: 'قواعد تحتاجها للاختبار' },
        { id: 8, title: 'مفردات الاختبار', duration: '30 دقيقة', type: 'فيديو', description: 'أهم 500 كلمة للاختبار' },
        { id: 9, title: 'اختبار تجريبي شامل', duration: '45 دقيقة', type: 'اختبار', description: 'اختبار محاكى للاختبار الحقيقي' },
        { id: 10, title: 'تحليل الأخطاء', duration: '25 دقيقة', type: 'فيديو', description: 'كيف تتجنب أخطاء الشائعات' }
      ]
    }
  ],
  french: [
    {
      id: 'fra_alexa_1',
      title: 'Learn French with Alexa — الفرنسية مع ألكسا',
      teacher: 'Alexa Polidoro',
      teacherTitle: '2.5M مشترك — أفضل معلمة فرنسية على يوتيوب',
      duration: '15+ ساعة',
      lessons: 30,
      level: 'مبتدئ',
      rating: 4.9,
      students: 2500000,
      image: '🇫🇷',
      color: '#8b5cf6',
      youtube: 'https://www.youtube.com/@learnfrenchwithalexa',
      curriculum: [
        { id: 1, title: 'مراجعة الأزمنة الفرنسية', duration: '30 دقيقة', type: 'فيديو', description: 'شرح كامل للأزمنة الفرنسية', videoId: 'eFZNy3tX0xA' },
        { id: 2, title: 'تحدث معي بالفرنسية — ساعة كاملة', duration: '60 دقيقة', type: 'عملي', description: 'محادثة فرنسية حقيقية لمدة ساعة', videoId: 'QcpLSHVsNCU' },
        { id: 3, title: 'French Lessons 1-20', duration: '20 درس', type: 'فيديو', description: '20 درس مرتب من الصفر', videoId: 'PLV1-QgpUU7N3ZGbRMIrV24FCuvZoMt4xw' },
        { id: 4, title: 'Everyday French vs Traditional French', duration: '20 دقيقة', type: 'فيديو', description: 'الفرق بين الفرنسية اليومية والتقليدية', videoId: '-jsAn27LcI8' }
      ]
    },
    {
      id: 'fra_1',
      title: 'الفرنسية من الصفر — Complete French',
      teacher: 'ماري دوبون',
      teacherTitle: 'معلمة فرنسية أصلية',
      duration: '10 ساعات',
      lessons: 20,
      level: 'مبتدئ',
      rating: 4.8,
      students: 300000,
      image: '🇫🇷',
      color: '#8b5cf6',
      curriculum: [
        { id: 1, title: 'الحروف والنطق', duration: '20 دقيقة', type: 'فيديو', description: 'نظام النطق الفرنسي' },
        { id: 2, title: 'التحيات الأساسية', duration: '15 دقيقة', type: 'فيديو', description: 'Bonjour, Bonsoir, Au revoir' },
        { id: 3, title: 'أدوات التعريف', duration: '25 دقيقة', type: 'فيديو', description: 'Le, La, Les, Un, Une, Des' },
        { id: 4, title: 'الفعل Être', duration: '25 دقيقة', type: 'فيديو', description: 'أهم فعل في الفرنسية' },
        { id: 5, title: 'الفعل Avoir', duration: '25 دقيقة', type: 'فيديو', description: 'الثاني أهم فعل' },
        { id: 6, title: 'العدد والعد', duration: '20 دقيقة', type: 'فيديو', description: 'الأرقام والجمع' },
        { id: 7, title: 'المضارع البسيط', duration: '30 دقيقة', type: 'فيديو', description: 'Les verbes au présent' },
        { id: 8, title: 'الضمائر', duration: '20 دقيقة', type: 'فيديو', description: 'Je, Tu, Il, Elle, Nous, Vous, Ils, Elles' },
        { id: 9, title: 'المفردات اليومية', duration: '25 دقيقة', type: 'فيديو', description: '100 كلمة أساسية' },
        { id: 10, title: 'اختبار منتصف الكورس', duration: '15 دقيقة', type: 'اختبار', description: 'اختبر تقدمك' },
        { id: 11, title: 'السفر بالفرنسية', duration: '25 دقيقة', type: 'عملي', description: 'في المطار والقطار والفندق' },
        { id: 12, title: 'الطعام والمطعم', duration: '20 دقيقة', type: 'عملي', description: 'طلب الطعام بالفرنسية' },
        { id: 13, title: 'الماضي — Passé Composé', duration: '30 دقيقة', type: 'فيديو', description: 'التعبير عن الماضي' },
        { id: 14, title: 'المستقبل — Futur Simple', duration: '25 دقيقة', type: 'فيديو', description: 'التعبير عن المستقبل' },
        { id: 15, title: 'المقارنة والتفضيل', duration: '20 دقيقة', type: 'فيديو', description: 'Plus que, moins que, aussi... que' },
        { id: 16, title: 'المحادثة اليومية', duration: '30 دقيقة', type: 'عملي', description: 'محادثات واقعية' },
        { id: 17, title: 'الكتابة الأساسية', duration: '25 دقيقة', type: 'عملي', description: 'كتابة رسائل بسيطة' },
        { id: 18, title: 'الثقافة الفرنسية', duration: '20 دقيقة', type: 'فيديو', description: 'عادات وتقاليد فرنسا' },
        { id: 19, title: 'مراجعة شاملة', duration: '30 دقيقة', type: 'مراجعة', description: 'مراجعة كل الدروس' },
        { id: 20, title: 'الاختبار النهائي', duration: '25 دقيقة', type: 'اختبار', description: 'اختبار شامل' }
      ]
    }
  ],
  spanish: [
    {
      id: 'spa_juan_1',
      title: 'Español con Juan — الإسبانية مع خوان',
      teacher: 'Juan (Español con Juan)',
      teacherTitle: 'معلم إسباني أصلي — محبوب عالمياً',
      duration: '15+ ساعة',
      lessons: 30,
      level: 'مبتدئ',
      rating: 4.8,
      students: 500000,
      image: '🇪🇸',
      color: '#f59e0b',
      youtube: 'https://www.youtube.com/@espanolconjuan',
      curriculum: [
        { id: 1, title: 'التحيات الأساسية', duration: '15 دقيقة', type: 'فيديو', description: 'Hola, Buenos días, Adiós' },
        { id: 2, title: 'أدوات التعريف', duration: '25 دقيقة', type: 'فيديو', description: 'El, La, Los, Las' },
        { id: 3, title: 'الفعل Ser و Estar', duration: '30 دقيقة', type: 'فيديو', description: 'الفرق بينهما' },
        { id: 4, title: 'المضارع البسيط', duration: '30 دقيقة', type: 'فيديو', description: 'El presente de indicativo' },
        { id: 5, title: 'المحادثة اليومية', duration: '25 دقيقة', type: 'عملي', description: 'محادثات واقعية' }
      ]
    },
    {
      id: 'spa_1',
      title: 'الإسبانية الشاملة — Aprende Español',
      teacher: 'كارلوس مارتينيز',
      teacherTitle: 'معلم إسباني أصلي',
      duration: '10 ساعات',
      lessons: 20,
      level: 'مبتدئ',
      rating: 4.7,
      students: 200000,
      image: '🇪🇸',
      color: '#f59e0b',
      curriculum: [
        { id: 1, title: 'الحروف والنطق', duration: '20 دقيقة', type: 'فيديو', description: 'النظام الصوتي الإسباني' },
        { id: 2, title: 'التحيات', duration: '15 دقيقة', type: 'فيديو', description: 'Hola, Adiós, Buenos días' },
        { id: 3, title: 'أدوات التعريف', duration: '25 دقيقة', type: 'فيديو', description: 'El, La, Los, Las, Un, Una' },
        { id: 4, title: 'الفعل Ser و Estar', duration: '30 دقيقة', type: 'فيديو', description: 'الفرق بينهما' },
        { id: 5, title: 'المضارع البسيط', duration: '30 دقيقة', type: 'فيديو', description: 'El presente de indicativo' },
        { id: 6, title: 'الأرقام والوقت', duration: '20 دقيقة', type: 'فيديو', description: 'العد والوقت' },
        { id: 7, title: 'المفردات الأساسية', duration: '25 دقيقة', type: 'فيديو', description: '100 كلمة يومية' },
        { id: 8, title: 'اختبار منتصف الكورس', duration: '15 دقيقة', type: 'اختبار', description: 'اختبر نفسك' },
        { id: 9, title: 'في المطعم', duration: '20 دقيقة', type: 'عملي', description: 'طلب الطعام' },
        { id: 10, title: 'السفر والاتجاهات', duration: '25 دقيقة', type: 'عملي', description: 'السؤال عن الطريق' },
        { id: 11, title: 'الماضي — Pretérito', duration: '30 دقيقة', type: 'فيديو', description: 'الأفعال المنتظمة والشاذة' },
        { id: 12, title: 'المحادثة اليومية', duration: '25 دقيقة', type: 'عملي', description: 'يوميات حقيقية' },
        { id: 13, title: 'العائلة والأصدقاء', duration: '20 دقيقة', type: 'فيديو', description: 'الحديث عن الناس' },
        { id: 14, title: 'الهوايات والأنشطة', duration: '20 دقيقة', type: 'فيديو', description: 'ماذا تحب أن تفعل' },
        { id: 15, title: 'الطقس والفصول', duration: '15 دقيقة', type: 'فيديو', description: 'الحديث عن الطقس' },
        { id: 16, title: 'التسوق', duration: '20 دقيقة', type: 'عملي', description: 'في المتجر' },
        { id: 17, title: 'الكتابة', duration: '25 دقيقة', type: 'عملي', description: 'رسائل بسيطة' },
        { id: 18, title: 'الثقافة الإسبانية', duration: '20 دقيقة', type: 'فيديو', description: 'عادات وإسبانيا' },
        { id: 19, title: 'مراجعة شاملة', duration: '30 دقيقة', type: 'مراجعة', description: 'كل الدروس' },
        { id: 20, title: 'الاختبار النهائي', duration: '25 دقيقة', type: 'اختبار', description: 'الاختبار النهائي' }
      ]
    }
  ],
  german: [
    {
      id: 'ger_1',
      title: 'Deutsch lernen — الألمانية مع معلم أصلي',
      teacher: 'Deutsch lernen',
      teacherTitle: 'قناة ألمانية موثوقة',
      duration: '15+ ساعة',
      lessons: 25,
      level: 'مبتدئ',
      rating: 4.7,
      students: 400000,
      image: '🇩🇪',
      color: '#ef4444',
      youtube: 'https://www.youtube.com/@DeutschLernen',
      curriculum: [
        { id: 1, title: 'الحروف والنطق', duration: '20 دقيقة', type: 'فيديو', description: 'نظام النطق الألماني' },
        { id: 2, title: 'التحيات', duration: '15 دقيقة', type: 'فيديو', description: 'Hallo, Guten Tag, Tschüss' },
        { id: 3, title: 'أدوات التعريف', duration: '25 دقيقة', type: 'فيديو', description: 'Der, Die, Das' },
        { id: 4, title: 'الفعل sein و haben', duration: '25 دقيقة', type: 'فيديو', description: 'أهم فعلين' },
        { id: 5, title: 'المضارع البسيط', duration: '30 دقيقة', type: 'فيديو', description: 'Präsens' },
        { id: 6, title: 'المحادثة اليومية', duration: '25 دقيقة', type: 'عملي', description: 'محادثات واقعية' }
      ]
    },
    {
      id: 'ger_2',
      title: 'الألمانية للمبتدئين — Deutsch Lernen',
      teacher: 'هانس مولر',
      teacherTitle: 'معلم ألماني أصلي',
      duration: '10 ساعات',
      lessons: 18,
      level: 'مبتدئ',
      rating: 4.8,
      students: 150000,
      image: '🇩🇪',
      color: '#ef4444',
      curriculum: [
        { id: 1, title: 'الحروف والنطق', duration: '20 دقيقة', type: 'فيديو', description: 'نظام النطق الألماني' },
        { id: 2, title: 'التحيات', duration: '15 دقيقة', type: 'فيديو', description: 'Hallo, Guten Tag, Tschüss' },
        { id: 3, title: 'أدوات التعريف', duration: '25 دقيقة', type: 'فيديو', description: 'Der, Die, Das' },
        { id: 4, title: 'الفعلsein و haben', duration: '25 دقيقة', type: 'فيديو', description: 'أهم فعلين' },
        { id: 5, title: 'المضارع البسيط', duration: '30 دقيقة', type: 'فيديو', description: 'Präsens' },
        { id: 6, title: 'الأرقام والوقت', duration: '20 دقيقة', type: 'فيديو', description: 'الأرقام من 1-1000' },
        { id: 7, title: 'المفردات الأساسية', duration: '25 دقيقة', type: 'فيديو', description: '100 كلمة يومية' },
        { id: 8, title: 'اختبار منتصف', duration: '15 دقيقة', type: 'اختبار', description: 'اختبار' },
        { id: 9, title: 'في المطعم', duration: '20 دقيقة', type: 'عملي', description: 'طلب الطعام' },
        { id: 10, title: 'الماضي — Präteritum', duration: '30 دقيقة', type: 'فيديو', description: 'التعبير عن الماضي' },
        { id: 11, title: 'السفر', duration: '25 دقيقة', type: 'عملي', description: 'المطار والقطار' },
        { id: 12, title: 'المحادثة', duration: '25 دقيقة', type: 'عملي', description: 'محادثات يومية' },
        { id: 13, title: 'العمل', duration: '20 دقيقة', type: 'فيديو', description: 'في بيئة العمل' },
        { id: 14, title: 'الكتابة', duration: '25 دقيقة', type: 'عملي', description: 'رسائل وبريد' },
        { id: 15, title: 'الثقافة الألمانية', duration: '20 دقيقة', type: 'فيديو', description: 'عادات وتقاليد' },
        { id: 16, title: 'قواعد متقدمة', duration: '30 دقيقة', type: 'فيديو', description: 'الأدوات والبنية' },
        { id: 17, title: 'مراجعة', duration: '30 دقيقة', type: 'مراجعة', description: 'كل الدروس' },
        { id: 18, title: 'الاختبار النهائي', duration: '25 دقيقة', type: 'اختبار', description: 'اختبار شامل' }
      ]
    }
  ],
  japanese: [
    {
      id: 'jap_miku_1',
      title: 'Learn Japanese with Miku — اليابانية الحقيقية',
      teacher: 'Miku (Learn Japanese with Miku)',
      teacherTitle: 'معلمة يابانية أصلي — طريقة ممتعة',
      duration: '15+ ساعة',
      lessons: 30,
      level: 'مبتدئ',
      rating: 4.8,
      students: 300000,
      image: '🇯🇵',
      color: '#ec4899',
      youtube: 'https://www.youtube.com/@LearnJapanesewithMiku',
      curriculum: [
        { id: 1, title: 'هيراغانا كاملة', duration: '30 درس', type: 'فيديو', description: 'تعلم كل حروف الهيراغانا' },
        { id: 2, title: 'كاتاكانا كاملة', duration: '30 درس', type: 'فيديو', description: 'تعلم كل حروف الكاتاكانا' },
        { id: 3, title: 'التحيات الأساسية', duration: '20 دقيقة', type: 'فيديو', description: 'こんにちは وさようなら' },
        { id: 4, title: 'الأرقام والعد', duration: '20 دقيقة', type: 'فيديو', description: '一、二、三... والعد' },
        { id: 5, title: 'المحادثة اليومية', duration: '25 دقيقة', type: 'عملي', description: 'محادثات واقعية' }
      ]
    },
    {
      id: 'jap_1',
      title: 'اليابانية من الصفر — 日本語入門',
      teacher: 'يامادا تاناكا',
      teacherTitle: 'معلمة يابانية أصلية',
      duration: '12 ساعة',
      lessons: 22,
      level: 'مبتدئ',
      rating: 4.9,
      students: 180000,
      image: '🇯🇵',
      color: '#ec4899',
      curriculum: [
        { id: 1, title: 'هيراغانا — 第一', duration: '30 دقيقة', type: 'فيديو', description: 'أول 46 حرف هيراغانا' },
        { id: 2, title: 'هيراغانا — 第二', duration: '30 دقيقة', type: 'فيديو', description: 'بقية الهيراغانا' },
        { id: 3, title: 'كاتاكانا — 第一', duration: '30 دقيقة', type: 'فيديو', description: 'أول 46 حرف كاتاكانا' },
        { id: 4, title: 'التحيات', duration: '20 دقيقة', type: 'فيديو', description: 'こんにちは وさようなら' },
        { id: 5, title: 'الضمائر', duration: '25 دقيقة', type: 'فيديو', description: '私、あなた、彼、彼女' },
        { id: 6, title: 'العدد', duration: '20 دقيقة', type: 'فيديو', description: '一、二、三... والعد' },
        { id: 7, title: 'الفعل Desu', duration: '25 دقيقة', type: 'فيديو', description: 'الجملة الاسمية' },
        { id: 8, title: 'اختبار منتصف', duration: '15 دقيقة', type: 'اختبار', description: 'اختبار' },
        { id: 9, title: 'كانجي — 第一', duration: '30 دقيقة', type: 'فيديو', description: '50 كانجي أساسي' },
        { id: 10, title: 'في المطعم', duration: '25 دقيقة', type: 'عملي', description: 'طلب الطعام' },
        { id: 11, title: 'الأفعال — ます形', duration: '30 دقيقة', type: 'فيديو', description: 'تصريف الأفعال' },
        { id: 12, title: 'الماضي', duration: '25 دقيقة', type: 'فيديو', description: 'ました وませんでした' },
        { id: 13, title: 'السفر', duration: '25 دقيقة', type: 'عملي', description: 'في اليابان' },
        { id: 14, title: 'المحادثة اليومية', duration: '30 دقيقة', type: 'عملي', description: 'محادثات واقعية' },
        { id: 15, title: 'كانجي — 第二', duration: '30 دقيقة', type: 'فيديو', description: '50 كانجي إضافي' },
        { id: 16, title: 'الكتابة', duration: '25 دقيقة', type: 'عملي', description: 'رسائل بسيطة' },
        { id: 17, title: 'الثقافة اليابانية', duration: '20 دقيقة', type: 'فيديو', description: 'العادات والتقاليد' },
        { id: 18, title: 'قواعد متقدمة', duration: '30 دقيقة', type: 'فيديو', description: 'الشرط والصلة' },
        { id: 19, title: 'المشاهدة والأنمي', duration: '25 دقيقة', type: 'عملي', description: 'فهم الأنمي' },
        { id: 20, title: 'N5 Prep', duration: '30 دقيقة', type: 'فيديو', description: 'التحضير لاختبار N5' },
        { id: 21, title: 'مراجعة', duration: '30 دقيقة', type: 'مراجعة', description: 'كل الدروس' },
        { id: 22, title: 'الاختبار النهائي', duration: '25 دقيقة', type: 'اختبار', description: 'اختبار شامل' }
      ]
    }
  ],
  chinese: [
    {
      id: 'chn_yoyo_1',
      title: 'Learn Chinese with Yoyo — الصينية الحقيقية',
      teacher: 'Yoyo Chinese',
      teacherTitle: 'منصة صينية موثوقة — طريقة ممتعة',
      duration: '15+ ساعة',
      lessons: 30,
      level: 'مبتدئ',
      rating: 4.8,
      students: 500000,
      image: '🇨🇳',
      color: '#f59e0b',
      youtube: 'https://www.youtube.com/@YoyoChinese',
      curriculum: [
        { id: 1, title: 'بينيين — نظام النطق', duration: '25 دقيقة', type: 'فيديو', description: 'تعلم النطق الصيني الصحيح' },
        { id: 2, title: 'الأصوات الأربعة', duration: '30 دقيقة', type: 'فيديو', description: 'المستويات الصوتية الأربعة' },
        { id: 3, title: 'التحيات الأساسية', duration: '20 دقيقة', type: 'فيديو', description: '你好،谢谢，再见' },
        { id: 4, title: 'الأرقام والعد', duration: '20 دقيقة', type: 'فيديو', description: '一、二、三... والعد' },
        { id: 5, title: 'المحادثة اليومية', duration: '25 دقيقة', type: 'عملي', description: 'محادثات واقعية' }
      ]
    },
    {
      id: 'chn_1',
      title: 'الصينية المبسطة — 汉语入门',
      teacher: 'لي شياو مينغ',
      teacherTitle: 'معلم صيني أصلي',
      duration: '10 ساعات',
      lessons: 20,
      level: 'مبتدئ',
      rating: 4.7,
      students: 120000,
      image: '🇨🇳',
      color: '#f59e0b',
      curriculum: [
        { id: 1, title: 'بينيين — النطق', duration: '25 دقيقة', type: 'فيديو', description: 'نظام النطق الصيني' },
        { id: 2, title: 'الأصوات الأربعة', duration: '30 دقيقة', type: 'فيديو', description: 'المستويات الصوتية الأربعة' },
        { id: 3, title: 'التحيات', duration: '20 دقيقة', type: 'فيديو', description: '你好،谢谢،再见' },
        { id: 4, title: 'الضمائر', duration: '25 دقيقة', type: 'فيديو', description: '我、你、他、她' },
        { id: 5, title: 'العدد', duration: '20 دقيقة', type: 'فيديو', description: '一、二、三... والعد' },
        { id: 6, title: 'الجملة الاسمية', duration: '25 دقيقة', type: 'فيديو', description: '是 (shì)' },
        { id: 7, title: 'المفردات الأساسية', duration: '25 دقيقة', type: 'فيديو', description: '100 كلمة يومية' },
        { id: 8, title: 'اختبار منتصف', duration: '15 دقيقة', type: 'اختبار', description: 'اختبار' },
        { id: 9, title: 'الأفعال الأساسية', duration: '30 دقيقة', type: 'فيديو', description: '喜欢、想、要' },
        { id: 10, title: 'في المطعم', duration: '25 دقيقة', type: 'عملي', description: 'طلب الطعام' },
        { id: 11, title: 'الماضي — 了', duration: '30 دقيقة', type: 'فيديو', description: 'التعبير عن الماضي' },
        { id: 12, title: 'السفر', duration: '25 دقيقة', type: 'عملي', description: 'في الصين' },
        { id: 13, title: 'المحادثة اليومية', duration: '30 دقيقة', type: 'عملي', description: 'محادثات واقعية' },
        { id: 14, title: 'الكتابة — 50 حرف', duration: '30 دقيقة', type: 'فيديو', description: 'الخط الصيني' },
        { id: 15, title: 'العائلة والأصدقاء', duration: '20 دقيقة', type: 'فيديو', description: 'الحديث عن الناس' },
        { id: 16, title: 'الهوايات', duration: '20 دقيقة', type: 'فيديو', description: 'ماذا تحب أن تفعل' },
        { id: 17, title: 'الثقافة الصينية', duration: '20 دقيقة', type: 'فيديو', description: 'العادات والتقاليد' },
        { id: 18, title: 'قواعد متقدمة', duration: '30 دقيقة', type: 'فيديو', description: 'الشرط والصلة' },
        { id: 19, title: 'مراجعة', duration: '30 دقيقة', type: 'مراجعة', description: 'كل الدروس' },
        { id: 20, title: 'الاختبار النهائي', duration: '25 دقيقة', type: 'اختبار', description: 'اختبار شامل' }
      ]
    }
  ]
};

// عرض الكورسات
function renderCourses(lang) {
  const langKey = lang || selectedLanguage;
  const courses = COURSES[langKey] || [];
  const container = document.getElementById('coursesGrid');
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = '<p class="activity-empty">لا توجد كورسات لهذه اللغة بعد</p>';
    return;
  }

  container.innerHTML = courses.map(course => {
    const progress = getCourseProgress(course.id);
    return `
    <div class="course-card" onclick="openCourse('${course.id}')">
      <div class="course-header" style="background: linear-gradient(135deg, ${course.color}22, ${course.color}08);">
        <div class="course-image" style="color: ${course.color};">${course.image}</div>
        <div class="course-badge">${course.level}</div>
      </div>
      <div class="course-body">
        <h3>${course.title}</h3>
        <p class="course-teacher">${course.teacher} — ${course.teacherTitle}</p>
        <div class="course-meta">
          <span>★ ${course.rating}</span>
          <span>${(course.students / 1000000).toFixed(1)}م طالب</span>
          <span>${course.duration}</span>
        </div>
        <div class="course-progress-bar">
          <div class="course-progress-fill" style="width: ${progress}%"></div>
        </div>
        <span class="course-progress-text">${progress}% مكتمل</span>
      </div>
    </div>
  `;
  }).join('');
}

function getCourseProgress(courseId) {
  const progress = JSON.parse(localStorage.getItem('course_progress') || '{}');
  return progress[courseId] || 0;
}

function openCourse(courseId) {
  let course = null;
  for (const lang in COURSES) {
    course = COURSES[lang].find(c => c.id === courseId);
    if (course) break;
  }
  if (!course) return;

  const progress = getCourseProgress(courseId);
  const completedLessons = JSON.parse(localStorage.getItem('completed_course_lessons') || '{}');
  const doneLessons = completedLessons[courseId] || [];

  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'courseModal';
  modal.innerHTML = `
    <div class="course-container">
      <div class="course-modal-header" style="background: linear-gradient(135deg, ${course.color}33, ${course.color}11);">
        <button class="close-btn" onclick="document.getElementById('courseModal').remove()">✕</button>
        <div class="course-modal-image" style="color: ${course.color};">${course.image}</div>
        <h2>${course.title}</h2>
        <p class="course-teacher">${course.teacher} — ${course.teacherTitle}</p>
        <div class="course-modal-meta">
          <span>★ ${course.rating}</span>
          <span>${course.duration}</span>
          <span>${course.lessons} درس</span>
          <span>${progress}% مكتمل</span>
        </div>
      </div>
      <div class="course-curriculum">
        <h3>محتوى الكورس</h3>
        ${course.curriculum.map((lesson, idx) => {
          const isDone = doneLessons.includes(lesson.id);
          return `
          <div class="curriculum-item ${isDone ? 'completed' : ''}" onclick="startCourseLesson('${courseId}', ${lesson.id})">
            <div class="curriculum-index">${isDone ? '✓' : idx + 1}</div>
            <div class="curriculum-info">
              <h4>${lesson.title}</h4>
              <p>${lesson.description}</p>
            </div>
            <div class="curriculum-meta">
              <span class="curriculum-type type-${lesson.type}">${lesson.type}</span>
              <span>${lesson.duration}</span>
            </div>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function startCourseLesson(courseId, lessonId) {
  let course = null;
  for (const lang in COURSES) {
    course = COURSES[lang].find(c => c.id === courseId);
    if (course) break;
  }
  if (!course) return;

  const lesson = course.curriculum.find(l => l.id === lessonId);
  if (!lesson) return;

  // تسجيل الدرس كمكتمل
  const completed = JSON.parse(localStorage.getItem('completed_course_lessons') || '{}');
  if (!completed[courseId]) completed[courseId] = [];
  if (!completed[courseId].includes(lessonId)) {
    completed[courseId].push(lessonId);
    localStorage.setItem('completed_course_lessons', JSON.stringify(completed));

    // حساب النسبة
    const percent = Math.round((completed[courseId].length / course.curriculum.length) * 100);
    const progress = JSON.parse(localStorage.getItem('course_progress') || '{}');
    progress[courseId] = percent;
    localStorage.setItem('course_progress', JSON.stringify(progress));

    addActivity(`أنهيت درساً في كورس ${course.title}`);
    checkAchievements();
  }

  // إغلاق نافذة الكورس وإظهار الدرس
  const courseModal = document.getElementById('courseModal');
  if (courseModal) courseModal.remove();

  // عرض محتوى الدرس
  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'lessonViewer';
  modal.innerHTML = `
    <div class="lesson-content">
      <button class="close-btn" onclick="document.getElementById('lessonViewer').remove()">✕</button>
      <div class="lesson-viewer-header">
        <span class="curriculum-type type-${lesson.type}">${lesson.type}</span>
        <span>${lesson.duration}</span>
      </div>
      <h2>${lesson.title}</h2>
      <p>${lesson.description}</p>
      <div class="lesson-viewer-body">
        ${generateLessonContent(lesson, course)}
      </div>
      <div class="lesson-actions">
        <button class="btn btn-primary" onclick="document.getElementById('lessonViewer').remove(); openCourse('${courseId}');">
          العودة للكورس
        </button>
        <button class="btn btn-outline" onclick="speak('${generateSpeechContent(lesson)}', '${selectedLanguage}')">
          استمع للمحتوى
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function generateLessonContent(lesson, course) {
  const lang = selectedLanguage;
  const langData = VOCABULARY[lang] || VOCABULARY.english;

  return `
    <div class="lesson-content-block">
      <h4>📌 النقاط الرئيسية</h4>
      <ul>
        <li>${lesson.description}</li>
        <li>المدة: ${lesson.duration}</li>
        <li>النوع: ${lesson.type}</li>
        <li>المعلم: ${course.teacher}</li>
      </ul>
    </div>
    <div class="lesson-content-block">
      <h4>📝 كلمات الدرس</h4>
      <div class="lesson-vocab">
        ${langData.slice(0, 6).map(v => `
          <div class="vocab-item">
            <span class="vocab-ar">${v.ar}</span>
            <span class="vocab-en">${v.en}</span>
            <button class="btn btn-sm" onclick="speak('${v.en}', '${lang}')">♪</button>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="lesson-content-block">
      <h4>✅ تحقق من فهمك</h4>
      <p>بعد مشاهدة الدرس، حاول:</p>
      <ol>
        <li>شرح ما تعلمته بكلماتك</li>
        <li>استخدام كلمات جديدة في جمل</li>
        <li>تكرار النقاط الرئيسية</li>
      </ol>
    </div>
  `;
}

function generateSpeechContent(lesson) {
  return `${lesson.title}. ${lesson.description}. This lesson is ${lesson.duration} long and is of type ${lesson.type}.`;
}
