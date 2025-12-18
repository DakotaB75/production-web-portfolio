document.addEventListener('DOMContentLoaded', () => {
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    successModal.show();

    setTimeout(() => {
      form.submit(); 
    }, 400);

    form.reset();
    form.classList.remove('was-validated');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar-aws');
  const toggler = document.querySelector('.navbar-toggler-aws');
  const navLinks = document.querySelector('.nav-links');

  if (!toggler || !navLinks) return;

  document.querySelectorAll('.nav-links a, .navbar-brand-aws').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        const navbarHeight = navbar.offsetHeight;
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - (navbarHeight + 20);
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
      navLinks.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  });

  toggler.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("music-btn");
  const musicIcon = document.getElementById("music-icon");
  const musicAudio = document.getElementById("music-audio");

  if (!musicBtn) return;

  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      musicAudio.play();
      musicIcon.className = "bi bi-soundwave";
      musicBtn.classList.add("music-playing");
      isPlaying = true;
    } else {
      musicAudio.pause();
      musicIcon.className = "bi bi-pause-circle";
      musicBtn.classList.remove("music-playing");
      isPlaying = false;
    }
  });

  musicAudio.addEventListener("ended", () => {
    isPlaying = false;
    musicIcon.className = "bi bi-music-note-beamed";
    musicBtn.classList.remove("music-playing");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const clickSound = new Audio("Audios/buttonclick.mp3");
  const navbarButtons = document.querySelectorAll('.nav-links a, .navbar-brand-aws, .navbar-toggler-aws');
  navbarButtons.forEach(btn => btn.addEventListener('click', () => { clickSound.currentTime = 0; clickSound.play(); }));
});

document.addEventListener("DOMContentLoaded", () => {
  const arrowSound = new Audio("Audios/Classic.mp3");
  document.querySelectorAll('.carousel-control-prev, .carousel-control-next')
    .forEach(btn => btn.addEventListener('click', () => { arrowSound.currentTime = 0; arrowSound.play(); }));
});

document.addEventListener("DOMContentLoaded", () => {
  const sendSound = new Audio("Audios/Xbox 360 Menu.mp3");
  const sendBtn = document.querySelector('.send-btn');
  if (sendBtn) sendBtn.addEventListener('click', () => { sendSound.currentTime = 0; sendSound.play(); });
});

document.addEventListener("DOMContentLoaded", () => {
  const hoverSound = new Audio("Audios/Keycap.mp3");
  document.querySelectorAll('.aws-badge-img')
    .forEach(img => img.addEventListener('mouseenter', () => { hoverSound.currentTime = 0; hoverSound.play(); }));
});

document.addEventListener("DOMContentLoaded", () => {  
});