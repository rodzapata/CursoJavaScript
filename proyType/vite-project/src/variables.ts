import { Cliente } from "./domain/cliente"
import { Producto } from "./domain/producto";
import { LineaFactura } from "./domain/lineaFactura";
import { Factura } from "./domain/factura";
import { RepositorioFacturaMemoria } from "./infraestructura/repositorioFacturaMemoria";
import { ServicioFacturacion } from "./aplicacion/servicioFacturacion";
// index.ts


const cliente = new Cliente('1', 'Ana Gómez', 'ana@example.com');
const producto1 = new Producto('p1', 'Monitor', 800);
const producto2 = new Producto('p2', 'Teclado', 200);

const factura = new Factura('f1', cliente);
factura.agregarLinea(new LineaFactura(producto1, 1));
factura.agregarLinea(new LineaFactura(producto2, 2));

const repo = new RepositorioFacturaMemoria();
const servicio = new ServicioFacturacion(repo);

servicio.procesarFactura(factura);

console.log(`Total factura: $${factura.total}`);
