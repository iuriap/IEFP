import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve if you only want to animate once, or keep it to animate every time
        // observer.unobserve(entry.target);
      } else {
        // Remove class when out of view to re-animate when scrolled back
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Intersection Observer for updating active state in the Side NavBar
  const sections = document.querySelectorAll('.snap-section');
  const navDots = document.querySelectorAll('.nav-dot');

  const navObserverOptions = {
    root: document.querySelector('.snap-container'),
    rootMargin: '0px',
    threshold: 0.5 // trigger when section is 50% visible
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update nav dots
        navDots.forEach(dot => {
          const innerDot = dot.querySelector('.dot');
          if (dot.getAttribute('data-target') === id) {
            innerDot.classList.remove('bg-stone-300', 'w-2', 'h-2');
            innerDot.classList.add('bg-[#C36A4D]', 'w-3', 'h-3', 'scale-125');
          } else {
            innerDot.classList.remove('bg-[#C36A4D]', 'w-3', 'h-3', 'scale-125');
            innerDot.classList.add('bg-stone-300', 'w-2', 'h-2');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(sec => {
    navObserver.observe(sec);
  });
  
  // Smooth scroll for nav dots clicks
  navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
