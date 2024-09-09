/*
    Test 1: Easy Level
    Scenario: Clone a Basic Object
    You have a simple Person object with name and age properties. 
    Implement the Prototype Pattern to clone this object and modify the clone's properties.
*/

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    clone() {
        return new Person(this.name, this.age)
    }
}

const chi = new Person('Chi', 22)
const ha = chi.clone()
ha.name = 'Ha'

// console.log('Chi :::', chi)
// console.log('Ha :::', ha)

/*
    Test 2: Medium Level
    Scenario: Clone an Object with Nested Objects
    You have a Car object that contains a nested Engine object. Implement the Prototype Pattern to clone the Car, and make sure the clone contains a copy of the Engine, not just a reference to the original.

    Task
    Create Car and Engine classes.
    Implement deep cloning for both objects using the clone() method.
    Modify the cloned car’s engine without affecting the original car's engine.
*/

class Engine {
    constructor(name, _class) {
        this.name = name
        this._class = _class
    }

    clone() {
        return new Engine(this.name, this._class)
    }
}

class Car {
    constructor(name, engine) {
        this.name = name
        this.engine = engine
    }

    clone() {
        return new Car(this.name, this.engine.clone()) // If not clone child will make it change prototype hehehe
    }
}

const engine = new Engine('V8', 'C')
const bmw = new Car('BMW', engine)
const vinfast = bmw.clone()
vinfast.engine._class = 'D'

console.log('BMW :::', bmw)
console.log('Vinfast :::', vinfast)

/*
    Test 3: Hard Level
    Scenario: Clone an Object with Arrays and Multiple Nested Levels
    You have a Computer object that contains nested objects and an array of software installed.
    Implement deep cloning for the entire structure, including arrays, and nested objects.

    Task
    Create a Computer class with nested CPU and Software objects, and an array of software installed.
    Implement deep cloning for the entire object, including arrays and nested objects.
    Clone the original computer, modify some properties of the clone, and ensure the original is not affected.
*/

class CPU {
    constructor(model, core) {
        this.model = model
        this.core = core
    }

    clone() {
        return new CPU(this.model, this.core)
    }
}

class Software {
    constructor(name, version) {
        this.name = name
        this.version = version
    }

    clone() {
        return new Software(this.name, this.version)
    }
}

class Computer2 {
    constructor(brand, cpu, softwares) {
        this.brand = brand
        this.cpu = cpu
        this.softwares = softwares
    }

    clone() {
        const softwaresClone = this.softwares.map(software =>  software.clone())
        return new Computer2(this.brand, this.cpu.clone(), softwaresClone)
    }
}

const cpu = new CPU('Intel', '8 cores')
const softwares = [
    new Software('LOL', '1.2.3'),
    new Software('vscode', '7.0.0')
]
const softwares2 = [
    new Software('excel', '1.2.3'),
    new Software('word', '7.0.0')
]
const macbook = new Computer2('MAC', cpu, softwares)
const ubuntu = macbook.clone()
ubuntu.brand = 'ubuntu'
ubuntu.softwares = softwares2

console.log('Macbook :::', macbook)
console.log('Ubuntu :::', ubuntu)
