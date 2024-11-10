function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toProject(type) {
  const project = `projects.html?title=${type}`;
  window.location.href = `loading.html?link=${project}`;
}

function returnMainPage() {
  const link = "index.html";
  window.location.href = `loading.html?link=${link}`;
}

const sampleProjects = document.querySelectorAll('.sample-project-container');
const projectNav = document.querySelectorAll('.project-links');

sampleProjects[0].classList.toggle('active');

projectNav.forEach((nav, index) => {
  nav.addEventListener('click', () => {
    sampleProjects.forEach(sample => sample.classList.remove('active'));
    sampleProjects[index].classList.toggle('active');
  });
});