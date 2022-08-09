const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".carousel-slider");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let direction = -1;

prev.addEventListener("click", function () {
  if (direction == -1) {
    slider.appendChild(slider.firstElementChild);
  }
  direction = 1;
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(16.6%)";
});

next.addEventListener("click", function () {
  if (direction == 1) {
    slider.prepend(slider.lastElementChild);
  }
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-16.6%)";
});

slider.addEventListener("transitionend", function () {
  if (direction == -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction == 1) {
    slider.prepend(slider.lastElementChild);
  }

  slider.style.transition = "none";
  slider.style.transform = "translate(0)";

  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});

//Move entire slider to the right (showing the PREVIOUS story)
//Move entire slider to the left (showing the NEXT story)
//Move the first element to the last position of the slides
//Temporarily disable the 'transition' attribute to
//not show undesired things
//Function inside a timeout to make sure javascript will execute
//it in the correct order



const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const burgerIcon     = document.querySelector(".burger-icon");
const closeIcon      = document.querySelector(".close-icon");

const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.width = "0%";
const mobileUlTitles = document.querySelector(".mobile-ul-titles");

const scLink = document.getElementsByClassName("mobile-menu-link")[0];
const packLink = document.getElementsByClassName("mobile-menu-link")[1];
const meLink = document.getElementsByClassName("mobile-menu-link")[2];

function openMobileMenu() {
  burgerIcon.style.display = 'none'
  closeIcon.style.display = 'block'

  mobileMenu.style.width = "100%";
  mobileUlTitles.style.opacity = 1;
  mobileUlTitles.style.transitionDelay = "0.7s";
}

function closeMobileMenu() {
  closeIcon.style.display = 'none'
  burgerIcon.style.display = 'block'

  mobileMenu.style.width = "0%";
  mobileUlTitles.style.opacity = 0;
  mobileUlTitles.style.transitionDelay = "0s";
}

mobileMenuIcon.addEventListener("click", function () {
  if (mobileMenu.style.width == "0%") {
    openMobileMenu()
  } else {

    closeMobileMenu()
  }
});

scLink.addEventListener("click", function () {
  closeMobileMenu();
});

packLink.addEventListener("click", function () {
  closeMobileMenu();
});

meLink.addEventListener("click", function () {
  closeMobileMenu();
});
