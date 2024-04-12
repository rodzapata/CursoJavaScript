// creamos un objeto User
const User={
    name:"rodney",
    lasName:"zapata",
    hobies:["code","estudy","show tv"],
    age:49
}

//este es un objeto dentro de javascrip
console.log(User);
//convertimos el objeto en un json de intercambio
console.log(JSON.stringify(User));
let otro=JSON.stringify(User);
console.log(otro);

// si queremos ver el nombre de usuario seria asi
console.log(User.name);
console.log(User.hobies);

//lista de amigos
const friend=[
    {
        name:"Marcos",
        profession:"counter"
    },

    {
        name:"Leonardo",
        profession:"develope web"
    },

    {
        name:"joseph",
        profession:"analista"
    }

]

User.friend=friend;
console.log(JSON.stringify(User));

//enviar lista de amigos al DOM de html
/*
<ul>
    <li>marcos</li>
    <li>leonardo</li>
</ul>
*/


let outPut='';
friend.forEach(element => {
    outPut=outPut+`<li>${element.name}</li>`
});


/*
let outPut='';
for (let i = 0; i < friend.length; i++) {
    outPut=outPut+`<li>${friend[i].name}</li>`
    
}
*/
console.log(outPut);

console.log(document.getElementById('people'));
document.getElementById('people').innerHTML=outPut;

//proceso contrario converir un Json en un objeto de Javascript
console.log("-----convertir un Json a un objeto de JavaScrip ----")
const jsonOrig='{"name" : "rodney"}';
console.log(JSON.parse(jsonOrig));