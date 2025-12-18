const carouselElement = document.querySelector('#carouselExample');
const dots = document.querySelectorAll('.carousel-dot');

const carousel = new bootstrap.Carousel(carouselElement, {
  interval: false,
  wrap: true
});

function updateDots(activeIndex) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[activeIndex].classList.add('active');
}

carouselElement.addEventListener('slid.bs.carousel', function (e) {
  updateDots(e.to);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    pauseAutoSlide();
    carousel.to(i);
  });
});

function handleKeyNav(e) {
  if (e.key === 'ArrowLeft') {
    pauseAutoSlide();
    carousel.prev();
  } else if (e.key === 'ArrowRight') {
    pauseAutoSlide();
    carousel.next();
  }
}
document.addEventListener('keydown', handleKeyNav);

let autoSlide = setInterval(() => {
  carousel.next();
}, 3500); 

function pauseAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => carousel.next(), 4500); 
}

carouselElement.style.userSelect = 'none';
carouselElement.addEventListener('mousedown', e => e.preventDefault());
carouselElement.addEventListener('dragstart', e => e.preventDefault());

updateDots(0);