const edad = 27;
if (edad > 18) {
    console.log(`es mayor de edad`);
} else {
    console.log(`es menor de edad`);
}

//operador ternario

const valor = edad > 18 ? "mayor de edad" : "menor de edad";
console.log(valor);

//usar dicionario de datos
const stateId = 1;
const typeState = {
    1: "muy malo",
    2: "malo",
    3: "normal"
}

const selectState = typeState[stateId];
console.log(selectState);
