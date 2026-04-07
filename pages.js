// ============================================================
// EduTrack - Page Content Templates (Student & Teacher)
// ============================================================
function getPageContent(role, index) {
    const key = role + '_' + index;
    const pages = {
        student_0: studentDashboard,
        student_1: studentGrades,
        student_2: studentAttendance,
        student_3: studentAnalytics,
        student_4: studentAIPlan,
        student_5: studentNotifications,
        student_6: studentMessages,
        student_7: studentProfile,
        teacher_0: teacherDashboard,
        teacher_1: teacherGrades,
        teacher_2: teacherAttendance,
        teacher_3: teacherStudents,
        teacher_4: teacherFeedback,
        teacher_5: teacherMessages,
        teacher_6: teacherNotifs,
        teacher_7: teacherReports,
        teacher_8: teacherSettings,
        parent_0: parentDashboard,
        parent_1: parentGrades,
        parent_2: parentAttendance,
        parent_3: parentFeedback,
        parent_4: parentAlerts,
        parent_5: parentMessages,
        parent_6: parentReports,
        parent_7: parentProfile,
        admin_0: adminDashboard,
        admin_1: adminStudentsFlow,
        admin_2: adminTeachersFlow,
        admin_3: adminParentsFlow,
        admin_4: adminClassesFlow,
        admin_5: adminSubjectsFlow,
        admin_6: adminGradesFlow,
        admin_7: adminAttendanceFlow,
        admin_8: adminReportsHub,
        admin_9: adminAnnouncements,
        admin_10: adminSettings
    };
    return (pages[key] || (() => '<div class="empty-state"><i class="fas fa-tools"></i><h4>Coming Soon</h4></div>'))();
}

function metricCard(icon, iconClass, label, value, extra='') {
    return `<div class="col-md-6 col-xl-3"><div class="edutrack-card metric-card h-100"><div class="metric-icon ${iconClass}"><i class="fas ${icon}"></i></div><div class="metric-info"><p class="metric-label">${label}</p><h3>${value}</h3>${extra}</div></div></div>`;
}

function studentDashboard() {
    return `
    <div class="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2">
        <div><h3 class="fw-bold mb-1">Welcome back, Venus!</h3><p class="text-muted mb-0">Here's your academic overview for Semester 2.</p></div>
        <button class="btn btn-primary" onclick="downloadFile(this,'student_report.pdf')"><i class="fas fa-download me-2"></i>Download Report</button>
    </div>
    <div class="row g-4 mb-4 stagger-in">
        ${metricCard('fa-star','blue','Current GPA','3.88')}
        ${metricCard('fa-calendar-check','green','Attendance','97%')}
        ${metricCard('fa-tasks','orange','Assignments Due','4')}
        ${metricCard('fa-exclamation-circle','red','Alerts','1')}
    </div>
    <div class="row g-4 mb-4">
        <div class="col-lg-8"><div class="edutrack-card"><div class="card-header-custom"><h5 class="card-title">Performance Trend</h5><select class="form-select form-select-sm w-auto"><option>All Subjects</option><option>Human Computer Interaction</option><option>Database Systems</option></select></div><div class="chart-container" style="height:300px;"><canvas id="studentPerformanceChart"></canvas></div></div></div>
        <div class="col-lg-4"><div class="ai-insight h-100"><h5 class="fw-bold mb-3"><i class="fas fa-magic me-2"></i>AI Study Insights</h5>
            <div class="bg-white bg-opacity-25 rounded p-3 mb-3"><div class="d-flex gap-2"><i class="fas fa-arrow-up mt-1"></i><div><h6 class="fw-bold mb-1">Excellent Progress</h6><p class="small mb-0 opacity-75">Your Web Systems and Technologies score improved by 6% this month.</p></div></div></div>
            <div class="bg-white bg-opacity-25 rounded p-3 mb-3"><div class="d-flex gap-2"><i class="fas fa-bullseye mt-1"></i><div><h6 class="fw-bold mb-1">Focus: Database Systems</h6><p class="small mb-0 opacity-75">A slight dip in query optimization suggests an extra 2 hours of review this week.</p></div></div></div>
            <button class="btn btn-light w-100 rounded-pill text-primary fw-bold" onclick="switchTab('student',4,document.querySelectorAll('#dynamic-sidebar a')[4])">View Study Plan</button>
        </div></div>
    </div>
    <div class="row g-4">
        <div class="col-lg-7"><div class="edutrack-card"><h5 class="card-title mb-4">Subject Grades</h5><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Subject</th><th>Teacher</th><th>Grade</th><th>Status</th></tr></thead><tbody>
            <tr onclick="showSubjectModal('Human Computer Interaction',91,94,93)"><td class="fw-bold text-dark">Human Computer Interaction</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Prof+Aileen+M+Dela+Cruz&background=random" class="avatar-sm"> Prof. Aileen M. Dela Cruz</div></td><td class="fw-bold text-primary">93%</td><td><span class="badge badge-soft-success">Excellent</span></td></tr>
            <tr><td class="fw-bold text-dark">Database Systems</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Dr+Carlo+T+Ramirez&background=random" class="avatar-sm"> Dr. Carlo T. Ramirez</div></td><td class="fw-bold text-primary">86%</td><td><span class="badge badge-soft-primary">Good</span></td></tr>
            <tr><td class="fw-bold text-dark">Web Systems and Technologies</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Ms+Joanna+B+Morales&background=random" class="avatar-sm"> Ms. Joanna B. Morales</div></td><td class="fw-bold text-success">95%</td><td><span class="badge badge-soft-success">Outstanding</span></td></tr>
            <tr><td class="fw-bold text-dark">Information Assurance and Security</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Prof+Elaine+S+Fernandez&background=random" class="avatar-sm"> Prof. Elaine S. Fernandez</div></td><td class="fw-bold text-success">97%</td><td><span class="badge badge-soft-success">Outstanding</span></td></tr>
        </tbody></table></div></div></div>
        <div class="col-lg-5"><div class="edutrack-card"><h5 class="card-title mb-4">Upcoming Deadlines</h5>
            <div class="d-flex gap-3 mb-3 border-bottom pb-3"><div class="deadline-date-chip deadline-date-danger"><div class="fw-bold fs-5">08</div><small>APR</small></div><div><h6 class="fw-bold mb-1">Persona Mapping Case Study</h6><p class="small text-muted mb-1">Human Computer Interaction - Prof. Aileen M. Dela Cruz</p><span class="badge bg-danger">Due in 2 days</span></div></div>
            <div class="d-flex gap-3 mb-3 border-bottom pb-3"><div class="deadline-date-chip deadline-date-primary"><div class="fw-bold fs-5">10</div><small>APR</small></div><div><h6 class="fw-bold mb-1">SQL Optimization Challenge</h6><p class="small text-muted mb-1">Database Systems - Dr. Carlo T. Ramirez</p><span class="badge bg-primary">Due in 4 days</span></div></div>
            <div class="d-flex gap-3"><div class="deadline-date-chip deadline-date-secondary"><div class="fw-bold fs-5">12</div><small>APR</small></div><div><h6 class="fw-bold mb-1">Service Blueprint Pitch</h6><p class="small text-muted mb-1">Systems Integration and Architecture - Ms. Hazel P. Dimaano</p><span class="badge bg-secondary">Upcoming</span></div></div>
        </div></div>
    </div>`;
}

