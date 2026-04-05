// ============================================================
// EduTrack – Page Content Templates (Student & Teacher)
// ============================================================
function getPageContent(role, index) {
    const key = role + '_' + index;
    const pages = {
        // ==================== STUDENT ====================
        student_0: studentDashboard,
        student_1: studentGrades,
        student_2: studentAttendance,
        student_3: studentAnalytics,
        student_4: studentAIPlan,
        student_5: studentNotifications,
        student_6: studentProfile,
        // ==================== TEACHER ====================
        teacher_0: teacherDashboard,
        teacher_1: teacherClasses,
        teacher_2: teacherGrades,
        teacher_3: teacherAttendance,
        teacher_4: teacherStudents,
        teacher_5: teacherFeedback,
        teacher_6: teacherReports,
        teacher_7: teacherNotifs,
        teacher_8: teacherSettings,
        // ==================== PARENT ====================
        parent_0: parentDashboard,
        parent_1: parentGrades,
        parent_2: parentAttendance,
        parent_3: parentFeedback,
        parent_4: parentAlerts,
        parent_5: parentReports,
        parent_6: parentProfile,
        // ==================== ADMIN ====================
        admin_0: adminDashboard,
        admin_1: adminUsers,
        admin_2: adminReports,
        admin_3: adminAnalytics,
        admin_4: adminNotifs,
        admin_5: adminSettings
    };
    return (pages[key] || (() => '<div class="empty-state"><i class="fas fa-tools"></i><h4>Coming Soon</h4></div>'))();
}

// ---- Helpers ----
function metricCard(icon, iconClass, label, value, extra='') {
    return `<div class="col-md-6 col-xl-3"><div class="edutrack-card metric-card"><div class="metric-icon ${iconClass}"><i class="fas ${icon}"></i></div><div class="metric-info"><p>${label}</p><h3>${value}</h3>${extra}</div></div></div>`;
}

// ======================== STUDENT PAGES ========================
function studentDashboard() {
    return `
    <div class="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2">
        <div><h3 class="fw-bold mb-1">Welcome back, Alex! 👋</h3><p class="text-muted mb-0">Here's your academic overview for Semester 2.</p></div>
        <button class="btn btn-primary" onclick="downloadFile(this,'student_report.pdf')"><i class="fas fa-download me-2"></i>Download Report</button>
    </div>
    <div class="row g-4 mb-4 stagger-in">
        ${metricCard('fa-star','blue','Current GPA','3.85')}
        ${metricCard('fa-calendar-check','green','Attendance','96%')}
        ${metricCard('fa-tasks','orange','Assignments Due','4')}
        ${metricCard('fa-exclamation-circle','red','Alerts','1')}
    </div>
    <div class="row g-4 mb-4">
        <div class="col-lg-8"><div class="edutrack-card"><div class="card-header-custom"><h5 class="card-title">Performance Trend</h5><select class="form-select form-select-sm w-auto"><option>All Subjects</option><option>Mathematics</option><option>Physics</option></select></div><div class="chart-container" style="height:300px;"><canvas id="studentPerformanceChart"></canvas></div></div></div>
        <div class="col-lg-4"><div class="ai-insight h-100"><h5 class="fw-bold mb-3"><i class="fas fa-magic me-2"></i>AI Study Insights</h5>
            <div class="bg-white bg-opacity-25 rounded p-3 mb-3"><div class="d-flex gap-2"><i class="fas fa-arrow-up mt-1"></i><div><h6 class="fw-bold mb-1">Excellent Progress</h6><p class="small mb-0 opacity-75">Your Physics score increased by 15% this month.</p></div></div></div>
            <div class="bg-white bg-opacity-25 rounded p-3 mb-3"><div class="d-flex gap-2"><i class="fas fa-bullseye mt-1"></i><div><h6 class="fw-bold mb-1">Focus: Calculus</h6><p class="small mb-0 opacity-75">Slight dip in Advanced Calculus. Recommended 2hrs extra study.</p></div></div></div>
            <button class="btn btn-light w-100 rounded-pill text-primary fw-bold" onclick="switchTab('student',4,document.querySelectorAll('#dynamic-sidebar a')[4])">View Study Plan</button>
        </div></div>
    </div>
    <div class="row g-4">
        <div class="col-lg-7"><div class="edutrack-card"><h5 class="card-title mb-4">Subject Grades</h5><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Subject</th><th>Teacher</th><th>Grade</th><th>Status</th></tr></thead><tbody>
            <tr onclick="showSubjectModal('Advanced Physics',88,94,92)"><td class="fw-bold text-dark">Advanced Physics</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Dr+Smith&background=random" class="avatar-sm"> Dr. Smith</div></td><td class="fw-bold text-primary">92%</td><td><span class="badge badge-soft-success">Excellent</span></td></tr>
            <tr><td class="fw-bold text-dark">Mathematics (Calculus)</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Prof+Davis&background=random" class="avatar-sm"> Prof. Davis</div></td><td class="fw-bold text-warning">78%</td><td><span class="badge badge-soft-warning">Needs Work</span></td></tr>
            <tr><td class="fw-bold text-dark">Computer Science</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Mr+Brown&background=random" class="avatar-sm"> Mr. Brown</div></td><td class="fw-bold text-success">98%</td><td><span class="badge badge-soft-success">Outstanding</span></td></tr>
            <tr><td class="fw-bold text-dark">World Literature</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Ms+Wilson&background=random" class="avatar-sm"> Ms. Wilson</div></td><td class="fw-bold text-primary">85%</td><td><span class="badge badge-soft-primary">Good</span></td></tr>
        </tbody></table></div></div></div>
        <div class="col-lg-5"><div class="edutrack-card"><h5 class="card-title mb-4">Upcoming Deadlines</h5>
            <div class="d-flex gap-3 mb-3 border-bottom pb-3"><div class="bg-danger bg-opacity-10 text-danger rounded px-3 py-2 text-center"><div class="fw-bold fs-5">12</div><small>OCT</small></div><div><h6 class="fw-bold mb-1">Calculus Midterm</h6><p class="small text-muted mb-1">Mathematics • Prof. Davis</p><span class="badge bg-danger">Due in 2 days</span></div></div>
            <div class="d-flex gap-3 mb-3 border-bottom pb-3"><div class="bg-primary bg-opacity-10 text-primary rounded px-3 py-2 text-center"><div class="fw-bold fs-5">15</div><small>OCT</small></div><div><h6 class="fw-bold mb-1">Physics Lab Report</h6><p class="small text-muted mb-1">Physics • Dr. Smith</p><span class="badge bg-primary">Due in 5 days</span></div></div>
            <div class="d-flex gap-3"><div class="bg-secondary bg-opacity-10 text-secondary rounded px-3 py-2 text-center"><div class="fw-bold fs-5">20</div><small>OCT</small></div><div><h6 class="fw-bold mb-1">Literature Essay</h6><p class="small text-muted mb-1">World Lit • Ms. Wilson</p><span class="badge bg-secondary">Upcoming</span></div></div>
        </div></div>
    </div>`;
}

