// animation

var typed = new Typed(".typing",{
    strings:["","Web Desinger","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

// change class active
var header = document.querySelector(".nav");
var btns = header.querySelectorAll('a');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}
