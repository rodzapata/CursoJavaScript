class CajaDeTexto {
    private _contenido: string;

    constructor(contenido: string) {
        this._contenido = contenido;

    }
    obtContenido(): string {
        return this._contenido;
    }

}

const texto = new CajaDeTexto("un texto");
console.log(texto.obtContenido());

// generico

class Caja<T> {
    private _contenido: T;

    constructor(contenido: T) {
        this._contenido = contenido;

    }
    obtContenido(): T {
        return this._contenido;
    }

}

const cajaTexto1 = new Caja("soy un texto");
const cajaNumber = new Caja(25);
const cajaBoolean = new Caja(true);
console.log(cajaTexto1.obtContenido());
console.log(cajaNumber.obtContenido());
console.log(cajaBoolean.obtContenido());


