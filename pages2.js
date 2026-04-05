// ============================================================
// EduTrack - Page Content Templates (Parent & Admin)
// ============================================================

// ======================== PARENT PAGES ========================
function parentDashboard() {
    return `<div class="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Parent Portal</h3><p class="text-muted mb-0">Monitoring: <span class="fw-bold text-primary">Venus Rodgelyn C. Baybayon</span></p></div></div>
    <div class="row g-4 mb-4">
        <div class="col-md-4"><div class="edutrack-card text-center py-4">
            <img src="https://ui-avatars.com/api/?name=Venus+Rodgelyn+C.+Baybayon&background=4f46e5&color=fff&size=128" class="rounded-circle mb-3 border border-4 border-white shadow-sm" width="80">
            <h4 class="fw-bold mb-1">Venus Rodgelyn C. Baybayon</h4><p class="text-muted mb-3">BSIT - Section 1A</p>
            <div class="d-flex justify-content-center gap-3"><div class="text-center px-3 border-end"><h5 class="fw-bold text-primary mb-0">A</h5><small class="text-muted">Avg Grade</small></div><div class="text-center px-3"><h5 class="fw-bold text-success mb-0">97%</h5><small class="text-muted">Attendance</small></div></div>
        </div></div>
        <div class="col-md-8"><div class="edutrack-card"><h5 class="card-title mb-4">Academic Trend</h5><div class="chart-container" style="height:300px;"><canvas id="parentTrendChart"></canvas></div></div></div>
    </div>
    <div class="row g-4">
        <div class="col-lg-6"><div class="edutrack-card"><h5 class="card-title mb-3">Teacher Communications</h5>
            ${feedbackItem('Prof. Aileen M. Dela Cruz (HCI)','Venus is improving steadily in persona analysis and interface critique.','2 days ago','primary')}
            ${feedbackItem('Ms. Joanna B. Morales (Web Systems)','Outstanding work on the web prototype. Her frontend decisions are thoughtful and polished.','1 week ago','success')}
            ${feedbackItem('Dr. Carlo T. Ramirez (Database Systems)','Solid performance in lab work. Encourage Venus to keep practicing optimization drills.','2 weeks ago','info')}
        </div></div>
        <div class="col-lg-6"><div class="edutrack-card bg-primary text-white"><h5 class="card-title text-white mb-3"><i class="fas fa-lightbulb text-warning me-2"></i>Parent Action Plan</h5><p class="opacity-75 mb-4">Based on AI analysis of Venus's recent performance.</p>
            <ul class="list-unstyled">
                <li class="mb-3 d-flex gap-2"><i class="fas fa-check-circle text-warning mt-1"></i><span>Encourage review of query optimization topics before the next Database Systems assessment.</span></li>
                <li class="mb-3 d-flex gap-2"><i class="fas fa-check-circle text-warning mt-1"></i><span>Venus has an HCI case study due soon. Check if she needs time for user interviews.</span></li>
                <li class="d-flex gap-2"><i class="fas fa-check-circle text-warning mt-1"></i><span>Support her weekly study block for Network Administration every Wednesday.</span></li>
            </ul>
        </div></div>
    </div>`;
}

function parentGrades() {
    return `<h3 class="fw-bold mb-1">Child's Grades</h3><p class="text-muted mb-4">Detailed grade breakdown for Venus Rodgelyn C. Baybayon.</p>
    <div class="edutrack-card mb-4"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Subject</th><th>Teacher</th><th>Midterm</th><th>Finals</th><th>Grade</th><th>Status</th></tr></thead><tbody>
        <tr><td class="fw-bold">Human Computer Interaction</td><td>Prof. Aileen M. Dela Cruz</td><td>91%</td><td>94%</td><td class="fw-bold text-primary fs-5">93%</td><td><span class="badge badge-soft-success">Excellent</span></td></tr>
        <tr><td class="fw-bold">Database Systems</td><td>Dr. Carlo T. Ramirez</td><td>84%</td><td>88%</td><td class="fw-bold text-primary fs-5">86%</td><td><span class="badge badge-soft-primary">Good</span></td></tr>
        <tr><td class="fw-bold">Web Systems and Technologies</td><td>Ms. Joanna B. Morales</td><td>93%</td><td>96%</td><td class="fw-bold text-success fs-5">95%</td><td><span class="badge badge-soft-success">Outstanding</span></td></tr>
        <tr><td class="fw-bold">Information Assurance and Security</td><td>Prof. Elaine S. Fernandez</td><td>95%</td><td>98%</td><td class="fw-bold text-success fs-5">97%</td><td><span class="badge badge-soft-success">Outstanding</span></td></tr>
    </tbody></table></div></div>
    <div class="row g-4"><div class="col-md-6"><div class="edutrack-card bg-success bg-opacity-10 border-success border-opacity-25 text-center py-4"><h2 class="fw-bold text-success mb-0">3.88</h2><p class="text-muted mt-2 mb-0">Cumulative GPA</p></div></div>
    <div class="col-md-6"><div class="edutrack-card bg-primary bg-opacity-10 border-primary border-opacity-25 text-center py-4"><h2 class="fw-bold text-primary mb-0">91.7%</h2><p class="text-muted mt-2 mb-0">Overall Average</p></div></div></div>`;
}

