import { RepositorioFactura } from "../domain/repositorioFactura";
import { Factura } from "../domain/factura";

export class ServicioFacturacion {
  constructor(private repo: RepositorioFactura) {}

  procesarFactura(factura: Factura) {
    // lógica de negocio
    this.repo.guardar(factura);
  }
}