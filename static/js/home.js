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

  // ===== PARALLAX HERO =====
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