function studentGrades() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Academic Transcript</h3><p class="text-muted mb-0">Detailed view of your performance.</p></div><select class="form-select w-auto"><option>Semester 2 (Current)</option><option>Semester 1</option></select></div>
    <div class="edutrack-card mb-4"><div class="table-responsive"><table class="table table-custom mb-0"><thead><tr><th>Code</th><th>Subject</th><th>Credits</th><th>Midterm</th><th>Finals</th><th>Total</th><th>Status</th></tr></thead><tbody>
        <tr><td class="text-muted">PHY-301</td><td class="fw-bold">Advanced Physics</td><td>4.0</td><td>88%</td><td>94%</td><td class="fw-bold text-primary fs-5">92%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
        <tr><td class="text-muted">MAT-205</td><td class="fw-bold">Mathematics (Calculus)</td><td>4.0</td><td>72%</td><td>82%</td><td class="fw-bold text-warning fs-5">78%</td><td><span class="badge badge-soft-warning">Needs Work</span></td></tr>
        <tr><td class="text-muted">CSC-102</td><td class="fw-bold">Computer Science</td><td>3.0</td><td>96%</td><td>99%</td><td class="fw-bold text-success fs-5">98%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
        <tr><td class="text-muted">LIT-201</td><td class="fw-bold">World Literature</td><td>3.0</td><td>84%</td><td>86%</td><td class="fw-bold text-primary fs-5">85%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
        <tr><td class="text-muted">HIS-101</td><td class="fw-bold">World History</td><td>3.0</td><td>86%</td><td>90%</td><td class="fw-bold text-primary fs-5">88%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
        <tr><td class="text-muted">BIO-202</td><td class="fw-bold">Biology</td><td>3.0</td><td>78%</td><td>82%</td><td class="fw-bold text-primary fs-5">80%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
    </tbody></table></div></div>
    <div class="row g-4"><div class="col-md-4"><div class="edutrack-card text-center bg-primary bg-opacity-10 border-primary border-opacity-25 py-4"><h1 class="display-4 fw-bold text-primary mb-0">3.85</h1><p class="text-muted fw-medium mt-2 mb-0">Cumulative GPA</p></div></div>
    <div class="col-md-4"><div class="edutrack-card text-center bg-success bg-opacity-10 border-success border-opacity-25 py-4"><h1 class="display-4 fw-bold text-success mb-0">20</h1><p class="text-muted fw-medium mt-2 mb-0">Credits Earned</p></div></div>
    <div class="col-md-4"><div class="edutrack-card text-center bg-warning bg-opacity-10 border-warning border-opacity-25 py-4"><h1 class="display-4 fw-bold text-warning mb-0">86.8%</h1><p class="text-muted fw-medium mt-2 mb-0">Overall Average</p></div></div></div>`;
}

function studentAttendance() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Attendance Record</h3><p class="text-muted mb-0">Your daily presence and absences.</p></div><button class="btn btn-outline-primary" onclick="showToast('Calendar','Switching to calendar view','primary')"><i class="fas fa-calendar-alt me-2"></i>Calendar View</button></div>
    <div class="row g-4 mb-4">
        <div class="col-md-4"><div class="edutrack-card bg-success bg-opacity-10 border-success border-opacity-25 text-center py-4"><h1 class="display-4 fw-bold text-success mb-0">96%</h1><p class="text-muted fw-medium mt-2 mb-0">Overall Attendance</p></div></div>
        <div class="col-md-4"><div class="edutrack-card bg-warning bg-opacity-10 border-warning border-opacity-25 text-center py-4"><h1 class="display-4 fw-bold text-warning mb-0">3</h1><p class="text-muted fw-medium mt-2 mb-0">Total Absences</p></div></div>
        <div class="col-md-4"><div class="edutrack-card bg-primary bg-opacity-10 border-primary border-opacity-25 text-center py-4"><h1 class="display-4 fw-bold text-primary mb-0">2</h1><p class="text-muted fw-medium mt-2 mb-0">Late Arrivals</p></div></div>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-4">Recent Attendance Logs</h5><div class="list-group list-group-flush">
        ${attendanceRow('fa-check-circle','success','Present - Full Day','October 15, 2026','Verified','success')}
        ${attendanceRow('fa-check-circle','success','Present - Full Day','October 14, 2026','Verified','success')}
        ${attendanceRow('fa-clock','warning','Late Arrival','October 13, 2026','15 mins late','warning')}
        ${attendanceRow('fa-check-circle','success','Present - Full Day','October 12, 2026','Verified','success')}
        ${attendanceRow('fa-times-circle','danger','Absent - Medical','October 10, 2026','Excused','danger')}
        ${attendanceRow('fa-check-circle','success','Present - Full Day','October 9, 2026','Verified','success')}
        ${attendanceRow('fa-clock','warning','Late Arrival','October 7, 2026','10 mins late','warning')}
        ${attendanceRow('fa-times-circle','danger','Absent - Personal','October 4, 2026','Excused','danger')}
    </div></div>`;
}
function attendanceRow(icon,color,title,date,badge,badgeColor) {
    return `<div class="list-group-item px-0 border-0 d-flex justify-content-between align-items-center mb-2"><div class="d-flex align-items-center gap-3"><div class="bg-${color} bg-opacity-10 text-${color} p-3 rounded"><i class="fas ${icon}"></i></div><div><h6 class="mb-0 fw-bold">${title}</h6><small class="text-muted">${date}</small></div></div><span class="badge badge-soft-${badgeColor} px-3 py-2">${badge}</span></div>`;
}

