'use strict';

(() => {

  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav');
  const body = document.querySelector('.body');

  header.classList.remove('header--no-js');
  menu.classList.remove('main-nav--no-js');
  menuButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('main-nav--closed');
    body.classList.toggle('body--overflow');
  });

  const anchors = document.querySelectorAll('a[href*=\\#]:not([href=\\#])');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      menu.classList.toggle('main-nav--closed');
      body.classList.toggle('body--overflow');
    });
  }

})();
