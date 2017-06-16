window.addEventListener('scroll', function () {
  const distanciaVertical = window.pageYOffset || document.documentElement.scrollTop,
  header = document.getElementById('header');
  
  if (distanciaVertical > 60) {
    header.classList.add("navbar-color");
  } else {
    header.classList.remove("navbar-color");
  }
});

$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});