import { Producto } from "./producto";

export class LineaFactura {
  constructor(
    public producto: Producto,
    public cantidad: number
  ) {}

  get total(): number {
    return this.producto.precio * this.cantidad;
  }
}