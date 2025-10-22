

const serviceContainers = document.querySelectorAll('.service-container');

window.addEventListener('scroll', () => {
  serviceContainers.forEach((container, index) => {
    const image = container.querySelector('.service-image');
    const text = container.querySelector('.service-text');
    const sectionTop = container.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    // Scroll animation
    if (sectionTop < triggerPoint) {
      container.classList.add('visible');
      image.classList.add('visible');
      text.classList.add('visible');
    }

    // Alternate layout
    if (index % 2 !== 0) { // 2nd, 4th, ... container
      container.classList.add('reverse');
    }
  });
});

