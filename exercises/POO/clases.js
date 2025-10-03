"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge < 18) {
            throw new Error(`edad ${newAge} no valida menor de edad`);
        }
        this._age = newAge;
    }
    saludar() {
        console.log(`mi nombre es ${this._name} y edad ${this._age}`);
    }
}
const p = new Persona("rodney", 50);
p.saludar(); // Hola, soy Ana...
p.age = 51;
p.saludar(); // Hola, soy Ana...
//# sourceMappingURL=clases.js.map