// ============================================================
// EduTrack - Core Application Logic
// Functional flow aligned to edutrack2, UI shell kept from this project
// ============================================================

let currentRole = null;
let currentTabIndex = 0;
let charts = {};

const DATA = {
    students: [
        { id: 1, name: 'Venus Rodgelyn C. Baybayon', section: 'BSIT-1A', course: 'BS Information Technology', gpa: 3.88, attendance: 97, status: 'Excellent', avatar: 'VB', color: 'primary', grades: { prelim: 91, midterm: 94, finals: 93, finalGrade: 93 } },
        { id: 2, name: 'Althea Mae P. Sarmiento', section: 'BSIT-1A', course: 'BS Information Technology', gpa: 3.91, attendance: 98, status: 'Outstanding', avatar: 'AS', color: 'success', grades: { prelim: 93, midterm: 96, finals: 95, finalGrade: 95 } },
        { id: 3, name: 'John Mark D. Salazar', section: 'BSIT-1A', course: 'BS Information Technology', gpa: 2.84, attendance: 83, status: 'At Risk', avatar: 'JS', color: 'warning', grades: { prelim: 79, midterm: 82, finals: 80, finalGrade: 80 } },
        { id: 4, name: 'Camille A. Navarro', section: 'BSIT-1A', course: 'BS Information Technology', gpa: 3.47, attendance: 94, status: 'Good', avatar: 'CN', color: 'info', grades: { prelim: 85, midterm: 87, finals: 86, finalGrade: 86 } },
        { id: 5, name: 'Ethan James R. Mendoza', section: 'BSIT-2B', course: 'BS Information Technology', gpa: 2.63, attendance: 79, status: 'At Risk', avatar: 'EM', color: 'danger', grades: { prelim: 72, midterm: 75, finals: 74, finalGrade: 74 } },
        { id: 6, name: 'Princess Anne L. Cortez', section: 'BSIT-2B', course: 'BS Information Technology', gpa: 3.76, attendance: 95, status: 'Excellent', avatar: 'PC', color: 'primary', grades: { prelim: 89, midterm: 92, finals: 91, finalGrade: 91 } },
        { id: 7, name: 'Miguel Angelo S. Fabillar', section: 'BSIT-2B', course: 'BS Information Technology', gpa: 3.83, attendance: 96, status: 'Outstanding', avatar: 'MF', color: 'primary', grades: { prelim: 88, midterm: 91, finals: 90, finalGrade: 90 } },
        { id: 8, name: 'Hannah Joy T. Villanueva', section: 'BSIT-2B', course: 'BS Information Technology', gpa: 3.94, attendance: 99, status: 'Outstanding', avatar: 'HV', color: 'success', grades: { prelim: 95, midterm: 97, finals: 96, finalGrade: 96 } },
        { id: 9, name: 'Claire Denise M. Alonzo', section: 'BSIT-3C', course: 'BS Information Technology', gpa: 3.68, attendance: 93, status: 'Good', avatar: 'CA', color: 'success', grades: { prelim: 87, midterm: 89, finals: 88, finalGrade: 88 } },
        { id: 10, name: 'Joshua N. Cabral', section: 'BSIT-3C', course: 'BS Information Technology', gpa: 3.22, attendance: 88, status: 'Active', avatar: 'JC', color: 'primary', grades: { prelim: 83, midterm: 85, finals: 84, finalGrade: 84 } },
        { id: 11, name: 'Louise Anne P. Serrano', section: 'BSIT-3C', course: 'BS Information Technology', gpa: 3.54, attendance: 92, status: 'Good', avatar: 'LS', color: 'primary', grades: { prelim: 88, midterm: 90, finals: 89, finalGrade: 89 } },
        { id: 12, name: 'Kevin Troy L. Molina', section: 'BSIT-3C', course: 'BS Information Technology', gpa: 2.98, attendance: 81, status: 'Warning', avatar: 'KM', color: 'warning', grades: { prelim: 78, midterm: 81, finals: 80, finalGrade: 80 } }
    ],
    teachers: [
        { id: 1, name: 'Prof. Aileen M. Dela Cruz', subject: 'Human Computer Interaction', section: 'BSIT-1A', avatar: 'AC', color: 'primary' },
        { id: 2, name: 'Engr. Patrick R. Valencia', subject: 'Network Administration', section: 'BSIT-2B', avatar: 'PV', color: 'info' },
        { id: 3, name: 'Ms. Joanna B. Morales', subject: 'Web Systems and Technologies', section: 'BSIT-3C', avatar: 'JM', color: 'success' },
        { id: 4, name: 'Dr. Carlo T. Ramirez', subject: 'Database Systems', section: 'BSIT-1A', avatar: 'CR', color: 'warning' },
        { id: 5, name: 'Prof. Elaine S. Fernandez', subject: 'Information Assurance and Security', section: 'BSIT-2B', avatar: 'EF', color: 'dark' },
        { id: 6, name: 'Ms. Hazel P. Dimaano', subject: 'Systems Integration and Architecture', section: 'BSIT-3C', avatar: 'HD', color: 'secondary' }
    ],
    parents: [
        { id: 1, name: 'Celyn Coloso', child: 'Venus Rodgelyn C. Baybayon', section: 'BSIT-1A', email: 'celyn.coloso@edutrack.edu' },
        { id: 2, name: 'Maricel Sarmiento', child: 'Althea Mae P. Sarmiento', section: 'BSIT-1A', email: 'maricel.sarmiento@email.com' },
        { id: 3, name: 'Ramon Fabillar', child: 'Miguel Angelo S. Fabillar', section: 'BSIT-2B', email: 'ramon.fabillar@email.com' }
    ],
    subjects: [
        { name: 'Human Computer Interaction', grade: 93, color: '#4f46e5' },
        { name: 'Network Administration', grade: 88, color: '#0ea5e9' },
        { name: 'Web Systems and Technologies', grade: 95, color: '#10b981' },
        { name: 'Database Systems', grade: 86, color: '#f59e0b' },
        { name: 'Systems Integration and Architecture', grade: 91, color: '#6366f1' },
        { name: 'Information Assurance and Security', grade: 97, color: '#06b6d4' },
        { name: 'Mobile Application Development', grade: 94, color: '#ef4444' }
    ],
    assignments: [
        { title: 'Persona Mapping Case Study', subject: 'Human Computer Interaction', due: 'Apr 8, 2026', status: 'Pending' },
        { title: 'VLAN Configuration Lab', subject: 'Network Administration', due: 'Apr 6, 2026', status: 'Submitted' },
        { title: 'SQL Optimization Challenge', subject: 'Database Systems', due: 'Apr 10, 2026', status: 'Pending' },
        { title: 'Mobile Interface Prototype', subject: 'Mobile Application Development', due: 'Apr 5, 2026', status: 'Graded: 96' }
    ],
    feedback: [
        { teacher: 'Prof. Aileen M. Dela Cruz', subject: 'Human Computer Interaction', date: 'Apr 3, 2026', text: 'Excellent improvement on your usability analysis. Keep strengthening your user journey mapping.' },
        { teacher: 'Engr. Patrick R. Valencia', subject: 'Network Administration', date: 'Apr 1, 2026', text: 'Strong router configuration work. Review failover planning for better resiliency.' },
        { teacher: 'Ms. Joanna B. Morales', subject: 'Web Systems and Technologies', date: 'Mar 28, 2026', text: 'Your interface implementation is strong. Focus next on backend integration quality.' }
    ],
    messages: [
        { from: 'Prof. Aileen M. Dela Cruz', preview: 'Your latest interface critique was strong. Let us review the next prototype together...', time: '10:30 AM', unread: true, color: 'primary', avatar: 'AC' },
        { from: 'Engr. Patrick R. Valencia', preview: 'Please finalize your switching lab before Friday. Reach out if you need help...', time: '9:15 AM', unread: true, color: 'info', avatar: 'PV' },
        { from: 'Ms. Joanna B. Morales', preview: 'Your web systems draft looks promising. A few refinements can make it production-ready...', time: 'Yesterday', unread: false, color: 'success', avatar: 'JM' },
        { from: 'Admin Office', preview: 'Reminder: registration verification closes next week.', time: 'Yesterday', unread: false, color: 'warning', avatar: 'AO' }
    ],
    exams: [
        { id: 1, section: 'BSIT-1A', name: 'Quiz #1 - Interaction Design', maxScore: 50, date: '2026-04-01', status: 'Graded' },
        { id: 2, section: 'BSIT-1A', name: 'Midterm UX Case Analysis', maxScore: 100, date: '2026-04-10', status: 'Pending' },
        { id: 3, section: 'BSIT-2B', name: 'Routing and Switching Quiz', maxScore: 40, date: '2026-04-02', status: 'Graded' },
        { id: 4, section: 'BSIT-3C', name: 'API Integration Project', maxScore: 100, date: '2026-04-05', status: 'Pending' }
    ],
    monthlyGrades: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
            { label: 'Human Computer Interaction', data: [86, 88, 87, 90, 91, 93, 92, 93] },
            { label: 'Network Administration', data: [80, 82, 84, 85, 86, 88, 87, 88] },
            { label: 'Web Systems', data: [90, 92, 91, 93, 94, 95, 94, 95] }
        ]
    },
    attendanceMonthly: [
        { month: 'Aug', present: 20, absent: 1, late: 1 },
        { month: 'Sep', present: 19, absent: 2, late: 1 },
        { month: 'Oct', present: 21, absent: 0, late: 1 },
        { month: 'Nov', present: 18, absent: 2, late: 2 },
        { month: 'Dec', present: 15, absent: 1, late: 0 },
        { month: 'Jan', present: 20, absent: 1, late: 1 },
        { month: 'Feb', present: 19, absent: 1, late: 0 },
        { month: 'Mar', present: 22, absent: 0, late: 0 }
    ],
    notifications: {
        student: [
            { icon: 'fa-chart-line', bg: 'primary', title: 'Grade Posted', desc: 'Your Information Assurance and Security grade has been updated.', time: '5 min ago', unread: true },
            { icon: 'fa-pencil-alt', bg: 'warning', title: 'Assignment Due', desc: 'Persona Mapping Case Study is due in 3 days.', time: '1 hr ago', unread: true },
            { icon: 'fa-clock', bg: 'danger', title: 'Attendance Alert', desc: 'You were marked late for Network Administration.', time: '2 hrs ago', unread: true }
        ],
        teacher: [
            { icon: 'fa-user-times', bg: 'danger', title: 'At-Risk Student Alert', desc: 'Ethan James R. Mendoza attendance dropped below 80%.', time: '1 hr ago', unread: true },
            { icon: 'fa-file-alt', bg: 'warning', title: 'Grades Due Reminder', desc: 'Midterm grades for BSIT-1A are due by Friday.', time: '3 hrs ago', unread: true },
            { icon: 'fa-upload', bg: 'primary', title: 'New Submission', desc: 'Two new student submissions are ready for review.', time: 'Today', unread: false }
        ],
        parent: [
            { icon: 'fa-chart-line', bg: 'warning', title: 'Grade Update', desc: "Venus's Database Systems grade is below class average.", time: '2 hrs ago', unread: true },
            { icon: 'fa-envelope', bg: 'primary', title: 'Teacher Message', desc: 'Prof. Aileen M. Dela Cruz sent an academic update.', time: '6 hrs ago', unread: true },
            { icon: 'fa-calendar-check', bg: 'success', title: 'Attendance Verified', desc: 'Venus was present in all classes today.', time: 'Today', unread: false }
        ],
        admin: [
            { icon: 'fa-server', bg: 'success', title: 'System Status', desc: 'All core services are healthy.', time: '10 min ago', unread: false },
            { icon: 'fa-user-plus', bg: 'primary', title: 'New Imports', desc: '45 students were added through batch enrollment.', time: '1 hr ago', unread: true },
            { icon: 'fa-exclamation-circle', bg: 'danger', title: 'Risk Alerts', desc: '5 students were flagged for intervention.', time: '3 hrs ago', unread: true }
        ]
    }
};

