class CuentaBancaria {
  private saldo: number;

  constructor(private titular: string, initialDeposit = 0) {
    this.saldo = initialDeposit;
  }

  depositar(cantidad: number): void {
    if (cantidad <= 0) throw new Error("Cantidad inválida");
    this.saldo += cantidad;
  }

  retirar(cantidad: number): void {
    if (cantidad <= 0) throw new Error("Cantidad inválida");
    if (cantidad > this.saldo) throw new Error("Fondos insuficientes");
    this.saldo -= cantidad;
  }

  obtenerSaldo(): number {
    return this.saldo;
  }
}

// Uso
const c = new CuentaBancaria("Rodney", 100);
c.depositar(50);
c.retirar(20);
console.log(c.obtenerSaldo()); // 130
