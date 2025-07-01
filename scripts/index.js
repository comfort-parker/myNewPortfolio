// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const updateCounter = () => {
    const increment = Math.ceil(target / 100);
    if (count < target) {
      count += increment;
      counter.innerText = count > target ? target : count;
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// INTERSECTION OBSERVER FOR ANIMATIONS
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('scroll-animate-left')) {
        entry.target.classList.add('animate-left');
      } else if (entry.target.classList.contains('scroll-animate-right')) {
        entry.target.classList.add('animate-right');
      }
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.scroll-animate-left, .scroll-animate-right').forEach(el => {
  observer.observe(el);
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// HAMBURGER MENU TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open'); // Optional: to style icon when open
  });

  // OPTIONAL: Close menu on link click (for mobile UX)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('open');
    });
  });
});
