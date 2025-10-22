declare class Usuarios {
    private _nombre;
    constructor(nombre: string);
    get nombre(): string;
    saludar(): string;
}
declare const u: Usuarios;
