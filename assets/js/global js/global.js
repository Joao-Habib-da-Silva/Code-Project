var navbar = window.document.getElementById("navbar")
function Menu() {
    navbar.classList.toggle("open")
   
}
window.document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        navbar.classList.toggle("open")
    }
})


var trail = window.document.getElementById("container")
function Mode() {
 trail.classList.toggle("darktheme")
 var html = document.documentElement
html.classList.toggle("darktheme")
}
