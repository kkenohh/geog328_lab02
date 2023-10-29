const hamburger = document.querySelector('#hamburger');
const bars = document.querySelectorAll('.bars');
const menu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  bars.forEach(bar => bar.classList.toggle('transform-bars'))
  menu.classList.toggle('open');
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => accordion.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle('active');
  let post = e.currentTarget.nextElementSibling;
  if (post.style.display === "flex") {
    post.style.display = "none";
  } else {
    post.style.display = "flex";
  }
}));

let current = window.location.href;

let navs = document.querySelectorAll('.nav-link');

for (let i = 0; i < navs.length; i++) {
  if (navs[i].href === current) {
    navs[i].classList.add('active-tab');
    break;
  }
}