function studentAnalytics() {
    return `<h3 class="fw-bold mb-4">Performance Analytics</h3>
    <div class="row g-4">
        <div class="col-lg-6"><div class="edutrack-card"><h5 class="card-title mb-4">Subject Strength Radar</h5><div class="chart-container" style="height:300px;"><canvas id="studentRadarChart"></canvas></div></div></div>
        <div class="col-lg-6"><div class="edutrack-card bg-primary text-white h-100"><h5 class="card-title text-white mb-4"><i class="fas fa-trophy me-2 text-warning"></i>Key Strengths</h5>
            <div class="mb-4"><h6 class="fw-bold">1. Logical Reasoning (Computer Science)</h6><div class="progress-custom mb-2 bg-white bg-opacity-25"><div class="progress-bar bg-warning" style="width:98%"></div></div><small class="opacity-75">Top 2% of the class.</small></div>
            <div class="mb-4"><h6 class="fw-bold">2. Analytical Thinking (Physics)</h6><div class="progress-custom mb-2 bg-white bg-opacity-25"><div class="progress-bar bg-warning" style="width:92%"></div></div><small class="opacity-75">Consistent improvement over 3 months.</small></div>
            <hr class="border-white border-opacity-25"><h5 class="card-title text-white mb-3 mt-3"><i class="fas fa-level-up-alt me-2 text-danger"></i>Areas for Growth</h5>
            <div><h6 class="fw-bold">Advanced Calculus</h6><div class="progress-custom mb-2 bg-white bg-opacity-25"><div class="progress-bar bg-danger" style="width:78%"></div></div><small class="opacity-75">Focus on integration techniques.</small></div>
        </div></div>
    </div>`;
}

