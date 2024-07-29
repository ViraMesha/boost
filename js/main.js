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

const swiper = new Swiper(".swiper", {
  speed: 400,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
  },
});

/*
  |==============================
  | FAQ
  |==============================
*/

const faqItemEl = document.querySelectorAll(".faq__item");

faqItemEl.forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    const iconClass = isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line";
    const iconElement = item.querySelector("i");
    iconElement.classList = `${iconClass}`;
  });
});
