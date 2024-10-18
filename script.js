function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function downloadCV() {
  const cv = document.getElementById("cv");
  cv.href = "assets/Jade Atyla Madigal - Resume.pdf";
  cv.download = "Jade Atyla Madigal - Resume.pdf";
  cv.click();
}