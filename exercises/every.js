const numero = [4, 7, 2, -10, -5];
console.log(numero)
const sonPositivos = numero.every(num => num > 0)
console.log(sonPositivos)


const pagos = [
    { id: 1, estado: "aprobado" },
    { id: 2, estado: "aprobado" },
    { id: 3, estado: "pendiente" }
];
console.log(pagos);
const todoAprobado = pagos.every(pago => pago.estado === "aprobado");
console.log(todoAprobado)

const passwords = ["Clave123!", "Passw0rd$", "1234567"];
console.log(passwords);
const segura = passwords.every(p => p.length > 6 && /\d/.test(p))
console.log(segura);

const rolesUsuario = ["ADMIN", "USER"];
const rolesPermitidos = ["ADMIN", "USER", "SUPERVISOR"];

console.log(rolesPermitidos);
console.log(rolesUsuario);
const accesoValido = rolesUsuario.every(roll => rolesPermitidos.includes(roll));
console.log(accesoValido);