const ROLE_META = {
    student: { name: 'Venus Rodgelyn C. Baybayon', label: 'BS Information Technology', avatar: 'https://ui-avatars.com/api/?name=Venus+Rodgelyn+C.+Baybayon&background=4f46e5&color=fff' },
    teacher: { name: 'Prof. Aileen M. Dela Cruz', label: 'Teacher', avatar: 'https://ui-avatars.com/api/?name=Prof.+Aileen+M.+Dela+Cruz&background=0ea5e9&color=fff' },
    parent: { name: 'Celyn Coloso', label: 'Parent', avatar: 'https://ui-avatars.com/api/?name=Celyn+Coloso&background=10b981&color=fff' },
    admin: { name: 'Admin User', label: 'Super Admin', avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=1f2937&color=fff' }
};

const sidebarConfig = {
    student: [
        { icon: 'fa-home', text: 'Dashboard', section: 'dashboard' },
        { icon: 'fa-book', text: 'My Grades', section: 'grades' },
        { icon: 'fa-calendar-check', text: 'Attendance', section: 'attendance' },
        { icon: 'fa-chart-pie', text: 'Analytics', section: 'analytics' },
        { icon: 'fa-brain', text: 'AI Study Plan', section: 'ai-plan' },
        { icon: 'fa-bell', text: 'Notifications', section: 'notifications' },
        { icon: 'fa-envelope', text: 'Messages', section: 'messages' },
        { icon: 'fa-user-cog', text: 'Profile & Settings', section: 'profile' }
    ],
    teacher: [
        { icon: 'fa-home', text: 'Dashboard', section: 'dashboard' },
        { icon: 'fa-edit', text: 'Manage Grades', section: 'manage-grades' },
        { icon: 'fa-clipboard-list', text: 'Attendance', section: 'attendance' },
        { icon: 'fa-user-friends', text: 'Students', section: 'students' },
        { icon: 'fa-comments', text: 'Feedback', section: 'feedback' },
        { icon: 'fa-envelope', text: 'Messages', section: 'messages' },
        { icon: 'fa-bell', text: 'Notifications', section: 'notifications' },
        { icon: 'fa-file-alt', text: 'Reports', section: 'reports' },
        { icon: 'fa-cogs', text: 'Settings', section: 'settings' }
    ],
    parent: [
        { icon: 'fa-home', text: 'Dashboard', section: 'dashboard' },
        { icon: 'fa-chart-bar', text: 'Child Grades', section: 'child-grades' },
        { icon: 'fa-calendar-times', text: 'Attendance', section: 'attendance' },
        { icon: 'fa-comments', text: 'Teacher Feedback', section: 'teacher-feedback' },
        { icon: 'fa-exclamation-circle', text: 'Alerts', section: 'alerts' },
        { icon: 'fa-envelope', text: 'Messages', section: 'messages' },
        { icon: 'fa-file-alt', text: 'Reports', section: 'reports' },
        { icon: 'fa-user-cog', text: 'Profile & Settings', section: 'settings' }
    ],
    admin: [
        { icon: 'fa-home', text: 'Dashboard', section: 'dashboard' },
        { icon: 'fa-user-graduate', text: 'Students', section: 'students' },
        { icon: 'fa-chalkboard-teacher', text: 'Teachers', section: 'teachers' },
        { icon: 'fa-users', text: 'Parents', section: 'parents' },
        { icon: 'fa-sitemap', text: 'Classes & Sections', section: 'classes' },
        { icon: 'fa-book', text: 'Subjects', section: 'subjects' },
        { icon: 'fa-pen-nib', text: 'Grade Management', section: 'grades' },
        { icon: 'fa-calendar-alt', text: 'System Attendance', section: 'attendance' },
        { icon: 'fa-chart-line', text: 'Reports & Analytics', section: 'reports' },
        { icon: 'fa-bullhorn', text: 'Announcements', section: 'announcements' },
        { icon: 'fa-cogs', text: 'Settings', section: 'settings' }
    ]
};

function getSidebarIndex(role, section) {
    return (sidebarConfig[role] || []).findIndex(item => item.section === section);
}

function getCurrentSection() {
    return sidebarConfig[currentRole]?.[currentTabIndex]?.section || 'dashboard';
}

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
        view.style.display = 'none';
    });
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        target.style.display = viewId === 'view-auth' ? 'flex' : 'block';
    }
    closeNotifications();
}

