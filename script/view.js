let hamBurger = document.querySelector(".burger");
let sideBar = document.querySelector("aside");
let closeMenu = document.querySelector(".close-menu")
hamBurger.onclick = () =>{
    sideBar.classList.add("show-sideBar");
    closeMenu.style.display="block";
    hamBurger.style.display="none";
};
closeMenu.onclick = () =>{
    sideBar.classList.remove("show-sideBar");
    closeMenu.style.display="none";
    hamBurger.style.display="flex";
};