import { RepositorioFactura } from "../domain/repositorioFactura";
import { Factura } from "../domain/factura";

export class RepositorioFacturaMemoria implements RepositorioFactura {
  private data = new Map<string, Factura>();

  guardar(factura: Factura): void {
    this.data.set(factura.id, factura);
  }

  obtenerPorId(id: string): Factura | null {
    return this.data.get(id) ?? null;
  }
}