function studentGrades() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Academic Transcript</h3><p class="text-muted mb-0">Detailed view of your performance.</p></div><select class="form-select w-auto"><option>Semester 2 (Current)</option><option>Semester 1</option></select></div>
    <div class="edutrack-card mb-4"><div class="table-responsive"><table class="table table-custom mb-0"><thead><tr><th>Code</th><th>Subject</th><th>Credits</th><th>Midterm</th><th>Finals</th><th>Total</th><th>Status</th></tr></thead><tbody>
        <tr><td class="text-muted">HCI-201</td><td class="fw-bold">Human Computer Interaction</td><td>3.0</td><td>91%</td><td>94%</td><td class="fw-bold text-primary fs-5">93%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
        <tr><td class="text-muted">NET-220</td><td class="fw-bold">Network Administration</td><td>3.0</td><td>85%</td><td>91%</td><td class="fw-bold text-primary fs-5">88%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
        <tr><td class="text-muted">WEB-210</td><td class="fw-bold">Web Systems and Technologies</td><td>3.0</td><td>93%</td><td>96%</td><td class="fw-bold text-success fs-5">95%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
        <tr><td class="text-muted">DBS-230</td><td class="fw-bold">Database Systems</td><td>3.0</td><td>84%</td><td>88%</td><td class="fw-bold text-primary fs-5">86%</td><td><span class="badge badge-soft-primary">Passed</span></td></tr>
        <tr><td class="text-muted">SIA-240</td><td class="fw-bold">Systems Integration and Architecture</td><td>3.0</td><td>89%</td><td>92%</td><td class="fw-bold text-primary fs-5">91%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
        <tr><td class="text-muted">IAS-250</td><td class="fw-bold">Information Assurance and Security</td><td>3.0</td><td>95%</td><td>98%</td><td class="fw-bold text-success fs-5">97%</td><td><span class="badge badge-soft-success">Passed</span></td></tr>
    </tbody></table></div></div>
    <div class="row g-4"><div class="col-md-4"><div class="edutrack-card stat-soft-card stat-soft-card-primary text-center py-4"><h1 class="display-4 fw-bold stat-soft-value stat-soft-value-primary mb-0">3.88</h1><p class="text-muted fw-medium mt-2 mb-0">Cumulative GPA</p></div></div>
    <div class="col-md-4"><div class="edutrack-card stat-soft-card stat-soft-card-success text-center py-4"><h1 class="display-4 fw-bold stat-soft-value stat-soft-value-success mb-0">18</h1><p class="text-muted fw-medium mt-2 mb-0">Credits Earned</p></div></div>
    <div class="col-md-4"><div class="edutrack-card stat-soft-card stat-soft-card-warning text-center py-4"><h1 class="display-4 fw-bold stat-soft-value stat-soft-value-warning mb-0">91.7%</h1><p class="text-muted fw-medium mt-2 mb-0">Overall Average</p></div></div></div>`;
}

function studentAttendance() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Attendance Record</h3><p class="text-muted mb-0">Your daily presence and absences.</p></div><button class="btn btn-outline-primary" onclick="showToast('Calendar','Switching to calendar view','primary')"><i class="fas fa-calendar-alt me-2"></i>Calendar View</button></div>
    <div class="row g-4 mb-4">
        <div class="col-md-4"><div class="edutrack-card stat-soft-card stat-soft-card-success text-center py-4"><h1 class="display-4 fw-bold stat-soft-value stat-soft-value-success mb-0">97%</h1><p class="text-muted fw-medium mt-2 mb-0">Overall Attendance</p></div></div>
        <div class="col-md-4"><div class="edutrack-card stat-soft-card stat-soft-card-warning text-center py-4"><h1 class="display-4 fw-bold stat-soft-value stat-soft-value-warning mb-0">2</h1><p class="text-muted fw-medium mt-2 mb-0">Total Absences</p></div></div>
        <div class="col-md-4"><div class="edutrack-card stat-soft-card stat-soft-card-primary text-center py-4"><h1 class="display-4 fw-bold stat-soft-value stat-soft-value-primary mb-0">1</h1><p class="text-muted fw-medium mt-2 mb-0">Late Arrivals</p></div></div>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-4">Recent Attendance Logs</h5><div class="list-group list-group-flush">
        ${attendanceRow('fa-check-circle','success','Present - Full Day','April 5, 2026','Verified','success')}
        ${attendanceRow('fa-check-circle','success','Present - Full Day','April 4, 2026','Verified','success')}
        ${attendanceRow('fa-clock','warning','Late Arrival','April 3, 2026','12 mins late','warning')}
        ${attendanceRow('fa-check-circle','success','Present - Full Day','April 2, 2026','Verified','success')}
        ${attendanceRow('fa-times-circle','danger','Absent - Medical','April 1, 2026','Excused','danger')}
        ${attendanceRow('fa-check-circle','success','Present - Full Day','March 31, 2026','Verified','success')}
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
            <div class="mb-4"><h6 class="fw-bold">1. Secure Systems Thinking (Information Assurance and Security)</h6><div class="progress-custom mb-2 bg-white bg-opacity-25"><div class="progress-bar bg-warning" style="width:97%"></div></div><small class="opacity-75">Top 5% of the section.</small></div>
            <div class="mb-4"><h6 class="fw-bold">2. Frontend Delivery (Web Systems and Technologies)</h6><div class="progress-custom mb-2 bg-white bg-opacity-25"><div class="progress-bar bg-warning" style="width:95%"></div></div><small class="opacity-75">Consistent improvement across the last 3 checks.</small></div>
            <hr class="border-white border-opacity-25"><h5 class="card-title text-white mb-3 mt-3"><i class="fas fa-level-up-alt me-2 text-danger"></i>Areas for Growth</h5>
            <div><h6 class="fw-bold">Database Systems</h6><div class="progress-custom mb-2 bg-white bg-opacity-25"><div class="progress-bar bg-danger" style="width:86%"></div></div><small class="opacity-75">Focus on indexing strategy and complex joins.</small></div>
        </div></div>
    </div>`;
}

