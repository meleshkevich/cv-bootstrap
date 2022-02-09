// A bit of JQuery 

$(document).ready(function(){
    $('.header').height($(window).height());
   })

// Scrol
$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data("value")).offset().top
    },1000)
    
   })

   // Navbar hide onscroll
let prevScrollpos = window.scrollY;
window.onscroll = () => {
  hideNavbar();
  scrollFunction();
} 

function hideNavbar() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}