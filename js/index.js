const hamburger = document.querySelector('#hamburger');
const bars = document.querySelectorAll('.bars');
const menu = document.querySelector('.nav-links');

function changeHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('transform-bars'))
  menu.classList.toggle('open');
}

hamburger.addEventListener('click', changeHamburger)