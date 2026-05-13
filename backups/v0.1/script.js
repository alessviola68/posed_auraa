// À remplacer par le vrai lien Instagram si différent.
const INSTAGRAM_URL = "https://www.instagram.com/posed_auraa/";

const header = document.querySelector("[data-header]");
const showcase = document.querySelector("[data-showcase]");
const showcaseCards = document.querySelectorAll(".showcase-card");
const revealItems = document.querySelectorAll(".reveal");
const galleryImages = document.querySelectorAll("[data-gallery-image]");

document.querySelectorAll("[data-instagram-link]").forEach((link) => {
  link.href = INSTAGRAM_URL;
});

const scrollToTarget = (selector) => {
  const target = document.querySelector(selector);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") {
      return;
    }

    event.preventDefault();
    scrollToTarget(href);
  });
});

if (header) {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (showcase && showcaseCards.length) {
  const moveSpotlight = (card) => {
    const stageRect = showcase.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const x = cardRect.left + cardRect.width / 2 - stageRect.left;
    const y = cardRect.top + cardRect.height * 0.44 - stageRect.top;

    showcase.style.setProperty("--spotlight-x", `${x}px`);
    showcase.style.setProperty("--spotlight-y", `${y}px`);
  };

  const setActiveCard = (card) => {
    showcase.classList.add("has-active");
    showcaseCards.forEach((item) => item.classList.toggle("is-active", item === card));
    moveSpotlight(card);
  };

  const clearActiveCard = () => {
    showcase.classList.remove("has-active");
    showcaseCards.forEach((item) => item.classList.remove("is-active"));
    showcase.style.setProperty("--spotlight-x", "50%");
    showcase.style.setProperty("--spotlight-y", "47%");
  };

  showcaseCards.forEach((card) => {
    card.addEventListener("pointerenter", () => setActiveCard(card));
    card.addEventListener("focus", () => setActiveCard(card));
    card.addEventListener("focusin", () => setActiveCard(card));
    card.addEventListener("click", () => {
      const target = card.dataset.target;

      if (target) {
        scrollToTarget(target);
      }
    });
  });

  showcase.addEventListener("pointerleave", clearActiveCard);
  showcase.addEventListener("focusout", (event) => {
    if (!showcase.contains(event.relatedTarget)) {
      clearActiveCard();
    }
  });
}

galleryImages.forEach((image) => {
  const item = image.closest(".gallery-item");
  const fallbackSrc = image.dataset.fallbackSrc || image.getAttribute("src");
  const photoSrc = image.dataset.photoSrc;
  const markLoaded = () => {
    image.classList.add("is-loaded");

    if (!image.classList.contains("is-placeholder")) {
      item?.classList.add("has-photo");
      item?.classList.remove("has-placeholder");
    }
  };
  const usePlaceholder = () => {
    image.classList.add("is-placeholder");
    image.classList.remove("is-photo");
    item?.classList.add("has-placeholder");
    item?.classList.remove("has-photo");

    if (fallbackSrc && image.getAttribute("src") !== fallbackSrc) {
      image.src = fallbackSrc;
    }
  };

  image.addEventListener("load", markLoaded);
  image.addEventListener("error", usePlaceholder);

  if (photoSrc) {
    const probe = new Image();

    probe.onload = () => {
      image.classList.remove("is-placeholder");
      image.classList.add("is-photo");
      item?.classList.add("has-photo");
      item?.classList.remove("has-placeholder");
      image.src = photoSrc;
    };

    probe.onerror = usePlaceholder;
    probe.src = photoSrc;
  }

  if (image.complete) {
    image.naturalWidth > 0 ? markLoaded() : usePlaceholder();
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
