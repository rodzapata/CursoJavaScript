// creamos lita de compras
const shoping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shoping);

console.log("==== agregamos un item al final =====")
shoping.push("end");
console.log(shoping)

console.log("=== agregamos un inte al inicio =====")
shoping.unshift("first");
console.log(shoping)

console.log("=== eliminamos el primer item del array =====")
shoping.shift()
console.log(shoping)

console.log("=== splice() adiciona un registro al inicio =====")
const numero = [10, 20, 30];
console.log(numero)
numero.splice(0, 1, 15)
console.log(numero)