function studentAIPlan() {
    return `<div class="ai-insight mb-4 text-center py-5"><i class="fas fa-robot fa-3x mb-3"></i><h2 class="fw-bold mb-2">Your Personalized AI Study Plan</h2><p class="opacity-75 mb-0 mx-auto" style="max-width:600px;">Generated based on your recent quiz scores, attendance patterns, and historical performance data.</p></div>
    <div class="row g-4"><div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Recommended Weekly Schedule</h5>
        <div class="border-start border-4 border-warning ps-4 py-2 mb-4 bg-light rounded-end"><div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2"><h6 class="fw-bold mb-0">Tuesday & Thursday (High Priority)</h6><span class="badge bg-warning text-dark">Database Systems Focus</span></div><p class="text-muted mb-2">Review indexing strategies and query optimization. AI analysis shows these topics need the most reinforcement.</p><div class="d-flex gap-2"><button class="btn btn-sm btn-primary" onclick="startPracticeQuiz()">Start Practice Quiz</button><button class="btn btn-sm btn-outline-secondary" onclick="showToast('Video','Loading lecture video...','primary')"><i class="fas fa-video me-1"></i>Watch Lecture</button></div></div>
        <div class="border-start border-4 border-success ps-4 py-2 mb-4 bg-light rounded-end"><div class="d-flex justify-content-between align-items-center mb-2"><h6 class="fw-bold mb-0">Wednesday</h6><span class="badge bg-success">Network Administration Maintenance</span></div><p class="text-muted mb-0">Spend 45 minutes on VLAN and failover review. You are progressing well in hands-on labs.</p></div>
        <div class="border-start border-4 border-primary ps-4 py-2 bg-light rounded-end"><div class="d-flex justify-content-between align-items-center mb-2"><h6 class="fw-bold mb-0">Friday</h6><span class="badge bg-primary">Human Computer Interaction Review</span></div><p class="text-muted mb-0">Refine your persona map and summarize the strongest user pain points before the next consultation.</p></div>
    </div></div>
    <div class="col-lg-4"><div class="edutrack-card text-center"><h5 class="card-title mb-4">Study Goal Progress</h5><div class="d-inline-flex justify-content-center align-items-center rounded-circle border border-5 border-success text-success mb-3" style="width:120px;height:120px;"><h2 class="fw-bold mb-0">70%</h2></div><p class="text-muted fw-medium">Weekly AI goals completed</p><button class="btn btn-outline-success w-100 mt-2" onclick="logStudySession(this)"><i class="fas fa-plus me-1"></i>Log Study Session</button></div>
    <div class="edutrack-card mt-4"><h5 class="card-title mb-3">Study Resources</h5>
        <a href="#" class="d-flex align-items-center gap-3 p-2 rounded text-decoration-none text-dark mb-2 border" onclick="event.preventDefault();showToast('Opening','Loading HCI walkthrough...','primary')"><i class="fas fa-play-circle text-danger fs-4"></i><div><div class="fw-bold small">HCI Persona Mapping Walkthrough</div><small class="text-muted">Video - 18 min</small></div></a>
        <a href="#" class="d-flex align-items-center gap-3 p-2 rounded text-decoration-none text-dark border" onclick="event.preventDefault();showToast('Opening','Loading practice set...','primary')"><i class="fas fa-file-alt text-primary fs-4"></i><div><div class="fw-bold small">Database Systems Practice Set</div><small class="text-muted">PDF - 12 problems</small></div></a>
    </div></div></div>`;
}

