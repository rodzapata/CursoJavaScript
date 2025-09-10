const numero = [1, 2, 3, 4, 5];

const copia = [...numero]
console.log(numero);
console.log(copia);

const a = [1, 2, 3];
const b = [4, 5, 6];
console.log("=== unimos los array A y array B")
console.log(a);
console.log(b);

const unir = [...a, ...b];
console.log(unir)

console.log("=== recibimos parametros pero no sabemos cuantos son ====")
function imprimir(...parametros) {
    console.log(parametros)
}

imprimir("rodney", "cecilia", { i: 1, nombre: "prueba" });

console.log("==== pasaremos varios parametros a la funcion sumar, pero no sabemos cuantos parametros son =====")

function sumar(...parametros) {
    const total = parametros.reduce((acum, valor) => acum + valor);
    console.log(total);
}

sumar(1, 5, 16, 25);