function showAuthForm(formId) {
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
        form.style.display = 'none';
    });
    const target = document.getElementById(formId);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block';
    }
}

function togglePassword(btn) {
    const input = btn.previousElementSibling;
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.querySelector('i').classList.toggle('fa-eye');
    btn.querySelector('i').classList.toggle('fa-eye-slash');
}

function setLoginRole(role) {
    document.getElementById('login-role').value = role;
    const labels = { student: 'Student', teacher: 'Teacher', parent: 'Parent', admin: 'Admin' };
    document.getElementById('login-submit-btn').innerText = `Sign In as ${labels[role]}`;
    document.getElementById('login-email').value = `${role}@edutrack.edu`;
    document.querySelectorAll('#loginTabs .nav-link').forEach(tab => tab.classList.remove('active'));
    document.getElementById(`tab-${role}`)?.classList.add('active');
}

function processLogin() {
    const role = document.getElementById('login-role').value;
    currentRole = role;
    currentTabIndex = 0;
    setupDashboard(role);
    switchView('view-dashboard');
    showToast('Welcome', `Logged in as ${role.charAt(0).toUpperCase() + role.slice(1)}`, 'success');
}

function logout() {
    document.getElementById('logoutModal').style.display = 'flex';
}

function closeLogoutModal() {
    document.getElementById('logoutModal').style.display = 'none';
}

