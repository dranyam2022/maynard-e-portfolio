const cards = document.querySelectorAll(".card");

function scrollHandler() {
  let innerHeight = window.innerHeight;
  let rectTop = cards[3].getBoundingClientRect().top;
  if (rectTop <= 500) {
    cards[3].style.opacity = 1;
    cards[2].style.transform = "translateY: 2rem";
  } else {
    cards[3].style.opacity = 0.2;
  }
  console.log(innerHeight, rectTop);
}

window.addEventListener("scroll", scrollHandler);
scrollHandler();
//if window.innerheight -  elem rect top <=
