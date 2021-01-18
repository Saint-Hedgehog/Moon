'use strict';

(() => {

  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav');
  const body = document.querySelector('.body');

  const resize = function () {

    if (window.innerWidth < 1024 && !body.classList.contains('body--overflow')) {
      body.classList.add('body--overflow');
    }

    if (window.innerWidth >= 1024 && body.classList.contains('body--overflow')) {
      body.classList.remove('body--overflow');
    }
  };

  if (header && menuButton && menu && body) {
    header.classList.remove('header--no-js');
    menu.classList.remove('main-nav--no-js');
    menuButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      menu.classList.toggle('main-nav--closed');

      if(menu.classList.contains('main-nav--closed')) {
        window.removeEventListener('resize', resize);
      } else {
        window.addEventListener('resize', resize);
      }
      body.classList.toggle('body--overflow');
    });
  }

  const anchors = document.querySelectorAll('a[href*=\\#]:not([href=\\#])');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      if (window.innerWidth < 1024) {
        menu.classList.add('main-nav--closed');
        body.classList.remove('body--overflow');
        window.removeEventListener('resize', resize);
      }
    });
  }

})();