function parentAttendance() {
    return `<h3 class="fw-bold mb-1">Attendance Overview</h3><p class="text-muted mb-4">Venus's attendance record for the current semester.</p>
    <div class="row g-4 mb-4">
        <div class="col-md-3"><div class="edutrack-card text-center py-3"><h2 class="fw-bold text-success mb-0">97%</h2><p class="text-muted small mb-0">Attendance Rate</p></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-3"><h2 class="fw-bold text-primary mb-0">74</h2><p class="text-muted small mb-0">Days Present</p></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-3"><h2 class="fw-bold text-warning mb-0">1</h2><p class="text-muted small mb-0">Late Arrivals</p></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-3"><h2 class="fw-bold text-danger mb-0">2</h2><p class="text-muted small mb-0">Absences</p></div></div>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-3">Recent Attendance</h5>
        ${attendanceRow('fa-check-circle','success','Present','April 5, 2026','On Time','success')}
        ${attendanceRow('fa-check-circle','success','Present','April 4, 2026','On Time','success')}
        ${attendanceRow('fa-clock','warning','Late','April 3, 2026','12 min late','warning')}
        ${attendanceRow('fa-times-circle','danger','Absent','April 1, 2026','Medical','danger')}
        ${attendanceRow('fa-check-circle','success','Present','March 31, 2026','On Time','success')}
    </div>`;
}

function parentFeedback() {
    return `<h3 class="fw-bold mb-1">Teacher Feedback</h3><p class="text-muted mb-4">Messages from Venus's teachers.</p>
    <div class="edutrack-card mb-4">
        ${feedbackItem('Prof. Aileen M. Dela Cruz (Human Computer Interaction)','Venus is doing well in class and is presenting stronger user research insights each week.','2 days ago','warning')}
        ${feedbackItem('Ms. Joanna B. Morales (Web Systems and Technologies)','Exceptional work on the latest web systems prototype. Venus shows strong frontend decision-making.','1 week ago','success')}
        ${feedbackItem('Dr. Carlo T. Ramirez (Database Systems)','Solid performance overall. Continue focusing on complex joins and optimization for the next assessment.','2 weeks ago','primary')}
        ${feedbackItem('Engr. Patrick R. Valencia (Network Administration)','Hands-on lab performance is improving. Encourage more practice on resilient network design.','3 weeks ago','info')}
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-3">Send Message to Teacher</h5>
        <form onsubmit="event.preventDefault();sendTeacherMessage(this);">
            <div class="row g-3"><div class="col-md-6"><label class="form-label">Select Teacher</label><select class="form-select"><option>Prof. Aileen M. Dela Cruz</option><option>Dr. Carlo T. Ramirez</option><option>Ms. Joanna B. Morales</option><option>Engr. Patrick R. Valencia</option></select></div>
            <div class="col-md-6"><label class="form-label">Subject</label><input class="form-control" placeholder="Message subject" required></div>
            <div class="col-12"><label class="form-label">Message</label><textarea class="form-control" rows="3" placeholder="Write your message..." required></textarea></div></div>
            <button type="submit" class="btn btn-primary mt-3"><i class="fas fa-paper-plane me-2"></i>Send Message</button>
        </form>
    </div>`;
}

function parentAlerts() {
    return `<h3 class="fw-bold mb-1">Alerts & Notifications</h3><p class="text-muted mb-4">Important updates about Venus's academics.</p>
    <div class="edutrack-card">
        <div class="d-flex gap-3 p-3 bg-danger bg-opacity-10 rounded mb-3 align-items-start"><div class="notif-icon bg-danger bg-opacity-10 text-danger"><i class="fas fa-exclamation-triangle"></i></div><div class="flex-grow-1"><div class="d-flex justify-content-between"><h6 class="fw-bold mb-1 text-danger">Grade Watch</h6><span class="badge bg-danger">Urgent</span></div><p class="text-muted small mb-1">Venus's Database Systems grade is below her target score. A focused review session is recommended.</p><small class="text-muted">2 hours ago</small></div></div>
        <div class="d-flex gap-3 p-3 bg-warning bg-opacity-10 rounded mb-3 align-items-start"><div class="notif-icon bg-warning bg-opacity-10 text-warning"><i class="fas fa-calendar-times"></i></div><div class="flex-grow-1"><div class="d-flex justify-content-between"><h6 class="fw-bold mb-1 text-warning">Assignment Deadline</h6><span class="badge bg-warning text-dark">Important</span></div><p class="text-muted small mb-1">Persona Mapping Case Study is due in 2 days. Check in with Venus on progress.</p><small class="text-muted">5 hours ago</small></div></div>
        <div class="d-flex gap-3 p-3 bg-primary bg-opacity-10 rounded mb-3 align-items-start"><div class="notif-icon bg-primary bg-opacity-10 text-primary"><i class="fas fa-bullhorn"></i></div><div class="flex-grow-1"><h6 class="fw-bold mb-1">School Announcement</h6><p class="text-muted small mb-1">Mid-semester break starts October 20. Classes resume October 28. Parent-teacher conference on October 18.</p><small class="text-muted">1 day ago</small></div></div>
        <div class="d-flex gap-3 p-3 bg-success bg-opacity-10 rounded align-items-start"><div class="notif-icon bg-success bg-opacity-10 text-success"><i class="fas fa-trophy"></i></div><div class="flex-grow-1"><h6 class="fw-bold mb-1">Achievement</h6><p class="text-muted small mb-1">Venus ranked in the Top 5% for Web Systems and Technologies this semester. Outstanding performance.</p><small class="text-muted">3 days ago</small></div></div>
    </div>`;
}