function studentNotifications() {
    return `<div class="d-flex justify-content-between align-items-center mb-4"><div><h3 class="fw-bold mb-1">Notifications</h3><p class="text-muted mb-0">Stay updated with your academic activities.</p></div><button class="btn btn-outline-primary btn-sm" onclick="showToast('Done','All notifications marked as read','success')">Mark All Read</button></div>
    <div class="edutrack-card">
        ${notifRow('fa-exclamation-triangle','warning','Study Alert','Your Database Systems score is below your target. Review joins and indexing this week.','2 hours ago',true)}
        ${notifRow('fa-calendar-days','primary','Assignment Deadline','Persona Mapping Case Study is due in 2 days. Submit via the portal.','5 hours ago',true)}
        ${notifRow('fa-comment','success','Teacher Feedback','Dr. Carlo T. Ramirez left feedback on your latest SQL challenge.','1 day ago',true)}
        ${notifRow('fa-bullhorn','info','School Announcement','Mid-semester break starts October 20. Classes resume October 28.','2 days ago',false)}
        ${notifRow('fa-trophy','warning','Achievement Unlocked','You scored in the Top 5% for Web Systems and Technologies this semester!','3 days ago',false)}
        ${notifRow('fa-calendar-check','success','Attendance','Your attendance record for September has been verified.','1 week ago',false)}
    </div>`;
}
function notifRow(icon,color,title,desc,time,unread) {
    return `<div class="d-flex gap-3 p-3 ${unread?'bg-light':''} rounded mb-2 align-items-start" style="cursor:pointer;" onclick="this.classList.remove('bg-light');showToast('${title}','${desc.substring(0,50)}...','${color}')">
        <div class="notif-icon bg-${color} bg-opacity-10 text-${color}"><i class="fas ${icon}"></i></div>
        <div class="flex-grow-1"><div class="d-flex justify-content-between"><h6 class="fw-bold mb-1">${title}</h6>${unread?'<span class="badge bg-primary rounded-pill">New</span>':''}</div><p class="text-muted small mb-1">${desc}</p><small class="text-muted">${time}</small></div></div>`;
}

