var navbar = window.document.getElementById("navbar")
function Menu() {
    navbar.classList.toggle("open")
   
}
window.document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        navbar.classList.toggle("open")
    }
})