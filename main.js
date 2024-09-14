import './style.css'
var previousVersionDiv = document.getElementById("previousVersion");
var animationStarted = false;

window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var triggerOffset = previousVersionDiv.offsetTop - window.innerHeight + 100;

    // Aktiviraj animaciju kada korisnik dođe do div-a
    if (scrollTop > triggerOffset && !animationStarted) {
        previousVersionDiv.style.transform = "translateY(0)";
        animationStarted = true;
    }
});
