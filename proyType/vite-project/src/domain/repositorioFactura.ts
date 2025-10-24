import { Factura } from "./factura";

export interface RepositorioFactura {
  guardar(factura: Factura): void;
  obtenerPorId(id: string): Factura | null;
}