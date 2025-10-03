console.log("probando type script");
console.log("codigo modificaado una prueba");
console.log("tercera prueba")

let edad: number = 50;
/*
type Programador = {
    name: string,
    lastName: string,
    age: number
}
*/

interface Programador {
    name: string,
    lastName: String,
    age: number
}

let programador1: Programador = {
    name: "rodney",
    lastName: "zapata",
    age: 50
}

let programador2: Programador = {
    name: "samuel",
    lastName: "zapata",
    age: 10
}

function enviarCurriculum(programador: Programador) {
    console.log(`este es ${programador.lastName}`);
}

enviarCurriculum(programador1);
enviarCurriculum(programador2);