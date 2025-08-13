document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});

function loadProjects() {
    fetch('./projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(projects => {
            // Sort by date (newest first)
            const sortedProjects = projects.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            renderProjects(sortedProjects);
        })
        .catch(error => {
            console.error('Error loading projects:', error);
            showError();
        });
}

function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.alt}" onclick="showDetails('${project.id}')" />
                <h3>${project.title}</h3>
                <div class="buttons">
                    <a href="${project.liveUrl}" target="_blank" class="btn-project">View</a>
                    <a href="${project.githubUrl}" target="_blank" class="btn-project github">GitHub</a>
                </div>
                <div class="project-detail" id="${project.id}">
                    <p><strong>Description:</strong> ${project.description}</p>
                    <p><strong>Tech Stack:</strong> ${project.techStack}</p>
                    <p><strong>Features:</strong> ${project.features}</p>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', projectCard);
    });
}

function showDetails(projectId) {
    const detailElement = document.getElementById(projectId);
    if (detailElement) {
        // Toggle display (matches your original functionality)
        detailElement.style.display = detailElement.style.display === 'block' ? 'none' : 'block';
    }
}

function showError() {
    const container = document.getElementById('projects-container');
    if (container) {
        container.innerHTML = `
            <div class="project-card">
                <p>Error loading projects. Please try again later.</p>
            </div>
        `;
    }
}