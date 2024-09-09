/*
    Test 1: Easy level
    Scenario: Create a Builder for a Pizza Order
    Imagine you need to create a builder for a Pizza object. The pizza has the following properties:

    size: small, medium, or large (required)
    crust: thin, thick (optional)
    cheese: boolean (optional)
    toppings: an array of strings (optional)
*/

class PizzaOrder {
    constructor(builder) {
        this.size = builder.size
        this.crust = builder.crust
        this.cheese = builder.cheese
        this.toppings = builder.toppings
    }
}

class PizzaOrderBuilder {
    constructor(size) {
        this.size = size
    }

    withCrust(crust) {
        this.crust = crust
        return this
    }

    withCheese(cheese) {
        this.cheese = cheese
        return this
    }

    withToppings(toppings) {
        this.toppings = toppings
        return this
    }

    build() {
        return new PizzaOrder(this)
    }
}

// Test
const pizzaOrderBuilder = new PizzaOrderBuilder('large')
const pizza = pizzaOrderBuilder
    .withCrust('thin')
    .withCheese(true)
    .withToppings(['sugar', 'salt'])
    .build()
// console.log('Pizza :::', pizza)

/*
    Test 2: Medium
    Scenario: Create a Builder for a House
    Now, let’s create a House object. The house has the following attributes:

    floors: number of floors (required)
    hasGarage: boolean (optional)
    hasGarden: boolean (optional)
    color: string (optional)
*/

class House {
    constructor(builder) {
        this.floors = builder.floors
        this.hasGarage = builder.hasGarage
        this.hasGarden = builder.hasGarden
        this.color = builder.color
    }
}

class HouseBuilder {
    constructor(floors) {
        this.floors = floors
    }

    withHasGarage(hasGarage) {
        this.hasGarage = hasGarage
        return this
    }

    withHasGarden(hasGarden) {
        this.hasGarden = hasGarden
        return this
    }

    withColor(color) {
        this.color = color
        return this
    }

    build() {
        return new House(this)
    }
}

const houseBuilder = new HouseBuilder(4)
const house = houseBuilder
    .withHasGarage(true)
    .withColor('red')
    .build()
// console.log('House :::', house)

/*
    Test 3: Hard Level
    Scenario: Build a Computer
    The Computer object has the following attributes:

    cpu: string (required)
    gpu: string (optional)
    ram: string (optional)
    storage: string (optional)
    You will:

    Create a Builder class to build the Computer object.
    Create a Director class to instruct the builder and define specific computer configurations.
    Use the Director to build a high-end and a budget computer.
*/

class Computer {
    constructor(builder) {
        this.cpu = builder.cpu
        this.gpu = builder.gpu
        this.ram = builder.ram
        this.storage = builder.storage
    }
}

class ComputerBuilder {
    constructor(cpu) {
        this.cpu = cpu
    }

    withGPU(gpu) {
        this.gpu = gpu
        return this
    }

    withRAM(ram) {
        this.ram = ram
        return this
    }

    withStorage(storage) {
        this.storage = storage
        return this
    }

    build() {
        return new Computer(this)
    }
}

class ComputerDirector {
    constructor(computerBuilder) {
        this.computerBuilder = computerBuilder
    }

    handleBuild(price) {
        if (price > 100)
            return this.buildVIP()
        return this.buildCheap()
    }

    buildCheap() {
        return this.computerBuilder
            .withRAM('4 GB')
            .withStorage('512 GB')
            .build()
    }

    buildVIP() {
        return this.computerBuilder
            .withRAM('32 GB')
            .withStorage('1 TB')
            .build()
    }
}

const computerBuilder = new ComputerBuilder('4 core')
const computerDirector = new ComputerDirector(computerBuilder)

const price = 101
const computer = computerDirector.handleBuild(price)
console.log('Computer :::', computer)