function parentMessages() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Messages</h3><p class="text-muted mb-0">Stay connected with teachers and school staff.</p></div><button class="btn btn-primary" onclick="showToast('Compose','Opening parent compose flow...','primary')"><i class="fas fa-pen me-2"></i>New Message</button></div>
    <div class="row g-4">
        <div class="col-lg-7"><div class="edutrack-card"><h5 class="card-title mb-3">Inbox</h5>
            ${DATA.messages.map(msg => `<div class="d-flex gap-3 align-items-start py-3 border-bottom ${msg.unread ? 'bg-light px-2 rounded' : ''}" onclick="showToast('${msg.from}','Opening conversation...','primary')" style="cursor:pointer;"><div class="avatar-sm rounded-circle d-flex align-items-center justify-content-center text-white bg-${msg.color}">${msg.avatar}</div><div class="flex-grow-1"><div class="d-flex justify-content-between"><h6 class="fw-bold mb-1">${msg.from}</h6><small class="text-muted">${msg.time}</small></div><p class="small text-muted mb-0">${msg.preview}</p></div></div>`).join('')}
        </div></div>
        <div class="col-lg-5"><div class="edutrack-card"><h5 class="card-title mb-3">Message Teacher</h5>
            <form onsubmit="event.preventDefault();sendTeacherMessage(this);">
                <div class="mb-3"><label class="form-label">Recipient</label><select class="form-select"><option>Prof. Aileen M. Dela Cruz</option><option>Dr. Carlo T. Ramirez</option><option>Admin Office</option></select></div>
                <div class="mb-3"><label class="form-label">Subject</label><input class="form-control" placeholder="Enter subject" required></div>
                <div class="mb-3"><label class="form-label">Message</label><textarea class="form-control" rows="6" placeholder="Write your message..." required></textarea></div>
                <button type="submit" class="btn btn-primary w-100"><i class="fas fa-paper-plane me-2"></i>Send Message</button>
            </form>
        </div></div>
    </div>`;
}

function parentReports() {
    return `<h3 class="fw-bold mb-1">Reports</h3><p class="text-muted mb-4">Download Venus's academic reports.</p>
    <div class="row g-4">
        <div class="col-md-4"><div class="edutrack-card text-center py-4"><i class="fas fa-file-pdf text-danger fs-1 mb-3"></i><h5 class="fw-bold">Report Card</h5><p class="text-muted small">Semester 2 report card with grades and teacher comments.</p><button class="btn btn-outline-danger" onclick="showToast('Download','Report card is downloading...','success')"><i class="fas fa-download me-2"></i>Download PDF</button></div></div>
        <div class="col-md-4"><div class="edutrack-card text-center py-4"><i class="fas fa-chart-line text-primary fs-1 mb-3"></i><h5 class="fw-bold">Progress Report</h5><p class="text-muted small">Detailed progress analysis with performance trends.</p><button class="btn btn-outline-primary" onclick="showToast('Download','Progress report is downloading...','success')"><i class="fas fa-download me-2"></i>Download PDF</button></div></div>
        <div class="col-md-4"><div class="edutrack-card text-center py-4"><i class="fas fa-calendar-check text-success fs-1 mb-3"></i><h5 class="fw-bold">Attendance Report</h5><p class="text-muted small">Complete attendance record for the semester.</p><button class="btn btn-outline-success" onclick="showToast('Download','Attendance report is downloading...','success')"><i class="fas fa-download me-2"></i>Download PDF</button></div></div>
    </div>`;
}

function parentProfile() {
    return `<h3 class="fw-bold mb-4">Profile & Settings</h3>
    <div class="row g-4"><div class="col-lg-4"><div class="edutrack-card text-center"><img src="https://ui-avatars.com/api/?name=Celyn+Coloso&background=10b981&color=fff&size=128" class="rounded-circle mb-3 shadow" width="100"><h4 class="fw-bold mb-1">Celyn Coloso</h4><p class="text-muted mb-3">Parent / Guardian</p><p class="small text-muted">Child: Venus Rodgelyn C. Baybayon (BSIT-1A)</p></div></div>
    <div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Account Settings</h5>
        <form onsubmit="event.preventDefault();saveForm(this.querySelector('button[type=submit]'),'Profile updated')">
            <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Full Name</label><input class="form-control" value="Celyn Coloso"></div>
                <div class="col-md-6"><label class="form-label">Email</label><input class="form-control" value="celyn.coloso@edutrack.edu"></div>
                <div class="col-md-6"><label class="form-label">Phone</label><input class="form-control" value="+63 918 552 1440"></div>
                <div class="col-md-6"><label class="form-label">Relationship</label><input class="form-control" value="Mother" disabled></div>
            </div>
            <hr class="my-4"><h5 class="card-title mb-3">Alert Preferences</h5>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Grade drop alerts</label></div>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Absence notifications</label></div>
            <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Teacher messages</label></div>
            <div class="form-check form-switch mb-3"><input class="form-check-input" type="checkbox"><label class="form-check-label">Weekly summary via SMS</label></div>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save me-2"></i>Save Changes</button>
        </form>
    </div></div></div>`;
}

// ======================== ADMIN PAGES ========================
function adminDashboard() {
    return `<div class="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">System Administration</h3><p class="text-muted mb-0">School-wide metrics and system health.</p></div><button class="btn btn-dark" onclick="openRoleSection('admin','settings')"><i class="fas fa-cog me-2"></i>System Settings</button></div>
    <div class="row g-4 mb-4 stagger-in">
        ${metricCard('fa-user-graduate','blue','Total Students','1,245')}
        ${metricCard('fa-chalkboard-teacher','green','Total Staff','112')}
        ${metricCard('fa-server','orange','System Health','<span class="text-success">99.9%</span>')}
        ${metricCard('fa-exclamation-triangle','red','Active Alerts','24')}
    </div>
    <div class="row g-4">
        <div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Attendance vs Performance Trend</h5><div class="chart-container" style="height:300px;"><canvas id="adminSystemChart"></canvas></div></div></div>
        <div class="col-lg-4"><div class="edutrack-card"><h5 class="card-title mb-4">Recent Activity</h5><div class="timeline position-relative ps-3 border-start border-2 border-primary">
            ${timelineItem('primary','Batch Report Generation','Completed - 10 mins ago')}
            ${timelineItem('success','New User Import (CSV)','Admin added 45 students - 1 hr ago')}
            ${timelineItem('warning','System Backup','Automated - 12 hrs ago')}
            ${timelineItem('danger','Alert Triggered','5 at-risk students flagged - 1 day ago')}
        </div></div></div>
    </div>`;
}
function timelineItem(color,title,desc) {
    return `<div class="mb-4 position-relative"><div class="position-absolute start-0 translate-middle-x bg-${color} rounded-circle" style="width:12px;height:12px;margin-left:-1px;"></div><h6 class="fw-bold mb-1">${title}</h6><small class="text-muted">${desc}</small></div>`;
}

function adminWizardYears(type) {
    return `
        <div class="row g-4">
            <div class="col-md-3"><div class="edutrack-card text-center p-4 cursor-pointer hover-shadow" onclick="adminWizardStep('${type}',2,'1st Year')"><div class="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fas fa-layer-group"></i></div><h5 class="fw-bold mb-1">1st Year</h5><small class="text-muted">Freshmen intake</small></div></div>
            <div class="col-md-3"><div class="edutrack-card text-center p-4 cursor-pointer hover-shadow" onclick="adminWizardStep('${type}',2,'2nd Year')"><div class="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fas fa-layer-group"></i></div><h5 class="fw-bold mb-1">2nd Year</h5><small class="text-muted">Core progression</small></div></div>
            <div class="col-md-3"><div class="edutrack-card text-center p-4 cursor-pointer hover-shadow" onclick="adminWizardStep('${type}',2,'3rd Year')"><div class="bg-warning bg-opacity-10 text-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fas fa-layer-group"></i></div><h5 class="fw-bold mb-1">3rd Year</h5><small class="text-muted">Advanced courses</small></div></div>
            <div class="col-md-3"><div class="edutrack-card text-center p-4 cursor-pointer hover-shadow" onclick="adminWizardStep('${type}',2,'4th Year')"><div class="bg-info bg-opacity-10 text-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fas fa-layer-group"></i></div><h5 class="fw-bold mb-1">4th Year</h5><small class="text-muted">Graduating batch</small></div></div>
        </div>`;
}

function adminWizardPrograms(type) {
    return `
        <div class="row g-4">
            <div class="col-md-4"><div class="edutrack-card text-center p-4 cursor-pointer hover-shadow" onclick="adminWizardStep('${type}',3,'BSIT')"><div class="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fas fa-laptop-code"></i></div><h5 class="fw-bold mb-1">BSIT</h5><small class="text-muted">Information Technology</small></div></div>
            <div class="col-md-4"><div class="edutrack-card text-center p-4 cursor-pointer hover-shadow" onclick="adminWizardStep('${type}',3,'BSCS')"><div class="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fas fa-code-branch"></i></div><h5 class="fw-bold mb-1">BSCS</h5><small class="text-muted">Computer Science</small></div></div>
            <div class="col-md-4"><div class="edutrack-card text-center p-4 cursor-pointer hover-shadow" onclick="adminWizardStep('${type}',3,'BSEMC')"><div class="bg-warning bg-opacity-10 text-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:64px;height:64px;"><i class="fas fa-photo-video"></i></div><h5 class="fw-bold mb-1">BSEMC</h5><small class="text-muted">Entertainment Computing</small></div></div>
        </div>`;
}

function adminStudentsFlow() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Student Management</h3><p class="text-muted mb-0">Follow the edutrack2 flow: year level, program, section, then roster management.</p></div><button class="btn btn-primary" onclick="showAddUserModal()"><i class="fas fa-user-plus me-2"></i>Add Student</button></div>
    <div class="edutrack-card mb-4"><div class="fw-semibold text-primary" id="admin-student-breadcrumbs">Step 1: Select Year Level</div></div>
    <div id="admin-student-step-1">${adminWizardYears('admin-student')}</div>
    <div id="admin-student-step-2" class="d-none">${adminWizardPrograms('admin-student')}</div>
    <div id="admin-student-step-3" class="d-none"><div class="row g-4" id="admin-student-sections-grid"></div></div>
    <div id="admin-student-step-4" class="d-none"><div class="edutrack-card"><div class="d-flex justify-content-between align-items-center mb-3"><h5 class="card-title mb-0">Section Roster</h5><button class="btn btn-sm btn-outline-primary" onclick="showAddUserModal()"><i class="fas fa-plus me-1"></i>Enroll Student</button></div><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Student</th><th>ID</th><th>Section</th><th>Status</th><th>GPA</th><th>Actions</th></tr></thead><tbody id="admin-student-tbody"></tbody></table></div></div></div>`;
}

