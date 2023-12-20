document.addEventListener('DOMContentLoaded', function () {
  const navbarIcon = document.querySelector('.navbar-icon');
  const navbarHead = document.querySelector('.navbar-head');
  function toggleNavbar() {
    navbarHead.classList.toggle('active');
  }
  navbarIcon.addEventListener('click', toggleNavbar);
  const navLinks = document.querySelectorAll('.navbar-head a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarHead.classList.contains('active')) {
        navbarHead.classList.remove('active');
      }
    });
  });
});

function showPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

