function sumar(a, b) {
    return a + b
}

//invocamos la funcion
resultado = sumar(2, 3);
console.log(resultado);

//funcion expresada o anonima
const funcionExpresion = function () {
    console.log("funcion anonima, no se conoce el nombre de la funcion ni el valor de las variables");
}

//invocamos la funcion
funcionExpresion();
