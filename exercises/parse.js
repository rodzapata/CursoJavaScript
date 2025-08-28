// Simulación de respuesta de una API

let response = '{"id":101,"cliente":"Ana","total":5000}';

let factura = JSON.parse(response);
console.log(factura.id);
console.log(factura.cliente);

//localStorage

// Supongamos que ya guardamos
/*
localStorage.setItem("usuario", '{"nombre":"Juan","rol":"admin"}');

// Recuperar el dato
let usuario = JSON.parse(localStorage.getItem("usuario"));

console.log(usuario.nombre); // "Juan"
console.log(usuario.rol);    // "admin"
*/