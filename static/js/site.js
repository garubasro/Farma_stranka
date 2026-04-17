document.addEventListener('DOMContentLoaded', function() {
  var nav = document.getElementById('homeNav');
  var burger = document.getElementById('navBurger');
  var navLinks = document.getElementById('navLinks');

  if (nav && !nav.classList.contains('home-nav--solid')) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }
});
