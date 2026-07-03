(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var lightboxClose = document.getElementById("lightbox-close");
  var lastTrigger = null;

  if (lightbox && lightboxImg && lightboxCaption && lightboxClose) {
    document.querySelectorAll("[data-lightbox-src]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        lastTrigger = trigger;
        lightboxImg.src = trigger.getAttribute("data-lightbox-src");
        lightboxImg.alt = trigger.getAttribute("data-lightbox-alt") || "";
        lightboxCaption.textContent = trigger.getAttribute("data-lightbox-caption") || "";
        lightbox.showModal();
      });
    });

    lightboxClose.addEventListener("click", function () {
      lightbox.close();
    });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.close();
      }
    });

    lightbox.addEventListener("close", function () {
      lightboxImg.removeAttribute("src");
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    });
  }
})();
