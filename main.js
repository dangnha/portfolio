(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  const toggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* --- Active nav link on scroll --- */
  var sections = document.querySelectorAll('section[id]');
  var navItems = document.querySelectorAll('.nav__links a');

  function updateActiveLink() {
    var scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* --- Scroll reveal --- */
  var revealElements = document.querySelectorAll(
    '.card, .pub, .about__text, .contact__info, .contact__form'
  );

  function revealOnScroll() {
    var windowHeight = window.innerHeight;

    revealElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });
})();
