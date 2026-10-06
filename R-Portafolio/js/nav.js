const menuButton = document.querySelector('.menu-toggle');
const menuPanel = document.querySelector('.menu-panel');

function setMenuOpen(isOpen) {
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuPanel.setAttribute('aria-hidden', String(!isOpen));
  menuPanel.classList.toggle('open', isOpen);
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

menuPanel.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});
