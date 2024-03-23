// Setup and start animation!

var typed = new Typed("#element", {
  strings: [" Web developer", " Programmer"],
  typeSpeed: 60,
  backspeed: 40,
  loop: true,
});

// dropdown menu 
let menu = document.querySelector("#menu");
let navlinks = document.querySelector(".navlinks");
let sections = document.querySelectorAll(".main");
let navlink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute;

    if (top >= offset && top < offset + height) {
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlinks.classList.toggle("active");
};
