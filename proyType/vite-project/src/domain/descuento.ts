import { Factura } from "./factura";

export interface ReglaDescuento {
  aplicar(factura: Factura): number;
}

