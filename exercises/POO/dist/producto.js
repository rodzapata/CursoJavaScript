"use strict";
class Producto {
    codigo;
    nombre;
    precioBase;
    constructor(codigo, nombre, precioBase) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precioBase = precioBase;
    }
    getPrecio() {
        return this.precioBase;
    }
}
class ProductoFisico extends Producto {
    pesoKG;
    constructor(codigo, nombre, precioBase, pesoKG) {
        super(codigo, nombre, precioBase);
        this.pesoKG = pesoKG;
    }
    getPrecio() {
        return this.precioBase * this.pesoKG;
    }
}
//# sourceMappingURL=producto.js.map