function studentMessages() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div><h3 class="fw-bold mb-1">Messages</h3><p class="text-muted mb-0">Your direct communication feed with teachers and the school office.</p></div>
        <button class="btn btn-primary" onclick="showToast('Compose','Message composer opened in demo mode.','primary')"><i class="fas fa-pen me-2"></i>Compose</button>
    </div>
    <div class="row g-4">
        <div class="col-lg-7">
            <div class="edutrack-card">
                <h5 class="card-title mb-3">Inbox</h5>
                <div class="list-group list-group-flush">
                    ${DATA.messages.map(msg => `
                        <button type="button" class="list-group-item list-group-item-action border-0 px-0 py-3 ${msg.unread ? 'bg-light' : ''}" onclick="showToast('${msg.from}','Opening message thread...','primary')">
                            <div class="d-flex gap-3 align-items-start">
                                <div class="avatar-sm rounded-circle d-flex align-items-center justify-content-center text-white bg-${msg.color}">${msg.avatar}</div>
                                <div class="flex-grow-1">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h6 class="mb-1 fw-bold">${msg.from}</h6>
                                        <small class="text-muted">${msg.time}</small>
                                    </div>
                                    <p class="mb-0 small text-muted">${msg.preview}</p>
                                </div>
                            </div>
                        </button>`).join('')}
                </div>
            </div>
        </div>
        <div class="col-lg-5">
            <div class="edutrack-card">
                <h5 class="card-title mb-3">Quick Reply</h5>
                <form onsubmit="event.preventDefault();showToast('Sent','Your message has been sent.','success');this.reset();">
                    <div class="mb-3"><label class="form-label">Recipient</label><select class="form-select"><option>Prof. Aileen M. Dela Cruz</option><option>Dr. Carlo T. Ramirez</option><option>Admin Office</option></select></div>
                    <div class="mb-3"><label class="form-label">Subject</label><input class="form-control" placeholder="Enter message subject" required></div>
                    <div class="mb-3"><label class="form-label">Message</label><textarea class="form-control" rows="5" placeholder="Write your message..." required></textarea></div>
                    <button class="btn btn-primary w-100" type="submit"><i class="fas fa-paper-plane me-2"></i>Send Message</button>
                </form>
            </div>
        </div>
    </div>`;
}

function studentProfile() {
    return `<h3 class="fw-bold mb-4">Profile & Settings</h3>
    <div class="row g-4"><div class="col-lg-4"><div class="edutrack-card text-center">
        <img src="https://ui-avatars.com/api/?name=Venus+Rodgelyn+C.+Baybayon&background=4f46e5&color=fff&size=128" class="rounded-circle mb-3 border border-4 border-white shadow" width="100">
        <h4 class="fw-bold mb-1">Venus Rodgelyn C. Baybayon</h4><p class="text-muted mb-3">BSIT - Section 1A</p>
        <div class="d-flex justify-content-center gap-4 mb-3"><div class="text-center"><h5 class="fw-bold text-primary mb-0">3.88</h5><small class="text-muted">GPA</small></div><div class="text-center"><h5 class="fw-bold text-success mb-0">97%</h5><small class="text-muted">Attendance</small></div></div>
        <button class="btn btn-outline-primary w-100" onclick="changePhoto(this)"><i class="fas fa-camera me-2"></i>Change Photo</button>
    </div></div>
    <div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Personal Information</h5>
        <form onsubmit="event.preventDefault();saveForm(this.querySelector('button[type=submit]'),'Profile saved')">
            <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Full Name</label><input type="text" class="form-control" value="Venus Rodgelyn C. Baybayon"></div>
                <div class="col-md-6"><label class="form-label">Email</label><input type="email" class="form-control" value="venus.baybayon@edutrack.edu"></div>
                <div class="col-md-6"><label class="form-label">Phone</label><input type="tel" class="form-control" value="+63 917 845 2214"></div>
                <div class="col-md-6"><label class="form-label">Student ID</label><input type="text" class="form-control" value="STU-2026-0142" disabled></div>
                <div class="col-md-6"><label class="form-label">Date of Birth</label><input type="date" class="form-control" value="2006-06-18"></div>
                <div class="col-md-6"><label class="form-label">Guardian</label><input type="text" class="form-control" value="Celyn Coloso"></div>
            </div>
            <hr class="my-4"><h5 class="card-title mb-3">Preferences</h5>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Email notifications</label></div>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Grade alerts</label></div>
            <div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox"><label class="form-check-label">SMS notifications</label></div>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save me-2"></i>Save Changes</button>
        </form>
    </div></div></div>`;
}

function teacherDashboard() {
    return `<div class="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Teacher Dashboard</h3><p class="text-muted mb-0">Overview of your classes and student performance.</p></div><button class="btn btn-primary" onclick="showNewAssignmentModal()"><i class="fas fa-plus me-2"></i>New Assignment</button></div>
    <div class="row g-4 mb-4 stagger-in">
        ${metricCard('fa-users','blue','Total Students','142')}
        ${metricCard('fa-chart-bar','green','Class Average','89%')}
        ${metricCard('fa-exclamation-triangle','red','At-Risk Students','3')}
        ${metricCard('fa-clock','orange','Pending Grades','12')}
    </div>
    <div class="row g-4">
        <div class="col-lg-7"><div class="edutrack-card"><div class="card-header-custom"><h5 class="card-title">Class Performance</h5></div><div class="chart-container" style="height:300px;"><canvas id="teacherPerformanceChart"></canvas></div></div></div>
        <div class="col-lg-5"><div class="edutrack-card border-danger border-opacity-25"><div class="card-header-custom"><h5 class="card-title text-danger"><i class="fas fa-exclamation-circle me-2"></i>Attention Required</h5></div>
            <div class="list-group list-group-flush">
                ${atRiskRow('John Mark D. Salazar','Midterm standing is below 82% in BSIT-1A','Message')}
                ${atRiskRow('Ethan James R. Mendoza','Attendance dropped below 80% in BSIT-2B','Message Parent')}
                ${atRiskRow('Kevin Troy L. Molina','Needs intervention before finals in BSIT-3C','Schedule Meeting')}
            </div>
        </div></div>
        <div class="col-12"><div class="edutrack-card"><div class="card-header-custom"><h5 class="card-title">Recent Submissions</h5><button class="btn btn-sm btn-light" onclick="openRoleSection('teacher','manage-grades')">View All</button></div><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Student</th><th>Assignment</th><th>Class</th><th>Date</th><th>Action</th></tr></thead><tbody>
            <tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Venus+Rodgelyn+C.+Baybayon&background=random" class="avatar-sm"> Venus Rodgelyn C. Baybayon</div></td><td class="fw-medium">Persona Mapping Case Study</td><td>BSIT-1A</td><td>Today, 10:30 AM</td><td><button class="btn btn-sm btn-primary" onclick="openRoleSection('teacher','manage-grades')">Grade</button></td></tr>
            <tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=Claire+Denise+M.+Alonzo&background=random" class="avatar-sm"> Claire Denise M. Alonzo</div></td><td class="fw-medium">API Integration Reflection</td><td>BSIT-3C</td><td>Yesterday, 4:15 PM</td><td><button class="btn btn-sm btn-primary" onclick="openRoleSection('teacher','manage-grades')">Grade</button></td></tr>
        </tbody></table></div></div></div>
    </div>`;
}
function atRiskRow(name,issue,action) {
    return `<div class="list-group-item px-0 border-0 mb-2"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center gap-3"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random" class="avatar-sm"><div><h6 class="mb-0 fw-bold">${name}</h6><small class="text-danger">${issue}</small></div></div><button class="btn btn-sm btn-outline-primary" onclick="showToast('Sent','${action} sent for ${name}','success')">${action}</button></div></div>`;
}

function teacherClasses() {
    return `<h3 class="fw-bold mb-4">My Classes</h3><div class="row g-4">
        ${classCard('BSIT-1A','Human Computer Interaction and Database Systems',35,'#4f46e5',89)}
        ${classCard('BSIT-2B','Network Administration and Security',28,'#0ea5e9',86)}
        ${classCard('BSIT-3C','Web Systems and Systems Integration',42,'#10b981',91)}
    </div>`;
}
function classCard(name,desc,students,color,avg) {
    return `<div class="col-md-6"><div class="edutrack-card"><div class="d-flex justify-content-between align-items-start mb-3"><div><h5 class="fw-bold mb-1">${name}</h5><p class="text-muted small mb-0">${desc}</p></div><span class="badge rounded-pill" style="background:${color}20;color:${color};">${students} students</span></div>
    <div class="d-flex justify-content-between mb-2 small"><span class="text-muted">Class Average</span><span class="fw-bold">${avg}%</span></div><div class="progress-custom mb-3"><div class="progress-bar" style="width:${avg}%;background:${color};"></div></div>
    <div class="d-flex gap-2"><button class="btn btn-sm btn-outline-primary" onclick="openRoleSection('teacher','students')"><i class="fas fa-users me-1"></i>Students</button><button class="btn btn-sm btn-outline-secondary" onclick="openRoleSection('teacher','manage-grades')"><i class="fas fa-edit me-1"></i>Grades</button></div></div></div>`;
}

function teacherGrades() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div><h3 class="fw-bold mb-1">Manage Grades</h3><p class="text-muted mb-0">Enter and update student grades.</p></div>
    </div>
    <ul class="nav nav-pills mb-4 p-1 bg-light rounded-pill d-inline-flex" id="gradeTabs">
        <li class="nav-item"><button class="nav-link active rounded-pill px-4 py-2 fw-medium" id="btn-tab-final" onclick="switchGradeTab('final')">Final Grades</button></li>
        <li class="nav-item"><button class="nav-link rounded-pill px-4 py-2 fw-medium" id="btn-tab-exams" onclick="switchGradeTab('exams')">Exams & Assessments</button></li>
    </ul>

    <div id="grade-tab-final" class="grade-tab-content">
        <div class="d-flex gap-2 mb-3 flex-wrap">
            <select class="form-select w-auto" id="teacher-grade-section-filter" onchange="renderTeacherGradeTable(this.value)">
                <option>BSIT-1A</option>
                <option>BSIT-2B</option>
                <option>BSIT-3B</option>
            </select>
            <button class="btn btn-success" onclick="saveAllGrades(this)"><i class="fas fa-save me-2"></i>Save All</button>
        </div>
        <div class="edutrack-card"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Student</th><th>Prelim</th><th>Midterm</th><th>Finals</th><th>Total</th><th>Status</th><th>Action</th></tr></thead><tbody id="teacher-grade-table-body"></tbody></table></div></div>
    </div>

    <div id="grade-tab-exams" class="grade-tab-content d-none">
        <div class="d-flex gap-2 mb-3 flex-wrap">
            <select class="form-select w-auto" id="teacher-exam-section-filter" onchange="renderTeacherExamList(this.value)">
                <option>BSIT-1A</option>
                <option>BSIT-2B</option>
                <option>BSIT-3B</option>
            </select>
            <button class="btn btn-primary btn-sm" onclick="showTeacherExamCreateModal()"><i class="fas fa-plus me-1"></i>New Assessment</button>
        </div>
        <div class="edutrack-card">
            <div class="d-flex justify-content-between align-items-center mb-3"><h5 class="card-title mb-0">Assessments</h5><small class="text-muted">Select a section to manage its exams and rosters.</small></div>
            <div class="table-responsive"><table class="table table-custom"><thead><tr><th>Assessment</th><th>Date</th><th>Max Score</th><th>Status</th><th>Action</th></tr></thead><tbody id="teacher-exam-list-body"></tbody></table></div>
        </div>
    </div>`;
}
function gradeRow(name,p,m,f,total,badge) {
    const status = total>=90?'Excellent':total>=80?'Good':total>=70?'Average':'At Risk';
    return `<tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random" class="avatar-sm"> ${name}</div></td><td><input class="grade-input" value="${p}"></td><td><input class="grade-input" value="${m}"></td><td><input class="grade-input" value="${f}"></td><td class="fw-bold fs-5">${total}%</td><td><span class="badge ${badge}">${status}</span></td><td><button class="btn btn-sm btn-outline-primary" onclick="showToast('Grade', 'Edit grade modal opened', 'primary')"><i class="fas fa-edit"></i></button></td></tr>`;
}

