const cards = document.querySelectorAll(".card");
const navBtn = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links");
const navClose = document.querySelector(".fa-circle-xmark");
const navOpen = document.querySelector(".fa-bars");
const modal = document.querySelector(".modal");

function scrollWindowHandler() {
  let trigBottom = (window.innerHeight / 5) * 4;
  let trigTop = window.innerHeight / 5;
  cards.forEach((card, idx) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardBottom = card.getBoundingClientRect().bottom;

    if (trigBottom <= cardTop || cardBottom <= trigTop) {
      card.classList.replace("card--show", "card--hidden");
    } else {
      card.classList.replace("card--hidden", "card--show");
    }
  });
}

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

scrollWindowHandler();