function adminTeachersFlow() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Teacher Management</h3><p class="text-muted mb-0">Organize teachers by academic stream and section assignment.</p></div><button class="btn btn-primary" onclick="showAddUserModal()"><i class="fas fa-user-plus me-2"></i>Add Teacher</button></div>
    <div class="edutrack-card mb-4"><div class="fw-semibold text-primary" id="admin-teacher-breadcrumbs">Step 1: Select Year Level</div></div>
    <div id="admin-teacher-step-1">${adminWizardYears('admin-teacher')}</div>
    <div id="admin-teacher-step-2" class="d-none">${adminWizardPrograms('admin-teacher')}</div>
    <div id="admin-teacher-step-3" class="d-none"><div class="row g-4" id="admin-teacher-sections-grid"></div></div>
    <div id="admin-teacher-step-4" class="d-none"><div class="edutrack-card"><div class="d-flex justify-content-between align-items-center mb-3"><h5 class="card-title mb-0">Assigned Teachers</h5><button class="btn btn-sm btn-outline-primary" onclick="showAddUserModal()"><i class="fas fa-plus me-1"></i>Assign Teacher</button></div><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Name</th><th>Employee ID</th><th>Assigned Area</th><th>Status</th><th>Actions</th></tr></thead><tbody id="admin-teacher-tbody"></tbody></table></div></div></div>`;
}

function adminParentsFlow() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Parent Management</h3><p class="text-muted mb-0">Link guardians to the correct program and section groups.</p></div><button class="btn btn-primary" onclick="showAddUserModal()"><i class="fas fa-user-plus me-2"></i>Add Parent</button></div>
    <div class="edutrack-card mb-4"><div class="fw-semibold text-primary" id="admin-parent-breadcrumbs">Step 1: Select Year Level</div></div>
    <div id="admin-parent-step-1">${adminWizardYears('admin-parent')}</div>
    <div id="admin-parent-step-2" class="d-none">${adminWizardPrograms('admin-parent')}</div>
    <div id="admin-parent-step-3" class="d-none"><div class="row g-4" id="admin-parent-sections-grid"></div></div>
    <div id="admin-parent-step-4" class="d-none"><div class="edutrack-card"><div class="d-flex justify-content-between align-items-center mb-3"><h5 class="card-title mb-0">Linked Parents</h5><button class="btn btn-sm btn-outline-primary" onclick="showAddUserModal()"><i class="fas fa-link me-1"></i>Link Parent</button></div><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Parent</th><th>Email</th><th>Student</th><th>Section</th><th>Actions</th></tr></thead><tbody id="admin-parent-tbody"></tbody></table></div></div></div>`;
}

