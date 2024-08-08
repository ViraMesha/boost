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

// scroll reveal

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
  reset: true,
});

// custom configurations for specific elements
const revealFromTop = {
  origin: "top",
};

const revealWithInterval = {
  distance: "100px",
  interval: 100,
};

const revealFromLeft = {
  origin: "left",
  distance: "100px",
};

const revealFromRight = {
  origin: "right",
  distance: "100px",
};

const revealWithShortDistance = {
  distance: "60px",
};

const revealWithDelay = {
  distance: "100px",
  delay: 400,
};

// hero
sr.reveal(".hero__content", revealFromTop);
sr.reveal(".hero__img");

// brands
sr.reveal(".brands__title", revealWithDelay);
sr.reveal(".brands__img", revealWithInterval);

// benefits
sr.reveal(".benefits__title", revealWithShortDistance);
sr.reveal(".benefit__content", revealFromLeft);
sr.reveal(".benefit__img", revealFromRight);

// testimonials
sr.reveal(".testimonials__container", { distance: "100px" });

// testimonials
sr.reveal(".services__title", revealWithShortDistance);
sr.reveal(".service", revealWithInterval);

// how
sr.reveal(".how__title", revealWithShortDistance);
sr.reveal(".how__item", revealWithInterval);

// expertise
sr.reveal(".expertise__content", revealFromTop);
sr.reveal(".expertise__img");

// FAQ
sr.reveal(".faq__img", {
  distance: "100px",
  origin: "top",
  interval: 100,
});
sr.reveal(".faq__title, .faq__item", revealWithInterval);

// contact
sr.reveal(".contact__form-wrapper");
sr.reveal(".contact__img", revealFromTop);

// footer
sr.reveal(".footer");
