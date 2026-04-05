// ============================================================
// EduTrack – Core Application Logic
// ============================================================
let currentRole = null;
let chartsInitialized = false;
let charts = {};

// ---- View Management ----
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        if (viewId === 'view-dashboard' && chartsInitialized) {
            setTimeout(initCharts, 150);
        }
    }
    closeNotifications();
}

// ---- Auth Flow ----
function showAuthForm(formId) {
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.getElementById(formId)?.classList.add('active');
}

function togglePassword(btn) {
    const input = btn.previousElementSibling;
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.querySelector('i').classList.toggle('fa-eye');
    btn.querySelector('i').classList.toggle('fa-eye-slash');
}

function setLoginRole(role) {
    document.getElementById('login-role').value = role;
    const labels = { student:'Student', teacher:'Teacher', parent:'Parent', admin:'Admin' };
    document.getElementById('login-submit-btn').innerText = 'Sign In as ' + labels[role];
    document.getElementById('login-email').value = role + '@edutrack.edu';
    // Update active tab
    document.querySelectorAll('#loginTabs .nav-link').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + role)?.classList.add('active');
}

function processLogin() {
    const role = document.getElementById('login-role').value;
    currentRole = role;
    setupDashboard(role);
    switchView('view-dashboard');
    showToast('Welcome!', 'Logged in as ' + role.charAt(0).toUpperCase() + role.slice(1), 'success');
}

function logout() {
    currentRole = null;
    chartsInitialized = false;
    Object.keys(charts).forEach(k => { if(charts[k]) charts[k].destroy(); });
    charts = {};
    switchView('view-landing');
    document.getElementById('tab-student')?.click();
}

