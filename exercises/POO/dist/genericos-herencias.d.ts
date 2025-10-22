declare abstract class Repositorio<T> {
    protected items: T[];
    constructor();
    agregar(item: T): void;
    obtenerTodos(): T[];
}
declare class Usuario {
    #private;
    constructor(id: number, nombre: string);
    get id(): number;
    get nombre(): string;
    set nombre(nuevoNombre: string);
}
declare class UsuarioRepositorio extends Repositorio<Usuario> {
    buscarPorNombre(nombre: string): Usuario[];
}
declare const repo: UsuarioRepositorio;
