
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  const navbarNav = document.querySelector('.navbar-nav');
  navbarNav.classList.toggle('active');

  const menuIcons = document.querySelectorAll('.menu-icon');
  menuIcons.forEach(icon => icon.classList.toggle('d-none'));

  const overlayNav = document.querySelector('.overlay-nav');
  overlayNav.classList.toggle('d-none');
});

// Opcional: Fechar o menu e remover a overlay ao clicar na overlay
document.querySelector('.overlay-nav').addEventListener('click', function() {
  document.querySelector('.navbar-nav').classList.remove('active');
  document.querySelectorAll('.menu-icon').forEach(icon => icon.classList.toggle('d-none'));
  document.querySelector('.overlay-nav').classList.add('d-none');
});