function adminClassesFlow() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Classes & Sections</h3><p class="text-muted mb-0">Create and manage class sections by year and program.</p></div><button class="btn btn-primary" onclick="showToast('Create','New class creation flow opened.','primary')"><i class="fas fa-plus me-2"></i>Add Class</button></div>
    <div class="edutrack-card mb-4"><div class="fw-semibold text-primary" id="admin-class-breadcrumbs">Step 1: Select Year Level</div></div>
    <div id="admin-class-step-1">${adminWizardYears('admin-class')}</div>
    <div id="admin-class-step-2" class="d-none">${adminWizardPrograms('admin-class')}</div>
    <div id="admin-class-step-3" class="d-none"><div class="row g-4" id="admin-class-sections-grid"></div></div>
    <div id="admin-class-step-4" class="d-none"><div class="edutrack-card"><div class="d-flex justify-content-between align-items-center mb-3"><h5 class="card-title mb-0">Managed Sections</h5><button class="btn btn-sm btn-outline-primary" onclick="showToast('Added','New section added in demo mode.','success')"><i class="fas fa-plus me-1"></i>Add Section</button></div><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Class Code</th><th>Program</th><th>Adviser</th><th>Capacity</th><th>Actions</th></tr></thead><tbody id="admin-class-tbody"></tbody></table></div></div></div>`;
}

function adminSubjectsFlow() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Subject Management</h3><p class="text-muted mb-0">Review subjects according to academic year and program structure.</p></div><button class="btn btn-primary" onclick="showToast('Create','Subject creation flow opened.','primary')"><i class="fas fa-plus me-2"></i>Add Subject</button></div>
    <div class="edutrack-card mb-4"><div class="fw-semibold text-primary" id="admin-subject-breadcrumbs">Step 1: Select Year Level</div></div>
    <div id="admin-subject-step-1">${adminWizardYears('admin-subject')}</div>
    <div id="admin-subject-step-2" class="d-none">${adminWizardPrograms('admin-subject')}</div>
    <div id="admin-subject-step-3" class="d-none"><div class="row g-4" id="admin-subject-sections-grid"></div></div>
    <div id="admin-subject-step-4" class="d-none"><div class="edutrack-card"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Subject</th><th>Type</th><th>Units</th><th>Instructor</th><th>Status</th></tr></thead><tbody id="admin-subject-tbody"></tbody></table></div></div></div>`;
}

