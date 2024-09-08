document.getElementById('resumeForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    (document.getElementById('resume') as HTMLElement).style.display = 'block';

    updateResume(name, location, email, summary, education, experience, skills);

    generateResumeLink(name);
});

function updateResume(name: string, location: string, email: string, summary: string, education: string, experience: string, skills: string[]) {
    (document.getElementById('resumeName') as HTMLElement).innerText = name;
    (document.getElementById('resumeLocation') as HTMLElement).innerText = location;
    (document.getElementById('resumeEmail') as HTMLElement).innerText = email;
    (document.getElementById('resumeSummary') as HTMLElement).innerText = summary;
    (document.getElementById('resumeEducation') as HTMLElement).innerText = education;
    (document.getElementById('resumeExperience') as HTMLElement).innerText = experience;

    const skillsList = document.getElementById('resumeSkills') as HTMLElement;
    skillsList.innerHTML = ''; // 
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
}

function generateResumeLink(name: string) {
    const linkContainer = document.getElementById('linkContainer') as HTMLElement;
    const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;

    const cleanedName = name.trim().toLowerCase().replace(/\s+/g, '-');

    const url = `${cleanedName}.vercel.app/resume`;
    resumeLink.innerText = url;
    resumeLink.href = `https://${url}`;

    linkContainer.style.display = 'block';
}
