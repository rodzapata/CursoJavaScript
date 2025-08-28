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
let nuevoProducto = products.filter((prod)=> prod.id !=2 );
console.log(nuevoProducto);