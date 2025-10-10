import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtnemos los datos del DOM

const lista = document.querySelector('ul');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');


function manejarClick(event) {

    if (event.target.tagName === 'A') {
        const ciudad = event.target.textContent;
        console.log(`hizo click en ${ciudad}`);

        // Ejemplo: agregar una clase para resaltar la ciudad seleccionada
        const enlaces = document.querySelectorAll('ul li a');
        enlaces.forEach((a) => a.classList.remove('active'));
        event.target.classList.add('active');


        //llamamos al contenido
        const contenido = obtenerContenido(ciudad);
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;

    }

}

function obtenerContenido(enlace) {
    const contenido = {
        "Barcelona": barcelona,
        "Roma": roma,
        "París": paris,
        "Londres": londres

    }
    return contenido[enlace];
}

lista.addEventListener("click", manejarClick);

