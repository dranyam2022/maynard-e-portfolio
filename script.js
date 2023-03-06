const cards = document.querySelectorAll(".card");

function scrollHandler() {
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

scrollHandler();

window.addEventListener("scroll", scrollHandler);
