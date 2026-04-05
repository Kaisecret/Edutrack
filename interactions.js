// ============================================================
// EduTrack – Interactive Behaviors (Real UI feedback, not toasts)
// ============================================================

// ---- Download with loading animation ----
function downloadFile(btn, filename) {
    const origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Preparing...';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Downloaded!';
        btn.classList.remove('btn-outline-danger','btn-outline-primary','btn-outline-success','btn-outline-warning');
        btn.classList.add('btn-success');
        setTimeout(() => {
            btn.innerHTML = origHTML;
            btn.disabled = false;
            btn.classList.remove('btn-success');
            btn.classList.add('btn-outline-primary');
        }, 2000);
    }, 1500);
}

// ---- Save with button animation ----
function saveForm(btn, msg) {
    const origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Saving...';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Saved!';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-success');
        setTimeout(() => {
            btn.innerHTML = origHTML;
            btn.disabled = false;
            btn.classList.remove('btn-success');
            btn.classList.add('btn-primary');
        }, 2000);
    }, 800);
}

// ---- Log Study Session (increments the progress) ----
let studyProgress = 70;
function logStudySession(btn) {
    var title = 'Log Study Session ⏱️';
    var bodyHtml = `
        <div class="mb-3">
            <label class="form-label text-muted fw-bold small">SUBJECT</label>
            <select class="form-select border-2" id="studySubject">
                <option>Database Systems</option>
                <option>Human Computer Interaction</option>
                <option>Network Administration</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label text-muted fw-bold small">DURATION</label>
            <div class="input-group">
                <input type="number" class="form-control border-2" id="studyDuration" value="45" min="15" step="15">
                <span class="input-group-text border-2 bg-light">minutes</span>
            </div>
        </div>
        <div class="mb-3">
            <label class="form-label text-muted fw-bold small">WHAT DID YOU COVER?</label>
            <textarea class="form-control border-2" rows="2" placeholder="e.g. query optimization drills and persona mapping notes..."></textarea>
        </div>
        <div class="p-3 bg-success bg-opacity-10 text-success rounded border border-success border-opacity-25 mt-4">
            <i class="fas fa-chart-line me-2"></i> You are <strong>30%</strong> away from your weekly goal!
        </div>
    `;
    var footerHtml = `
        <button class="btn btn-success fw-bold px-4" onclick="confirmLogSession(this)">Save Session</button>
        <button class="btn btn-light fw-bold" data-bs-dismiss="modal">Cancel</button>
    `;
    
    var modalEl = document.getElementById('appModal');
    document.getElementById('appModalTitle').innerHTML = title;
    document.getElementById('appModalBody').innerHTML = bodyHtml;
    document.getElementById('appModalFooter').innerHTML = footerHtml;
    
    var modal = bootstrap.Modal.getInstance(modalEl);
    if (!modal) modal = new bootstrap.Modal(modalEl, { backdrop: 'static' });
    modal.show();
}

function confirmLogSession(btn) {
    var dur = document.getElementById('studyDuration').value || 45;
    var origHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Saving...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Logged Successfully!';
        btn.classList.add('btn-success');
        
        // Update UI progress counter
        studyProgress = Math.min(100, studyProgress + 15);
        document.querySelectorAll('h2').forEach(function(el) {
            if (el.textContent.includes('%') && el.closest('.rounded-circle')) {
                el.textContent = studyProgress + '%';
                // Add a quick pop animation
                el.closest('.rounded-circle').style.transform = 'scale(1.1)';
                setTimeout(() => el.closest('.rounded-circle').style.transform = 'scale(1)', 300);
            }
        });
        
        setTimeout(() => {
            closeModal();
            showToast('Study Logged', dur + ' minutes added to your progress tracker. Great job!', 'success');
        }, 1200);
    }, 1000);
}

