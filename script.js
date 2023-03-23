const btn = document.querySelector('.hamburger_bar');
const menu = document.querySelector('.menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('menu_block');
  // menu.classList.toggle('hidden');
}