function adminGradesFlow() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">Grade Management</h3><p class="text-muted mb-0">Monitor teacher submissions and student standing across all sections.</p></div><button class="btn btn-primary" onclick="showToast('Audit','Grade audit started.','success')"><i class="fas fa-clipboard-check me-2"></i>Run Audit</button></div>
    <div class="row g-4 mb-4">
        ${metricCard('fa-file-signature','blue','Pending Submissions','12')}
        ${metricCard('fa-user-graduate','green','Students Reviewed','142')}
        ${metricCard('fa-exclamation-triangle','orange','Flagged Records','5')}
        ${metricCard('fa-award','red','Honors Candidates','36')}
    </div>
    <div class="edutrack-card"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Section</th><th>Adviser</th><th>Average</th><th>Pending</th><th>Status</th><th>Action</th></tr></thead><tbody id="admin-grade-summary-body"></tbody></table></div></div>`;
}

function adminAttendanceFlow() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">System Attendance</h3><p class="text-muted mb-0">Review section-level attendance and escalation patterns.</p></div><button class="btn btn-outline-primary" onclick="showToast('Export','Attendance export prepared.','success')"><i class="fas fa-download me-2"></i>Export</button></div>
    <div class="row g-4 mb-4">
        ${metricCard('fa-calendar-check','green','Overall Attendance','94.2%')}
        ${metricCard('fa-user-clock','blue','Late Reports','18')}
        ${metricCard('fa-user-times','orange','Absence Alerts','7')}
        ${metricCard('fa-school','red','Sections Monitored','9')}
    </div>
    <div class="edutrack-card"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Section</th><th>Present</th><th>Late</th><th>Absent</th><th>Trend</th></tr></thead><tbody id="admin-attendance-summary-body"></tbody></table></div></div>`;
}

function adminReportsHub() {
    return `${adminReports()}<div class="mt-4">${adminAnalytics()}</div>`;
}

function adminAnnouncements() {
    return adminNotifs();
}

function adminUsers() {
    return `<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2"><div><h3 class="fw-bold mb-1">User Management</h3><p class="text-muted mb-0">Manage students, teachers, and parents.</p></div><div class="d-flex gap-2"><input type="text" class="form-control" placeholder="Search users..." style="max-width:220px;">
    <button class="btn btn-primary" onclick="showAddUserModal()"><i class="fas fa-plus me-2"></i>Add User</button></div></div>
    <div class="row g-4 mb-4">
        <div class="col-md-3"><div class="edutrack-card text-center py-3 bg-primary bg-opacity-10"><h3 class="fw-bold text-primary mb-0">1,245</h3><small class="text-muted">Students</small></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-3 bg-success bg-opacity-10"><h3 class="fw-bold text-success mb-0">112</h3><small class="text-muted">Teachers</small></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-3 bg-warning bg-opacity-10"><h3 class="fw-bold text-warning mb-0">890</h3><small class="text-muted">Parents</small></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-3 bg-danger bg-opacity-10"><h3 class="fw-bold text-danger mb-0">5</h3><small class="text-muted">Admins</small></div></div>
    </div>
    <div class="edutrack-card"><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead><tbody>
        ${userRow('Venus Rodgelyn C. Baybayon','venus.baybayon@edutrack.edu','Student','Active')}
        ${userRow('Prof. Aileen M. Dela Cruz','aileen.delacruz@edutrack.edu','Teacher','Active')}
        ${userRow('John Mark D. Salazar','johnmark.salazar@edutrack.edu','Student','At Risk')}
        ${userRow('Celyn Coloso','celyn.coloso@edutrack.edu','Parent','Active')}
        ${userRow('Dr. Carlo T. Ramirez','carlo.ramirez@edutrack.edu','Teacher','Active')}
        ${userRow('Ethan James R. Mendoza','ethan.mendoza@edutrack.edu','Student','Inactive')}
        ${userRow('Admin User','admin@edutrack.edu','Admin','Active')}
    </tbody></table></div></div>`;
}
function userRow(name,email,role,status) {
    const c = status==='Active'?'success':status==='At Risk'?'danger':'secondary';
    return `<tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random" class="avatar-sm">${name}</div></td><td class="text-muted">${email}</td><td><span class="badge badge-soft-primary">${role}</span></td><td><span class="status-dot ${c==='success'?'online':c==='danger'?'away':'offline'}"></span> ${status}</td>
    <td><button class="btn btn-sm btn-light me-1" onclick="showToast('Edit','Editing ${name}...','primary')"><i class="fas fa-edit"></i></button><button class="btn btn-sm btn-light text-danger" onclick="showDeleteUserModal('${name}')"><i class="fas fa-trash"></i></button></td></tr>`;
}