function studentAIPlan() {
    return `<div class="ai-insight mb-4 text-center py-5"><i class="fas fa-robot fa-3x mb-3"></i><h2 class="fw-bold mb-2">Your Personalized AI Study Plan</h2><p class="opacity-75 mb-0 mx-auto" style="max-width:600px;">Generated based on your recent quiz scores, attendance patterns, and historical performance data.</p></div>
    <div class="row g-4"><div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Recommended Weekly Schedule</h5>
        <div class="border-start border-4 border-warning ps-4 py-2 mb-4 bg-light rounded-end"><div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2"><h6 class="fw-bold mb-0">Tuesday & Thursday (High Priority)</h6><span class="badge bg-warning text-dark">Calculus Focus</span></div><p class="text-muted mb-2">Review Chapter 4: Integration by Parts. AI analysis shows a 22% drop in accuracy.</p><div class="d-flex gap-2"><button class="btn btn-sm btn-primary" onclick="startPracticeQuiz()">Start Practice Quiz</button><button class="btn btn-sm btn-outline-secondary" onclick="showToast('Video','Loading lecture video...','primary')"><i class="fas fa-video me-1"></i>Watch Lecture</button></div></div>
        <div class="border-start border-4 border-success ps-4 py-2 mb-4 bg-light rounded-end"><div class="d-flex justify-content-between align-items-center mb-2"><h6 class="fw-bold mb-0">Wednesday</h6><span class="badge bg-success">Physics Maintenance</span></div><p class="text-muted mb-0">Spend 45 minutes on Thermodynamics lab report. You are ahead of schedule.</p></div>
        <div class="border-start border-4 border-primary ps-4 py-2 bg-light rounded-end"><div class="d-flex justify-content-between align-items-center mb-2"><h6 class="fw-bold mb-0">Friday</h6><span class="badge bg-primary">Literature Review</span></div><p class="text-muted mb-0">Read chapters 10-12 for next week's essay. Summarize key themes.</p></div>
    </div></div>
    <div class="col-lg-4"><div class="edutrack-card text-center"><h5 class="card-title mb-4">Study Goal Progress</h5><div class="d-inline-flex justify-content-center align-items-center rounded-circle border border-5 border-success text-success mb-3" style="width:120px;height:120px;"><h2 class="fw-bold mb-0">70%</h2></div><p class="text-muted fw-medium">Weekly AI goals completed</p><button class="btn btn-outline-success w-100 mt-2" onclick="logStudySession(this)"><i class="fas fa-plus me-1"></i>Log Study Session</button></div>
    <div class="edutrack-card mt-4"><h5 class="card-title mb-3">Study Resources</h5>
        <a href="#" class="d-flex align-items-center gap-3 p-2 rounded text-decoration-none text-dark mb-2 border" onclick="event.preventDefault();showToast('Opening','Loading Khan Academy...','primary')"><i class="fas fa-play-circle text-danger fs-4"></i><div><div class="fw-bold small">Khan Academy: Integration</div><small class="text-muted">Video • 24 min</small></div></a>
        <a href="#" class="d-flex align-items-center gap-3 p-2 rounded text-decoration-none text-dark border" onclick="event.preventDefault();showToast('Opening','Loading practice set...','primary')"><i class="fas fa-file-alt text-primary fs-4"></i><div><div class="fw-bold small">Calculus Practice Set</div><small class="text-muted">PDF • 15 problems</small></div></a>
    </div></div></div>`;
}

function studentNotifications() {
    return `<div class="d-flex justify-content-between align-items-center mb-4"><div><h3 class="fw-bold mb-1">Notifications</h3><p class="text-muted mb-0">Stay updated with your academic activities.</p></div><button class="btn btn-outline-primary btn-sm" onclick="showToast('Done','All notifications marked as read','success')">Mark All Read</button></div>
    <div class="edutrack-card">
        ${notifRow('fa-exclamation-triangle','warning','Low Grade Alert','Your Calculus score dropped below 80%. Consider reviewing Chapter 4.','2 hours ago',true)}
        ${notifRow('fa-calendar','primary','Assignment Deadline','Physics Lab Report is due in 3 days. Submit via the portal.','5 hours ago',true)}
        ${notifRow('fa-comment','success','Teacher Feedback','Prof. Davis left feedback on your recent quiz performance.','1 day ago',true)}
        ${notifRow('fa-bullhorn','info','School Announcement','Mid-semester break starts October 20. Classes resume October 28.','2 days ago',false)}
        ${notifRow('fa-trophy','warning','Achievement Unlocked','You scored in the Top 5% for Computer Science this semester!','3 days ago',false)}
        ${notifRow('fa-calendar-check','success','Attendance','Your attendance record for September has been verified.','1 week ago',false)}
    </div>`;
}
function notifRow(icon,color,title,desc,time,unread) {
    return `<div class="d-flex gap-3 p-3 ${unread?'bg-light':''} rounded mb-2 align-items-start" style="cursor:pointer;" onclick="this.classList.remove('bg-light');showToast('${title}','${desc.substring(0,50)}...','${color}')">
        <div class="notif-icon bg-${color} bg-opacity-10 text-${color}"><i class="fas ${icon}"></i></div>
        <div class="flex-grow-1"><div class="d-flex justify-content-between"><h6 class="fw-bold mb-1">${title}</h6>${unread?'<span class="badge bg-primary rounded-pill">New</span>':''}</div><p class="text-muted small mb-1">${desc}</p><small class="text-muted">${time}</small></div></div>`;
}