// ---- Send Message (adds to conversation list) ----
function sendTeacherMessage(form) {
    const teacher = form.querySelector('select')?.value || 'Teacher';
    const subject = form.querySelector('input[placeholder*="subject"]')?.value || 'General';
    const message = form.querySelector('textarea')?.value || '';
    if (!message.trim()) { showToast('Error','Please write a message first.','danger'); return; }
    const msgList = form.closest('.edutrack-card');
    const prevCard = msgList?.previousElementSibling;
    if (prevCard) {
        const newMsg = document.createElement('div');
        newMsg.className = 'border-start border-4 border-success ps-3 mb-3 bg-light p-3 rounded-end';
        newMsg.style.animation = 'slideUp 0.3s ease';
        newMsg.innerHTML = '<div class="d-flex justify-content-between mb-1"><h6 class="fw-bold mb-0">You → '+teacher+'</h6><small class="text-muted">Just now</small></div><p class="mb-0 text-muted small">'+message+'</p>';
        prevCard.querySelector('.edutrack-card')?.prepend(newMsg) || prevCard.prepend(newMsg);
    }
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-success');
        btn.disabled = true;
        setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('btn-success'); btn.classList.add('btn-primary'); btn.disabled = false; }, 2000);
    }
    form.reset();
}

// ---- Send Feedback (teacher to student) ----
function sendStudentFeedback(form) {
    const student = form.querySelector('select')?.value || 'Student';
    const message = form.querySelector('textarea')?.value || '';
    if (!message.trim()) { showToast('Error','Please write feedback first.','danger'); return; }
    const feedbackList = form.closest('.edutrack-card')?.nextElementSibling;
    if (feedbackList) {
        const newFB = document.createElement('div');
        newFB.className = 'border-start border-4 border-success ps-3 mb-3 bg-light p-3 rounded-end';
        newFB.style.animation = 'slideUp 0.3s ease';
        newFB.innerHTML = '<div class="d-flex justify-content-between mb-1"><h6 class="fw-bold mb-0">'+student+'</h6><small class="text-muted">Just now</small></div><p class="mb-0 text-muted small">'+message+'</p>';
        const firstChild = feedbackList.querySelector('.border-start');
        if (firstChild) firstChild.before(newFB);
        else feedbackList.appendChild(newFB);
    }
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Feedback Sent!';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-success');
        btn.disabled = true;
        setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('btn-success'); btn.classList.add('btn-primary'); btn.disabled = false; }, 2000);
    }
    form.reset();
}

// ---- Save Grades with row highlight ----
function saveAllGrades(btn) {
    const origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Saving...';
    document.querySelectorAll('.grade-input').forEach(inp => {
        inp.style.transition = 'background 0.3s';
        inp.style.background = '#d1fae5';
        setTimeout(() => { inp.style.background = ''; }, 1500);
    });
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check me-2"></i>All Grades Saved!';
        btn.classList.remove('btn-success');
        btn.classList.add('btn-success');
        setTimeout(() => {
            btn.innerHTML = origHTML;
            btn.disabled = false;
        }, 2000);
    }, 1000);
}

// ---- Save Attendance with row highlight ----
function saveAttendance(btn) {
    const origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Recording...';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Attendance Saved!';
        setTimeout(() => {
            btn.innerHTML = origHTML;
            btn.disabled = false;
        }, 2000);
    }, 1000);
}

// ---- Send Broadcast (admin) ----
function sendBroadcast(form) {
    const recipients = form.querySelector('select')?.value || 'All';
    const subject = form.querySelectorAll('input')[0]?.value || '';
    const message = form.querySelector('textarea')?.value || '';
    if (!subject.trim() || !message.trim()) { showToast('Error','Please fill all fields.','danger'); return; }
    const sentList = form.closest('.edutrack-card')?.nextElementSibling;
    if (sentList) {
        const newBc = document.createElement('div');
        newBc.className = 'border-start border-4 border-primary ps-3 mb-3 bg-light p-3 rounded-end';
        newBc.style.animation = 'slideUp 0.3s ease';
        newBc.innerHTML = '<div class="d-flex justify-content-between mb-1"><h6 class="fw-bold mb-0">'+subject+'</h6><small class="text-muted">Just now</small></div><p class="mb-0 text-muted small">'+message+' (Sent to: '+recipients+')</p>';
        const firstChild = sentList.querySelector('.border-start');
        if (firstChild) firstChild.before(newBc);
        else sentList.appendChild(newBc);
    }
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Broadcast Sent!';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-success');
        btn.disabled = true;
        setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('btn-success'); btn.classList.add('btn-primary'); btn.disabled = false; }, 2000);
    }
    form.reset();
}

