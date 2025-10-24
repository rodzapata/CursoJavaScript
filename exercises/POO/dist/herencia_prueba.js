"use strict";
class Usuarios {
    //#nombre: string;
    _nombre;
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    /*
        set nombre(valor: string) {
            this.#nombre = valor;
        }
    */
    saludar() {
        return "saludando ...";
    }
}
//prueba de instancia
const u = new Usuarios("rodney");
//u._nombre="modifica el nombre" ;
console.log(u.nombre);
console.log(u.saludar());
Usuarios.prototype.saludar = function () { return "modificando saludo"; };
console.log(u.saludar());
//# sourceMappingURL=herencia_prueba.js.map