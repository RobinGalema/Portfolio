window.onscroll = function() {scrollbar()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function scrollbar() {
  if (window.pageYOffset >= sticky+20) {
    navbar.classList.add("sticky");
  }
  else {
    navbar.classList.remove("sticky");
  }
}
