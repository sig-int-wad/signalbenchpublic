(() => {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector("#site-nav");

  const closeNav = (returnFocus = false) => {
    if (!navToggle || !siteNav) return;
    const wasOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    siteNav.classList.remove("is-open");
    if (returnFocus && wasOpen) navToggle.focus();
  };

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      siteNav.classList.toggle("is-open", open);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav(true);
    });
    document.addEventListener("pointerdown", (event) => {
      if (
        navToggle.getAttribute("aria-expanded") === "true" &&
        !siteNav.contains(event.target) &&
        !navToggle.contains(event.target)
      ) closeNav();
    });
    siteNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNav();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 780) closeNav();
    });
  }

  const banner = document.querySelector("[data-announcement]");
  const bannerKey = "signalwalk-early-access-banner-v1-dismissed";
  if (banner) {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(bannerKey) === "true";
    } catch {
      // Storage is optional.
    }
    if (dismissed) {
      banner.hidden = true;
      banner.setAttribute("aria-hidden", "true");
    } else {
      banner.hidden = false;
      banner.querySelector("[data-dismiss-announcement]")?.addEventListener("click", () => {
        banner.hidden = true;
        banner.setAttribute("aria-hidden", "true");
        try {
          localStorage.setItem(bannerKey, "true");
        } catch {
          // Dismissal still applies to this page view.
        }
      });
    }
  }

  const copyButton = document.querySelector("[data-copy-template]");
  const requestTemplate = document.querySelector("#request-template");
  const copyStatus = document.querySelector("#copy-status");
  if (copyButton && requestTemplate && copyStatus) {
    copyButton.addEventListener("click", async () => {
      let copied = false;
      try {
        await navigator.clipboard.writeText(requestTemplate.value);
        copied = true;
      } catch {
        requestTemplate.hidden = false;
        requestTemplate.focus();
        requestTemplate.select();
        try {
          copied = document.execCommand("copy");
        } catch {
          copied = false;
        }
      }
      copyStatus.textContent = copied
        ? "Request template copied."
        : "Copy is unavailable. The request template is selected below.";
    });
  }

  const lightbox = document.querySelector("#lightbox");
  const image = document.querySelector("#lightbox-img");
  const caption = document.querySelector("#lightbox-caption");
  const closeButton = document.querySelector("#lightbox-close");
  let trigger = null;

  const closeLightbox = () => {
    if (lightbox?.open) lightbox.close();
  };

  if (lightbox && image && caption) {
    document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
      button.addEventListener("click", () => {
        trigger = button;
        image.src = button.dataset.lightboxSrc || "";
        image.alt = button.dataset.lightboxAlt || "Signal Walk screenshot";
        caption.textContent = button.dataset.lightboxCaption || "";
        lightbox.showModal();
        closeButton?.focus();
      });
    });
    closeButton?.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeLightbox();
    });
    lightbox.addEventListener("close", () => {
      image.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      image.alt = "";
      trigger?.focus();
    });
  }
})();
