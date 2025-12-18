const roles = [
  "Junior AI & Robotics Developer",
  "Web Programmer",
  "Graphic Designer"
];

const roleElement = document.getElementById("role");
const wave = document.getElementById("wave");

if (roleElement) {
  let currentRole = 0;
  let currentChar = 0;
  let typing = true;

  function typeWriter() {
    if (typing && currentChar < roles[currentRole].length) {
      roleElement.textContent += roles[currentRole][currentChar];
      currentChar++;
      setTimeout(typeWriter, 100);
    } else if (typing) {
      typing = false;
      setTimeout(eraseText, 1500);
    }
  }

  function eraseText() {
    if (!typing && currentChar > 0) {
      roleElement.textContent = roleElement.textContent.slice(0, -1);
      currentChar--;
      setTimeout(eraseText, 50);
    } else if (!typing) {
      currentRole = (currentRole + 1) % roles.length;

      if (wave) {
        wave.classList.add("wink");
        setTimeout(() => wave.classList.remove("wink"), 600);
      }

      typing = true;
      setTimeout(typeWriter, 500);
    }
  }

  window.onload = () => {
    typeWriter();
  };
}

const texts = [
  `Never. I never give up. I'd have to be dead or completely incapacitated.\n— Elon Musk`
];

const fadeText = document.getElementById('fade-text');

if (fadeText) {
  let current = 0;

  function showNextText() {
    fadeText.style.opacity = 0;

    setTimeout(() => {
      fadeText.textContent = texts[current];
      fadeText.style.opacity = 1;

      current = (current + 1) % texts.length;
    }, 1500); 
  }

  fadeText.textContent = texts[0];
  fadeText.style.opacity = 1;

  setInterval(showNextText, 10000);
}

const faders = document.querySelectorAll('.animate-fade-left, .animate-fade-right');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('animate-in');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));