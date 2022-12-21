document.getElementById('menu-1').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.add('toggle-open');
});

document.getElementById('mobile-menu-close').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.remove('toggle-open');
});