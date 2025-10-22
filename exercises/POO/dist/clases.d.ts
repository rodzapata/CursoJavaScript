declare class Personas {
    private _name;
    private _age;
    constructor(name: string, age: number);
    get name(): string;
    set name(newName: string);
    get age(): number;
    set age(newAge: number);
    saludar(): void;
}
declare const p: Personas;
