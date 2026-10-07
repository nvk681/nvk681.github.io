// Reveal sections as they enter the viewport.
const sections = document.querySelectorAll('main section');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0 }
  );

  sections.forEach((section) => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      section.classList.add('reveal-pending');
    }
    revealObserver.observe(section);
  });

  // Highlight the navigation link for the visible section.
  const navLinks = document.querySelectorAll('nav a');
  const navigationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeHref = `#${entry.target.id}`;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === activeHref);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => navigationObserver.observe(section));
}
