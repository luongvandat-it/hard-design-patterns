/*
    Test 1: Easy Level
    Scenario: Simple Shape Factory
    You need to create a Shape Factory that can produce different types of shapes (e.g., Circle, Square, Rectangle). Each shape should have a method to calculate its area. The factory should return the appropriate shape object based on input.

    Task
    Create a ShapeFactory class that can create objects for Circle, Square, and Rectangle.
    Implement the area() method in each shape to calculate the area.
    The factory should take the type of shape and return the correct instance.
*/

// Factory Method Pattern

class Shape {
    draw() {
        throw new Error('You must implement the draw method');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing a Circle');
    }
}

class Square extends Shape {
    draw() {
        console.log('Drawing a Square');
    }
}

class ShapeFactory {
    createShape() {
        throw new Error('You must implement the createShape method');
    }
}

class CircleFactory extends ShapeFactory {
    createShape() {
        return new Circle();
    }
}

class SquareFactory extends ShapeFactory {
    createShape() {
        return new Square();
    }
}

// Usage
const circleFactory = new CircleFactory();
const shape1 = circleFactory.createShape();
shape1.draw();  // Output: Drawing a Circle

const squareFactory = new SquareFactory();
const shape2 = squareFactory.createShape();
shape2.draw();  // Output: Drawing a Square

// const circle = ShapeFactory.create('Circle').area()
// const rectangle = ShapeFactory.create('Rectangle').area()
// const square = ShapeFactory.create('Square').area()
// const squareeee = ShapeFactory.create('Squareeee')

/*
    Test 2: Medium Level
    Scenario: Animal Factory with Interface
    You are building an Animal Factory that can create different types of animals (e.g., Dog, Cat, Bird). Each animal should have a speak() method to output the sound it makes. The factory should return an appropriate animal object that conforms to an Animal interface.

    Task
    Create an Animal interface that each animal class should implement.
    Implement concrete animal classes: Dog, Cat, Bird, each with a speak() method.
    Create an AnimalFactory that produces the correct animal object based on input.
    Use the speak() method for each created animal object.
*/
// Medium: Animal Interface
class Animal {
    speak() {
        throw new Error('This method should be overridden');
    }
}

// Medium: Dog class
class Dog extends Animal {
    speak() {
        return 'Woof!';
    }
}

// Medium: Cat class
class Cat extends Animal {
    speak() {
        return 'Meow!';
    }
}

// Medium: Bird class
class Bird extends Animal {
    speak() {
        return 'Chirp!';
    }
}

// Medium: AnimalFactory class
class AnimalFactory {
    static createAnimal(type) {
        switch (type) {
            case 'dog':
                return new Dog();
            case 'cat':
                return new Cat();
            case 'bird':
                return new Bird();
            default:
                throw new Error('Unknown animal type');
        }
    }
}

// Test Code
const dog = AnimalFactory.createAnimal('dog');
const cat = AnimalFactory.createAnimal('cat');
const bird = AnimalFactory.createAnimal('bird');

// console.log(dog.speak());  // Output: 'Woof!'
// console.log(cat.speak());  // Output: 'Meow!'
// console.log(bird.speak());  // Output: 'Chirp!'

/*
    Test 3: Hard Level
    Scenario: Transport Factory with Dynamic Parameters
    You need to create a Transport Factory that can create different types of transportation (e.g., Car, Bike, Airplane). 
    Each transport has specific properties (e.g., Car has seats and fuel, Bike has type, and Airplane has wingspan). The factory should dynamically determine which parameters to use when creating each transport type.

    Task
    Create a Transport base class that other transport types inherit from.
    Implement Car, Bike, and Airplane classes with specific properties.
    Create a TransportFactory that can handle multiple types of transports and initialize each type with dynamic parameters.
    Use the factory to create instances of each transport and access their properties.
*/

class Transport {
    constructor(type) {
        this.type = type
    }

    getInfo() {
        return `This is a ${this.type}`
    }
}

class TransportFactory {
    static createTransport(type, params) {
        switch (type) {
            case 'car':
                return new Car(params.seats, params.fuel)
            case 'bike':
                return new Bike(params.bikeType)
            case 'airplane':
                return new Airplane(params.wingspan)
            default:
                throw new Error('not match')
        }
    }
}

class Car extends Transport {
    constructor(seats, fuel) {
        super('Car')
        this.seats = seats
        this.fuel = fuel
    }

    getInfo() {
        console.log(`${super.getInfo()} have ${this.seats} seats and ${this.fuel} fuel`)
    }
}

class Bike extends Transport {
    constructor(typeBike) {
        super('Bike')
        this.typeBike = typeBike
    }

    getInfo() {
        console.log(`${super.getInfo()} have ${this.typeBike} type`)
    }
}

class Airplane extends Transport {
    constructor(wingspan) {
        super('Airplane')
        this.wingspan = wingspan
    }

    getInfo() {
        console.log(`${super.getInfo()} have ${this.wingspan} wingspan`)
    }
}

// Test Code
const car = TransportFactory.createTransport('car', { seats: 4, fuel: 'gasoline' });
const bike = TransportFactory.createTransport('bike', { bikeType: 'mountain' });
const airplane = TransportFactory.createTransport('airplane', { wingspan: 50 });

console.log(car.getInfo());      // Output: 'This is a Car with 4 seats, runs on gasoline'
console.log(bike.getInfo());     // Output: 'This is a Bike, it's a mountain bike'
console.log(airplane.getInfo()); // Output: 'This is an Airplane with a wingspan of 50 meters'