// ---- Dashboard Setup ----
function setupDashboard(role) {
    const names = { student:'Alex Johnson', teacher:'Prof. Davis', parent:'Mr. & Mrs. Johnson', admin:'System Admin' };
    const avatarColors = { student:'4f46e5', teacher:'0ea5e9', parent:'10b981', admin:'ef4444' };
    document.getElementById('user-name').innerText = names[role];
    document.getElementById('user-role').innerText = role.charAt(0).toUpperCase() + role.slice(1);
    document.getElementById('user-avatar').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(names[role])}&background=${avatarColors[role]}&color=fff`;
    generateSidebar(role);
    loadTabContent(role, 0);
    populateNotifications(role);
}

// ---- Sidebar ----
const sidebarConfig = {
    student: [
        { icon:'fa-home', text:'Dashboard' },
        { icon:'fa-book', text:'My Grades' },
        { icon:'fa-calendar-check', text:'Attendance' },
        { icon:'fa-chart-pie', text:'Analytics' },
        { icon:'fa-brain', text:'AI Study Plan' },
        { icon:'fa-bell', text:'Notifications' },
        { icon:'fa-user-cog', text:'Profile & Settings' }
    ],
    teacher: [
        { icon:'fa-home', text:'Dashboard' },
        { icon:'fa-chalkboard', text:'My Classes' },
        { icon:'fa-edit', text:'Manage Grades' },
        { icon:'fa-clipboard-list', text:'Attendance' },
        { icon:'fa-user-friends', text:'Student Profiles' },
        { icon:'fa-comments', text:'Feedback' },
        { icon:'fa-file-alt', text:'Reports' },
        { icon:'fa-bell', text:'Notifications' },
        { icon:'fa-cogs', text:'Settings' }
    ],
    parent: [
        { icon:'fa-home', text:'Overview' },
        { icon:'fa-chart-bar', text:'Child Grades' },
        { icon:'fa-calendar-times', text:'Attendance' },
        { icon:'fa-comments', text:'Teacher Feedback' },
        { icon:'fa-exclamation-circle', text:'Alerts' },
        { icon:'fa-file-alt', text:'Reports' },
        { icon:'fa-user-cog', text:'Profile & Settings' }
    ],
    admin: [
        { icon:'fa-home', text:'System Dashboard' },
        { icon:'fa-users-cog', text:'User Management' },
        { icon:'fa-file-alt', text:'Global Reports' },
        { icon:'fa-chart-area', text:'Analytics' },
        { icon:'fa-bell', text:'Notifications' },
        { icon:'fa-cogs', text:'Settings' }
    ]
};

function generateSidebar(role) {
    const sidebar = document.getElementById('dynamic-sidebar');
    const items = sidebarConfig[role] || [];
    sidebar.innerHTML = items.map((item, i) =>
        `<li><a href="#" class="sidebar-link ${i===0?'active':''}" onclick="event.preventDefault();switchTab('${role}',${i},this)"><i class="fas ${item.icon}"></i> ${item.text}</a></li>`
    ).join('');
}

// ---- Tab Switching ----
function switchTab(role, index, el) {
    document.querySelectorAll('#dynamic-sidebar a').forEach(a => a.classList.remove('active'));
    if (el) el.classList.add('active');
    loadTabContent(role, index);
    if (window.innerWidth < 992) closeSidebar();
}

function loadTabContent(role, index) {
    const content = document.getElementById('dashboard-content');
    // Get page HTML from pages.js
    const html = getPageContent(role, index);
    content.innerHTML = `<div class="tab-pane-custom">${html}</div>`;
    // Init charts after DOM update
    setTimeout(() => initCharts(), 100);
}

function navigateToProfile() {
    const role = currentRole;
    const items = sidebarConfig[role];
    const idx = items.findIndex(i => i.text.includes('Profile') || i.text.includes('Settings'));
    if (idx >= 0) switchTab(role, idx, document.querySelectorAll('#dynamic-sidebar a')[idx]);
}
function navigateToSettings() { navigateToProfile(); }
function navigateToNotifications() {
    const role = currentRole;
    const items = sidebarConfig[role];
    const idx = items.findIndex(i => i.text === 'Notifications');
    if (idx >= 0) switchTab(role, idx, document.querySelectorAll('#dynamic-sidebar a')[idx]);
    closeNotifications();
}

// ---- Sidebar Toggle ----
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
    document.getElementById('sidebarOverlay').classList.toggle('show');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('sidebarOverlay').classList.remove('show');
}

// ---- Notifications ----
function toggleNotifications() {
    document.getElementById('notifDropdown').classList.toggle('show');
}
function closeNotifications() {
    document.getElementById('notifDropdown')?.classList.remove('show');
}
function markAllRead() {
    document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
    document.querySelector('.notification-bell .badge').style.display = 'none';
    showToast('Done','All notifications marked as read','success');
}
document.addEventListener('click', function(e) {
    if (!e.target.closest('.notification-bell') && !e.target.closest('.notification-dropdown')) {
        closeNotifications();
    }
});

function populateNotifications(role) {
    const notifs = {
        student: [
            { icon:'fa-exclamation-triangle', bg:'warning', title:'Low Grade Alert', desc:'Your Calculus score dropped below 80%', time:'2 hours ago', unread:true },
            { icon:'fa-calendar', bg:'primary', title:'Assignment Due', desc:'Physics Lab Report due in 3 days', time:'5 hours ago', unread:true },
            { icon:'fa-comment', bg:'success', title:'Teacher Feedback', desc:'Prof. Davis left feedback on your quiz', time:'1 day ago', unread:true }
        ],
        teacher: [
            { icon:'fa-upload', bg:'primary', title:'New Submission', desc:'John Doe submitted Algebra Final Project', time:'30 min ago', unread:true },
            { icon:'fa-user-times', bg:'danger', title:'Absence Alert', desc:'Mia Wong absent 3 consecutive days', time:'2 hours ago', unread:true },
            { icon:'fa-chart-line', bg:'success', title:'Reports Ready', desc:'Term 2 class reports are generated', time:'1 day ago', unread:true }
        ],
        parent: [
            { icon:'fa-chart-line', bg:'warning', title:'Grade Update', desc:'Alex received 78% in Calculus midterm', time:'1 hour ago', unread:true },
            { icon:'fa-comment', bg:'primary', title:'Teacher Message', desc:'Prof. Davis sent a note about Alex', time:'3 hours ago', unread:true },
            { icon:'fa-calendar-check', bg:'success', title:'Attendance', desc:'Alex marked present today', time:'6 hours ago', unread:false }
        ],
        admin: [
            { icon:'fa-server', bg:'success', title:'System Update', desc:'Backup completed successfully', time:'10 min ago', unread:true },
            { icon:'fa-user-plus', bg:'primary', title:'New Users', desc:'45 students imported via CSV', time:'1 hour ago', unread:true },
            { icon:'fa-exclamation-circle', bg:'danger', title:'Alert', desc:'5 at-risk students flagged', time:'3 hours ago', unread:true }
        ]
    };
    const list = notifs[role] || [];
    document.getElementById('notif-list').innerHTML = list.map(n =>
        `<div class="notif-item ${n.unread?'unread':''}" onclick="this.classList.remove('unread');showToast('${n.title}','${n.desc}','${n.bg}')">
            <div class="notif-icon bg-${n.bg} bg-opacity-10 text-${n.bg}"><i class="fas ${n.icon}"></i></div>
            <div class="flex-grow-1"><div class="fw-semibold small">${n.title}</div><div class="text-muted" style="font-size:0.78rem;">${n.desc}</div><div class="text-muted" style="font-size:0.7rem;">${n.time}</div></div>
        </div>`
    ).join('');
}

// ---- Search ----
function handleSearch(query) {
    if (!query) return;
    if (query.length > 2) {
        showToast('Search', `Searching for "${query}"...`, 'primary');
    }
}

// ---- Modal ----
function openModal(title, bodyHtml, footerHtml) {
    document.getElementById('appModalTitle').innerHTML = title;
    document.getElementById('appModalBody').innerHTML = bodyHtml;
    document.getElementById('appModalFooter').innerHTML = footerHtml || '<button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>';
    var modalEl = document.getElementById('appModal');
    var modal = bootstrap.Modal.getInstance(modalEl);
    if (!modal) {
        modal = new bootstrap.Modal(modalEl, { backdrop: 'static' });
    }
    modal.show();
}
function closeModal() {
    var modalEl = document.getElementById('appModal');
    var modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
}

// ---- Toast ----
function showToast(title, message, type = 'primary') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const id = 'toast-' + Date.now();
    const icons = { success:'fa-check-circle', warning:'fa-exclamation-triangle', danger:'fa-times-circle', primary:'fa-info-circle', dark:'fa-cog' };
    container.insertAdjacentHTML('beforeend',
        `<div id="${id}" class="toast border-0 shadow-lg" role="alert"><div class="toast-header bg-${type} text-white border-0"><i class="fas ${icons[type]||icons.primary} me-2"></i><strong class="me-auto">${title}</strong><small>Just now</small><button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button></div><div class="toast-body bg-white text-dark rounded-bottom">${message}</div></div>`
    );
    const el = document.getElementById(id);
    const toast = new bootstrap.Toast(el, { delay: 3000 });
    toast.show();
    el.addEventListener('hidden.bs.toast', () => el.remove());
}

// ---- Charts ----
function initCharts() {
    const opts = {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position:'bottom', labels: { usePointStyle:true, boxWidth:8, font:{family:"'Inter',sans-serif"} } } },
        scales: { y: { beginAtZero:true, grid: { borderDash:[5,5], color:'#e2e8f0' } }, x: { grid: { display:false } } },
        elements: { line: { tension:0.4 }, point: { radius:4, hoverRadius:6 } }
    };
    // Destroy existing
    Object.keys(charts).forEach(k => { if(charts[k]) { charts[k].destroy(); delete charts[k]; } });

    initChart('studentPerformanceChart', 'line', {
        labels:['Sep','Oct','Nov','Dec','Jan','Feb'],
        datasets:[{ label:'Overall Average (%)', data:[78,82,80,85,89,92], borderColor:'#4f46e5', backgroundColor:'rgba(79,70,229,0.1)', fill:true, borderWidth:3 }]
    }, opts);

    initChart('studentRadarChart', 'radar', {
        labels:['Physics','Calculus','Comp Sci','Literature','History','Biology'],
        datasets:[
            { label:'Current', data:[92,78,98,85,88,80], backgroundColor:'rgba(79,70,229,0.2)', borderColor:'#4f46e5', pointBackgroundColor:'#4f46e5' },
            { label:'Target', data:[90,90,90,90,90,90], backgroundColor:'rgba(16,185,129,0.1)', borderColor:'#10b981', borderDash:[5,5], pointBackgroundColor:'#10b981' }
        ]
    }, { responsive:true, maintainAspectRatio:false, scales:{ r:{ angleLines:{color:'#e2e8f0'}, grid:{color:'#e2e8f0'}, ticks:{display:false}, min:0, max:100 } }, plugins:{ legend:{position:'bottom'} } });

    initChart('teacherPerformanceChart', 'bar', {
        labels:['Math 101','Physics Adv','Comp Sci','Literature'],
        datasets:[
            { label:'Class Average', data:[75,82,91,85], backgroundColor:'#0ea5e9', borderRadius:6 },
            { label:'Target', data:[80,80,80,80], backgroundColor:'#e2e8f0', borderRadius:6 }
        ]
    }, { ...opts, scales:{ x:{grid:{display:false}}, y:{beginAtZero:true,max:100} } });

    initChart('parentTrendChart', 'line', {
        labels:['Week 1','Week 2','Week 3','Week 4','Week 5'],
        datasets:[
            { label:'Math', data:[85,82,78,85,88], borderColor:'#f59e0b', borderWidth:2 },
            { label:'Physics', data:[80,85,88,90,92], borderColor:'#10b981', borderWidth:2 }
        ]
    }, opts);

    initChart('adminSystemChart', 'line', {
        labels:['Term 1','Term 2','Term 3','Term 4'],
        datasets:[
            { label:'Avg Attendance (%)', data:[95,93,91,94], borderColor:'#10b981', yAxisID:'y' },
            { label:'Avg Score', data:[78,80,81,83], borderColor:'#4f46e5', yAxisID:'y1' }
        ]
    }, { responsive:true, maintainAspectRatio:false, scales:{ y:{type:'linear',position:'left',max:100,min:80}, y1:{type:'linear',position:'right',max:100,min:60,grid:{drawOnChartArea:false}} } });

    initChart('adminDeptChart', 'doughnut', {
        labels:['Science','Math','Arts','Languages','Physical Ed'],
        datasets:[{ data:[30,25,20,15,10], backgroundColor:['#4f46e5','#0ea5e9','#10b981','#f59e0b','#ef4444'] }]
    }, { responsive:true, maintainAspectRatio:false, plugins:{ legend:{position:'bottom'} } });

    chartsInitialized = true;
}

function initChart(id, type, data, options) {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    charts[id] = new Chart(canvas.getContext('2d'), { type, data, options });
}

// ---- Modal Helpers (avoids nested-quote issues in onclick attrs) ----
function showSubjectModal(name, mid, final, total) {
    openModal(name,
        '<div class="text-center"><p>Midterm: '+mid+'% | Finals: '+final+'% | Total: <b>'+total+'%</b></p><div class="progress-custom mt-2"><div class="progress-bar bg-primary" style="width:'+total+'%"></div></div></div>',
        '<button class="btn btn-primary" data-bs-dismiss="modal">OK</button>');
}

function showNewAssignmentModal() {
    openModal('New Assignment',
        '<form id="assignForm"><div class="mb-3"><label class="form-label">Title</label><input class="form-control" placeholder="Assignment title"></div><div class="mb-3"><label class="form-label">Class</label><select class="form-select"><option>Math 101</option><option>Physics Adv</option><option>Comp Sci 102</option></select></div><div class="mb-3"><label class="form-label">Due Date</label><input type="date" class="form-control"></div><div class="mb-3"><label class="form-label">Description</label><textarea class="form-control" rows="3"></textarea></div></form>',
        '<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast(\'Created\',\'Assignment created successfully!\',\'success\')">Create</button>');
}

function showStudentProfileModal(name, grade, gpa, att, status, color) {
    openModal(name,
        '<div class="text-center"><img src="https://ui-avatars.com/api/?name='+encodeURIComponent(name)+'&background=random&size=100" class="rounded-circle mb-3"><h4>'+name+'</h4><p>Grade: '+grade+'% | GPA: '+gpa+' | Attendance: '+att+'</p><span class="badge badge-soft-'+color+'">'+status+'</span></div>',
        '<button class="btn btn-primary" onclick="closeModal();showToast(\'Sent\',\'Feedback sent to '+name+'\',\'success\')">Send Feedback</button><button class="btn btn-light" data-bs-dismiss="modal">Close</button>');
}

function showAddUserModal() {
    openModal('Add New User',
        '<form><div class="row g-3"><div class="col-md-6"><label class="form-label">Full Name</label><input class="form-control" placeholder="Enter full name"></div><div class="col-md-6"><label class="form-label">Email</label><input class="form-control" placeholder="Enter email"></div><div class="col-md-6"><label class="form-label">Role</label><select class="form-select"><option>Student</option><option>Teacher</option><option>Parent</option><option>Admin</option></select></div><div class="col-md-6"><label class="form-label">Department</label><input class="form-control" placeholder="Department"></div></div></form>',
        '<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast(\'Created\',\'User created successfully!\',\'success\')">Add User</button>');
}

function showDeleteUserModal(name) {
    openModal('Delete User',
        '<p>Are you sure you want to delete <b>'+name+'</b>? This action cannot be undone.</p>',
        '<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button class="btn btn-danger" onclick="closeModal();showToast(\'Deleted\',\'User removed from system\',\'danger\')">Delete</button>');
}

function showResetModal() {
    openModal('Reset System',
        '<p class="text-danger">⚠️ This will reset all system data. This action cannot be undone!</p>',
        '<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button class="btn btn-danger" onclick="closeModal();showToast(\'Reset\',\'System reset cancelled (demo mode)\',\'warning\')">Reset</button>');
}