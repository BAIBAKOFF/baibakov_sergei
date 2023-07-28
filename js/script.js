"use strict";

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

/*==================== scroll reveal ====================*/

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  ".title, .portfolio_title, .about_items, .title_contact, .heading",
  { origin: "top" }
);
ScrollReveal().reveal(
  ".home_photo, .about_photo, .portfolio_item, .form,  .heading",
  { origin: "bottom" }
);

ScrollReveal().reveal(".about_title", { origin: "right" });

/*==================== typed js ====================*/

const typed = new Typed(".text_developer", {
  strings: ["Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  typeDelay: 1000,
  loop: true,
});

$(document).ready(function () {
  $(".menu-burger__header").click(function () {
    $(".menu-burger__header").toggleClass("open-menu");
    $(".header__nav").toggleClass("open-menu");
    $("body").toggleClass("fixed-page");
  });
});

/*==================== form ====================*/
