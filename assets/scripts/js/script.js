// for sticky nav 

window.onscroll = function() { makesticky() };


var navbar = document.getElementById("nav-bar");


var sticky = navbar.offsetTop;

function makesticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}