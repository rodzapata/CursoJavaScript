abstract class Repositorio<T> {
    protected items: T[] = [];

    agregar(item: T): void {
        this.items.push(item);
    }

    obtenerTodos(): T[] {
        return this.items;
    }

}

// ✅ Modelo Usuario con encapsulación y validación
class Usuario {
    private _id: number;
    private _nombre: string;

    constructor(id: number, nombre: string) {
        if (id <= 0) throw new Error("el no puede ser cero, ni negativo");
        if (nombre.trim().length === 0) throw new Error("el campo nombre no puede estar vacio");

        this._id = id;
        this._nombre = nombre;

    }
    //Id solo se consulta no se debe dejar modificar, por eso no tiene Set
    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nuevoNombre: string) {
        if (nuevoNombre.trim().length === 0) throw new Error("nombre no puede ser vacio");
        this._nombre = nuevoNombre;
    }
}