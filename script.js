const cards = document.querySelectorAll(".card");
const navBtn = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links");

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
