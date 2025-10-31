var EstadoOrden;
(function (EstadoOrden) {
    EstadoOrden[EstadoOrden["PENDIENTE"] = 0] = "PENDIENTE";
    EstadoOrden[EstadoOrden["ENVIADA"] = 1] = "ENVIADA";
    EstadoOrden[EstadoOrden["ENTREGADA"] = 2] = "ENTREGADA";
})(EstadoOrden || (EstadoOrden = {}));
console.log(EstadoOrden.PENDIENTE);
