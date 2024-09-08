var imgs=new Array("../imagenes/ImagenesIndex/PublicidadPrincipalIndex/PP1.png","../imagenes/ImagenesIndex/PublicidadPrincipalIndex/PP2.PNG","../imagenes/ImagenesIndex/PublicidadPrincipalIndex/PP3.PNG",  
"../imagenes/ImagenesIndex/PublicidadPrincipalIndex/PP4.PNG","../imagenes/ImagenesIndex/PublicidadPrincipalIndex/PP5.jpg","../imagenes/ImagenesIndex/PublicidadPrincipalIndex/PP6.png","../imagenes/ImagenesIndex/PublicidadPrincipalIndex/PP7.png");

var c=0;
function carrusel(){
    c++;
    if(c>=7){c=0;}
    document.getElementById("baner").setAttribute("src", imgs[c]);
}

setInterval(carrusel, 3000);

function gira180(e){
    e.style.transform="rotateY(180deg)";
    e.style.transition="all 1s";
}

function gira0(e){
    e.style.transform="rotateY(0)";
    e.style.transition="all 1s";
}
function gira360(e){
    e.style.transform="rotateY(360deg)";
    e.style.transition="all 1s";
}

for(var i=0; i<document.getElementsByClassName("iconoLogin").length; i++)
{
    document.getElementsByClassName("iconoLogin")[i].setAttribute("onmouseover", "gira180(this)");
    document.getElementsByClassName("iconoLogin")[i].setAttribute("onmouseout", "gira0(this)");
}
for(var i=0; i<document.getElementsByClassName("conte30").length; i++)
{
    document.getElementsByClassName("conte30")[i].setAttribute("onmouseover", "gira360(this)");
    document.getElementsByClassName("conte30")[i].setAttribute("onmouseout", "gira0(this)");
}
function trasparente(e){
    e.style.opacity="0.5"; 
    e.style.transition="all 1.5s";
    e.style.border= "5px solid rgb(63, 62, 62)";
 
}

function nitido(e){
    e.style.opacity="1"; 
    e.style.transition="all 1.5s";
    e.style.border= "1px solid rgb(63, 62, 62)";
}
for(var i=0; i<document.getElementsByClassName("conte4").length; i++)
{
    document.getElementsByClassName("conte4")[i].setAttribute("onmouseover", "trasparente(this)");
    document.getElementsByClassName("conte4")[i].setAttribute("onmouseout", "nitido(this)");
}
function menuToggle(){
    const toggleMenu = document.querySelector('.login-form');
    toggleMenu.classList.toggle('active')
}

function menuToggle1(){
    const toggleMenu = document.querySelector('.tienda-form');
    toggleMenu.classList.toggle('active')
}
