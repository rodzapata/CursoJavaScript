const numeros = [1, 3, 5, 1, 4];
const numerosUnicos = [...new Set(numeros)];
const total = numerosUnicos.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(`array original ${numeros}`);
console.log(`array unicos ${numerosUnicos}`);
console.log(`el total es array unicos ${total}`)


const usuarios = [
    { id: 1, name: "rodney" },
    { id: 2, name: "cecilia" },
    { id: 1, name: "rodney" }
];

const usuarioUnicos = [...new Map(usuarios.map(u => [u.id, u])).values()]
console.log(usuarios);
console.log(usuarioUnicos);
