var navbar = window.document.getElementById("navbar")
function Menu() {
    navbar.classList.toggle("open")
   
}
window.document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        navbar.classList.toggle("open")
    }
})

var html = document.documentElement
var trail = window.document.getElementById("container")
function Mode() {
 trail.classList.toggle("darktheme")
 html.classList.toggle("darktheme")
if(html.classList.contains("darktheme")) {
    localStorage.setItem("theme", "dark")
}
else {
    localStorage.setItem("theme", "light")
}
}
window.onload = function() {
    var savetheme = localStorage.getItem("theme")
    if(savetheme === "dark") {
        html.classList.add("darktheme")
        trail.classList.add("darktheme")
    }
    else if(savetheme === "light") {
        html.classList.remove("darktheme")
        trail.classList.remove("darktheme")
    }
}