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
  window.location.href = `loading1.html?link=${link}`;
}

function toggleCheckbox() {
  const shade = document.getElementById("shade-button");

  if (shade.checked) {
    document.body.style.backgroundColor = "black";
    document.getElementById("logo-pic").src =
      "./assets/images/Atyla_Logo_Inverted.svg";

    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "white";
    }

    let h1 = document.getElementsByTagName("h1");
    for (let i = 0; i < h1.length; i++) {
      h1[i].style.color = "white";
    }

  } else {
    document.body.style.backgroundColor = "white";
    document.getElementById("logo-pic").src = "./assets/images/Atyla_Logo.svg";

    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "rgb(85, 85, 85)";
    }

    let h1 = document.getElementsByTagName("h1");
    for (let i = 0; i < h1.length; i++) {
      h1[i].style.color = "black";
    }
  }
}
