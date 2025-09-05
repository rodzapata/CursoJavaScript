const frutas = ["zapote", "uva", "pera", "manzana"];
console.log(frutas)
console.log("=== ordernamos las frutas =====")
frutas.sort()
console.log(frutas)

const numero = [2, 80, 10, 50];
console.log(numero)
numero.sort()
console.log("=== ordernamos los numeros =====")
console.log(numero)

numero.sort((a, b) => a - b)
console.log("=== ordernamos los numeros ascendente de forma correcta =====")
console.log(numero)

numero.sort((a, b) => b - a)
console.log("=== ordernamos los numeros descendente de forma correcta =====")
console.log(numero)

const personas = [
    { nombre: "Rodney", edad: 50 },
    { nombre: "Cecilia", edad: 38 },
    { nombre: "Juan", edad: 18 },
    { nombre: "Samuel", edad: 9 },
];

console.log("==== objeto ordenado por edad =======")
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);