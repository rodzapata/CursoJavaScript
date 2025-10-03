abstract class Producto {
    public codigo: string;
    public nombre: string;
    protected precioBase: number;

    constructor(codigo: string, nombre: string, precioBase: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precioBase = precioBase;

    }

    getPrecio(): number {
        return this.precioBase;
    }
}

class ProductoFisico extends Producto {
    protected pesoKG: number;

    constructor(codigo: string, nombre: string, precioBase: number, pesoKG: number) {
        super(codigo, nombre, precioBase);
        this.pesoKG = pesoKG;
    }

    getPrecio(): number {
        return this.precioBase * this.pesoKG;
    }
}