function confirmLogout() {
    closeLogoutModal();
    currentRole = null;
    currentTabIndex = 0;
    destroyCharts();
    switchView('view-auth');
    showAuthForm('auth-login');
    closeSidebar();
    setLoginRole('student');
    showToast('Logged Out', 'You have been successfully logged out.', 'success');
}

function setupDashboard(role) {
    const meta = ROLE_META[role];
    if (!meta) return;

    document.getElementById('user-name').innerText = meta.name;
    document.getElementById('user-role').innerText = meta.label;
    document.getElementById('user-avatar').src = meta.avatar;
    generateSidebar(role);
    populateNotifications(role);
    loadTabContent(role, currentTabIndex);
}

function generateSidebar(role) {
    const sidebar = document.getElementById('dynamic-sidebar');
    const items = sidebarConfig[role] || [];
    sidebar.innerHTML = items.map((item, index) =>
        `<li><a href="#" class="sidebar-link ${index === currentTabIndex ? 'active' : ''}" onclick="event.preventDefault();switchTab('${role}',${index},this)"><i class="fas ${item.icon}"></i> ${item.text}</a></li>`
    ).join('');
}

function switchTab(role, index, el) {
    currentRole = role;
    currentTabIndex = index;
    document.querySelectorAll('#dynamic-sidebar a').forEach(anchor => anchor.classList.remove('active'));
    if (el) el.classList.add('active');
    loadTabContent(role, index);
    if (window.innerWidth < 992) closeSidebar();
}

