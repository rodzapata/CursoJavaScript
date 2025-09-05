let countries = ["Colombia", "germany", "new zealand", "eeuu"];
console.log("===== usamos filter() para el arrays =====")
console.log(countries)
console.log("===== filtramos los paises con mas de 6 carateres =====")
let resultado = countries.filter((e) => e.length > 6);
console.log(resultado);

let user = [
    { name: "rodney", active: true },
    { name: "cecilia", active: false },
    { name: "juan", active: false },
    { name: "samuel", active: true },
]

console.log(user);
let userActive = user.filter((u) => u.active);
console.log("=== filtramos los usuarios activos en un array de objetos")
console.log(userActive);

let products = [
    { id: 1, name: "pc", category: "office" },
    { id: 2, name: "keyboard", category: "office" },
    { id: 3, name: "mouse", category: "office" },
    { id: 4, name: "mini split", category: "refrigerator" },
    { id: 5, name: "book", category: "stationery" },

]

console.log(products)
let productsOffice = products.filter((prod) => prod.category === 'office');
console.log("=== filtramos los productos por categoria office")
console.log(productsOffice);

console.log("=== filtramos los productos difererente al id 2")
let nuevoProducto = products.filter((prod) => prod.id != 2);
console.log(nuevoProducto);


console.log("==== buequeda con find ====")
let buscado = products.find((prod) => prod.name === "pc");
console.log(buscado);

let personas = [
    { name: "rondey", edad: 50 },
    { name: "cecilia", edad: 38 },
    { name: "juan", edad: 18 },
    { name: "samuel", edad: 9 },

]
console.log("===== consultamos las personas mayores de eda ======")
const mayoresEdad = personas.filter(obj => obj.edad > 18)
const mayoresEdad2 = personas.filter((obj) => {
    if (obj.edad > 18) {
        return true
    } else {
        return false
    }

})
console.log(mayoresEdad)
console.log(mayoresEdad2)