function adminReports() {
    return `<h3 class="fw-bold mb-1">Global Reports</h3><p class="text-muted mb-4">School-wide reporting and data export.</p>
    <div class="row g-4 mb-4">
        <div class="col-md-3"><div class="edutrack-card text-center py-4"><i class="fas fa-file-pdf text-danger fs-1 mb-3"></i><h6 class="fw-bold">School Report</h6><button class="btn btn-sm btn-outline-danger mt-2" onclick="showToast('Generated','School report downloading...','success')"><i class="fas fa-download me-1"></i>PDF</button></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-4"><i class="fas fa-file-excel text-success fs-1 mb-3"></i><h6 class="fw-bold">Grade Export</h6><button class="btn btn-sm btn-outline-success mt-2" onclick="showToast('Exported','Grades exported!','success')"><i class="fas fa-download me-1"></i>Excel</button></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-4"><i class="fas fa-chart-bar text-primary fs-1 mb-3"></i><h6 class="fw-bold">Analytics</h6><button class="btn btn-sm btn-outline-primary mt-2" onclick="showToast('Generated','Report compiling...','success')"><i class="fas fa-download me-1"></i>Generate</button></div></div>
        <div class="col-md-3"><div class="edutrack-card text-center py-4"><i class="fas fa-users text-warning fs-1 mb-3"></i><h6 class="fw-bold">Attendance</h6><button class="btn btn-sm btn-outline-warning mt-2" onclick="showToast('Generated','Attendance report ready!','success')"><i class="fas fa-download me-1"></i>Export</button></div></div>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-3">Report History</h5><div class="table-responsive"><table class="table table-custom"><thead><tr><th>Report Name</th><th>Generated By</th><th>Date</th><th>Type</th><th>Action</th></tr></thead><tbody>
        <tr><td class="fw-bold">Term 2 School Report</td><td>System Admin</td><td>Oct 10, 2026</td><td><span class="badge badge-soft-danger">PDF</span></td><td><button class="btn btn-sm btn-light" onclick="showToast('Opening','Loading...','primary')"><i class="fas fa-eye me-1"></i>View</button></td></tr>
        <tr><td class="fw-bold">October Attendance</td><td>System Admin</td><td>Oct 8, 2026</td><td><span class="badge badge-soft-success">Excel</span></td><td><button class="btn btn-sm btn-light" onclick="showToast('Opening','Loading...','primary')"><i class="fas fa-eye me-1"></i>View</button></td></tr>
        <tr><td class="fw-bold">At-Risk Student List</td><td>AI System</td><td>Oct 5, 2026</td><td><span class="badge badge-soft-primary">PDF</span></td><td><button class="btn btn-sm btn-light" onclick="showToast('Opening','Loading...','primary')"><i class="fas fa-eye me-1"></i>View</button></td></tr>
    </tbody></table></div></div>`;
}

function adminAnalytics() {
    return `<h3 class="fw-bold mb-4">School-Wide Analytics</h3>
    <div class="row g-4 mb-4 stagger-in">
        ${metricCard('fa-chart-line','blue','Avg GPA','3.42')}
        ${metricCard('fa-calendar-check','green','Avg Attendance','93.5%')}
        ${metricCard('fa-award','orange','Honor Students','186')}
        ${metricCard('fa-user-times','red','At-Risk','47')}
    </div>
    <div class="row g-4">
        <div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">Department Performance</h5><div class="chart-container" style="height:300px;"><canvas id="adminDeptChart"></canvas></div></div></div>
        <div class="col-lg-4"><div class="edutrack-card"><h5 class="card-title mb-4">Top Performers</h5>
            ${topStudent('Althea Mae P. Sarmiento','3.96','Web Systems and Technologies',1)}
            ${topStudent('Hannah Joy T. Villanueva','3.94','Information Assurance and Security',2)}
            ${topStudent('Venus Rodgelyn C. Baybayon','3.88','Human Computer Interaction',3)}
            ${topStudent('Miguel Angelo S. Fabillar','3.83','Network Administration',4)}
            ${topStudent('Princess Anne L. Cortez','3.76','Systems Integration and Architecture',5)}
        </div></div>
        <div class="col-lg-6"><div class="edutrack-card"><h5 class="card-title mb-3">Grade Distribution</h5>
            <div class="mb-3"><div class="d-flex justify-content-between small mb-1"><span>A (90-100%)</span><span class="fw-bold">32%</span></div><div class="progress-custom"><div class="progress-bar bg-success" style="width:32%"></div></div></div>
            <div class="mb-3"><div class="d-flex justify-content-between small mb-1"><span>B (80-89%)</span><span class="fw-bold">28%</span></div><div class="progress-custom"><div class="progress-bar bg-primary" style="width:28%"></div></div></div>
            <div class="mb-3"><div class="d-flex justify-content-between small mb-1"><span>C (70-79%)</span><span class="fw-bold">22%</span></div><div class="progress-custom"><div class="progress-bar bg-warning" style="width:22%"></div></div></div>
            <div class="mb-3"><div class="d-flex justify-content-between small mb-1"><span>D (60-69%)</span><span class="fw-bold">12%</span></div><div class="progress-custom"><div class="progress-bar bg-danger" style="width:12%"></div></div></div>
            <div><div class="d-flex justify-content-between small mb-1"><span>F (Below 60%)</span><span class="fw-bold">6%</span></div><div class="progress-custom"><div class="progress-bar bg-dark" style="width:6%"></div></div></div>
        </div></div>
        <div class="col-lg-6"><div class="edutrack-card"><h5 class="card-title mb-3">Attendance by Department</h5>
            <div class="mb-3"><div class="d-flex justify-content-between small mb-1"><span>Web and Software</span><span class="fw-bold text-success">96%</span></div><div class="progress-custom"><div class="progress-bar bg-success" style="width:96%"></div></div></div>
            <div class="mb-3"><div class="d-flex justify-content-between small mb-1"><span>Network Administration</span><span class="fw-bold text-primary">94%</span></div><div class="progress-custom"><div class="progress-bar bg-primary" style="width:94%"></div></div></div>
            <div class="mb-3"><div class="d-flex justify-content-between small mb-1"><span>Security and Data</span><span class="fw-bold text-warning">91%</span></div><div class="progress-custom"><div class="progress-bar bg-warning" style="width:91%"></div></div></div>
            <div><div class="d-flex justify-content-between small mb-1"><span>Capstone and Integration</span><span class="fw-bold text-danger">88%</span></div><div class="progress-custom"><div class="progress-bar bg-danger" style="width:88%"></div></div></div>
        </div></div>
    </div>`;
}
function topStudent(name,gpa,dept,rank) {
    return `<div class="d-flex align-items-center gap-3 ${rank<5?'mb-3':''}"><span class="fw-bold text-muted">#${rank}</span><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random" class="avatar-sm"><div class="flex-grow-1"><h6 class="fw-bold mb-0 small">${name}</h6><small class="text-muted">${dept}</small></div><span class="fw-bold text-primary">${gpa}</span></div>`;
}

