var toggleBtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

toggleBtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

// typed js
var typed = new Typed("#typed", {
    strings: ["a Frontend Developer", "an Android Developer", "a Software Developer"],
    typeSpeed: 70,
    backSpeed: 55,
    backDelay: 1000,
    loop: true,
})

