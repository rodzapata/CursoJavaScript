console.log("=== desectructuracion anidada ===")
const usuarios = {
    id: 1,
    info: {
        nombreUser: "rodney zapata",
        edadUser: 50
    }
}

const { id, info: { nombreUser, edadUser } } = usuarios;
console.log(`id de usuario: ${id}`);
console.log(`usuario nombre: ${nombreUser} y su edad es ${edadUser}`);


