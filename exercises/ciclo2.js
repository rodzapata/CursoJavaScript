const clientesArray = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Marta", edad: 28 }
];
const clientesObj = {
    cliente1: { nombre: "Ana", edad: 25 },
    cliente2: { nombre: "Luis", edad: 30 },
    cliente3: { nombre: "Marta", edad: 28 }
};

console.log("============== ARRAYS DE OBJETOS =========")
console.log("======= recorremos el array con un For of")
for (let cliente of clientesArray) {
    console.log(cliente.nombre, cliente.edad);
}
console.log("======= recorremos el array con un ForEach")
clientesArray.forEach(e => {
    console.log(e.nombre, e.edad);
})
console.log("======= recorremos el array con Map para generar una copia de nombres")
const nombres = clientesArray.map(e => e.nombre)
console.log(nombres);

console.log("======= recorremos el array con Map para generar una copia de datos completo")
const datos = clientesArray.map(e => ({
    nombre: e.nombre,
    edad: e.edad
})
)
console.log(datos);

console.log("================ OBJETOS =================")
console.log("======= recorremos el objeto con un For In")
for (let element in clientesObj) {
    console.log(element);
    console.log(clientesObj[element]);
}


console.log("===== recorrido de un objeto usando For in =======")
for (let element in clientesObj) {
    console.log(clientesObj[element].nombre);
}

console.log("===== recorrido Object.keys + forEach =======")
Object.keys(clientesObj).forEach(key => {
    console.log(key, clientesObj[key].nombre, clientesObj[key].edad);
});

console.log("===== recorrido Object.values + forEach =======")
Object.values(clientesObj).forEach(cli => {
    console.log(cli.nombre, cli.edad);
});

console.log("===== recorrido Object.entries + forEach para estructura de diccionario =======")
Object.entries(clientesObj).forEach(([key, cli]) => {
    console.log(key, cli.nombre, cli.edad);
});

console.log("======= combinando Objetct.keys + map() ==================")
Object.keys(clientesObj).map((cli) => (console.log(cli)))

console.log("======= combinando Objetct.values + map() ==================")
Object.values(clientesObj).map((cli) => (console.log(cli)))

console.log("======= combinando Objetct.values + map() especicando el campo ==================")
Object.values(clientesObj).map((cli) => (console.log(cli.nombre, cli.edad)))


console.log("======= item de facturas Objetct.values + map() ==================")
let item = { p1: 1000, p2: 2000, p3: 3000 };
let itemIva = Object.values.map((valor) => valor * 1.19)
console.log(item);
console.log(itemIva);
