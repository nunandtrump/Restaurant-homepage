const tabs = document.querySelectorAll(".menu-tab");
const panels = document.querySelectorAll(".menu-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    tabs.forEach((item) => item.classList.remove("is-active"));
    panels.forEach((panel) => {
      const isMatch = panel.id === targetId;
      panel.classList.toggle("is-active", isMatch);
      panel.hidden = !isMatch;
    });

    tab.classList.add("is-active");
  });
});

const revealTargets = document.querySelectorAll(
  ".feature-strip article, .menu-section, .story-section, .reserve-section"
);

revealTargets.forEach((target) => {
  target.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealTargets.forEach((target) => observer.observe(target));
