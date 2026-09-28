// ========================================
// نظام المصادقة — Authentication
// ========================================

const Auth = {
  // تسجيل مستخدم جديد
  register(name, email, password) {
    if (!name || !email || !password) {
      return { success: false, error: 'يرجى ملء جميع الحقول' };
    }
    if (password.length < 6) {
      return { success: false, error: 'كلمة المرور 6 أحرف على الأقل' };
    }
    if (!email.includes('@')) {
      return { success: false, error: 'بريد إلكتروني غير صحيح' };
    }

    const users = JSON.parse(localStorage.getItem('llp_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'هذا البريد مسجل مسبقاً' };
    }

    const user = {
      id: 'u_' + Date.now(),
      name,
      email,
      password: btoa(password), // تشفير بسيط
      createdAt: new Date().toISOString(),
      isGuest: false,
      avatar: name.charAt(0).toUpperCase(),
      provider: 'email'
    };

    users.push(user);
    localStorage.setItem('llp_users', JSON.stringify(users));
    localStorage.setItem('llp_session', JSON.stringify({ userId: user.id, token: btoa(email + Date.now()) }));
    localStorage.setItem('llp_currentUser', JSON.stringify(user));

    return { success: true, user };
  },

  // تسجيل الدخول
  login(email, password) {
    const users = JSON.parse(localStorage.getItem('llp_users') || '[]');
    const user = users.find(u => u.email === email && u.password === btoa(password));

    if (!user) {
      return { success: false, error: 'البريد أو كلمة المرور غير صحيحة' };
    }

    localStorage.setItem('llp_session', JSON.stringify({ userId: user.id, token: btoa(email + Date.now()) }));
    localStorage.setItem('llp_currentUser', JSON.stringify(user));

    return { success: true, user };
  },

  // الدخول كضيف
  guestLogin() {
    const user = {
      id: 'guest_' + Date.now(),
      name: 'ضيف',
      email: '',
      isGuest: true,
      createdAt: new Date().toISOString(),
      avatar: 'ض',
      provider: 'guest'
    };

    localStorage.setItem('llp_session', JSON.stringify({ userId: user.id, token: 'guest_' + Date.now() }));
    localStorage.setItem('llp_currentUser', JSON.stringify(user));

    return { success: true, user };
  },

  // تسجيل الدخول بجوجل
  googleLogin() {
    // محاكاة تسجيل الدخول بجوجل (يعمل بدون خادم)
    const googleUsers = JSON.parse(localStorage.getItem('llp_google_users') || '[]');
    let user = googleUsers[0];

    if (!user) {
      user = {
        id: 'g_' + Date.now(),
        name: 'مستخدم جوجل',
        email: 'user@gmail.com',
        isGuest: false,
        createdAt: new Date().toISOString(),
        avatar: 'G',
        provider: 'google'
      };
      googleUsers.push(user);
      localStorage.setItem('llp_google_users', JSON.stringify(googleUsers));
    }

    localStorage.setItem('llp_session', JSON.stringify({ userId: user.id, token: btoa('google' + Date.now()) }));
    localStorage.setItem('llp_currentUser', JSON.stringify(user));

    return { success: true, user };
  },

  // تسجيل الخروج
  logout() {
    localStorage.removeItem('llp_session');
    localStorage.removeItem('llp_currentUser');
    localStorage.removeItem('llp_progress');
    location.reload();
  },

  // المستخدم الحالي
  getCurrentUser() {
    const session = localStorage.getItem('llp_session');
    if (!session) return null;
    return JSON.parse(localStorage.getItem('llp_currentUser') || 'null');
  },

  // هل المستخدم مسجل؟
  isLoggedIn() {
    return !!localStorage.getItem('llp_session');
  }
};

// === عرض نافذة المصادقة ===
function showAuthModal(mode) {
  mode = mode || 'login';
  closeAuthModal();

  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'authModal';
  modal.innerHTML = `
    <div class="auth-container">
      <button class="close-btn" onclick="closeAuthModal()">✕</button>
      
      <div class="auth-header">
        <div class="auth-logo">◆ لغتي</div>
        <p>${mode === 'login' ? 'مرحباً بعودتك' : 'أنشئ حسابك الآن'}</p>
      </div>

      <!-- تبديل التبويب -->
      <div class="auth-tabs">
        <button class="auth-tab ${mode === 'login' ? 'active' : ''}" onclick="showAuthModal('login')">تسجيل الدخول</button>
        <button class="auth-tab ${mode === 'register' ? 'active' : ''}" onclick="showAuthModal('register')">إنشاء حساب</button>
      </div>

      <!-- نموذج جوجل -->
      <button class="btn-google" onclick="handleGoogleLogin()">
        <span class="google-icon">G</span>
        المتابعة عبر جوجل
      </button>

      <div class="auth-divider"><span>أو</span></div>

      <!-- النموذج -->
      <form id="authForm" onsubmit="handleAuthSubmit(event, '${mode}')">
        ${mode === 'register' ? `
          <div class="form-group">
            <label>الاسم الكامل</label>
            <input type="text" id="authName" placeholder="أدخل اسمك" required>
          </div>
        ` : ''}
        <div class="form-group">
          <label>البريد الإلكتروني</label>
          <input type="email" id="authEmail" placeholder="example@email.com" required>
        </div>
        <div class="form-group">
          <label>كلمة المرور</label>
          <input type="password" id="authPassword" placeholder="••••••" required>
        </div>
        <div class="auth-error" id="authError"></div>
        <button type="submit" class="btn btn-primary btn-full">
          ${mode === 'login' ? 'تسجيل الدخول' : 'إنشاء الحساب'}
        </button>
      </form>

      <button class="btn-guest" onclick="handleGuestLogin()">
        الدخول كضيف ← (بدون تسجيل)
      </button>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.remove();
}

function handleAuthSubmit(e, mode) {
  e.preventDefault();
  const email = document.getElementById('authEmail').value;
  const password = document.getElementById('authPassword').value;
  const name = document.getElementById('authName')?.value || '';

  let result;
  if (mode === 'login') {
    result = Auth.login(email, password);
  } else {
    result = Auth.register(name, email, password);
  }

  if (result.success) {
    closeAuthModal();
    onAuthSuccess(result.user);
  } else {
    document.getElementById('authError').textContent = result.error;
  }
}

function handleGoogleLogin() {
  const result = Auth.googleLogin();
  closeAuthModal();
  onAuthSuccess(result.user);
}

function handleGuestLogin() {
  const result = Auth.guestLogin();
  closeAuthModal();
  onAuthSuccess(result.user);
}

function onAuthSuccess(user) {
  showToast(`مرحباً ${user.name}!`);
  addActivity(`سجّلت الدخول كـ ${user.name}`);
  updateAuthUI();
  checkAchievements();
}

function updateAuthUI() {
  const user = Auth.getCurrentUser();
  const authArea = document.getElementById('authArea');
  if (!authArea) return;

  if (user) {
    authArea.innerHTML = `
      <div class="user-avatar" onclick="showUserProfile()" title="${user.name}">
        ${user.avatar}
      </div>
    `;
  } else {
    authArea.innerHTML = `
      <button class="btn btn-outline btn-sm" onclick="showAuthModal('login')">دخول</button>
    `;
  }
}

function showUserProfile() {
  const user = Auth.getCurrentUser();
  if (!user) return;

  const progress = getProgressSummary();

  const modal = document.createElement('div');
  modal.className = 'lesson-modal';
  modal.id = 'profileModal';
  modal.innerHTML = `
    <div class="auth-container">
      <button class="close-btn" onclick="document.getElementById('profileModal').remove()">✕</button>
      <div class="profile-header">
        <div class="profile-avatar">${user.avatar}</div>
        <h2>${user.name}</h2>
        <p>${user.email || (user.isGuest ? 'حساب ضيف' : user.provider === 'google' ? 'حساب جوجل' : '')}</p>
      </div>
      <div class="profile-stats">
        <div class="profile-stat"><strong>${progress.level}</strong><span>المستوى</span></div>
        <div class="profile-stat"><strong>${progress.words}</strong><span>كلمة</span></div>
        <div class="profile-stat"><strong>${progress.lessons}</strong><span>درس</span></div>
        <div class="profile-stat"><strong>${progress.streak}</strong><span>يوم</span></div>
      </div>
      <div class="profile-actions">
        <button class="btn btn-primary btn-full" onclick="document.getElementById('profileModal').remove(); closeAuthModal();">متابعة التعلم</button>
        <button class="btn btn-outline btn-full" onclick="Auth.logout()">تسجيل الخروج</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function getProgressSummary() {
  return {
    level: localStorage.getItem('userLevel') || 'مبتدئ',
    words: localStorage.getItem('wordsLearned') || 0,
    lessons: JSON.parse(localStorage.getItem('completedLessons') || '[]').length,
    streak: localStorage.getItem('streak') || 0
  };
}
