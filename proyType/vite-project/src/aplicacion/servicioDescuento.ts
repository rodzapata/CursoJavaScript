import { ReglaDescuento } from '../domain/descuento';
import { Factura } from '../domain/factura';

export class ServicioDescuento {
  constructor(private regla: ReglaDescuento) {}

  calcularDescuento(factura: Factura): number {
    return this.regla.aplicar(factura);
  }
}