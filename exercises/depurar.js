const persona = {
    "nombre": "rodney",
    "apellido": "zapata",
    "edad": 50
}

console.log(persona)

function duplicarEdad(edad) {
    return edad * 2
}

const dobleEdad = duplicarEdad(persona.edad);
console.log(dobleEdad);
