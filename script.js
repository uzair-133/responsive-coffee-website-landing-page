const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenbutton = document.querySelector("#menu-open-button");
const menuclosebutton = document.querySelector("#menu-close-button");

menuOpenbutton.addEventListener("click", () => {
  // toggle mobile menu visibility
document.body.classList.toggle("show-mobile-menu");
});
// close menu when close button is clicked
menuclosebutton.addEventListener("click",() => menuOpenbutton.click());

// close the menu when the nav link is clicked

navlinks.forEach(link => {
  link.addEventListener("click",() => menuOpenbutton.click());
});
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
  spaceBetween: 25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive breakpoints
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
  
  });