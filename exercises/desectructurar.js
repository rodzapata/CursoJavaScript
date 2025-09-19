const user = {
    firtName: "rodney",
    lastName: "zapata",
    age: 50
}

console.log(user);
const nombre = user.firtName;
const apellido = user.lastName;

console.log(`firtname is ${nombre}`);
console.log(`lastname is ${apellido}`);

console.log("==== desectructuramos el objeto =======")
const { firtName, lastName } = user;
console.log(`el nombres es ${firtName} y el apellido es ${lastName}`);

console.log("=== cambiandole los nombres de la variables");
const { firtName: nomb, lastName: ape } = user;
console.log(`el nombre es ${nomb} y el apellido es ${ape}`);

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

console.log("==== desectructuracion de areglos ====")
const numeros = [10, 20, 30];
const [a, b, c] = numeros;
console.log(a);
console.log(b);
console.log(c);

console.log("==== saltando elementos de un arreglos ====")
const dias = [1, 2, 3, 4, 5, 6, 7];
const [primero, , tercero, , quinto, , septimo] = dias;
console.log(primero);
console.log(tercero)

console.log("==== uso del operador ... rest ====")
const frutas = ["manzana", "pera", "uva", "banana", "piña"];
const [primera, ...resto] = frutas;
console.log(primera);
console.log(resto);
console.log(frutas);

console.log("== intercambiando valores ====t")
let valor_a = 1;
let valor_b = 2
console.log(`valores de a ${valor_a} y b ${valor_b} ante del intercambio`);
[valor_b, valor_a] = [valor_a, valor_b];
console.log(`valores de a ${valor_a} y b ${valor_b} despues del intercambio`);

console.log("== pasar objeto como parametro de una funcion");
function mostrarInfo({ nombre, direccion, edad }) {
    console.log(`nombre es ${nombre}`)
    console.log(`direccion es ${direccion}`)
    console.log(`edad es ${edad}`)
}

const mostrarInfo2 = ({ nombre, direccion, edad }) => {
    console.log(`nombre es ${nombre}`)
    console.log(`direccion es ${direccion}`)
    console.log(`edad es ${edad}`)

};

const persona = {
    nombre: "cecilia Cantillo",
    direccion: "kra 5B No. 56c-93",
    edad: 37
}

mostrarInfo(persona);
mostrarInfo2(persona);

const user2 = {
    name: "rodney",
    lastName: "zapata",
    geo: {
        lat: 2.25,
        log: 26.4
    }
};


const { name, geo: { lat, log } } = user2;

console.log(name);
console.log(lat);


