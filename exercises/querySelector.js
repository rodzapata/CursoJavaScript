console.log("prueba desde consola ... ")

//document.querySelector("body").innerHTML=`Prueba  de texto  modificada `;

document.querySelector(".caja").innerText="prueba";
document.querySelectorAll(".caja")[2].innerText="prueba2";
document.querySelectorAll(".caja,  .contenido")[2].innerHTML="prueba de contenido";