function openRoleSection(role, section) {
    const index = getSidebarIndex(role, section);
    if (index < 0) return;
    const links = document.querySelectorAll('#dynamic-sidebar a');
    switchTab(role, index, links[index]);
}

function loadTabContent(role, index) {
    const content = document.getElementById('dashboard-content');
    const item = sidebarConfig[role]?.[index];
    if (!content || !item) return;

    content.innerHTML = `<div class="tab-pane-custom">${getPageContent(role, index)}</div>`;
    document.querySelector('#topbar .topbar-search input')?.setAttribute('placeholder', getSearchPlaceholder(role));
    initializeSectionView(role, item.section);
}

function initializeSectionView(role, section) {
    setTimeout(() => {
        initCharts();

        if (role === 'teacher' && section === 'manage-grades') {
            renderTeacherGradeTable(document.getElementById('teacher-grade-section-filter')?.value || 'BSIT-1A');
            renderTeacherExamList(document.getElementById('teacher-exam-section-filter')?.value || 'BSIT-1A');
        }

        if (role === 'teacher' && section === 'attendance') {
            renderTeacherAttendanceTable(document.getElementById('teacher-attendance-section-filter')?.value || 'BSIT-1A');
        }

        if (role === 'teacher' && section === 'students') {
            renderTeacherStudentProfiles(document.getElementById('teacher-student-section-filter')?.value || 'BSIT-1A');
        }

        if (role === 'admin') {
            if (section === 'students') adminWizardStep('admin-student', 1);
            if (section === 'teachers') adminWizardStep('admin-teacher', 1);
            if (section === 'parents') adminWizardStep('admin-parent', 1);
            if (section === 'classes') adminWizardStep('admin-class', 1);
            if (section === 'subjects') adminWizardStep('admin-subject', 1);
            if (section === 'grades') renderAdminGradeManagement();
            if (section === 'attendance') renderAdminAttendanceSummary();
        }
    }, 60);
}

