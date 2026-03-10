//gudarda datos
localStorage.setItem("usuario", "rodney");

//obtener datos
const datos = localStorage.getItem("usuario");
console.log(datos);

//eliminamos el datos
localStorage.removeItem("usuario");

//GUARDAMOS OBJETO PERSONA 
const user = {
    "name": "rodney",
    "lastName": "zapata",
    "age": 51
}

//guardamos el objeto 
localStorage.setItem("user", JSON.stringify(user));

//obtemos el dato
const datoUser = JSON.parse(localStorage.getItem("user"));
console.log(datoUser);