// ---- Mark notification as read with animation ----
function markNotifRead(el, title) {
    el.style.transition = 'all 0.3s ease';
    el.classList.remove('bg-light');
    el.style.opacity = '0.6';
    const badge = el.querySelector('.badge.bg-primary');
    if (badge) badge.remove();
    setTimeout(() => { el.style.opacity = '1'; }, 300);
}

// ---- Subscribe newsletter ----
function subscribeNewsletter(btn, emailInput) {
    const email = emailInput?.value;
    if (!email) return;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-success');
        emailInput.value = '';
        emailInput.placeholder = 'Subscribed!';
        emailInput.disabled = true;
        setTimeout(() => {
            btn.innerHTML = 'Subscribe';
            btn.classList.remove('btn-success');
            btn.classList.add('btn-primary');
            btn.disabled = false;
            emailInput.placeholder = 'Enter your email';
            emailInput.disabled = false;
        }, 3000);
    }, 1000);
}

// ---- Profile photo change simulation ----
function changePhoto(btn) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Photo Updated!';
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-success','text-white');
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = orig;
            btn.classList.remove('btn-success','text-white');
            btn.classList.add('btn-outline-primary');
            btn.disabled = false;
        }, 2000);
    };
    input.click();
}

// ---- Practice Quiz ----
let quizScore = 0;
let quizCurrent = 0;
const quizQuestions = [
    { q: 'What is the derivative of x³?', opts: ['x²','3x²','3x','2x³'], correct: 1 },
    { q: 'Evaluate: ∫ 2x dx', opts: ['x²+C','2x²+C','x+C','2+C'], correct: 0 },
    { q: 'What is the derivative of sin(x)?', opts: ['-cos(x)','cos(x)','tan(x)','sin(x)'], correct: 1 },
    { q: 'Evaluate: lim(x→0) sin(x)/x', opts: ['0','∞','1','undefined'], correct: 2 },
    { q: 'What is ∫ e^x dx?', opts: ['xe^x+C','e^x+C','e^(x+1)+C','ln(x)+C'], correct: 1 }
];

function startPracticeQuiz() {
    quizScore = 0;
    quizCurrent = 0;
    showQuizQuestion();
    var modalEl = document.getElementById('appModal');
    var modal = bootstrap.Modal.getInstance(modalEl);
    if (!modal) {
        modal = new bootstrap.Modal(modalEl, { backdrop: 'static' });
    }
    modal.show();
}

