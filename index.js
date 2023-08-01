//! Funcionalidad de
//! la Barra de Navegación

let btn = document.querySelector("#btn");
let sideBar = document.querySelector(".sideNavBar");
let iconoColegio = document.querySelector("#icon");
let tituloColegio = document.querySelector("#topH2");
let mainInside = document.querySelector(".mainInside");

const listaNav = document.querySelectorAll("#list");


btn.onclick = function() {
    sideBar.classList.toggle("active");
    iconoColegio.classList.toggle("active");
    tituloColegio.classList.toggle("active");
    mainInside.classList.toggle("active");
   
    for(let index=0; index<listaNav; index++) {
        listaNav[index].classList.toggle("active");
    }

}

//! Dark && Light Mode 

let mode = document.querySelector("#mode");
let sun = document.querySelector("#light");
let moon = document.querySelector("#dark");
let lightMode = document.querySelector("#body");
let lol = document.querySelector("#arrowLight");

mode.onclick = function() {
    sun.classList.toggle("light");
    moon.classList.toggle("dark");
    lightMode.classList.toggle("LIGHT");
    lol.classList.toggle("white")
}

//! Slider 

let slider = document.querySelector("#slider");
let box = document.querySelector("#side");


slider.onclick = function() {
    box.classList.toggle("left");
    slider.classList.toggle("left");
}
