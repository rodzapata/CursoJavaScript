class Personas {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get age(): number {
        return this._age
    }

    set age(newAge: number) {
        if (newAge < 18) {
            throw new Error(`edad ${newAge} no valida menor de edad`)
        }
        this._age = newAge;
    }

    saludar() {
        console.log(`mi nombre es ${this._name} y edad ${this._age}`);
    }
}


const p = new Personas("rodney", 50);
p.saludar(); // Hola, soy Ana...
p.age = 52;
p.saludar(); // Hola, soy Ana...