"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CajaDeTexto {
    _contenido;
    constructor(contenido) {
        this._contenido = contenido;
    }
    obtContenido() {
        return this._contenido;
    }
}
const texto = new CajaDeTexto("un texto");
console.log(texto.obtContenido());
// generico
class Caja {
    _contenido;
    constructor(contenido) {
        this._contenido = contenido;
    }
    obtContenido() {
        return this._contenido;
    }
}
const cajaTexto1 = new Caja("soy un texto");
const cajaNumber = new Caja(25);
const cajaBoolean = new Caja(true);
console.log(cajaTexto1.obtContenido());
console.log(cajaNumber.obtContenido());
console.log(cajaBoolean.obtContenido());
//# sourceMappingURL=genericos.js.map