function teacherAttendance() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Attendance</h3><p class="text-muted mb-0">Record daily student attendance.</p></div><div class="d-flex gap-2 flex-wrap"><select class="form-select w-auto" id="teacher-attendance-section-filter" onchange="renderTeacherAttendanceTable(this.value)"><option>BSIT-1A</option><option>BSIT-2B</option><option>BSIT-3B</option></select><input type="date" class="form-control w-auto" value="2026-04-06"><button class="btn btn-success" onclick="saveAttendance(this)"><i class="fas fa-save me-2"></i>Save</button></div></div>
    <div class="edutrack-card"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>#</th><th>Student Name</th><th>Present</th><th>Late</th><th>Absent</th><th>Notes</th></tr></thead><tbody id="teacher-attendance-table-body"></tbody></table></div></div>`;
}
function attendRow(n,name,status) {
    return `<tr><td>${n}</td><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random" class="avatar-sm">${name}</div></td><td><input type="radio" name="att${n}" class="attendance-check" ${status==='present'?'checked':''}></td><td><input type="radio" name="att${n}" class="attendance-check" ${status==='late'?'checked':''}></td><td><input type="radio" name="att${n}" class="attendance-check" ${status==='absent'?'checked':''}></td><td><input class="form-control form-control-sm" placeholder="Optional note" ${status==='absent'?'value="No notification"':''}></td></tr>`;
}

