const cards = document.querySelectorAll(".card");
const navBtn = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links");
const navClose = document.querySelector(".fa-circle-xmark");
const navOpen = document.querySelector(".fa-bars");
const modal = document.querySelector(".modal");

function scrollWindowHandler() {
  cards.forEach((card) => {
    const rectTop = card.getBoundingClientRect().top;
    const rectBottom = card.getBoundingClientRect().bottom;

    if (window.innerHeight - 90 <= rectTop || rectBottom <= 20) {
      card.style.opacity = "0.1";
      card.style.marginTop = "5rem";
    } else {
      card.style.opacity = "1";
      card.style.marginTop = "2rem";
    }
  });
}

window.addEventListener("scroll", scrollWindowHandler);
/* init scrollWindowHandler */
scrollWindowHandler();

/* navBtn click handler on mobile screen */
navBtn.addEventListener("click", clickNavHandler);

function clickNavHandler(evt) {
  console.log(evt.target.classList.value);
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
  if (window.innerWidth >= 1200) {
    modal.style.display = "none";
    navOpen.classList.replace("nav--close", "nav--open");
  }
});
