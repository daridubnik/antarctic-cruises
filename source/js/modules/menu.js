let body = document.body;
let header = document.querySelector('.header__wrapper');
let menu = document.querySelector('.menu');
let toggle = document.querySelector('.menu__toggle');
let links = document.querySelectorAll('[data-menu-link]');

const initMobileMenu = () => {

  if (document.documentElement.clientWidth < 768) {
    const toggleMenu = () => {
      body.classList.toggle('screen-lock');
      header.classList.toggle('menu-opened');
      menu.classList.toggle('is-active');
    };

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener('click', function (e) {
      const target = e.target;
      const itsMenu = target === menu || menu.contains(target);
      const itsToggle = target === toggle;
      const menuIsActive = menu.classList.contains('is-active');

      if (!itsMenu && !itsToggle && menuIsActive) {
        toggleMenu();
      }
    });

    links.forEach((link) => {
      link.addEventListener('click', function () {
        toggleMenu();
      });
    });
  }
};

export {initMobileMenu};
