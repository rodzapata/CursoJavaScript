// persona.ts
class Persona {
  constructor(
    public nombre: string,
    public edad: number
  ) {}

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Uso
const p = new Persona("Ana", 30);
console.log(p.saludar()); // Hola, soy Ana y tengo 30 años.
