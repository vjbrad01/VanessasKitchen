//Get button
mybutton = document.getElementById("myBtn");

//Scroll down show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

//Scroll to top when button clicked
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}