function studentProfile() {
    return `<h3 class="fw-bold mb-4">Profile & Settings</h3>
    <div class="row g-4"><div class="col-lg-4"><div class="edutrack-card text-center">
        <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=4f46e5&color=fff&size=128" class="rounded-circle mb-3 border border-4 border-white shadow" width="100">
        <h4 class="fw-bold mb-1">Alex Johnson</h4><p class="text-muted mb-3">Grade 10 • Section A</p>
        <div class="d-flex justify-content-center gap-4 mb-3"><div class="text-center"><h5 class="fw-bold text-primary mb-0">3.85</h5><small class="text-muted">GPA</small></div><div class="text-center"><h5 class="fw-bold text-success mb-0">96%</h5><small class="text-muted">Attendance</small></div></div>
        <button class="btn btn-outline-primary w-100" onclick="changePhoto(this)"><i class="fas fa-camera me-2"></i>Change Photo</button>
    </div></div>
    <div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Personal Information</h5>
        <form onsubmit="event.preventDefault();saveForm(this.querySelector('button[type=submit]'),'Profile saved')">
            <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Full Name</label><input type="text" class="form-control" value="Alex Johnson"></div>
                <div class="col-md-6"><label class="form-label">Email</label><input type="email" class="form-control" value="student@edutrack.edu"></div>
                <div class="col-md-6"><label class="form-label">Phone</label><input type="tel" class="form-control" value="+1 (555) 123-4567"></div>
                <div class="col-md-6"><label class="form-label">Student ID</label><input type="text" class="form-control" value="STU-2026-0142" disabled></div>
                <div class="col-md-6"><label class="form-label">Date of Birth</label><input type="date" class="form-control" value="2010-03-15"></div>
                <div class="col-md-6"><label class="form-label">Guardian</label><input type="text" class="form-control" value="Mr. & Mrs. Johnson"></div>
            </div>
            <hr class="my-4"><h5 class="card-title mb-3">Preferences</h5>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Email notifications</label></div>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Grade alerts</label></div>
            <div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox"><label class="form-check-label">SMS notifications</label></div>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save me-2"></i>Save Changes</button>
        </form>
    </div></div></div>`;
}

// ======================== TEACHER PAGES ========================
function teacherDashboard() {
    return `<div class="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Teacher Dashboard</h3><p class="text-muted mb-0">Overview of your classes and student performance.</p></div><button class="btn btn-primary" onclick="showNewAssignmentModal()"><i class="fas fa-plus me-2"></i>New Assignment</button></div>
    <div class="row g-4 mb-4 stagger-in">
        ${metricCard('fa-users','blue','Total Students','142')}
        ${metricCard('fa-chart-bar','green','Class Average','84%')}
        ${metricCard('fa-exclamation-triangle','red','At-Risk Students','5')}
        ${metricCard('fa-clock','orange','Pending Grades','28')}
    </div>
    <div class="row g-4">
        <div class="col-lg-7"><div class="edutrack-card"><div class="card-header-custom"><h5 class="card-title">Class Performance</h5></div><div class="chart-container" style="height:300px;"><canvas id="teacherPerformanceChart"></canvas></div></div></div>
        <div class="col-lg-5"><div class="edutrack-card border-danger border-opacity-25"><div class="card-header-custom"><h5 class="card-title text-danger"><i class="fas fa-exclamation-circle me-2"></i>Attention Required</h5></div>
            <div class="list-group list-group-flush">
                ${atRiskRow('Sam Carter','Failed last 2 quizzes (Math 101)','Message')}
                ${atRiskRow('Mia Wong','Absent 3 consecutive days','Message Parent')}
                ${atRiskRow('Jake Miller','GPA dropped below 2.0','Schedule Meeting')}
            </div>
        </div></div>
        <div class="col-12"><div class="edutrack-card"><div class="card-header-custom"><h5 class="card-title">Recent Submissions</h5><button class="btn btn-sm btn-light" onclick="switchTab('teacher',2,document.querySelectorAll('#dynamic-sidebar a')[2])">View All</button></div><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Student</th><th>Assignment</th><th>Class</th><th>Date</th><th>Action</th></tr></thead><tbody>
            <tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=John+Doe&background=random" class="avatar-sm"> John Doe</div></td><td class="fw-medium">Algebra Final</td><td>Math 101</td><td>Today, 10:30 AM</td><td><button class="btn btn-sm btn-primary" onclick="switchTab('teacher',2,document.querySelectorAll('#dynamic-sidebar a')[2])">Grade</button></td></tr>
            <tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Emma+Stone&background=random" class="avatar-sm"> Emma Stone</div></td><td class="fw-medium">Essay: The Great Gatsby</td><td>Lit 202</td><td>Yesterday, 4:15 PM</td><td><button class="btn btn-sm btn-primary" onclick="switchTab('teacher',2,document.querySelectorAll('#dynamic-sidebar a')[2])">Grade</button></td></tr>
        </tbody></table></div></div></div>
    </div>`;
}
function atRiskRow(name,issue,action) {
    return `<div class="list-group-item px-0 border-0 mb-2"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center gap-3"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random" class="avatar-sm"><div><h6 class="mb-0 fw-bold">${name}</h6><small class="text-danger">${issue}</small></div></div><button class="btn btn-sm btn-outline-primary" onclick="showToast('Sent','${action} sent for ${name}','success')">${action}</button></div></div>`;
}

