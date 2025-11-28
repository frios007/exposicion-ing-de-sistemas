document.addEventListener("DOMContentLoaded", () => {
  // 1. Reveal Elements on Scroll
  // This adds the "active" class to elements with "reveal" when they scroll into view
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100; // Distance from bottom before revealing

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };

  // Initial check (in case user reloads halfway down page)
  revealOnScroll();

  // Listen to scroll events
  window.addEventListener("scroll", revealOnScroll);

  // 2. Smooth Scrolling for Anchor Links (Navigation)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  console.log("Sistema de infografía UNI cargado correctamente.");
});
