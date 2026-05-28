(function () {
  'use strict';

  /* --- Dark mode toggle --- */
  var themeToggle = document.querySelector('.theme-toggle');
  var storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

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

/* --- Teaching section toggle --- */
function toggleTeaching() {
  var hidden = document.querySelectorAll('.teaching__card--hidden');
  var btn = document.querySelector('.teaching__toggle');
  var isOpen = hidden.length > 0 && hidden[0].style.display === 'grid';

  hidden.forEach(function (card) {
    card.style.display = isOpen ? 'none' : 'grid';
  });

  btn.textContent = isOpen ? 'View All 18 Lessons' : 'Show Less';
}
