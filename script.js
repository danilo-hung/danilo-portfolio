// show navbar when click if the screen width is less than 700px
let navLinks = document.getElementById("navLinks")
let showIcon = document.getElementById("showIcon")
const showMenu = () => {
    navLinks.style.display = "block"
    setTimeout(()=>{
        navLinks.style.right = "0"
        showIcon.style.opacity="0"
    },"100")
}
const hideMenu = () => {
    navLinks.style.right = "-200px";
    showIcon.style.opacity="1"
    setTimeout(()=>{
        navLinks.style.display = 'none'
    },"500")
}