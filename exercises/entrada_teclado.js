/* instalamos el modulo
npm install prompt-sync
*/

const prompt = require('prompt-sync')();
let nombre = prompt("Digite su nombre: ");
console.log("Su nombre es: " + nombre);

/*

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite su nombre: ', (nombre) => {
  console.log('Su nombre es: ' + nombre);
  rl.close();
});

*/
