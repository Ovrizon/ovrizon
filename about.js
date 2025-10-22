
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 250);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(document.querySelector(".about"));
});




