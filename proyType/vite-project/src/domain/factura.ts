import { Cliente } from './cliente';
import { LineaFactura } from './lineaFactura';

export class Factura {
  private lineas: LineaFactura[] = [];

  constructor(
    public readonly id: string,
    public readonly cliente: Cliente,
    public readonly fecha: Date = new Date()
  ) {}

  agregarLinea(linea: LineaFactura) {
    this.lineas.push(linea);
  }

  get total(): number {
    return this.lineas.reduce((sum, linea) => sum + linea.total, 0);
  }

  get detalles(): LineaFactura[] {
    return this.lineas;
  }
}