function getSearchPlaceholder(role) {
    const placeholders = {
        student: 'Search subjects, assignments, messages...',
        teacher: 'Search students, sections, reports...',
        parent: 'Search updates, reports, feedback...',
        admin: 'Search users, classes, announcements...'
    };
    return placeholders[role] || 'Search...';
}

function navigateToProfile() {
    if (!currentRole) return;
    const target = currentRole === 'teacher' ? 'settings' : currentRole === 'parent' ? 'settings' : currentRole === 'admin' ? 'settings' : 'profile';
    openRoleSection(currentRole, target);
}

function navigateToSettings() {
    navigateToProfile();
}

function navigateToNotifications() {
    if (!currentRole) return;
    const target = currentRole === 'parent' ? 'alerts' : currentRole === 'admin' ? 'announcements' : 'notifications';
    openRoleSection(currentRole, target);
    closeNotifications();
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
    const overlay = document.getElementById('sidebarOverlay');
    overlay.classList.toggle('show');
    overlay.style.display = overlay.classList.contains('show') ? 'block' : 'none';
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('show');
    const overlay = document.getElementById('sidebarOverlay');
    overlay.classList.remove('show');
    overlay.style.display = 'none';
}

function toggleNotifications() {
    const notif = document.getElementById('notifDropdown');
    notif.classList.toggle('show');
    notif.style.display = notif.classList.contains('show') ? 'block' : 'none';
}

function closeNotifications() {
    const notif = document.getElementById('notifDropdown');
    if (notif) {
        notif.classList.remove('show');
        notif.style.display = 'none';
    }
}

function markAllRead() {
    document.querySelectorAll('.notif-item.unread').forEach(item => item.classList.remove('unread'));
    const badge = document.querySelector('.notification-bell .badge');
    if (badge) {
        badge.style.display = 'none';
        badge.innerText = '0';
    }
    showToast('Done', 'All notifications marked as read', 'success');
}

function populateNotifications(role) {
    const list = DATA.notifications[role] || [];
    const notifList = document.getElementById('notif-list');
    const badge = document.querySelector('.notification-bell .badge');

    notifList.innerHTML = list.map(item =>
        `<div class="notif-item ${item.unread ? 'unread' : ''}" onclick="markNotifRead(this, '${escapeAttr(item.title)}')">
            <div class="notif-icon bg-${item.bg} bg-opacity-10 text-${item.bg}"><i class="fas ${item.icon}"></i></div>
            <div class="flex-grow-1">
                <div class="fw-semibold small">${item.title}</div>
                <div class="text-muted" style="font-size:0.78rem;">${item.desc}</div>
                <div class="text-muted" style="font-size:0.7rem;">${item.time}</div>
            </div>
        </div>`
    ).join('');

    const unreadCount = list.filter(item => item.unread).length;
    if (badge) {
        badge.innerText = unreadCount;
        badge.style.display = unreadCount ? 'inline-flex' : 'none';
    }
}

function handleSearch(query) {
    if (query && query.trim().length > 2) {
        showToast('Search', `Searching for "${query.trim()}"...`, 'primary');
    }
}

function destroyCharts() {
    Object.values(charts).forEach(chart => chart?.destroy());
    charts = {};
}

