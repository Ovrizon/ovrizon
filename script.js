function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}


 const questions = document.querySelectorAll(".faq-question");
    questions.forEach(q => {
      q.addEventListener("click", () => {
        q.classList.toggle("active");
        const answer = q.nextElementSibling;
        answer.classList.toggle("open");
      });
    });

    // Scroll animation
    const items = document.querySelectorAll(".faq-item");
    function revealOnScroll() {
      const triggerBottom = window.innerHeight * 0.85;
      items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
          item.classList.add("show");
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);





particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3 },
    "size": { "value": 4 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": false }
    }
  },
  "retina_detect": true
});