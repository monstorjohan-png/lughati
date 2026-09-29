const COURSE_CONTENT = {
  "eng_1": {
    "1": {
      "objective": "في نهاية هذا الدرس ستكون قادراً على استخدام الفعل 'to be' في الصيغة البسيطة الحالية وتقديم نفسك بشكل أساسي.",
      "level": "A1",
      "rules": [
        {
          "title": "الفعل 'to be' في المضارع البسيط",
          "body": "يُستخدم الفعل 'to be' (am/is/are) لوصف الحالة أو الهوية أو الموقع. يتغير according to الفاعل: I am, you/we/they are, he/she/it is.",
          "examples": [
            "I am a student. — أنا طالب.",
            "She is my sister. — إنها أختي.",
            "They are from Egypt. — هم من مصر."
          ]
        },
        {
          "title": "الجملة الاسمية البسيطة",
          "body": "لتكوين جملة إيجابية مع 'to be': الفاعل + am/is/are + الصفة/الاسم. للنفي: تضيف 'not' بعد الفعل. للسؤال: تبديل أماكن الفاعل والفعل.",
          "examples": [
            "I am happy. — أنا سعيد.",
            "I am not tired. — أنا ليس متعباً.",
            "Are you ready? — هل أنت مستعد؟"
          ]
        }
      ],
      "vocab": [
        { "en": "student", "ar": "طالب/طالبة", "ipa": "/ˈstjuːdənt/", "ex": "I am a university student." },
        { "en": "teacher", "ar": "معلم/معلمة", "ipa": "/ˈtiːtʃər/", "ex": "Our teacher is very kind." },
        { "en": "school", "ar": "مدرسة", "ipa": "/ˈskuːl/", "ex": "Children go to school at 8 AM." },
        { "en": "family", "ar": "عائلة", "ipa": "/ˈfæməli/", "ex": "My family lives in Cairo." },
        { "en": "friend", "ar": "صديق", "ipa": "/frend/", "ex": "She is my best friend." },
        { "en": "house", "ar": "منزل", "ipa": "/haʊs/", "ex": "They bought a new house." },
        { "en": "water", "ar": "ماء", "ipa": "/ˈwɔːtər/", "ex": "Please drink some water." },
        { "en": "food", "ar": "طعام", "ipa": "/fuːd/", "ex": "This food is delicious." }
      ],
      "dialogue": [
        { "who": "A", "en": "Hello! What's your name?", "ar": "مرحباً! ما اسمك؟" },
        { "who": "B", "en": "My name is Ahmed. What's yours?", "ar": "اسمي أحمد. وما اسمك؟" },
        { "who": "A", "en": "I'm Layla. Nice to meet you!", "ar": "أنا ليلى. delighted to meet you!" },
        { "who": "B", "en": "Likewise! Where are you from?", "ar": "كذلك! من أين أنت؟" },
        { "who": "A", "en": "I'm from Alexandria. How about you?", "ar": "أنا من الإسكندرية. وأنت؟" },
        { "who": "B", "en": "I'm from Giza. We're both Egyptian!", "ar": "أنا من الجيزة. نحن مصريان إذاً!" }
      ],
      "listening": {
        "script": "Hello! My name is Sarah. I am twenty years old. I am a student at Cairo University. I study English literature. I live with my family in Giza. My father is a teacher and my mother is a doctor. I have two brothers and one sister. We speak Arabic at home but practice English every day.",
        "q": "كم عمر سارة وفقاً للمحادثة؟",
        "opts": ["عشرون سنة", "واحد وعشرون سنة", "اثنان وعشرون سنة"],
        "a": 0
      },
      "reading": {
        "title": "A Day in the Life of a University Student",
        "text": "My name is David. I am twenty-two years old. I study engineering at Alexandria University. Every morning I wake up at seven o'clock. I take a shower and have breakfast with my family. Then I go to university by bus. My classes start at nine and finish at three in the afternoon. After university I usually study in the library for two hours. In the evening I play football with my friends or watch movies. I go to bed at eleven o'clock.",
        "glossary": [
          { "w": "engineering", "ar": "هندسة" },
          { "w": "library", "ar": "مكتبة" },
          { "w": "football", "ar": "كرة قدم" }
        ],
        "q": {
          "q": "كم ساعة يدرس ديفيد في المكتبة بعد الجامعة عادة؟",
          "opts": ["ساعة واحدة", "ساعتين", "ثلاث ساعات"],
          "a": 1
        }
      },
      "writing": {
        "prompt": "اكتب فقرة بسيطة مكونة من 3-4 جمل تقدم فيها نفسك باللغة الإنجليزية. اذكر اسمك، عمرك، ما تدرسه أو عملك، ومكان سكنك.",
        "model": "My name is Mohamed. I am twenty years old. I study computer science at Mansoura University. I live with my parents in Zagazig.",
        "tips": [
          "استخدم فعل 'to be' الصحيح (am/is/are) حسب الفاعل",
          "ابدأ الجملة بحرف كبير وانتهي بنقطة",
          "استخدم فاصلة لفصل الأفكار في الجملة الطويلة"
        ]
      },
      "quiz": [
        { "q": "ما هو الشكل الصحيح للجملة: 'She ___ from London'?", "opts": ["is", "are", "am", "be"], "a": 0, "why": "مع الضمير الثالث المفرد (she) نستخدم 'is'" },
        { "q": "ما هو النفي الصحيح للجملة: 'They are teachers'?", "opts": ["They are not teachers", "They not are teachers", "They are teachers not", "Not they are teachers"], "a": 0, "why": "يأتي 'not' مباشرة بعد فعل 'to be'" },
        { "q": "كيف تسأل عن عمر شخص ما باللغة الإنجليزية؟", "opts": ["How old are you?", "How age are you?", "What old are you?", "How years are you?"], "a": 0, "why": "السؤال عن العمر يستخدم 'How old'" },
        { "q": "اختر الترجمة الصحيحة لـ 'أنا طالب في الجامعة'", "opts": ["I am a student in the university", "I am student at university", "I am a university student", "I am the student of university"], "a": 2, "why": "التعبير الطبيعي هو 'I am a university student'" },
        { "q": "ما هو فعل 'to be' الصحيح للفاعل 'we'?", "opts": ["am", "is", "are", "be"], "a": 2, "why": "مع الفاعل الجمعي الأول (we) نستخدم 'are'" }
      ]
    },
    "2": {
      "objective": "في نهاية هذا الدرس ستكون قادراً على استخدام الضمائر الشخصيةSubjective وObjective والتعبير عن الملكية باستخدام الضمائر والامتلاك.",
      "level": "A1",
      "rules": [
        {
          "title": "الضمائر الشخصية (المفعول به)",
          "body": "الضمائر في صيغة المفعول به تستقبل الفعل: me, you, him, her, it, us, them. تأتي بعد الفعل أو الحرف الجر.",
          "examples": [
            "I see her every day. — أراها كل يوم.",
            "He gave them a gift. — أعطاهم هدية.",
            "The teacher praised us. — المعلم مدحنا."
          ]
        },
        {
          "title": "الملكية باستخدام 's و of",
          "body": "لإظهار الملكية نستخدم إما 's بعد الاسم (للكائنات الحية) أو 'of' بعد الاسم (للكائنات غير الحية والأفكار).",
          "examples": [
            "Sarah's book is open. — كتاب سارة مفتوح.",
            "The roof of the house is red. — سقف المنزل أحمر.",
            "This is the car of my father. — هذه سيارة أبي."
          ]
        }
      ],
      "vocab": [
        { "en": "brother", "ar": "أخ", "ipa": "/ˈbrʌðər/", "ex": "My younger brother plays football." },
        { "en": "sister", "ar": "أخت", "ipa": "/ˈsɪstər/", "ex": "Her sister is a doctor." },
        { "en": "mother", "ar": "أم", "ipa": "/ˈmʌðər/", "ex": "My mother cooks delicious food." },
        { "en": "father", "ar": "أب", "ipa": "/ˈfɑːðər/", "ex": "My father works in a bank." },
        { "en": "son", "ar": "ابن", "ipa": "/sʌn/", "ex": "They have two sons and one daughter." },
        { "en": "daughter", "ar": "ابنة", "ipa": "/ˈdɔːtər/", "ex": "The daughter is studying medicine." },
        { "en": "husband", "ar": "زوج", "ipa": "/ˈhʌzbənd/", "ex": "Her husband is an engineer." },
        { "en": "wife", "ar": "زوجة", "ipa": "/waɪf/", "ex": "His wife teaches at school." },
        { "en": "child", "ar": "طفل", "ipa": "/tʃaɪld/", "ex": "Every child needs love and care." },
        { "en": "parents", "ar": "والدان", "ipa": "/ˈpɛərənts/", "ex": "My parents live in a small village." }
      ],
      "dialogue": [
        { "who": "A", "en": "Who is that woman over there?", "ar": "من تلك المرأة هناك؟" },
        { "who": "B", "en": "That's my mother. She is waiting for the bus.", "ar": "هذه أمي. إنها تنتظر الحافلة." },
        { "who": "A", "en": "Is she coming with us to the market?", "ar": "هل ستأتي معنا إلى السوق؟" },
        { "who": "B", "en": "Yes, she needs to buy some vegetables.", "ar": "نعم، تحتاج لشراء بعض الخضروات." },
        { "who": "A", "en": "Tell her I said hello!", "ar": "قل لها إنني أحييها!" },
        { "who": "B", "en": "Sure! I will tell her when she arrives.", "ar": "بالتأكيد! سأخبرها عندما تصل." }
      ],
      "listening": {
        "script": "This is my family photo. In the center you can see my parents. My father is wearing a blue shirt and my mother has a beautiful scarf. On the left is my older brother who just graduated from university. On the right is my younger sister who is still in high school. I am standing behind them with my dog Bruno.",
        "q": "كم عدد الإخوة والأخوات المتحدث يملك؟",
        "opts": ["لا يوجد", "أخ واحد", "أخت واحدة"],
        "a": 2
      },
      "reading": {
        "title": "My Family Tree",
        "text": "Let me tell you about my family. My grandparents live in a small town in Upper Egypt. They have three children: my uncle who is a doctor, my aunt who is a teacher, and my father who works as an engineer. My father married my mother ten years ago. They have two children: me and my younger sister. We all live together in a big house with a garden.",
        "glossary": [
          { "w": "graduated", "ar": "تخرج" },
          { "w": "engineer", "ar": "مهندس" },
          { "w": "garden", "ar": "حديقة" }
        ],
        "q": {
          "q": "كم عدد أبناء العم والخال للمتحدث إجمالاً؟",
          "opts": ["صفر", "واحد", "اثنان"],
          "a": 2
        }
      },
      "writing": {
        "prompt": "وصف عائلتك الصغيرة (الوالدين والإخوة إن وجدت) بخمس جمل على الأقل باللغة الإنجليزية. اذكر أسماءهم إذا أحببت ووظائفهم أو ما يدرسونهم.",
        "model": "My family consists of four people. My father is an engineer who works in Cairo. My mother is a teacher at a primary school. I am a university student studying medicine. My younger sister is in her second year of secondary school.",
        "tips": [
          "استخدم ضمائر الملكية لإظهار العلاقات (my father, her job)",
          "اذكر professions أو studies لكل شخص",
          "استخدم ربطات الجمل مثل 'and', 'but', 'because'"
        ]
      },
      "quiz": [
        { "q": "ما هو الشكل الصحيح للجملة: 'I saw ___ at the park yesterday'?", "opts": ["she", "her", "hers", "she's"], "a": 1, "why": "بعد الفعل نرى نستخدم الضمير المفعول به 'her'" },
        { "q": "كيف تقول 'هذه سيارة أخي' بالإنجليزية؟", "opts": ["This is brother's car", "This is the car of brother", "This is my brother's car", "This is the car of my brother"], "a": 2, "why": "نستخدم my brother's للتحديد والاختصار" },
        { "q": "ما هو الضمير المفعول به الصحيح للفاعل 'they'?", "opts": ["they", "them", "their", "theirs"], "a": 1, "why": "الفاعل they → المفعول به them" },
        { "q": "اختر الجملة الصحيحة:", "opts": ["Me and him went to the cinema", "He and I went to the cinema", "Him and me went to the cinema", "We went to the cinema him"], "a": 1, "why": "الفاعل يجب أن يكون في صيغة الفاعل: He and I" },
        { "q": "كيف تسأل عن ملكية شيء ما؟", "opts": ["Whose is this?", "Who's this?", "Who has this?", "Which this?"], "a": 0, "why": "السؤال عن الملكية يستخدم 'Whose'" }
      ]
    }
  },
  "eng_2": {
    "1": {
      "objective": "في نهاية هذا الدرس ستكون قادراً على استخدام عبارات الترحيب والتعارف básica والرد عليها بطريقة مناسبة في مختلف المواقف الاجتماعية.",
      "level": "A2",
      "rules": [
        {
          "title": "عبارات الترحيب الأساسية",
          "body": "هناك مستويات مختلفة من الرسمية في الترحيب: من غير رسمية جداً (Hey!) إلى رسمية (Good morning/how do you do?). الاختيار يعتمد على السياق والعلاقة مع الشخص.",
          "examples": [
            "Hey! Long time no see! — يا سلام! فترة ما شفتك!",
            "Good afternoon, Mr. Hassan. How are you today? — بعد الظهر الخير يا señor حسن. كيف حالك اليوم؟",
            "It's a pleasure to meet you, Dr. Ahmed. — pleasure بلاقي حضرتك يا دكتور أحمد."
          ]
        },
        {
          "title": "الرد على شكر وامتنان",
          "body": "عند شكر quelqu لك، يمكنك الرد بتعبيرات تدل على الترحيب والمساعدة، وليس مجرد 'لا شكر على واجب'.",
          "examples": [
            "Thank you for your help! — شكراً لمساعدتك!",
            "You're very welcome! I was happy to help. — أهلا وسهلا! كنت سعيداً بمساعدتك.",
            "Thanks for coming early. — شكراً لجهودك ومجيئك مبكرة.",
            "My pleasure! Let me know if you need anything else. — pleasure بلاقي! قول لي إذا احتجت أي شيء تاني."
          ]
        }
      ],
      "vocab": [
        { "en": "greeting", "ar": "تحية", "ipa": "/ˈɡriːtɪŋ/", "ex": "We exchanged greetings before the meeting started." },
        { "en": "introduce", "ar": "يقدم", "ipa": "/ˌɪntrəˈdjuːs/", "ex": "Let me introduce you to my colleague." },
        { "en": "colleague", "ar": "زميل عمل", "ipa": "/ˈkɒliːɡ/", "ex": "My colleagues are very supportive." },
        { "en": "neighbor", "ar": "جار", "ipa": "/ˈneɪbər/", "ex": "Our new neighbor brought us cookies." },
        { "en": "apologize", "ar": "يعتذر", "ipa": "/əˈpɒlədʒaɪz/", "ex": "Please apologize for being late." },
        { "en": "appreciate", "ar": "يقدر", "ipa": "/əˈpriːʃieɪt/", "ex": "I really appreciate your honesty." },
        { "en": "congratulate", "ar": "يبارك", "ipa": "/kənˈɡrætjʊleɪt/", "ex": "We congratulated them on their engagement." },
        { "en": "invite", "ar": "يدعو", "ipa": "/ɪnˈvaɪt/", "ex": "They invited us to their wedding ceremony." },
        { "en": "celebrate", "ar": "يحتفل", "ipa": "/ˈselɪbreɪt/", "ex": "The whole town celebrated the festival." },
        { "en": "gift", "ar": "هدية", "ipa": "/ɡɪft/", "ex": "She received a beautiful gift for her birthday." }
      ],
      "dialogue": [
        { "who": "A", "en": "Excuse me, is this seat taken?", "ar": "عفواً، هل هذا المقعد مشغول؟" },
        { "who": "B", "en": "No, please go ahead. It's free.", "ar": "لا، تفضل فهو فارغ." },
        { "who": "A", "en": "Thanks! I'm waiting for my friend who should be here any minute.", "ar": "شكراً! أنا في انتظار صديقي الذي يجب أن يكون هنا أي دقيقة." },
        { "who": "B", "en": "Oh, I see. Would you like to chat while you wait?", "ar": "أواه، أفهم. هل تحب أن نتحدث whilst تنتظر؟" },
        { "who": "A", "en": "Sure! I'm actually new in town. Do you know any good coffee shops nearby?", "ar": "بالطبع! أنا جديد في المدينة فعلاً. هل تعرف أي كافيهات جيدة nearby؟" },
        { "who": "B", "en": "Yes! There's a great place called 'Bean Around the Corner' just two blocks from here.", "ar": "نعم! هناك مكان رائع اسمه 'Bean Around the Corner' على بعد بلوكين من هنا." }
      ],
      "listening": {
        "script": "Good evening everyone! Welcome to our monthly community gathering. I'm Emily, the event coordinator, and I'll be your host tonight. Before we begin, let's go around the room and introduce ourselves. Please share your name, where you're from, and one thing you're excited about this week.",
        "q": "ما هو دور إميلي في الفعالية؟",
        "opts": ["ضيفة شرف", "منسقة الفعالية", "متحدثة رئيسية"],
        "a": 1
      },
      "reading": {
        "title": "The Art of Small Talk in English",
        "text": "Small talk is an essential social skill in English-speaking cultures. It helps break the ice, build rapport, and create comfortable atmospheres before diving into deeper conversations. Common topics include weather ('Beautiful day, isn't it?'), surroundings ('I love this café's atmosphere!'), and general well-being ('How's your day going?'). The key is to ask open-ended questions that invite elaboration rather than simple yes/no answers.",
        "glossary": [
          { "w": "rapport", "ar": "تواصل" },
          { "w": "atmosphere", "ar": "جو" },
          { "w": "elaboration", "ar": "تفصيل" }
        ],
        "q": {
          "q": "ما هو مثال على موضوع للحديث التعارفي المذكور في النص؟",
          "opts": ["السياسة المحلية", "أسعار الأسهم", "حالة الطقس"],
          "a": 2
        }
      },
      "writing": {
        "prompt": "اكتب حواراً قصيراً مكوناً من 6-8 أسطر بين شخصين يلتقيان لأول مرة في فعالية اجتماعية. اذكر تحياتهم، تقديماتهم، سؤالاً عن عملهما أو دراستهما، وخاتمة ودية.",
        "model": "A: Hello! I don't think we've met before. I'm Daniel. B: Hi Daniel! I'm Priya. Nice to finally meet you in person. A: Likewise! What do you do for a living? B: I'm a graphic designer working at a startup. How about you? A: I'm a marketing analyst at a large corporation. B: That sounds interesting! Well, I should go network now. It was lovely chatting with you. A: Likewise! Hope to see you again at future events.",
        "tips": [
          "ابدأ بتحية مناسبة لمقابلة أول مرة",
          "استخدم أسئلة مفتوحة لتشجيع الحوار",
          "انهِ بعبارة تدل على الاستمتاع باللقاء والرغبة في اللقاء مرة أخرى"
        ]
      },
      "quiz": [
        { "q": "ما هو أنسب رد على 'Thank you for helping me move?'", "opts": ["No problem!", "You're welcome!", "Don't mention it!", "All of the above"], "a": 3, "why": "كل هذه الردود مناسبة ومقبولة للشكر" },
        { "q": "كيف تقول 'يسرني Meeting you' باللهجة غير الرسمية؟", "opts": ["Nice to meet ya!", "Pleasure to meet you!", "Happy to see you!", "Good to see you!"], "a": 0, "why": "في اللهجة غير الرسمية يمكن تقصير 'you' إلى 'ya'" },
        { "q": "ما هو unsuitable topic for small talk in most English-speaking cultures?", "opts": ["The weather", "Someone's salary", "Recent movies", "Weekend plans"], "a": 1, "why": "Questions about salary are considered too personal for small talk" },
        { "q": "كيف تدعو شخصاً لحفل منزلي بطريقة ودية لكن واضحة؟", "opts": ["You should come to my party", "I'd love it if you could come to my party", "Come to my party tomorrow", "My party is at 8 PM"], "a": 1, "why": "هذا الأسلوب يجمع بين اللطف والوضوح" },
        { "q": "ما هو Meaning of the phrase 'Long time no see'?", "opts": ["I haven't seen you in a while", "See you later", "Let's meet soon", "Goodbye for now"], "a": 0, "why": "يعني لم أرَك منذ فترة طويلة" }
      ]
    }
  },
  "eng_3": {
    "1": {
      "objective": "في نهاية هذا الدرس ستكون قادراً على وصف الاتجاهات والموقع الجغرافي باستخدام حروف الجر المناسبة والتعبيرات الشائعة في قسم الاستماع والقراءة في اختبار IELTS.",
      "level": "B1",
      "rules": [
        {
          "title": "حروف الجر للموقع والاتجاه",
          "body": "للوصف الدقيق للمكان نستخدم حروف جر محددة: in (داخل مناطق مغلقة أو دول/مدن)، at (لنقاط محددة أو عناوين)، on (للأسطح أو الشوارع)، و direction words مثل opposite, next to, between, behind, in front of.",
          "examples": [
            "The bank is opposite the post office. — البنك مقابل البريد.",
            "She lives at 24 Oxford Street. — هي تعيش في 24 شارع أكسفورد.",
            "The picture is hanging on the wall above the fireplace. — الصورة معلقة على الحائط فوق المدفأة."
          ]
        },
        {
          "title": "وصف التغيرات في المخططات والرسوم",
          "body": "في مهمة الكتابة الأولى frecuentemente تحتاج لوصف التزايد أو النقصان أو الثبات. استخدم أفعال مثل increase, decrease, remain stable, fluctuate, peak, trough مع عبارات زمنية مناسبة.",
          "examples": [
            "Sales increased steadily from January to March. — المبيعات زادت تدريجياً من يناير إلى مارس.",
            "The temperature remained stable throughout the experiment. — درجة الحرارة بقيت ثابتة طوال التجربة.",
            "Unemployment peaked in July at 8.2%. — وصل البطالة إلى ذروته في يوليو عند 8.2%."
          ]
        }
      ],
      "vocab": [
        { "en": "avenue", "ar": "شارع واسع", "ipa": "/ˈævənjuː/", "ex": "The parade marched down the main avenue." },
        { "en": "boulevard", "ar": "شارع مزود بأشجار", "ipa": "/ˈbʊlɪvɑːrd/", "ex": "They walked along the tree-lined boulevard." },
        { "en": "intersection", "ar": "تقاطع شوارع", "ipa": "/ˌɪntərˈsekʃən/", "ex": "Be careful at this busy intersection." },
        { "en": "roundabout", "ar": "دوار", "ipa": "/ˈraʊndəbaʊt/", "ex": "Take the second exit at the roundabout." },
        { "en": "pavement", "ar": "رصيف", "ipa": "/ˈpeɪvmənt/", "ex": "Please walk on the pavement, not on the road." },
        { "en": "pedestrian", "ar": "ماشي", "ipa": "/pəˈdestriən/", "ex": "The pedestrian crossing is flashing red." },
        { "en": "traffic", "ar": "حركة مرور", "ipa": "/ˈtræfɪk/", "ex": "The traffic was terrible during rush hour." },
        { "en": "commute", "ar": "يcommute (يذهب ويعود من العمل)", "ipa": "/kəˈmjuːt/", "ex": "She commutes by train every day." },
        { "en": "congestion", "ar": "ازدحام", "ipa": "/kənˈdʒɛstʃən/", "ex": "There's severe congestion on the highway today." },
        { "en": "infrastructure", "ar": "البنية التحتية", "ipa": "/ˈɪnfrəstrʌktʃər/", "ex": "The city needs to improve its public transportation infrastructure." }
      ],
      "dialogue": [
        { "who": "A", "en": "Excuse me, could you tell me how to get to the national museum from here?", "ar": "عفواً، هل يمكنك telling me how to get to the national museum من هنا؟" },
        { "who": "B", "en": "Sure! Walk straight ahead for two blocks, then turn left at the traffic lights. You'll see the museum on your right.", "ar": "بالطبع! امشي مستقيم لمbladين، ثم اتجه يسار عند إشارات المرور. سترى المتحف على يمينك." },
        { "who": "A", "en": "Is it within walking distance or should I take a taxi?", "ar": "هل هو في مسافة مشي أم debería tomar un taxi؟" },
        { "who": "B", "en": "It's about a 15-minute walk, but if you're in a hurry, a taxi would be faster.", "ar": "إنه مسافة مشي حوالي خمسة عشر دقيقة، لكن إذا كنت في عجلة، الأجرة أسرع." },
        { "who": "A", "en": "Thanks! One more thing—is there a good café nearby where I can rest afterward?", "ar": "شكراً! شيء آخر—هل هناك كافيه جيد nearby حيث يمكنني الراحة بعد ذلك؟" },
        { "who": "B", "en": "Yes! There's a lovely little place called 'The Daily Grind' right next to the museum's east entrance.", "ar": "نعم! هناك مكان لطيف اسمه 'The Daily Grind' بجانب المدخل الشرقي للمتحف." }
      ],
      "listening": {
        "script": "You will hear a conversation between a student and an accommodation officer at a university. First, you have some time to look at questions 1 to 5. Now listen carefully and answer questions 1 to 5.",
        "q": "ما هو الغرض الرئيسي من هذه المحادثة؟",
        "opts": ["تقديم شكوة", "طلب سكن جامعي", "استشارة أكاديمية"],
        "a": 1
      },
      "reading": {
        "title": "Urban Planning and Public Transportation",
        "text": "Effective urban planning requires a delicate balance between preserving historical architecture and accommodating modern transportation needs. Cities worldwide face challenges such as traffic congestion, air pollution, and inadequate public transport systems. Solutions often involve creating pedestrian-only zones in city centers, expanding bicycle lane networks, and investing in reliable, affordable mass transit options like subways and light rail systems. Success depends on long-term vision, adequate funding, and public participation in the planning process.",
        "glossary": [
          { "w": "congestion", "ar": "ازدحام" },
          { "w": "infrastructure", "ar": "البنية التحتية" },
          { "w": "participation", "ar": "مشاركة" }
        ],
        "q": {
          "q": "ما هو solution mentioned in the text for reducing traffic congestion in city centers?",
          "opts": ["Building more highways", "Creating pedestrian-only zones", "Increasing parking spaces"],
          "a": 1,
          "why": "النص يذكر إنشاء مناطق للمشاة فقط في مراكز المدن"
        }
      },
      "writing": {
        "prompt": "وصف مخطط يوضح changing modes of transportation in a European city from 1960 to 2020. اكتب تقريراً موجزاً من 150 كلمة يوضح الاتجاهات الرئيسية، باستخدام مفردات مناسبة لوصف التغير مع مقارنة المراحل المختلفة.",
        "model": "The pie charts illustrate the proportion of different transportation methods used in a European city over six decades. In 1960, walking dominated at 40%, followed by bicycles at 25% and buses at 20%. Private cars accounted for only 10%, while trains and other methods made up the remaining 5%. By 2020, significant shifts had occurred: private car usage increased to 35%, bus usage decreased to 15%, and walking dropped to 25%. Notably, bicycle usage remained stable at 25% throughout the period. The most striking change was the rise of private automobile use, reflecting improved economic conditions and changing lifestyle preferences.",
        "tips": [
          "ابدأ بمقدمة عامة توضح ما يوضح المخطط",
          "اذكر الاتجاهات الرئيسية مع أرقام محددة إن وجدت",
          "استخدم مفردات المقارنة والتحول: increased, decreased, remained stable, dropped",
          "ختم بملخص للتغير الأكثر أهمية أو الملحوظ"
        ]
      },
      "quiz": [
        { "q": "ما هو حرف الجر الصحيح للجملة: 'The airport is located ___ the outskirts of the city'", "opts": ["in", "at", "on", "by"], "a": 0, "why": "نستخدم 'in' للمناطق أو الأرباض مثل outskirts" },
        { "q": "كيف تصف مكان يقع genau بين مبنىًين؟", "opts": ["next to", "between", "opposite", "behind"], "a": 1, "why": "between تعني precisamente في الوسط بين شيئين" },
        { "q": "ما هو الفعل المناسب لوصف وصول درجة الحرارة إلى أعلى مستوى لها؟", "opts": ["decreased", "increased", "peaked", "fluctuated"], "a": 2, "why": "peaked تعني وصلت إلى الذروة أو أعلى نقطة" },
        { "q": "كيف تقول 'تقاطع رئيسي' بالإنجليزية؟", "opts": ["main cross", "major intersection", "central crossing", "primary junction"], "a": 1, "why": "major intersection هو المصطلح الشائع والتدريسي" },
        { "q": "ما هو Meaning of the term 'commute' in the context of urban life?", "opts": ["To travel for vacation", "To move permanently to a new city", "To travel regularly between home and work", "To walk for exercise in a park"], "a": 2, "why": "commute تحديداً يعني الذهاب والإعادة من العمل يومياً" }
      ]
    }
  }
};