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
