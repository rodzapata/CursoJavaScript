
let numeros=[4,9,16]


let duplicado=numeros.map((x)=> x*2);
let raices=numeros.map(Math.sqrt);
console.log(numeros)
console.log(duplicado);
console.log(raices);

let valor=numeros.at(2);
console.log(valor);

numeros.pop();
console.log(numeros); //nos muestra [4,9]

numeros.push(25);
console.log(numeros);


numeros.forEach((elemento)=> console.log(elemento));

let frutas=['manzana','pera','naranja','uvas']
let frutas2=frutas.slice(1,3);
console.log(frutas)
console.log(frutas2)

//nos crea un array numero2[9,16]

