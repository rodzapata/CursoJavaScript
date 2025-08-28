console.log("===== validacion de correos =========");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const correos = ["usuario@mail.com", "usuario@", "test@dominio.co"];

correos.forEach(correo => {
  console.log(`${correo} es válido?`, emailRegex.test(correo));
});


console.log("=== Regla: mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un símbolo. ==");
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const passwords = ["Hola123!", "123456", "Password"];

passwords.forEach(pass => {
  console.log(`${pass} es válido?`, passwordRegex.test(pass));
});


console.log("=== Regla: validar numero de telefono, debe empezar por 3 y tener 10 numeros");
const phoneRegex = /^3\d{9}$/; // Debe empezar con 3 y tener 10 dígitos

const telefonos = ["3104567890", "123456789", "3509876543"];

telefonos.forEach(tel => {
  console.log(`${tel} es válido?`, phoneRegex.test(tel));
});


console.log("==== Eliminar espacios extra en textos ====")
const texto = "   Hola    mundo   con   espacios   ";
const limpio = texto.replace(/\s+/g, " ").trim();

console.log("Original:", texto);
console.log("Limpio:", limpio);

console.log("==== Extraer solo números de una cadena (ejemplo facturación) =====")
const factura = "Factura N°: 2025-00123";
const numero = factura.match(/\d+/g).join("");

console.log("Número de factura:", numero);

console.log("==== valida URL ========")
const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,}(\/\S*)?$/i;

const urls = ["https://google.com", "ftp://test.com", "http://miweb.co/servicio"];

urls.forEach(url => {
  console.log(`${url} es válido?`, urlRegex.test(url));
});


