// دروس إضافية للكورسات — تُحمّل بعد data/course-content.js
// ملاحظة: لا نُعرّف COURSE_CONTENT هنا لأنه معرّف بـ const في الملف السابق
(function () {
  var C = COURSE_CONTENT;
  C.eng_1 = C.eng_1 || {};

  C.eng_1["3"] = {
    "objective": "في نهاية هذا الدرس ستتعلم الفرق بين المضارع البسيط والمضارع المستمر واستخداماته.",
    "level": "A1",
    "rules": [
      {
        "title": "المضارع المستمر (Present Continuous)",
        "body": "نستخدم المضارع المستمر للأفعال التي تحدث الآن أو في هذه الفترة. التركيب: am/is/are + الفعل بصيغة ing.",
        "examples": [
          "I am studying English right now. — أدرس الإنجليزية الآن.",
          "She is not working today. — هي لا تعمل اليوم.",
          "They are watching a movie. — هم يشاهدون فيلماً."
        ]
      },
      {
        "title": "متى تستخدم البسيط ومتى المستمر؟",
        "body": "البسيط للعادات والحقائق المستمرة. المستمر للوضع الحالي المؤقت. بعض الأفعال مثل know و like لا تعمل مع المستمر.",
        "examples": [
          "I live in Cairo. (عادة) — I am living in Cairo. (مؤقت)",
          "She knows the answer. — خطأ: She is knowing the answer."
        ]
      }
    ],
    "vocab": [
      { "en": "study", "ar": "يدرس", "ipa": "/ˈstʌdi/", "ex": "I study every evening." },
      { "en": "work", "ar": "يعمل", "ipa": "/wɜːrk/", "ex": "He works at a hospital." },
      { "en": "read", "ar": "يقرأ", "ipa": "/riːd/", "ex": "She reads a book now." },
      { "en": "write", "ar": "يكتب", "ipa": "/raɪt/", "ex": "I am writing an email." },
      { "en": "listen", "ar": "يستمع", "ipa": "/ˈlɪsən/", "ex": "They are listening to music." },
      { "en": "watch", "ar": "يشاهد", "ipa": "/wɒtʃ/", "ex": "We watch TV at night." },
      { "en": "play", "ar": "يلعب", "ipa": "/pleɪ/", "ex": "The kids are playing outside." },
      { "en": "cook", "ar": "يطبخ", "ipa": "/kʊk/", "ex": "My mother is cooking lunch." },
      { "en": "sleep", "ar": "ينام", "ipa": "/sliːp/", "ex": "The baby is sleeping." },
      { "en": "walk", "ar": "يمشي", "ipa": "/wɔːk/", "ex": "I walk to school daily." }
    ],
    "dialogue": [
      { "who": "A", "en": "What are you doing right now?", "ar": "ماذا تفعل الآن؟" },
      { "who": "B", "en": "I am studying for my exam.", "ar": "أدرس لاختباري." },
      { "who": "A", "en": "That's great! Do you study every evening?", "ar": "رائع! هل تدرس كل مساء؟" },
      { "who": "B", "en": "Yes, I usually study from six to nine.", "ar": "نعم، عادة أدرس من السادسة حتى التاسعة." },
      { "who": "A", "en": "Is your brother studying too?", "ar": "هل أخوك يدرس أيضاً؟" },
      { "who": "B", "en": "No, he is watching TV in the living room.", "ar": "لا، هو يشاهد التلفاز في غرفة المعيشة." }
    ],
    "listening": {
      "script": "It's seven o'clock in the evening. Sara is at home. She is not studying tonight because she has an exam tomorrow. Instead, she is relaxing. She is listening to music and drinking tea. Her brother is doing his homework at the desk. Her mother is cooking dinner in the kitchen.",
      "q": "ماذا تفعل سارة الليلة؟",
      "opts": ["تدرس لاختبار", "تستمع للموسيقى", "تكتب واجباً"],
      "a": 1
    },
    "reading": {
      "title": "A Busy Saturday",
      "text": "Saturday is a busy day for the Ahmed family. In the morning, the mother is preparing breakfast while the father is reading the newspaper. The children are doing their homework at the table. In the afternoon, the older son is playing football in the park with his friends, and the younger daughter is painting a picture. In the evening, the family is eating dinner together.",
      "glossary": [
        { "w": "preparing", "ar": "يحضر" },
        { "w": "newspaper", "ar": "جريدة" },
        { "w": "painting", "ar": "يرسم" }
      ],
      "q": {
        "q": "ماذا يفعل الأب صباح السبت؟",
        "opts": ["يلعب كرة القدم", "يقرأ الجريدة", "يعد الفطور"],
        "a": 1
      }
    },
    "writing": {
      "prompt": "اكتب 4-5 جمل تصف ما تفعله الآن بأسلوب المضارع المستمر.",
      "model": "Right now I am sitting in a coffee shop. I am drinking a cup of tea and reading a book. My friend is sitting across from me. We are talking about our weekend plans.",
      "tips": [
        "ابدأ بفعل continuous: am أو is أو are متبوعاً بـ ing",
        "تأكد من حفظ الفعل مع ing مثل study تصبح studying",
        "استخدم now أو at the moment لتوضيح الزمن"
      ]
    },
    "quiz": [
      { "q": "ما هو الشكل الصحيح للجملة: Look! The children ___ football", "opts": ["play", "are playing", "plays", "is playing"], "a": 1, "why": "children جمع plurال نستخدم are مع playing" },
      { "q": "أي جملة صحيحة؟", "opts": ["She is knowing the answer", "She knows the answer", "She is know the answer", "She know the answer"], "a": 1, "why": "أفعال الحالة مثل know لا تعمل مع المضارع المستمر" },
      { "q": "ما هو المصدر الصحيح للفعل read في المستمر؟", "opts": ["I am read a book", "I am reading a book", "I am reads a book", "I reading a book"], "a": 1, "why": "نضيف ing إلى الفعل read فيصبح reading" },
      { "q": "متى نستخدم المضارع المستمر؟", "opts": ["للعادات اليومية", "للماضي", "للوضع الحالي المؤقت", "للأوامر"], "a": 2, "why": "المضارع المستمر يصف وضعاً مؤقتاً في الوقت الحالي" },
      { "q": "اختر الجملة الصحيحة", "opts": ["He is work now", "He working now", "He is working now", "He works now"], "a": 2, "why": "الصيغة الصحيحة هي is مع working" }
    ]
  };

  C.eng_1["4"] = {
    "objective": "في نهاية هذا الدرس ستتعلم التحدث عن الوقت والأرقام في الإنجليزية بثقة.",
    "level": "A1",
    "rules": [
      {
        "title": "التعبير عن الساعة",
        "body": "نستخدم at مع الوقت. الساعة نصف الساعة past، وquarter to تعني ربعاً قبل الساعة.",
        "examples": [
          "The class starts at nine o'clock. — تبدأ الحصة الساعة التاسعة.",
          "It's half past seven. — الساعة نصف وسبعة.",
          "It's a quarter to eight. — الساعة ربعاً قبل الثامنة."
        ]
      },
      {
        "title": "الأعداد الأساسية",
        "body": "الأعداد من 13 إلى 19 تنتهي بـ teen، والأعداد العشرات تنتهي بـ ty مع تبديل حرف.",
        "examples": [
          "thirteen - thirty",
          "fifteen - fifty",
          "eighteen - eighty"
        ]
      }
    ],
    "vocab": [
      { "en": "hour", "ar": "ساعة", "ipa": "/ˈaʊər/", "ex": "The lesson lasts one hour." },
      { "en": "minute", "ar": "دقيقة", "ipa": "/ˈmɪnɪt/", "ex": "Wait a minute please." },
      { "en": "clock", "ar": "ساعة حائط", "ipa": "/klɒk/", "ex": "Look at the clock on the wall." },
      { "en": "watch", "ar": "ساعة يد", "ipa": "/wɒtʃ/", "ex": "My watch is two minutes slow." },
      { "en": "morning", "ar": "صباح", "ipa": "/ˈmɔːrnɪŋ/", "ex": "Good morning and welcome." },
      { "en": "afternoon", "ar": "ظهرا", "ipa": "/ˌæftərˈnuːn/", "ex": "See you in the afternoon." },
      { "en": "evening", "ar": "مساء", "ipa": "/ˈiːvnɪŋ/", "ex": "We meet in the evening." },
      { "en": "tonight", "ar": "الليلة", "ipa": "/təˈnaɪt/", "ex": "What time is dinner tonight?" },
      { "en": "quarter", "ar": "ربع", "ipa": "/ˈkwɔːrtər/", "ex": "It's a quarter past ten." },
      { "en": "midnight", "ar": "منتصف الليل", "ipa": "/ˈmɪdnaɪt/", "ex": "The train leaves at midnight." }
    ],
    "dialogue": [
      { "who": "A", "en": "Excuse me, what time does the library close?", "ar": "عفواً، متى تغلق المكتبة؟" },
      { "who": "B", "en": "It closes at six o'clock on weekdays.", "ar": "تغلق في السادسة مساء أيام الأسبوع." },
      { "who": "A", "en": "And on Saturdays?", "ar": "وفي أيام السبت؟" },
      { "who": "B", "en": "On Saturdays we close at two, but on Sundays we are open all day.", "ar": "في السبت نغلق في الثانية، لكن الأحد مفتوح طوال اليوم." },
      { "who": "A", "en": "Perfect. What time should I come to return the book?", "ar": "ممتاز. متى يجب أن آتي لإرجاع الكتاب؟" },
      { "who": "B", "en": "Before six, please. See you tomorrow!", "ar": "قبل السادسة من فضلك. أراك غداً!" }
    ],
    "listening": {
      "script": "The train leaves at seven forty-five in the morning. The meeting starts at nine o'clock and ends at a quarter to eleven. Lunch is served at half past twelve. In the afternoon, the second session begins at two o'clock. Please arrive fifteen minutes early for each session. The last session finishes at five thirty in the evening.",
      "q": "متى يبدأ الاجتماع؟",
      "opts": ["في الثامنة", "في التاسعة", "في العاشرة"],
      "a": 1
    },
    "reading": {
      "title": "My School Timetable",
      "text": "My school day starts at eight o'clock. I have six classes every day. The first two classes are Mathematics and English. After a short break, I have Science and Arabic. At one o'clock, I have my lunch break which lasts half an hour. In the afternoon, I have History and Computer Science. School finishes at three thirty. After school, I usually go to the gym for an hour, then I go home.",
      "glossary": [
        { "w": "timetable", "ar": "جدول" },
        { "w": "break", "ar": "استراحة" },
        { "w": "gym", "ar": "نادي رياضي" }
      ],
      "q": {
        "q": "كم ساعة между بداية اليوم الدراسي ونهايته؟",
        "opts": ["خمس ساعات", "ست ساعات", "سبع ساعات ونصف"],
        "a": 2
      }
    },
    "writing": {
      "prompt": "اكتب عن جدولك اليومي: متى تبدأ مدرستك أو عملك، ماذا تفعل في كل وقت، ومتى تنتهي.",
      "model": "My day starts at seven. I get up and have breakfast until half past seven. I leave home at eight and reach school at a quarter to nine. Classes start at nine and end at three thirty. After school, I go to the club for two hours. I arrive home at six and have dinner with my family.",
      "tips": [
        "استخدم at مع الأوقات مثل at eight و at half past six",
        "استخدم until و from للتعبير عن المدة",
        "رتّب وقتك ترتيباً منطقياً"
      ]
    },
    "quiz": [
      { "q": "كيف تقول الساعة 7:30؟", "opts": ["Half past seven", "Half to seven", "Seven half", "Thirty past seven"], "a": 0, "why": "الساعة 7:30 تعني نصفا بعد السابعة أي half past seven" },
      { "q": "ما هو حرف الجر الصحيح مع الوقت؟", "opts": ["in", "at", "on", "for"], "a": 1, "why": "نستخدم always at مع الأوقات المحددة" },
      { "q": "كيف تنطق العدد 15؟", "opts": ["Fiveteen", "Fifteen", "Fivty", "Fiveten"], "a": 1, "why": "العدد 15 ينطق fifteen بنطق teen" },
      { "q": "ماذا يعني التعبير quarter to eight؟", "opts": ["الثامنة وخمس عشرة دقيقة", "السابعة وخمس وأربعون دقيقة", "الثامنة وخمس وأربعون دقيقة", "السابعة وخمس عشرة دقيقة"], "a": 1, "why": "quarter to تعني ربع ساعة قبل الساعة أي السابعة وخمس وأربعون" },
      { "q": "أكمل الجملة: The shop opens ___ 9 AM", "opts": ["in", "on", "at", "for"], "a": 2, "why": "نستخدم at مع وقت محدد" }
    ]
  };

  C.eng_1["5"] = {
    "objective": "في نهاية هذا الدرس ستتعلم تقديم نفسك والتحدث عن معلوماتك الشخصية بأسلوب متدفق.",
    "level": "A1",
    "rules": [
      {
        "title": "التحيات حسب الوقت",
        "body": "نختار التحية حسب الوقت: morning حتى الظهر، afternoon حتى المغرب، evening بعد المغرب. وبعد التحية نسأل عن يوم الشخص.",
        "examples": [
          "Good morning! How are you today? — صباح الخير! كيف حالك اليوم؟",
          "Good afternoon! How is it going? — بعد الظهر! كيف تسير الأمور؟",
          "Good evening! How was your day? — مساء الخير! كيف كان يومك؟"
        ]
      },
      {
        "title": "تقديم المعلومات الشخصية",
        "body": "نستخدم I'm مع الصفة أو الاسم. للمهنة نستخدم I am a مع اسم المهنة. للبلد نستخدم I am from للبلد الأصلية.",
        "examples": [
          "I'm Ahmed. I'm a teacher. I'm from Egypt.",
          "She's a nurse at Al-Hussein Hospital.",
          "We're from Morocco, but we live in Dubai."
        ]
      }
    ],
    "vocab": [
      { "en": "name", "ar": "اسم", "ipa": "/neɪm/", "ex": "My name is Sara." },
      { "en": "age", "ar": "عمر", "ipa": "/eɪdʒ/", "ex": "What is your age?" },
      { "en": "job", "ar": "وظيفة", "ipa": "/dʒɒb/", "ex": "What is your job?" },
      { "en": "engineer", "ar": "مهندس", "ipa": "/ˌendʒɪˈnɪr/", "ex": "He works as an engineer." },
      { "en": "doctor", "ar": "طبيب", "ipa": "/ˈdɒktər/", "ex": "She is a doctor." },
      { "en": "nurse", "ar": "ممرض", "ipa": "/nɜːrs/", "ex": "The nurse helped the patient." },
      { "en": "company", "ar": "شركة", "ipa": "/ˈkʌmpəni/", "ex": "She works for a big company." },
      { "en": "country", "ar": "بلد", "ipa": "/ˈkʌntri/", "ex": "Which country are you from?" },
      { "en": "hobby", "ar": "هواية", "ipa": "/ˈhɒbi/", "ex": "My hobby is photography." },
      { "en": "married", "ar": "متزوج", "ipa": "/ˈmærid/", "ex": "They are married with two children." }
    ],
    "dialogue": [
      { "who": "A", "en": "Hi, I don't think we have met. I'm Karim.", "ar": "أهلا، لا أعتقد التقينا. أنا كريم." },
      { "who": "B", "en": "Hi Karim, I'm Nur. Nice to meet you!", "ar": "أهلا كريم، أنا نور. سعيد بلقائك!" },
      { "who": "A", "en": "Nice to meet you too. So, what do you do?", "ar": "سعدت بلقائك أيضا. فما عملك؟" },
      { "who": "B", "en": "I'm a graphic designer. And you?", "ar": "أنا مصمم جرافيك. وأنت؟" },
      { "who": "A", "en": "I'm a civil engineer at a construction company.", "ar": "أنا مهندس مدني في شركة بناء." },
      { "who": "B", "en": "Nice! Where are you from originally?", "ar": "رائع! من أين أنت أصلا؟" }
    ],
    "listening": {
      "script": "Hello, everyone. Let me introduce myself. My name is Michael. I'm twenty-five years old. I'm from Canada, but I live in Egypt now. I'm a software engineer at a technology company. I have one sister. In my free time, I like playing football and cooking. I also study Arabic because I want to communicate with my colleagues better.",
      "q": "من أين مايكيل في الأصل؟",
      "opts": ["مصر", "كندا", "أمريكا"],
      "a": 1
    },
    "reading": {
      "title": "Meet Our New Colleague",
      "text": "Our team has a new member. Her name is Yara and she joined us last Monday. Yara is a marketing specialist with three years of experience. She graduated from Cairo University with a degree in advertising. She is originally from Alexandria, but she moved to Cairo two years ago for work. Yara is married and has a two-year-old daughter. In her free time, she enjoys reading and taking photos of old buildings.",
      "glossary": [
        { "w": "specialist", "ar": "أخصائي" },
        { "w": "degree", "ar": "شهادة" },
        { "w": "advertising", "ar": "إعلانات" }
      ],
      "q": {
        "q": "كم سنة خبرة لدى يارا؟",
        "opts": ["سنتان", "ثلاث سنوات", "أربع سنوات"],
        "a": 1
      }
    },
    "writing": {
      "prompt": "اكتب من 6 إلى 7 جمل تقدم فيها نفسك: اسمك، عمرك، بلدك، عملك أو دراستك، مدينتك، وهوايتك.",
      "model": "Hello, my name is Sara. I'm twenty-two years old. I'm originally from Luxor, but I currently live in Cairo. I'm a third-year student of medicine at Cairo University. In my free time, I enjoy reading novels and taking photos. I'm also learning English, which is very important for my future career.",
      "tips": [
        "ابدأ بعبارة I'm ثم انتقل بين as للدراسة و from للبلد",
        "استخدم I'm originally from للبلد الأصلية و I live in للمكان الحالي",
        "اختم الجملة بهواية أو هدف"
      ]
    },
    "quiz": [
      { "q": "كيف تقول جملة تعني أنا طالب طب؟", "opts": ["I am medical student", "I am a medical student", "I am the medical student", "I am studying medical student"], "a": 1, "why": "نحتاج أداة التعريف a قبل medical لأنها تبدأ بحرف علة" },
      { "q": "ما هو الفعل المناسب في الجملة: I ___ from Egypt", "opts": ["is", "am", "are", "be"], "a": 1, "why": "مع الضمير I نستخدم am" },
      { "q": "أكمل العبارة: Nice ___ meet you", "opts": ["too", "to", "for", "with"], "a": 1, "why": "العبارة الصحيحة هي nice to meet you" },
      { "q": "ما الفرق بين I am from Egypt و I am in Egypt؟", "opts": ["لا يوجد فرق", "from للبلد الأصلية و in لمكان التواجد الحالي", "from للحاضر و in للماضي", "in هي الأدق دائما"], "a": 1, "why": "from تعبر عن الأصل أو الجنسية و in عن الموقع الحالي" },
      { "q": "كيف تسأل عن اسم الشخص؟", "opts": ["What you name?", "What's your name?", "How your name?", "Who your name?"], "a": 1, "why": "الاختصار الصحيح هو What's your name" }
    ]
  };
})();