function teacherStudents() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Student Profiles</h3><p class="text-muted mb-0">View and manage student information.</p></div><div class="d-flex gap-2 flex-wrap"><select class="form-select w-auto" id="teacher-student-section-filter" onchange="renderTeacherStudentProfiles(this.value)"><option>BSIT-1A</option><option>BSIT-2B</option><option>BSIT-3B</option></select><input type="text" class="form-control w-auto" placeholder="Search students..." style="max-width:250px;"></div></div>
    <div class="row g-4" id="teacher-students-grid"></div>`;
}
function studentCard(name,grade,gpa,att,status) {
    const color = grade>=90?'success':grade>=80?'primary':grade>=70?'warning':'danger';
    return `<div class="col-md-6 col-xl-3"><div class="edutrack-card text-center"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=80" class="rounded-circle mb-2"><h6 class="fw-bold mb-0">${name}</h6><span class="badge badge-soft-${color} mb-2">${status}</span><div class="row g-2 text-center small mb-3"><div class="col-4"><div class="fw-bold text-${color}">${grade}%</div><div class="text-muted" style="font-size:0.7rem;">Grade</div></div><div class="col-4"><div class="fw-bold">${gpa}</div><div class="text-muted" style="font-size:0.7rem;">GPA</div></div><div class="col-4"><div class="fw-bold text-success">${att}</div><div class="text-muted" style="font-size:0.7rem;">Attend</div></div></div><button class="btn btn-sm btn-outline-primary w-100" onclick="showStudentProfileModal('${name}',${grade},'${gpa}','${att}','${status}','${color}')">View Profile</button></div></div>`;
}

function teacherFeedback() {
    return `<h3 class="fw-bold mb-4">Student Feedback</h3>
    <div class="edutrack-card mb-4"><h5 class="card-title mb-3">Send Feedback</h5>
        <form onsubmit="event.preventDefault();sendStudentFeedback(this);">
            <div class="row g-3"><div class="col-md-6"><label class="form-label">Student</label><select class="form-select"><option>Venus Rodgelyn C. Baybayon</option><option>Althea Mae P. Sarmiento</option><option>John Mark D. Salazar</option><option>Camille A. Navarro</option></select></div>
            <div class="col-md-6"><label class="form-label">Category</label><select class="form-select"><option>Academic Performance</option><option>Behavior</option><option>Attendance</option><option>General</option></select></div>
            <div class="col-12"><label class="form-label">Feedback Message</label><textarea class="form-control" rows="4" placeholder="Write your feedback here..." required></textarea></div></div>
            <button type="submit" class="btn btn-primary mt-3"><i class="fas fa-paper-plane me-2"></i>Send Feedback</button>
        </form>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-3">Recent Feedback Sent</h5>
        ${feedbackItem('Venus Rodgelyn C. Baybayon','Database Systems performance is improving. Keep practicing joins and optimization drills.','2 days ago','primary')}
        ${feedbackItem('John Mark D. Salazar','Please schedule a short consultation to review missing assessments and study pacing.','3 days ago','danger')}
        ${feedbackItem('Althea Mae P. Sarmiento','Outstanding work on the service prototype. Great analytical thinking and execution.','1 week ago','success')}
    </div>`;
}
function feedbackItem(name,text,time,color) {
    return `<div class="border-start border-4 border-${color} ps-3 mb-3 bg-light p-3 rounded-end"><div class="d-flex justify-content-between mb-1"><h6 class="fw-bold mb-0">${name}</h6><small class="text-muted">${time}</small></div><p class="mb-0 text-muted small">${text}</p></div>`;
}

