let meses = ["ener", "marzo", "mayo"];
console.log(meses);

console.log("insertamos a febreo en la posicion 1")
meses.splice(1, 0, "febr")
console.log(meses);

console.log("remplazamo  a mayo con abril")
meses.splice(3, 1, "abril");
console.log(meses);

console.log("eliminamos a abril")
meses.splice(3, 1);
console.log(meses);