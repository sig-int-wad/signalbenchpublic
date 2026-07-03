(() => {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector("#site-nav");

  const closeNav = () => {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(willOpen));
      siteNav.classList.toggle("is-open", willOpen);
      document.body.classList.toggle("nav-open", willOpen);
    });

    siteNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNav();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 780) closeNav();
    });
  }

  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-img");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const lightboxClose = document.querySelector("#lightbox-close");
  let lastTrigger = null;

  const closeLightbox = () => {
    if (!lightbox || !lightbox.open) return;
    lightbox.close();
    if (lightboxImage) {
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = "";
    }
    if (lastTrigger) lastTrigger.focus();
  };

  if (lightbox && lightboxImage && lightboxCaption) {
    document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
      button.addEventListener("click", () => {
        lastTrigger = button;
        lightboxImage.src = button.dataset.lightboxSrc || "";
        lightboxImage.alt = button.dataset.lightboxAlt || "Signal Walk screenshot";
        lightboxCaption.textContent = button.dataset.lightboxCaption || "";
        lightbox.showModal();
        lightboxClose?.focus();
      });
    });

    lightboxClose?.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
      const bounds = lightbox.getBoundingClientRect();
      const clickedOutside =
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom;
      if (clickedOutside) closeLightbox();
    });

    lightbox.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeLightbox();
    });
  }
})();
