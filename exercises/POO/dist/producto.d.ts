declare abstract class Producto {
    codigo: string;
    nombre: string;
    protected precioBase: number;
    constructor(codigo: string, nombre: string, precioBase: number);
    getPrecio(): number;
}
declare class ProductoFisico extends Producto {
    protected pesoKG: number;
    constructor(codigo: string, nombre: string, precioBase: number, pesoKG: number);
    getPrecio(): number;
}