function teacherClasses() {
    return `<h3 class="fw-bold mb-4">My Classes</h3><div class="row g-4">
        ${classCard('Math 101','Algebra & Pre-Calculus',35,'#4f46e5',75)}
        ${classCard('Physics Adv','Advanced Physics',28,'#0ea5e9',82)}
        ${classCard('Comp Sci 102','Intro to Programming',42,'#10b981',91)}
        ${classCard('Literature 202','World Literature',37,'#f59e0b',85)}
    </div>`;
}
function classCard(name,desc,students,color,avg) {
    return `<div class="col-md-6"><div class="edutrack-card"><div class="d-flex justify-content-between align-items-start mb-3"><div><h5 class="fw-bold mb-1">${name}</h5><p class="text-muted small mb-0">${desc}</p></div><span class="badge rounded-pill" style="background:${color}20;color:${color};">${students} students</span></div>
    <div class="d-flex justify-content-between mb-2 small"><span class="text-muted">Class Average</span><span class="fw-bold">${avg}%</span></div><div class="progress-custom mb-3"><div class="progress-bar" style="width:${avg}%;background:${color};"></div></div>
    <div class="d-flex gap-2"><button class="btn btn-sm btn-outline-primary" onclick="switchTab('teacher',4,document.querySelectorAll('#dynamic-sidebar a')[4])"><i class="fas fa-users me-1"></i>Students</button><button class="btn btn-sm btn-outline-secondary" onclick="switchTab('teacher',2,document.querySelectorAll('#dynamic-sidebar a')[2])"><i class="fas fa-edit me-1"></i>Grades</button></div></div></div>`;
}

function teacherGrades() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Manage Grades</h3><p class="text-muted mb-0">Enter and update student grades.</p></div><div class="d-flex gap-2"><select class="form-select w-auto"><option>Math 101</option><option>Physics Adv</option><option>Comp Sci 102</option></select><button class="btn btn-success" onclick="saveAllGrades(this)"><i class="fas fa-save me-2"></i>Save All</button></div></div>
    <div class="edutrack-card"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Student</th><th>Quiz 1</th><th>Quiz 2</th><th>Midterm</th><th>Project</th><th>Total</th><th>Status</th></tr></thead><tbody>
        ${gradeRow('Alex Johnson',88,82,78,92,85,'badge-soft-primary')}
        ${gradeRow('Emma Stone',95,90,88,94,92,'badge-soft-success')}
        ${gradeRow('John Doe',72,68,65,78,71,'badge-soft-warning')}
        ${gradeRow('Sam Carter',55,50,48,62,54,'badge-soft-danger')}
        ${gradeRow('Lily Chen',90,92,95,88,91,'badge-soft-success')}
        ${gradeRow('Jake Miller',60,58,55,70,61,'badge-soft-danger')}
    </tbody></table></div></div>`;
}
function gradeRow(name,q1,q2,mid,proj,total,badge) {
    const status = total>=90?'Excellent':total>=80?'Good':total>=70?'Average':'At Risk';
    return `<tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random" class="avatar-sm"> ${name}</div></td><td><input class="grade-input" value="${q1}" onchange="showToast('Updated','Grade updated for ${name}','success')"></td><td><input class="grade-input" value="${q2}"></td><td><input class="grade-input" value="${mid}"></td><td><input class="grade-input" value="${proj}"></td><td class="fw-bold fs-5">${total}%</td><td><span class="badge ${badge}">${status}</span></td></tr>`;
}

