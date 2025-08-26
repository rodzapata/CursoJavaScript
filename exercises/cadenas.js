let palabra="rodney@serviparamo.co"
console.log("==== contar caracteres de una variable ====")
console.log(palabra.length);

console.log("==== slice() para buscar cadena")
console.log(palabra.slice(0,6));
console.log("correo : ",palabra.slice(0,palabra.indexOf("@")));
console.log("dominio : ",palabra.slice(palabra.indexOf("@")+1));

let tarjeta = "1234567812345678";
console.log("==== ultimos 4 digitos de la tarjeta")
console.log("tarjeta ",tarjeta);
console.log("ultimos 4 digitos",tarjeta.slice(-4))


let nombres=["cecilia","samuel","juan","rodney"];
console.log("===== usando slice() en un array =====")
console.log(nombres);
console.log(nombres.slice(0,2));

console.log("===== usando slice() en un array ultimos 2 valores =====")
console.log(nombres);
console.log(nombres.slice(-2));
