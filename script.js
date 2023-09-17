import { projects } from "./static/projects.js";

const navBtn = document.querySelector(".nav__btn");
const navOpen = document.querySelector(".fa-bars");
const modal = document.querySelector(".modal");
const me = document.querySelector(".card--small");
const thumbPrint = document.querySelector(".card__thumbprint");

// Generate the projects dynamically
const projectsSection = document.querySelector(".projects");

// create an div element for each project
projects.forEach((project) => {
  const div = document.createElement("div");
  const a = document.createElement("a");

  // append a to div and span to a

  div.appendChild(a);
  div.classList.add("card", "card--medium", "projects", "card--hidden");
  // change background image url
  div.style.backgroundImage = `url(${project.url})`;
  a.setAttribute("target", "_blank");
  a.setAttribute("href", project.href);
  projectsSection.appendChild(div);
});

/* scroll handler */
function scrollWindowHandler() {
  const cards = document.querySelectorAll(".card");
  let trigBottom = (window.innerHeight / 5) * 4;
  let trigTop = window.innerHeight / 5;
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardBottom = card.getBoundingClientRect().bottom;

    if (trigBottom <= cardTop || cardBottom <= trigTop) {
      card.classList.replace("card--show", "card--hidden");
    } else {
      card.classList.replace("card--hidden", "card--show");
    }
  });
  console.log("Run");
}

/* scroll event listener */
window.addEventListener("scroll", scrollWindowHandler);

/* navBtn click handler on mobile screen */
navBtn.addEventListener("click", clickNavHandler);

function clickNavHandler(evt) {
  if (evt.target.classList.value.includes("fa-bars")) {
    navOpen.classList.replace("nav--open", "nav--close");
    modal.style.display = "block";
  } else {
    navOpen.classList.replace("nav--close", "nav--open");
    modal.style.display = "none";
  }
}

modal.addEventListener("click", clickNavHandler);

window.addEventListener("resize", () => {
  setTimeout(scrollWindowHandler, 100);
});

me.addEventListener("click", () => {
  thumbPrint.classList.toggle("card--showMe");
});

window.onload = scrollWindowHandler;
