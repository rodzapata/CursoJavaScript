let name = "rodney ";
let lastName = "Zapata";
let age = 49;

console.log(name);
console.log(lastName);
console.log(age);

//creamos la variable utilizando POO
let word = new String("my firt word");
console.log(word);

let wordMayuscula = word.toUpperCase();
console.log(wordMayuscula);

let nameMayuscula = name.toUpperCase();
console.log(nameMayuscula);

//converir una frase en un arreglo
arreglo = word.split(" ");
console.log(arreglo);

//interpolacion
console.log(`mi nombre es ${name}`);

// ahora enviamos el resultado de una variable al cuerpo de documento

let setenceEnglish = "my firts app in Javascript";
//document.write(setenceEnglish);
//document.writeln(setenceEnglish);
//enviamos mensaje a travez de una ventana modal
alert(setenceEnglish);

//condicional

let num1 = 10;
let num2 = -15;
if (num1 > num2) {
  document.writeln(`el numero ${num1} es mayor al numero ${num2}`);
} else {
  document.writeln(`el numero ${num1} es menor al numero ${num2}`);
}
if (num1 > 0 && num2 > 0) {
  document.writeln("ambos son posiivos");
}

if (num1 > 0 || num2 > 0) {
  document.writeln("por lo meno uno es positivo");
}


//entrada de datos desde el navegador
let nameEnter;
nameEnter = prompt("Digite su nombre");
document.write(`su nombre es  ${nameEnter}`);

//funcion saludar que es llamada desde el html
const saludo=document.getElementById('saludar');
saludo.onclick=function(){
  let nombreTeclado=prompt('Digite su  nombre');
  alert(`Hola ${nombreTeclado},  encantado de verte!`);
}

