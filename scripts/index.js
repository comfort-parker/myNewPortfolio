  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCounter = () => {
      const increment = Math.ceil(target / 100); // adjust speed
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

  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('scroll-animate-left')) {
          entry.target.classList.add('animate-left');
        } else if (entry.target.classList.contains('scroll-animate-right')) {
          entry.target.classList.add('animate-right');
        }
        observer.unobserve(entry.target); // remove after animation
      }
    });
  }, {
    threshold: 0.2 // adjust sensitivity
  });

  document.querySelectorAll('.scroll-animate-left, .scroll-animate-right').forEach(el => {
    observer.observe(el);
  });

 
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for header height if needed
          behavior: 'smooth'
        });
      }
    });
  });



