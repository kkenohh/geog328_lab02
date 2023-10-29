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


let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}