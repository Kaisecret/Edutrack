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
                <option>Calculus (Math 101)</option>
                <option>Physics (Adv)</option>
                <option>Literature</option>
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
            <textarea class="form-control border-2" rows="2" placeholder="e.g. Integration by parts practice problems..."></textarea>
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
