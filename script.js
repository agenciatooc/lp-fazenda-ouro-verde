document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      if (document.documentElement.clientWidth > 768) {
         navbar.classList.remove('py-6');
         navbar.classList.add('py-4');
      }
    } else {
      navbar.classList.remove('scrolled');
      if (document.documentElement.clientWidth > 768) {
         navbar.classList.remove('py-4');
         navbar.classList.add('py-6');
      }
    }
  });

  // Accordion Logic
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const button = item.querySelector('button');
    button.addEventListener('click', () => {
      const parent = item.parentElement;
      const siblings = parent.querySelectorAll('.accordion-item');
      
      siblings.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      item.classList.toggle('active');
    });
  });

  // Open first accordion by default
  const firstAccordion = document.querySelector('.space-y-4 .accordion-item');
  if(firstAccordion) {
      firstAccordion.classList.add('active');
  }

  // Intersection Observer for Scroll Animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => revealOnScroll.observe(el));
});
