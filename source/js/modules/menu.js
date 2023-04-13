let body = document.body;
let header = document.querySelector('.header__wrapper');
let menu = document.querySelector('.menu');
let toggle = document.querySelector('.menu__toggle');


const initMobileMenu = () => {
  toggle.addEventListener('click', function () {
    body.classList.toggle('screen-lock');
    header.classList.toggle('menu-opened');
    menu.classList.toggle('is-active');
  });
};

export {initMobileMenu};