function adminNotifs() {
    return `<h3 class="fw-bold mb-1">Notifications & Broadcasts</h3><p class="text-muted mb-4">Send announcements to the entire school.</p>
    <div class="edutrack-card mb-4"><h5 class="card-title mb-3">Compose Broadcast</h5>
        <form onsubmit="event.preventDefault();sendBroadcast(this);">
            <div class="row g-3"><div class="col-md-6"><label class="form-label">Recipients</label><select class="form-select"><option>All Users</option><option>Students Only</option><option>Teachers Only</option><option>Parents Only</option></select></div>
            <div class="col-md-6"><label class="form-label">Priority</label><select class="form-select"><option>Normal</option><option>High</option><option>Urgent</option></select></div>
            <div class="col-12"><label class="form-label">Subject</label><input class="form-control" placeholder="Notification subject" required></div>
            <div class="col-12"><label class="form-label">Message</label><textarea class="form-control" rows="4" placeholder="Type your announcement..." required></textarea></div></div>
            <button type="submit" class="btn btn-primary mt-3"><i class="fas fa-paper-plane me-2"></i>Send Broadcast</button>
        </form>
    </div>
    <div class="edutrack-card"><h5 class="card-title mb-3">Sent Broadcasts</h5>
        ${feedbackItem('Mid-semester Break','School will be closed Oct 20-28. Classes resume October 29.','Oct 10, 2026','primary')}
        ${feedbackItem('Parent-Teacher Conference','Scheduled for October 18, 2-5 PM. All parents invited.','Oct 8, 2026','success')}
        ${feedbackItem('System Maintenance','Platform will undergo maintenance Oct 6, 2-4 AM.','Oct 5, 2026','warning')}
    </div>`;
}

function adminSettings() {
    return `<h3 class="fw-bold mb-4">System Settings</h3>
    <div class="row g-4"><div class="col-lg-8"><div class="edutrack-card"><h5 class="card-title mb-4">General Configuration</h5>
        <form onsubmit="event.preventDefault();saveForm(this.querySelector('button[type=submit]'),'Settings updated')">
            <div class="settings-section"><h6 class="fw-bold mb-3">School Information</h6><div class="row g-3">
                <div class="col-md-6"><label class="form-label">School Name</label><input class="form-control" value="EduTrack Integrated College"></div>
                <div class="col-md-6"><label class="form-label">Academic Year</label><input class="form-control" value="2026-2027"></div>
                <div class="col-md-6"><label class="form-label">Principal</label><input class="form-control" value="Dr. Sarah Mitchell"></div>
                <div class="col-md-6"><label class="form-label">Contact Email</label><input class="form-control" value="admin@edutrack.edu"></div>
            </div></div>
            <div class="settings-section"><h6 class="fw-bold mb-3">Academic Settings</h6><div class="row g-3">
                <div class="col-md-6"><label class="form-label">Grading Scale</label><select class="form-select"><option>Percentage (0-100)</option><option>Letter Grade (A-F)</option><option>GPA (0-4.0)</option></select></div>
                <div class="col-md-6"><label class="form-label">Passing Grade</label><input class="form-control" value="60%"></div>
                <div class="col-md-6"><label class="form-label">At-Risk Threshold</label><input class="form-control" value="70%"></div>
                <div class="col-md-6"><label class="form-label">Max Absences</label><input class="form-control" value="15 days"></div>
            </div></div>
            <div class="settings-section"><h6 class="fw-bold mb-3">System Preferences</h6>
                <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Enable AI Insights</label></div>
                <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Auto-generate reports</label></div>
                <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" checked><label class="form-check-label">Email notifications for parents</label></div>
                <div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox"><label class="form-check-label">Dark mode (beta)</label></div>
            </div>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save me-2"></i>Save All Settings</button>
        </form>
    </div></div>
    <div class="col-lg-4">
        <div class="edutrack-card mb-4"><h5 class="card-title mb-3">System Status</h5>
            <div class="d-flex justify-content-between mb-3"><span class="text-muted">Server Status</span><span class="badge bg-success">Online</span></div>
            <div class="d-flex justify-content-between mb-3"><span class="text-muted">Database</span><span class="badge bg-success">Healthy</span></div>
            <div class="d-flex justify-content-between mb-3"><span class="text-muted">Last Backup</span><span class="small">12 hrs ago</span></div>
            <div class="d-flex justify-content-between mb-3"><span class="text-muted">Uptime</span><span class="small fw-bold text-success">99.9%</span></div>
            <button class="btn btn-outline-dark w-100 btn-sm" onclick="showToast('Backup','System backup initiated...','success')"><i class="fas fa-database me-2"></i>Run Backup Now</button>
        </div>
        <div class="edutrack-card"><h5 class="card-title mb-3">Danger Zone</h5>
            <button class="btn btn-outline-warning w-100 mb-2 btn-sm" onclick="showToast('Cache','Cache cleared successfully!','success')"><i class="fas fa-broom me-2"></i>Clear Cache</button>
            <button class="btn btn-outline-danger w-100 btn-sm" onclick="showResetModal()"><i class="fas fa-exclamation-triangle me-2"></i>Reset System</button>
        </div>
    </div></div>`;
}