function initCharts() {
    destroyCharts();

    initChart('studentPerformanceChart', 'line', {
        labels: DATA.monthlyGrades.labels,
        datasets: DATA.monthlyGrades.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.label === 'Human Computer Interaction' ? '#4f46e5' : dataset.label === 'Network Administration' ? '#0ea5e9' : '#10b981',
            backgroundColor: dataset.label === 'Human Computer Interaction' ? 'rgba(79,70,229,0.08)' : dataset.label === 'Network Administration' ? 'rgba(14,165,233,0.08)' : 'rgba(16,185,129,0.08)',
            fill: true,
            tension: 0.35,
            borderWidth: 3
        }))
    }, lineChartOptions(true));

    initChart('studentRadarChart', 'radar', {
        labels: DATA.subjects.map(subject => subject.name.replace(' Management', '').replace('Engineering', 'Eng')),
        datasets: [{
            label: 'Current Standing',
            data: DATA.subjects.map(subject => subject.grade),
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79,70,229,0.12)',
            pointBackgroundColor: '#4f46e5'
        }]
    }, {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: '#e2e8f0' },
                grid: { color: '#e2e8f0' },
                ticks: { display: false },
                min: 0,
                max: 100
            }
        },
        plugins: { legend: { display: false } }
    });

    initChart('teacherPerformanceChart', 'bar', {
        labels: ['BSIT-1A', 'BSIT-2B', 'BSIT-3C'],
        datasets: [{
            label: 'Class Average',
            data: [89, 86, 84],
            backgroundColor: ['#4f46e5', '#0ea5e9', '#10b981'],
            borderRadius: 8
        }]
    }, barChartOptions());

    initChart('parentTrendChart', 'line', {
        labels: DATA.monthlyGrades.labels,
        datasets: [{
            label: 'Overall Average',
            data: [84, 86, 85, 88, 89, 91, 92, 93],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16,185,129,0.08)',
            fill: true,
            tension: 0.35,
            borderWidth: 3
        }]
    }, lineChartOptions(false));

    initChart('adminSystemChart', 'line', {
        labels: DATA.monthlyGrades.labels,
        datasets: [
            {
                label: 'Avg GPA x25',
                data: [82, 84, 83, 85, 86, 87, 88, 89],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79,70,229,0.08)',
                fill: true,
                tension: 0.35,
                borderWidth: 3
            },
            {
                label: 'Attendance %',
                data: [91, 92, 90, 93, 94, 95, 94, 96],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16,185,129,0.06)',
                fill: true,
                tension: 0.35,
                borderWidth: 3
            }
        ]
    }, lineChartOptions(true));

    initChart('adminDeptChart', 'doughnut', {
        labels: ['Students', 'Teachers', 'Parents', 'Admins'],
        datasets: [{
            data: [1420, 98, 1180, 6],
            backgroundColor: ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b'],
            borderWidth: 0
        }]
    }, {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
    });
}

function lineChartOptions(showLegend) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: showLegend, position: 'bottom' } },
        scales: {
            y: { beginAtZero: false, grid: { color: '#e2e8f0' } },
            x: { grid: { display: false } }
        }
    };
}

function barChartOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, max: 100, grid: { color: '#e2e8f0' } },
            x: { grid: { display: false } }
        }
    };
}

function initChart(id, type, data, options) {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    charts[id] = new Chart(canvas.getContext('2d'), { type, data, options });
}

function openModal(title, bodyHtml, footerHtml) {
    document.getElementById('appModalTitle').innerHTML = title;
    document.getElementById('appModalBody').innerHTML = bodyHtml;
    document.getElementById('appModalFooter').innerHTML = footerHtml || '<button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>';
    const modalEl = document.getElementById('appModal');
    let modal = bootstrap.Modal.getInstance(modalEl);
    if (!modal) modal = new bootstrap.Modal(modalEl, { backdrop: 'static' });
    modal.show();
}

function closeModal() {
    const modalEl = document.getElementById('appModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
    
    setTimeout(() => {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    }, 300);
}

function showToast(title, message, type = 'primary') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toastId = `toast-${Date.now()}`;
    const icons = {
        success: 'fa-check-circle',
        warning: 'fa-exclamation-triangle',
        danger: 'fa-times-circle',
        primary: 'fa-info-circle',
        dark: 'fa-cog'
    };

    container.insertAdjacentHTML('beforeend',
        `<div id="${toastId}" class="toast border-0 shadow-lg" role="alert">
            <div class="toast-header bg-${type} text-white border-0">
                <i class="fas ${icons[type] || icons.primary} me-2"></i>
                <strong class="me-auto">${title}</strong>
                <small>Just now</small>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body bg-white text-dark rounded-bottom">${message}</div>
        </div>`
    );

    const toastEl = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastEl, { delay: 2800 });
    toast.show();
    toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
}

