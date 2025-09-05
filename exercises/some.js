const rolesUsuario = ["INVITADO", "USER"];
const rolesPermitidos = ["ADMIN", "USER", "SUPERVISOR"];

const tieneAcceso = rolesUsuario.some(rol => rolesPermitidos.includes(rol));

console.log(tieneAcceso); // true (porque tiene "USER")
