'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

let currentIndex = 0;

function nextSlide() {
  const slideList = document.getElementById('popular-list');
  const slideWidth = slideList.children[0].offsetWidth;

  if (currentIndex < slideList.children.length - 1) {
    currentIndex++;
    slideList.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
}

function prevSlide() {
  const slideList = document.getElementById('popular-list');
  const slideWidth = slideList.children[0].offsetWidth;

  if (currentIndex > 0) {
    currentIndex--;
    slideList.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
}


let scrollAmount = 0;
const scrollStep = 300;

function nextSlide() {
  const slider = document.getElementById('popular-list');
  scrollAmount += scrollStep;
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

function prevSlide() {
  const slider = document.getElementById('popular-list');
  scrollAmount -= scrollStep;
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

