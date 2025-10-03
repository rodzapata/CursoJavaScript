"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repositorio {
    items = [];
    agregar(item) {
        this.items.push(item);
    }
    obtenerTodos() {
        return this.items;
    }
}
// ✅ Modelo Usuario con encapsulación y validación
class Usuario {
    _id;
    _nombre;
    constructor(id, nombre) {
        if (id <= 0)
            throw new Error("el no puede ser cero, ni negativo");
        if (nombre.trim().length === 0)
            throw new Error("el campo nombre no puede estar vacio");
        this._id = id;
        this._nombre = nombre;
    }
    //Id solo se consulta no se debe dejar modificar, por eso no tiene Set
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        if (nuevoNombre.trim().length === 0)
            throw new Error("nombre no puede ser vacio");
        this._nombre = nuevoNombre;
    }
}
//# sourceMappingURL=genericos-herencias.js.map