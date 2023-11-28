// Function to toggle the menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Function to add sticky class on scroll
  window.onscroll = function() {
    stickyNavbar();
  };
  
  const navbar = document.querySelector('.navbar');
  const sticky = navbar.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  