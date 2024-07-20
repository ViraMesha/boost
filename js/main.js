const navTrigger = document.querySelector("#navTrigger");
const nav = document.querySelector("#nav");
const closeBtn = document.querySelector("#navCloseBtn");
const header = document.querySelector("#header");

// add a click event listener to the nav
navTrigger.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

// add a click event listener to the nav close btn
closeBtn.addEventListener("click", () => {
  nav.classList.remove("is-open");
});

// add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // get the current vertical scroll position
  const scrollY = window.scrollY;

  // add and remove the active class from the header based on the scroll position
  scrollY > 50
    ? header.classList.add("is-active")
    : header.classList.remove("is-active");
});