function showQuizQuestion() {
    var titleEl = document.getElementById('appModalTitle');
    var bodyEl = document.getElementById('appModalBody');
    var footerEl = document.getElementById('appModalFooter');

    if (quizCurrent >= quizQuestions.length) {
        var pct = Math.round((quizScore / quizQuestions.length) * 100);
        var emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
        titleEl.innerHTML = 'Quiz Complete! ' + emoji;
        var review = quizQuestions.map(function(q,i) {
            return '<div class="col-12 p-2 rounded ' + (q.userAnswer===q.correct?'bg-success bg-opacity-10':'bg-danger bg-opacity-10') + '"><small class="fw-bold">' + (i+1) + '. ' + q.q + '</small><br><small class="' + (q.userAnswer===q.correct?'text-success':'text-danger') + '">' + (q.userAnswer===q.correct?'✓ Correct':'✗ Your answer: ' + q.opts[q.userAnswer] + ' → Correct: ' + q.opts[q.correct]) + '</small></div>';
        }).join('');
        bodyEl.innerHTML = '<div class="text-center py-3"><div class="d-inline-flex justify-content-center align-items-center rounded-circle border border-5 mb-3 ' + (pct>=80?'border-success text-success':'border-warning text-warning') + '" style="width:120px;height:120px;"><h2 class="fw-bold mb-0">' + pct + '%</h2></div><h4 class="fw-bold">You scored ' + quizScore + ' out of ' + quizQuestions.length + '</h4><p class="text-muted">' + (pct>=80?'Excellent! You have a strong grasp of calculus concepts.':pct>=60?'Good effort! Review integration techniques for improvement.':'Keep practicing! Focus on derivatives and integrals.') + '</p><div class="row g-2 mt-3 text-start">' + review + '</div></div>';
        footerEl.innerHTML = '<button class="btn btn-primary" onclick="startPracticeQuiz()">Retry Quiz</button><button class="btn btn-light" data-bs-dismiss="modal">Close</button>';
        return;
    }
    var q = quizQuestions[quizCurrent];
    var progress = Math.round(((quizCurrent) / quizQuestions.length) * 100);
    titleEl.innerHTML = 'Practice Quiz — Question ' + (quizCurrent + 1) + '/' + quizQuestions.length;
    var opts = q.opts.map(function(opt, i) {
        return '<div class="col-md-6"><button class="btn btn-outline-primary w-100 py-3 fw-medium text-start quiz-opt" onclick="answerQuiz(' + i + ')"><span class="badge bg-primary bg-opacity-10 text-primary me-2">' + String.fromCharCode(65+i) + '</span>' + opt + '</button></div>';
    }).join('');
    bodyEl.innerHTML = '<div class="mb-3"><div class="progress-custom"><div class="progress-bar bg-primary" style="width:' + progress + '%;transition:width 0.3s;"></div></div><small class="text-muted mt-1 d-block">' + progress + '% complete</small></div><div class="p-4 bg-light rounded mb-4"><h5 class="fw-bold mb-0">' + q.q + '</h5></div><div class="row g-2">' + opts + '</div>';
    footerEl.innerHTML = '<small class="text-muted">Score: ' + quizScore + '/' + quizQuestions.length + '</small>';
}

function answerQuiz(idx) {
    var q = quizQuestions[quizCurrent];
    q.userAnswer = idx;
    var btns = document.querySelectorAll('.quiz-opt');
    btns.forEach(function(b, i) {
        b.disabled = true;
        b.style.cursor = 'default';
        if (i === q.correct) {
            b.classList.remove('btn-outline-primary');
            b.classList.add('btn-success','text-white');
        } else if (i === idx && idx !== q.correct) {
            b.classList.remove('btn-outline-primary');
            b.classList.add('btn-danger','text-white');
        } else {
            b.style.opacity = '0.5';
        }
    });
    if (idx === q.correct) quizScore++;
    quizCurrent++;
    setTimeout(showQuizQuestion, 1200);
}

// ---- Teacher Grade Tab Switch ----
function switchGradeTab(tabId) {
    document.querySelectorAll('#gradeTabs .nav-link').forEach(el => el.classList.remove('active'));
    document.getElementById('btn-tab-' + tabId).classList.add('active');
    document.querySelectorAll('.grade-tab-content').forEach(el => el.classList.add('d-none'));
    document.getElementById('grade-tab-' + tabId).classList.remove('d-none');
}

// ---- Teacher/Admin Data-driven Views ----
let adminContext = { year: '', course: '', section: '' };

function gradeBadgeClass(score) {
    return score >= 90 ? 'badge-soft-success' : score >= 80 ? 'badge-soft-primary' : score >= 75 ? 'badge-soft-warning' : 'badge-soft-danger';
}

