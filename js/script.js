
window.addEventListener("load", function () {
  const preloader = document.getElementById("alfa-preloader");

  setTimeout(() => {
    preloader.classList.add("hide");
  }, 500); // small delay for smooth feel
});


(function () {
  "use strict";

  /* =========================
     NAVBAR SCROLL EFFECT
  ========================= */
  var header = document.querySelector(".alfa-header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("shadow-sm");
      } else {
        header.classList.remove("shadow-sm");
      }
    });
  }

  /* =========================
     SCROLL REVEAL ANIMATION
  ========================= */

  var revealTargets = document.querySelectorAll(
    ".section-title, .about-visual, .gen-badge, .dist-carousel .col-6, .dist-carousel .col-md-4, .dist-carousel .col-lg, .feature-card, .cta-band, .product-card, .site-footer .row > div"
  );

  if (revealTargets.length) {

    revealTargets.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 6) * 0.1 + "s";
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.2
    });

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  }

})();