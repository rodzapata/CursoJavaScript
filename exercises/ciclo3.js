console.log("======= item de facturas Objetct.values + map() ==================")
let item = { p1: 1000, p2: 2000, p3: 3000 };
let itemIva = Object.values(item).map((valor) => valor * 1.19)
console.log(item);
console.log(itemIva);
// sumar todos los valores con IVA
let total = itemIva.reduce((acum, valor) => acum + valor, 0);
console.log("Total con IVA:", total); // 7140

console.log("======= retornar total de facturas en una sola linea Objetct.values + map() ==================")
let totalConIva = Object.values(item)
    .map(valor => valor * 1.19)
    .reduce((acum, valor) => acum + valor, 0);

console.log(totalConIva);