function teacherMessages() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div><h3 class="fw-bold mb-1">Messages</h3><p class="text-muted mb-0">Coordinate with parents, students, and administration.</p></div>
        <button class="btn btn-primary" onclick="showToast('Compose','Opening teacher compose flow...','primary')"><i class="fas fa-envelope me-2"></i>New Message</button>
    </div>
    <div class="row g-4">
        <div class="col-lg-7">
            <div class="edutrack-card">
                <h5 class="card-title mb-3">Recent Conversations</h5>
                ${DATA.messages.map(msg => `
                    <div class="d-flex gap-3 align-items-start py-3 border-bottom ${msg.unread ? 'bg-light px-2 rounded' : ''}" onclick="showToast('${msg.from}','Opening conversation thread...','primary')" style="cursor:pointer;">
                        <div class="avatar-sm rounded-circle d-flex align-items-center justify-content-center text-white bg-${msg.color}">${msg.avatar}</div>
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between"><h6 class="fw-bold mb-1">${msg.from}</h6><small class="text-muted">${msg.time}</small></div>
                            <p class="small text-muted mb-0">${msg.preview}</p>
                        </div>
                    </div>`).join('')}
            </div>
        </div>
        <div class="col-lg-5">
            <div class="edutrack-card">
                <h5 class="card-title mb-3">Message Parent / Student</h5>
                <form onsubmit="event.preventDefault();showToast('Sent','Message sent successfully.','success');this.reset();">
                    <div class="mb-3"><label class="form-label">Recipient</label><select class="form-select"><option>Celyn Coloso</option><option>Venus Rodgelyn C. Baybayon</option><option>Admin Office</option></select></div>
                    <div class="mb-3"><label class="form-label">Subject</label><input class="form-control" placeholder="Enter subject" required></div>
                    <div class="mb-3"><label class="form-label">Message</label><textarea class="form-control" rows="6" placeholder="Write your message..." required></textarea></div>
                    <button type="submit" class="btn btn-primary w-100"><i class="fas fa-paper-plane me-2"></i>Send</button>
                </form>
            </div>
        </div>
    </div>`;
}

function teacherReports() {
    return `<h3 class="fw-bold mb-4">Reports</h3>
    <div class="row g-4 mb-4">
        <div class="col-md-4"><div class="edutrack-card text-center py-4 h-100"><i class="fas fa-file-pdf text-danger fs-1 mb-3"></i><h5 class="fw-bold">Class Report</h5><p class="text-muted small">Generate performance summary for your class.</p><button class="btn btn-outline-danger" onclick="showToast('Generated','Class report PDF is downloading...','success')"><i class="fas fa-download me-2"></i>Generate PDF</button></div></div>
        <div class="col-md-4"><div class="edutrack-card text-center py-4 h-100"><i class="fas fa-file-excel text-success fs-1 mb-3"></i><h5 class="fw-bold">Grade Export</h5><p class="text-muted small">Export all grades to spreadsheet format.</p><button class="btn btn-outline-success" onclick="showToast('Exported','Grade spreadsheet is downloading...','success')"><i class="fas fa-download me-2"></i>Export Excel</button></div></div>
        <div class="col-md-4"><div class="edutrack-card text-center py-4 h-100"><i class="fas fa-chart-bar text-primary fs-1 mb-3"></i><h5 class="fw-bold">Analytics Report</h5><p class="text-muted small">Detailed analytics with charts and trends.</p><button class="btn btn-outline-primary" onclick="showToast('Generated','Analytics report is compiling...','success')"><i class="fas fa-download me-2"></i>Generate</button></div></div>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-3">Generated Reports History</h5><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Report</th><th>Class</th><th>Date</th><th>Type</th><th>Action</th></tr></thead><tbody>
        <tr><td class="fw-bold">Term 2 Class Performance</td><td>BSIT-1A</td><td>Oct 10, 2026</td><td><span class="badge badge-soft-danger">PDF</span></td><td><button class="btn btn-sm btn-light" onclick="showToast('Opening','Loading report...','primary')"><i class="fas fa-eye"></i></button></td></tr>
        <tr><td class="fw-bold">Mid-semester Grades</td><td>All Classes</td><td>Oct 5, 2026</td><td><span class="badge badge-soft-success">Excel</span></td><td><button class="btn btn-sm btn-light" onclick="showToast('Opening','Loading report...','primary')"><i class="fas fa-eye"></i></button></td></tr>
    </tbody></table></div></div>`;
}

function teacherNotifs() { return studentNotifications().replace('academic activities','teaching activities'); }

function teacherSettings() {
    return `<h3 class="fw-bold mb-4">Settings</h3>
    <div class="row g-4"><div class="col-lg-4"><div class="edutrack-card text-center"><img src="https://ui-avatars.com/api/?name=Prof+Aileen+M.+Dela+Cruz&background=0ea5e9&color=fff&size=128" class="rounded-circle mb-3 shadow" width="100"><h4 class="fw-bold mb-1">Prof. Aileen M. Dela Cruz</h4><p class="text-muted">BSIT Program Faculty</p><button class="btn btn-outline-primary w-100" onclick="changePhoto(this)"><i class="fas fa-camera me-2"></i>Change Photo</button></div></div>
    <div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Account Settings</h5>
        <form onsubmit="event.preventDefault();saveForm(this.querySelector('button[type=submit]'),'Settings saved')">
            <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Full Name</label><input class="form-control" value="Prof. Aileen M. Dela Cruz"></div>
                <div class="col-md-6"><label class="form-label">Email</label><input class="form-control" value="aileen.delacruz@edutrack.edu"></div>
                <div class="col-md-6"><label class="form-label">Department</label><input class="form-control" value="School of Computing"></div>
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
