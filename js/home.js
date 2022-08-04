const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu-sections");

navToggle.addEventListener("click", function(){
    navMenu.classList.toggle("menu-sections-active");
})