function gradeLabel(score) {
    return score >= 90 ? 'Excellent' : score >= 80 ? 'Good' : score >= 75 ? 'Needs Support' : 'At Risk';
}

function renderTeacherGradeTable(section) {
    const tbody = document.getElementById('teacher-grade-table-body');
    if (!tbody) return;

    const students = DATA.students.filter(student => student.section === section);
    tbody.innerHTML = students.map(student => `
        <tr>
            <td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random" class="avatar-sm">${student.name}</div></td>
            <td><input class="form-control form-control-sm grade-input" value="${student.grades.prelim}"></td>
            <td><input class="form-control form-control-sm grade-input" value="${student.grades.midterm}"></td>
            <td><input class="form-control form-control-sm grade-input" value="${student.grades.finals}"></td>
            <td class="fw-bold fs-6">${student.grades.finalGrade}%</td>
            <td><span class="badge ${gradeBadgeClass(student.grades.finalGrade)}">${gradeLabel(student.grades.finalGrade)}</span></td>
            <td><button class="btn btn-sm btn-outline-primary" onclick="showStudentProfileModal('${student.name}',${student.grades.finalGrade},'${student.gpa}','${student.attendance}%','${student.status}','${student.color}')"><i class="fas fa-eye"></i></button></td>
        </tr>`).join('');
}

function renderTeacherExamList(section) {
    const tbody = document.getElementById('teacher-exam-list-body');
    if (!tbody) return;

    const exams = DATA.exams.filter(exam => exam.section === section);
    tbody.innerHTML = exams.map(exam => `
        <tr>
            <td class="fw-bold">${exam.name}</td>
            <td>${exam.date}</td>
            <td>${exam.maxScore}</td>
            <td><span class="badge ${exam.status === 'Pending' ? 'badge-soft-warning' : 'badge-soft-success'}">${exam.status}</span></td>
            <td><button class="btn btn-sm btn-primary" onclick="openTeacherExamRoster(${exam.id})">Manage Scores</button></td>
        </tr>`).join('');
}

function showTeacherExamCreateModal() {
    openModal('Create Assessment',
        `<form>
            <div class="row g-3">
                <div class="col-md-8"><label class="form-label">Assessment Name</label><input class="form-control" placeholder="e.g. Midterm Practical Exam"></div>
                <div class="col-md-4"><label class="form-label">Max Score</label><input type="number" class="form-control" value="100"></div>
                <div class="col-md-6"><label class="form-label">Section</label><select class="form-select"><option>BSIT-1A</option><option>BSIT-2B</option><option>BSIT-3C</option></select></div>
                <div class="col-md-6"><label class="form-label">Date</label><input type="date" class="form-control"></div>
            </div>
        </form>`,
        `<button class="btn btn-light" data-bs-dismiss="modal">Cancel</button><button class="btn btn-primary" onclick="closeModal();showToast('Created','Assessment created successfully.','success')">Create</button>`);
}

function openTeacherExamRoster(examId) {
    const exam = DATA.exams.find(item => item.id === examId);
    if (!exam) return;
    const students = DATA.students.filter(student => student.section === exam.section);

    openModal(`${exam.name} Scores`,
        `<div class="mb-3"><strong>Section:</strong> ${exam.section} | <strong>Max Score:</strong> ${exam.maxScore}</div>
        <div class="table-responsive"><table class="table table-custom"><thead><tr><th>Student</th><th>Score</th><th>Feedback</th></tr></thead><tbody>
            ${students.map(student => `<tr><td>${student.name}</td><td><input type="number" class="form-control form-control-sm" max="${exam.maxScore}" value="${Math.max(0, Math.min(exam.maxScore, student.grades.finalGrade))}"></td><td><input class="form-control form-control-sm" placeholder="Optional note"></td></tr>`).join('')}
        </tbody></table></div>`,
        `<button class="btn btn-light" data-bs-dismiss="modal">Close</button><button class="btn btn-primary" onclick="closeModal();showToast('Saved','Assessment scores saved successfully.','success')">Save Scores</button>`);
}

