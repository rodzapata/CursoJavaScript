declare class CajaDeTexto {
    private _contenido;
    constructor(contenido: string);
    obtContenido(): string;
}
declare const texto: CajaDeTexto;
declare class Caja<T> {
    private _contenido;
    constructor(contenido: T);
    obtContenido(): T;
}
declare const cajaTexto1: Caja<string>;
declare const cajaNumber: Caja<number>;
declare const cajaBoolean: Caja<boolean>;
