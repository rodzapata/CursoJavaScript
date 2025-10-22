var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(titular, initialDeposit) {
        if (initialDeposit === void 0) { initialDeposit = 0; }
        this.titular = titular;
        this.saldo = initialDeposit;
    }
    CuentaBancaria.prototype.depositar = function (cantidad) {
        if (cantidad <= 0)
            throw new Error("Cantidad inválida");
        this.saldo += cantidad;
    };
    CuentaBancaria.prototype.retirar = function (cantidad) {
        if (cantidad <= 0)
            throw new Error("Cantidad inválida");
        if (cantidad > this.saldo)
            throw new Error("Fondos insuficientes");
        this.saldo -= cantidad;
    };
    CuentaBancaria.prototype.obtenerSaldo = function () {
        return this.saldo;
    };
    return CuentaBancaria;
}());
// Uso
var c = new CuentaBancaria("Rodney", 100);
c.depositar(50);
c.retirar(20);
console.log(c.obtenerSaldo()); // 130
