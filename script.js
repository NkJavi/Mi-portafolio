const tabLinks = document.querySelectorAll(".tab-link");
const tabSwitchers = document.querySelectorAll("[data-tab-target]");
const panels = document.querySelectorAll(".panel");
const yearEl = document.getElementById("year");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const revealBlocks = document.querySelectorAll(".reveal");
const rotatingWord = document.querySelector(".rotating-word");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function activateTab(tabId, scrollTop = true) {
  if (!tabId) return;

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.tab === tabId);
  });

  tabLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.tabTarget === tabId);
  });

  if (scrollTop) {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }
}

if (tabSwitchers.length) {
  tabSwitchers.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      activateTab(button.dataset.tabTarget);
    });
  });

  const firstTab = document.querySelector(".tab-link.is-active")?.dataset.tabTarget || panels[0]?.dataset.tab;
  activateTab(firstTab, false);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealBlocks.forEach((block) => observer.observe(block));
} else {
  revealBlocks.forEach((block) => block.classList.add("is-visible"));
}

if (rotatingWord && !prefersReducedMotion) {
  const words = (rotatingWord.dataset.words || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  let index = 0;

  if (words.length > 1) {
    setInterval(() => {
      rotatingWord.classList.add("is-changing");
      setTimeout(() => {
        index = (index + 1) % words.length;
        rotatingWord.textContent = words[index];
        rotatingWord.classList.remove("is-changing");
      }, 170);
    }, 2400);
  }
}
