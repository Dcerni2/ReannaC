// Subtle fade-in as sections enter view. No heavy animation, no dependencies.
(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sections = document.querySelectorAll(".block, .hero, .qa-section");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }

  sections.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((el) => observer.observe(el));
})();
