//ciclo for 
console.log(" -----ciclo for ------")
const fruit=["pear","apples","grape"];

for (let i = 0; i < fruit.length; i++) {
    const element = fruit[i];
    console.log(element);
    
}

// ciclo forEach
console.log(" -----ciclo forEach ------")

fruit.forEach(element => {
    console.log(element);
    
});

//ciclo de un array que cotiene varios objetos
console.log(" -----ciclo un arry que contiene varios objetos ------")
const friends=[
    {
        name: "james",
        profession: "Analist"
    },

    {
        name: "leonardo",
        profession: "Designer"

    }
]

friends.forEach(element => {
    console.log('name  :' +element.name+' profesion : '+element.profession);
});

//funcion hayFruta
function hayFruta(nombre,indice){
    console.log(`la fruta es ${nombre} con el indice ${indice}` );
   
}

//recorremo el arreglo de frutas y le pasamo el nombre y el indice
fruit.forEach((nombre, indice) => hayFruta(nombre,indice));

//creamos un array de objetos 
const frutt2=[
    {
        name: "pear",
        color: "green"
    },
    {
        name: "apple",
        color: "red"
    },
    {
        name: "grape",
        color: "purble"
    },
]

// funcion hayfruta2
function hayFruta2(fruta, indice){
    console.log(`el nombre es ${fruta.name} y el color es ${fruta.color}`);
}

// pasamos el nombre a travez de ciclo
frutt2.forEach((nombre, indice)=> hayFruta2(nombre,indice) );