function teacherAttendance() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Attendance</h3><p class="text-muted mb-0">Record daily student attendance.</p></div><div class="d-flex gap-2"><select class="form-select w-auto"><option>Math 101</option><option>Physics Adv</option></select><input type="date" class="form-control w-auto" value="2026-10-15"><button class="btn btn-success" onclick="saveAttendance(this)"><i class="fas fa-save me-2"></i>Save</button></div></div>
    <div class="edutrack-card"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>#</th><th>Student Name</th><th>Present</th><th>Late</th><th>Absent</th><th>Notes</th></tr></thead><tbody>
        ${attendRow(1,'Alex Johnson','present')}${attendRow(2,'Emma Stone','present')}${attendRow(3,'John Doe','late')}${attendRow(4,'Sam Carter','absent')}${attendRow(5,'Lily Chen','present')}${attendRow(6,'Jake Miller','present')}${attendRow(7,'Mia Wong','absent')}${attendRow(8,'Tom Wilson','present')}
    </tbody></table></div></div>`;
}
function attendRow(n,name,status) {
    return `<tr><td>${n}</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random" class="avatar-sm">${name}</div></td><td><input type="radio" name="att${n}" class="attendance-check" ${status==='present'?'checked':''}></td><td><input type="radio" name="att${n}" class="attendance-check" ${status==='late'?'checked':''}></td><td><input type="radio" name="att${n}" class="attendance-check" ${status==='absent'?'checked':''}></td><td><input class="form-control form-control-sm" placeholder="Optional note" ${status==='absent'?'value="No notification"':''}></td></tr>`;
}

function teacherStudents() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Student Profiles</h3><p class="text-muted mb-0">View and manage student information.</p></div><input type="text" class="form-control w-auto" placeholder="Search students..." style="max-width:250px;"></div>
    <div class="row g-4">
        ${studentCard('Alex Johnson',92,'3.85','96%','Excellent')}
        ${studentCard('Emma Stone',95,'3.92','98%','Outstanding')}
        ${studentCard('John Doe',71,'2.85','90%','Average')}
        ${studentCard('Sam Carter',54,'1.90','78%','At Risk')}
        ${studentCard('Lily Chen',91,'3.80','97%','Excellent')}
        ${studentCard('Jake Miller',61,'2.10','82%','At Risk')}
        ${studentCard('Mia Wong',82,'3.20','85%','Good')}
        ${studentCard('Tom Wilson',88,'3.50','94%','Good')}
    </div>`;
}
function studentCard(name,grade,gpa,att,status) {
    const color = grade>=90?'success':grade>=80?'primary':grade>=70?'warning':'danger';
    return `<div class="col-md-6 col-xl-3"><div class="edutrack-card text-center"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=80" class="rounded-circle mb-2"><h6 class="fw-bold mb-0">${name}</h6><span class="badge badge-soft-${color} mb-2">${status}</span><div class="row g-2 text-center small mb-3"><div class="col-4"><div class="fw-bold text-${color}">${grade}%</div><div class="text-muted" style="font-size:0.7rem;">Grade</div></div><div class="col-4"><div class="fw-bold">${gpa}</div><div class="text-muted" style="font-size:0.7rem;">GPA</div></div><div class="col-4"><div class="fw-bold text-success">${att}</div><div class="text-muted" style="font-size:0.7rem;">Attend</div></div></div><button class="btn btn-sm btn-outline-primary w-100" onclick="showStudentProfileModal('${name}',${grade},'${gpa}','${att}','${status}','${color}')">View Profile</button></div></div>`;
}

function teacherFeedback() {
    return `<h3 class="fw-bold mb-4">Student Feedback</h3>
    <div class="edutrack-card mb-4"><h5 class="card-title mb-3">Send Feedback</h5>
        <form onsubmit="event.preventDefault();sendStudentFeedback(this);">
            <div class="row g-3"><div class="col-md-6"><label class="form-label">Student</label><select class="form-select"><option>Alex Johnson</option><option>Emma Stone</option><option>John Doe</option><option>Sam Carter</option></select></div>
            <div class="col-md-6"><label class="form-label">Category</label><select class="form-select"><option>Academic Performance</option><option>Behavior</option><option>Attendance</option><option>General</option></select></div>
            <div class="col-12"><label class="form-label">Feedback Message</label><textarea class="form-control" rows="4" placeholder="Write your feedback here..." required></textarea></div></div>
            <button type="submit" class="btn btn-primary mt-3"><i class="fas fa-paper-plane me-2"></i>Send Feedback</button>
        </form>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-3">Recent Feedback Sent</h5>
        ${feedbackItem('Alex Johnson','Math performance improving. Keep reviewing Chapter 4 for stronger integration skills.','2 days ago','primary')}
        ${feedbackItem('Sam Carter','Missed multiple quizzes. Please schedule a meeting to discuss study strategies.','3 days ago','danger')}
        ${feedbackItem('Emma Stone','Outstanding work on the final project. Great analytical thinking!','1 week ago','success')}
    </div>`;
}
function feedbackItem(name,text,time,color) {
    return `<div class="border-start border-4 border-${color} ps-3 mb-3 bg-light p-3 rounded-end"><div class="d-flex justify-content-between mb-1"><h6 class="fw-bold mb-0">${name}</h6><small class="text-muted">${time}</small></div><p class="mb-0 text-muted small">${text}</p></div>`;
}

