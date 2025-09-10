const numeros = [1, 3, 4, 1, 5, 7, 5];
console.log(numeros);

const setNumeros = new Set(numeros);
console.log(setNumeros);

setNumeros.add(25);
console.log(setNumeros);

console.log("====recorremos con of el Set =====")
for (let num of setNumeros) {
    console.log(num);
}

console.log("====recorremos con ForEach del Set =====")
setNumeros.forEach((num) => console.log(num));

console.log("==== eliminamos el numero 3 del Set =====")
setNumeros.delete(3)
console.log(setNumeros);

console.log("==== verificamos que un valor 25 exista usando has ====")
console.log(setNumeros.has(25));

console.log("==== clear() limpimamos todo el Set ====")
setNumeros.clear()
console.log(setNumeros);

const setFrutas = new Set(["manzana", "pera", "banana"]);
console.log(setFrutas);

const arraySetFrutas = [...setFrutas];
console.log(arraySetFrutas);
