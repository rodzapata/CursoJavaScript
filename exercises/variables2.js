let annoActual = new Date().getFullYear()
let annoNacimiento = 1975
console.log(annoActual);
console.log(`la edad es ${calcularEdad()}`)

function calcularEdad() {
    return annoActual - annoNacimiento;
}

valor = 2.2430
valor2 = Math.round(valor * 100) / 100;
console.log(valor2);
