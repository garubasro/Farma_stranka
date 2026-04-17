// Mestská Farma — Homepage JS

document.addEventListener('DOMContentLoaded', function() {

  // ===== NAVIGÁCIA — scroll efekt =====
  var nav = document.getElementById('homeNav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // ===== HAMBURGER MENU =====
  var burger = document.getElementById('navBurger');
  var navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // ===== NÁHODNÉ POZADIE SEKCIÍ =====
  var base = '/Farma_stranka/img/';
  var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  // Zamiešaj náhodne
  for (var i = images.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = images[i]; images[i] = images[j]; images[j] = tmp;
  }
  // Priraď k sekciám
  var heroBg = document.getElementById('heroBg');
  if (heroBg) heroBg.style.backgroundImage = "url('" + base + images[0] + "')";

  var aboutEl = document.querySelector('.home-about');
  if (aboutEl) aboutEl.style.setProperty('--bg-img', "url('" + base + images[1] + "')");

  var zelEl = document.querySelector('.home-zelenina');
  if (zelEl) zelEl.style.setProperty('--bg-img', "url('" + base + images[2] + "')");

  var kontEl = document.querySelector('.home-kontakt');
  if (kontEl) kontEl.style.setProperty('--bg-img', "url('" + base + images[3] + "')");

  var heroBg = document.getElementById('heroBg');
  if (heroBg) {
    window.addEventListener('scroll', function() {
      var scrolled = window.scrollY;
      heroBg.style.transform = 'translateY(' + (scrolled * 0.4) + 'px)';
    }, { passive: true });
  }

  // ===== FADE-IN ANIMÁCIE =====
  var fadeEls = document.querySelectorAll('.home-section, .blog-card, .z-card');
  fadeEls.forEach(function(el) {
    el.classList.add('fade-in');
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(function(el) {
    observer.observe(el);
  });

});
