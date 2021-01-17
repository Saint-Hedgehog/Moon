'use strict';

(() => {

  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.main-nav__toggle');
  const menu = document.querySelector('.main-nav');
  const body = document.querySelector('.body');

  if (header && menuButton && menu && body) {
    header.classList.remove('header--no-js');
    menu.classList.remove('main-nav--no-js');
    menuButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      menu.classList.toggle('main-nav--closed');
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
      menu.classList.toggle('main-nav--closed');
      body.classList.toggle('body--overflow');
    });
  }

})();

'use strict';

(() => {

  window.addEventListener('DOMContentLoaded', function () {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        const range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    function mask(evt) {
      const matrix = '+7 (___) ___-__-__';
      let m = 0;
      const def = matrix.replace(/\D/g, '');
      let val = input.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }
      input.value = matrix.replace(/./g, function (a) {

        if (/[_\d]/.test(a) && m < val.length) {
          return val.charAt(m++);
        } else if (m >= val.length) {
          return '';
        } else {
          return a;
        }
      });
      if (evt.type === 'blur') {
        if (input.value.length === 2) {
          input.value = '';
        }
      } else {
        setCursorPosition(input.value.length, input);
      }
    }
    const input = document.querySelector('[name="tel"]');
    if (input) {
      input.addEventListener('input', mask, false);
      input.addEventListener('focus', mask, false);
      input.addEventListener('blur', mask, false);
    }

  });

})();
