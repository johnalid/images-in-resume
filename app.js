const menu = document.querySelector(".menu");

const navbar = document.querySelector(".navbar-collapse");

menu.addEventListener("click", (e)=>{
if (navbar.classList.contains("active")){
    navbar.classList.remove("active");
} else {
    navbar.classList.add("active");
}
})