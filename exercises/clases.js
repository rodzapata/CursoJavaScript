class Persona {
  #nombre;
  constructor(nombre, edad) {
    (this.#nombre = nombre), (this.edad = edad);
  }
  getNombre() {
    return this.#nombre;
  }
  setNombre(newnombre) {
    this.#nombre = newnombre;
  }

  saludar() {
    console.log(`prueba ${this.#nombre}`);
  }
}

const p1 = new Persona("rodney", 50);
//p1.nombre = "samuel";
p1.setNombre("samuel");
console.log(p1.getNombre());
p1.saludar();

class Developer extends Persona {
  constructor(nombre, edad) {
    super(nombre, edad);
  }
}

console.log("Developer 1");
const dep1 = new Developer("Leonardo", 45);
console.log(dep1.getNombre);