function renderTeacherAttendanceTable(section) {
    const tbody = document.getElementById('teacher-attendance-table-body');
    if (!tbody) return;

    const students = DATA.students.filter(student => student.section === section);
    tbody.innerHTML = students.map((student, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random" class="avatar-sm">${student.name}</div></td>
            <td><input type="radio" name="att-${student.id}" checked></td>
            <td><input type="radio" name="att-${student.id}"></td>
            <td><input type="radio" name="att-${student.id}"></td>
            <td><input class="form-control form-control-sm" placeholder="Optional note"></td>
        </tr>`).join('');
}

function renderTeacherStudentProfiles(section) {
    const grid = document.getElementById('teacher-students-grid');
    if (!grid) return;

    const students = DATA.students.filter(student => student.section === section);
    grid.innerHTML = students.map(student =>
        studentCard(student.name, student.grades.finalGrade, student.gpa, `${student.attendance}%`, student.status)
    ).join('');
}

function renderAdminGradeManagement() {
    const tbody = document.getElementById('admin-grade-summary-body');
    if (!tbody) return;

    const sections = [...new Set(DATA.students.map(student => student.section))];
    tbody.innerHTML = sections.map(section => {
        const sectionStudents = DATA.students.filter(student => student.section === section);
        const average = Math.round(sectionStudents.reduce((sum, student) => sum + student.grades.finalGrade, 0) / sectionStudents.length);
        const pending = sectionStudents.filter(student => student.grades.finalGrade < 80).length;
        return `<tr>
            <td class="fw-bold">${section}</td>
            <td>${DATA.teachers.find(teacher => teacher.section === section)?.name || 'Unassigned'}</td>
            <td>${average}%</td>
            <td>${pending}</td>
            <td><span class="badge ${pending ? 'badge-soft-warning' : 'badge-soft-success'}">${pending ? 'Needs Review' : 'Healthy'}</span></td>
            <td><button class="btn btn-sm btn-outline-primary" onclick="showToast('Opened','Grade review opened for ${section}.','primary')">Review</button></td>
        </tr>`;
    }).join('');
}

function renderAdminAttendanceSummary() {
    const tbody = document.getElementById('admin-attendance-summary-body');
    if (!tbody) return;

    const summary = [
        { section: 'BSIT-1A', present: 34, late: 2, absent: 1, trend: 'Stable' },
        { section: 'BSIT-2B', present: 31, late: 3, absent: 2, trend: 'Watchlist' },
        { section: 'BSIT-3C', present: 33, late: 1, absent: 2, trend: 'Improving' }
    ];

    tbody.innerHTML = summary.map(item => `<tr><td class="fw-bold">${item.section}</td><td>${item.present}</td><td>${item.late}</td><td>${item.absent}</td><td><span class="badge ${item.trend === 'Stable' ? 'badge-soft-success' : item.trend === 'Improving' ? 'badge-soft-primary' : 'badge-soft-warning'}">${item.trend}</span></td></tr>`).join('');
}

function generateReport(type) {
    showToast('Generating', `${type} report is being prepared for download.`, 'success');
}

function adminWizardStep(type, step, dataVal) {
    for (let i = 1; i <= 4; i++) {
        const el = document.getElementById(`${type}-step-${i}`);
        if (el) el.classList.add('d-none');
    }

    const target = document.getElementById(`${type}-step-${step}`);
    if (target) target.classList.remove('d-none');

    if (step === 2 && dataVal) adminContext.year = dataVal;
    if (step === 3 && dataVal) {
        adminContext.course = dataVal;
        const grid = document.getElementById(`${type}-sections-grid`);
        if (grid) {
            const yearNumber = adminContext.year.charAt(0);
            grid.innerHTML = ['A', 'B', 'C'].map(letter => `
                <div class="col-md-4">
                    <div class="edutrack-card text-center p-4 cursor-pointer hover-shadow" onclick="adminWizardStep('${type}',4,'${dataVal}-${yearNumber}${letter}')">
                        <div class="bg-info bg-opacity-10 text-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width:58px;height:58px;"><i class="fas fa-chalkboard"></i></div>
                        <h6 class="fw-bold mb-1">${dataVal}-${yearNumber}${letter}</h6>
                        <small class="text-muted">Open management view</small>
                    </div>
                </div>`).join('');
        }
    }

    if (step === 4 && dataVal) {
        adminContext.section = dataVal;
        const tbody = document.getElementById(`${type}-tbody`);
        if (tbody) {
            if (type === 'admin-student') {
                const students = DATA.students.filter(student => student.section === dataVal);
                tbody.innerHTML = students.map(student => `<tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random" class="avatar-sm">${student.name}</div></td><td>STU-00${student.id}</td><td>${dataVal}</td><td><span class="badge ${student.status === 'At Risk' ? 'badge-soft-danger' : 'badge-soft-success'}">${student.status}</span></td><td class="fw-bold">${student.gpa}</td><td><button class="btn btn-sm btn-outline-primary" onclick="showToast('Edit','Opening ${student.name} profile...','primary')"><i class="fas fa-edit"></i></button></td></tr>`).join('');
            } else if (type === 'admin-teacher') {
                const teachers = DATA.teachers.filter(teacher => teacher.section === dataVal);
                tbody.innerHTML = teachers.map((teacher, index) => `<tr><td><div class="d-flex align-items-center gap-2"><img src="https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&background=random" class="avatar-sm">${teacher.name}</div></td><td>EMP-00${index + 1}</td><td>${teacher.subject}</td><td><span class="badge badge-soft-success">Active</span></td><td><button class="btn btn-sm btn-outline-primary" onclick="showToast('Edit','Updating ${teacher.name} assignment...','primary')"><i class="fas fa-edit"></i></button></td></tr>`).join('');
            } else if (type === 'admin-parent') {
                const parents = DATA.parents.filter(parent => parent.section === dataVal);
                tbody.innerHTML = parents.map(parent => `<tr><td class="fw-bold">${parent.name}</td><td>${parent.email}</td><td>${parent.child}</td><td>${parent.section}</td><td><button class="btn btn-sm btn-outline-primary" onclick="showToast('Linked','Parent record opened.','primary')"><i class="fas fa-link"></i></button></td></tr>`).join('');
            } else if (type === 'admin-class') {
                tbody.innerHTML = `<tr><td class="fw-bold text-primary">${dataVal}</td><td>${adminContext.course}</td><td>${DATA.teachers.find(teacher => teacher.section === dataVal)?.name || 'TBD'}</td><td>38 / 40</td><td><button class="btn btn-sm btn-outline-primary" onclick="showToast('Edited','Class settings opened.','primary')"><i class="fas fa-edit"></i></button></td></tr>`;
            } else if (type === 'admin-subject') {
                tbody.innerHTML = DATA.subjects.slice(0, 4).map((subject, index) => `<tr><td><span class="fw-bold text-primary">IT-10${index + 1}</span><br>${subject.name}</td><td>${index % 2 === 0 ? 'Lecture' : 'Lab'}</td><td>${index % 2 === 0 ? '3.0' : '1.0'}</td><td>${DATA.teachers[index % DATA.teachers.length].name}</td><td><span class="badge badge-soft-success">Active</span></td></tr>`).join('');
            }
        }
    }

    const breadcrumbs = document.getElementById(`${type}-breadcrumbs`);
    if (breadcrumbs) {
        breadcrumbs.innerText = step === 1 ? 'Step 1: Select Year Level' : step === 2 ? `Step 2: Select Program (${adminContext.year})` : step === 3 ? `Step 3: Select Section (${adminContext.course})` : `Step 4: Managing ${adminContext.section}`;
    }
}
