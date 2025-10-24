import { ReglaDescuento } from "./descuento";
import { Factura } from "./factura";

export class DescuentoPorMonto implements ReglaDescuento {
  constructor(private umbral: number, private porcentaje: number) {}

  aplicar(factura: Factura): number {
    return factura.total > this.umbral
      ? factura.total * (this.porcentaje / 100)
      : 0;
  }
}