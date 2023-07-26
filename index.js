let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sideNavBar");
let iconoColegio = document.querySelector("#icon");
let tituloColegio = document.querySelector("#topH2");
const listaNav = document.querySelectorAll("#list");


btn.onclick = function() {
    sidebar.classList.toggle("active");
    iconoColegio.classList.toggle("active");
    tituloColegio.classList.toggle("active");
   
    for(let index=0; index<listaNav; index++) {
        listaNav[index].classList.toggle("active");
    }

}
