const ventas = [
    { id: 1, cliente: "Juan", cantidad: 2, valorUnitario: 120 },
    { id: 2, cliente: "Ana", cantidad: 2, valorUnitario: 100 },
    { id: 3, cliente: "Pedro", cantidad: 3, valorUnitario: 100 }
];
console.log("======== objeto de ventas =======");
console.log(ventas)
let totalVenta = ventas.reduce((acum, venta) => acum + (venta.cantidad * venta.valorUnitario), 0);
console.log(totalVenta);
console.log("====== totalizadmos las ventas ==========")
console.log(totalVenta)