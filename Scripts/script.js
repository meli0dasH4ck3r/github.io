document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling 
  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // ACtive class highlight current button
  var header = document.querySelector('nav ul');
  var btns = header.getElementsByClassName('active');
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
          var current = document.getElementsByClassName('active');
          current[0].className = current[0].className.replace(' active', '');
          this.className += ' active';
      });
  }

  // Initialize AOS 
  AOS.init({
      duration: 1000,
      delay: 200,
      once: true
  });

  // Add animation to hero sections
  const heroText = document.querySelector('.hero-info h1');
  heroText.classList.add('animate__animated', 'animate__fadeInDown');

  const heroImage = document.querySelector('.hero-img img');
  heroImage.classList.add('animate__animated', 'animate__zoomIn');

  // Add animation to info cards
  const infoCards = document.querySelectorAll('.info-card');
  infoCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      card.classList.add('animate__animated', 'animate__fadeInUp');
  });
});
