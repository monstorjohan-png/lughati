// ========================================
// الموارد والروابط — Resources & Links
// ========================================

const RESOURCES = {
  certificates: [
    { name: 'British Council — IELTS', url: 'https://takeielts.britishcouncil.org/', desc: 'الموقع الرسمي لاختبار IELTS', type: 'معتمد دولياً' },
    { name: 'ETS — TOEFL', url: 'https://www.ets.org/toefl', desc: 'الموقع الرسمي لاختبار TOEFL', type: 'معتمد دولياً' },
    { name: 'Cambridge English', url: 'https://www.cambridgeenglish.org/', desc: 'شهادات كامبريدج المعتمدة', type: 'شهادة دولية' },
    { name: 'Coursera', url: 'https://www.coursera.org/', desc: 'شهادات من أفضل الجامعات العالمية', type: 'شهادة موثوقة' },
    { name: 'edX', url: 'https://www.edx.org/', desc: 'دورات مع شهادات معتمدة', type: 'شهادة موثوقة' },
    { name: 'Udemy', url: 'https://www.udemy.com/', desc: 'دورات مع شهادة إتمام', type: 'شهادة تدريب' },
    { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/', desc: 'شهادات تظهر على ملفك المهني', type: 'شهادة مهنية' },
    { name: 'Google Certificates', url: 'https://grow.google/certificates/', desc: 'شهادات جوجل المهنية', type: 'شهادة مهنية' },
    { name: 'Alison', url: 'https://alison.com/', desc: 'شهادات مجانية معتمدة', type: 'مجاني' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/', desc: 'شهادات برمجة معتمدة', type: 'تقنية' },
  ],
  jobs: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/', desc: 'أكبر موقع توظيف في العالم', type: 'عالمي' },
    { name: 'Indeed', url: 'https://www.indeed.com/', desc: 'بحث عن وظائف بالإنجليزية', type: 'عالمي' },
    { name: 'Bayt', url: 'https://www.bayt.com/', desc: 'أكبر موقع توظيف في الشرق الأوسط', type: 'عربي' },
    { name: 'Wuzzuf', url: 'https://wuzzuf.net/', desc: 'موقع توظيف مصري رئيسي', type: 'مصري' },
    { name: 'Glassdoor', url: 'https://www.glassdoor.com/', desc: 'وظائف مع مراجعات الرواتب', type: 'عالمي' },
    { name: 'Upwork', url: 'https://www.upwork.com/', desc: 'عمل حر بالإنجليزية', type: 'عمل حر' },
    { name: 'Fiverr', url: 'https://www.fiverr.com/', desc: 'بيع خدماتك بالإنجليزية', type: 'عمل حر' },
    { name: 'Freelancer', url: 'https://www.freelancer.com/', desc: 'مشاريع حرّة عالمية', type: 'عمل حر' },
    { name: 'Gulftalent', url: 'https://www.gulftalent.com/', desc: 'وظائف في الخليج', type: 'خليجي' },
    { name: 'Naukri Gulf', url: 'https://www.naukrigulf.com/', desc: 'وظائف الخليج العربي', type: 'خليجي' },
  ],
  learning: [
    { name: 'Duolingo', url: 'https://www.duolingo.com/', desc: 'تعلم لغات مجاناً بالألعاب', type: 'مجاني', icon: '🦉' },
    { name: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish', desc: 'دروس إنجليزية من البي بي سي', type: 'مجاني', icon: '📺' },
    { name: 'BBC Languages', url: 'https://www.bbc.co.uk/languages', desc: 'تعلم 40+ لغة مجاناً', type: 'مجاني', icon: '🌍' },
    { name: 'Memrise', url: 'https://www.memrise.com/', desc: 'تعلم مفردات بالطريقة الذكية', type: 'مجاني', icon: '🧠' },
    { name: 'Anki', url: 'https://apps.ankiweb.net/', desc: 'بطاقات ذكية للتكرار المتباعد', type: 'مجاني', icon: '🃏' },
    { name: 'Italki', url: 'https://www.italki.com/', desc: 'محادثة مع معلمين أصليين', type: 'مدفوع', icon: '🗣️' },
    { name: 'Tandem', url: 'https://www.tandem.net/', desc: 'تبادل لغوي مع متحدثين', type: 'مجاني', icon: '🤝' },
    { name: 'HelloTalk', url: 'https://www.hellotalk.com/', desc: 'تطبيق تبادل لغوي', type: 'مجاني', icon: '💬' },
    { name: 'Busuu', url: 'https://www.busuu.com/', desc: 'تعلم لغات مع مجتمع عالمي', type: 'مجاني', icon: '🎓' },
    { name: 'TED Talks', url: 'https://www.ted.com/talks', desc: 'استمع لمحاضرات بالإنجليزية', type: 'مجاني', icon: '🎤' },
    { name: 'Project Gutenberg', url: 'https://www.gutenberg.org/', desc: 'كتب مجانية بالإنجليزية', type: 'مجاني', icon: '📚' },
    { name: 'VOA Learning English', url: 'https://learningenglish.voanews.com/', desc: 'أخبار بإنجليزية مبسطة', type: 'مجاني', icon: '📻' },
    { name: 'News in Levels', url: 'https://www.newsinlevels.com/', desc: 'أخبار بمستويات مختلفة', type: 'مجاني', icon: '📰' },
    { name: 'YouGlish', url: 'https://youglish.com/', desc: 'انطق الكلمات من يوتيوب', type: 'مجاني', icon: '🔊' },
    { name: 'Forvo', url: 'https://forvo.com/', desc: 'نطق الكلمات من متحدثين أصليين', type: 'مجاني', icon: '🗣️' },
    { name: 'Lingoda', url: 'https://www.lingoda.com/', desc: 'دروس مباشرة مع معلمين', type: 'مدفوع', icon: '🏫' },
    { name: 'Reverse Dictionary', url: 'https://onelook.com/thesaurus/', desc: 'قاموس ذكي بالعكس', type: 'مجاني', icon: '📖' },
    { name: 'Grammarly', url: 'https://www.grammarly.com/', desc: 'تصحيح الكتابة بالإنجليزية', type: 'مجاني', icon: '✍️' },
    { name: 'Hemingway Editor', url: 'https://hemingwayapp.com/', desc: 'تحسين الكتابة', type: 'مجاني', icon: '📝' },
    { name: 'Language Reactor', url: 'https://www.languagereactor.com/', desc: 'تعلم من نتفليكس ويوتيوب', type: 'مجاني', icon: '🎬' },
  ],
  youtubeChannels: [
    { name: 'English with Lucy', url: 'https://www.youtube.com/@EnglishwithLucy', desc: 'إنجليزية بريطانية بنطق واضح', subs: '11M' },
    { name: 'BBC Learning English', url: 'https://www.youtube.com/@bbclearningenglish', desc: 'دروس من البي بي سي', subs: '5M' },
    { name: 'engVid', url: 'https://www.youtube.com/@engVid', desc: 'قواعد ومفردات متنوعة', subs: '7M' },
    { name: 'Rachel\'s English', url: 'https://www.youtube.com/@RachelsEnglish', desc: 'نطق أمريكي دقيق', subs: '7M' },
    { name: 'EnglishClass101', url: 'https://www.youtube.com/@EnglishClass101', desc: 'إنجليزية من الصفر', subs: '4M' },
    { name: 'Speak English With Vanessa', url: 'https://www.youtube.com/@SpeakEnglishWithVanessa', desc: 'محادثة يومية بسيطة', subs: '3M' },
    { name: 'Learn English with TV', url: 'https://www.youtube.com/@LearnEnglishwithTVSeries', desc: 'تعلم من الأفلام والمسلسلات', subs: '4M' },
    { name: 'Real English', url: 'https://www.youtube.com/@RealEnglish', desc: 'إنجليزية حقيقية من الشارع', subs: '5M' },
    { name: 'EnglishAnyone', url: 'https://www.youtube.com/@EnglishAnyone', desc: 'كسر حاجز التحدث', subs: '2M' },
    { name: 'IELTS Liz', url: 'https://www.youtube.com/@IELTSLiz', desc: 'تحضير IELTS شامل', subs: '3M' },
    { name: 'Fastrack IELTS', url: 'https://www.youtube.com/@FastrackIELTS', desc: 'IELTS سريع وفعال', subs: '2M' },
    { name: 'Learn English with Emma', url: 'https://www.youtube.com/@LearnEnglishwithEmma', desc: 'إنجليزية أمريكية مبسطة', subs: '3M' },
  ]
};

// عرض الموارد في صفحة
function renderResources() {
  const container = document.getElementById('resourcesGrid');
  if (!container) return;

  container.innerHTML = `
    <div class="resource-category">
      <h3><span class="resource-icon">🎓</span> شهادات معتمدة</h3>
      <div class="resource-list">
        ${RESOURCES.certificates.map(r => `
          <a href="${r.url}" target="_blank" rel="noopener" class="resource-card">
            <div class="resource-header">
              <strong>${r.name}</strong>
              <span class="resource-type type-${r.type.includes('مجاني') ? 'free' : 'certified'}">${r.type}</span>
            </div>
            <p>${r.desc}</p>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="resource-category">
      <h3><span class="resource-icon">💼</span> مواقع التوظيف</h3>
      <div class="resource-list">
        ${RESOURCES.jobs.map(r => `
          <a href="${r.url}" target="_blank" rel="noopener" class="resource-card">
            <div class="resource-header">
              <strong>${r.name}</strong>
              <span class="resource-type type-${r.type === 'عربي' || r.type === 'مصري' ? 'arabic' : 'global'}">${r.type}</span>
            </div>
            <p>${r.desc}</p>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="resource-category">
      <h3><span class="resource-icon">📚</span> مواقع تعلم مفيدة</h3>
      <div class="resource-list">
        ${RESOURCES.learning.map(r => `
          <a href="${r.url}" target="_blank" rel="noopener" class="resource-card">
            <div class="resource-header">
              <strong>${r.icon} ${r.name}</strong>
              <span class="resource-type type-${r.type === 'مجاني' ? 'free' : 'paid'}">${r.type}</span>
            </div>
            <p>${r.desc}</p>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="resource-category">
      <h3><span class="resource-icon">▶</span> قنوات يوتيوب مميزة</h3>
      <div class="resource-list">
        ${RESOURCES.youtubeChannels.map(r => `
          <a href="${r.url}" target="_blank" rel="noopener" class="resource-card">
            <div class="resource-header">
              <strong>${r.name}</strong>
              <span class="resource-type type-youtube">${r.subs} مشترك</span>
            </div>
            <p>${r.desc}</p>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}
