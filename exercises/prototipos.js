numeros=[2,3,4];

let duplicado=numeros.map(function (x){
    return x*2;
})


let duplicado2=numeros.map((x) => x*2)
console.log(numeros);
console.log(duplicado)
console.log(duplicado2)
