// Clase abstracta genérica
class Repositorio {
  constructor() {
    if (new.target === Repositorio) {
      throw new Error("No se puede instanciar una clase abstracta directamente");
    }
    this.items = [];
  }

  agregar(item) {
    this.items.push(item);
  }

  obtenerTodos() {
    return this.items;
  }
}

// ✅ Modelo Usuario con encapsulación y validación
class Usuario {
  #id;
  #nombre;

  constructor(id, nombre) {
    if (id <= 0) throw new Error("El id no puede ser cero ni negativo");
    if (nombre.trim().length === 0) throw new Error("El campo nombre no puede estar vacío");

    this.#id = id;
    this.#nombre = nombre;
  }

  // id solo se consulta
  get id() {
    return this.#id;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.trim().length === 0) throw new Error("El nombre no puede ser vacío");
    this.#nombre = nuevoNombre;
  }
}

// ✅ Ejemplo de herencia
class UsuarioRepositorio extends Repositorio {
  buscarPorNombre(nombre) {
    return this.items.filter(u => u.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }
}

// === Ejemplo de uso ===
const repo = new UsuarioRepositorio();
repo.agregar(new Usuario(1, "Rodney"));
repo.agregar(new Usuario(2, "Ana"));

console.log(repo.obtenerTodos());
console.log(repo.buscarPorNombre("rod"));
