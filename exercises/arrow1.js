function suma(a, b) {
    return a + b;
}


//suma con arrowfuction completa
const sumaArrow = (a, b) => {
    return a + b;
}

//ahora con retorno implicito en una linea
const sinRetornoImplicito = (a, b) => a + b;

//con un solo parametro puede omitir los parentesis
const duplicarNumeroUnParametro = num => num * 2;

// Con cero parámetros, necesitas paréntesis vacíos
const sinParametros = () => new Date();

// Objeto de retorno implícito (debes envolver en paréntesis)
// funcion que crear_usuario, recibe dos parametro y devuelve el objeto
const crearUsuario = (nombre, apellido) => (
    {
        nombre: nombre,
        apellido: apellido
    }
)

//console.log(crearUsuario("rodney","zapata"));

//covertir a arrow function
// 1. Función que filtra números mayores a 10
function filtrarMayores10(numeros) {
    return numeros.filter(function (numero) {
        return numero > 10;
    });
}

const filtrarMayores10Arrow = numeros => numeros.filter(numero => numero > 10);
console.log("funcion 1 ", filtrarMayores10Arrow([2, 10, 15, 25, 30]));

// 2. Función que transforma nombres a mayúsculas
function convertirAMayusculas(nombres) {
    return nombres.map(function (nombre) {
        return nombre.toUpperCase();
    });
}

const convertirAMayusculasArrow = nombres => nombres.map(nombre => nombre.toUpperCase());
console.log("funcion 2 ", convertirAMayusculasArrow(['rodney', 'zapata', 'palacio']));

// 3. Función que suma todos los elementos de un array
function sumarArray(numeros) {
    return numeros.reduce(function (total, numero) {
        return total + numero;
    }, 0);
}

const sumarArrayArrow = numeros => numeros.reduce((total, numero) => total + numero, 0);
console.log("funcion 3 ", sumarArrayArrow([1, 2, 3, 4]));
