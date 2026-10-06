const revealTargets = document.querySelectorAll(
  '.hero h1, .section-heading, .project, .experience-item, .about-content, .contact-form, .archive-intro, .story-card, .article-page, .story-editor'
);

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('effects-ready');
  revealTargets.forEach((element) => element.classList.add('reveal-item'));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' }
    );

    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
  }
}