function teacherReports() {
    return `<h3 class="fw-bold mb-4">Reports</h3>
    <div class="row g-4 mb-4">
        <div class="col-md-4"><div class="edutrack-card text-center py-4 h-100"><i class="fas fa-file-pdf text-danger fs-1 mb-3"></i><h5 class="fw-bold">Class Report</h5><p class="text-muted small">Generate performance summary for your class.</p><button class="btn btn-outline-danger" onclick="showToast('Generated','Class report PDF is downloading...','success')"><i class="fas fa-download me-2"></i>Generate PDF</button></div></div>
        <div class="col-md-4"><div class="edutrack-card text-center py-4 h-100"><i class="fas fa-file-excel text-success fs-1 mb-3"></i><h5 class="fw-bold">Grade Export</h5><p class="text-muted small">Export all grades to spreadsheet format.</p><button class="btn btn-outline-success" onclick="showToast('Exported','Grade spreadsheet is downloading...','success')"><i class="fas fa-download me-2"></i>Export Excel</button></div></div>
        <div class="col-md-4"><div class="edutrack-card text-center py-4 h-100"><i class="fas fa-chart-bar text-primary fs-1 mb-3"></i><h5 class="fw-bold">Analytics Report</h5><p class="text-muted small">Detailed analytics with charts and trends.</p><button class="btn btn-outline-primary" onclick="showToast('Generated','Analytics report is compiling...','success')"><i class="fas fa-download me-2"></i>Generate</button></div></div>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-3">Generated Reports History</h5><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Report</th><th>Class</th><th>Date</th><th>Type</th><th>Action</th></tr></thead><tbody>
        <tr><td class="fw-bold">Term 2 Class Performance</td><td>Math 101</td><td>Oct 10, 2026</td><td><span class="badge badge-soft-danger">PDF</span></td><td><button class="btn btn-sm btn-light" onclick="showToast('Opening','Loading report...','primary')"><i class="fas fa-eye"></i></button></td></tr>
        <tr><td class="fw-bold">Mid-semester Grades</td><td>All Classes</td><td>Oct 5, 2026</td><td><span class="badge badge-soft-success">Excel</span></td><td><button class="btn btn-sm btn-light" onclick="showToast('Opening','Loading report...','primary')"><i class="fas fa-eye"></i></button></td></tr>
    </tbody></table></div></div>`;
}

function teacherNotifs() { return studentNotifications().replace('academic activities','teaching activities'); }

function teacherSettings() {
    return `<h3 class="fw-bold mb-4">Settings</h3>
    <div class="row g-4"><div class="col-lg-4"><div class="edutrack-card text-center"><img src="https://ui-avatars.com/api/?name=Prof+Davis&background=0ea5e9&color=fff&size=128" class="rounded-circle mb-3 shadow" width="100"><h4 class="fw-bold mb-1">Prof. Davis</h4><p class="text-muted">Mathematics Department</p><button class="btn btn-outline-primary w-100" onclick="changePhoto(this)"><i class="fas fa-camera me-2"></i>Change Photo</button></div></div>
    <div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Account Settings</h5>
        <form onsubmit="event.preventDefault();saveForm(this.querySelector('button[type=submit]'),'Settings saved')">
            <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Full Name</label><input class="form-control" value="Prof. Davis"></div>
                <div class="col-md-6"><label class="form-label">Email</label><input class="form-control" value="teacher@edutrack.edu"></div>
                <div class="col-md-6"><label class="form-label">Department</label><input class="form-control" value="Mathematics"></div>
                <div class="col-md-6"><label class="form-label">Employee ID</label><input class="form-control" value="TCH-2026-045" disabled></div>
            </div>
            <hr class="my-4"><h5 class="card-title mb-3">Notification Preferences</h5>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">New submission alerts</label></div>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">At-risk student alerts</label></div>
            <div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox"><label class="form-check-label">Weekly summary email</label></div>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save me-2"></i>Save Changes</button>
        </form>
    </div></div></div>`;
}
