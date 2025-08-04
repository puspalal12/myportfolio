// Initialize AOS
AOS.init({
    duration: 1000, // animation duration
    once: true,      // only animate once when scrolled into view
});
// hambermenu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// hero-section
const texts = [
  "I’m a Frontend Web Developer.",
  "Passionate about building modern, responsive websites.",
  "I love working with HTML, CSS, JavaScript and ReactJs.",
  "I build fast and accessible React applications.",
  "I also works on Wordpress Web Development.",
  "Let's collaborate on your next big idea!"
];

let index = 0;
const paragraph = document.getElementById("hero-text");

setInterval(() => {
  // Fade out
  paragraph.classList.add("fade-out");

  // After fade-out, change text and fade-in
  setTimeout(() => {
    index = (index + 1) % texts.length;
    paragraph.textContent = texts[index];
    paragraph.classList.remove("fade-out");
  }, 500); // match with CSS transition duration
}, 3000);

// project-section
function showDetails(id) {
      const selected = document.getElementById(id);
      if (selected.classList.contains('visible')) {
        selected.classList.remove('visible');
      } else {
        document.querySelectorAll('.project-detail').forEach(detail => {
          detail.classList.remove('visible');
        });
        selected.classList.add('visible');
      }
    }

// loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000);
});

// top-btn

  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

