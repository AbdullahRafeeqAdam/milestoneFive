var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var summary = document.getElementById('summary').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    document.getElementById('resume').style.display = 'block';
    updateResume(name, location, email, summary, education, experience, skills);
    generateResumeLink(name);
});
function updateResume(name, location, email, summary, education, experience, skills) {
    document.getElementById('resumeName').innerText = name;
    document.getElementById('resumeLocation').innerText = location;
    document.getElementById('resumeEmail').innerText = email;
    document.getElementById('resumeSummary').innerText = summary;
    document.getElementById('resumeEducation').innerText = education;
    document.getElementById('resumeExperience').innerText = experience;
    var skillsList = document.getElementById('resumeSkills');
    skillsList.innerHTML = ''; // 
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}
function generateResumeLink(name) {
    var linkContainer = document.getElementById('linkContainer');
    var resumeLink = document.getElementById('resumeLink');
    var cleanedName = name.trim().toLowerCase().replace(/\s+/g, '-');
    var url = "".concat(cleanedName, ".vercel.app/resume");
    resumeLink.innerText = url;
    resumeLink.href = "https://".concat(url);
    linkContainer.style.display = 'block';
}