function showSubjectModal(name, mid, finalExam, total) {
    openModal(name,
        `<div class="text-center">
            <p class="mb-3">Midterm: <strong>${mid}%</strong> | Finals: <strong>${finalExam}%</strong> | Average: <strong>${total}%</strong></p>
            <div class="progress-custom mt-2"><div class="progress-bar bg-primary" style="width:${total}%"></div></div>
        </div>`,
        '<button class="btn btn-primary" data-bs-dismiss="modal">Close</button>');
}

function showNewAssignmentModal() {
    openModal('Create Assignment',
        `<form id="assignment-form">
            <div class="row g-3">
                <div class="col-md-8"><label class="form-label">Assignment Title</label><input class="form-control" placeholder="Enter assignment title"></div>
                <div class="col-md-4"><label class="form-label">Section</label><select class="form-select"><option>BSIT-1A</option><option>BSIT-2B</option><option>BSIT-3C</option></select></div>
                <div class="col-md-6"><label class="form-label">Subject</label><input class="form-control" value="Human Computer Interaction"></div>
                <div class="col-md-6"><label class="form-label">Due Date</label><input type="date" class="form-control"></div>
                <div class="col-12"><label class="form-label">Instructions</label><textarea class="form-control" rows="4" placeholder="Write assignment instructions"></textarea></div>
            </div>
        </form>`,
        `<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
         <button class="btn btn-primary" onclick="closeModal();showToast('Created','Assignment created successfully.','success')">Create Assignment</button>`);
}

function showStudentProfileModal(name, grade, gpa, attendance, status, color) {
    openModal(name,
        `<div class="text-center">
            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=96" class="rounded-circle mb-3" alt="${name}">
            <p class="mb-2">Final Grade: <strong>${grade}%</strong></p>
            <p class="mb-2">GPA: <strong>${gpa}</strong></p>
            <p class="mb-3">Attendance: <strong>${attendance}</strong></p>
            <span class="badge badge-soft-${color}">${status}</span>
        </div>`,
        `<button class="btn btn-outline-primary" onclick="closeModal();showToast('Message Sent','A follow-up has been prepared for ${name}.','success')">Send Follow-up</button>
         <button class="btn btn-light" data-bs-dismiss="modal">Close</button>`);
}

function showAddUserModal() {
    openModal('Add User',
        `<form>
            <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Full Name</label><input class="form-control" placeholder="Enter full name"></div>
                <div class="col-md-6"><label class="form-label">Email</label><input class="form-control" placeholder="Enter email address"></div>
                <div class="col-md-6"><label class="form-label">Role</label><select class="form-select"><option>Student</option><option>Teacher</option><option>Parent</option><option>Admin</option></select></div>
                <div class="col-md-6"><label class="form-label">Section / Department</label><input class="form-control" placeholder="e.g. BSIT-1A"></div>
            </div>
        </form>`,
        `<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
         <button class="btn btn-primary" onclick="closeModal();showToast('Created','User added successfully.','success')">Save User</button>`);
}

function showDeleteUserModal(name) {
    openModal('Delete User',
        `<p class="mb-0">Are you sure you want to remove <strong>${name}</strong> from the system?</p>`,
        `<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
         <button class="btn btn-danger" onclick="closeModal();showToast('Deleted','${name} has been removed.','danger')">Delete</button>`);
}

function showResetModal() {
    openModal('Reset System',
        `<p class="text-danger mb-0">This demo will not delete anything, but this simulates the system reset confirmation flow from the reference project.</p>`,
        `<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
         <button class="btn btn-danger" onclick="closeModal();showToast('Reset Cancelled','System reset is disabled in demo mode.','warning')">Confirm Reset</button>`);
}

function escapeAttr(value) {
    return String(value).replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.notification-bell') && !event.target.closest('.notification-dropdown')) {
        closeNotifications();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setLoginRole('student');
});
