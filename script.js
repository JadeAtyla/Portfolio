function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function downloadCV() {
  const cv = document.getElementById("cv");
  const link = document.createElement("a");
  link.href = "assets/Jade Atyla Madigal - Resume.pdf";
  link.download = "Jade Atyla Madigal - Resume.pdf";
  
  cv.appendChild(link);
  link.click();

  cv.removeChild(link);
}

function toProject(type){
  const project = `projects.html?title=${type}`
  window.location.href = `loading.html?link=${project}`;
}

function returnMainPage(){
  const link = 'index.html';
  window.location.href = `loading.html?link=${link}`;
}